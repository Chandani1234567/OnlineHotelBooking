
import VideoSection from "./VideoSection";
import VideoModal from "./VideoModal";
import withAnimation from '../../hoc/withAnimation';


function Video(){
    return(
        <>
            <VideoSection/>
            <VideoModal/>

        </>
    )
}

export default withAnimation(Video, 'animate__zoomIn');
