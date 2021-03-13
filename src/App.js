import { useRef, useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import './style/style.scss';
import data from "./util";

function App() {
  const audioRef = useRef(null)
  const [songs,setSongs] =useState(data())
  const [currentSong,setCurrentSong] =useState(songs[0])
  const [isPlaying, setIsPlaying] =useState(false)
  const [songInfo,setSongInfo] = useState({currentTime:0,duration:0})

  const [libraryStatus, setLibraryStatus] = useState(false)
  const timeUpdateHandler = (e) =>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration:duration})

}
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <div class="mainPlay">
      <Song currentSong={currentSong}/>
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} audioRef={audioRef} setSongInfo={setSongInfo} songInfo={songInfo}/>
      </div>
      <Library audioRef={audioRef} songs={songs} isPlaying={isPlaying} setCurrentSong={setCurrentSong} setSongs={setSongs} libraryStatus={libraryStatus}/>
      <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
