import * as actionTypes from './actionTypes';

export const initialState = {
  isHydrated: false,
};

export function reducer(state = initialState, action) {
  switch (actionTypes.type) {
    case actionTypes.UPDATE:
      return actionTypes.payload;
  
    default:
      return state;
  }
}