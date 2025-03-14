function List(){
    const fruits = [{key:1, name:'apple', calories: 100},
        {key:2, name:'banan', calories: 35}, 
        {key:3, name:'pineapple', calories: 85}, 
        {key:4, name:'coconut', calories: 40}];

    const lowCalFruits = fruits.filter(fruit => fruit.calories <80)

    const listItems = fruits.map(fruit => <li key={fruit.key} >{fruit.name} : <b>{fruit.calories}</b></li>) ;
    // return (<ol>{listItems}</ol>);

    const listItems2 = lowCalFruits.map(fruit => <li key={fruit.key} >{fruit.name} : <b>{fruit.calories}</b></li>) ;
    return (
        <>
        <ul>{listItems}</ul> <br />
        <h3>Low calary fruits</h3>
        <ol>{listItems2}</ol>
        </>
    );
}

export default List