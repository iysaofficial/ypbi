import "../css/Program.css";
import FooterComponent from "../components/FooterComponent";

const Program = () => {
  return (
    <>
      <div id="service">
        <div className="service-content">
          <div className="service-grid text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3 className="fw-bold">Program Kami</h3>
                    <div className="underline1"></div>
                    <div className="underline2 mb-5"></div>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn mt-5">
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img
                        src="./assets/logo/LOGOBISF.png"
                        className="img-fluid"
                        alt="logo"
                      ></img>
                    </div>
                    <div className="service-bottom">
                      <a href="https://www.bisf.or.id/" target="_blank" className="btn btn-primary">
                        Selengkapnya
                      </a>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img
                        src="./assets/logo/OS2MN.png"
                        className="img-fluid"
                        alt="logo"
                      ></img>
                    </div>
                    <div className="service-bottom">
                      <a href="https://www.os2mn.or.id/" target="_blank" className="btn btn-primary">
                        Selengkapnya
                      </a>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <img
                        src="./logo/WRCSO.png"
                        className="img-fluid"
                        alt="logo"
                      ></img>
                    </div>
                    <div className="service-bottom">
                      <a href="https://www.wrcso.or.id/" target="_blank" className="btn btn-primary">
                        Selengkapnya
                      </a>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <h2>Siti Rokoyah</h2>
                    </div>
                    <div className="service-bottom">
                      <h3>Bendahara</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-md-3 col-sm-6">
                  <div className="service-details" data-wow-delay=".1s">
                    <div className="service-head">
                      <i class="fa-solid fa-microscope fa-6x"></i>
                    </div>
                    <div className="service-bottom">
                      <h3>Applied Life Science.</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Program;
