import VideoSection from "./VideoSection";
import VideoModal from "./VideoModal";
import WithAnimation from "../../hoc/WithAnimation";
import "./Video.css";

function Video() {
  return (
    <>
      <VideoSection />
      <VideoModal />
    </>
  );
}

export default WithAnimation(Video, "animate__zoomIn");
