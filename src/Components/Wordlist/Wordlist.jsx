import { useState } from 'react'
import style from './Wordlist.module.scss'


export default function Wordlist({ item, updateWord }) {
    console.log(item);
    const {word, translate, transcription, tag, id } = item;

    const [isEditMode, setIsEditMode] = useState(false);
const [wordValue, setWordValue] = useState(word);
const [translateValue, setTranslateValue] = useState(translate);
const [transcriptionValue, setTranscriptionValue] = useState(transcription);
const [tagValue, setTagValue] = useState(tag);
const [isDeleted, setIsDeleted] = useState(false);

const handleEditMode = () => {
setIsEditMode(true);
};

const handleCancel = () => {
setWordValue(word);
setTranslateValue(translate);
setTranscriptionValue(transcription);
setTagValue(tag);
setIsEditMode(false);
};

const onSave = () => {
updateWord(id, wordValue, translateValue, tagValue, transcriptionValue)
setIsEditMode(false);
};


    const onDelete = () => {
        setIsDeleted(true)
    }
    const saveCancelBtns = () => {
        return (
            <>
                <input value={wordValue} onChange={(event)=>setWordValue(event.target.value)} className={style.input} placeholder='Введите слово' defaultValue={wordValue}></input>
                <input value={translateValue} onChange={(event)=>setTranslateValue(event.target.value)} className={style.input} placeholder='Введите перевод' defaultValue={translateValue}></input>
                <input value={transcriptionValue} onChange={(event)=>setTranscriptionValue(event.target.value)} className={style.input} placeholder='Введите транскрипцию' defaultValue={transcriptionValue}></input>
                <input value={tagValue} onChange={(event)=>setTagValue(event.target.value)}className={style.input} placeholder='Введите категорию' defaultValue={tagValue}></input>
                <div className={style.buttons}>
                    <button onClick={onSave} className={style.btn}>Сохранить</button>
                    <button className={style.btn} onClick={handleCancel}>Отмена</button>
                </div> 
            </>
        )
    }

    const editDeleteBtns = () => {
        return (
            <>
                <div className={style.item}>{word}</div>
                <div className={style.item}>{translate}</div>
                <div className={style.item}>{transcription}</div>
                <div className={style.item}>{tag}</div>
                <div className={style.buttons}>
                    <button className={style.btn} onClick={handleEditMode}>Редактировать</button>
                    <button onClick={onDelete} className={style.btn} >Удалить</button>
                </div>
            </>
        )
    }

    return (
        <>
        {
            isDeleted ? null :  
            <div className={style.container}>
            {isEditMode ? saveCancelBtns() : editDeleteBtns()}
        </div >
        }
       </>
    )
}
