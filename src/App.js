import React, { useState } from 'react'
import styles from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import Heading from './components/Heading';
export default function App() {
  const [display, setDisplay] = useState('');
  const onBtnClick = (event) => {
    // console.log('btn click ',event.target.innerText);
    const btnItem = event.target.innerText;
    console.log(btnItem);
    if (btnItem === 'AC') {
      setDisplay('')
    }
    else if (btnItem === 'DEL') {
      const lastDel = display.substring(0, display.length - 1);
      setDisplay(lastDel);
    }
    else if (btnItem === '=') {
      const result = eval(display);
      setDisplay(result);
    } else {
      const newDisplayVal = display + btnItem;
      setDisplay(newDisplayVal);
    }
  }
  return (
    <>
      <div className="container">
       <Heading/>
        <div className={styles.calculator}>
          <Display DisplayVal={display}></Display>
          <ButtonContainer onButtonClick={onBtnClick}></ButtonContainer>
        </div>
      </div>
    </>
  )
}
