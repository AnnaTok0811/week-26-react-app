import React from 'react'
import style from './Btntranslate.module.scss'

export default function BtnTranslate(props) {
    const handleClick = () => {
        props.setPressed(!props.pressed);
        props.countWords();
    };

    return (
        <div className={style.btn}>
            {props.pressed ? <span className={style.translate}>{props.translate}</span> :
                <button className={style.btn} onClick={handleClick}>Показать перевод</button>}
        </div>
    )
}
