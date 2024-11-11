import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoAPI } from '../services/allAPI';



function Add({setUploadVideoResponse}) {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[uploadVideo,setUploadVideo]=useState({

    id:"",caption:"",url:"",link:""

  })

  const getYoutubeLink = (e) => {
    const { value } = e.target;
  
    if (value.includes("v=")) {
      let VID = value.split("v=")[1].slice(0, 11);
      setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${VID}` });
    } else {
      setUploadVideo({ ...uploadVideo, link: "" }); // Optional: Set to empty or handle other cases
    }
  }
  
  const handleAdd = async()=> {
    const{id,caption,url,link}=uploadVideo
    if(!id || !caption || !url || !link){
      alert("please fill the missing fields")
  
    }else{
      const result = await addVideoAPI(uploadVideo)
      if(result.status>=200 && result.status<300){
        alert("video uploaded")
        handleClose()
        setUploadVideoResponse(result.data)
      }else{
        alert(result.message)
      }
    }
  }
  return (
   <>


  <div className="d-flex">

  <h2>Upload Videos</h2>
  <button onClick={handleShow} className='btn'><i class="fa-solid fa-arrow-up-from-bracket fa-beat fs-3"></i></button>

  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
        <FloatingLabel
        controlId="floatingInput1"
        label="Video Id"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput2"
        label="Video Title"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput3"
        label="Image URL"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
      </FloatingLabel>
        <FloatingLabel
        controlId="floatingInput4"
        label="Video URL"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} />
      </FloatingLabel>
   
      </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>




  </div> 
   
   
   
   </>
  )
}

export default Add
