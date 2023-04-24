import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber() {
    const [randomNum, setRandomNum] = useState(generateRandomNum())

    const changeRandomNumber = () => {
        setRandomNum(generateRandomNum())
    }

    return (
        <div>
            <h1>{randomNum}</h1>
            <button onClick={changeRandomNumber}>Generate</button>
        </div>
    )
}

export default RandomNumber