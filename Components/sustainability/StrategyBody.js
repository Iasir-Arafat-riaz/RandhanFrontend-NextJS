import Image from "next/image";
import React from "react";

const StrategyBody = () => {
  return (
    <div className="m-3">
      <div>
        <br />
        <h2 className="mb-3 commonComponentHeader" >SUSTAINABILITY STRATEGY</h2>
        
        <p>
          RONDHAN cares deeply for its communities. A more sustainable world
          encompasses a harmonious and healthy equilibrium between Earth and all
          of its living things. RONDHAN strives to achieve that. Our strong
          principles serve to maximize our opportunities and minimize the
          negative impacts of our operations have on the environment. We have
          three pillars of sustainability: Economical, Social and Environmental.
          Click on each pillar to find out more about what we do.
        </p>
        <br />
        <p>
          Sustainability is integral to our business and planning process.
          Engaging our people, improving supply chain sustainability,
          responsibly managing our footprint and improving the lives of those
          along our supply chain and in the communities where we live and work
          is central to our Sustainability Strategy. We set aspirational targets
          in accordance with best practice benchmarks, act to meet those
          targets, and assess and report on our progress toward achieving our
          goals. As shown below, we act on the focus areas for each of our four
          strategic pillars.
        </p>
        <div className="text-center m-2">
          <Image
            src="/Images/sustainability/sstra.jpeg"
            alt="Picture of the author"
            width={500}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default StrategyBody;
