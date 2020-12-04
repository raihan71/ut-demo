import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withStyle from 'react-jss';
import Component from './component';
import * as actions from './action';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

function mapStateToProps(state) {
  const { isLoading } = state.loading;
  const { params, myDocument, meta } = state.documents;
  return {
    auth: state.auth,
    isLoading,
    myDocument,
    meta,
    params
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const Styled = withStyles({})(withStyle(styles)(Component));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styled);
