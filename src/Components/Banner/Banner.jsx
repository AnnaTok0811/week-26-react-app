import st from './Banner.module.scss'

export default function Banner() {
    return (
        <div className={st.banner}>
            <div className={st.block1}>
            <img className={st.img} src='../../../public/assets/banner-girl.jpg' alt='logo' />
            <div className={st.block2}>
                <div>
                <ul className={st.title}>Учить английские слова важно по следующим причинам:
                    <li className={st.subtitle}>Повышение коммуникативных навыков;</li>
                    <li className={st.subtitle}>Понимание текста; </li>
                    <li className={st.subtitle}>Улучшение навыков слушания;</li>
                    <li className={st.subtitle}>Уверенность в общении;</li>
                    <li className={st.subtitle}>Развитие когнитивных навыков;</li>
                    <li className={st.subtitle}>Доступ к знаниям и информации;</li>
                    <li className={st.subtitle}>Свобода путешествий и общения.</li>
                </ul>
                </div>
               
            </div>
            </div>
        
           
        </div>
    )
}

