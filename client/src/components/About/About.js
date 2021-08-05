
import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import './About.css'
import about1 from '../../image/About/about1.gif'
import about2 from '../../image/About/about2.gif'
const About = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Why is it so great?
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        "I would go without food if I could have a flower." Said Caryl Churchill. We at the flower shop "What's growing on..." agree with him wholeheartedly, and we are sure that you too, when you come to be impressed by the spectacular
        offer of beautiful inflorescences in a variety of rainbow shades, will forget about your lunch ...
        We are waiting for you here, at 13 Mutzafi Street in Jerusalem, or by phone at 0533160197.
      </p>

      <MDBRow>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="bullhorn" size="2x" className="blue-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Professionalism</h4>
              <p className="grey-text">
              Our seedlings receive dedicated care from the best professionals in the field of gardening.
              With us, you will buy plants that have grown at the right temperature, in soil enriched 
              with the minerals that are essential to them, and in a pest-free environment.
              And of course - we will be happy to pass our professional knowledge on...
              </p>
              <img              
                className="about-img img-fluid rounded mb-4 mb-lg-0"
                src={about1}
                alt=""/>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="cogs" size="2x" className="pink-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Customization</h4>
              <p className="grey-text">
              Want to cultivate a garden but wonder which plants will "cooperate" with your yard soil?
              Like to impress with beautiful vegetation but limited in budget?
              Our store designed for you!
              With us, you can get professional advice for the garden that suits 
              your area of ​​residence, the size of the available space you have, and 
              the exact budget you have chosen, and build a custom plan of the garden of your dreams!
              </p>
              <img             
                className="about-img img-fluid rounded mb-4 mb-lg-0"
                src={about2}
                alt=""/>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Support</h4>
              <p className="grey-text">
              Our customers are never alone!
              We have a warranty for the entire life of the flower, shrub or tree you purchase.
              For any questions, dilemmas or concerns you may have about them, you can always contact 
              us at phone: 0533160197,
              Or by email: whatsgrowingon.co.il
              We are allways here for you!
              </p>
              <img              
                className="about-img img-fluid rounded mb-4 mb-lg-0"
                src={about1}
                alt=""/>

            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default About;