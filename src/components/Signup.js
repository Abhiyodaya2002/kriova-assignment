import React from 'react'

export default function Signup() {
  return (
    <div className='container mt-3' style={{"font-size":"18px"}}>
      <form action='/home'>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Email Address</label>
  <input type="email" required class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput3" class="form-label">Password</label>
  <input type="text" required class="form-control" id="exampleFormControlInput3" placeholder="Enter a Password" />
</div>
<div>
<label for="exampleFormControlInput4" class="form-label">Confirm Password</label>
  <input type="text" required class="form-control" id="exampleFormControlInput4" placeholder="Confirm your Password" />
</div>
<button className='btn btn-success my-3' >Signup</button>
</form>
    </div>
  )
}
