import * as actionTypes from './actionTypes';

const saveResult = (result) => {
  return  {
    type: actionTypes.STORE_RESULT,
    result: result

  } 
}

export const storeResult = (result) => {
  return (dispatch , getState)  => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  }
  
}

export const deleteResult = (resultId) => {
  return  {
    type: actionTypes.DELETE_RESULT,
    resultId: resultId

  }
}