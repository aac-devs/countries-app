import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexGrow: 1,
  },
  title: {
    margin: '160px 0 48px 0',
    fontWeight: 400,
    fontSize: '80px',
    color: 'white',
    textShadow: '4px 4px 7px #ddd',
  },
  buttons: {
    color: '#000',
    margin: '0 24px',
    backgroundColor: '#c6ff00',
    width: '250px',
    '&:hover': {
      color: '#fff',
      backgroundColor: '#d500f9',
    },
  },
  footer: {
    padding: '32px',
    textAlign: 'center',
    color: '#fff',
    fontSize: '18px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;
