

function Button(){

    const handleClick = () => console.log('Hello world');

    const handleClick2 = (name) => console.log(`Hello ${name}`);
    
    let count = 1;
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} have clicked me for ${count} times`);   
        } else {
            console.log('You have clicked me too many times');    
        }
    }

    const handleClick4 = (e) => {
        e.target.textContent = "OUCH!"
    }

    const handleClick5 = (e) => {
        console.log('Picture clicked');
    }

    const imgUrl = './src/assets/profile.png'
    
    return (
        <>
        <button onClick={(e) =>handleClick4(e)}>Click Me</button>
        <img src={imgUrl} onClick={handleClick5}></img>
        </>
    );
}

export default Button