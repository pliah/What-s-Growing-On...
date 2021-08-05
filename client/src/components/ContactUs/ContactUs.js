import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
import './ContactUs.css'
const ContactUs = () => {
  return (
    <section className="my-5">
      <h1 className=" h1-responsive font-weight-bold text-center my-5  contact-text">
        Contact us
      </h1>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
           <MDBCardBody>
            <div className="form-header accent-1">
                <h3 className="mt-2 contact-text">
                  <MDBIcon icon="envelope" /> Keep in touch:
                </h3>
              </div>
              <p className="font-text">
               We are sure that you enjoyed very much ordering beautifull flowers and  plants by our site,
               but we can promise you that a great buying exprience in our fancy and inviting physical store is waiting for you.
               looking forward to seeing you at the what's growing on real store! 
               and, you can make a call or send an email to us, 
               and it will be a pleasure to hear from you. 
               so just find the details you need here, in our contact page,
               and - use it! also - don't you dare to forget bringing your credit card... from this
               lovely store you are not going to get out with empty hands, but with a lot of good and floral mood!
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol> 
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.3411297406883!2d35.218471020411!3d31.815701939774048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15032a003b0a4219%3A0x6d418b8bcff1f1d!2z15TXqNeRINeZ16LXp9eRINee15XXptek15kgMTMsINeZ16jXldep15zXmded!5e0!3m2!1siw!2sil!4v1617817954596!5m2!1siw!2sil"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow >
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <div className="text-det">
              <p >Israel</p>
              <p className="mb-md-0 ">Jerusalem</p>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <div className="text-det">
              <p >053-3160-197</p>
              <p className="mb-md-0 ">Mon - Fri, 8:00-22:00</p>
              </div>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <div className="text-det">
              <p className="mb-md-0">pliag197@gmail.com</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
export default ContactUs;
