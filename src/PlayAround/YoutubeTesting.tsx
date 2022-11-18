import YouTube, { YouTubeProps } from 'react-youtube';


interface YoutubeItemProps{
  videoID : string,
}
function YoutubeItem(props : YoutubeItemProps) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
    const opts: YouTubeProps['opts'] = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
  
    return (
        <YouTube videoId={props.videoID} opts={opts} onReady={onPlayerReady} />
    )
  }

  export default YoutubeItem;