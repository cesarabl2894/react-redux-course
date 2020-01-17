import * as actionType from '../actions';

const initialState = {
  counter: 0,
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionType.INCREMENT :
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1
      return newState;
      case actionType.DECREMENT :
        return {
          ...state,
          counter: state.counter - 1
        }
      case actionType.ADD :
        return {
          ...state,
          counter: state.counter + action.value
        }
      case actionType.SUB :
        return {
          ...state,
          counter: state.counter - action.value
        }
      default: 
        return state
  }
}

export default counterReducer;