import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 hover:underline dark:text-white">
          Our Team
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-5">
        {members.map((member, idx) => (
          <TeamMember key={idx} member={member}></TeamMember>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
