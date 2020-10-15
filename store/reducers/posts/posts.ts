import { ACTIONS } from '../../actions/actions';

const initialState = {
  posts: null, 
}; 

export default function posts(state=initialState, action) {
  switch(action.type) {
    case ACTIONS.SET_POSTS:
      return { ...state, posts: action.payload };
    default: 
      return { ...state };  
  }
}