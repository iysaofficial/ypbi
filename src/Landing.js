import AboutComponent from "./components/AboutComponent";
import VisiMisi from "./components/VisiMisi";
import FooterComponent from "./components/FooterComponent";
import MitraComponent from "./components/MitraComponent";
// import AffiliateComps from "./components/AffiliateComps";
// import BackgroundComps from "./components/BackgroundComps";
// import CategoryComps from "./components/CategoryComps";
// // import ContactComps from "./components/ContactComps";
// import MekanismeComps from "./components/MekasimeComps";
// import AfterEvent from "./components/afterevent";

function Landing () {
    return (
        <div>
        <AboutComponent />
        <VisiMisi />
        <MitraComponent />
        <FooterComponent />

        {/* <AffiliateComps />
        <BackgroundComps />
        <CategoryComps />
        <MekanismeComps />
        <AfterEvent /> */}
        {/* <ProvisionComps /> */}
        {/* <FaqComps /> */}
        {/* <ContactComps /> */}
        </div>
    )
}

export default Landing;