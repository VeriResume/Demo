import * as ActionTypes from './ActionTypes';




export const User = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EXPERIENCE:
            console.log('here')
            console.log(action.items)
            return action.items;
        case ActionTypes.ADD_SECTION:
            return action.items;
        default:
          return state;
      }
};