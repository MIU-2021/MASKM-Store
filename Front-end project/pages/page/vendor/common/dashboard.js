import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Media,
  Card,
  CardBody,
  Input,
  NavItem,
  NavLink,
  TabContent,
  Nav,
  TabPane,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Label,
} from "reactstrap";
import seventeen from "../../../../public/assets/images/logos/17.png";
import order from "../../../../public/assets/images/icon/dashboard/order.png";
import sale from "../../../../public/assets/images/icon/dashboard/sale.png";
import homework from "../../../../public/assets/images/icon/dashboard/homework.png";
import one from "../../../../public/assets/images/dashboard/product/1.jpg";
import nine from "../../../../public/assets/images/dashboard/product/9.jpg";
import thirtyfour from "../../../../public/assets/images/pro3/34.jpg";
import pro1 from "../../../../public/assets/images/pro3/1.jpg";
import pro27 from "../../../../public/assets/images/pro3/27.jpg";
import pro36 from "../../../../public/assets/images/pro3/36.jpg";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { apexPieChart, lineChart1 } from "../../../../data/vendorData";
import AddProduct from "../../../../components/common/AddProduct";
import {Form, FormGroup, FormText} from "react-bootstrap";
import EditProfile from "../../../../components/common/EditProfile";
import EditProduct from "../../../../components/common/EditProduct";
import {RoleAuthenticated, UserAuthenticated} from "../../../../services/User.Services";
import {fecthProductByID} from "../../../../services/Products.Services";
import {
  deleteProductBySeller,
  fetchProductsBySellerUsername,
  getSellerOrders, getSellerProfileData, makeOrderCanceled, makeOrderShipped
} from "../../../../services/Seller.Services";



const Summary = ({ img, title, desc }) => {
  return (
      <Col md="4">
        <div className="counter-box">
          <Media src={img} className="img-fluid" />
          <div>
            <h3>{title}</h3>
            <h5>{desc}</h5>
          </div>
        </div>
      </Col>
  );
};

