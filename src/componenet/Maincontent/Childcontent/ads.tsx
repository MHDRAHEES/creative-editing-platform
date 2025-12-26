import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

interface AdsProps {
  data: any[];
}
;
function Ads({ data }: AdsProps) {

    
const images = [
  { url: "public/brunette-woman-looking-clapperboard.jpg"},
  { url: "public/50390.jpg" },
  { url: "public/133536.jpg"},
];
  return (
    <div className="flex gap-6 flex-wrap p-6 justify-center">
        <div     
        >
          <SimpleImageSlider
            width={1500}
            height={800}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={3}
            
          />
        </div>
    </div>
  );
}

export default Ads;
