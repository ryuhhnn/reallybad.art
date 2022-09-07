import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageLeft from "../components/ImageLeft";
import ImageRight from "../components/ImageRight";
// import styles from "../styles/Home.module.css";
import obermer from "../public/img/obermer.png";
import yonce from "../public/img/yonce.png";
import potatoJesus from "../public/img/potato-jesus.png";
import creationOfAdam from "../public/img/the-creation-of-adam.png";
import theScream from "../public/img/the-scream.png";
import monaLisa from "../public/img/mona-lisa.png";

const Home = () => {
  return (
    <>
      <Header />
      <ImageLeft src={obermer} title="Barack Obama" />
      <ImageRight src={yonce} title="Beyoncé Knowles-Carter" />
      <ImageLeft src={potatoJesus} title="Potato Jesus" />
      <ImageRight src={creationOfAdam} title="The Creation of Adam" />
      <ImageLeft src={theScream} title="The Scream" />
      <ImageRight src={monaLisa} title="Mona Lisa" />
      <Footer />
    </>
  );
};

export default Home;
