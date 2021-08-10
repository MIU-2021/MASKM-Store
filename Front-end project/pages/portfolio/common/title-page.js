import React from "react";

const MasterTitleData = [
  {
    titleClass: "title1",
    title: "recent story",
    innerTitleClass: "title-inner1",
    innerTitle: "trending products",
  },
  {
    titleClass: "title2",
    title: "recent story",
    innerTitleClass: "title-inner2",
    innerTitle: "trending products",
  },
  {
    titleClass: "title3",
    title: "recent story",
    innerTitleClass: "title-inner3",
    innerTitle: "trending products",
    line: '<div className="line"></div>',
  },
  {
    titleClass: "title4",
    title: "recent story",
    innerTitleClass: "title-inner4",
    innerTitle: "trending products",
    line: '<div className="line">    <span></span>  </div>',
  },
  {
    titleClass: "title5",
    title: "recent story",
    innerTitleClass: "title-inner5",
    innerTitle: "trending products",
    line: '<hr role="tournament6" />',
  },
];

const MasterTitle = ({
  titleClass,
  title,
  innerTitleClass,
  innerTitle,
  line,
}) => {
  return (
    <div className={titleClass}>
      <h4>{title}</h4>
      <h2 className={innerTitleClass}>{innerTitle}</h2>
      {line ? <div dangerouslySetInnerHTML={{ __html: line }}></div> : ""}
    </div>
  );
};
const TitlePage = () => {
  return (
    <section className="section-b-space">
      {MasterTitleData.map((data, index) => {
        return (
          <MasterTitle
          key={index}
            titleClass={data.titleClass}
            title={data.title}
            innerTitleClass={data.innerTitleClass}
            innerTitle={data.innerTitle}
            line={data.line}
          />
        );
      })}
    </section>
  );
};

export default TitlePage;
