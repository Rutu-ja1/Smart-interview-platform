import React, { useRef, useState } from "react";

function VideoInterview() {

    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const [recording, setRecording] = useState(false);
    const [videoURL, setVideoURL] = useState("");

    const chunks = useRef([]);

    const startCamera = async () => {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });

        videoRef.current.srcObject = stream;

    };

    const startRecording = () => {

        const stream = videoRef.current.srcObject;

        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
            chunks.current.push(event.data);
        };

        mediaRecorder.onstop = () => {

            const blob = new Blob(chunks.current, { type: "video/webm" });

            const url = URL.createObjectURL(blob);

            setVideoURL(url);

            chunks.current = [];

        };

        mediaRecorder.start();

        setRecording(true);

    };

    const stopRecording = () => {

        mediaRecorderRef.current.stop();

        setRecording(false);

    };

    return (

        <div style={{ padding: "20px" }}>

            <h2>Mock Video Interview</h2>

            <video
                ref={videoRef}
                autoPlay
                width="500"
                style={{ border: "2px solid black" }}
            />

            <br /><br />

            <button onClick={startCamera}>
                Start Camera
            </button>

            <button onClick={startRecording} disabled={recording}>
                Start Recording
            </button>

            <button onClick={stopRecording} disabled={!recording}>
                Stop Recording
            </button>

            <br /><br />

            {videoURL && (

                <div>

                    <h3>Recorded Interview</h3>

                    <video src={videoURL} controls width="500" />

                </div>

            )}

        </div>

    );

}

export default VideoInterview;