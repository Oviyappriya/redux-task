import { MDBIcon } from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch } from "react-redux";
import { Decrease, Increase, Remove } from "../redux/action";
// eslint-disable-next-line react/prop-types
const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ width: "70vw", maxWidth: "90vw", margin: "0px auto" }}>
      <div className="row" style={{ marginTop: "20px", marginLeft: "120px" }}>
        <div className="col-sm-2">
          <img
            src={img}
            className="img-fluid"
            alt={title}
            style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-sm-2">
          <h5>{title}</h5>
          <p style={{ color: "#617d98" }}>Price: {price} </p>
          <MDBIcon
            fas
            icon="trash"
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(Remove(id))}
          />
        </div>
        <div className="col-sm-8">
          <MDBIcon
            fas
            icon="chevron-up"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(Increase(id))}
          />
          <p style={{ marginTop: "13px", marginRight: "13px" }}>{amount}</p>
          <MDBIcon
            fas
            icon="chevron-down"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(Decrease(id))}
          />
        </div>
      </div>
    </div>
  );
};
export default CartItems;
