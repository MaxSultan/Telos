import Axios from 'axios'

const CHECKLIST = "CHECKLIST"
const EDIT_CHECKLIST = "EDIT_CHECKLIST"

export const getChecklist = (referralId) => {
    return (dispatch) => {
        Axios.get(`/api/referals/${referralId}/checklists`)
        .then(res => {
            dispatch({ action: CHECKLIST, checklist: res.data})
        })
        .catch(err => console.log(err))
    }
}

export const updateChecklist = (referralId, checklistId, checklist) => {
    return (dispatch) => {
        Axios.put(`/api/referals/${referralId}/checklists/${checklistId}`, checklist)
        .then(res => {
            dispatch({action: EDIT_CHECKLIST, checklist: res.data})
        })
    }
}

export default function checklist(state = [], action) {
    switch (action.type) {
      case CHECKLIST:
        return action.checklist;
      case EDIT_CHECKLIST:
        return state.map((checklist) => {
          if (checklist.id === action.checklist.id) return action.checklist;
          return checklist;
        });
      default:
        return state;
    }
}