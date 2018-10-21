import * as ActionTypes from './ActionTypes'
import axios from 'axios';



export function addExperience(nameInput, selectedID) {

    return (dispatch) => {

        axios.post(`https://veriresume-backend.herokuapp.com/sections/` + selectedID + "/experiences", { place: nameInput })
        .then(res => {
        }).then(() => axios.get("https://veriresume-backend.herokuapp.com/sections"))

            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((response) => dispatch(ExperienceAddDataSuccess(response.data)));
    };

}


export function ExperienceAddDataSuccess(items) {
    return {
        type: ActionTypes.ADD_EXPERIENCE,
        items
    };
}

export function addSection(nameInput) {

    return (dispatch) => {
        axios.post(`https://veriresume-backend.herokuapp.com/sections`, { name: nameInput })
        .then(res => {
        }).then(() => axios.get("https://veriresume-backend.herokuapp.com/sections"))
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => dispatch(SectionAddDataSuccess(response.data)));
    };

}

export function SectionAddDataSuccess(items) {
    return {
        type: ActionTypes.ADD_SECTION,
        items
    };
}



