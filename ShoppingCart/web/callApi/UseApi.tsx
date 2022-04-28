import React from "react";
import Axios from "axios";

const UseApi = () => {
  //admin login
  const adminLoginUrl = (loginData: object) => {
    return Axios.post("http://localhost:8080/adminlogin", loginData);
  };

  //admin authentication
  const adminAuthUrl = (headers: object) => {
    return Axios.get("http://localhost:8080/adminAuth", headers);
  };

  //add product
  const addProductUrl = (formData: object, headers: object) => {
    return Axios.post("http://localhost:8080/addProduct", formData, headers);
  };

  //view product
  const viewProductUrl = (id: number) => {
    return Axios.get(`http://localhost:8080/fetchProduct/${id}`);
  };

  //delete Product
  const deleteProductUrl = (headers: object, id: number) => {
    return Axios.delete(`http://localhost:8080/deleteProduct/${id}`, headers);
  };

  //edit product
  const editProductUrl = (id: number) => {
    return Axios.get(`http://localhost:8080/fetchProduct/${id}`);
  };

  //update product
  const updateProductUrl = (headers: object, formData: Object, id: number) => {
    return Axios.put(
      `http://localhost:8080/updateProduct/${id}`,
      formData,
      headers
    );
  };

  //fetch product data for admin
  const fetchProductUrl = (headers: object) => {
    return Axios.get("http://localhost:8080/showProduct", headers);
  };

  // add category
  const addCategoryUrl = (categoryData: object, headers: object) => {
    return Axios.post(
      "http://localhost:8080/addCategory",
      categoryData,
      headers
    );
  };

  //edit category
  const editCategoryUrl = (id: number) => {
    return Axios.get(`http://localhost:8080/fetchCategory/${id}`);
  };

  //update Category
  const updateCategoryUrl = (
    headers: object,
    categoryData: Object,
    id: number
  ) => {
    return Axios.put(
      `http://localhost:8080/updateCategoty/${id}`,
      categoryData,
      headers
    );
  };

  //delete Category
  const deleteCategoryUrl = (headers: object, id: number) => {
    return Axios.delete(`http://localhost:8080/deleteCategoty/${id}`, headers);
  };

  //fetch category data for admin
  const fetchCategoryUrl = (headers: object) => {
    return Axios.get("http://localhost:8080/showCategory", headers);
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
  };
};

export default UseApi;
