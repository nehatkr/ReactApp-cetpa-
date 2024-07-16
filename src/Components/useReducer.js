import { useReducer } from "react";
const initialState = {count:0};
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return{...state,count:state.count+1};
        case 'decrement':
            return{...state,count:state.count-1};
            default:
                return 'Unrecognized command';
    }
}

export default function UseReducer(){

    const [state ,dispatch] = useReducer(reducer , initialState);
    // const [count ,setCount] =useState(10);
    return(
        <div>
            {' '}
            <h1>{state.count}</h1>
            {/* <button onClick={()=>setCount(count + 1)}>+</button>{' '}
            <button onClick={()=>setCount(count-1)}>-</button>{' '} */}
            <button onClick={()=>dispatch({type:'increment'})}>+</button>{' '}
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>{' '}
        </div>
    )
}