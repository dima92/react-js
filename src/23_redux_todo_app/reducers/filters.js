import {CHANGE_FILTER} from '../../constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, {type, activeFilter}) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

export default filter;
