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

const columns = [
    { id: "#", label: "#" },
    { id: "markasi", label: "Markasi", minWidth: 150 },
    { id: "nomi", label: "Nomi", minWidth: 150 },
    {
        id: "uzatamalar qutisi",
        label: "Uzatmalar qutisi",
        minWidth: 170,
        align: "left",
    },
    {
        id: "tnirovka",
        label: "Tanirovka",
        minWidth: 100,
        align: "left",
    },
    {
        id: "mator",
        label: "Mator",
        minWidth: 170,
        align: "left",
    },
    {
        id: "ot kuchi",
        label: "Ot kuchi",
        minWidth: 150,
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
        minWidth: 150,
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

    const location = useLocation()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    React.useEffect(() => {
        axios.get("https://www.freetestapi.com/api/v1/cars").then((res) => {
            setRows(res.data);
        });
    }, []);

    return (
        <Paper sx={{ width: "100%", border: "none", borderRadius: 2 }}>
            <Table sx={{ display: 'flex', gap: 4, justifyContent: 'space-between', alignItems: 'center', paddingTop: 2, paddingBottom: 4, paddingLeft: 1, paddingRight: 1 }}>
                <Path>
                    <Box />
                    {location.pathname.toUpperCase().slice(1) || 'ASOSIY'}
                </Path>
                <Action>
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
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.id}.
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.make}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.model}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.transmission}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            Yoq
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.engine}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.horsepower} Ot kuchi
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.year}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.color}
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
                                        >
                                            {row.mileage}Km
                                        </TableCell>
                                        <TableCell
                                            sx={{ fontWeight: 600, fontSize: 13, color: "#1A1D1F" }}
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
