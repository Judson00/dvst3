export const DATA_START = "FETCHING_DATA_START";
export const DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const DATA_FAILURE = "FETCHING_DATA_FAILURE";
export const EDITING_STATE = "EDITING_STATE";
export const FORM_STATE = "FORM_STATE";
export const RESET_FORM = "RESET_FORM";
export const EDITING_STATE_CHANGE = "EDITING_STATE_CHANGE";



const initialState = {
  data: {
    user: {
      id: null,
      userName: ""
    },
    personalBudget: [],
    editing: false,
    isLoading: false,
    error: {}
  }
}

export default(state = initialState, action) => {
  switch(action.type) {
    case DATA_START:
      return{
        ...state,
        isLoading: true
      };
    case DATA_SUCCESS:
      return{
        ...state,
        isLoading: false,
        data: {
          ...state,
          user: {
            ...state.user,
            id: action.payload.id,
            userName: action.payload.userName
          },
          personalBudget: [...state.data.personalBudget, action.payload.personalBudget]
        }
      };
    case DATA_FAILURE:
      return{
        ...state,
        isLoading: false,
        data: {
          ...state,
          user: {
            ...state.user,
            id: action.payload.id,
            userName: action.payload.userName
          },
          personalBudget: [...state.data.personalBudget, action.payload.personalBudget]
        }
      }
    default:
      return state
    }
}