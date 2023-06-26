import {cardText} from '../../constants'
import './styles.scss'
import Card from '../Card/Card'

const Game = ()=>{
    return (
        <div className="game">
            <h1>{cardText.title}</h1>
            <button>{cardText.btnText}</button>
            <div className='cardBoard'>
                <Card />
            </div>
            <p className='result'>{cardText.winner}</p>
        </div>
    )
}

export default Game