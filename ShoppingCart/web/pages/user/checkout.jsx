import React from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Router from "next/router";
import UserNavbar from "../../components/user/UserNavbar";
import Link from "next/link";

const checkout = () => {
  const router = useRouter();
  const {
    query: { TotalItem, totalPrice, productId, productQty },
  } = router;
  const props = {
    TotalItem,
    totalPrice,
    productId,
    productQty,
  };
  const orderHandler = async () => {
    const userId = localStorage.getItem("userid");
    const orderDetails = {
      userId: userId,
      TotalItem: TotalItem,
      totalAmount: totalPrice,
      productId: productId,
      productQty: productQty,
    };
    console.log(orderDetails);

    const saveToken = localStorage.getItem("userjwt");
    // console.log(saveToken);
    if (saveToken === null) {
      alert("you are not authorized");
      Router.push("/user/login");
    }

    const headers = {
      headers: {
        passToken: "Bearer " + saveToken,
      },
    };

    const res = await Axios.post(
      "http://localhost:8080/placeOrder",
      orderDetails,
      headers
    );
    if (res.data.msg === "unAuthorized") {
      alert("you are not authorized");
      Router.push("/user/login");
    }
    if (res.status === 200) {
      alert("order placed");
      const oldStorage = JSON.parse(localStorage.getItem("UserCart"));
      oldStorage.splice(0, oldStorage.length);
      localStorage.setItem("UserCart", JSON.stringify(oldStorage));
      Router.push("/user/userdashboard");
    }
  };

  return (
    <>
      <UserNavbar />
      <main className="page payment-page">
        <section className="payment-form dark">
          <div className="container">
            <div className="block-heading">
              <h2></h2>
            </div>
            <form>
              <div className="products">
                <h3 className="title">Checkout</h3>
                <div className="item">
                  <span className="price mr-1">{props.TotalItem}</span>
                  <p className="item-name">Total Items</p>
                  {/* <p className="item-description">Lorem ipsum dolor sit amet</p> */}
                </div>
                <div className="item">
                  <span className="price">{props.totalPrice}</span>
                  <p className="item-name">Subtotal</p>
                  {/* <p className="item-description">Lorem ipsum dolor sit amet</p> */}
                </div>
                <div className="item">
                  <span className="price">00.00</span>
                  <p className="item-name">Tax </p>
                  {/* <p className="item-description">Lorem ipsum dolor sit amet</p> */}
                </div>
                <div className="total">
                  Total<span className="price">{props.totalPrice}</span>
                </div>
                <button
                  type="button"
                  className="py-2 px-4 mt-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={orderHandler}
                >
                  Order Now
                </button>
                <Link href="/user/addTocart" passHref>
                  <button
                    type="button"
                    className="py-2 mt-3 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Back
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
export default checkout;
