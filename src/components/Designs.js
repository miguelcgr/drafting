import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import designService from "../services/design-service";
import usersService from "../services/user-service";
import "./../App.css";
import Table from "./Table";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  userIcon: {
    backgroundColor: "#69b7d6",
    borderRadius: "50%",
    height: "2rem",
    width: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  },
  fontBold: {
    fontWeight: "bold",
  },
  headersCenter: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3em",
  },
  cellsClass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3em",
  },
});

const Designs = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const [users, setUsers] = useState([]);

  const tableHead = [
    <span className={classes.fontBold}>Name</span>,
    <span className={classes.headersCenter}>Courses</span>,
    <span className={classes.headersCenter}>Wales</span>,
    <span className={classes.headersCenter}>Last Updated</span>,
    <span className={classes.headersCenter}>By</span>,
  ];

  const cellsFormatters = [
    (item) => <span>{item.name}</span>,
    (item) => <span className={classes.cellsClass}>{item.courses}</span>,
    (item) => <span className={classes.cellsClass}>{item.wales}</span>,

    (item) => {
      const formattedDate = item.updated
        .slice(2, 10)
        .split("-")
        .reverse()
        .join("/");
      return <span className={classes.cellsClass}>{formattedDate}</span>;
    },

    (item) => {
      const user = users.find((user) => item.user_id_last_update === user.id);

      if (user) {
        return (
          <div className={classes.cellsClass}>
            <span className={classes.userIcon}>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        );
      }
    },
  ];

  useEffect(() => {
    usersService
      .getUsers()
      .then((res) => setUsers(res))
      .catch((err) => console.log(err));

    designService
      .getDesigns()
      .then((res) => {
        setInfo(res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <Table headers={tableHead} items={info} cellsFormatters={cellsFormatters} />
  );
};

export default Designs;
