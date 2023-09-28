import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount, decrementByAmount} from '../redux/counter/counterSlice';

function Counter() {
    const [amount, setAmount] = useState(3);
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
  return (
    <div>
          <h1>{countValue}</h1>

          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <br/>
          <br/>
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <br/>
          <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount</button>
          <br/>
          <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement By Amount</button>

    </div>
    );
}

export default Counter;