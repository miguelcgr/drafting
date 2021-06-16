import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
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

  const classes = useStyles();

  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${view.name}`)
      .then((res) => {
        const { data } = res;
        console.log("column1value", view.column1Value);
        console.log("column2value", view.column2Value);
        setInfo(data);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    //<Paper className={classes.root}>
      <TableContainer className={classes.root}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>{view.column1Name}</TableCell>
              <TableCell>{view.column2Name}</TableCell>
              <TableCell>{view.column3Name}</TableCell>
              <TableCell>{view.column4Name}</TableCell>
              <TableCell>{view.column5Name}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.map((element) => (
              <TableRow key={element._id}>
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
  // </Paper>
  );
};

export default Listing;
