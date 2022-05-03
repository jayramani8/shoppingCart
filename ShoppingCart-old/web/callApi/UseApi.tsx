import React from "react";
import Axios from "axios";
const UseApi = () => {
  // admin side
  //admin login

  const adminLoginUrl = (loginData: object) => {
    return Axios.post(`${process.env.API_CALL_URL}/adminlogin`, loginData);
  };

  //admin authentication
  const adminAuthUrl = (headers: object) => {
    return Axios.get(`${process.env.API_CALL_URL}/adminAuth`, headers);
  };

  //add product
  const addProductUrl = (formData: object, headers: object) => {
    return Axios.post(
      `${process.env.API_CALL_URL}/addProduct`,
      formData,
      headers
    );
  };

  //view product
  const viewProductUrl = (id: number) => {
    return Axios.get(`${process.env.API_CALL_URL}/fetchProduct/${id}`);
  };

  //delete Product
  const deleteProductUrl = (headers: object, id: number) => {
    return Axios.delete(
      `${process.env.API_CALL_URL}/deleteProduct/${id}`,
      headers
    );
  };

  //edit product
  const editProductUrl = (id: number) => {
    return Axios.get(`${process.env.API_CALL_URL}/fetchProduct/${id}`);
  };

  //update product
  const updateProductUrl = (headers: object, formData: Object, id: number) => {
    return Axios.put(
      `${process.env.API_CALL_URL}/updateProduct/${id}`,
      formData,
      headers
    );
  };

  //fetch product data for admin
  const fetchProductUrl = (headers: object) => {
    return Axios.get(`${process.env.API_CALL_URL}/showProduct`, headers);
  };

  // add category
  const addCategoryUrl = (categoryData: object, headers: object) => {
    return Axios.post(
      `${process.env.API_CALL_URL}/addCategory`,
      categoryData,
      headers
    );
  };

  //edit category
  const editCategoryUrl = (id: number) => {
    return Axios.get(`${process.env.API_CALL_URL}/fetchCategory/${id}`);
  };

  //update Category
  const updateCategoryUrl = (
    headers: object,
    categoryData: Object,
    id: number
  ) => {
    return Axios.put(
      `${process.env.API_CALL_URL}/updateCategoty/${id}`,
      categoryData,
      headers
    );
  };

  //delete Category
  const deleteCategoryUrl = (headers: object, id: number) => {
    return Axios.delete(
      `${process.env.API_CALL_URL}/deleteCategoty/${id}`,
      headers
    );
  };

  //fetch category data for admin
  const fetchCategoryUrl = (headers: object) => {
    return Axios.get(`${process.env.API_CALL_URL}/showCategory`, headers);
  };

  // user side

  //register user
  const userRegisterUrl = (registerData: object) => {
    return Axios.post(`${process.env.API_CALL_URL}/registerUser`, registerData);
  };

  //user login
  const userLoginUrl = (loginData: object) => {
    return Axios.post(`${process.env.API_CALL_URL}/userLogin`, loginData);
  };

  //user authentication
  const userAuthUrl = (headers: object) => {
    return Axios.get(`${process.env.API_CALL_URL}/userAuth`, headers);
  };

  // show all product for user
  const showProductUrl = (headers: object) => {
    return Axios.get(`${process.env.API_CALL_URL}/fetchProduct`, headers);
  };

  // more details for perticular product
  const moreDetailsUrl = (id: number) => {
    return Axios.get(`${process.env.API_CALL_URL}/fetchProduct/${id}`);
  };
  //view cart
  const viewCartUrl = (headers: object) => {
    return Axios.get(`${process.env.API_CALL_URL}/viewCart`, headers);
  };

  //user CheckOutUrl
  const userCheckOutUrl = (headers: object, orderDetails: object) => {
    return Axios.post(
      `${process.env.API_CALL_URL}/placeOrder`,
      orderDetails,
      headers
    );
  };
  return {
    adminLoginUrl,
    fetchProductUrl,
    fetchCategoryUrl,
    adminAuthUrl,
    addProductUrl,
    viewProductUrl,
    editProductUrl,
    updateProductUrl,
    deleteProductUrl,
    addCategoryUrl,
    deleteCategoryUrl,
    editCategoryUrl,
    updateCategoryUrl,

    userRegisterUrl,
    userLoginUrl,
    userAuthUrl,
    showProductUrl,
    moreDetailsUrl,
    viewCartUrl,
    userCheckOutUrl,
  };
};

export default UseApi;
