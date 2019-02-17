import { GET_COLORS } from '../constants/types';

const initialState = {
  colors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COLORS:
      return Object.assign({}, state, {
        colors: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
