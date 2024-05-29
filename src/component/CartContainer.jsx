import CartItems from "./CartItems";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, ClearItem } from "../redux/action";
const CartContainer = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  if (cart.length === 0) {
    return (
      <h2
        className="fw-bold"
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        Your shopping{" "}
        <span>
          <MDBIcon fas icon="shopping-bag" />
        </span>{" "}
        is empty
      </h2>
    );
  }
  return (
    <div>
      <h2
        className="fw-bold"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Your Shopping cart
      </h2>
      {cart.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <hr />
      <footer>
        <div>
          <h4
            style={{
              display: "flex",
              marginRight: "60px",
              marginLeft: "560px",
            }}
          >
            Total: <span>${totalAmount}</span>
          </h4>
        </div>
        <MDBBtn
          color="danger"
          onClick={() => dispatch(ClearItem())}
          style={{ width: "140px", marginTop: "10px", marginLeft: "560px" }}
        >
          Clear
        </MDBBtn>
      </footer>
    </div>
  );
};
export default CartContainer;
