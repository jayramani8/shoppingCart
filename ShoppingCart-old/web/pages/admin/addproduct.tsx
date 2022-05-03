import React from "react";
import AddProduct from "../../components/admin/AddProduct";
import AdminNavbar from "../../components/admin/AdminNavbar";
import adminAuth from "./adminAuth";
const addproducts = () => {
  adminAuth();
  return (
    <>
      <AdminNavbar />
      <AddProduct />
    </>
  );
};

export default addproducts;
