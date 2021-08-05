import React,{ useState, useEffect } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import './Recommendation.css';
import PicturesWall from './PicturesWall';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer,
   MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from
"mdbreact";
import { VscAdd } from "react-icons/vsc";

const Recommendation = (props) => {
  const [state,setState]=useState({visible: false});
  debugger
  const [value,setValue]=useState( 
    { 
      name:'',
      subject:'',
      recomand:'', 
      pictures:''
    }
  );
  const [recommendations,setRecommendations]=useState();
  function show() {
    setState({visible:true});
  }

  function hide() {
    setState({...value, visible: false });
  }  
  function onInputChange(event, field) {
    setValue({ ...value, [field]: event.target.value });
  }

const addRespond = async (recDetails) => {
  debugger;
  console.log(recDetails);
  fetch("http://localhost:3000/newRecommendations/addRec", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
      },
      body:JSON.stringify(recDetails),
      })
};
function send(){
    addRespond({name:value.name, subject:value.subject,
    recomand:value.recomand,pictures:value.pictures[0][0].thumbUrl});
    hide();
}
useEffect(()=>{
  debugger;
  fetch("http://localhost:3000/recommendation/getAllRecommendation",{
  method: "GET",
  headers: {
  "Content-Type": "application/json",
  "access-control-allow-origin": "*",
  }
  }).then(res=>res.json())
  .then((res)=> setRecommendations(res) )
},[])  
debugger;
  return (
    <div >    
        <MDBContainer >
          <MDBCarousel
          activeItem={1}
          length={6}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
          >
            <MDBCarouselInner>
          { recommendations&&recommendations.map((i,index)=>{
              
              let image;
              try{
              image=require("../../image/Recommendation/"+`${i.image}`)
              console.log(image, i);
              return(
                <div key={index}>
                <MDBCarouselItem key={index} itemId={i.id} className="rec-warp">
                  <MDBView>
                    <img 
                      className="d-block w-100"
                      src={image.default}
                      alt=""
                    />
                  <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive"/>
                      <p  className="font-rec">{i.text}</p>
                  </MDBCarouselCaption>
                </MDBCarouselItem>   
                </div>
             )}
             catch{
               console.log(i);
             }
             
        })
        }  </MDBCarouselInner>
        </MDBCarousel>
        </MDBContainer>
        <div>
        <button onClick={show.bind(this)} className="new-recc">
             <h1 className="font">Add New Recommendation</h1>
             <h1><VscAdd className="plus-icon"/></h1>
        </button>

         <Rodal animation="rotate"  width={600} height={650} visible={state.visible} onClose={hide.bind(this)}>
           <div >
             <MDBContainer className="form-box" width={100} height={700}>
                <MDBRow>
                  <MDBCol md="6">
                    <form >
                      <p className="h5 text-center mb-4">Write to us</p>
                       <div className="grey-text">
                        <MDBInput className="tuchas" label="Your name" icon="user" group type="text" validate error="wrong"
                          success="right" onChange={(event)=>onInputChange(event,"name")} />
                        <MDBInput label="Subject" icon="tag" group type="text" 
                        validate error="wrong" success="right" onChange={(event)=>onInputChange(event,"subject")}/>
                        <MDBInput type="textarea"  rows="5" cols="60" name="value" 
                         label="Your message" icon="pencil-alt" 
                         onChange={(event)=>onInputChange(event,"recomand")}/>
                      </div> 
                      <div className="text-center">
                      <div className="container">
                        <div className="content">
                            <PicturesWall value={value} setValue={setValue}/>
                          </div>
                        </div>
                        <MDBBtn outline color="secondary" onClick={send}>
                          Send
                          <MDBIcon far icon="paper-plane" className="ml-1" />
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer> 
           </div>
        </Rodal> 
        </div> 
      
      </div>

  );
}

export default Recommendation;
