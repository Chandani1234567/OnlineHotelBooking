
import VideoSection from "./VideoSection";
import VideoModal from "./VideoModal";
import withAnimation from '../../hoc/withAnimation';
import './Video.css'


function Video(){
    return(
        <>
            <VideoSection/>
            <VideoModal/>

        </>
    )
}

export default withAnimation(Video, 'animate__zoomIn');
