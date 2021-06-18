import { CssBaseline, Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#69b7d6",
    color: "black",
  },

  toolbar: { marginTop: "5rem" },
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  navLink: {
    display: "flex",
    justifyContent: "center",
    color: "black",
    textDecoration: "none",
    padding: 20,
    alignItems: "center",
    width: "100%",
  },
  navLinkFocus: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    padding: 20,
    alignItems: "center",
    backgroundColor: "black",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <NavLink
          activeClassName={classes.navLinkFocus}
          className={classes.navLink}
          to="/designs"
        >
          <p>Designs</p>
        </NavLink>
        <NavLink
          activeClassName={classes.navLinkFocus}
          className={classes.navLink}
          to="/setouts"
        >
          <p>Setouts</p>
        </NavLink>
      </Drawer>
    </div>
  );
};

export default Nav;
