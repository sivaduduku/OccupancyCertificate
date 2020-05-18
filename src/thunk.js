import axios from 'axios';
import {updateFormData} from './actions';


const mapInfo = (form) => {
 return {
  tsbpass_permit_number: form.buildingPermitNo,
  file_number: form.fileNo,
  owner_name: form.ownerName,
  email: form.email,
  district: form.district,
  zone_office: form.zone,
  mandal: form.mandal,
  usage_of_building: form.usageBuilding,
  parking_provisions: form.parkingSpace,
  rwh_pits: form.rwhPits,
  building_permit_number: form.buildingPermit,
  work_commence_date: form.workCommencedDate,
  work_completion_date: form.workCompletionDate,
  building_completion_due_date: form.completionBuilding,
  building_permit_date: form.buildingPermitDate,
  plot_number: form.plotNo,
  sy_number: form.syNo,
  mobile: form.mobile,
  locality: form.locality,
  circle_office: form.circleOffice,
  village: form.village,
  net_plot_area: form.netPlotArea,
  affected_area_in_road_widening: form.affectedPortion,
  tot_lot_area: form.totLotArea,
  docs_verified_on: form.documentsverified
 }
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
    const options = {
      method: 'POST',
      url: 'http://13.233.190.35/api/v1/application_forms',
      data: {},
      headers: {
      'Content-Type': 'application/json',
      },
    };
    Object.assign(options, { data: JSON.stringify(data) });
    return axios(options);
  }

  export function checkStatus(error) {
    if (!error.response) return;
  }