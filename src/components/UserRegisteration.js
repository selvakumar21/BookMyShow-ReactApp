import Container  from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

function UserRegisteration() {
   
    function ClearUser() {
        setUser("");
        setMailAddress("");
        setPass("");
    }
    const [user,setUser] = useState("");
    const [mailaddress,setMailAddress] = useState("");
    const [pass,setPass] = useState("");
    // console.log(mailaddress,pass);

    async function UserPost() {
        // console.log(user, mailaddress, pass);
        const userDetails = {
            "username":user,
            "email":mailaddress,
            "password":pass
        }
        // console.log(userDetails);
        const response = await axios.post('http://localhost:5000/user-register', userDetails).then((data)=>
            {Swal.fire({
                title: `<strong>${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,
              })
            ClearUser();
            })
            .catch((err)=>
            {Swal.fire({
                title: `<strong>${err.message}</strong>`,
                icon: 'error',
                showCloseButton: true,
              }) 
              ClearUser();   
            });
        // console.log(response);    
    }
        
    return(
        <div>
           <Container style={{margin:"5rem"}}> 
           <Form>
           <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={mailaddress} onChange={(e) => setMailAddress(e.target.value)} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={UserPost}>
                Submit
            </Button>
            </Form>
           </Container>
      </div>
    );
  }
  
  export default UserRegisteration;