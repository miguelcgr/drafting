import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../App.css";
//
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
//


const useStyles = makeStyles({
  root: {
    width: "100%",
    
  },
  container: {
    maxHeight: 440,
  },

});

const Designs = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [info, setInfo] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/designs")
      .then((res) => {
        const { data } = res;

        setInfo(data);
     
      })
      .catch((err) => console.log("err", err));
  }, []);


  return (
    <Paper className = {classes.root}>
      <TableContainer className = {classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Courses</TableCell>
              <TableCell>Wales</TableCell>
              <TableCell>Last Updated</TableCell>
              <TableCell>By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.map((element) => (
              <TableRow key={element._id}>
                <TableCell>{element.name}</TableCell>
                <TableCell>{element.courses}</TableCell>
                <TableCell>{element.wales}</TableCell>
                <TableCell>{element.updated}</TableCell>
                <TableCell>{element.user_id_last_update}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Designs;


