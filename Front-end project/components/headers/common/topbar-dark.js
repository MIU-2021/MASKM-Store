import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import firebase from "../../../config/base";
import { useRouter } from "next/router";
import { Logout, RoleAuthenticated, UserAuthenticated } from "../../../services/User.Services";

const TopBarDark = ({ topClass, fluid }) => {
  const [userName, setUserName] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setUserName(UserAuthenticated());
    setRole(RoleAuthenticated());
  });
  const router = useRouter();
  const myProfileHandle = () => {
    if (!role) {
      alert('role null');
    }
    switch (role.toUpperCase()) {
      case 'SELLER': {
        router.push("/page/vendor/vendor-dashboard");
        break;
      }
      case 'BUYER': {
        router.push("/page/account/dashboard");
        break;
      }
      case 'ADMIN': {

        alert('ADMIN');
        break;
      }
      default: {
        alert('No role');
        break;
      }
    }
    //router.push("/page/account/login-auth");
  };

  const logoutHandle = () => {
    console.log('logout');
    Logout();
    setUserName(null);
    setUserRole(null);
  };
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li>Welcome to Our store MASKM</li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>Call Us: 123
                  - 456 - 7890
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-right">
            <ul className="header-dropdown">
              {userName ?
                <li className="onhover-dropdown mobile-account">
                  <i className="fa fa-user" aria-hidden="true"></i> Hello: {userName}
                  <ul className="onhover-show-div">
                    <li onClick={() => myProfileHandle()}>
                      <a>My profile</a>
                    </li>
                    <li onClick={() => logoutHandle()}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </li>
                :
                <li className="onhover-dropdown mobile-account">
                  <i className="fa fa-user" aria-hidden="true"></i> Sing in
                  <ul className="onhover-show-div">
                    <li>
                      <Link href={`/page/account/login`}>
                        <a>Login</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/page/account/register`}>
                        <a>Register</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
