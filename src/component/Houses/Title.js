import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../../actions/actions';
import {debug} from 'debug';

class title extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="f-m-head f-clear">
        <ul className="f-m-title f-clear f-fl">
          <li className="item current"><a href="/">全部房源</a></li>
        </ul>
        <p className="m-result f-fr">共<span className="num">{this.props.value.allhouse.length}套</span>满足条件的房子</p>
      </div>
    );
  }
}

const mapState = (state) => {
  return {value: state};
};

export default connect(mapState, (dispatch) => bindActionCreators(actionCreators, dispatch))(title);
