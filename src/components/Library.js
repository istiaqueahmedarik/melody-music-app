import React from 'react'
import LibrarySong from './LibrarySong'

export default function Library({songs, setCurrentSong,audioRef,isPlaying, setSongs,libraryStatus}) {
    return (
        <div className={`library ${libraryStatus ? 'active-library':""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song)=>(
                    <LibrarySong songs={songs} song={song} 
                    id={song.id} key={song.id} 
                    setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
                    
                ))}
            </div>
        </div>
    )
}
