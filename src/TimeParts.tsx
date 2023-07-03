import React, { FC, useEffect, useRef, useState } from 'react'
import './timeparts.css'

export interface TimePartsProps {
	open: boolean
	onItemSelect: (arg0: string) => void
	start: number
	end: number
}

const TimeParts: FC<TimePartsProps> = ({ open, onItemSelect, start, end }) => {
	const [timeParts, setTimeParts] = useState<string[]>([])
	const listRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (listRef.current) listRef.current.style.display = open ? 'block' : 'none'
	}, [open])

	useEffect(() => {
		let i
		const parts: string[] = []
		for (i=start;i<=end;i++) {
			const j = i < 10 ? `0${i}` : `${i}`
			parts.push(`${j}:00`)
		}
		setTimeParts(parts)
	}, [start, end])

	return (
		<div className="parts-container" ref={listRef}>
			{timeParts?.map((part, index) => (
				<div key={index} className="parts-item" onClick={() => onItemSelect(part)}>{part}</div>
			))}
		</div>
	)
}

export default TimeParts
