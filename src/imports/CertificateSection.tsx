import React from "react";
import imgCertificate from "figma:asset/60309361a2da79234d083d7779f55f0d58dc97fb.png";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CertificateSection() {
  return (
    <div className="w-full px-4" data-name="Certificate section">
      <div className="w-full max-w-sm mx-auto">
        <ImageWithFallback 
          src={imgCertificate}
          alt="Metabolic Kickstarter Certificate"
          className="w-full h-auto rounded-lg shadow-lg"
          data-name="Certificate"
        />
      </div>
    </div>
  );
}