import React, { FC, MouseEvent, ChangeEvent } from 'react'
import './inputmask.css'

export interface Mask {
	value: string
	min: number
	max: number
	onChangeCb: (v: string) => void
}

const InputMask: FC<Mask> = ({ value, min, max, onChangeCb, ...rest }) => {

	const selectValue = (e: MouseEvent<HTMLInputElement>) => (e.target as HTMLInputElement).select()

	const maskValue = (event: ChangeEvent<HTMLInputElement>) => {
		let input = event.target.value;
		if (input !== '' && input.length > 2) {
			input = input.substring(1);
		}

		if (input === '' || (parseInt(input) >= min && parseInt(input) <= max)) {
			onChangeCb(input);
		}
	};
	return (
		<input
			type="number"
			value={value.padStart(2, '0')}
			{...rest}
			onChange={maskValue}
			inputMode="numeric"
			autoComplete="off"
			onClick={selectValue}
		/>
	)
}

export default InputMask
