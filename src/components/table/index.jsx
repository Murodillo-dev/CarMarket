import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import GenericButton from "../Generic/button";
import { Action, Box, Path, Plus } from "./style";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import MultipleSelect from "../Generic/select";
import { Height } from "@mui/icons-material";
const columns = [
  { id: "#", label: "#" },
  { id: "markasi", label: "Markasi", minWidth: 150 },
  { id: "nomi", label: "Nomi", minWidth: 170 },
  {
    id: "tnirovka",
    label: "Tanirovka",
    minWidth: 100,
    align: "left",
  },
  {
    id: "mator",
    label: "Mator",
    minWidth: 100,
    align: "left",
  },
  {
    id: "yil",
    label: "Yil",
    minWidth: 100,
    align: "left",
  },
  {
    id: "rang",
    label: "Rang",
    minWidth: 100,
    align: "left",
  },
  {
    id: "masofa",
    label: "Masofa",
    minWidth: 100,
    align: "left",
  },
  {
    id: "narxi",
    label: "Narxi",
    minWidth: 100,
    align: "left",
  },
];

export default function CarTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const [rows, setRows] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [type, setType] = React.useState("lada");
  console.log(type);

  const location = useLocation();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  React.useEffect(() => {
    const token = Cookies.get("token");
    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : {};
    axios
      .get(
        `https://cars-1-pku7.onrender.com/categories/${type ? type : "lada"}`,
        config
      )
      .then((res) => {
        setRows(res.data);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
      });

    axios
      .get("https://cars-1-pku7.onrender.com/categories", config)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
      });
  }, [type]);

  console.log(rows, "row");
  console.log(categories, "categories");
  const changeHandler = (e) => {
    setType(e.target.value);
  };

  return (
    <Paper sx={{ width: "100%", border: "none", borderRadius: 2 }}>
      <Table sx={tableStyle}>
        <Path>
          <Box />
          {location.pathname.toUpperCase().slice(1) || "ASOSIY"}
        </Path>
        <Action>
          <select onChange={changeHandler} style={selectStyle}>
            {categories.map((value) => {
              return (
                <option key={value.id} value={value.brand}>
                  {value.brand}
                </option>
              );
            })}
          </select>
          {props.children}
        </Action>
      </Table>
      <TableContainer sx={{ maxHeight: 500, border: "none", borderRadius: 2 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "#6F767E",
                    fontSize: 17,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {index + 1}.
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {type}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.model}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.tinting}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.engine}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.year}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.color}
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.distance}Km
                    </TableCell>
                    <TableCell
                      sx={{ fontWeight: 600, fontSize: 15, color: "#1A1D1F" }}
                    >
                      {row.price}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        sx={{ display: "flex", justifyContent: "center" }}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}

const tableStyle = {
  display: "flex",
  gap: 4,
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 2,
  paddingBottom: 4,
  paddingLeft: 1,
  paddingRight: 1,
};
const selectStyle = {
  width: 150,
  paddingLeft: 10,
  Height: 40,
  borderRadius: 12,
  outline: "none",
  border: "none",
  backgroundColor: "#2A85FF",
  color: "white",
  fontSize: 15,
  fontWeight: 700,
};
