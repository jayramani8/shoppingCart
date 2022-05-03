import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CartCard = (props: any) => {
  return (
    <>
      <div key={props.itemid} className="row border-top border-bottom mt-2">
        <div className="row main align-items-center">
          <div className="col-2">
            <img
              className="img-fluid"
              src={`http://localhost:8080/${props.image}`}
            />
          </div>
          <div className="col">
            <div className="row text-muted">{props.category}</div>
            <div className="row">{props.itemTitle}</div>
          </div>
          <div className="col">
            <select
              className="block w-35 text-gray-700 qty-select py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              name="quantity"
              onChange={(e) => {
                props.onSelect(props.itemid, e.target.value);
              }}
            >
              {(() => {
                const pagecount = [];

                for (let i = 1; i <= 10; i++) {
                  pagecount.push(
                    <option
                      // name="pageNo"
                      key={i}
                      className="rounded"
                      value={i}
                      // onClick={() => onPageSubmit(i)}
                    >
                      {i}
                    </option>
                  );
                }

                return pagecount;
              })()}
            </select>
          </div>
          <div className="col flex justify-content-between">
            <div>₹ {props.price} </div>
            <div>
              <FontAwesomeIcon
                icon={faTrash}
                color="#dc3545"
                fontSize="22px"
                cursor="pointer"
                onClick={() => props.onDeleteHandler(props.itemid)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
