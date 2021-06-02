import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '16px',
    opacity: '0.7',
  },
  tableRow: {
    cursor: 'pointer',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#eee',
    },
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
    justifyContent: 'space-between',
    padding: '16px 0',
  },
  body: {
    marginTop: '16px',
    flexGrow: 1,
    border: '1px solid #eee',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  tableContainer: {
    height: '100%',
  },
  formControl: {
    minWidth: '225px',
    maxWidth: '225px',
    width: '225px',
  },
  title: {
    margin: '0 auto',
    marginBottom: '8px',
  },
  search: {
    position: 'relative',
    borderRadius: '5px',
    alignSelf: 'flex-end',
    border: '1px solid #ccc',
    marginTop: '16px',
    width: '30%',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  searchIcon: {
    padding: '0 16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 0',
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
  },
}));

export default useStyles;
