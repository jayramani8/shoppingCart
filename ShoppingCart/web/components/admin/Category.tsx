import Link from "next/link";
import { useState } from "react";
import Router from "next/router";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import UseApi from "../../callApi/UseApi";

const Category = (props: any) => {
  if (props.categoryData) {
    const { deleteCategoryUrl } = UseApi();

    const [category, setCategory] = useState(props.categoryData);

    const onDeleteHandler = async (id: number) => {
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
      const res = await deleteCategoryUrl(headers, id);
      if (res.data.msg === "unAuthorized") {
        alert("you are not authorized");
        Router.push("/");
      }
      if (res.status === 200) {
        alert("Categiry Deleted");

        Router.reload();
      }
    };
    // console.log(category);
    return (
      <>
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="text-2xl leading-tight">Category</h2>
              <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  {/* <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Filter'
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="name"
                  />
                </div> */}
                  <Link href="/admin/addcategory">
                    <button
                      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                      type="button"
                    >
                      Add Category
                    </button>
                  </Link>
                </form>
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 table-row-font bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal "
                      >
                        NO
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 table-row-font bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white table-row-font  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white table-row-font  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white table-row-font border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Actions
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              {/* <div class="ml-3"> */}
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item.id}
                              </p>
                              {/* </div> */}
                            </div>
                          </td>
                          <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.title}
                            </p>
                          </td>
                          <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.Description}
                            </p>
                          </td>
                          <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.createdAt}
                            </p>
                          </td>
                          <td className="px-5 py-4 border-b border-gray-200 bg-white text-sm">
                            <div className="d-flex justify-content-around">
                              <div>
                                <Link
                                  href={`/admin/EditCategory/${item.id}`}
                                  passHref
                                >
                                  <span>
                                    <FontAwesomeIcon
                                      icon={faPenToSquare}
                                      color="#0d6efd"
                                      fontSize="30px"
                                      cursor="pointer"
                                    />
                                  </span>
                                </Link>
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  color="#dc3545"
                                  fontSize="30px"
                                  cursor="pointer"
                                  onClick={() => onDeleteHandler(item.id)}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Category;
