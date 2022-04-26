import React from "react";
import AddCategory from "../../components/admin/AddCategory";
import AdminNavbar from "../../components/admin/AdminNavbar";
import adminAuth from "./adminAuth";
const addcategory = () => {
  adminAuth();
  return (
    <>
      <AdminNavbar />
      <AddCategory />
    </>
  );
};

export default addcategory;
