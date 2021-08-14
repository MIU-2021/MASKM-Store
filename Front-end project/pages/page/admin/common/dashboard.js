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
} from "reactstrap";
import seventeen from "../../../../public/assets/images/logos/17.png";
import order from "../../../../public/assets/images/icon/dashboard/order.png";
import sale from "../../../../public/assets/images/icon/dashboard/sale.png";
import one from "../../../../public/assets/images/dashboard/product/1.jpg";
import nine from "../../../../public/assets/images/dashboard/product/9.jpg";
import thirtyfour from "../../../../public/assets/images/pro3/34.jpg";
import pro1 from "../../../../public/assets/images/pro3/1.jpg";
import pro27 from "../../../../public/assets/images/pro3/27.jpg";
import pro36 from "../../../../public/assets/images/pro3/36.jpg";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import AddProduct from "../../../../components/common/AddProduct";
import EditProfile from "../../../../components/common/EditProfile";
import {ApproveSeller, getAllSellers, getSellerProfileData} from "../../../../services/Seller.Services";
import {ApproveReview, getAllReviewsForAdmin} from "../../../../services/Reviews.Services";
import {UserAuthenticated} from "../../../../services/User.Services";

const SummaryData = [
  {
    id: 1,
    img: order,
    title: "0",
    desc: "Pending Sellers",
  },
  {
    id: 2,
    img: sale,
    title: "0",
    desc: "Pending Reviews",
  },

];

