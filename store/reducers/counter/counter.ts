
import { ACTIONS } from '../../actions/actions';

const initialState = {
  count: 0,
}; 

export default function counter(state=initialState, action) {
  switch(action.type) {
    case ACTIONS.INCREASE:
      state.count -= 1;
      return { ...state }; 
    case ACTIONS.DECREASE: 
      state.count += 1;
      return { ...state }; 
    default: 
      return { ...state };  
  }
}