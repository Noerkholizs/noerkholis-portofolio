"use client";

import { useState } from "react";
import { MyProjects } from "../my-projects";
import { MyProjectsProps } from "@/types/mywork-types";

const myProjects: MyProjectsProps[] = [
  // {
  //   heading: "Pagii HR Attendance",
  //   paragraph: "loremipsum",
  //   link: "pagii.co",
  //   images: [
  //     "/mywork/pagii-attd-history.png", 
  //     "/mywork/pagii-shift-management.png", 
  //     "/mywork/pagii-hr-dashboard.png", 
  //     "/mywork/pagii-shift-setting.png", 
  //   ]
  // },
  {
    heading: "Pagii Ordering Merchant",
    paragraph: "loremipsum",
    link: "pagii.co",
    images: [
      "/mywork/merchant-voucher.png",
      "/mywork/merchant-laporan-order.png",
      "/mywork/merchant-laporan-order.png",
    ]
  },
  {
    heading: "Pagii Orderinggggg",
    paragraph: "loremipsum",
    link: "pagii.co",
    images: [
      "/mywork/merchant-voucher.png",
      "/mywork/merchant-laporan-order.png",
      "/mywork/merchant-laporan-order.png",
    ]
  },
  {
    heading: "Pagii Ordering Shop",
    paragraph: "loremipsum",
    link: "pagii.co",
    images: [
      "/mywork/shop-ordering-dashboard.png",
      "/mywork/shop-checkout.png",
      "/mywork/shop-checkout.png",
    ]
  },
]


export const MyWork = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === myProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => 
      prev === 0 ?  myProjects.length - 1 : prev - 1
    );
  };
 
  return (
    <section id="mywork" className="py-20">
        <div className="mx-auto container">
            <MyProjects
              {...myProjects[currentProjectIndex]}
              onNext={nextProject}
              onPrev={prevProject}
              showNext={currentProjectIndex < myProjects.length -1}
              showPrev={currentProjectIndex > 0}
            />
        </div>
    </section>
  )
};