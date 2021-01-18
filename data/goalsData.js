// images
import socialDistanceImage from "../assets/images/socialDistance.png";
import maskImage from "../assets/images/mask.png";
import stayHomeImage from "../assets/images/stayHome.png";

const goalsData = {
  data: [
    {
      id: 1,
      imgPath: socialDistanceImage,
      creditsNumber: 100,
      title: "Abstand eingehalten",
      isActive: true,
    },
    {
      id: 2,
      imgPath: maskImage,
      creditsNumber: 150,
      title: "Maske getragen",
      isActive: false,
    },
    {
      id: 3,
      imgPath: stayHomeImage,
      creditsNumber: 250,
      title: "Kontakt vermieden",
      isActive: true,
    },
  ],
};

export default goalsData;