const Summary = ({ img, title, desc }) => {
  return (
      <Col md="6">
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

const TrendingProduct = ({ img, productName, price }) => {
  return (
      <tr>
        <th scope="row">
          <Media src={img} className="blur-up lazyloaded" />
        </th>
        <td>{productName}</td>
        <td>{price}</td>
      </tr>
  );
};



const OrderData = [
  {
    id: "#1",
    productDetails: "Neck Velvet Dress",
    status: "Shipped",
    price: "$205",
  },
  {
    id: "#2",
    productDetails: "Belted Trench Coat",
    status: "Shipped",
    price: "$350",
  },
  {
    id: "#3",
    productDetails: "Men Print Tee",
    status: "pending",
    price: "$150",
  },
  {
    id: "#4",
    productDetails: "Woman Print Tee",
    status: "Shipped",
    price: "$150",
  },
  {
    id: "#5",
    productDetails: "Men Print Tee",
    status: "canceled",
    price: "$150",
  },
  {
    id: "#6",
    productDetails: "Men Print Tee",
    status: "pending",
    price: "$150",
  },
  {
    id: "#6",
    productDetails: "women print tee",
    status: "Shipped",
    price: "$150",
  },
  {
    id: "#8",
    productDetails: "men print tee",
    status: "canceled",
    price: "$150",
  },
  {
    id: "#9",
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
  const [pendingSellers,SetPendingSellers] = useState([]);
  const [pendingReviews,SetPendingReviews] = useState([]);
  const [userProfileData , setUserProfileData] = useState();

  function GetProfilePic() {

    getSellerProfileData(UserAuthenticated()).then(response => {
      setUserProfileData(response);
      console.log("ffff",userProfileData);
    }).catch((error) => {
      console.log(error);
    });
  }
  useEffect(GetProfilePic, []);

  function getAllSellersHandler(){
    getAllSellers().then(response => {
      SetPendingSellers(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  function getAllReviewsHandler(){
    getAllReviewsForAdmin().then(response => {
      SetPendingReviews(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(getAllSellersHandler, []);
  useEffect(getAllReviewsHandler, []);

  function getTotalPendingSellers(){
    return pendingSellers?.filter(r => r.status === "Pending").length;
  }

  function getTotalPendingReviews(){
    return pendingReviews?.filter(r => r.status === "Pending").length;
  }

  function ApproveSellerHandler(username){
    ApproveSeller(username).then(response => {
      getAllSellersHandler();
    }).catch((error) => {
      console.log(error);
    });
  }

  function ApproveReviewHandler(id){
    ApproveReview(id).then(response => {
      getAllReviewsHandler();
    }).catch((error) => {
      console.log(error);
    });
  }


  const AllProduct = ({ img, sellerName, username}) => {
    return (
        <tr>
          <th scope="row">
            <Media src={img} className="blur-up lazyloaded" />
          </th>
          <td>{sellerName}</td>
          <td>
            <i  onClick={() => {ApproveSellerHandler(username);}} className="fa fa-check-circle-o mr-1" aria-hidden="true"></i>

          </td>
        </tr>
    );
  };
  const AllOrder = ({ id, productDetails, status, price }) => {
    return (
        <tr>
          <th scope="row">{id}</th>
          <td>{productDetails}</td>
          <td>{status}</td>
          <td>{price}</td>
          <td><i className="fa fa-check-circle-o mr-1" aria-hidden="true" onClick={() => ApproveReviewHandler(id)}></i></td>
        </tr>
    );
  };
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("1");
  const [EditProductId, setEditProductId] = useState();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
      <section className="dashboard-section section-b-space">
        <Container>
          <Row>
            <Col lg="3">
              <div className="dashboard-sidebar">
                <div className="profile-top">
                  <div className="profile-image">
                    <Media src={userProfileData?userProfileData.user.image:""} alt="" className="img-fluid" />
                  </div>
                  <div className="profile-detail">
                    <h5>{userProfileData?userProfileData.user.username:""}</h5>
                    <h6>{userProfileData?userProfileData.user.email:""}</h6>
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
                        Pending Sellers
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                      <NavLink
                          className={activeTab === "3" ? "active" : ""}
                          onClick={() => setActiveTab("3")}
                      >
                        Pending Reviews
                      </NavLink>
                    </NavItem>
                    {/*<NavItem className="nav nav-tabs" id="myTab" role="tablist">*/}
                    {/*  <NavLink*/}
                    {/*    className={activeTab === "4" ? "active" : ""}*/}
                    {/*    onClick={() => setActiveTab("4")}*/}
                    {/*  >*/}
                    {/*    Profile*/}
                    {/*  </NavLink>*/}
                    {/*</NavItem>*/}
                    {/*<NavItem className="nav nav-tabs" id="myTab" role="tablist">*/}
                    {/*  <NavLink*/}
                    {/*    className={activeTab === "5" ? "active" : ""}*/}
                    {/*    onClick={() => setActiveTab("5")}*/}
                    {/*  >*/}
                    {/*    Settings*/}
                    {/*  </NavLink>*/}
                    {/*</NavItem>*/}
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
                                  title={data.id == 1 ? getTotalPendingSellers() : getTotalPendingReviews() }
                                  desc={data.desc}
                              />
                          );
                        })}
                      </Row>
                    </div>
                    <Row>
                      <Col lg="6">
                        <Card className="dashboard-table">
                          <CardBody>
                            <h3>Pending Sellers</h3>
                            <table className="table mb-0 table-responsive-sm">
                              <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">username</th>
                                <th scope="col">email</th>

                              </tr>
                              </thead>
                              <tbody>
                              {/*//?.filter(s => s.status === "Pending")*/}
                              {pendingSellers?.filter(s => s.status === "Pending")
                                  .slice(0, 3).map((data, i) => {
                                    return (
                                        <TrendingProduct
                                            key={i}
                                            img={data.user.image}
                                            productName={data.user.username}
                                            price={data.user.email}

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
                            <h3>Pending Reviews</h3>
                            <table className="table mb-0">
                              <thead>
                              <tr>
                                <th scope="col">review id</th>
                                <th scope="col">review text</th>
                                <th scope="col">stars</th>

                              </tr>
                              </thead>
                              <tbody>
                              {pendingReviews?.filter(r => r.status === "Pending")
                                  .slice(0, 5).map((data, i) => {
                                    return (
                                        <RecentOrder
                                            key={i}
                                            id={data.id}
                                            productDetails={data.comment}
                                            status={data.stars}
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
                              <h3>Pending sellers</h3>
                            </div>
                            <table className="table-responsive-md table mb-0">
                              <thead>
                              <tr>
                                <th scope="col">image</th>
                                <th scope="col">seller name</th>
                                <th scope="col">action</th>
                              </tr>
                              </thead>
                              <tbody>
                              {pendingSellers?.filter(s => s.status === "Pending")
                                  .map((data, i) => {
                                    return (
                                        <AllProduct
                                            key={i}
                                            img={data.user.image}
                                            sellerName={data.user.username}
                                            username={data.user.username}
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
                  <TabPane tabId="3">
                    <Row>
                      <Col sm="12">
                        <Card className="dashboard-table mt-0">
                          <CardBody>
                            <div className="top-sec">
                              <h3>Pending reviews</h3>
                            </div>
                            <table className="table table-responsive-sm mb-0">
                              <thead>
                              <tr>
                                <th scope="col">review id</th>
                                <th scope="col">review text</th>
                                <th scope="col">review score</th>
                                <th scope="col">action</th>
                              </tr>
                              </thead>
                              <tbody>
                              {pendingReviews?.filter(s => s.status === "Pending")
                                  .map((data, i) => {
                                    return (
                                        <AllOrder
                                            key={i}
                                            id={data.id}
                                            productDetails={data.comment}
                                            status={data.stars}

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
                  {/*<TabPane tabId="4">*/}
                  {/*  <Row>*/}
                  {/*    <Col sm="12">*/}
                  {/*      <Card className="mt-0">*/}
                  {/*        <CardBody>*/}
                  {/*          <div className="dashboard-box">*/}
                  {/*            <div className="dashboard-title">*/}
                  {/*              <h4>profile</h4>*/}
                  {/*              <span*/}
                  {/*                  onClick={() => setActiveTab("7")}*/}
                  {/*              >*/}
                  {/*                edit*/}
                  {/*              </span>*/}
                  {/*            </div>*/}
                  {/*            <div className="dashboard-detail">*/}
                  {/*              <ul>*/}
                  {/*                {ProfileData.map((data, i) => {*/}
                  {/*                  return (*/}
                  {/*                    <ProfileDetail*/}
                  {/*                      key={i}*/}
                  {/*                      title={data.title}*/}
                  {/*                      detail={data.detail}*/}
                  {/*                    />*/}
                  {/*                  );*/}
                  {/*                })}*/}
                  {/*              </ul>*/}
                  {/*            </div>*/}
                  {/*          </div>*/}
                  {/*        </CardBody>*/}
                  {/*      </Card>*/}
                  {/*    </Col>*/}
                  {/*  </Row>*/}
                  {/*</TabPane>*/}
                  {/*<TabPane tabId="5">*/}
                  {/*  <Row>*/}
                  {/*    <Col sm="12">*/}
                  {/*      <Card className="mt-0">*/}
                  {/*        <CardBody>*/}
                  {/*          <div className="dashboard-box">*/}
                  {/*            <div className="dashboard-title">*/}
                  {/*              <h4>settings</h4>*/}
                  {/*            </div>*/}
                  {/*            <div className="dashboard-detail">*/}
                  {/*              <div className="account-setting">*/}
                  {/*                <Form>*/}
                  {/*                  <FormGroup>*/}
                  {/*                    <Label for="storename">Store Name</Label>*/}
                  {/*                    <Input type="text" name="storename" id="storename" placeholder="write the store name" />*/}
                  {/*                  </FormGroup>*/}
                  {/*                  <FormGroup>*/}
                  {/*                    <Label for="storeurl">store url</Label>*/}
                  {/*                    <Input type="text" name="s" id="storeurl" placeholder="store url here" />*/}
                  {/*                  </FormGroup>*/}

                  {/*                  <Button>create store</Button>*/}
                  {/*                </Form>*/}
                  {/*              </div>*/}

                  {/*            </div>*/}
                  {/*          </div>*/}
                  {/*        </CardBody>*/}
                  {/*      </Card>*/}
                  {/*    </Col>*/}
                  {/*  </Row>*/}
                  {/*</TabPane>*/}
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
