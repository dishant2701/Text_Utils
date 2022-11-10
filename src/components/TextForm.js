import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("All text is ClearText","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("Converted to Change","success")
  };

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Successfull","success")
  }

  const handleSpcae=()=>{
    let newText=text.split(/[]+/);
    setText(newText.join(""));
    props.showAlert("Remove the space","success")
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'gray':'white'}}
            id="myBox"
            rows={8}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
          UPPERCASE
        </button>
        <button className="btn btn-info mx-1" onClick={handleLoClick}>
          Lowercase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Cleartext
        </button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>
          CopyText
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpcae}>
          RemoveSpace
        </button>

      </div>
      <div className="container mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>
            {text.length>0?text:"Enter Somerthig in textarea to preview it here..."}
        </p>
      </div>
    </>
  );
}
