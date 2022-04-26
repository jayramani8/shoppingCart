import { React, useState, useEffect } from "react";
import Axios from "axios";
import Router from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    quantity: "",
    Description: "",
  });
  const [image, setImage] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:8080/showCategory")
      .then((result) => {
        return result;
      })
      .then((data) => {
        setCategory(data.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (e) => {
    const value = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value,
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (product.title.trim() === "") {
      toast("title is empty");
    } else if (product.price === "") {
      toast("price is empty");
    } else if (product.category === "") {
      toast("category is empty");
    } else if (product.quantity === "") {
      toast("quantity is empty");
    } else if (product.Description === "") {
      toast("Description is empty");
    } else if (image === "") {
      toast("image is empty");
    } else {
      const formData = new FormData();

      formData.append("title", product.title);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("quantity", product.quantity);
      formData.append("Description", product.Description);
      formData.append("image", image);

      const saveToken = localStorage.getItem("adminjwt");
      if (saveToken === null) {
        alert("you are not authorized");
        Router.push("/");
      }
      const headers = {
        headers: {
          passToken: "Bearer " + saveToken,
        },
      };

      console.log(formData.title);
      const res = await Axios.post(
        "http://localhost:8080/addProduct",
        formData,
        headers
      );
      if (res.data.msg === "unAuthorized") {
        alert("you are not authorized");
        Router.push("/");
      }
      if (res.status === 200) {
        alert("Product Created");
        Router.push("/admin/adminhome");
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <section
        className=" bg-image "
        // style={{"background-image: 'url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')'"}}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-4 login-box">
                <div className="card border border-dark">
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Add Product
                    </h2>
                    <form method="post" encType="multipart/form-data">
                      <div className="form-outline mb-4">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter Title"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Price</label>
                        <input
                          type="number"
                          name="price"
                          placeholder="Enter price"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Category</label>
                        <select
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                          name="category"
                        >
                          <option>Select Category</option>

                          {category.map((item) => {
                            return (
                              <>
                                <option value={item.id} key={item.id}>
                                  {item.title}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Available quantity</label>
                        <input
                          type="number"
                          name="quantity"
                          placeholder="Enter price"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Description</label>
                        <textarea
                          //   type="password"
                          placeholder="Enter Description"
                          name="Description"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Upload Image</label>
                        <input
                          type="file"
                          name="image"
                          //   placeholder="Enter price"
                          onChange={(e) => setImage(e.target.files[0])}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          onClick={submitHandler}
                        >
                          Add Product
                        </button>
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <Link href="/admin/adminhome" passHref>
                          <button
                            type="submit"
                            className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          >
                            Back
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
