import React, { useState, useRef } from "react";

const DragDropZone = ({ startText, dropText }) => {
  const DragDrop = useRef();
  const [text, setDragtext] = useState(startText);
  const [fileName, setFile] = useState("");
  function handleEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("onDragEnter");
  }

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("onDrop");
    console.log(e.dataTransfer.files);
    setDragtext("");
    setFile(e.dataTransfer.files[0].name);
  };
  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log("onDragOver");

    setDragtext(dropText);

    if (DragDrop.current) {
      DragDrop.current.style.borderColor = "lightgray";
      DragDrop.current.style.borderWidth = "3px";
      DragDrop.current.style.backgroundColor = "lightgray";
    }
  };
  function handleLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("onDragEnter");
    setDragtext(startText);
    DragDrop.current.style.borderColor = "none";
    DragDrop.current.style.borderWidth = "none";
    DragDrop.current.style.backgroundColor = "transparent";
  }

  return (
    <>
      <div
        ref={DragDrop}
        className="dropWrapper"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          console.log(e);
        }}
        onDrop={e => {
          handleDrop(e);
        }}
        onDragOver={e => {
          handleDragOver(e);
        }}
        onDragEnter={e => {
          handleEnter(e);
        }}
        onDragLeave={e => {
          handleLeave(e);
        }}
      >
        <input type="file" onChange={async () => alert("changed")} />
        <label>{text}</label>
        {fileName ? <p className="fileName">name: {fileName} </p> : ""}
      </div>
    </>
  );
};

export default DragDropZone;
