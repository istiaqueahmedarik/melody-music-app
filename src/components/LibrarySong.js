import React from 'react';
export default function LibrarySong({song,songs, setCurrentSong,id,audioRef,isPlaying,setSongs}) {
    const songSelectHandler =() =>{
        const selectedSong = songs.filter((state) => state.id === id)
        setCurrentSong({...selectedSong[0]})
        const newSongs = songs.map((song)=>{
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                }
            }
        })
        setSongs(newSongs)
        if(isPlaying) audioRef.current.play();
    }
    return (
        <div>
            <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected':""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
            <h2>{song.name}</h2>
            <h3>{song.artist}</h3>
            </div>
            </div>
            
        </div>
    )
}
