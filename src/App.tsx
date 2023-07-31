import './App.css'
import React, { useEffect, useState } from 'react'
import Header from './Header'

const App = () => {
  return (
    <>
      <div className="App">dd</div>
    </>
  )
}

//
// lifeCycle

// before render , render , after render
// empty
// {}
// {},[]
// {},[state]

//
// 명령형 선언형

// const add = () => {
//   let total = 0
//   const list = [1, 2, 3, 4, 5]
//   for (let i = 0; i < list.length; i++) {
//     total += list[i]
//   }
//   return total
// }

// const add = () => {
//   return [1, 2, 3, 4, 5].reduce((prev, curr) => prev + curr)
// }
//
// console.log(add())

//
// Component

// <Header/>
// <Header message={}/>

//
// Virtual DOM

// const [timer, setTimer] = useState<number>(1)
//
// setInterval(() => {
//     setTimer((prevState) => prevState + 1)
// }, 2000)

export default App
