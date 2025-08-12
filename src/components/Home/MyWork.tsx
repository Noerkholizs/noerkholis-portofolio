"use client";

import { useState } from "react";
import { MyProjects } from "../my-projects";
import { MyProjectsProps } from "@/types/mywork-types";
import { ResponsiveContainer } from "../ui/responsive-container";

const myProjects: MyProjectsProps[] = [
  {
    heading: "HR Attendance",
    paragraph: "loremipsum",
    link: "https://portal.pagii.co/",
    images: [
      "/mywork/pagii-hr-dashboard.png", 
      "/mywork/pagii-shift-management.png", 
      "/mywork/pagii-attd-history.png", 
      "/mywork/pagii-shift-setting.png", 
    ]
  },
  {
    heading: "Merchant",
    paragraph: "loremipsum",
    link: "https://sandbox-merchant.sandbox.co.id/",
    images: [
      "/mywork/merchant-login.png",
      "/mywork/merchant-ubah-produk.png",
      "/mywork/merchant-voucher.png",
      "/mywork/merchant-laporan-order.png",
    ]
  },
  {
    heading: "Ordering Shop",
    paragraph: "loremipsum",
    link: "https://shop.pagii.co/roketrasa-1/home",
    images: [
      "/mywork/shop-ordering-dashboard.png",
      "/mywork/shop-checkout.png",
      "/mywork/shop-success-payment.png",
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
    <section id="mywork" className="section-padding">
      <ResponsiveContainer>
        <MyProjects
          {...myProjects[currentProjectIndex]}
          key={currentProjectIndex}
          onNext={nextProject}
          onPrev={prevProject}
          showNext={currentProjectIndex < myProjects.length -1}
          showPrev={currentProjectIndex > 0}
        />
      </ResponsiveContainer>
    </section>
  )
};