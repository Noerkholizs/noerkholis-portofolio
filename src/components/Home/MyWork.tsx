import { MyProjects } from "../my-projects";
import { MyProjectsProps } from "@/types/mywork-types";

const myProjects: MyProjectsProps[] = [
  {
    heading: "Pagii HR Attendance",
    paragraph: "loremipsum",
    link: "pagii.co",
    images: [
      "/mywork/pagii-attd-history.png", 
      "/mywork/pagii-shift-management.png", 
      "/mywork/pagii-hr-dashboard.png", 
      "/mywork/pagii-shift-setting.png", 
    ]
  },
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
  return (
    <section id="mywork" className="py-40">
        <div className="mx-auto container">
            <div className="space-y-20">
              {myProjects.map((project, index) => (
                <MyProjects
                  key={index}
                  heading={project.heading}
                  paragraph={project.paragraph}
                  images={project.images}
                  link={project.link}
                />
              ))}
            </div>
        </div>
    </section>
  )
};