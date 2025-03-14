function CheckProps({name='Guest', age=0}){ 
    console.log();
    return (
        <div>
            <h1>CheckProps</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}

export default CheckProps