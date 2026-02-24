import React from "react";
import FooterImg from "../../assets/FooterImg.png";

function Footer() {
  const BgImage = {
    backgroundImage: `url(${FooterImg})`,
    backgroundColor: "#270c03",
    backgroundPostion: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
  };
  return (
    <div style={BgImage}>
        <div className="container min-h-[350px] flex justify-center items-center py-12 sm:py-0 mx-auto">
        
      </div>
    </div>
  );
}

export default Footer;
