import { USER } from '../user.js';
import * as ActionTypes from './ActionTypes';
import { fromJS } from "immutable";

export const initialState = fromJS(USER);

export const User = (state = initialState, action) => {
    console.log(initialState)
    switch (action.type) {
        case ActionTypes.ADD_EXPERIENCE:
            var section = action.payload.selected_section;
            var name = action.payload.name;
            var next_id = state.getIn([section,'experiences']).size;
            var new_experience = Object()
            new_experience.eid = next_id;
            new_experience.verifiable_elements = [];
            new_experience.place = name;
            const oldList = state.getIn([section,'experiences']);
            const newList = oldList.push(fromJS(new_experience));
            return state.setIn([section,'experiences'],newList);
        return state;
        case ActionTypes.ADD_SECTION:
            var section = action.payload;
            section.id = state.length;
            section.experiences = [];
            return state.push(fromJS(section));
        default:
          return state;
      }
};