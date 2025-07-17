import React, { useState } from 'react';
function ChipsInput() {

  const [inputText, setinputText] = useState("");
  const [chips, setchips] = useState([]);

  const handlekeydown = (e) => {
    if (e.key === "Enter" && inputText.trim!=="") {
      setchips(prev => [...prev, inputText]);
      setinputText("");
    }
  }

  const handleDelete = (index) => {
    const copychips = [...chips];
    copychips.splice(index, 1);
    setchips(copychips);
  }


  return (
    <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e) => setinputText(e.target.value)}
        onKeyDown={(e) => { handlekeydown(e)}}
      />

      <div>
        {chips.map((chips,index) => <div key={chips.id} style={{ background: "gray", margin: "10px", padding: "5px", color: "white" }}>
           {chips}
          <button onClick={() => { handleDelete(index) }}>X</button>
        </div>)}
      </div>  
    </div>
    
  );
}

export default ChipsInput;