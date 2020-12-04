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
  classes: PropTypes.object.isRequired
};
