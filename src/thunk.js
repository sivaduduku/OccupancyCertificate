import axios from 'axios';
import {updateFormData} from './actions';


const mapInfo = (form) => {
  var formdata = new FormData();
  formdata.append("tsbpass_permit_number", form.buildingPermitNo);
  formdata.append("file_number", form.fileNo);
  formdata.append("owner_name", form.ownerName);
  formdata.append("email", form.email);
  formdata.append("district", form.district);
  formdata.append("zone_office", form.zone);
  formdata.append("mandal", form.mandal);
  formdata.append("usage_of_building", form.usageBuilding);
  formdata.append("parking_provisions", form.parkingSpace);
  formdata.append("rwh_pits", form.rwhPits);
  formdata.append("building_permit_number", form.buildingPermit);
  formdata.append("work_commence_date", form.workCommencedDate);
  formdata.append("work_completion_date", form.workCompletionDate);
  formdata.append("building_completion_due_date", form.completionBuilding);
  formdata.append("building_permit_date", form.buildingPermitDate);
  formdata.append("plot_number", form.plotNo);
  formdata.append("sy_number", form.syNo);
  formdata.append("mobile", form.mobile);
  formdata.append("locality", form.locality);
  formdata.append("circle_office", form.circleOffice);
  formdata.append("village", form.village);
  formdata.append("net_plot_area", form.netPlotArea);
  formdata.append("affected_area_in_road_widening", form.affectedPortion);
  formdata.append("tot_lot_area", form.totLotArea);
  formdata.append("docs_verified_on", form.documentsverified);
  if(form.filesCollection && form.filesCollection.length > 0) {
    for(let i = 0; i< form.filesCollection.length; i++) {
      formdata.append("document", form.filesCollection[i], form.filesCollection[i].name);
    } 
  }
  
 return formdata
}

export const updateInfoThunk = form => (dispatch) => {
    return executeApiFormPost(mapInfo(form))
    .then((result) => {
      if(result.data.message === 'Success') {
        const id = result.data.data.application_form.id
        alert(`saved info success. the application form id: ${id}`);
        dispatch(updateFormData( {...form, id: id }));
      }
    }).catch((error)=> {
    })
  };
  

  export const executeApiFormPost = (data) => {
    const url = 'http://13.233.190.35/api/v1/application_forms';
    const headers = {
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    
    return axios.post(url, data, headers);
  }

  export function checkStatus(error) {
    if (!error.response) return;
  }
