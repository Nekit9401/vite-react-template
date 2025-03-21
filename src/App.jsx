import * as yup from 'yup';
import { useState } from 'react';
import styles from './app.module.css';
import { useStore } from './hooks/useStore';

const sendData = (formData) => {
	console.log(formData);
};

const emailChangeScheme = yup
	.string()
	.matches(
		/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
		'Некорректный Email. Email должен иметь вид test@example.com',
	)
	.max(50, 'Недопустимый Email. Длина не может превышать 50 символов');

const passwordChangeScheme = yup
	.string()
	.matches(
		/^[\w_]*$/,
		'Некорректный пароль. Пароль может состоять из букв, цифр и нижннего подчеркивания.',
	)
	.min(8, 'Некорректный пароль. Минимальная длина пароля - 8 символов.');

const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null;

	try {
		scheme.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		errorMessage = errors.join('\n');
	}

	return errorMessage;
};

export const App = () => {
	const { getState, updateState } = useStore();
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);
	const [repeatPasswordError, setRepeatPasswordError] = useState(null);
	const [isBlur, setIsBlur] = useState(null);

	const { email, password, repeatPassword } = getState;
	const currentEmail = getState().email;

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
	};

	const onBlur = () => {
		setIsBlur(false);
	};

	const onEmailChange = ({ target }) => {
		setIsBlur(true);
		updateState(target.name, target.value);

		const error = validateAndGetErrorMessage(emailChangeScheme, target.value);

		setEmailError(error);
	};

	const onPasswordChange = ({ target }) => {
		updateState(target.name, target.value);

		const error = validateAndGetErrorMessage(passwordChangeScheme, target.value);

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
