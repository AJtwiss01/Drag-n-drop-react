import React from "react";
import "./components/styles.css";
import DragDropZone from "./components/DragDropZone";

export default function App() {
  return (
    <div className="App">
      <DragDropZone startText="Drag Item" dropText="Drop Item" />
    </div>
  );
}
