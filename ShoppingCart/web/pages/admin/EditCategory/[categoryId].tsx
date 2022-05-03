import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import Axios from "axios";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import EditCategory from "../../../components/admin/EditCategory";
import adminAuth from "../adminAuth";
import UseApi from "../../../callApi/UseApi";

export const getServerSideProps = async ({ params }) => {
  const id: number = params.categoryId;
  const { editCategoryUrl } = UseApi();
  // console.log("jhgd");

  const result = await editCategoryUrl(id);
  const data = result.data;

  return {
    props: {
      data,
    },
  };
};
const fetchCategory = (props: any) => {
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
