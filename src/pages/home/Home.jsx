import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';


// import { useEffect } from 'react';
import "./home.css"


function Home() {

    document.title = "Home | Hostel Affairs";

  return (
    <div className='home' style={{backgroundImage:"url(./habg.jpg)", backgroundRepeat:"no-repeat",backgroundPosition:"center", height:"100%", backgroundAttachment:"fixed", backgroundSize:"cover"}}>
      <div className="landing">
        <Navbar/>
        <div className="welcome container w3-animate-zoom">
          <div className='welcome-title'>
            <h1 className="home-title-1 text-white text-center">WELCOME TO</h1>
             <h1 className='home-title-2 text-primary text-center'>Hostel Affairs Council</h1>
             <h1 className='home-title-3 text-white text-center'>IIT BOMBAY</h1>
          </div>
        </div>
      </div>
        {/* <div className="">
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="5" aria-label="Slide 6" class="active"  aria-current="true"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="6" aria-label="Slide 7" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="7" aria-label="Slide 8" class=""></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="8" aria-label="Slide 9" class=""></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item">
                <img src={"./insti-img/hostel-12.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item ">
                <img src={"./insti-img/main-building.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/boat-house.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/sameer-hill.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/swimming-pool.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/lecture-hall.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item active">
                <img src={"./insti-img/top-view.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/gymkhana.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <img src={"./insti-img/amazing.jpg"} className='carousel-img' height="50%" alt=""  />
                <div class="container">
                  <div class="carousel-caption text-start">
                    
                  </div>
                </div>
              </div>


            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}


        {/* About HA council =============================================================== */}
        <div className="trans py-1 py-5 ">
          <div class="container  col-xl-12 px- ">
            <div class="row align-items-center g-lg-5 py-4">
              <div class="col-lg-7 px-5 text-center text-light text-lg-start">
                <h1 class="about display-5 fw-bold lh-1  mb-3" >About HA Council</h1>
                <p class="col-lg-10  fs-5 msg">Hostel Affairs council holds the responsibility to provide better facilities and improvise the standards of students’ stay at IIT Bombay. Any improvisation or addition of the Infrastructure requirements, Security, Hospital, Internet, Accommodation, Housekeeping, Sustainability and Eateries are governed by the Hostel Affairs council.</p>
              </div>
               <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./pnglogo.png"} width="300px" alt="" />
              </div>
            </div>
          </div>
        </div>

         {/* Msg from GSHA =============================================================== */}
        <div className="trans  py-5">
          <div class="container  col-xl-12 px-4 mt-5 ">
            <div class="row align-items-center g-lg-5 py-4">
              <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./22-23/kartik.jpeg"} className="rounded-circle" width="300px" alt="" />
              </div>
              <div class="col-lg-7 px-5 text-center text-light text-lg-start">
                <h1 class="about display-5 fw-bold lh-1  mb-3" >Message from GSHA</h1>
                <p class="col-lg-10  fs-5">You will hear it repeatedly from people that you are attending the nation's top engineering institute. We are not being arrogant when we say that; rather, it is the reality! The country’s brightest minds come to IIT Bombay every year as it is the best place to be for learning and personal development. So I once again congratulate you for making ...</p>
               <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Read Full Msg
               </button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"                aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title about" id="staticBackdropLabel">Full Message by GSHA</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                 <p class=" msg fs-5 text-black container">You will hear it repeatedly from people that you are attending the nation's top engineering institute. We are not being arrogant when we say that; rather, it is the reality! The country’s brightest minds come to IIT Bombay every year as it is the best place to be for learning and personal development. So I once again congratulate you for making it to IIT Bombay. I heartily welcome you all! <br/>
                <br/>
                Everyone anticipates being rewarded in some way for the long and tough struggle it took to get here. But that simply          isnt the case, you are welcomed to insti with the mumbai monsoons, with constant downpour of rainfall combined with         the size of the campus where it seems impossible to get from one place to another. <br/>
                <br/>
                After living a comfortable life at your home, adjusting to the hostel life at IIT Bombay might be daunting to some,           but as days pass you’ll see that the hostel life isnt all that bad. You would start enjoying being here and before          you know it the hostel start feeling homely. To sum up everything, you will spend most memorable and enjoyable part         of your life here at the campus.  <br/>
                <br/>
                This process of you getting accustomed to the hostel life is made easier because of the facilities provided by the          hostels and the institute, be it your basic needs or your entertainment. Hostel Affairs is by far the most crucial          component of the institute as it deals with the day to day functioning of students life. The necessary information        regarding hostel facilities and services will be introduced in successive pages.<br/>
                <br/>
                Just like any case there is a lot more to hostel life than what I have mentioned, but this is something you will          have to find out your self in your course through IIT Bombay. You can try learning new skills or honing your old          ones with the freedom and resources available to you in the campus. At the end, when you look back you will realise         how much you have developed over the course of your stay. For now,I will take your leave and hope to see you and        have a nice interaction when you come to our beautiful campus.
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        
{/*====================== Verticles ================================================ */}

  <div class="container px-4 trans py-2" id="hanging-icons">
    <h1 class="about display-5 fw-bold lh-1  mb-3" >Hostel Affairs Verticles</h1>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex text-info align-items-start">
        <div class="fs-3 me-3 mt-2">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Hygiene Committee</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>
      <div class="col d-flex text-info align-items-start">
        <div class="icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Sustainability Cell </h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
             Know More
          </a>
        </div>
      </div>

      <div class="col d-flex text-info align-items-start">
        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Gender Cell</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>

      <div class="col d-flex text-info align-items-start">
        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Security</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>


      <div class="col d-flex text-info align-items-start">
        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>
        <div>
          <h3 class="fs-2 text-warning">Eateries</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>
      </div>




        <div class="col d-flex text-info align-items-start">

        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Hospital</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>

      </div>

        <div class="col d-flex text-info align-items-start">

        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Internet</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>

      </div>

         <div class="col d-flex text-info align-items-start">

        <div class="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <i className='bi bi-1-circle text-danger'></i> */}
        </div>

        <div>
          <h3 class="fs-2 text-warning">Transportation</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Know More
          </a>
        </div>

      </div>

    </div>
  </div>
                
     {/* Meet HA Council members =============================================================== */}
        <div className="trans ">
          <div class="container  col-xl-12 px-4 mt-2 ">
            <h1 class="about display-5 fw-bold lh-1 " >Meet HA Council Members</h1>
            <div class="row align-items-center g-lg-5">
              
              <div class="col-lg-7 px-5 text-center text-lg-start">
                <p class="col-lg-10 ">
                  <p className="msg text-white fs-4"> Hostel Affairs Council consist of 16 Students led by elected General Secretry of Hostel Affairs responsible for different kind of work. </p>
                  <div className='py-2 '>
                            <Link to="/ha-council" target="_blank"><button className="btn btn-primary ">View HA Council 2022-23</button></Link>
                  </div>
                </p>
              </div>

              <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./haCouncil.png"} style={{objectFit:"cover", width:"100%"}} alt="" />
              </div>

            </div>
          </div>
        </div>

  

         {/* Contact Us =============================================================== */}
        <div className="trans ">
          <div class="container  col-xl-12 px-4 mt-2 ">
            <div class="row align-items-center g-lg-5 py-4">
                            <div class="col-md-10 mx-auto text-center col-lg-5">
                <img src={"./contact.png"} style={{objectFit:"cover", width:"100%"}}alt="" />
              </div>

              <div class="col-lg-7 px-5 text-center text-lg-start">
                <h1 class="about display-5 fw-bold lh-1 " >Contact Us</h1>
                <p class="col-lg-10  fs-4 msg">
                  <p className="msg text-light">We are available on phone and email. We would recommend to contact us via email instead of calling directly. </p>
                  <div className='d-flex flex-column m-auto py-2 '>
                            <h6 className="text-white"><span className='text-primary px-1'>Email:</span> 200100042@iitb.ac.in</h6>
                            <h6 className="text-white"><span className='text-primary'>Phone:</span> 9871766546</h6>
                    </div>
                </p>
              </div>


            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Home;