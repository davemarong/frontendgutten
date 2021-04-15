import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menuItems from "./MenuItems";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Classes from "./Classes";
import useMediaQuery from "@material-ui/core/useMediaQuery";
export default function Nav() {
  const { classes } = Classes();
  const isLogged = useSelector((state) => state.isLogged);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
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
                {isLogged ? (
                  <IconButton className={classes.accountIconMobile}>
                    <Link to="/myPage">
                      <AccountCircle />
                    </Link>
                  </IconButton>
                ) : (
                  <Link className={classes.remove_underline} to="/login">
                    <Button color="primary" variant="contained">
                      Logg Inn
                    </Button>
                  </Link>
                )}
                <Menu
                  className={classes.menu}
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
                <div className={classes.desktop_menuItems}>
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
                  {isLogged ? (
                    <IconButton>
                      <Link to="/myPage">
                        <AccountCircle className={classes.accountIconDesktop} />
                      </Link>
                    </IconButton>
                  ) : (
                    <Link className={classes.remove_underline} to="/login">
                      <Button color="primary" variant="contained">
                        Logg Inn
                      </Button>
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
