import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import TextField from '../../components/elements/TextField';
import { convCapitalize } from '../../utils/convCapitalize';

export default class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentWillMount() {
    this.setState({ username: 'mounted' });
  }

  componentDidUpdate() {
    this._handleCheck();
  }

  componentDidMount() {
    this._setValueAwal();
  }

  componentWillReceiveProps({ username }) {
    this.setState({ username });
  }

  componentWillUnmount() {
    this._clearValue();
  }

  _clearValue = () => this.setState({ username: '' });

  _setValueAwal = () => this.setState({ username: convCapitalize('silahkan isi') });

  _handleChangeUsername = ({ target: { value } }) => {
    this.setState({ username: value });
  }

  _handleCheck = () => {
    const { username } = this.state;
    alert(username);
  }

  render() {
    const { username } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField label="username" value={username} onChange={this._handleChangeUsername} />
        <button onClick={() => this._handleCheck}>Cek Username</button>
      </div>
    );
  }
}

Documents.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string
};

Documents.defaultProps = {
  username: ''
};
