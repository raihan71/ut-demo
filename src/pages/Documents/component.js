import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

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

  _setValueAwal = () => this.setState({ username: 'silahkan isi' });

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
        <Button onClick={this._handleCheck} variant="contained">Cek Username</Button>
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
