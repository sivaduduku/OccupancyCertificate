import { UPDATE_FORM_SUCCESS, CLEAR_FORM } from './ActionTypes';


export function updateFormData(form) {
    return {
      type: UPDATE_FORM_SUCCESS,
      form,
    };
  }



export function clearFormData() {
    return {
      type: CLEAR_FORM,
    };
  }