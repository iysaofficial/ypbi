import React from "react";
import FooterComponent from "../components/FooterComponent";

import "../css/Gallery.css"

const GalleryComponent = () => {
  return (
    <section className="event_sponser_area_1">
      <div className="container">
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row Organized-by">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Gallery :</h4>
                {/* <div className="underline1 no-margin"></div>
                <div className="underline2 no-margin"></div> */}
              </div>
              <div className="organized-image image col-lg-9 col-md-8 text-lg-start text-md-start text-center">
                <img
                  src="../logo/1.jpeg"
                  className="ms-1 col-5 image-iysa"
                  alt="gallery"
                />
                <img
                  src="../logo/2.jpeg"
                  className="ms-1 col-5 image-iysa"
                  alt="gallery"
                />
                <img
                  src="../logo/3.jpeg"
                  className="ms-1 col-5 image-iysa"
                  alt="gallery"
                />
                <img
                  src="../logo/4.jpeg"
                  className="ms-1 col-5 image-iysa"
                  alt="gallery"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <FooterComponent/> */}
      </div>
      {/* <FooterComponent/> */}
    </section>
  );
};

export default GalleryComponent;
