import { SELECTED_YELP_BUSINESS } from '../actions/types.jsx';
import { CLICKED_YELP_BUTTON } from '../actions/types.jsx';

export default function(state={}, action) {
  switch(action.type) {
    case SELECTED_YELP_BUSINESS:
      return {...state, selected_business: action.payload}
    case CLICKED_YELP_BUTTON:
      return {...state, clicked_yelp: action.payload}
  }
  return state;
}