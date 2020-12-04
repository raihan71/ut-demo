const styles = () => ({
  '@global': {
    '.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#17827B',
      border: '2px solid'
    },
  },
  helperError: {
    color: '#DE1B1B',
    fontSize: '10px',
    fontWeight: 'bold',
    lineHeight: '12px',
    paddingLeft: '10px'
  },
  inputError: {
    backgroundColor: '#FAD6D6',
    borderRadius: '2px',
    paddingRight: 0
  },
  inputLabel: {
    '&.focused': {
      color: '#116963',
      fontSize: '14px'
    },
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '12px'
  },
  inputLabelDefault: {
    color: '#424242'
  },
  inputLabelError: {
    '&.focused': {
      color: '#DE1B1B',
      fontSize: '10px',
      transform: 'translate(12px, 10px) scale(1)'
    },
    color: '#DE1B1B',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '12px'
  },
  invisibleLogo: {
    position: 'absolute',
    right: '11.5px'
  },
  root: {
    background: '#FFF',
    paddingRight: 0,
    width: '100%'
  },
  rootOutlined: {
    background: '#FFF',
    paddingRight: 0,
    width: '100%',
    borderRadius: '5px !important'
  },
  textField: {
    background: '#FFF',
    marginBottom: 0,
    width: '100%'
  },
  title: {
    fontSize: '34px',
    paddingBottom: '10px'
  },
  wrapperTitle: {
    marginBottom: '35px'
  },
  space: {
    '&.filled': {
      '&.error': {
        borderBottom: '2px solid #DE1B1B',
        '&:focus': {
          borderBottom: '2px solid #DE1B1B'
        },
        '&:hover': {
          borderBottom: '2px solid #DE1B1B'
        },
      },
      '&:focus': {
        borderBottom: '2px solid #757575'
      },
      '&:hover': {
        borderBottom: '2px solid #757575'
      },
      borderBottom: '2px solid #757575',
      background: '#FFF',
    },
    paddingRight: 0,
    width: '100%'
  },
});

export default styles;
