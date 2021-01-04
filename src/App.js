import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {incCounter,decCounter,resetCounter} from './redux/action-creators/index'
import {setTodos} from './redux/action-creators/index'
import './App.css'

export default function App()  {

    const {counter,todos} = useSelector(({counter: {counter},todos:{todos}})=> ({counter,todos}))
    const dispatch = useDispatch()



    const handleinc = () => dispatch(incCounter())
    const handledec = () => dispatch(decCounter())
    const handlereset = () => dispatch(resetCounter())



    useEffect(()=>{
    fetchtodos()
    },[counter])

    const fetchtodos = async ()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        const json = await response.json()
       dispatch(setTodos(json))

    }
    console.log(todos)
return(
        <div className={'main_div'}>
     <h1>Counter {counter}</h1>
           <div> <button onClick={handleinc}>inc</button>
            <button onClick={handledec}>dec</button>
            <button onClick={handlereset}>reset</button>
        </div>
            {( !!todos && <h2 >
                        {todos.id}. {todos.title}
                    </h2>)

            }
        </div>
      );
}
