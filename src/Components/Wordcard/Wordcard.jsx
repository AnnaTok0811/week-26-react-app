
import BtnTranslate from '../BtnTranslate/BtnTranslate.jsx'
import style from './Wordcard.module.scss'

export default function Wordcard(props) {
  // const { word, transcription, translate, pressed, setPressed, countWords } = props

  return (
    <div className={style.wordbox}>
      <h3 className={style.word}>{props.word}</h3>
      <h3 className={style.transcription}>{props.transcription}</h3>
      <BtnTranslate translate={props.translate} pressed={props.pressed} setPressed={props.setPressed} countWords={props.countWords} /> 
      </div >
  )
} 
//спросить
