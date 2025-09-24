import React from "react";
import imgCertificate from "figma:asset/week-2-certificate-of-completion.png";

export default function Frame7() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[8px] relative size-full">
          <div className="bg-center bg-cover bg-no-repeat w-full shrink-0" data-name="Certificate" style={{ backgroundImage: `url('${imgCertificate}')`, aspectRatio: '390/461', minHeight: '300px' }} />
        </div>
      </div>
    </div>
  );
}