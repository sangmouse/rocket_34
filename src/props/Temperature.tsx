import React from 'react'

interface BoilingVerdictProps {
    celsius: number;
}


function BoilingVerdict({ celsius }: BoilingVerdictProps) {
    // binary operator
    return celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>
}


function Caculator() {
    const [temperature, setTemperature] = React.useState<number>(50);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemperature(e.target.valueAsNumber);
    }

    return (
        <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input type="number" value={temperature} onChange={handleChange} />
            <BoilingVerdict celsius={temperature} />
        </fieldset>
    )
}


export default function Question1() {
    return (
        <div>
            <Caculator />
        </div>
    )
}