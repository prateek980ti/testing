import { useEffect, useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputFieldProps {
	label?: string;
	hint?: string;
	iconStatus?: 'complete' | 'incomplete' | 'loading' | 'close';
	size?: 'sm' | 'md' | 'lg';
	status?: 'default' | 'success' | 'error';
	counter?: { max: number };
	onChange?: () => void;
	disabled?: boolean;
	className?: string;
	placeholder?: string;
}

export const InputField = ({
	label,
	hint,
	iconStatus,
	size = 'sm',
	status = 'default',
	counter,
	disabled = false,
	className,
	onChange,
	placeholder = 'placeholder',
}: InputFieldProps) => {
	const borderColors = {
		default: 'border-borderOpaque',
		success: 'border-positive border-2',
		error: 'border-negative border-2',
	};

	const hintColors = {
		default: 'text-contentInverseTertiary',
		success: 'text-positive',
		error: 'text-negative',
	};

	const sizeStyles = {
		sm: '  text-[14px] ',
		md: ' text-[16px] ',
		lg: '  text-[18px] ',
	};

	const [cross, setCross] = useState(false);
	const [value, setValue] = useState('');
	const [focused, setFocused] = useState(false);

	const counterCheck = () => {
		if (value.length != 0) {
			setCross(false);
		} else {
			setCross(true);
		}
	};

	const onChangeHandler = (e) => {
		setValue(e.target.value);
		onChange && onChange();
	};

	useEffect(() => {
		counterCheck();
		if (counter && value.length > counter.max) {
			setValue(value.slice(0, counter?.max));
			console.log('Limit Exceed');
			alert('Limit exceed');
		}
	}, [value]);

	return (
		<div className={`flex flex-col gap-1 w-[375px]`}>
			{label && (
				<div
					className={`flex justify-between items-center ${size} text-white/90`}
				>
					<label className={sizeStyles[size]}>{label}</label>
					{counter && (
						<span className={`${size} text-white/50`}>
							{value.length}/{counter.max}
						</span>
					)}
				</div>
			)}
			<div
				className={twMerge(
					'flex items-center border  rounded-lg px-3  text-white ',
					borderColors[status],
					sizeStyles[size],
					status == 'default' && !disabled
						? focused
							? 'border-borderInverseSelected border-[2px]'
							: borderColors[status]
						: '',
					status == 'default' &&
						value.length > 0 &&
						!focused &&
						iconStatus == 'close'
						? 'bg-contentSecondary'
						: '',
					disabled &&
						'bg-contentSecondary cursor-not-allowed border-borderInverseTransparent text-white/50',
					className,
				)}
			>
				<input
					onChange={(e) => onChangeHandler(e)}
					type="text"
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
					disabled={disabled}
					placeholder={placeholder}
					value={value}
					className={twMerge(
						'bg-transparent',
						size,
						'outline-none w-full p-2 disabled:cursor-not-allowed',
					)}
				/>

				<div
					onClick={() => {
						if (iconStatus == 'close') {
							setValue('');
						}
					}}
					className={'ml-2 hover:cursor-pointer'}
				>
					{(!cross &&
						status == 'default' &&
						iconStatus != 'complete' &&
						iconStatus != 'incomplete' &&
						iconStatus != 'loading') ||
					(status == 'error' && !cross) ? (
						<img src="src/assets/close.svg" alt="" />
					) : (
						''
					)}

					{iconStatus == 'complete' ? (
						<img src="src/assets/success.svg" alt="" />
					) : iconStatus == 'incomplete' ? (
						<img src="src/assets/error.svg" alt="" />
					) : iconStatus == 'loading' ? (
						<div className="flex items-center justify-center">
							<div className="relative w-5 h-5">
								<div className=" text-backgroundInverseSecondary absolute w-full h-full rounded-full border-3 border-t-[#662dff] animate-spin"></div>
							</div>
						</div>
					) : null}
				</div>
			</div>

			<div className="flex items-center gap-2">
				{status === 'success' ? (
					<span>
						<img src="src/assets/success.svg" alt="" />
					</span>
				) : status === 'error' ? (
					<span>
						<img src="src/assets/error.svg" alt="" />
					</span>
				) : (
					<span></span>
				)}
				{hint && (
					<span
						className={twMerge(
							'text-[14px]',
							disabled ? 'text-contentInverseTertiary ' : hintColors[status],
						)}
					>
						{hint}
					</span>
				)}
			</div>
		</div>
	);
};
