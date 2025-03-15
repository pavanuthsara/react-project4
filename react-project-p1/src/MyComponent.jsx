import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(false);

    const updateName = () => {
        setName("Pavan Uthsara")  
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const decrementAge = () => {
        setAge(age - 1);
    }

    const isStudentCheck = () => {
        setIsStudent(true);
    }

    return (
        <>
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>

            <p>Is Student : {isStudent == true ? 'Student' : 'Not a student'}</p>
            <button onClick={isStudentCheck}>Make Student</button>
        </div>
        </>
    );
}

export default MyComponent