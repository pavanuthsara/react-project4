import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserGreeting from './UserGreeting'
import List from './List'
import CheckProps from './CheckProps'
import Button from './Button'

function App() {
  const fruits = [{key:1, name:'apple', calories: 100},
                  {key:2, name:'banan', calories: 35}, 
                  {key:3, name:'pineapple', calories: 85}, 
                  {key:4, name:'coconut', calories: 40}];

  const vegetables = [{key:1, name:'carrot', calories: 100},
                    {key:2, name:'potato', calories: 35}, 
                    {key:3, name:'corn', calories: 85}, 
                    {key:4, name:'eggplant', calories: 40}];            

  return (
    <>
      <List items={vegetables} category="Vegetables" />
      <List items={fruits} category="Fruits" />
      <CheckProps/>
      <Button/>
    </>
  )
}

export default App 
