import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import clsx from 'clsx';

export default class Component extends React.Component {
  state = {
    showPassword: false
  };

  _handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  _renderTextField() {
    const {
      classes,
      disabled,
      input,
      meta,
      label,
      name,
      onChange,
      onKeyDown,
      placeholder,
      type,
      messageError,
      variant,
      withVisibility,
      value,
      defaultValue,
      specialCase
    } = this.props;

    let endAdornment = '';
    let rootClasses;
    let helper = {};
    helper = meta ? { error: meta.error, touched: meta.touched } : {};

    if (type === 'password' && withVisibility) {
      endAdornment = (
        <InputAdornment className={classes.invisibleLogo} position="end">
          <IconButton
            onClick={this._handleClickShowPassword}
          >
            {this.state.showPassword ? <VisibilityOffOutlinedIcon/> : <RemoveRedEyeOutlinedIcon/>}
          </IconButton>
        </InputAdornment>
      );
    }

    if (variant === 'outlined') {
      rootClasses = classes.rootOutlined;
    } else {
      rootClasses = classes.root;
    }

    let showError = messageError === ' ' || specialCase || helper.error === ' ' ? undefined : (
      <React.Fragment>
        <span className={classes.helperError}>{messageError}</span>
        <span className={classes.helperError}>{helper.error}</span>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <div
          className={clsx(classes.space + ' ' + variant, { 'error': (messageError || helper.error && helper.touched) })}>
          <TextField
            className={classes.textField}
            defaultValue={defaultValue}
            disabled={disabled}
            InputLabelProps={{
              classes: {
                root: (messageError || helper.error && helper.touched) ?
                  classes.inputLabelError : classes.inputLabel,
                focused: 'focused',
                shrink: classes.inputLabelDefault
              }
            }}
            InputProps={{
              disableUnderline: true,
              classes: {
                root: (messageError || helper.error && helper.touched) ?
                  classes.inputError : rootClasses,
                input: `${(messageError || helper.error && helper.touched) ?
                  classes.inputError : rootClasses}
                ${messageError || helper.error && helper.touched ? classes.inputError : null}`,
                inputType: classes.inputType
              },
              endAdornment: endAdornment
            }}
            label={label}
            margin="normal"
            name={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            type={withVisibility && this.state.showPassword ? 'text' : type}
            variant={variant}
            {...input}
            value={value}
          />
        </div>
        {helper.touched && helper.error ? '' : showError}
      </React.Fragment>
    );
  }

  render() {

    return (
      this._renderTextField()
    );
  }
}


Component.defaultProps = {
  actions: {},
  classes: {},
  defaultValue: undefined,
  disabled: false,
  input: {},
  isLoading: false,
  specialCase: false,
  label: '',
  messageError: '',
  meta: {
    error: false,
    touched: false
  },
  name: '',
  onChange: () => {
  },
  onKeyDown: () => {
  },
  placeholder: '',
  type: '',
  value: undefined,
  variant: undefined,
  withVisibility: false
};

Component.propTypes = {
  actions: PropTypes.object,
  classes: PropTypes.object,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  input: PropTypes.object,
  isLoading: PropTypes.bool,
  specialCase: PropTypes.bool,
  label: PropTypes.string,
  messageError: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.bool,
    touched: PropTypes.bool,
  }),
  name: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  withVisibility: PropTypes.bool,
};
