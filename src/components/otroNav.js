
import { React, Link } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItemText, ListItem,} from "@material-ui/core";

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
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },

  listItemFocus: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    textDecoration: "none",
    padding: 10,
    alignItems: "center",
    backgroundColor: "black",
  },
  listItemNonFocus: {
    display: "flex",
    justifyContent: "center",
    color: "black",
    textDecoration: "none",
    padding: 10,
    alignItems: "center",
  },
}));

const Nav = () => {
  const [index, setIndex] = useState();
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
        <List>
          <ListItem
            className={
              index === 0 ? classes.listItemFocus : classes.listItemNonFocus
            }
            onClick={(event) => setIndex(0)}
          >
            <Link
              className={
                index === 0 ? classes.listItemFocus : classes.listItemNonFocus
              }
              to={{
                pathname: "/listing",
                view: {
                  name: "designs",
                  headData: ["Name", "Courses", "Wales", "Last Updated", "By"],
                  bodyData: "",
                },
              }}
              id="home-btn"
            >
              <p>Designs</p>
            </Link>
          </ListItem>

          <ListItem
            className={
              index === 1 ? classes.listItemFocus : classes.listItemNonFocus
            }
            onClick={(event) => setIndex(1)}
          >
            <Link
              className={
                index === 1 ? classes.listItemFocus : classes.listItemNonFocus
              }
              to={{
                pathname: "/listing",
                view: {
                  name: "setouts",
                  headData: [
                    "Name",
                    "Machine Name",
                    "Machine Width",
                    "Courses",
                    "Last Updated",
                  ],
                  bodyData: [
                    "name",
                    "machine_name",
                    "machine_width",
                    "courses",
                    "updated",
                  ],
                },
              }}
              id="/setouts"
            >
              <p>Setouts</p>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Nav;