import { React, Link } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItemText,
  ListItem,
} from "@material-ui/core";

 

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: 220,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 220,
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
                  column1Name: "Name",
                  column1Value: "name",
                  column2Name: "Courses",
                  column2Value: "courses",
                  column3Name: "Wales",
                  column3Value: "wales",
                  column4Name: "Last Updated",
                  column4Value: "updated",
                  column5Name: "By",
                  column5Value: "user_id_last_update",
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
                  column1Name: "Name",
                  column1Value: "name",
                  column2Name: "Machine Name",
                  column2Value: "machine_name",
                  column3Name: "Machine Width",
                  column3Value: "machine_width",
                  column4Name: "Courses",
                  column4Value: "courses",
                  column5Name: "Last Updated",
                  column5Value: "updated",
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

//////////////////////////////////////   NAV CON DOS COMPONENTES DESIGNS Y SETOUTS

// import { React, Link } from "react-router-dom";
// import "./Nav.css";
// import { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Drawer,
//   CssBaseline,
//   AppBar,
//   Toolbar,
//   List,
//   Typography,
//   Divider,
//   ListItemText,
//   ListItem,
// } from "@material-ui/core";

// const drawerWidth = 220;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     background: "#69b7d6",
//     color: "black",
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },

//   listItemFocus: {
//     display: "flex",
//     justifyContent: "center",
//     color: "white",
//     textDecoration: "none",
//     padding: 10,
//     alignItems: "center",
//     backgroundColor: "black",
//   },
//   listItemNonFocus: {
//     display: "flex",
//     justifyContent: "center",
//     color: "black",
//     textDecoration: "none",
//     padding: 10,
//     alignItems: "center",
//   },
// }));

// const Nav = () => {
//   const [index, setIndex] = useState();
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <Drawer
//         className={classes.drawer}
//         variant="permanent"
//         classes={{
//           paper: classes.drawerPaper,
//         }}
//         anchor="left"
//       >
//         <div className={classes.toolbar} />
//         <List>
//           <ListItem
//             className={
//               index === 0 ? classes.listItemFocus : classes.listItemNonFocus
//             }
//             onClick={(event) => setIndex(0)}
//           >
//             <Link
//               className={
//                 index === 0 ? classes.listItemFocus : classes.listItemNonFocus
//               }
//               to={"/designs"}
//               id="home-btn"
//             >
//               <p>Designs</p>
//             </Link>
//           </ListItem>
//           <ListItem
//             className={
//               index === 1 ? classes.listItemFocus : classes.listItemNonFocus
//             }
//             onClick={(event) => setIndex(1)}
//           >
//             <Link
//               className={
//                 index === 1 ? classes.listItemFocus : classes.listItemNonFocus
//               }
//               to={"/setouts"}
//               id="home-btn"
//             >
//               <p>Setouts</p>
//             </Link>
//           </ListItem>
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default Nav;
