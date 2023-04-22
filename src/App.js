import React, {useState} from 'react';
import "regenerator-runtime/runtime";
import YouTube from "react-youtube";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import {HighlightOffRounded} from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

function VideoPlayer({title, videoId, opts, onClose}) {
    return <>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            color: "gray",
            width: "100%",
            marginBottom: 10,
            cursor: "pointer"
        }}
             onClick={onClose}>
            <span style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>{title}</span>
            <HighlightOffRounded/>
        </div>
        <YouTube videoId={videoId} opts={opts}/>
    </>
}

function CenteredDisplay({open, title, videoId, opts, onClose}) {
    return <Backdrop
        open={open}
    >
        <div style={{display: "grid"}}>
            <Paper elevation={8} style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
                borderRadius: 14
            }}
            >
                <VideoPlayer
                    title={title}
                    videoId={videoId}
                    opts={opts}
                    onClose={onClose}
                />
            </Paper>

        </div>
    </Backdrop>
}

function SnackDisplay({open, verticalPosition, horizontalPosition, autoHide = 30, title, videoId, opts, onClose}) {
    return <Snackbar
        open={open}
        anchorOrigin={{vertical: verticalPosition, horizontal: horizontalPosition}}
        autoHideDuration={autoHide}
    >
        <SnackbarContent
            style={{background: "white", borderRadius: 14}}
            elevation={8}
            message={<VideoPlayer
                title={title}
                videoId={videoId}
                opts={opts}
                onClose={onClose}
            />}
        />
    </Snackbar>
}


function App({domElement}) {

    const videoId = domElement.getAttribute("data-video-id") || "9QCqDVAkjqY"
    const title = domElement.getAttribute("data-video-title") || ""
    const displayType = domElement.getAttribute("data-display-type") || "popup";
    const verticalPosition = domElement.getAttribute("data-position-vertical") || "bottom";
    const horizontalPosition = domElement.getAttribute("data-position-horizontal") || "right";
    const autoHide = parseInt(domElement.getAttribute("data-auto-hide")) || 30;

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

    const handleClose = () => {
        setOpen(false)
    }

    if (displayType === "modal") {
        return <CenteredDisplay title={title}
                                open={open}
                                opts={opts}
                                videoId={videoId}
                                onClose={handleClose}

        />
    }

    return <SnackDisplay
        open={open}
        videoId={videoId}
        opts={opts}
        title={title}
        autoHide={autoHide}
        verticalPosition={verticalPosition}
        horizontalPosition={horizontalPosition}
        onClose={handleClose}
    />

}

export default App;
