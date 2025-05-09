import "../css/Footer.css";

const FooterComponent = () => {
  return (
    <>
      <footer id="rs-footer" className="bg-footer rs-footer">
        <div className="fot container">
          <div>
            <div className="row footer-contact-desc">
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker"></i>
                  <h4 className="contact-title">Alamat</h4>
                  <a
                    href="https://maps.app.goo.gl/YJjMU8oXaexYWiFDA"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-desc"
                  >
                    Gg. Swadaya Kp. Bulak, <br />
                    Cinangka, Sawangan, Depok
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-phone"></i>
                  <h4 className="contact-title">Kontak</h4>
                  {/* <a href="wa.me/+6288213248890" className="contact-desc">
                    +62 882-1324-8890
                  </a> */}
                  {/* <br/>
                  <a href="wa.me/+6281770914129" className="contact-desc">+62 817-7091-4129</a> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-inner">
                  <i className="fa fa-map-marker"></i>
                  <h4 className="contact-title">Alamat Email</h4>
                  <a
                    href="mailto:yayasanprestasi.ypbi@gmail.com"
                    className="contact-desc"
                  >
                    yayasanprestasi.ypbi@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="foter container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="about-widget">
                  {/* <img src="" alt="Footer Logo" /> */}
                  <p>
                    Yayasan Prestasi Belia Indonesia (YPBI) adalah yayasan non
                    profit yang bergerak dibidang pendidikan dan juga
                    penyelenggaraan lomba bagi Pelajar dan Mahasiswa...
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <h5 className="footer-title">Petunjuk</h5>
                <ul className="sitemap-widget2  ">
                  <li className="active">
                    <a href="/">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Utama
                    </a>
                  </li>
                  <li>
                    <a href="/Tentang">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Tentang
                    </a>
                  </li>

                  {/* <li>
                    <a href="event.html">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      News
                    </a>
                  </li> */}
                  <li>
                    <a href="/Faq">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      FAQ
                    </a>
                  </li>

                  <li>
                    <a href="/Contact">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-12 ">
                <h5 className="footer-title2 ">Information Link</h5>
                <ul className="sitemap-widget2  ">
                  <li className="active">
                    <a
                      href="https://www.instagram.com/reel/DBsfJXByVqf/?utm_source=ig_web_button_share_sheet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Situs Kami
                    </a>
                  </li>
                  <li>
                    {/* <a href="/homeregist" target="_blank" rel="noreferrer">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Link Registrasi
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-share">
              <ul>
                {/* <li>
                  <a
                    href="https://www.facebook.com/people/Iicyms-Iysa/pfbid02kDFtrArHewkZr3br2f5Br6Qjz3w2Q3MgQmpgVx1ptZ3bhioe16SNALPreUbHwQ8gl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="https://www.youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw?reload=9&app=desktop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/reel/DBsfJXByVqf/?igsh=MTE3OW5ibGQ4N3RtYw=="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <p>
                © 2023 <a href="#">YPBI</a>. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
