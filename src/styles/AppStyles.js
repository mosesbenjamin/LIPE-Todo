import { makeStyles } from '@material-ui/core/styles';
import sizes from '../helpers/sizes';

export default makeStyles({
  App: {
    width: '50%',
    margin: '0 auto',

    [sizes.down('md')]: {
      width: '70%'
    },
    [sizes.down('xs')]: {
      width: '90%'
    }
  },
  header: {
    textAlign: 'center',
    '& h1': {
      color: '#2c3e50',
      margin: '5vh 0 0 0',
      fontSize: '3rem',
      fontWeight: '300',
      '& span': {
        fontWeight: '700'
      },
      [sizes.down('xs')]: {
        fontSize: '4.5rem'
      }
    },
  },
  pg: {
    display:'flex',
    justifyContent: 'center',
    color: 'black',
  },
  particles: {
          position:'fixed',
          top:0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex : -1,
},
});
