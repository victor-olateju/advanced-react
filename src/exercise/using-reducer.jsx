import { useReducer } from "react"

const reducerFn = (state, action) => {
    if(action.type === "start") return {money: state.money - 10}
    if(action.type === "end") return {money: state.money + 10}
    if(action.type === "unknown") return {money: state.money * 2}
    return state
}

export function ReducerTask () {

    const initialState = {money: 100}
    const [state, dispatch] = useReducer(reducerFn, initialState)

    return <div className="app">
        <h1>Wallet: {state.money}</h1>
        <button onClick={()=> dispatch({type: "start"})}>Subtract</button>
        <button onClick={()=> dispatch({type: "end"})}>Add</button>
        <button onClick={()=> dispatch({type: "unknown"})}>Add</button>
    </div>
}