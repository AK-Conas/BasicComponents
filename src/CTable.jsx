import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import CButton from "./CButton";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const DEFAULT_PAGE_SIZE = 5;
const CTable = ({
  cHeaderData,
  cRowData,
  cActualData,
  cTooltipText,
  cIsPagination,
  cSmallSize,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_PAGE_SIZE);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        {/* sx={{ maxHeight: 440 }} */}
        <Table
          aria-label={cTooltipText}
          size={cSmallSize === true ? "small" : "inherit"}
          stickyHeader
        >
          <TableHead>
            <TableRow>
              {cHeaderData.map((headData, headIndex) => (
                <StyledTableCell key={headIndex}>{headData}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cActualData.length > 0 ? (
              cActualData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((actualRow, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    {cRowData.map((rowData, cellIndex) => (
                      <TableCell
                        component="th"
                        scope="row"
                        key={cellIndex}
                        sx={{
                          color:
                            rowData.status === true
                              ? actualRow.status === 0
                                ? "red"
                                : "green"
                              : "inherit",
                        }}
                      >
                        {rowData.type === "T" && actualRow[rowData.value]}
                        {rowData.type === "I" && (
                          <CButton
                            cSrc={rowData.value}
                            cTooltipText={
                              rowData.tooltipText + " " + (rowIndex + 1)
                            }
                            cOnClick={() => rowData.actionV(actualRow)}
                          />
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={cHeaderData.length}
                  sx={{ textAlign: "center" }}
                >
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {cIsPagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={cActualData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

export default CTable;
