import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxHeight: 440,
    width: "60%",
    margin: "auto",
  },
});

const Listing = (props) => {
  const view = props.location.view;
  console.log("view name", view.name);
  const classes = useStyles();

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${view.name}`)
      .then((res) => {
        const { data } = res;
        setInfo(data);
        console.log("info", data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <TableContainer className={classes.root}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {props.location.view.headData.map((element) => (
              <TableCell key={element}>{element}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((element) => (
            <TableRow>
              <TableCell>{element.name}</TableCell>
              <TableCell>{element.machine_name}</TableCell>
              <TableCell>{element.machine_width}</TableCell>
              <TableCell>{element.courses}</TableCell>
              <TableCell>{element.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Listing;
