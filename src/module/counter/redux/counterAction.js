import { counterSlice } from "./counterSlice"

const { actions } = counterSlice


export const incrementCount = () => (dispatch) => {
  return dispatch(actions.increment())
}

export const decrementCount = () => (dispatch) => {
  return dispatch(actions.decrement())
}

export const incrementCountByValues = (count) => (dispatch) => {
  return dispatch(actions.incrementByAmount(count))
}

export const incrementIfOdd = (amount, currentValue) => (dispatch) => {
  if (currentValue % 2 === 1) {
    dispatch(actions.incrementByAmount(amount));
  }
};