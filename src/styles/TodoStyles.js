import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  Todo: {
    width: '100%',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '0.5rem',
    color: '#34495e',
    fontSize: '1.2rem',
    lineHeight: '2.5rem',
    overflowX: 'hidden',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'rgba(0, 200, 0, 0.3)',
      cursor: 'pointer'
    },
    '&:hover div': {
      opacity: '1'
    }
  },
  icons: {
    width: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '1rem',
    float: 'right',
    // transition: 'all 0.3s',
    // opacity: '0'
  }
});
