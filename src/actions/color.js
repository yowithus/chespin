import { GET_COLORS, SET_COLOR } from '../constants/types';
import colors from '../constants/colors';

export const getColors = () => ({
  type: GET_COLORS,
  payload: colors.sort()
});

export const setColor = (color) => ({
  type: SET_COLOR,
  payload: color
});
