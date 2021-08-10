import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import BlogDetail from "../blog_detail";

const GET_PRODUCTS = gql`
  query blog($type: String!) {
    blog(type: $type) {
      img
      link
      title
      desc
      date
      longDesc
      shortDesc
    }
  }
`;

const BlogSidebar = () => {
  const popularBlogData = [
    {
      date: "03",
      month: "May",
      title: "Injected humour the like",
      hits: "0",
      blog: "it look like readable English. Many desktop publishing text.",
    },
    {
      date: "03",
      month: "May",
      title: "Injected humour the like",
      hits: "0",
      blog: "it look like readable English. Many desktop publishing text.",
    },
    {
      date: "03",
      month: "May",
      title: "Injected humour the like",
      hits: "0",
      blog: "it look like readable English. Many desktop publishing text.",
    },
    {
      date: "03",
      month: "May",
      title: "Injected humour the like",
      hits: "0",
      blog: "it look like readable English. Many desktop publishing text.",
    },
  ];
  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: "fashion",
    },
  });

  return (
    // {/* <!--Blog sidebar start--> */}
    <>
      <div className="col-xl-3 col-lg-4 col-md-5">
        <div className="blog-sidebar">
          <div className="theme-card">
            <h4>Recent Blog</h4>
            <ul className="recent-blog">
              {data &&
                data.blog.map((item, i) => (
                  <li key={i}>
                    <div className="media">
                      <img
                        className="img-fluid blur-up lazyload"
                        src={item.img}
                        alt="Generic placeholder image"
                      />
                      <div className="media-body align-self-center">
                        <h6>{item.title}</h6>
                        <p>0 hits</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="theme-card">
            <h4>Popular Blog</h4>
            <ul className="popular-blog">
              {popularBlogData.map((blogData, i) => {
                return (
                  <li key={i}>
                    <div className="media">
                      <div className="blog-date">
                        <span>{blogData.date} </span>
                        <span>{blogData.month}</span>
                      </div>
                      <div className="media-body align-self-center">
                        <h6>{blogData.title}</h6>
                        <p>{blogData.hits} hits</p>
                      </div>
                    </div>
                    <p>{blogData.blog}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
    // {/* <!--Blog sidebar start-->
  );
};

export default BlogSidebar;
