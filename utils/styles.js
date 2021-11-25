import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 800,
    '& a': {
      color: 'white',
      margin: '0 5px',
      fontSize: '20px',
      textDecoration: 'none'
    }
  },
  brand: {
    textDecoration: 'none',
    color: 'greenyellow',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
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