import Axios from 'axios'

const CHECKLIST = "CHECKLIST"
const EDIT_CHECKLIST = "EDIT_CHECKLIST"
const CREATE_CHECKLIST = "CREATE_CHECKLIST"

export const getChecklist = (referralId) => {
    return (dispatch) => {
        Axios.get(`/api/referral/${referralId}/checklist`)
        .then(res => {
            dispatch({ action: CHECKLIST, checklist: res.data})
        })
        .catch(err => console.log(err))
    }
}

export const updateChecklist = (referralId, checklist) => {
    return (dispatch) => {
        Axios.put(`/api/referral/${referralId}/checklist`, checklist)
        .then(res => {
            dispatch({action: EDIT_CHECKLIST, checklist: res.data})
        })
    }
}

export const createChecklist = (referralId) => {
    return (dispatch) => {
        Axios.post(`/api/referral/${referralId}/checklist`, {
            
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
        case CREATE_CHECKLIST:
            return action.checklist
      default:
        return state;
    }
  }