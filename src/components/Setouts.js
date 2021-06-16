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
    margin: "20",
  },

});

const Setouts = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [info, setInfo] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/setouts")
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
              <TableCell>Machine Name</TableCell>
              <TableCell>Machine Width</TableCell>
              <TableCell>Courses</TableCell>
              <TableCell>Last Updated</TableCell>
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
    </Paper>
  );
};

export default Setouts;

{
  /* <table>
<tr>
  <th>Name</th>
  <th>Machine Name</th>
  <th>Machine Width</th>
  <th>Courses</th>
  <th>Last Updated</th>
</tr>
{info.map((element) => (
  <tr key={element._id}>
    <td>{element.name}</td>
    <td>{element.machine_name}</td>
    <td>{element.machine_width}</td>
    <td>{element.courses}</td>
    <td>{element.updated}</td>
  </tr>
))}
</table> */
}

/// class component

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./../App.css";
// //
// import {
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TablePagination,
//   TableRow,
// } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// //

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

// class Setouts extends Component {

//   state = {
//     info: [],
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/setouts")
//       .then((res) => {
//         const { data } = res;
//         this.setState({ info: data });
//         console.log("res", res);
//       })
//       .catch((err) => console.log("err", err));
//   }

//   render() {
//     const info = this.state.info;
//     return (
//       <Paper>
//         <TableContainer>
//          <Table>
//           <TableHead>
//            <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Machine Name</TableCell>
//             <TableCell>Machine Width</TableCell>
//             <TableCell>Courses</TableCell>
//             <TableCell>Last Updated</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//           {info.map((element) => (
//             <TableRow key={element._id}>
//               <TableCell>{element.name}</TableCell>
//               <TableCell>{element.machine_name}</TableCell>
//               <TableCell>{element.machine_width}</TableCell>
//               <TableCell>{element.courses}</TableCell>
//               <TableCell>{element.updated}</TableCell>
//             </TableRow>
//           ))}
//           </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     );
//   }
// }

// export default Setouts;
