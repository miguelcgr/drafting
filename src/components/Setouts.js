import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import setoutService from "../services/setout-service";

import "./../App.css";
import Table from "./Table";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  fontBold: {
    fontWeight: "bold",
  },
  headersCenter: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3em"
  },
  cellsClass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "3em"
  },
});

const Setouts = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  const tableHead = [
    <span className={classes.fontBold}>Name</span>,
    <span className={classes.headersCenter}>Machine Name</span>,
    <span className={classes.headersCenter}>Machine Width</span>,
    <span className={classes.headersCenter}>Courses</span>,
    <span className={classes.headersCenter}>Last Updated</span>,
  ];

  const cellsFormatters = [
    (item) => <span>{item.name}</span>,
    (item) => <span className={classes.cellsClass}>{item.machine_name}</span>,
    (item) => <span className={classes.cellsClass}>{item.machine_width}</span>,
    (item) => <span className={classes.cellsClass}>{item.courses}</span>,
    (item) => {
      const formattedDate = item.updated
        .slice(2, 10)
        .split("-")
        .reverse()
        .join("/");
      return <span className={classes.cellsClass}>{formattedDate}</span>;
    },
  ];

  useEffect(() => {
    setoutService
      .getSetouts()
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

export default Setouts;
