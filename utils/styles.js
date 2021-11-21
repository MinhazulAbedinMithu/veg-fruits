import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 800,
    '& a': {
      color: '',
    }
  },
  main: {
    color: 'gray',
    height: '85vh',
  },
  footer: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'gray',
    padding: '5px 0'

  }
});
export default useStyles;