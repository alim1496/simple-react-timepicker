# simple-react-timepicker

This repository contains simple timepicker to be used in React applications. You can edit the time here 
& also select time from dropdown. Currently it supports 24hr format only. I am planning to add more features
gradually. It has been developed using typescript.

## Installation

### NPM
```sh
npm install @alim1496/simple-react-timepicker
```

## Usage

### Normal use along with dropdown
```js
import React from 'react'
import TimePicker from '@alim1496/simple-react-timepicker'

const MyApp = () => {
	const onChange = (val: string) => {
		console.log(val)
	}

	return (
		<TimePicker time="4:20" onChange={onChange} />
	)
}

export default MyApp
```

## Properties

| Property    | Type     | Default Value          | Description                                                                                                                    |
|-------------|----------|------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `time`      | string   | ''                     | The initial time to be displayed. If not passed then the current hour & minute value are displayed.                            |
| `showList`  | boolean  | true                   | Whether to display the dropdown time values. If `false` then it is not displayed.                                              |
| `minHour`   | number   | 0                      | The minimum value of hour the user is allowed to input.                                                                        |
| `maxHour`   | number   | 23                     | The maximum value of hour the user is allowed to input.                                                                        |
| `onChange`  | function | (time: string) => void | This function helps the user to capture the changed time as `string` in `hh:mm` format.                                        |


## License

MIT © [alim1496](https://github.com/alim1496)
