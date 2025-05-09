import "../css/About.css";

const AboutComponent = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-6  hero-image text-center">
            <img
              src="./assets/logo/logoYPBI.png"
              className="img-fluid"
              alt="logo"
            ></img>
          </div>
          <div className="col-md-6 hero-content mt-auto mb-auto">
            <h1 className="">Yayasan Prestasi</h1>
            <h1 className="">Belia Indonesia</h1>
            <p className="">
              Yayasan Prestasi Belia Indonesia (YPBI) adalah yayasan non profit
              yang bergerak dibidang pendidikan dan juga penyelenggaraan lomba
              bagi pelajar dan mahasiswa...
            </p>
            {/* <p>
              Since its inception, IYSA has been active in various activities so
              that it can be affiliated with many countries such as: Malaysia,
              Thailand, Singapore, China, India, Korea, Taiwan, Turkey, Tunisia,
              Egypt, Abu Dhabi and so on.{" "}
            </p> */}
            {/* <a href="/About" className="btn btn-primary">
              Selengkapnya
            </a> */}
          </div>

          {/* <div className="col-md-6  hero-image text-center">
            <img
              src="./assets/logo/logoYPBI.png"
              className="img-fluid"
              alt="logo"
            ></img>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
