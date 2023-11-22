import React from 'react'

function ContactPage() {
  return (
    <div className='container'>
      <h2 className='pt-2'>Contact Page</h2>
      <p>This is contact page and you will be provided our contact here.</p>
      <form className="row g-3">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" value="Mark" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" value="Otto" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationDefault03" className="form-label">Select Country</label>
    <select className="form-select" id="validationDefault05" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-6">
    <label for="validationDefault04" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault04" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">State</label>
    <select className="form-select" id="validationDefault05" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault06" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault06" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault07" className="form-label">Phone No.</label>
    <input type="phone" className="form-control" id="validationDefault07" required/>
  </div>
  <div className="mb-3">
  <label for="messageTextArea" className="form-label">Write your message here.</label>
  <textarea className="form-control w-25" id="messageTextArea" rows="4"></textarea>
</div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
      </div>
  );
}

export default ContactPage;