import React, { useState } from "react";
import { Col, Button } from "reactstrap";

export default function HomeBox(props) {
  const [add, setAdd] = useState(props.value);

  // const addition = () =>{
  //     add = add + 1;
  //     setAdd(add)
  // }

  const subs = () => {
    add = add - 1;
    setAdd(add);
  };

  return (
    <React.Fragment>
      <Col lg={{ size: 12, offset: 0 }} className="mb-4">
        <div className="card">
          <div className="card-body card-content">
            <div className="company-name-container">
              <h5 className="company-name">
                <u>{props.name}</u>
              </h5>
            </div>
            <img src="assests/images/logo-approved.png" alt="logo-approved" />
            <p>
              {props.type}
              <br />
              SUV
            </p>
            <div className='stock'>
                <p>Stock <span 
                className={"badge badge-pill" + (props.stock == '✓' ? 'badge badge-pill badge-success': props.stock == '!'? 'badge badge-pill badge-warning' : 'badge badge-pill badge-danger')}
                >{props.stock}</span></p>
                <span><strong>{props.stock == '✓' ? '': props.stock == '!' ? '8 Tires left': 'Back 1 Week'}</strong></span>
            </div>
            <p>Price <strong>{props.price}</strong></p>
            <div className="valueButton">
              <Button className="cal-btn" onClick={() => setAdd(add + 1)}>
                +
              </Button>
              <span className="value">{add}</span>
              <Button className="cal-btn" onClick={() => setAdd(add - 1)}>
                -
              </Button>
            </div>
            <p>
              Total <strong>{props.total}</strong>
            </p>
            <div className="cart">
              <Button className={props.button == 'Notify Me!'? `button-cart2`: `button-cart`}>
                <i className={props.icon}></i> {props.button}
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
}
