import React,{useState} from 'react'


export default function Textform(props) {
  const[text,setText]=useState("")
  const handleUpClick=()=>{
    let new_text=text.toUpperCase();
    setText(new_text)
    props.showAlert("Converted to Upper case","Success")
  }
  const handleLoClick=()=>{
    let new_text=text.toLowerCase();
    setText(new_text)
    props.showAlert("Converted to Lower case","Success")
  }
  const handleOnChange=(event)=>{
    console.log("Change")
    setText(event.target.value)
  }

  const handleClear=()=>{
    setText("")
    props.showAlert("Text Cleared","Success")
  }
  const handleCopy=()=>{
    var text=document.getElementById("exampleFormControlTextarea1")
    text.select()
    text.setSelectionRange(0,99999)
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard","Success")
  }
 
  return (
    <>
  <div className='container'>
     <h1>{props.heading}</h1> 
    <div className="mb-3">
        <textarea placeholder="Enter text here"  style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} className="form-control my-3"  id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handleLoClick}>Lowercase</button>
  <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
  <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
    </div>
  </div>
  <div className="container my-3">
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>Minutes read={0.008 *(text.length)}</p>
    <p><h2>Preview:</h2>{text.length>0?text:<h4>Enter text to Preview</h4>}</p>
  </div>
    </>
    
  )
}
