import { useState } from 'react';
import styles from './app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');
	const [isResultOnDisplay, setIsResultOnDisplay] = useState(false);

	const buttons = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '=', '0', 'C'];

	const calcResult = (operator) => {
		switch (operator) {
			case '+':
				return Number(operand1) + Number(operand2);
			case '-':
				return Number(operand1) - Number(operand2);
		}
	};

	const handleButtonClick = (value) => {
		if (value === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setResult('');
			setIsResultOnDisplay(false);
		} else if (value === '+' || value === '-') {
			if (isResultOnDisplay) {
				setOperand1(String(result));
				setIsResultOnDisplay(false);
				setOperator(value);
			}
			if (operand1 && !operator) {
				setOperator(value);
			}
		} else if (value === '=') {
			if (operand1 && operand2) {
				setResult(calcResult(operator));
				setIsResultOnDisplay(true);
				setOperand1('');
				setOperand2('');
				setOperator('');
			}
		} else if (value === '0') {
			if (operand1 && operand2) {
				setOperand2((op2) => op2 + value);
			} else if (operand1 && !operator) {
				setOperand1((op1) => op1 + value);
			}
		} else {
			if (isResultOnDisplay) {
				setResult('');
				setIsResultOnDisplay(false);
				setOperand1((op1) => op1 + value);
			} else {
				if (!operator) {
					setOperand1((op1) => op1 + value);
				}
				if (operator) {
					setOperand2((op2) => op2 + value);
				}
			}
		}
	};

	return (
		<>
			<div className={styles.calculator}>
				<div className={`${styles.display} ${isResultOnDisplay ? styles.result : ''}`}>
					{isResultOnDisplay
						? result
						: !operand1
							? '0'
							: `${operand1}${operator}${operand2}`}
				</div>
				<div className={styles.buttons}>
					{buttons.map((btn) => (
						<button
							key={btn}
							className={`${styles.button} ${
								btn === '+' || btn === '-' ? styles.operator : ''
							}${btn === '=' ? styles['operator-equally'] : ''}${
								btn === 'C' ? styles.clear : ''
							}`}
							onClick={() => handleButtonClick(btn)}
						>
							{btn}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
