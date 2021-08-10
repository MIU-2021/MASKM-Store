import Link from "next/link";
import React from "react";
import { Media, Table } from "reactstrap";
import logo from "../../../public/assets/images/email-temp/logo.png";

const MasterMenu = () => {
  return (
    <>
      <Table
        style={{ marginBottom: "0" }}
        className="headerTable"
        cellPadding="0"
        cellSpacing="0"
      >
        <tbody>
          <tr className="header">
            <td>
              <Media src={logo} className="main-logo" />
            </td>
            <td className="menu">
              <ul style={{ padding: "20px" }}>
                <li>
                  <Link href="/">
                    <a href="/">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a href="#">Contact</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Whishlist</a>
                </li>
                <li>
                  <a href="#">my cart</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>{" "}
    </>
  );
};

export default MasterMenu;
