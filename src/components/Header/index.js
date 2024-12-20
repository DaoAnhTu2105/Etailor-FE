import React, { useEffect, useState } from "react";
import "./index.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Login from "../../pages/Customer/Login/Login";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import UserLogo from "../../assets/images/user.png";
import MenuDropIcon from "../../assets/images/caret-down.png";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Notification from "./Notification";
import { Avatar } from "antd";
import Swal from "sweetalert2";

const Header = () => {
  const [clickedSection, setClickedSection] = useState("Trang Chu");
  const [open, setOpen] = React.useState(false);
  const customer = localStorage.getItem("customer");
  const token = JSON.parse(customer)?.token;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    const LOG_OUT_API = `https://localhost:7259/api/auth/customer/logout`;
    try {
      const response = await fetch(LOG_OUT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("customer");
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <nav className="mobile">
      <div className="header-container">
        <div className="header-menu-wrapper">
          <div className="header-logo">
            <Link to="/" onClick={() => setClickedSection("Trang Chu")}>
              <figure className="image is-128x128">
                <img className="is-rounded" src={Logo}></img>
              </figure>
            </Link>
          </div>

          <div className="header-menu">
            <div className="navbar-item">
              <Link to="/" onClick={() => setClickedSection("Trang Chu")}>
                <h1
                  className="subtitle is-5 "
                  style={{
                    color:
                      window.location.pathname === "/" ? "#9F78FF" : "#1D2547",
                  }}
                >
                  TRANG CHỦ
                </h1>
              </Link>
            </div>

            <div className="navbar-item">
              <Link to="/blog" onClick={() => setClickedSection("Bai Viet")}>
                <h1
                  className="subtitle is-5 "
                  style={{
                    color: window.location.pathname.startsWith("/blog")
                      ? "#9F78FF"
                      : "#1D2547",
                  }}
                >
                  BÀI VIẾT
                </h1>
              </Link>
            </div>
            {/* has-dropdown is-hoverable */}
            <div className="navbar-item ">
              <div className="navbar-item">
                <div style={{ height: "auto" }}>
                  <Link
                    className="nav-link"
                    to="/catalogue"
                    onClick={() => setClickedSection("Dat May")}
                  >
                    <h1
                      className="subtitle is-5 "
                      style={{
                        color: window.location.pathname.startsWith("/catalogue")
                          ? "#9F78FF"
                          : "#1D2547",
                      }}
                    >
                      SẢN PHẨM MẪU{" "}
                      {/* <img width={15} height={15} src={MenuDropIcon}></img> */}
                    </h1>
                  </Link>
                </div>
              </div>
              {/* 
              <div
                className="navbar-dropdown is-boxed"
                style={{ zIndex: "9999999999999999" }}
              >
                <a className="navbar-item">Áo sơ mi</a>
                <a className="navbar-item">Áo vest</a>
                <a className="navbar-item">Áo dài</a>
              </div> */}
            </div>
            {token && (
              <div className="navbar-item">
                <Link
                  to="/orders"
                  onClick={() => setClickedSection("Don hang")}
                >
                  <h1
                    className="subtitle is-5 "
                    style={{
                      color: window.location.pathname.startsWith("/orders")
                        ? "#9F78FF"
                        : "#1D2547",
                    }}
                  >
                    ĐƠN HÀNG
                  </h1>
                </Link>
              </div>
            )}
          </div>
        </div>
        {customer ? (
          <div className="header-end">
            <div style={{ height: "auto" }}>
              <Dropdown>
                <MenuButton className="user-logo" sx={{ border: "none" }}>
                  {/* <img src={UserLogo} width={30} height={30}></img> */}
                  {customer.avatar ? (
                    <Avatar size={48} src={customer.avatar} />
                  ) : (
                    <FontAwesomeIcon
                      style={{ fontSize: "32px" }}
                      icon={faUser}
                    />
                  )}
                </MenuButton>
                <Menu sx={{ zIndex: 100000000 }}>
                  <Link to="/profile">
                    <MenuItem>Thông tin cá nhân</MenuItem>
                  </Link>
                  <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </Menu>
              </Dropdown>
            </div>
            <div className="navbar-items">
              <Notification />
            </div>
          </div>
        ) : (
          <div className="header-end">
            <div className="navbar-items login">
              <h1
                className="subtitle is-5"
                id="header-login-btn"
                onClick={handleOpen}
              >
                Đăng nhập
              </h1>
            </div>
          </div>
        )}
      </div>
      {open && <Login openModal={handleOpen} closeModal={handleClose} />}
    </nav>
  );
};

export default Header;
