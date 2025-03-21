import * as yup from 'yup';
import styles from './app.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const fieldsScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
			'Некорректный Email. Email должен иметь вид test@example.com',
		)
		.max(50, 'Недопустимый Email. Длина не может превышать 50 символов'),
	password: yup
		.string()
		.matches(
			/^[\w_]*$/,
			'Некорректный пароль. Пароль может состоять из букв, цифр и нижннего подчеркивания.',
		)
		.min(8, 'Некорректный пароль. Минимальная длина пароля - 8 символов.'),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			repeatPassword: '',
		},
		resolver: yupResolver(fieldsScheme),
	});

	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const repeatPasswordError = errors.repeatPassword?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					{...register('email')}
				/>
				<input
					type="password"
					name="password"
					placeholder="Пароль"
					{...register('password')}
				/>
				<input
					type="password"
					name="repeatPassword"
					placeholder="Повторите пароль"
					{...register('repeatPassword')}
				/>
				<button
					type="submit"
					disabled={!!emailError || !!passwordError || !!repeatPasswordError}
				>
					Регистрация
				</button>
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
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
