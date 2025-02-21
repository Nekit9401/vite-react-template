import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const isLastStep = activeIndex === steps.length - 1;
	const isFirstStep = activeIndex === 0;

	const setClassName = (idx, activeIndex) => {
		let className = styles['steps-item'];
		if (idx === activeIndex) className += ` ${styles.active}`;
		if (idx <= activeIndex) className += ` ${styles.done}`;
		return className;
	};

	const clickBack = () => {
		setActiveIndex((idx) => idx - 1);
	};
	const clickNext = () => {
		setActiveIndex((idx) => idx + 1);
	};

	const clickToStart = () => {
		setActiveIndex(0);
	};

	const clickOnStep = (idx) => {
		setActiveIndex(idx);
	};

	return (
		<>
			<div className={styles.container}>
				<div className={styles.card}>
					<h1>Инструкция по готовке пельменей</h1>
					<div className={styles.steps}>
						<div className={styles['steps-content']}>
							{steps[activeIndex].content}
						</div>
						<ul className={styles['steps-list']}>
							{steps.map(({ id, title }, idx) => (
								<li key={id} className={setClassName(idx, activeIndex)}>
									<button
										className={styles['steps-item-button']}
										onClick={() => clickOnStep(idx)}
									>
										{idx + 1}
									</button>
									{title}
								</li>
							))}
						</ul>
						<div className={styles['buttons-container']}>
							<button
								className={styles.button}
								onClick={clickBack}
								disabled={isFirstStep ? true : false}
							>
								Назад
							</button>
							<button
								className={styles.button}
								onClick={isLastStep ? clickToStart : clickNext}
							>
								{isLastStep ? 'Начать сначала' : 'Далее'}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
