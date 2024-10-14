import React, { useState } from 'react';
import './FormPage.css';
import axios from 'axios';

function FormPage() {
  const [sno, setsno] = useState("");
  const [dob, setdob] = useState('');
  const [admissionNo, setadmissionNo] = useState('');
  const [aadhar, setaadhar] = useState('');
  const [name, setname] = useState('');
  const [fathername, setfathername] = useState('');
  const [mothername, setmothername] = useState('');
  const [category, setcategory] = useState('');
  const [add1, setadd1] = useState('');
  const [add2, setadd2] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [pincode, setpincode] = useState('');
  const [phone, setphone] = useState('');
  const current_date = new Date();
  const dateWithTimestamp = {
      Date:current_date.toISOString().split('T')[0],
    };
  const handlesubmit = (e) => {
    e.preventDefault();
    const data = {
      Serial_No: sno,
      Date_Of_Birth: dob,
      Admission_No: admissionNo,
      Aadhaar_No: aadhar,
      Name : name,
      Father_Name: fathername,
      Mother_Name: mothername,
      Category: category,
      Address_1: add1,
      Address_2: add2,
      City: city,
      State: state,
      Pincode: pincode,
      Phone_No: phone,
      Date_Of_Admission : dateWithTimestamp
    };

    axios.post('https://sheetdb.io/api/v1/hj8b2sibg7ros', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response);
      alert("Data has been submitted successfully");
      setsno('');
      setdob('');
      setadmissionNo('');
      setaadhar('');
      setname('');
      setfathername('');
      setmothername('');
      setcategory('');
      setadd1('');
      setadd2('');
      setcity('');
      setstate('');
      setpincode('');
      setphone('');
    })
    .catch((error) => {
      console.error("There is an error in submitting the form!", error.message);
      alert("There was an error submitting the form. Please check the console for more details.");
    });
  };

  return (
    <div className="container">
      <h1>Student Details</h1>
      <form className="row g-3" onSubmit={handlesubmit}>
        <div className="row g-2" id="form1">
          <div className="col" id="Dob">
            <label className="form-label">Date Of Birth</label>
            <input type="date" className="form-control"  aria-label="Dob" onChange={(e) => setdob(e.target.value)} value={dob}  required/>
          </div>
          <div className="row g-1" id="info1">
            <div className="col" id="serial_number">
            <label className="form-label">Serial No</label>
              <input className="form-control" type="number"  onChange={(e) => setsno(e.target.value)} value={sno} />
            </div>
            <div className="col" id="Aadhaarnum">
            <label className="form-label">Aadhaar No</label>
              <input type="text" className="form-control"  onChange={(e) => setaadhar(e.target.value)} value={aadhar} />
            </div>
            <div className="col" id="First_name">
            <label className="form-label">Name Of Student</label>
              <input type="text" className="form-control"  aria-label="First name" onChange={(e) => setname(e.target.value)} value={name}  required/>
            </div>
          </div>
        </div>
        <div className="row g-1" id="info2">
          <div className="col" id="FatherName">
          <label className="form-label">Father Name</label>
            <input className="form-control" type="text"  onChange={(e) => setfathername(e.target.value)} value={fathername} required/>
          </div>
          <div className="col" id="MotherName">
          <label className="form-label">Mother Name</label>
            <input type="text" className="form-control"  onChange={(e) => setmothername(e.target.value)} value={mothername} required/>
          </div>
          <div className="col" id="category">
          <label className="form-label">Category</label>
            <select className="form-select" id="inlineFormSelectPref" onChange={(e) => setcategory(e.target.value)} value={category} required>
              <option value="" selected>Other</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="Ration Card">Ration Card</option>
              <option value="Income Certificate">Income Certificate</option>
            </select>
          </div>
          <div className="col" id="AdNum">
          <label className="form-label">Admission No</label>
            <input type="text" className="form-control"  aria-label="AdNum" onChange={(e) => setadmissionNo(e.target.value)} value={admissionNo} />
          </div>
        </div>
        <div className="row g-1" id="info3">
          <div className="col" id="Add1">
          <label className="form-label">Address 1</label>
            <input type="text" className="form-control" id="inputAddress"  onChange={(e) => setadd1(e.target.value)} value={add1}  required/>
          </div>
          <div className="col" id="Add2">
          <label className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2"  onChange={(e) => setadd2(e.target.value)} value={add2} />
          </div>
        </div>
        <div className="row g-1" id="info4">
          <div className="col" id="City">
          <label className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity"  onChange={(e) => setcity(e.target.value)} value={city} />
          </div>
          <div className="col" id="State">
          <label className="form-label">State</label>
            <input type="text" className="form-control" id="inputState"  onChange={(e) => setstate(e.target.value)} value={state} />
          </div>
          <div className="col" id="Zip">
          <label className="form-label">Pincode</label>
            <input type="text" className="form-control" id="inputZip"  onChange={(e) => setpincode(e.target.value)} value={pincode} />
          </div>
          <div className="col" id="Ph">
          <label className="form-label">Phone Number</label>
            <input type="text" className="form-control"  id="PhNum" onChange={(e) => setphone(e.target.value)} value={phone}  />
          </div>
        </div>
        <div className="col-12" id="submit">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
