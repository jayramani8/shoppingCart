import React from "react";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import ViewProduct from "../../../components/admin/ViewProduct";
// import EditUser from "../../components/EditUser";
import { GetServerSideProps, GetStaticProps } from "next";
import Axios from "axios";
import UserNavbar from "../../../components/user/UserNavbar";
import MoreDetails from "../../../components/user/MoreDetails";
import authuser from "../authuser";
import UseApi from "../../../callApi/UseApi";
export const getServerSideProps = async ({ params }) => {
  const id: number = params.productId;
  const { moreDetailsUrl } = UseApi();

  const result = await moreDetailsUrl(id);
  const data = result.data;

  return {
    props: {
      data,
    },
  };
};
const viewProduct = (props: any) => {
  // } = props.data;
  authuser();

  const productData = {
    id: props.data[0].id,
    title: props.data[0].title,
    price: props.data[0].price,
    category: props.data[0].Category.title,
    quantity: props.data[0].quantity,
    Description: props.data[0].Description,
    image: props.data[0].image,
    createdAt: props.data[0].createdAt,
    updatedAt: props.data[0].updatedAt
      ? props.data[0].updatedAt
      : "not updated",
  };
  // console.log(productData);
  return (
    <>
      <UserNavbar />
      <MoreDetails viewData={productData} />
    </>
  );
};

export default viewProduct;
