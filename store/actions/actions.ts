export const ACTIONS = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  SET_POSTS: 'SET_POSTS',
}

export const setValueIncrease = () => ({ type: ACTIONS.INCREASE }); 
export const setValueDecrease = () => ({ type: ACTIONS.DECREASE }); 
export const setPosts = (payload) => ({ type: ACTIONS.SET_POSTS, payload });

