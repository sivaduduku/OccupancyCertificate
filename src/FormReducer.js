import { UPDATE_FORM_SUCCESS, CLEAR_FORM } from './ActionTypes';

const initialState = {
  form: {},
};

export const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_SUCCESS:
      return {
        ...state,
        form :action.form
      };
      case CLEAR_FORM:
        return {
          ...state,
          form: {}
        };  
    default:
      return state;
  }
};
