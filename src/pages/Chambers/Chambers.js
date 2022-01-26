import React from "react";
import chambers from "../../assets/images/chambers.jpg";
import work from "../../assets/images/work.jpg";
import investor from "../../assets/images/investor.jpg";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import Cards from "../../components/Cards/Cards";
// import Footer from "../../components/Footer/Footer";
import LPModal from "../../components/LPModal/LPModal";
import { useSelector, useDispatch } from "react-redux";
import { toggleLp } from "../../redux/lpmodal";
import { toggleAm } from "../../redux/asssitmodal";
import AssistModal from "../../components/LPModal/AssistModal";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Media from './Media'
import ContactForm from './ContactForm'
import Footer from "./Footer";

const Chambers = () => {
  const dispatch = useDispatch();
  const { lpActive } = useSelector((state) => state.lpmodal);
  const { amActive } = useSelector((state) => state.assistmodal);
  const { width } = useWindowDimensions();

  return (
    <div >
      {lpActive && <LPModal />}
      {amActive && <AssistModal />}
      <Media/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Chambers;
