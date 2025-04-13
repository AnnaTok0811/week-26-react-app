// import React from 'react'

import st from './Header.module.scss'
import {
    NavLink
} from 'react-router-dom'
export default function Header() {
    return ( 
        
        <div className={st.container}>
            <div className={st.logo}>
            <NavLink end to="/" style={{ textDecoration: 'none', color: '#00072d' }}><img className={st.img} src='../../../public/assets/logo.png' alt='logo' /></NavLink>               
            <div className={st.title}><NavLink end to="/" style={{ textDecoration: 'none', color: '#00072d' }}>Simple words</NavLink></div>
            </div>
            <div className={st.nav}>
                <div className={st.link}><NavLink to="/wordlist" style={{ textDecoration: 'none', color: '#00072d' }}>Список слов</NavLink></div>
                <div className={st.link}><NavLink to="/cards" style={{ textDecoration: 'none', color: '#00072d' }}>Карточки</NavLink></div>
            </div>
        </div>
        
        )
}


