import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://ecocart.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));

  }, []);
  const handleDelete = (id) => {
    const url = `https://ecocart.onrender.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Delete successfull",
            showConfirmButton: false,
            timer: 1500,
          });
          const remainingProducts = allProducts.filter(
            (newUpdate) => newUpdate._id !== id
          );
          setAllProducts(remainingProducts);
        }
      });
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <>
      <div className="addProduct-image">
        <div className="mainInfo">
          <h6 className="gnrlInfo">All Products List:</h6>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>SL</StyledTableCell>
                    <StyledTableCell>Title</StyledTableCell>
                    <StyledTableCell align="center">
                      Buying Price
                    </StyledTableCell>
                    <StyledTableCell align="center">Sell Price</StyledTableCell>
                    <StyledTableCell align="center">SKU</StyledTableCell>
                    <StyledTableCell align="center">Stock</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                   allProducts.map((manageTable, index) => (
                    <StyledTableRow key={manageTable._id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {manageTable.title}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.buyPrice}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.salePrice}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.sku}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.stock}
                      </StyledTableCell>
                      <div className="button">
                        <StyledTableCell align="center">
                          <div className="actionButtons">
                        <Link to={`${manageTable._id}`}>
                        <button
                            className="mt-2 me-1 dltButton"
                          >
                            Edit
                          </button>
                        </Link>
                          <button
                            onClick={() => handleDelete(manageTable._id)}
                            className="mt-2 dltButton"
                          >
                            Delete
                          </button>
                          </div>
                        </StyledTableCell>
                      </div>
                    </StyledTableRow>
                  ))
                   } 
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

      </div>
    </>
  );
};

export default AllProducts;
