import React, { useState, useEffect, useReducer } from 'react';
import './App.css';

const App: React.FC = () => {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log(`you click ${count} time`)
    return () => {
      console.log('1111')
    }
  }, [count])
  const [ counts , dispatch ] = useReducer((state, action) => {
    switch(action){
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <p>已经点击了{ counts }次</p>
      <button onClick={() => {setCount(count+1)}}>增加</button>
      <button onClick={() => {setCount(count-1)}}>删除</button>
      <button onClick={() => dispatch('add')}>add</button>
      <button onClick={() => dispatch('sub')}>sub</button>
    </div>
  );
}

export default App;
