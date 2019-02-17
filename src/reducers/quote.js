import { GET_QUOTE, GET_COLOR, SET_MODAL_VISIBLE, SET_COLOR } from '../constants/types';
import colors from '../constants/colors';
import { quotes } from '../constants/quotes';

const initialState = {
  quote: quotes[1],
  color: colors[5],
  isModalVisible: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE:
      return Object.assign({}, state, {
        quote: action.payload
      });
    case GET_COLOR:
      return Object.assign({}, state, {
        color: action.payload
      });
    case SET_MODAL_VISIBLE:
      return Object.assign({}, state, {
        isModalVisible: action.payload
      });
    case SET_COLOR:
      return Object.assign({}, state, {
        color: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
