import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({
      type: 'INC'
    })
  }

  const decrement = () => {
    dispatch({
      type: 'DEC'
    })
  }

  const add10 = () => {
    dispatch({
      type: 'ADD_10',
      payload: 10
    })
  }


  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={add10}>Add 10</button>
    </>
  );
}

export default App;
