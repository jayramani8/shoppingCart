import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import Axios from "axios";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import EditCategory from "../../../components/admin/EditCategory";
import adminAuth from "../adminAuth";
export const getServerSideProps = async ({ params }) => {
  const id = params.categoryId;
  // console.log("jhgd");

  const result = await Axios.get(`http://localhost:8080/fetchCategory/${id}`);
  const data = result.data;

  return {
    props: {
      data,
    },
  };
};
const fetchCategory = (props) => {
  adminAuth();
  const { id, title, Description } = props.data[0];
  const fetchCategory = {
    id,
    title,
    Description,
  };
  // console.log(fetchCategory);

  return (
    <>
      <AdminNavbar />
      <EditCategory EditCategory={fetchCategory} />
    </>
  );
};

export default fetchCategory;
