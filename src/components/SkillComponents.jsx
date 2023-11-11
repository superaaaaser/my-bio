import React from "react";
import { IconBxCss, IconBxGit, IconBxHtml, IconBxLaravel, IconBxMysql, IconBxNodejs, IconBxPhp, IconBxTailwind, IconBxWordpress, IconBxjs } from "./IconsComponents";

const SkillComponents = () => {
  const skills = [
    {
      id: 1,
      name: "Html",
      description: "Funny slogan shirt",
      icon: <IconBxHtml width="56px" height="56px" />,
    },
    {
      id: 2,
      name: "CSS",
      description: "Navy Blue Hoodie",
      icon: <IconBxCss width="56px" height="56px" />,
    },
    {
      id: 3,
      name: "Tailwind",
      description: "Leather-bound slippers",
      icon: <IconBxTailwind width="56px" height="56px" />,
    },
    {
      id: 4,
      name: "Boostrap",
      description: "Leather-bound slippers",
      icon: <IconBxCss width="56px" height="56px" />,
    },
    {
      id: 5,
      name: "Js",
      description: "Leather-bound slippers",
      icon: <IconBxjs width="56px" height="56px" />,
    },
    {
      id: 6,
      name: "PHP",
      description: "Leather-bound slippers",
      icon: <IconBxPhp width="56px" height="56px" />,
    },
    {
      id: 7,
      name: "Laravel",
      description: "Leather-bound slippers",
      icon: <IconBxLaravel width="56px" height="56px" />,
    },
    {
      id: 8,
      name: "Mysql",
      description: "Leather-bound slippers",
      icon: <IconBxMysql width="56px" height="56px" />,
    },
    {
      id: 9,
      name: "Git",
      description: "Leather-bound slippers",
      icon: <IconBxGit width="56px" height="56px" />,
    },
    {
      id: 10,
      name: "NodeJs",
      description: "Leather-bound slippers",
      icon: <IconBxNodejs width="56px" height="56px" />,
    },
    {
      id: 11,
      name: "Wordpress",
      description: "Leather-bound slippers",
      icon: <IconBxWordpress width="56px" height="56px" />,
    },
  ];

  const skillslist = skills.map((skill) => (
    <div key={skill.id} className="w-1/2 p-4 lg:w-1/4 md:w-1/3">
      <div className="flex p-4 text-gray-500 shadow-md hover:shadow-lg hover:text-sky-900 hover:bg-sky-50 hover:scale-110">
        <div className="flex justify-center w-1/3">{skill.icon}</div>
        <div>
          <div>{skill.name}</div>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="" className="py-16">
      <div className="m-6 text-center">
        <h2 className="text-3xl font-bold leading-10 text-gray-900 underline font-montserrat underline-offset-8 ">My Skills</h2>
        <p className="leading-10 text-gray-600 font-poppins ">Several skills that have been learned and used in creating projects</p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-start">{skillslist}</div>
      </div>
    </section>
  );
};

export default SkillComponents;
