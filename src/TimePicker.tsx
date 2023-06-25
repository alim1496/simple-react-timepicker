import React, { FC, useEffect, useState } from 'react'
import './timepicker.css'
import InputMask from './InputMask'
import TimeParts from './TimeParts'

export interface InputProps {
	time?: Date
	showList?: boolean
	minHour?: number
	maxHour?: number
}


const TimePicker: FC<InputProps> = ({ time, showList = true, minHour = 0, maxHour = 23 }) => {
	const [hr, setHr] = useState('')
	const [mn, setMn] = useState('')
	const [openList, setOpenList] = useState(false)

	useEffect(() => {
		if (!time) {
			setHr((new Date().getHours()).toString())
			setMn((new Date().getMinutes()).toString())
		} else {
			setHr((time.getHours()).toString())
			setMn((time.getMinutes()).toString())
		}
	}, [time])

	const setTime = (_time: string) => {
		const parts = _time.split(':')
		setHr(parts[0])
		setMn(parts[1])
		setOpenList(false)
	}

	return (
		<div className="srt-timepicker">
			<InputMask min={0 < minHour ? minHour : 0} max={23 > maxHour ? maxHour : 23} value={hr} onChangeCb={(v) => setHr(v)} />
			<b>:</b>
			<InputMask min={0} max={59} value={mn} onChangeCb={(v) => setMn(v)} />
			{showList && <span className="chevron" onClick={() => setOpenList(!openList)}></span>}
			<TimeParts open={openList} onItemSelect={setTime} start={minHour} end={maxHour} />
		</div>
	)
}

export default TimePicker
