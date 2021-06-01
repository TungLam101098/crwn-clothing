const INITIAL_STATE = {
  currenUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currenUser: action.payload
      }
  
    default:
      return state;
  }
}

export default userReducer;