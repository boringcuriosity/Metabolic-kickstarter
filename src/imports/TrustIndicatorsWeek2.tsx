import React from "react";
import imgImage2 from "figma:asset/8741fc470fd03fed55b85ddb7d1c9c186507e001.png";
import imgImage3 from "figma:asset/25d6ceb8a7ad350068f6cd64e70338132e02df6a.png";
import imgImage4 from "figma:asset/36d686976bc7381e13a970496db17106c76767e3.png";

function AllLogos() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="all logos">
      <div className="bg-center bg-cover bg-no-repeat h-[28px] shrink-0 w-[86px]" data-name="image 2" style={{ backgroundImage: `url('${imgImage2}')` }} />
      <div className="bg-[60.71%_47.27%] bg-no-repeat bg-size-[103.08%_336.56%] h-[14px] shrink-0 w-[137px]" data-name="image 3" style={{ backgroundImage: `url('${imgImage3}')` }} />
      <div className="bg-left bg-no-repeat bg-size-[100%_314.29%] h-[12px] mix-blend-difference shrink-0 w-[73px]" data-name="image 4" style={{ backgroundImage: `url('${imgImage4}')` }} />
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <div className="relative size-full" data-name="Trust indicators">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-center px-[16px] py-0 relative size-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[14px] text-center tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">This program is rooted in proven holistic frameworks — endorsed by leading wellness experts and medical research from:</p>
          </div>
          <AllLogos />
        </div>
      </div>
    </div>
  );
}