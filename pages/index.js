import AppBar from 'material-ui/AppBar';
import Head from '../components/head';
import Link from 'next/link';
import Nav from '../components/nav';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

export default () => (
  <div>
    <Head title="Home" />
    <Nav />
    <AppBar>
      <Toolbar>
        <Typography type="title" color="inherit">
          Rijksmuseum Demo
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
