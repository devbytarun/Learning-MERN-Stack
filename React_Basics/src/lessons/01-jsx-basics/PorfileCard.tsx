type ProfileCardProps = {
    name : string
    age : number
    isStudent? : boolean
}

function ProfileCard({name, age, isStudent}: ProfileCardProps){
    return(
        <div>
            <h1>{name}</h1>
            <p>Age :{age}</p>
            <p>isStudent : {isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

export default ProfileCard