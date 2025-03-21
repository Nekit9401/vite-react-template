import { useState } from 'react';
import styles from './app.module.css';
import { useStore } from './hooks/useStore';

const sendData = (formData) => {
	console.log(formData);
};

export const App = () => {
	const { getState, updateState } = useStore();
	const [emailError, setEmailError] = useState(null);
	const [emailLengthError, setEmailLengthError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [repeatPasswordError, setRepeatPasswordError] = useState(null);
	const [isBlur, setIsBlur] = useState(null);

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const { email, password, repeatPassword } = getState;
	const currentEmail = getState().email;

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	const onEmailChange = ({ target }) => {
		setIsBlur(true);
		updateState(target.name, target.value);

		let error = null;
		let errorLenght = null;

		if (!emailRegex.test(target.value) && target.value.length > 0) {
			error = 'Некорректный Email. Email должен иметь вид test@example.com';
		}
		if (target.value.length > 50) {
			errorLenght = 'Недопустимый Email. Длина не может превышать 50 символов';
		}

		setEmailError(error);
		setEmailLengthError(errorLenght);
	};

	const onBlur = () => {
		setIsBlur(false);
	};

	const onPasswordChange = ({ target }) => {
		updateState(target.name, target.value);

		let error = null;

		if (!/^[\w_]*$/.test(target.value)) {
			error =
				'Некорректный пароль. Пароль может состоять из букв, цифр и нижннего подчеркивания.';
		} else if (target.value.length < 8) {
			error = 'Некорректный пароль. Минимальная длина пароля - 8 символов.';
		}

		const currentRepeatPassword = getState().repeatPassword;
		if (currentRepeatPassword && target.value !== currentRepeatPassword) {
			setRepeatPasswordError('Пароли не совпадают.');
		} else {
			setRepeatPasswordError(null);
		}

		setPasswordError(error);
	};

	const onRepeatPasswortChange = ({ target }) => {
		updateState(target.name, target.value);
		let error = null;

		const currentPasword = getState().password;

		if (target.value !== currentPasword) {
			error = 'Пароли не совпадают.';
		} else {
			error = null;
		}

		setRepeatPasswordError(error);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="Email"
					onChange={onEmailChange}
					onBlur={onBlur}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="Пароль"
					onChange={onPasswordChange}
				/>
				<input
					type="password"
					name="repeatPassword"
					value={repeatPassword}
					placeholder="Повторите пароль"
					onChange={onRepeatPasswortChange}
				/>
				<button
					type="submit"
					disabled={
						emailError !== null ||
						emailLengthError !== null ||
						passwordError !== null ||
						repeatPasswordError !== null ||
						getState().email.length < 1 ||
						getState().password.length < 1 ||
						getState().repeatPassword.length < 1
					}
				>
					Регистрация
				</button>
				{!isBlur && currentEmail.length > 0 && (
					<div className={styles.errorLabel}>{emailError}</div>
				)}
				{emailLengthError && (
					<div className={styles.errorLabel}>{emailLengthError}</div>
				)}
				{passwordError && (
					<div className={styles.errorLabel}>{passwordError}</div>
				)}
				{repeatPasswordError && (
					<div className={styles.errorLabel}>{repeatPasswordError}</div>
				)}
			</form>
		</>
	);
};
