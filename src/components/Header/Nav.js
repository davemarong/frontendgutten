import React, { useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";

import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    logo: {
      flexGrow: 1,
    },
    remove_underline: {
      textDecoration: "none",
    },
  }));
  const classes = useStyles();
  const menuItems = [
    {
      menuTitle: "Hjem",
      pageURL: "/home",
      id: 0,
    },
    {
      menuTitle: "Innlegg",
      pageURL: "/posts",
      id: 1,
    },
    {
      menuTitle: "Om",
      pageURL: "/about",
      id: 2,
    },
    {
      menuTitle: "Kontakt",
      pageURL: "/contact",
      id: 3,
    },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  console.log(isMobile);
  return (
    <div>
      <AppBar
        className={classes.remove_underline}
        position="relative"
        color="transparent"
      >
        <Toolbar>
          <Typography className={classes.logo}>
            <Link className={classes.remove_underline} to="/home">
              FrontEndGutten
            </Link>
          </Typography>

          <div>
            {isMobile ? (
              <>
                <Link className={classes.remove_underline} to="/signUp_signIn">
                  <Button color="primary" variant="contained">
                    Logg Inn
                  </Button>
                </Link>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {menuItems.map((item) => {
                    return (
                      <Link
                        className={classes.remove_underline}
                        key={item.id}
                        to={item.pageURL}
                      >
                        <MenuItem onClick={handleClose}>
                          {item.menuTitle}
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
                <IconButton onClick={handleMenu}>
                  <MenuIcon
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  />
                </IconButton>
              </>
            ) : (
              <>
                {menuItems.map((item) => {
                  return (
                    <Link
                      className={classes.remove_underline}
                      key={item.id}
                      to={item.pageURL}
                    >
                      <Button onClick={handleClose}>{item.menuTitle}</Button>
                    </Link>
                  );
                })}
                <Link className={classes.remove_underline} to="/signUp_signIn">
                  <Button color="primary" variant="contained">
                    Logg Inn
                  </Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
