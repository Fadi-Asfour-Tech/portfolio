import React from "react";
import BlindCareAssociation from "./BlindCareAssociation";
import CompaniesBar from "./CompaniesBar";
import Epoch from "./Epoch";
import PeakLink from "./PeakLink";
import PW from "./PW";

// interface Props {}

const ExperienceWrapper = () =>
  // props: Props
  {
    // const barRef = React.useRef<HTMLDivElement>(null);

    const GetDescription = () => {
      switch (DescriptionJob) {
        // case "Blitz":
        //   return <Blitz />;
        case "PeakLink":
          return <PeakLink />;
        case "BlindCareAssociation":
          return <BlindCareAssociation />;
        case "Epoch":
          return <Epoch />;
        case "PhysicsWallah":
          return <PW />;
      }
    };
    const [DescriptionJob, setDescriptionJob] = React.useState("PeakLink");
    return (
      <section
        className="flex w-full flex-col items-center justify-center space-y-4
      overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6"
      >
        {/* Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* Description for The job */}
        <div className="w-full flex-1 px-2">{GetDescription()}</div>
      </section>
    );
  };

export default ExperienceWrapper;
