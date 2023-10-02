import ReactPlayer from "react-player";

const VideoCard = ({ link }) => {
  
  return (
    <div>
      <ReactPlayer
        url={link}
        controls={true}
        light={true}
        volume={null}
        width="432px"
        height="260.85px"
        playsinline
      />
    </div>
  );
}

export default VideoCard;