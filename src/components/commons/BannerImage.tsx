import Banner from "../../assets/banner.svg";
import { DSFRHide } from "./DSFRHide";

export const BannerImage = () => {
  return (
    <DSFRHide hidden unhidden unhiddenScreenSize="md">
      <img src={Banner} alt="" role="presentation" width="100%"></img>
    </DSFRHide>
  );
};
