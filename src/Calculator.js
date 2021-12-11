import React from "react";
import {useState,useEffect} from "react";
import EditableElement from "./EditableElement";


const Calculator=()=>{
  const [mass,setMass]=useState(0); 
  const [volume,setVolume]=useState(0)
  const [density,setDensity]=useState(0)

  const [lastEdited,setLastEdited]=useState(["mass","volume","density"]);

  const editMass=(value)=>{
    setMass(value);
    //updateLastEdited("mass");
    //calculateValues()
  }

  const editVolume=(value)=>{
    setVolume(value);
    //updateLastEdited("volume");
    //calculateValues()
  }

  const editDensity=(value)=>{
    setDensity(value);
  }

  
  // useEffect(()=>{
  //   updateLastEdited("density");
  //   calculateValues()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[density])


  // useEffect(()=>{
  //   updateLastEdited("mass");
  //   calculateValues();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[mass])


  // useEffect(()=>{
  //   updateLastEdited("volume");
  //   calculateValues();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[volume])






  function calculateValues(){
    //extract input
    let massNum=extractNumbers(mass)
    let volumeNum=extractNumbers(volume)
    let densityNum=extractNumbers(volume)

    switch(lastEdited[0]){
      default: return;
      case "density": setDensity(massNum/volumeNum);break; 
      case "mass": setMass(densityNum*volumeNum);break;
      case "volume":setVolume(massNum/densityNum);break;
    }


    setDensity(massNum+volumeNum);


  }


  function calculateDensity(){
    // mass/volume=density
    setDensity(extractNumbers(mass)/extractNumbers(volume));
  }

  function calculateVolume(){
    // mass/density=volume
    setVolume(extractNumbers(mass)/extractNumbers(density));
  }


  function calculateMass(){
    //mass=volume*density
    setMass(extractNumbers(volume)*extractNumbers(density));
  }


  const extractNumbers=(input)=>{
    //this is a simple function
    //to extract numbers from a text input

    let parsed=parseFloat(input)
    if(isNaN(parsed)){
      parsed=0
    }

    return parsed
  }


  const updateLastEdited=(input)=>{
    //if the last item of the list is alreay
    //what we want it to be, return
    if(lastEdited.at(-1)===input)return

    //get the list so we can edit it
    let lastEditedTemp=lastEdited;
    //push the input to the end
    lastEditedTemp.push(input) 
    //if the list is too long, make it shorter
    if (lastEditedTemp.length>3){
      lastEditedTemp.shift()
    }
    //set the real list from the temp list
    setLastEdited(lastEditedTemp)
  }

  return (
    //todo
    //Add contenteditable things
    //https://stackoverflow.com/questions/22677931/react-js-onchange-event-for-contenteditable
    //this should be useful
    <form onSubmit={(e)=>{e.preventDefault();}}>



      <label>Mass:</label>
      {/*<p  value={mass} onChange={editMass}/>*/}
      <EditableElement onChange={editMass}>
        <div style={{outline:"solid 2px black"}}>
          <span>{mass}</span>
        </div>
      </EditableElement>
      <TextInput>
      <button onClick={calculateMass}>Calculate</button><br/>





      <label>Volume:</label>
      {/*<p contentEditable type="text" value={volume} onChange={editVolume}/>*/}
      <EditableElement onChange={editVolume}>
        <div style={{outline:"solid 2px black"}}>
          <span>{volume}</span>
        </div>
      </EditableElement>

      <button onClick={calculateVolume}>Calculate</button><br/>

      <label>Density:</label>
      {/*<p contentEditable type="text" value={density} onChange={editDensity}/>*/}
      <EditableElement onChange={editDensity}>
        <div style={{outline:"solid 2px black"}}>
          <span>{density}</span>
        </div>
      </EditableElement>
      <button onClick={calculateDensity}>Calculate</button><br/>
    </form>
  )
  
}

export default Calculator
