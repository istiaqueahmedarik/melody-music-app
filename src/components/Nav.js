import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Nav({setLibraryStatus,libraryStatus}) {
    return (
        <nav>
            <h1>Melody</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}
