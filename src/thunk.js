import {updateFormData} from './actions';


export const updateInfoThunk = form => (dispatch) => {
    debugger;
    dispatch(updateFormData(form));
    // api call
  };
  