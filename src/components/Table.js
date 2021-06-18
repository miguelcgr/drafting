import React from "react";
import {
  Paper,
  TableContainer,
  Table as TableMaterial,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxHeight: 450,
    width: "70%",
    margin: "auto",
  },
});

const Table = ({ headers, items, cellsFormatters }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root}>
      <TableMaterial stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item._id}>
              {cellsFormatters.map((formatter) => (
                <TableCell>{formatter(item)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableMaterial>
    </TableContainer>
  );
};

export default Table;
