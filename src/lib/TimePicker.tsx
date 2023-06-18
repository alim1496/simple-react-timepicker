import React, { FC, useState } from 'react'
import './timepicker.css'
import InputMask from './InputMask'

export interface InputProps {
	hour: string
	minute: string
}

const TimePicker: FC<InputProps> = ({ hour, minute }) => {
	const [hr, setHr] = useState(hour)
	const [mn, setMn] = useState(minute)

	return (
		<div className="srt-timepicker">
			<InputMask min={0} max={23} value={hr} onChangeCb={(v) => setHr(v)} />
			<b>:</b>
			<InputMask min={0} max={59} value={mn} onChangeCb={(v) => setMn(v)} />
		</div>
	)
}

export default TimePicker
