import React from 'react'

const Buttons = ({ firstColor, secondColor, thirdColor, setCorrect, colorBox, setOutcome }) => {
     const handleAllButtonClicks = (e) => {
        if (e.currentTarget.textContent === colorBox) {
            setCorrect(firstColor + secondColor + thirdColor);
            setOutcome(true);
        } else {
            setOutcome(false);
        }
     }

  return (
    <div className='buttons'>
        <button onClick={handleAllButtonClicks}>
            {firstColor}
        </button>
        <button onClick={handleAllButtonClicks}>{secondColor}</button>
        <button onClick={handleAllButtonClicks}>{thirdColor}</button>
    </div>
  )
}

export default Buttons