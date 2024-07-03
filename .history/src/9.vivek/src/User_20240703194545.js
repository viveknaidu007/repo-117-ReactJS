function User(props) {
    return (
        <div>
            <h1> name : {props.name}</h1>
            <h2> age : {props.age}</h2>
            <h2> place : {props.place}</h2>
        </div>
    )
}

export default User