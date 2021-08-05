import React, { useState, useEffect } from 'react';
import '../../App.css';
import './AdminEnterPage.css';
import './AdminRecommendation.css';
import Fade from 'react-reveal/Fade';
import { useHistory } from 'react-router-dom';
function AdminRecommendation (){
    const [newRec,setNewRec]=useState();
    var history= useHistory();
    useEffect(()=>{
        debugger;
        try{
        fetch("http://localhost:3000/newRecommendations/getAllnewRec", {
        method: "GET",
        headers: {
        "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem("token")),
        "Content-Type": "application/json",
        "access-control-allow-origin": "*"
        }
        }).then(res=>res.json())
        .then((res)=> setNewRec(res) )}
        catch{alert("you are not adminstrator!!!!");
        history.push('./');}
  },[])
   try{
       return(
        
        <div>
        {   
            newRec&&newRec.map(i=>{
                debugger;
                return(
                <React.Fragment>
                 <Fade buttom cascade={true}>
                    <div className="product-information">
                        <p>Name:{i.name}</p>
                        <p>Subject:{i.subject}</p>
                        <p>Content:{i.recomand}</p>
                        {console.log(i.image)}
                        <img src={i.image} className="img-rec"></img> 
                    </div>
                    <NewRec image={i.image} text={i.recomand} id={i.id}>
                    </NewRec>
                </Fade>
                </React.Fragment>
                )
            }

            )
         
        }

    </div> 
    
    )}catch{
        alert("you are not adminstrator!!!!");
        history.push('/');
        return null;
    }
}
export default AdminRecommendation;
function NewRec(props) {
    const [status,setStatus]=useState(true);
    const {image, text, id} = props
    function confirm(recDetails){
        setStatus(false);
        debugger;
        save(recDetails);
        debugger;
        deleteRec(recDetails.text)
    }
    const save = async (recDetails) => {
        debugger;
        fetch("http://localhost:3000/recommendation/newRec",{
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "access-control-allow-origin": "*",
            },
            body:JSON.stringify(recDetails)
            })
    };

    const deleteRec = async(delText) => {
        console.log("delText:",delText);
        debugger;
        await fetch("http://localhost:3000/newRecommendations/"+`${delText}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")), 
        }
        }).then((res)=>res.json())
    }; 
    return (
      <button className="btn-details" 
        onClick={()=>{confirm({id:id,image:image,text:text})}} disabled={!status}
        >{status? 'Confirm the recommendation': 'approved'}
      </button>  
    )
}
