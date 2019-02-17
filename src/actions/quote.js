import { GET_QUOTE, GET_COLOR, SET_MODAL_VISIBLE } from '../constants/types';
import colors from '../constants/colors';
import { quotes, bibleVerses } from '../constants/quotes';

const options = [
  'quotes',
  'bibleVerses'
];

const getRandomObject = (objects) => {
  let max = objects.length - 1;
  let min = 0;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return objects[random];
}

const getBibleVerse = () => {
  const verse = getRandomObject(bibleVerses);
  const url = `https://bible-api.com/${verse}`;

  return function(dispatch) {
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        let verse = json.reference;
        let content = json.text.replace(/\n/g, ' ').trim();
        let quote = `${content}\n\n${verse}`;

        dispatch(getAsyncQuote(quote));
      });
  };
}

export const getQuote = () => {
  let option = getRandomObject(options);
  if (option == 'bibleVerses') {
    return getBibleVerse();
  }
  let quote = getRandomObject(quotes);
  return getAsyncQuote(quote);
};

const getAsyncQuote = (quote) => ({
  type: GET_QUOTE,
  payload: quote
});

export const getColor = () => ({
  type: GET_COLOR,
  payload: getRandomObject(colors)
});

export const setModalVisible = (isModalVisible) => ({
  type: SET_MODAL_VISIBLE,
  payload: isModalVisible
});
