//
// Last.Backend LLC CONFIDENTIAL
// __________________
//
// [2014] - [2017] Last.Backend LLC
// All Rights Reserved.
//
// NOTICE:  All information contained herein is, and remains
// the property of Last.Backend LLC and its suppliers,
// if any.  The intellectual and technical concepts contained
// herein are proprietary to Last.Backend LLC
// and its suppliers and may be covered by Russian Federation and Foreign Patents,
// patents in process, and are protected by trade secret or copyright law.
// Dissemination of this information or reproduction of this material
// is strictly forbidden unless prior written permission is obtained
// from Last.Backend LLC.
//


import React from "react";
import PropTypes from "prop-types";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class ServiceFormGeneral extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: props.service.meta.name,
      desc: props.service.meta.description,
    }
  }

  changeDescriptionHandler(e, desc) {
    e.preventDefault();
    this.setState({desc: desc.input.value});
  }

  changeNameHandler(e, name) {
    e.preventDefault();
    this.setState({name: name.input.value});
  }

  updateHandler(e, app, service, name, desc) {
    e.preventDefault();
    this.props.updateHandler(app, service, name, desc);
  }

  checkDifferencesHandler() {
    let meta = this.props.service.meta;
    let state = this.state;
    return (!state.name || (state.name === meta.name && state.desc === meta.description))
  }

  render() {
    let name, desc;
    return (
      <div className="row">

        <div className="col-md-4 col-sm-12">
          <h3>General settings</h3>
          <desc>Main service settings</desc>
        </div>

        <div className="col-md-8 col-sm-12">
          <TextField fullWidth={true} floatingLabelText="Service name" hintText="name"
                     ref={(val) => name = val}
                     value={this.state.name}
                     onChange={(e) => this.changeNameHandler(e, name)}/>

          <br/>

          <TextField fullWidth={true} floatingLabelText="Service description" hintText="description"
                     ref={(val) => desc = val}
                     value={this.state.desc}
                     onChange={(e) => this.changeDescriptionHandler(e, desc)}/>

          <br/>

          <RaisedButton label="Save" primary={true}
                        disabled={this.checkDifferencesHandler()}
                        onClick={e => this.updateHandler(e, this.props.app, this.props.service, this.state.name, this.state.desc)}/>
        </div>
      </div>
    );
  }
}

ServiceFormGeneral.propTypes = {
  service: PropTypes.object.isRequired,
  updateHandler: PropTypes.func.isRequired
};

export default ServiceFormGeneral;
