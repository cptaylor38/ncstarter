import mapKeys from 'lodash/mapKeys';

export default function(state = {}, action) {
  // switch (action.type) {
  //   case FETCH_PROFILE:
  //     const profile = action.payload;
  //     return { ...state, [profile._id]: profile };
  //   case FETCH_BLOGS:
  //     return { ...state, ...mapKeys(action.payload, '_id') };
  //   default:
  //     return state;
  // }
}
