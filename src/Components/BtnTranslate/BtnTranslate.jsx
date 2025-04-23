
import React from 'react'
import style from './Btntranslate.module.scss'
import {useRef,useEffect} from 'react';

export default function BtnTranslate(props) {
    const handleClick = () => {
        props.setPressed(!props.pressed);
        props.countWords();
    };

const buttonRef=useRef(null)
const focus = ()=>{
 if (buttonRef.current) {buttonRef.current.focus()}
 }

useEffect(()=>{focus()},[props.translate])

    return (
        <div className={style.btn}>
            {props.pressed ? <span className={style.translate}>{props.translate}</span> :
                <button ref={buttonRef} className={style.btn} onClick={handleClick}>Показать перевод</button>}
        </div>
    )
}
