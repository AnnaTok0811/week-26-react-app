// import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
// import { Home, Table, Cards, Training, Error } from './Pages'
import words from '../Components/data/words.json'
import Footer from '../Components/Footer/Footer.jsx'
import Header from '../Components/Header/Header.jsx'
import Banner from '../Components/Banner/Banner.jsx'
import Error from '../Components/Error/Error.jsx'
import Slider from '../Components/Slider/Slider.jsx'
import List from '../Components/List/List.jsx'
import style from './App.module.scss'


function App() {
  return (
    <>
      <div className={style.App}>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />}></Route>
          <Route path="/wordlist" element={<List />}>Список слов</Route>
          <Route path="/cards" element={<Slider words={words} />}>Карточки</Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

