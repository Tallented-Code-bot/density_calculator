import React from "react"
import {useState,useEffect} from "react"


const Calculator=()=>{
  const [mass,setMass]=useState(0); 
  const [volume,setVolume]=useState(0)
  const [density,setDensity]=useState(0)

  const [massUnit,setMassUnit]=useState("g");
  const [volumeUnit,setVolumeUnit]=useState("mL");
  const [densityMassUnit,setDensityMassUnit]=useState("g");
  const [densityVolumeUnit,setDensityVolumeUnit]=useState("mL");


  const [lastEdited,setLastEdited]=useState(["mass","volume","density"]);


  function convertMass(input,inUnit,outUnit){
    //each unit in mg
    let units={kg:1000000,g:1000,mg:1};

    //convert to mg
    let inMg=input*units[inUnit]; 

    //convert from mg to output unit
    let output=inMg/units[outUnit];
    return output;
  }

  function convertVolume(input,inUnit,outUnit){
    //all in mL
    let units={mL:1,cm3:1,m3:1000000,L:1000};

    let inMl=input*units[inUnit];

    let output=inMl/units[outUnit];
    return output;
  }


  function convertDensity(massInput,volumeInput,massInUnit,volumeInUnit,massOutUnit,volumeOutUnit){
    let convertedMass=convertMass(massInput,massInUnit,massOutUnit);
    let convertedVolume=convertVolume(volumeInput,volumeInUnit,volumeOutUnit);
    return convertedMass/convertedVolume;
  }



  function findSolidType(){
    let densityWithUnits=convertDensity(extractNumbers(mass),extractNumbers(volume),densityMassUnit,densityVolumeUnit,"g","mL")
    console.log(densityWithUnits);
    if(densityWithUnits>2.5){
      return "inorganic solid";
    }
    else if(densityWithUnits>1){
      return "organic solid";
    }
    else{
      return "unknown type of solid";
    }
  }




  const editMass=(e)=>{
    setMass(e.target.value);
    //updateLastEdited("mass");
    //calculateValues()
  }

  const editVolume=(e)=>{
    setVolume(e.target.value);
    //updateLastEdited("volume");
    //calculateValues()
  }

  const editDensity=(e)=>{
    setDensity(e.target.value);
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
    
    //get mass in proper units
    let massInUnits=convertMass(extractNumbers(mass),massUnit,densityMassUnit);
    let volumeInUnits=convertVolume(extractNumbers(volume),volumeUnit,densityVolumeUnit);
    setDensity(massInUnits/volumeInUnits);
  }

  function calculateVolume(){
    // mass/density=volume

    //let massInUnits=convertMass(extractNumbers(mass),massUnit);
    //convert the density to the proper units
    let densityInUnits=convertDensity(extractNumbers(density),1,densityMassUnit,densityVolumeUnit,massUnit,volumeUnit);

    setVolume(extractNumbers(mass)/densityInUnits);
  }


  function calculateMass(){
    //mass=volume*density
    //

    let densityInUnits=convertDensity(extractNumbers(density),1,densityMassUnit,densityVolumeUnit,massUnit,volumeUnit);



    setMass(extractNumbers(volume)*densityInUnits);
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
    <form onSubmit={(e)=>{e.preventDefault();}}>
      <div className="inputLine">
        <label>Mass:</label>
        <input type="text" value={mass} onChange={editMass}/>

        <select value={massUnit} onChange={(e)=>{setMassUnit(e.target.value)}}> 
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="mg">mg</option>
        </select>

        <button onClick={calculateMass}>Calculate</button><br/>
      </div>



    <div className="inputLine">
        <label>Volume:</label>
        <input type="text" value={volume} onChange={editVolume}/>
        
        <select value={volumeUnit} onChange={(e)=>{setVolumeUnit(e.target.value)}}>
          <option value="mL">mL</option>
          <option value="L">L</option>
          <option value="cm3">cm&sup3;</option>
          <option value="m3">m&sup3;</option>
        </select>

        <button onClick={calculateVolume}>Calculate</button><br/>
    </div>



      <div className="inputLine">
        <label>Density:</label>
        <input type="text" value={density} onChange={editDensity}/>
        <select value={densityMassUnit} onChange={(e)=>{setDensityMassUnit(e.target.value)}}>
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="mg">mg</option>
        </select>/
        

        <select value={densityVolumeUnit} onChange={(e)=>{setDensityVolumeUnit(e.target.value)}}>
          <option value="mL">mL</option>
          <option value="L">L</option>
          <option value="cm3">cm&sup3;</option>
          <option value="m3">m&sup3;</option>
        </select>


        <button onClick={calculateDensity}>Calculate</button><br/>

      </div>
      <p className="caption">This substance is most likely an <b>{findSolidType()}</b></p>



    </form>
  )
  
}

export default Calculator
