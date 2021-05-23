import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import PublicIcon from '@material-ui/icons/Public';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#004d40',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  titleDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      marginLeft: '24px',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = (option) => {
    setMobileMoreAnchorEl(null);
    console.log('handleMobileMenuClose:', option);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    console.log('handleMobileMenuOpen');
  };

  const handleChangeSearch = () => {
    console.log('handleChangeSearch');
  };

  // const submitSearch = () => {
  //   console.log('submitSearch');
  // };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={() => handleMobileMenuClose('none')}
    >
      <MenuItem onClick={() => handleMobileMenuClose('home')}>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleMobileMenuClose('main')}>
        <IconButton color="inherit">
          <PublicIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/countries" className={classes.link}>
            Countries
          </Link>
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => handleMobileMenuClose('about')}>
        <IconButton color="inherit">
          <InfoIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            aac-devs
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChangeSearch}
              // onSubmit={submitSearch}
            />
          </div>
          <div className={classes.grow} />
          <Typography
            variant="h6"
            className={classes.titleDesktop}
            onClick={() => handleMobileMenuClose('home')}
          >
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Typography>
          <Typography
            variant="h6"
            className={classes.titleDesktop}
            onClick={() => handleMobileMenuClose('main')}
          >
            <Link to="/countries" className={classes.link}>
              Countries
            </Link>
          </Typography>
          <Typography
            variant="h6"
            className={classes.titleDesktop}
            onClick={() => handleMobileMenuClose('about')}
          >
            <Link to="/about" className={classes.link}>
              About
            </Link>
          </Typography>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Navbar;
