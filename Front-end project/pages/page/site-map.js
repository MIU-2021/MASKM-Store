import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col } from "reactstrap";

const Data = [
  {
    mainTitle: "Home Demos",
    newCol: true,
    subtitles: [
      {
        title: "New Demos",
        link: "#",
        subtitle: [
          {
            title: "tools",
            link: "/layouts/Tools",
          },
          {
            title: "marketplace",
            link: "/layouts/Marketplace",
          },
          {
            title: "game",
            link: "/layouts/Game",
          },
          {
            title: "gym",
            link: "/layouts/Gym",
          },
          {
            title: "Marijuana",
            link: "/layouts/Marijuana",
          },
          {
            title: "Left Sidebar",
            link: "/shop/left_sidebar",
          },
          {
            title: "Jewellery",
            link: "/layouts/Jewellery",
          },
          {
            title: "Pets",
            link: "/layouts/Pets",
          },
          {
            title: "Metro",
            link: "/layouts/Metro",
          },
          {
            title: "Video Slider",
            link: "/layouts/Vedioslider",
          },
        ],
      },
      {
        title: "Clothing",
        link: "#",
        subtitle: [
          {
            title: "Fashion 1",
            link: "/",
          },
          {
            title: "Fashion 2",
            link: "/layouts/Fashion2",
          },
          {
            title: "Fashion 3",
            link: "/layouts/Fashion3",
          },
          {
            title: "Kids",
            link: "/layouts/Kids",
          },
        ],
      },
      {
        title: "Electronics",
        link: "#",
        subtitle: [
          {
            title: "Electronic 1",
            link: "/layouts/Electronic/Electronic-1",
          },
          {
            title: "Electronic 2",
            link: "/layouts/Electronic/Electronic-2",
          },
        ],
      },
      {
        title: "Watch",
        link: "/layouts/Watch",
      },
      {
        title: "Shoes",
        link: "/layouts/Shoes",
      },
      {
        title: "Bags",
        link: "/layouts/Bags",
      },
      {
        title: "Nursery",
        link: "/layouts/Nursery",
      },
      {
        title: "Vegetable",
        link: "/layouts/Vegetable",
      },
      {
        title: "Beauty",
        link: "/layouts/Beauty",
      },
      {
        title: "Light",
        link: "/layouts/Light",
      },
      {
        title: "Furniture",
        link: "/layouts/Furniture",
      },
      {
        title: " Goggles",
        link: "/layouts/Goggles",
      },
      {
        title: "Basics",
        link: "#",
        subtitle: [
          {
            title: "Lookbook",
            link: "/layouts/Basics/Lookbook",
          },
          {
            title: "Instagram",
            link: "/layouts/Basics/Instagram",
          },
          {
            title: "Video",
            link: "/layouts/Basics/Video",
          },
          {
            title: "Parallax",
            link: "/layouts/Basics/Parallax",
          },
          {
            title: "Full Page",
            link: "/layouts/Basics/Fullpage",
          },
        ],
      },
      {
        title: "Beauty",
        link: "/layouts/Beauty",
      },
      {
        title: "Beauty",
        link: "/layouts/Beauty",
      },
    ],
  },
  {
    mainTitle: "Product Pages",
    newCol: true,
    subtitles: [
      {
        title: "Sidebar",
        link: "#",
        subtitle: [
          {
            title: "Left Sidebar",
            link: "/product-details/1",
          },
          {
            title: "Right Sidebar",
            link: "/product-details/right_sidebar",
          },
          {
            title: "No Sidebar",
            link: "/product-details/no-sidebar",
          },
        ],
      },
      {
        title: "Thumbnail Image",
        link: "#",
        subtitle: [
          {
            title: "Left Image",
            link: "/product-details/thumbnail_left",
          },
          {
            title: "Right Image",
            link: "/product-details/thumbnail_right",
          },
          {
            title: "Image Outside",
            link: "/product-details/thumbnail_outside",
          },
        ],
      },
      {
        title: "Three Column",
        link: "#",
        subtitle: [
          {
            title: "Thumbnail Left",
            link: "/product-details/3_col_left",
          },
          {
            title: "Thumbnail Right",
            link: "/product-details/3_col_right",
          },
          {
            title: "Thubnail Bottom",
            link: "/product-details/3_col_bottom",
          },
        ],
      },
      {
        title: "Four Image",
        link: "/product-details/4_image",
      },
      {
        title: "Sticky",
        link: "/product-details/sticky",
      },
      {
        title: "Accordian",
        link: "/product-details/accordian",
      },
      {
        title: "Bundle",
        style: <span className="new-tag">new</span>,
        link: "/product-details/bundle_product",
      },
      {
        title: "Image Swatch",
        link: "/product-details/image_swatch",
      },
      {
        title: "Vertical Tab",
        link: "/product-details/vertical_tab",
      },
    ],
  },
  {
    mainTitle: "Shop Pages",
    subtitles: [
      {
        title: "Left Sidebar",
        link: "/shop/left_sidebar",
      },
      {
        title: "Right Sidebar",
        link: "/shop/right_sidebar/:catId",
      },
      {
        title: "Right Sidebar",
        link: "/shop/right_sidebar",
      },
      {
        title: "No Sidebar",
        link: "/shop/no_sidebar",
      },
      {
        title: "Sidebar Popup",
        link: "/shop/sidebar_popup",
      },
      {
        title: "Metro",
        link: "/shop/metro",
      },
      {
        title: "Full Width",
        link: "/shop/full_width",
      },
      {
        title: "Infinite Scroll",
        link: "/shop/left_sidebar",
      },
      {
        title: "Three Grid",
        link: "/shop/three_grid",
      },
      {
        title: "Six Grid",
        link: "/shop/six_grid",
      },
      {
        title: "List View",
        link: "/shop/list_view",
      },
    ],
  },
  {
    mainTitle: "Blog Pages",
    newCol: true,
    subtitles: [
      { title: "Left Sidebar", link: "/blogs/blog_left_sidebar" },
      { title: "Right Sidebar", link: "/blogs/blog_right_sidebar" },
      { title: "No Sidebar", link: "/blogs/no_sidebar" },
      { title: "Blog Details", link: "blogs/blog_detail" },
    ],
  },
  {
    mainTitle: "Inner Pages",
    subtitles: [
      {
        title: "Account",
        link: "#",
        subtitle: [
          {
            title: "Account ",
            link: "/product-details/thumbnail_left",
          },
          {
            title: "Order History",
            link: "/product-details/thumbnail_left",
          },
          {
            title: "Wishlist",
            link: "/page/account/wishlist",
          },
          {
            title: "Cart",
            link: "/page/account/cart",
          },
          {
            title: "Dashboard",
            link: "/page/account/dashboard",
          },
          {
            title: "Login",
            link: "/page/account/login",
          },
          {
            title: "Register",
            link: "/page/account/register",
          },
          {
            title: "Contact",
            link: "/page/account/contact",
          },
          {
            title: "Forget Password",
            link: "/page/account/forget-pwd",
          },
          {
            title: "Profile",
            link: "/page/account/profile",
          },
          {
            title: "Checkout",
            link: "/page/account/checkout",
          },
        ],
      },
      {
        title: "About Us",
        link: "/page/about-us",
      },
      {
        title: "Search",
        link: "/page/account/search",
      },
      {
        title: "Typography",
        link: "/page/typographyt",
      },
      {
        title: "Review",
        link: "/page/review",
      },
      {
        title: "Order Success",
        link: "/page/order-success",
      },
      {
        title: "Compare",
        link: "#",
        subtitle: [
          {
            title: "Compare",
            link: "/page/compare",
          },
          {
            title: "Compare-2",
            link: "/page/compare-2",
          },
        ],
      },
      {
        title: "Collection",
        link: "/page/collection",
      },
      {
        title: "Lookbook",
        link: "/page/lookbook",
      },
      {
        title: "Site Map",
        link: "/page/site-map",
      },
      {
        title: "404",
        link: "/page/404",
      },
      {
        title: "Coming Soon",
        link: "/page/coming-soon",
      },
      {
        title: " FAQ",
        link: "/page/faq",
      },
    ],
  },
  {
    mainTitle: "Features",
    newCol: true,
    subtitles: [
      {
        title: "Portfolio",
        link: "#",
        subtitle: [
          {
            title: "Portfolio Grid 2",
            link: "/portfolio/grid-2",
          },
          {
            title: "Portfolio Grid 3",
            link: "/portfolio/grid-3",
          },
          {
            title: "Portfolio Grid 4",
            link: "/portfolio/grid-4",
          },
          {
            title: "Masonry Grid 2",
            link: "/portfolio/masonry-grid-2",
          },
          {
            title: "Masonry Grid 3",
            link: "/portfolio/masonry-grid-2",
          },
          {
            title: "Masonry Grid 4",
            link: "/portfolio/masonry-grid-2",
          },
          {
            title: "Masonry Full Width",
            link: "/portfolio/masonry-full-width",
          },
        ],
      },
      {
        title: "Add To Cart",
        link: "#",
        subtitle: [
          {
            title: "Cart Modal Popup",
            link: "/layouts/Nursery",
          },
          {
            title: "Qty. Counter",
            link: "/layouts/Vegetables",
          },
          {
            title: "Cart Top",
            link: "/layouts/Bags",
          },
          {
            title: "Cart Bottom",
            link: "/layouts/Shoes",
          },
          {
            title: "Cart Left",
            link: "/layouts/Watch",
          },
          {
            title: "Cart Right",
            link: "/layouts/Tools",
          },
        ],
      },
      {
        title: "Elements",
        link: "#",
        subtitle: [
          {
            title: "Title",
            link: "/portfolio/title",
          },
          {
            title: "Collection Banner",
            link: "/portfolio/collection-banner",
          },
          {
            title: "Home Slider",
            link: "/portfolio/home-slider",
          },
          {
            title: "Category",
            link: "/portfolio/category",
          },
          {
            title: "Service",
            link: "/portfolio/service",
          },
          {
            title: "Image Size Ratio ",
            style: <i className="fa fa-bolt icon-trend" aria-hidden="true"></i>,
            link: "#",
          },
          {
            title: "Product Box",
            link: "/portfolio/product-box",
          },
          {
            title: "Product Slider",
            link: "/portfolio/product-slider",
          },
          {
            title: "No Slider",
            link: "/portfolio/no-slider",
          },
          {
            title: "Multi Slider",
            link: "/portfolio/multi-slider",
          },
          {
            title: "Tab",
            link: "/portfolio/tab",
          },
        ],
      },
      {
        title: "Email Template",
        link: "#",
        subtitle: [
          {
            title: "Order Success",
            link: "/portfolio/order-success",
          },
          {
            title: "Order Success 2",
            link: "/portfolio/order-success-2",
          },
          {
            title: "Email Template",
            link: "/portfolio/email-template",
          },
          {
            title: "Email Template 2",
            link: "/portfolio/email-template-2",
          },
        ],
      },
    ],
  },
];

