import { React, useState } from "react";
import Router from "next/router";
import Axios from "axios";
import Link from "next/link";

const EditCategory = (props) => {
  const [editCategory, setEditCategory] = useState(props.EditCategory);
  console.log(editCategory);

  const inputHandler = (e) => {
    const value = e.target.value;
    setEditCategory({
      ...editCategory,
      [e.target.name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

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

    const categoryData = {
      title: editCategory.title,
      Description: editCategory.Description,
    };
    console.log(categoryData);
    const id = editCategory.id;
    const res = await Axios.put(
      `http://localhost:8080/updateCategoty/${id}`,
      categoryData,
      headers
    );
    if (res.data.msg === "unAuthorized") {
      alert("you are not authorized");
      Router.push("/");
    }
    if (res.status === 200) {
      alert("Category Updated");
      Router.push("/admin/category");
    }
  };
  return (
    <>
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
                      Update Category
                    </h2>

                    <form method="post">
                      <div className="form-outline mb-4">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter Title"
                          defaultValue={editCategory.title}
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
                          defaultValue={editCategory.Description}
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                          onClick={submitHandler}
                        >
                          Update Category
                        </button>
                      </div>
                      <div className="d-flex justify-content-center mt-2">
                        <Link href="/admin/category" passHref>
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

export default EditCategory;
