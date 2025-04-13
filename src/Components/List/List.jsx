
import Wordlist from '../Wordlist/Wordlist'
import words from '../data/words.json'
import st from './List.module.scss'

export default function List() {
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
                <Wordlist key={item.id} item={{ ...item }} />
            ))}
        </div>
    )
}
