import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from '@material-ui/core';
import {
  MoreVert as MoreIcon,
  Home as HomeIcon,
  Public as PublicIcon,
  BarChart as BarChartIcon,
} from '@material-ui/icons';
import useStyles from './navbarStyles';

const Navbar = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // eslint-disable-next-line no-unused-vars
  const handleMobileMenuClose = (option) => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
        <Link to="/" className={classes.link}>
          <IconButton color="inherit">
            <HomeIcon />
          </IconButton>
        </Link>
      </MenuItem>

      <MenuItem onClick={() => handleMobileMenuClose('main')}>
        <Link to="/countries" className={classes.link}>
          <IconButton color="inherit">
            <PublicIcon />
          </IconButton>
        </Link>
      </MenuItem>

      <MenuItem onClick={() => handleMobileMenuClose('about')}>
        <Link to="/stats" className={classes.link}>
          <IconButton color="inherit">
            <BarChartIcon />
          </IconButton>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <Typography className={classes.title} variant="h5" noWrap>
            aac-devs
          </Typography>
          <div className={classes.grow} />

          <IconButton color="inherit" className={classes.titleDesktop}>
            <Link to="/" className={classes.link}>
              <HomeIcon />
            </Link>
          </IconButton>

          <IconButton color="inherit" className={classes.titleDesktop}>
            <Link to="/countries" className={classes.link}>
              <PublicIcon />
            </Link>
          </IconButton>

          <IconButton color="inherit" className={classes.titleDesktop}>
            <Link to="/stats" className={classes.link}>
              <BarChartIcon />
            </Link>
          </IconButton>

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
