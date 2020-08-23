import React, { useState } from "react";
import { Col, Button } from "reactstrap";


export default function HomeBox(props) {
  const [add, setAdd] = useState(props.value);

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
            <img className='image-appr' src="assests/images/logo-approved.png" alt="logo-approved" />
            <p className='suv'>
              {props.type}
              <br />
              SUV
            </p>
            <div className='stock2'>
                <p>Stock <span 
                className={"badge badge-pill" + (props.stock == '✓' ? 'badge badge-pill badge-success': props.stock == '!'? 'badge badge-pill badge-warning' : 'badge badge-pill badge-danger')}
                >{props.stock}</span></p>
                <span className={props.stock == 'X' ? 'red': ''}><strong>{props.stock == '✓' ? '': props.stock == '!' ? '8 Tires left': 'Back 1 Week'}</strong></span>
            </div>
            <p className='price'>Price <strong>{props.price}</strong></p>
            <div className="valueButton2">
              <Button className="cal-btn2" onClick={() => setAdd(add + 1)}>
                +
              </Button>
              <span className="value">{add}</span>
              <Button className="cal-btn2" onClick={() => add>1 ? setAdd(add - 1) : null}>
                -
              </Button>
            </div>
            <p className='total'>
              Total <strong>{props.total}</strong>
            </p>
            <div className="cart">
              <Button className={props.button == 'Notify Me!'? `button-cart2`: `button-cart3`}>
                <i className={props.icon}></i> {props.button}
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </React.Fragment>
  );
}
