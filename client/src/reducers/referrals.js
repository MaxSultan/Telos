import Axios from "axios";

const REFERRALS = "REFERRALS";
const DELETE_REFERRAL = "DELETE_REFERRAL";
const EDIT_REFERRAL = "EDIT_REFERRAL";
const ADD_REFERRAL = "ADD_REFERRAL";

export const getReferrals = () => {
  return (dispatch) => {
    Axios.get("/api/referals").then((res) => {
      dispatch({ type: REFERRALS, referrals: res.data });
    });
  };
};

export const deleteReferral = (id) => {
  return (dispatch) => {
    Axios.delete(`/api/referals/${id}`).then((res) => {
      dispatch({ type: DELETE_REFERRAL, id: res.data.id });
    });
  };
};

export const editReferral = (id, referral, history) => {
  return (dispatch) => {
    Axios.put(`/api/referals/${id}`, referral).then((res) => {
      dispatch({ type: EDIT_REFERRAL, referral: res.data });
      history.push("/active");
    });
  };
};

export const addReferral = (product, history) => {
  return (dispatch) => {
    Axios.post("/api/referals", product).then((res) => {
      dispatch({ type: ADD_REFERRAL, referral: res.data });
      history.push("/active");
    });
  };
};

export default function products(state = [], action) {
  switch (action.type) {
    case REFERRALS:
      return action.referrals;
    case DELETE_REFERRAL:
      return state.filter((referral) => referral.id !== action.id);
    case EDIT_REFERRAL:
      return state.map((referral) => {
        if (referral.id === action.referral.id) return action.referral;
        return referral;
      });
    case ADD_REFERRAL:
      return [action.referral, ...state];
    default:
      return state;
  }
}