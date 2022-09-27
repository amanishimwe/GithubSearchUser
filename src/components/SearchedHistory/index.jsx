import './styles.css';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 20
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 20,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
export default function SearchedHistory(props) {
    const [names, setNames] = useState([]);
    useEffect(() => {
        const names = JSON.parse(localStorage.getItem('names'));
        if (names) {
            setNames(names);
        }
    }, []);

    const getUser = () => {
        console.log("hello world");
    }
    return (<div className='wrapper'>
        <h1>Search History</h1>
        {/* sorting values by date then pass them to map function*/}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Timestamps</StyledTableCell>
                        <StyledTableCell>Searched names</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.sort(
                        function (a, b) {
                            return b.date - a.date
                        }
                    ).map((name) => (
                        <StyledTableRow >

                            <StyledTableCell>{name.date}
                            </StyledTableCell>
                            <Link to="/">
                                <StyledTableCell align='right' >{name.name}</StyledTableCell>
                            </Link>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>);
}