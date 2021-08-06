import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './redux/counterAction';
import styles from './Counter.module.css';

export function Counter() {
  const {currentState} = useSelector(
    (state)=>({currentState:state.counter})
  )
  const {value} = currentState;
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(actions.decrementCount())}
        >
          -
        </button>
        <span className={styles.value}>{value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(actions.incrementCount())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(actions.incrementCountByValues(incrementAmount))}
        >
          Add Amount
        </button>
  
        <button
          className={styles.button}
          onClick={() => dispatch(actions.incrementIfOdd(incrementValue,value))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
