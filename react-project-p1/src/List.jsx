import './styles/list.css'
function List(props){
    console.log(props.category);
    
    const fruits = props.items;
    const lowCalFruits = fruits.filter(fruit => fruit.calories <80)

    const listItems = fruits.map(fruit => <li key={fruit.key} >{fruit.name} : <b>{fruit.calories}</b></li>) ;
    // return (<ol>{listItems}</ol>);

    const listItems2 = lowCalFruits.map(fruit => <li key={fruit.key} >{fruit.name} : <b>{fruit.calories}</b></li>) ;
    return (
        <>
        <h1 className="category">{props.category}</h1>
        <ul>{listItems}</ul> <br />
        <h3>Low calary fruits</h3>
        <ol>{listItems2}</ol>
        </>
    );
}


export default List