import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
    opacity: '0.7',
  },
  paper: {
    height: 'calc(100vh - 128px)',
    maxWidth: '1024px',
    minWidth: '1024px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  head: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  body: {
    marginTop: '16px',
    flexGrow: 1,
    overflowY: 'scroll',
    border: '1px solid #eee',
    borderRadius: '5px',
  },
  cellSize: {
    minWidth: '125px',
    width: '125px',
    padding: '8px 16px',
  },
  cellPadding: {
    padding: '8px 16px',
  },
  card: {
    heigh: '400px',
    maxHeight: '400px',
    width: '400px',
    maxWidth: '400px',
    marginRight: '16px',
    border: '1px solid #eee',
  },
  headBody: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {},
  button: {
    alignSelf: 'flex-end',
  },
}));

export default useStyles;
