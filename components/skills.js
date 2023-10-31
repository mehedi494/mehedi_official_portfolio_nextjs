import { useEffect, useState } from "react";
import SkillCard from "./ui/skillCard";

const Skills = () => {
  // const service = async()=>{
  //   const result = await fetch()
  // }

  const [service, SetService] = useState([]);

  useEffect(() => {
    fetch("/skill.json")
      .then((response) => response.json())
      .then((data) => {
        SetService(data);
        console.log(data);
      });
  }, [SetService]);
  console.log(service);

  return (
    <div className="pt-2 dark:text-white mt-20">
      <h1 className="text-center text-4xl font-semibold font-Josefin">
        SKILLED WITH
      </h1>
      {/* .........Frontend */}
      <div className="px-4 mt-8">
        <h1 className="text-3xl text-gray-600">Front-end Technology :</h1>
        <div
          className="text-stone-900 dark:text-white mt-5 grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        sm:grid-col-2  gap-5 w-full  h-full   dark:bg-inherit ">
          {service.map(
            (skill, index) =>
              (skill?.type === "language" || skill?.type === "frontend") && (
                <SkillCard
                  key={index}
                  src={skill.imageUrl}
                  name={skill.name}
                  description={skill.description}></SkillCard>
              )
          )}
        </div>
      </div>

      {/* ...........Backend............... */}
      <div className="px-4 mt-8">
        <h1 className="text-3xl text-gray-600">Backend-end Technology :</h1>
        <div
          className="text-stone-900 dark:text-white mt-5 grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        sm:grid-col-2  gap-5 w-full  h-full   dark:bg-inherit ">
          {service.map(
            (skill, index) =>
              (skill?.type === "language" || skill?.type === "backend") && (
                <SkillCard
                  key={index}
                  src={skill.imageUrl}
                  name={skill.name}
                  description={skill.description}></SkillCard>
              )
          )}
        </div>
      </div>
      {/* ...........Database............... */}
      <div className="px-4 mt-8">
        <h1 className="text-3xl text-gray-600">Database Technology : </h1>
        <div
          className="text-stone-900 dark:text-white mt-5 grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        sm:grid-col-2  gap-5 w-full  h-full   dark:bg-inherit ">
          {service.map(
            (skill, index) =>
              skill?.type === "database" && (
                <SkillCard
                  key={index}
                  src={skill.imageUrl}
                  name={skill.name}
                  description={skill.description}></SkillCard>
              )
          )}
        </div>
      </div>
      {/* ...........server............... */}
      <div className="px-4 mt-8">
        <h1 className="text-3xl text-gray-600">Server Technology : </h1>
        <div
          className="text-stone-900 dark:text-white mt-5 grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        sm:grid-col-2  gap-5 w-full  h-full   dark:bg-inherit ">
          {service.map(
            (skill, index) =>
              skill?.type === "server" && (
                <SkillCard
                  key={index}
                  src={skill.imageUrl}
                  name={skill.name}
                  description={skill.description}></SkillCard>
              )
          )}
        </div>
      </div>
      {/* ...........cloud............... */}
      <div className="px-4 mt-8">
        <h1 className="text-3xl text-gray-600">Cloud Technology : </h1>
        <div
          className="text-stone-900 dark:text-white mt-5 grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        sm:grid-col-2  gap-5 w-full  h-full   dark:bg-inherit ">
          {service.map(
            (skill, index) =>
              skill?.type === "cloud" && (
                <SkillCard
                  key={index}
                  src={skill.imageUrl}
                  name={skill.name}
                  description={skill.description}></SkillCard>
              )
          )}
        </div>
      </div>
      {/* ...........utlis............... */}
      <div className="px-4 mt-8">
        <h1 className="text-3xl text-gray-600">Utils Technology :</h1>
        <div
          className="text-stone-900 dark:text-white mt-5 grid justify-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        sm:grid-col-2  gap-5 w-full  h-full   dark:bg-inherit ">
          {service.map(
            (skill, index) =>
              skill?.type === "utils" && (
                <SkillCard
                  key={index}
                  src={skill.imageUrl}
                  name={skill.name}
                  description={skill.description}></SkillCard>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
