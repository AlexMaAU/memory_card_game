import './style.scss'

const Card = ()=> {
    return (
        <div className="card">
            <div className="">
                <img className="front" alt="Card Front"/>
                <img className="back" alt="Card Back" src="/images/cover.png"/>
            </div>
        </div>
    )
}

export default Card