const MasterSiteMap = ({ data }) => {
  return (
    <>
      <h5 className="title">{data.mainTitle}</h5>
      <ul className="">
        {data.subtitles
          ? data.subtitles.map((sub1, i) => {
              return (
                <li key={i}>
                  <a href={sub1.link}>
                    <i
                      className="fa fa-chevron-right mr-1"
                      aria-hidden="true"
                    ></i>
                    {sub1.title}
                    {sub1.style ? sub1.style : ""}
                  </a>
                  <ul>
                    {sub1.subtitle
                      ? sub1.subtitle.map((sub2, i) => {
                          return (
                            <li key={i}>
                              <a href={sub2.link}>
                                {sub2.style ? sub2.style : ""}
                              </a>
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </li>
              );
            })
          : ""}
      </ul>
    </>
  );
};
const Sitemap = () => {
  return (
    <CommonLayout parent="home" title="site-map">
      <section className="section-b-space sitemap_page">
        <Container>
          <Row>
            <Col md="3" xs="6">
              {Data.slice(0, 1).map((data, i) => {
                return <MasterSiteMap data={data} key={i} />;
              })}
            </Col>
            <Col md="3" xs="6">
              {Data.slice(1, 3).map((data, i) => {
                return <MasterSiteMap data={data} key={i} />;
              })}
            </Col>
            <Col md="3" xs="6">
              {Data.slice(3, 5).map((data, i) => {
                return <MasterSiteMap data={data} key={i} />;
              })}
            </Col>
            <Col md="3" xs="6">
              {Data.slice(5, 6).map((data, i) => {
                return <MasterSiteMap data={data} key={i} />;
              })}
            </Col>
          </Row>
        </Container>
      </section>
    </CommonLayout>
  );
};

export default Sitemap;
