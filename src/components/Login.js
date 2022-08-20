
import React from 'react';


export default function Login() {
  
  return (
    <div>
        <form action='/home' >
        <div className='container ' style={{"margin-top": "20px","font-size":"20px"}}>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput2" className="form-label">Password</label>
  <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter your Password"required/>
</div>
<div>
</div>
    <button type='submit' className='btn btn-primary' >Submit</button>
    <a href='/' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{margin:"25px",hover:"color"}}>Forgot Password</a>
    <a href='/signup'>Sign Up</a>
</div>
</form>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Email Address</label>
  <input type="email" required class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Send Password</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
