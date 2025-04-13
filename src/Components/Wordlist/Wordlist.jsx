import { useState } from 'react'
import style from './Wordlist.module.scss'


export default function Wordlist({ item }) {
    console.log(item);
    const {word, translate, transcription, tag } = item;

    const [isEditMode, setIsEditMode] = useState(false);

    const [currentWordValue, setCurrentWordValue] = useState(word);
    const [wordValue, setWordValue] = useState(currentWordValue);

    const [currentTranslateValue, setCurrentTranslateValue] = useState(translate);
    const [translateValue, setTranslateValue] = useState(currentTranslateValue);


    const [isDeleted, setIsDeleted] = useState(false);

    const handleEditMode = () => {
        setIsEditMode(!isEditMode);
    };

    const handleCancel = () => {
        setIsEditMode(!isEditMode);
    }

    const onSave = () => {
        setCurrentWordValue(wordValue)
        setIsEditMode(!isEditMode);
        
    }

    const onSaveTranslate = () => {
        setCurrentTranslateValue(translateValue)
        setIsEditMode(!isEditMode);}

    const onDelete = () => {
        setIsDeleted(true)
    }
    const saveCancelBtns = () => {
        return (
            <>
                <input value={wordValue} onChange={(event)=>setWordValue(event.target.value)} className={style.input} placeholder='Введите слово' defaultValue={wordValue}></input>
                <input value={translateValue} onChange={(event)=>setTranslateValue(event.target.value)} className={style.input} placeholder='Введите перевод' defaultValue={translateValue}></input>
                <input className={style.input} placeholder='Введите транскрипцию' defaultValue={transcription}></input>
                <input className={style.input} placeholder='Введите категорию' defaultValue={tag}></input>
                <div className={style.buttons}>
                    <button onClick={'onSave();onSaveTranslate()'} className={style.btn}>Сохранить</button>
                    <button className={style.btn} onClick={handleCancel}>Отмена</button>
                </div>
            </>
        )
    }

    const editDeleteBtns = () => {
        return (
            <>
                <div className={style.item}>{currentWordValue}</div>
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
//замечания от котика, исправить

// import { useState } from 'react';
// import Wordlist from '../Wordlist/Wordlist';
// import wordsData from '../data/words.json';
// import st from './List.module.scss';

// export default function List() {
// const [words, setWords] = useState(wordsData);

// const updateWord = (id, newWord, newTranslate) => {
// setWords(words.map(item =>
// item.id === id ? { ...item, word: newWord, translate: newTranslate } : item
// ));
// };

// return (
// <div className={st.container}>
// <ul className={st.list_container}>
// <li className={st.item}>Слово</li>
// <li className={st.item}>Перевод</li>
// <li className={st.item}>Транскрипция</li>
// <li className={st.item}>Категория</li>
// <li className={st.item}></li>
// </ul >
// {words.map(item => (
// <Wordlist key={item.id} item={item} updateWord={updateWord} />
// ))}
// </div>
// );
// }

// export default function Wordlist({ item, updateWord }) {
// const { id, word, translate, transcription, tag } = item;

// const [isEditMode, setIsEditMode] = useState(false);
// const [wordValue, setWordValue] = useState(word);
// const [translateValue, setTranslateValue] = useState(translate);
// const [isDeleted, setIsDeleted] = useState(false);

// const handleEditMode = () => {
// setIsEditMode(true);
// };

// const handleCancel = () => {
// setWordValue(word);
// setTranslateValue(translate);
// setIsEditMode(false);
// };

// const onSave = () => {
// updateWord(id, wordValue, translateValue);
// setIsEditMode(false);
// };

// const onDelete = () => {
// setIsDeleted(true);
// };

// return (
// <>
// {!isDeleted && (
// <div className={style.container}>
// {isEditMode ? (
// <>
// <input value={wordValue} onChange={(e) => setWordValue(e.target.value)} className={style.input} placeholder="Введите слово" />
// <input value={translateValue} onChange={(e) => setTranslateValue(e.target.value)} className={style.input} placeholder="Введите перевод" />
// <input className={style.input} placeholder="Введите транскрипцию" defaultValue={transcription} disabled />
// <input className={style.input} placeholder="Введите категорию" defaultValue={tag} disabled />
// <div className={style.buttons}>
// <button onClick={onSave} className={style.btn}>Сохранить</button>
// <button onClick={handleCancel} className={style.btn}>Отмена</button>
// </div>
// </>
// ) : (
// <>
// <div className={style.item}>{word}</div>
// <div className={style.item}>{translate}</div>
// <div className={style.item}>{transcription}</div>
// <div className={style.item}>{tag}</div>
// <div className={style.buttons}>
// <button onClick={handleEditMode} className={style.btn}>Редактировать</button>
// <button onClick={onDelete} className={style.btn}>Удалить</button>
// </div>
// </>
// )}
// </div>
// )}
// </>
// );
// }