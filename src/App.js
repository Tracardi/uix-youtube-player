import React, {useState} from 'react';
import "regenerator-runtime/runtime";
import YouTube from "react-youtube";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import {HighlightOffRounded} from "@mui/icons-material";

function App({domElement}) {

    const videoId = domElement.getAttribute("data-video-id") || "9QCqDVAkjqY"

    const [open, setOpen] = useState(true)

    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            fs: 0,
            modestbranding: 1

        },
    };

    return <Backdrop
        open={open}
    >
    <div style={{display: "grid"}}>
        <Paper elevation={8} style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            borderRadius: 14}}
        >
            <div style={{
                display: "flex",
                justifyContent: "end",
                color: "gray",
                width: "100%",
                marginBottom: 10,
                cursor: "pointer"
            }}
                 onClick={() => setOpen(false)}>
                <HighlightOffRounded/>
            </div>
            <YouTube videoId={videoId} opts={opts} />
        </Paper>

    </div>
    </Backdrop>
}

export default App;
