import React from "react";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import ViewProduct from "../../../components/admin/ViewProduct";
import { GetServerSideProps, GetStaticProps } from "next";
import Axios from "axios";
import EditProduct from "../../../components/admin/EditProduct";
import adminAuth from "../adminAuth";
export const getServerSideProps = async ({ params }) => {
  const id = params.productId;

  const result = await Axios.get(`http://localhost:8080/fetchProduct/${id}`);
  const data = result.data;

  return {
    props: {
      data,
    },
  };
};
const FetchProduct = (props) => {
  adminAuth();
  const productData = {
    id: props.data[0].id,
    title: props.data[0].title,
    price: props.data[0].price,
    categoryTitle: props.data[0].Category.title,
    categoryId: props.data[0].Category.id,
    quantity: props.data[0].quantity,
    Description: props.data[0].Description,
    image: props.data[0].image,
    createdAt: props.data[0].createdAt,
    updatedAt: props.data[0].updatedAt
      ? props.data[0].updatedAt
      : "not updated",
  };
  console.log(productData);
  return (
    <>
      <AdminNavbar />
      <EditProduct FetchProduct={productData} />
    </>
  );
};

export default FetchProduct;
