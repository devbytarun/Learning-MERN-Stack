type CardProps = {
    name : string
    score : number
}

function ScoreCard({name , score}: CardProps){
    return(
        <div>
            <h1>Name :{name}</h1>
            <p>Score :{score}</p>
        </div>
    )
}

export default ScoreCard