import React, {useState} from 'react';
import "regenerator-runtime/runtime";
import YouTube from "react-youtube";

function App({domElement}) {

    const vertical = domElement.getAttribute("data-vertical") || "bottom"
    const horizontal = domElement.getAttribute("data-horizontal") || "right"
    const autoHide = domElement.getAttribute("data-auto-hide") || 60000

    const [open, setOpen] = useState(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,

        },
    };

    const handleReady = (event) => {
        console.log(event)
        event.target.playVideo()
    }

    return <YouTube videoId="2g811Eo7K8U" opts={opts} />
}

export default App;
