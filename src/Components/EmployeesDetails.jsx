import React, { useState } from "react";
import { Users } from "../EmplyoyeesData.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const EmployeesDetails = () => {
  const [Data, setData] = useState(Users);
  // console.log(Data)
  const filterMethod = (job) => {
    setData(Data.filter((data) => data.job == job));
  };

  return (
    <>
    <div className='d-flex justify-content-between m-5'>
      <button onClick={() => setData(Users)} className='btn btn-warning'>Reset Filters</button>
      <button onClick={()=>filterMethod("Web Developer")} className='btn btn-primary'>Web Developers</button>
      <button onClick={()=>filterMethod("App Developer")} className='btn btn-danger'>App Developers</button>
      <button onClick={()=>filterMethod("Data analyst")} className='btn btn-info'>Data Analytics</button>
    </div>
    <div className="container">
      <div className="row">
        <h1 className="text-center">Employees Data</h1>
      {Data.map((items) => {
        return(
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 m-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img style={{width:'30%',height:'30%'}} variant="top" src={items.imgUrl} />
            <Card.Body>
              <Card.Title>{items.Name}</Card.Title>
              <Card.Text>
                {items.job}
              </Card.Text>
              <Card.Text>
                {items.salary}
              </Card.Text>
              <Button variant="primary">View Profile</Button>
            </Card.Body>
          </Card>
          </div>
        );
      })}
      </div>
    </div>
    </>
  );
};

export default EmployeesDetails;
