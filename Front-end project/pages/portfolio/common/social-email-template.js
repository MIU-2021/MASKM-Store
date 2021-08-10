import React from "react";
import facebook from "../../../public/assets/images/email-temp/facebook.png";
import youtube from "../../../public/assets/images/email-temp/youtube.png";
import twitter from "../../../public/assets/images/email-temp/twitter.png";
import gplus from "../../../public/assets/images/email-temp/gplus.png";
import linkdin from "../../../public/assets/images/email-temp/linkedin.png";
import pinterest from "../../../public/assets/images/email-temp/pinterest.png";
import { Table } from "reactstrap";
const SocialData = [
  {
    icon: facebook,
    link: "#",
  },
  {
    icon: youtube,
    link: "#",
  },
  {
    icon: twitter,
    link: "#",
  },
  {
    icon: gplus,
    link: "#",
  },
  {
    icon: linkdin,
    link: "#",
  },
  {
    icon: pinterest,
    link: "#",
  },
];

const SocialEmailTemplate = ({ marginClass }) => {
  return (
    <Table
      className="main-bg-light text-center top-0"
      align="center"
      borderless
      cellPadding="0"
      cellSpacing="0"
      width="100%"
    >
      <tbody>
        <tr>
          <td style={{ padding: "30px" }}>
            <div>
              <h4
                className="title"
                style={{ margin: "0", textAlign: "center" }}
              >
                Follow us
              </h4>
            </div>
            <Table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              className="footer-social-icon text-center"
              align="center"
              style={{ marginTop: "20px" }}
            >
              <tbody>
                <tr
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  {SocialData.map((data, index) => {
                    return (
                      <td key={index} style={{ margin: marginClass }}>
                        <a href={data.link}>
                          <img src={data.icon} alt="" />
                        </a>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </Table>
            <div
              style={{ borderTop: "1px solid #ddd", margin: "20px auto 0" }}
            ></div>
            <Table
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={{ margin: "20px auto 0" }}
            >
              <tbody>
                <tr>
                  <td>
                    <a
                      href="#"
                      style={{ fontSize: "13px", paddingBottom: "0" }}
                    >
                      Want to change how you receive these emails?
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: "0" }}>
                    <p style={{ fontSize: "13px", margin: "0" }}>
                      2020 - 21 Copy Right by Themeforest powerd by Pixel Strap
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        margin: "0",
                        textDecoration: "underline",
                      }}
                    >
                      Unsubscribe
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default SocialEmailTemplate;