const ProductData = [
  {
    img: one,
    productName: "Neck Velvet Dress	",
    category: "Women Clothes",
    price: "$205",
    stock: "1000",
    sales: "2000",
  },
  {
    img: nine,
    productName: "Belted Trench Coat		",
    category: "Women Clothes",
    price: "$350",
    stock: "800",
    sales: "350",
  },
  {
    img: thirtyfour,
    productName: "Men Print Tee",
    category: "Men Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
  {
    img: pro1,
    productName: "Woman Print Tee",
    category: "Women Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
  {
    img: pro27,
    productName: "Men Print Tee",
    category: "Men Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
  {
    img: pro36,
    productName: "Men Print Tee",
    category: "Men Clothes",
    price: "$150",
    stock: "750",
    sales: "150",
  },
];

const TrendingProduct = ({ img, productName, price, sales }) => {
  return (
      <tr>
        <th scope="row">
          <Media src={img} className="blur-up lazyloaded" />
        </th>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{sales}</td>
      </tr>
  );
};

const OrderData = [
  {
    id: "#125021",
    productDetails: "Neck Velvet Dress",
    status: "Shipped",
    price: "$205",
  },
  {
    id: "#521214",
    productDetails: "Belted Trench Coat",
    status: "Shipped",
    price: "$350",
  },
  {
    id: "#521021",
    productDetails: "Men Print Tee",
    status: "pending",
    price: "$150",
  },
  {
    id: "#245021",
    productDetails: "Woman Print Tee",
    status: "Shipped",
    price: "$150",
  },
  {
    id: "#122141",
    productDetails: "Men Print Tee",
    status: "canceled",
    price: "$150",
  },
  {
    id: "#125015",
    productDetails: "Men Print Tee",
    status: "pending",
    price: "$150",
  },
  {
    id: "#245021",
    productDetails: "women print tee",
    status: "Shipped",
    price: "$150",
  },
  {
    id: "#122141",
    productDetails: "men print tee",
    status: "canceled",
    price: "$150",
  },
  {
    id: "#125015",
    productDetails: "men print tee",
    status: "pending",
    price: "$150",
  },
];

const RecentOrder = ({ id, productDetails, status }) => {
  return (
      <tr>
        <th scope="row">{id}</th>
        <td>{productDetails}</td>
        <td>{status}</td>
      </tr>
  );
};



const ProfileData = [
  { title: "Company Name", detail: "Fashion Store" },
  { title: "Email Address", detail: "Mark.Enderess@Mail.Com" },
  { title: "Country / Region", detail: "Downers Grove, IL" },
  { title: "Year Established", detail: "2021" },
  { title: "Total Employees", detail: "101 - 200 People" },
  { title: "Category", detail: "Clothing" },
  { title: "Street Address", detail: "549 Sulphur Springs Road" },
  { title: "City/State", detail: "Downers Grove, IL" },
  { title: "Zip", detail: "60515" },
];

const ProfileDetail = ({ title, detail }) => {
  return (
      <li>
        <div className="details">
          <div className="left">
            <h6>{title}</h6>
          </div>
          <div className="right">
            <h6>{detail}</h6>
          </div>
        </div>
      </li>
  );
};

const Dashboard = () => {
  const AllOrder = ({ id, creationdate, status, price , payment }) => {
    return (
        <tr>
          <th scope="row">{id}</th>
          <td>{creationdate}</td>
          <td>{price}</td>
          <td>{payment==true?"Yes":"No"}</td>
          <td>{status}</td>

          <td>{status=="Shipped" || status=="Cancelled" ?
              ""
            :<span>
              <i className="fa fa-check-circle-o mr-1" aria-hidden="true" onClick={() =>makeOrderShippedhandler(UserAuthenticated() , id)}></i>
              <i className="fa fa-window-close-o ml-1" aria-hidden="true" onClick={() =>makeOrderCanceledhandler(UserAuthenticated() , id)}></i>
                </span>}
          </td>
        </tr>
    );
  };

  // const AllProduct = ({ product }) => {
  //   return (
  //
  //   );
  // };
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const [editProduct, setEditProduct] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState(null);
  const [role, setRole] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [totalProdustcs , setTotalProducts] = useState(0);
  const [Orders , setOrders] = useState([]);
  const [countOrders , setCountOrders] = useState(0);
  const [userProfileData , setUserProfileData] = useState(0);


  useEffect(() => {
    setUserName(UserAuthenticated());
  });

  useEffect(() => {
    if(editProduct.id)
    setActiveTab("8");
  }, [editProduct]);

  useEffect(() => {
    if(!RoleAuthenticated() || RoleAuthenticated().toUpperCase() != 'SELLER')
      router.push("/page/account/login");
  }, []);

  const SummaryData = [
    {
      img: order,
      title: totalProdustcs,
      desc: "Total Products",
    },
    {
      img: sale,
      title: "12500",
      desc: "Total Sales",
    },
    {
      img: homework,
      title: countOrders,
      desc: "Order Pending",
    },
  ];

  function deleteproduct(id ) {
    deleteProductBySeller(id , UserAuthenticated()).then(response => {
      console.log("res" ,response);
      setData(data.filter(p => p.id != id));
      setLoading(false);
      //return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }

  function fetchProductsForSellerHandler() {
    fetchProductsBySellerUsername(UserAuthenticated()).then(response => {
      console.log("res" ,response);
      setData(response);
      setTotalProducts(response.length)
      setLoading(false);
      //return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }

  function getSellerOrdershandler() {
    getSellerOrders(UserAuthenticated()).then(response => {
      console.log("pending orders" ,response);
      setOrders(response);
      setCountOrders(response.length)
      setLoading(false);
      //return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }

  function makeOrderShippedhandler(username , productid) {
    makeOrderShipped(username,productid).then(response => {
    }).catch((error) => {
      console.log(error);
    });
  }

  function makeOrderCanceledhandler(username , productid) {
    makeOrderCanceled(username,productid).then(response => {
    }).catch((error) => {
      console.log(error);
    });
  }

  function GetProfilePic() {

    getSellerProfileData(UserAuthenticated()).then(response => {
      setUserProfileData(response);
      console.log("ffff",userProfileData);
    }).catch((error) => {
      console.log(error);
    });
  }



  useEffect(fetchProductsForSellerHandler, []);
  useEffect(getSellerOrdershandler, []);



  return (
      <section className="dashboard-section section-b-space">
        <Container>
          <Row>
            <Col lg="3">
              <div className="dashboard-sidebar">
                <div className="profile-top">
                  <div className="profile-image">
                    <Media src={seventeen} alt="" className="img-fluid" />
                  </div>
                  <div className="profile-detail">
                    <h5>Fashion Store</h5>
                    <h6>750 followers | 10 review</h6>
                    <h6>mark.enderess@mail.com</h6>
                  </div>
                </div>
                <div className="faq-tab">
                  <Nav tabs className="border-tab-primary">
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                          className={activeTab === "1" ? "active" : ""}
                          onClick={() => setActiveTab("1")}
                      >
                        Dashboard
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                          className={activeTab === "2" ? "active" : ""}
                          onClick={() => setActiveTab("2")}
                      >
                        Products
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                          className={activeTab === "3" ? "active" : ""}
                          onClick={() => setActiveTab("3")}
                      >
                        Order
                      </NavLink>
                    </NavItem>

                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                          className={activeTab === "6" ? "active" : ""}
                          onClick={toggle}
                      >
                        Logout
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </Col>
            <Col lg="9">
              <div className="faq-content">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <div className="counter-section">
                      <Row>
                        {SummaryData.map((data, i) => {
                          return (
                              <Summary
                                  key={i}
                                  img={data.img}
                                  title={data.title}
                                  desc={data.desc}
                              />
                          );
                        })}
                      </Row>
                    </div>
                    <Row>
                      <Col md="7">
                        <Card>
                          <CardBody>
                            <div id="chart">
                              <Chart
                                  options={lineChart1.options}
                                  series={lineChart1.series}
                                  height="170"
                                  type="area"
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <Card>
                          <CardBody>
                            <div id="chart-order">
                              <Chart
                                  options={apexPieChart.options}
                                  series={apexPieChart.series}
                                  type="donut"
                                  width={380}
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <Card className="dashboard-table">
                          <CardBody>
                            <h3>trending products</h3>
                            <table className="table mb-0 table-responsive-sm">
                              <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">price</th>
                                <th scope="col">sales</th>
                              </tr>
                              </thead>
                              <tbody>
                              {ProductData.slice(0, 3).map((data, i) => {
                                return (
                                    <TrendingProduct
                                        key={i}
                                        img={data.img}
                                        productName={data.productName}
                                        price={data.price}
                                        sales={data.sales}
                                    />
                                );
                              })}
                              </tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6">
                        <Card className="dashboard-table">
                          <CardBody>
                            <h3>recent orders</h3>
                            <table className="table mb-0">
                              <thead>
                              <tr>
                                <th scope="col">order id</th>
                                <th scope="col">product details</th>
                                <th scope="col">status</th>
                              </tr>
                              </thead>
                              <tbody>
                              {OrderData.slice(0, 5).map((data, i) => {
                                return (
                                    <RecentOrder
                                        key={i}
                                        id={data.id}
                                        productDetails={data.productDetails}
                                        status={data.status}
                                    />
                                );
                              })}
                              </tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Card className="dashboard-table mt-0">
                          <CardBody>
                            <div className="top-sec">
                              <h3>all products</h3>
                              <a href="#" className="btn btn-sm btn-solid" onClick={() => setActiveTab("6")}>
                                add product
                              </a>
                            </div>
                            <table className="table-responsive-md table mb-0">
                              <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">category</th>
                                <th scope="col">price</th>
                                <th scope="col">Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              {data.map((product, i) => {
                                return (
                                    <tr key={i}>
                                      <th scope="row">
                                        <Media src={product.image} className="blur-up lazyloaded" />
                                      </th>
                                      <td>{product.title}</td>
                                      <td>{product.productCategory.name}</td>
                                      <td>{product.price}</td>
                                      <td>
                                        <i  onClick={() => {setEditProduct(product)}} className="fa fa-pencil-square-o mr-1" aria-hidden="true"></i>
                                        <i className="fa fa-trash-o ml-1" aria-hidden="true" onClick={() => deleteproduct(product.id)}></i>
                                      </td>
                                    </tr>
                                );
                              })}
                              </tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <Card className="dashboard-table mt-0">
                          <CardBody>
                            <div className="top-sec">
                              <h3>orders</h3>
                            </div>
                            <table className="table table-responsive-sm mb-0">
                              <thead>
                              <tr>
                                <th scope="col">order id</th>
                                <th scope="col">Creation date</th>
                                <th scope="col">Price</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                              </tr>
                              </thead>
                              <tbody>
                              {Orders.map((data, i) => {
                                //id, creationdate, status, price , payment
                                return (
                                    <AllOrder
                                        key={i}
                                        id={data.id}
                                        creationdate={data.createdOn}
                                        status={data.orderStatus}
                                        price={data.price}
                                        payment={data.orderPaid}
                                    />
                                );
                              })}
                              </tbody>
                            </table>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                   <TabPane tabId="6">
                    <Row>
                      <Col sm="12">
                        <Card className="mt-0">
                          <CardBody>
                            <AddProduct />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="7">
                    <Row>
                      <Col sm="12">
                        <Card className="mt-0">
                          <CardBody>
                            <EditProfile />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="8">
                    <Row>
                      <Col sm="12">
                        <Card className="mt-0">
                          <CardBody>
                            <EditProduct product={editProduct} />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>

                </TabContent>
                <Modal isOpen={modal} toggle={toggle} centered>
                  <ModalHeader toggle={toggle}>Logging Out</ModalHeader>
                  <ModalBody className="p-4">Do you want to logout?</ModalBody>
                  <ModalFooter>
                    <Link href={"/"}>
                      <a className="btn-solid btn-custom" color="secondary">
                        Yes
                      </a>
                    </Link>
                    <Button
                        className="btn-solid btn-custom"
                        color="secondary"
                        onClick={toggle}
                    >
                      No
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Dashboard;
