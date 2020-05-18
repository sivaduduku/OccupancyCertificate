import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import {updateFormData, clearFormData} from './actions';
import { updateInfoThunk } from './thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator();
    this.state ={

    }
  }  

  componentDidMount() {
    const { form } = this.props;
    this.setState({ ...form });
  }

  formClear = () => {
   const { clearInfo } = this.props;
   clearInfo();
       window.location.reload();
  }
  submitForm = () => {
    if (this.validator.allValid()) {
      this.props.saveInfo(this.state);
      alert('saved info')
     } else {
      this.validator.showMessages();
      this.forceUpdate()  ;
    }
  }

  onChangeState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.saveInfo(this.state);
  }

  render() {
    return (
      <div className="container">
      <div className="header">  
       <h6>VIEW APPLICATION FORM:</h6>
      </div>
      <div className="row">
        <div className='col-lg-6'>

        <div className="form-group">
        <label>Do you have DPMS building permit No?</label>
        <label>
            <input
              type="radio"
              value="yes"
              name="buildingPermitNo"
              checked={this.state.buildingPermitNo === "yes"}
              onChange={this.onChangeState}
            />
            yes
          </label>
          <label>
            <input
              type="radio"
              value="no"
              name="buildingPermitNo"
              checked={this.state.buildingPermitNo === "no"}
              onChange={this.onChangeState}
            />
            no
          </label>
      </div>


      <div className="form-group">
        <label>* Enter File No.</label>
        <input className="form-control" value={this.state.fileNo} name="fileNo" onChange={this.onChangeState}/>
        {this.validator.message('fileNo', this.state.fileNo, 'required')}
      </div>
      <div className="form-group">
        <label>* Owner Name </label>
        <input className="form-control" value={this.state.ownerName} name="ownerName" onChange={this.onChangeState}/>
        {this.validator.message('ownerName', this.state.ownerName, 'required')}
      </div>
      <div className="form-group">
        <label>* Email</label>
        <input className="form-control" value={this.state.email} name="email" onChange={this.onChangeState} />
        {this.validator.message('email', this.state.email, 'required|email')}
      </div>
      <div className="form-group">
        <label>* District</label>
        <input className="form-control" value={this.state.district} name="district" onChange={this.onChangeState} />
        {this.validator.message('district', this.state.district, 'required')}
      </div>
      <div className="form-group">
        <label>Zone Office</label>
        <input className="form-control" value={this.state.zone} name="zone" onChange={this.onChangeState} />
      </div>
      <div className="form-group">
        <label>Mandal</label>
        <input className="form-control" value={this.state.mandal} name="mandal" onChange={this.onChangeState} />
      </div>
      <div className="form-group">
        <label>* Usage of the Building</label>
        <input className="form-control" value={this.state.usageBuilding} name="usageBuilding" onChange={this.onChangeState} />
        {this.validator.message('Usage of the Building', this.state.usageBuilding, 'required')}
      </div>
      <div className="form-group">
        <label>Parking Space Provisions</label>
        <input className="form-control" value={this.state.parkingSpace} name="parkingSpace" onChange={this.onChangeState} />
      </div>
      <div className="form-group">
        <label>RWH Pits (nos) </label>
        <input className="form-control" value={this.state.rwhPits} name="rwhPits" onChange={this.onChangeState} />
      </div>
      <div className="form-group">
        <label>* Building Permit No. </label>
        <input className="form-control" value={this.state.buildingPermit} name="buildingPermit" onChange={this.onChangeState}/>
        {this.validator.message('buildingPermit', this.state.buildingPermit, 'required')}
      </div>
      <div className="form-group">
        <label>* Work Commenced Date: </label>
        <input className="form-control" value={this.state.workCommencedDate} name="workCommencedDate" onChange={this.onChangeState}/>
        {this.validator.message('Work Commenced Date', this.state.workCommencedDate, 'required')}
      </div>
      <div className="form-group">
        <label>* Due date for completion of the building </label>
        <input type='date' className="form-control" value={this.state.completionBuilding} name="completionBuilding" onChange={this.onChangeState} />
        {this.validator.message('Due date for completion of the building', this.state.completionBuilding, 'required')}
      </div>
      </div>
     
      <div className='col-lg-6'>
      <div className="form-group">
        <label>Plot No.</label>
        <input className="form-control" value={this.state.plotNo} name="plotNo" onChange={this.onChangeState}/>
      </div>
      <div className="form-group">
        <label>Sy.No. </label>
        <input className="form-control" value={this.state.syNo} name="syNo" onChange={this.onChangeState} />
      </div>
      <div className="form-group">
        <label>* Mobile</label>
        <input className="form-control" value={this.state.mobile} name="mobile" onChange={this.onChangeState}/>
        {this.validator.message('mobile', this.state.mobile, 'required|phone')}
      </div>
      <div className="form-group">
        <label>* Locality</label>
        <input className="form-control" value={this.state.locality} name="locality" onChange={this.onChangeState} />
        {this.validator.message('locality', this.state.locality, 'required')}
      </div>
      <div className="form-group">
        <label>Circle Office</label>
        <input className="form-control" value={this.state.circleOffice} name="circleOffice" onChange={this.onChangeState}/>
      </div>
      <div className="form-group">
        <label>Village</label>
        <input className="form-control" value={this.state.village} name="village" onChange={this.onChangeState} />
      </div>
      <div className="form-group">
        <label>* Net Plot Area (Sq.mt)</label>
        <input className="form-control" value={this.state.netPlotArea } name="netPlotArea" onChange={this.onChangeState} />
        {this.validator.message('Net Plot Area', this.state.netPlotArea, 'required')}
      </div>
      <div className="form-group">
        <label>Affected portion in Road Widening (if any)</label>
        <input className="form-control" value={this.state.affectedPortion} name="affectedPortion" onChange={this.onChangeState}/>
      </div>
      <div className="form-group">
        <label>* Tot-lot area (m2) </label>
        <input className="form-control" value={this.state.totLotArea} name="totLotArea" onChange={this.onChangeState} />
        {this.validator.message('Tot-lot area', this.state.totLotArea, 'required')}
      </div>
      <div className="form-group">
        <label>* Building Permit Date:  </label>
        <input type='date' className="form-control" value={this.state.buildingPermitDate} name="buildingPermitDate" onChange={this.onChangeState} />
        {this.validator.message('Building Permit Date', this.state.buildingPermitDate, 'required')}
      </div>
      <div className="form-group">
        <label>* Work Completion Date: </label>
        <input type='date' className="form-control" value={this.state.workCompletionDate} name="workCompletionDate" onChange={this.onChangeState} />
        {this.validator.message('Work Completion Date', this.state.workCompletionDate, 'required')}
      </div>
      <div className="form-group">
        <label>* Required </label>
        <input className="form-control" value={this.state.required} name="required" onChange={this.onChangeState} />
        {this.validator.message('Required', this.state.required, 'required')}
      </div>
      </div>
      </div>
      <div className="header">  
       <h6>DOCUMENT CHECK LIST</h6>
      </div>
      <div className="row">
          <div className="col-lg-6">
                  <div className="form-group">
                <label>Documents verified on</label>
                <input className="form-control" value={this.state.documentsverified} name="documentsverified" onChange={this.onChangeState} />
              </div>
              <div className="form-group">
              <h6>Technical Aspects (Mandatory)</h6>
              </div>
          </div>
      </div>
      <div className="row">
      <div className="form-group">
              <input type="checkbox" defaultChecked={this.state.certified} name="certified" onChange={this.onChangeState} />
              Building completion notice to be certified by the Architect, Structural Engineer, Builder / Developer and Owner.
      </div>
      </div>
      <div className="row">
      <div className="form-group">
              <input type="checkbox" defaultChecked={this.state.sanctioned} name="sanctioned" onChange={this.onChangeState} />
              Copy of sanctioned plan (If not pertains to the DPMS).
      </div>
      </div>
      <button className="btn btn-primary" onClick={this.submitForm}>Save</button>
      <button className="btn btn-primary" onClick={this.formClear}>clear</button>
    </div>
    );
}}


const mapStateToProps = (state) => {
  return {
    form: state.appFORM.form,
  };
};


export const mapDispatchToProps = dispatch => bindActionCreators({
  saveInfo: updateInfoThunk,
  clearInfo: clearFormData,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(App)
