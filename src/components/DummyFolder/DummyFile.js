import React from "react";
// import { Link } from "react-router";
// import Header from '../common/Header';
// import ProfileList from '../jcprofile/profilelist';
// import { browserHistory } from 'react-router';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as DummyFileActions from "./redux/dummyfolder";
import "./dummy.css";
class DummyFile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 10
    };
  }

  render() {
    const h = { ...this.state };
    console.log(h);
    console.log(900);
    return (
      <div>
        <button onClick={this.props.actions.ajxsuccessfxn} className="btn fine">
          ki
        </button>
        {console.log(this.props.status)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    status: state.dummyajax
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DummyFileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DummyFile);
