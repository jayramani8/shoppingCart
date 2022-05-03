import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { data } from "autoprefixer";
import CartCard from "./CartCard";
import Router from "next/router";

const AddToCart = (props: any) => {
  if (props.cartData.length) {
    const [cartData, setCartData] = useState(props.cartData);
    //   const [price, setPrice] = useState(0);
    props.cartData.forEach((object: any) => {
      object.qty = parseInt("1");
    });
    // console.log(cartData);
    let TotalPrice = cartData.reduce((n: number, { price }) => n + price, 0);
    let TotalItem = cartData.reduce((n: number, { qty }) => n + qty, 0);
    // console.log(TotalItem);
    const [totalPrice, setTotalPrice] = useState(TotalPrice);
    const [toalItem, setTotalItem] = useState(TotalItem);

    const onSelect = (id: number, e: number) => {
      const cartDataArray = [...cartData];
      const objIndex = cartDataArray.findIndex((obj) => obj.id === id);
      const item = props.cartData[objIndex].qty * 1;
      cartDataArray[objIndex].qty = item * e;
      const price = props.cartData[objIndex].price * 1;
      cartDataArray[objIndex].price = price * e;
      setCartData(cartDataArray);
      // const setprice = TotalPrice;
    };
    useEffect(() => {
      setTotalPrice(TotalPrice);
      setTotalItem(TotalItem);
    });
    // console.log(TotalPrice);
    // console.log(totalPrice);

    const onDeleteHandler = (id) => {
      const oldStorage = JSON.parse(localStorage.getItem("UserCart"));
      let filterArray;
      for (let x in oldStorage) {
        console.log(x);
        const itemids = JSON.parse(oldStorage[x]);
        if (itemids === id) {
          oldStorage.splice(x, 1);
        }

        localStorage.setItem("UserCart", oldStorage);
        const arry = [...cartData];
        filterArray = arry.filter((elem) => {
          return elem.id === oldStorage[x];
        });
      }
      localStorage.setItem("UserCart", JSON.stringify(oldStorage));
      setCartData(filterArray);
    };

    const onCheckOut = () => {
      const productId = cartData.map((item) => item.id);
      const productQty = cartData.map((item) => item.qty);
      if (toalItem > 0) {
        Router.push({
          pathname: "/user/checkout",
          query: {
            TotalItem: TotalItem,
            totalPrice: totalPrice,
            productId: productId,
            productQty: productQty,
          },
        });
      } else {
        alert("please add Item");
      }
    };

    return (
      <>
        <div className="card mt-5">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h4 className="text-center">
                      <b>Shopping Cart</b>
                    </h4>
                  </div>
                  {/* <div class="col align-self-center text-right text-muted">
                  3 items
                </div> */}
                </div>
              </div>
              {cartData.length === 0 ? <div>No Data Found</div> : ""}
              {cartData.map((item: any, index) => {
                return (
                  <CartCard
                    key={index}
                    itemid={item.id}
                    itemTitle={item.title}
                    price={item.price}
                    image={item.image}
                    category={item.Category.title}
                    onSelect={onSelect}
                    onDeleteHandler={onDeleteHandler}
                  />
                );
              })}
            </div>
            <div className="col-md-4 summary">
              <div>
                <h5>
                  <b>Summary</b>
                </h5>
              </div>
              <hr />
              <div className="row">
                <div className="col">ITEMS {toalItem}</div>
                <div className="col text-right">₹ {totalPrice}</div>
              </div>
              <div
                className="row mt-4"
                //   style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"
              >
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">₹ {totalPrice}</div>
              </div>{" "}
              <button
                type="button"
                className="btn btn-dark btn-block btn-lg"
                data-mdb-ripple-color="dark"
                onClick={onCheckOut}
              >
                Checkout
              </button>
              <Link href="/user/userdashboard" passHref>
                <p className="p-2 text-center" role="button">
                  continue shopping
                </p>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AddToCart;
