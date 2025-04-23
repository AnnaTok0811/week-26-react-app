import { useState } from 'react';
import Wordlist from '../Wordlist/Wordlist'
import wordsData from '../data/words.json'
import st from './List.module.scss'

export default function List() {

const [words, setWords] = useState(wordsData);
const updateWord = (id, newWord, newTranslate) => {
setWords(words.map(item =>
item.id === id ? { ...item, word: newWord, translate: newTranslate } : item
));
};
    
    return (

        <div className={st.container}>
            <ul className={st.list_container}>
                <li className={st.item}>Слово</li>
                <li className={st.item}>Перевод</li>
                <li className={st.item}>Транскрипция</li>
                <li className={st.item}>Категория</li>
                <li className={st.item}></li>
                
            </ul >
            {words.map(item => (//спросить у кати
                <Wordlist key={item.id} item={item} updateWord={updateWord}/>
            ))}
        </div>
    )
}
