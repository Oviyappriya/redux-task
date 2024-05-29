// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { DisplayItem } from "../redux/action";
import cartData from "./data";

const Header = () => {
  const { totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <MDBNavbar expand="lg" dark bgColor="primary">
      <MDBContainer>
        <MDBNavbarBrand
          style={{
            alignItems: "center",
            display: "flex",
            left: 0,
            justifyContent: "space-between",
          }}
        >
          <span>
            <MDBIcon fas icon="shopping-cart" />{" "}
          </span>
          Redux Shopping Cart
        </MDBNavbarBrand>
        <MDBBtn
          className="text-dark"
          color="light"
          style={{ width: "120px" }}
          onClick={() => dispatch(DisplayItem(cartData))}
        >
          Get Item
        </MDBBtn>
        <MDBNavbarLink>
          <a className="mx-3" href="#">
            <MDBIcon fas icon="shopping-cart" style={{ color: "white" }} />
            <MDBBadge
              color="danger"
              pill
              notification
              style={{ fontSize: "12px" }}
            >
              {totalCount}
            </MDBBadge>
          </a>
        </MDBNavbarLink>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
