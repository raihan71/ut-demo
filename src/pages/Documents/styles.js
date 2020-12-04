/* eslint-disable max-lines */
const styles = theme => ({
  wrapperSearch: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      width: '315px',
    },
    display: 'flex',
    height: '50px',
    width: '100%'
  },

  titleContentDocument: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      margin: '74px 0px 12px 0px',
    },
    color: theme.colors.grey[100],
    margin: '74px 0px 12px 0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px'
  },

  buttonSubmit: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      display: 'flex',
      width: '220px',
      height: '48px'
    },
    height: 48,
    width: 249
  },

  buttonLabel: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      height: '17px',
      width: '160px',
      marginLeft: '4px',
      marginBottom: '5px'
    },
    display: 'flex',
    textTransform: 'none'
  },

  borderMiddleMobile: {
    border: '1px solid #EEEEEE',
  },

  containerMyDocument: {
    ['@media (max-width: 767px)']: {
      margin: '12px 0px 17px 27px'
    },
    ['@media (min-width:768px) and (max-width:1299px)']: {
      margin: '2px 0px 25px 0px'
    },
    display: 'flex',
    margin: '2px 0px 35px 0px',

    '& img': {
      padding: '0px 17px 0px 0px'
    },

    '& p': {
      ['@media (max-width: 767px)']: {
        fontSize: '18px',
      },
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      lineHeight: '28px',
      color: theme.colors.grey[100]
    }
  },

  customIcon: {
    position: 'relative',
    top: 2,
    right: 3
  },

  searchInput: {
    ['@media (max-width: 767px)']: {
      width: '100%',
      margin: '0px 20px'
    },
    background: '#FFF',
    border: '2px solid #BDBDBD',
    borderRadius: '2px',
    margin: '0px 0px 0px -12px',
    padding: '10px',
    width: '105%',

    '&:hover': {
      border: '2px solid #17827B'
    },
    '&:focus': {
      border: '2px solid #17827B'
    },
  },

  statusSortMobileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '17px',
    padding: '12px 2px'
  },

  activeBreadcrumb: {
    color: theme.palette.base.primary.main
  },

  buttonSearch: {
    minHeight: '50px'
  },

  container: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      padding: '25px 50px',
      overflowX: 'hidden'
    },
    padding: '25px 100px'
  },

  containerSearch: {
    background: '#F7F7F7',
    padding: '30px 70px 100px'
  },

  dateDocument: {
    color: '#616161',
    fontSize: '12px',
    lineHeight: '14px'
  },

  dateDocumentIcon: {
    ['@media (max-width: 767px)']: {
      position: 'relative',
      left: '-161px',
      top: '25px',
      paddingLeft: '14px',
      fontSize: '14px',
    },
    color: '#9E9E9E',
    fontSize: '12px',
    lineHeight: '14px',
    paddingLeft: '10px'
  },

  documentText: {
    fontSize: '16px',
    margin: 0
  },

  documentOwnerWrapper: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    margin: 'auto'
  },

  icon: {
    paddingRight: '10px'
  },

  iconLock: {
    bottom: '-85px',
    color: theme.palette.base.primary.main,
    fontSize: '30px',
    position: 'absolute',
    right: '13px'
  },

  itemSelectMobile: {
    paddingLeft: 15
  },

  itemSelect: {
    '&:hover': {
      backgroundColor: theme.colors.teal[10],
      color: theme.colors.teal[60]
    },
    paddingLeft: '20px',
    paddingRight: '30px'
  },

  menuItemActive: {
    ['@media (max-width: 767px)']: {
      backgroundColor: theme.colors.teal[10],
      color: theme.colors.teal[60],
      fontWeight: 'normal',

      '&:hover': {
        backgroundColor: theme.colors.teal[10]
      },
    },

    color: theme.palette.base.primary.main,
    fontWeight: 'bold'
  },

  menuItemClass: {
    color: theme.colors.grey[100],
    cursor: 'pointer',
    listStyleType: 'none',
    margin: '5px',
    padding: '0px 0px 15px 0px',
    width: 'max-content',
    lineHeight: '22px',
  },

  ownerDocument: {
    color: '#616161',
    fontSize: '12px',
    lineHeight: '14px',
  },

  paginationRight: {
    justifyContent: 'flex-end',
    margin: '25px 0px 25px 0px',
    padding: '0px 22px'
  },

  paginationLeft: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    margin: '25px 0px 25px 0px',
    padding: '0px 22px'
  },

  pagination: {
    justifyContent: 'flex-end',
    marginTop: 25
  },

  paperCard: {
    ['@media (max-width: 767px)']: {
      width:  '98%',
      height: '250px',
      marginLeft: 3
    },
    ['@media (min-width:768px) and (max-width:1299px)']: {
      height: '220px',
      borderRadius: 0,
      boxShadow: '0px 0px 4px rgba(66, 66, 66, 0.2), 0px 6px 10px rgba(66, 66, 66, 0.2)',
      marginTop: '25px',
      position: 'relative'
    },
    borderRadius: 0,
    boxShadow: '0px 0px 4px rgba(66, 66, 66, 0.2), 0px 6px 10px rgba(66, 66, 66, 0.2)',
    marginTop: '25px',
    position: 'relative',

    '& img': {
      right: 0,
      width: 67,
      bottom: 0,
      position: 'absolute'
    },
  },

  relativeClass: {
    position: 'relative'
  },

  relativeClassStatus: {
    marginBottom: 10,
    position: 'relative'
  },

  root: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },

  iconSelect: {
    color: '#212121',
    margin: '5px 6px 0px 0px'
  },

  selectEmpty: {
    border: '1px solid #9E9E9E',
    borderRadius: '5px',
    boxShadow: '0px 0px 4px rgba(66, 66, 66, 0.2), 0px 2px 2px rgba(66, 66, 66, 0.2)',
    width: '100%',
  },

  statusDocument: {
    color: theme.colors.grey[100],
    margin: '26px 0px 9px 0px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '21px'
  },

  titleCardApprovel: {
    background: '#74B816',
    borderRadius: '0px 0px 20px 0px',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 20px',
    width: 'fit-content'
  },

  titleCardArchived: {
    background: '#8D98AA',
    borderRadius: '0px 0px 20px 0px',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 20px',
    width: 'fit-content'
  },

  titleCardDrafted: {
    background: '#0C7AB0',
    borderRadius: '0px 0px 20px 0px',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 20px',
    width: 'fit-content'
  },

  titleCardPublished: {
    background: '#45BFB7',
    borderRadius: '0px 0px 20px 0px',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 20px',
    width: 'fit-content'
  },

  titleCardRejected: {
    background: '#DE1B1B',
    borderRadius: '0px 0px 20px 0px',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 20px',
    width: 'fit-content'
  },

  titleCardRevision: {
    background: '#D07A11',
    borderRadius: '0px 0px 20px 0px',
    color: '#FFF',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '8px 20px',
    width: 'fit-content'
  },

  titleDocument: {
    color: theme.colors.grey[100],
    fontSize: '14px',
    fontWeight: 500,
    margin: '10px 0px 5px 0px',
    lineHeight: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical'
  },

  titleItemDocument: {
    ['@media (max-width: 767px)']: {
      marginTop: 5,
      marginBottom: 5
    },
    background: '#F5F5F5',
    color: theme.palette.base.primary.main,
    fontWeight: 500,
    padding: '7px 10px',
    width: 'fit-content'
  },

  titleOwnerDocument: {
    color: '#616161',
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '14px'
  },

  titleSearchInput: {
    fontSize: '24px',
    lineHeight: '28px',
    marginBottom: '20px',
    marginTop: 0
  },

  titleSorting: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '19px',
    color: theme.colors.grey[100],
    marginBottom: '10px'
  },

  inputSearch: {
    padding: '0px 12px'
  },

  loading: {
    marginTop: '89px'
  },

  viewDetails: {
    ['@media (max-width: 767px)']: {
      marginTop: 0,
      left: 0,
      top: '58px'
    },
    ['@media (min-width:768px) and (max-width:1299px)']: {
      paddingTop: '35px',
      marginTop: 0,
      marginRight: '-35px'
    },
    color: theme.palette.base.primary.main,
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '16px',
    position: 'absolute',
    marginTop: '12px',
    right: '63px',
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline'
    }
  },

  wrapperContent: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      padding: '0px 0px',
    },
  },

  wrapperContentCard: {
    ['@media (max-width: 767px)']: {
      width: '100%',
      padding: 10
    },
    padding: 30
  },

  wrapperEmptyData: {
    display: 'flex',
    justifyContent: 'center',
    margin: '85px'
  },

  wrapperIconLock: {
    borderBottom: '90px solid #EEEEEE',
    borderLeft: '90px solid transparent',
    bottom: 0,
    height: 0,
    position: 'absolute',
    right: 0,
    width: 0
  },

  wrapperPaperCard: {
    ['@media (max-width: 767px)']: {
      padding: '0 15px'
    },
    width: '100%'
  },

  wrapperButtonDownload: {
    position: 'fixed',
    bottom: 0,
    right: 5
  },

  wrapperDocument: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      paddingLeft: '79px',
    }
  },

  containerStatusDocument: {
    ['@media (min-width:768px) and (max-width:1299px)']: {
      width: '228px',
    },
    width: '250px',
    borderRight: '1px solid #E0E0E0',
    height: '90%'
  },

  dropdownStyle: {
    margin: '50px 0px 0px -2px'
  },

  formControl: {
    width: '216px'
  },

  routeDecoration:{
    textDecoration:'none'
  },

  mobileLabel: {
    textTransform: 'none',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    color: '#424242'
  },

  viewDowComWrapper: {
    ['@media (max-width: 767px)']: {
      display: 'flex'
    },
    ['@media (min-width:768px) and (max-width:1299px)']: {
      display: 'inline-block',
    },
  },

  swap: {
    margin: '0px 3px'
  },
});

export default styles;
