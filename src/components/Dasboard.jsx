import React, { useState } from "react";
import "../style.css";
import Tile from "./Tile";
// import Explore from "./explore.svg";
// import Mic from "./mic.svg";
// import Search from "./search.svg";
// import { AudioRecorder } from "react-audio-voice-recorder";

const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

const Dashboard = () => {
  const handleViewmore = () => {

  };
  // const [recstarted, setRecstarted] = useState(false);
  // const handleIconClick = () => {
  //   setRecstarted(!recstarted);
  //   console.log(recstarted);
  // };
  // const startrecording = () => {
  //   handleIconClick();
  //   console.log("Recording started");
  // };
  // const stoprecording = () => {
  //   handleIconClick();
  //   console.log("Recording Stopped");
  // };
  


  return (
    <div className="dashboard column">
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      {/* <div className="record">
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          downloadOnSavePress={true}
          downloadFileExtension="webm"
        />
      </div>
      <div className="buttons">
        <div className="button1 center">English</div>
        <div className="button1 center">Malayalam</div>
      </div>
      <img src={Explore} className="icon1"></img>
      <img src={Mic} className="icon1"></img>
      <img src={Search} className="icon1"></img> */}

      
      {/* <div className="container1">
        <b>Details</b>
        <br></br>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, error cupiditate totam tenetur reiciendis provident aperiam omnis. Modi autem illum placeat ipsum beatae nisi, tempore cumque, fuga, dolor illo blanditiis?
      </div> */}
    </div>
  );
};

export default Dashboard;
