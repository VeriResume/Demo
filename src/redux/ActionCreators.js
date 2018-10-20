import * as ActionTypes from './ActionTypes'

export const addSection = (name) => ({
    type: ActionTypes.ADD_SECTION,
    payload: {
        name
    }
});

export const addExperience = (name, selected_section) => ({
    type: ActionTypes.ADD_EXPERIENCE,
    payload: {
        name,
        selected_section
    }
});

