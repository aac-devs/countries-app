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
    overflowY: 'hidden',
    border: '1px solid #eee',
    borderRadius: '5px',
  },
  cellSize: {
    minWidth: '175px',
    width: '175px',
    padding: '16px',
    fontSize: '18px',
  },
  cellPadding: {
    padding: '16px',
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
  formControl: {
    minWidth: '350px',
    maxWidth: '350px',
    width: '350px',
    alignSelf: 'flex-end',
  },
  title: {
    margin: '0 auto',
    marginBottom: '8px',
  },
  tableContainer: {
    height: '100%',
  },
  cellInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cellRight: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  cellAvatar: {
    marginRight: '16px',
  },
  row: {
    minWidth: '386px',
    maxWidth: '386px',
    width: '386px',
  },
}));

const mainRegions = [
  'World',
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'Polar',
];

export { mainRegions };
export default useStyles;
