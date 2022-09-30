import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstap.bundle.min.js'
// import {Container,Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { BsArrowLeft,BsPlusSquare,BsCircle,BsPlusCircle,BsCheckCircle,BsExclamationCircle,BsFileEarmarkArrowUp } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLinkedin,FaMobileAlt,FaKeyboard,FaChartLine} from "react-icons/fa";
import { FiBox,FiSliders} from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (


  <div className='App'>
   
      <div className='container'>
        <header className='d-flex justify-content-between mb-5' >
          
           <div className='d-flex my-2 '>
             <button className='back no-decoration'><BsArrowLeft className='purple h1'/><span className='purple h3 '>-</span> back</button>
           </div>
           <div className='d-flex my-auto title'>
             <p className='p-1'>Creating Apprenticeship</p>
           </div>
           <div className='d-flex my-auto'>
           <button className='p-2 m-3 nav-btn' >
            <BsPlusSquare className='mx-2 ' />Publish Apprenticeship
           </button>
           </div>
          
       </header>
      <div className="navigation d-flex  justify-content-between align-items-center section1 " >
              <button className='purple no-decoration company-title'><span><BsCheckCircle className="purple"/></span>  Company Title & Desc.</button>
              <button className='no-decoration '><span><BsCircle/></span> Team Type</button>
              <button className='no-decoration '><span><BsCircle/></span> Team Admin</button>
              <button className='no-decoration '><span>   <BsCircle/></span> Timeline</button>
          </div>






           <div className=' main'></div>
        <main >
          



          <div className="stack mx-auto">
             
           
         
             <div className='section section1 row my-3 bg-light round   '>
                        <button> <div className='col d-flex justify-content-between  my-3'>
                        <p>Company Logo & Apprenticeship Title</p>
                              <BsExclamationCircle />
                        </div>
                      <div className='d-flex'> 
                        <input type="image" className='no-decoration div-input  pb-2 mb-3' placeholder='Enter description' /> 
                                       
                        <input type="text" className='no-decoration div-input  pb-2 mb-3' placeholder='Enter description' />   
                       
                      </div>
                          </button>
                
           </div> 
         

       
             <div className='section d-flex flex-column section2 row my-3 bg-light round '>
                          <button>  <div className='col d-flex justify-content-between  my-3'>
                        <p>Company Description</p>
                              <BsExclamationCircle />
                        </div>
                      
                        <input type="text" className='no-decoration div-input  pb-2 mb-3' placeholder='Enter description' />   
                        </button>
                
           </div>
          

         
             <div className='section section3 d-flex flex-column row  my-3 bg-light round '>
                         <button> <div className='col d-flex justify-content-between  my-3'>
                        <p>Apprenticeship Description</p>
                              <BsExclamationCircle />
                        </div>
                      
                        <input type="text" className='no-decoration div-input pb-2 mb-3 ' placeholder='Enter description' />    
                         </button>   
                
           </div>
      



             
             <div className='section hover-border-green section4 d-flex flex-column row  my-3 bg-light round '>
                        <button> <div className='col d-flex justify-content-between  my-3'>
                        <p className=''>Introduce yourself, your company, and what you're building.</p>
                              <BsExclamationCircle />
                        </div>
                        <div className='mb-3 mx-auto '>
                            <p className='d-flex my-auto align-items-center'>  Drag n drop to upload your video <span className='mx-2'> <BsFileEarmarkArrowUp/></span></p> 
                        </div>
                  </button>
           </div>


                   
           <div className='section section5 flex-wrap row  my-3 bg-light round '>
           <button>
                      <div className=' col d-flex justify-content-between  my-3'>
                            <p>Team Type</p>
                            <BsExclamationCircle />
                      </div>


                      
      < div className=' d-md-flex justify-content-between align-items-center '>
        <div> <div className='inner  '>
                          <div className='col d-flex justify-content-between '>
                          
                                <MdMonitor />
                                <BsCircle />
                               
                              </div> 
                              <div>
                                <p>Web Platform</p>
                              </div>
                
            </div> 
        </div>
        <div > <div className='inner'>
                          <div className='col-md d-flex justify-content-between '>
                          
                               
                                <FaMobileAlt /> 
                                <BsCircle />
                               
                              </div> 
                <p>Mobile App</p>
            </div> 
        </div>
        <div >
        <div className='inner'>
                          <div className='col d-flex justify-content-between '>
                          <FaChartLine/>
                                <BsCircle />
                               
                              </div> 
                <p>Growth</p>
            </div> 
        
      
        </div>
        </div>
     
      



     
       
                      


                      
      < div className=' d-md-flex  justify-content-between align-items-center '>
       

          <div >
                  <div className='inner'>
                                    <div className='col d-flex justify-content-between '>
                                    <FaKeyboard />
                                          <BsCircle />
                                        
                                        </div> 
                                        <p>Marketing Website</p>
                      </div> 
                  
                
          </div>

          <div >
                  <div className='inner'>
                                    <div className='col d-flex justify-content-between '>
                                    <FiBox />
                                          <BsCircle />
                                        
                                        </div> 
                                        <p>Prototyping</p>
                      </div> 
                  
                
          </div>
     

          <div >
                  <div className='inner'>
                                    <div className='col d-flex justify-content-between '>
                                    <FiSliders />
                                          <BsCircle />
                                        
                                        </div> 
                                        <p>Data</p>
                      </div> 
                  
                
          </div>
       
        </div>
        
        <div md={2}>
        <div className='inner col col-md-6'>
                          <div className='col  d-flex justify-content-between '>
                          
                                <MdMonitor />
                                <BsCircle />
                               
                              </div> 
                <p>Custom Team</p>
            </div> 
        
        
      
   
        </div>
        </button>
        </div>

        <div className='section section6 d-flex row  my-3 bg-light round '>
          <button>
                      <div className='col child-1 d-flex justify-content-between  my-3'>
                        <div className='d-flex ml-2'>
                            <p className='m-2 p-2'>Team Roles</p>
                            <p className='add-team m-2 p-2'> <BsPlusCircle/> Add Team Members</p>
                        </div>
                            
                           <BsExclamationCircle />
                      </div>
                     
                      </button>       
           </div>


           
        <div className='section section7 d-flex  row  my-3  bg-light round '>
          <button className='section py-3'>
                      <div className='col child-1 d-flex justify-content-between  my-3'>
                        <div className='d-flex ml-2'>
                            <p className='m-2 p-2'>Team Roles</p>
                            
                        
    
       <p variant="" onClick={handleShow} className='add-team m-2 p-2'> <BsPlusCircle/> Add Team Members</p>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                        </div>
                            
                           <BsExclamationCircle />
                      </div>
                      <div className='row '>
                        <div className='row'>
                              <div className="person d-flex justify-content-center  align-items-center"> 
                                  <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="" />
                                  <h2 className='name '>John McKinsey</h2> 
                                  <a href="">
                                    <FaLinkedin className='ml-5 link '/>
                                  </a>
                                  
                               </div>
                              
                        </div>
                       
                      </div>
                 
                   </button>       
           </div>
        <div className=' section8 d-flex  row section my-3 bg-light round '>
          <button className='section py-3'>
          <div className='col child-1 d-flex justify-content-between  my-3'>
                       <div className='d-flex ml-2'>
                            <p className='m-2 p-2'>Team Roles</p>
                         
                        </div>
                      
                            
                           <BsExclamationCircle />
                      </div>

                      <div className='row '>
                        <div className='row'>
                              <div className='d-flex parent gap-1  justify-content-center'>
                        <div className='child-1 d-flex justify-content-between '>
                          <label htmlFor="">Start Date
                        <input type="date" className='m-2'  placeholder='Estimated Date' />
                        </label> 
                       

                        </div>

                       <div className='child-2 d-flex justify-content-between '>

                        <label htmlFor="" >Estimated Date
                        <input type="date" className='m-2' placeholder='Estimated Date' />
                        </label> 

                        </div>
                        </div>
                              
                        </div>
                       
                      </div>
                 
                   </button>       
           </div>

        
          



           
          
          </div>
          
        </main>

        </div>

   
       
    </div>
  );
}

export default App;
