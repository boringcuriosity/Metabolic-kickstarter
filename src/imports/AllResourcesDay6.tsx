import React from "react";
import svgPaths from "./svg-j9hkghmytm";
import imgChatGptImageAug182025073646Pm1 from "figma:asset/07b441b6bda080c8d5c8b43065b443eb0e890234.png";

function ArticleImage() {
  return (
    <div className="overflow-clip relative rounded-[12px] shrink-0 size-[54px]" data-name="article image">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[54px] left-0 top-0 w-[82px]" data-name="Healthy habits lifestyle" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwaGFiaXRzJTIwbGlmZXN0eWxlJTIwZW5lcmd5fGVufDF8fHwxNzU4MDA5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080')` }} />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#cda935] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="tag">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Article
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p2f3cfb00} fill="var(--fill-0, #E7C144)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagAndChevron() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tag and chevron">
      <Tag />
      <Frame />
    </div>
  );
}

function Rhs() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="RHS">
      <TagAndChevron />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#101828] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          The Science of Habit Formation for Long-term Success
        </p>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="bg-gradient-to-r from-[#fffbee] relative rounded-[16px] shrink-0 to-[#fff8e0] w-full" data-name="article">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start justify-start px-[16px] py-[12px] relative w-full">
          <ArticleImage />
          <Rhs />
        </div>
      </div>
    </div>
  );
}

function ArticleImage1() {
  return (
    <div className="overflow-clip relative rounded-[12px] shrink-0 size-[54px]" data-name="article image">
      <div className="absolute bg-center bg-cover bg-no-repeat h-[54px] left-0 top-0 w-[82px]" data-name="Progress tracking health" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmVzcyUyMHRyYWNraW5nJTIwaGVhbHRoeSUyMGVuZXJneXxlbnwxfHx8MTc1ODAwOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080')` }} />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#cda935] box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="tag">
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[12px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Article
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p2f3cfb00} fill="var(--fill-0, #E7C144)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagAndChevron1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="tag and chevron">
      <Tag1 />
      <Frame1 />
    </div>
  );
}

function Rhs1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="RHS">
      <TagAndChevron1 />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#101828] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Smart Ways to Monitor Your Health Journey
        </p>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="bg-gradient-to-r from-[#fffbee] relative rounded-[16px] shrink-0 to-[#fff8e0] w-full" data-name="article">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start justify-start px-[16px] py-[12px] relative w-full">
          <ArticleImage1 />
          <Rhs1 />
        </div>
      </div>
    </div>
  );
}

export default function AllResourcesDay6() {
  return (
    <div className="relative size-full" data-name="all resources - day 6">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-start px-[16px] py-0 relative size-full">
          <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667085] text-[0px] tracking-[0.25px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="font-['Roboto:Bold',_sans-serif] font-bold leading-[1.2] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Resources for you
            </p>
          </div>
          <Article />
          <Article1 />
        </div>
      </div>
    </div>
  );
}