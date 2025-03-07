import { useSelector } from "react-redux";

const VideoBackground = ({ movieId, isMuted }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    if (!trailerVideo) return null; // Prevent error if no trailer is found

    return (
        <div className="w-screen">
            <iframe 
                className="w-screen aspect-video" 
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=${isMuted ? 1 : 0}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            >
            </iframe>
        </div>
    );
};

export default VideoBackground;
