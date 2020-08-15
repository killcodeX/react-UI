import React,{useState} from 'react';
import { Col, Button } from "reactstrap";


export default function UpContent() {

    const [add, setAdd] = useState(4);

    return (
        <React.Fragment>
            <Col lg={{ size: 6, offset: 0 }} className="mb-4">
                <div className="card">
                    <div className="card-body card-content-up">
                        <div className='left-side-contents'>
                            <p className='banner'>Premium Bestseller</p>
                            <img src="assests/images/logo-approved.png" alt="logo-approved" />
                        </div>
                        <div className='right-side-contents'>
                            <div className='right-side-contents-up'>
                                <h5 className="company-name">
                                    <u>Continental-Contiecocontact 5</u>
                                </h5>
                            </div>
                            <div className='right-side-contents-down'>
                                <div className='contents-up'>
                                    <img className="aprroved-img" src="assests/images/logo-approved.png" alt="logo-approved" />
                                    <p className='pl-4'>205/55 R16 H<br/>SUV</p>
                                    <div className='stock'>
                                        <p className='pl-4'>Stock <span className='badge badge-pill badge-success'>✓</span></p>
                                        <p className='pt-1'>Price <strong>$ 340</strong></p>
                                    </div>
                                    <p className='pl-4'> Total <strong>$ 1360</strong></p>
                                </div>
                                <div className='contents-down'>
                                    <div className="valueButton">
                                        <Button className="cal-btn" onClick={() => setAdd(add + 1)}>
                                             +
                                        </Button>
                                        <span className="value">{add}</span>
                                        <Button className="cal-btn" onClick={() => setAdd(add - 1)}>
                                              -
                                        </Button>
                                    </div>
                                    <div className="cart">
                                        <Button className="button-cart">
                                             <i className="fas fa-shopping-cart"></i> Add to cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={{ size: 6, offset: 0 }} className="mb-4">
            <div className="card">
                    <div className="card-body card-content-up">
                        <div className='left-side-contents'>
                            <p className='banner'>Economy Bestseller</p>
                            <img src="assests/images/logo-approved.png" alt="logo-approved" />
                        </div>
                        <div className='right-side-contents'>
                            <div className='right-side-contents-up'>
                                <h5 className="company-name">
                                    <u>Continental-Contiecocontact 5</u>
                                </h5>
                            </div>
                            <div className='right-side-contents-down'>
                                <div className='contents-up'>
                                    <img className="aprroved-img" src="assests/images/logo-approved.png" alt="logo-approved" />
                                    <p className='pl-4'>205/55 R16 H<br/>SUV</p>
                                    <div className='stock'>
                                        <p className='pl-4'>Stock <span className='badge badge-pill badge-success'>✓</span></p>
                                        <p className='pt-1'>Price <strong>$ 340</strong></p>
                                    </div>
                                    <p className='pl-4'> Total <strong>$ 1360</strong></p>
                                </div>
                                <div className='contents-down'>
                                    <div className="valueButton">
                                        <Button className="cal-btn" onClick={() => setAdd(add + 1)}>
                                             +
                                        </Button>
                                        <span className="value">{add}</span>
                                        <Button className="cal-btn" onClick={() => setAdd(add - 1)}>
                                              -
                                        </Button>
                                    </div>
                                    <div className="cart">
                                        <Button className="button-cart">
                                             <i className="fas fa-shopping-cart"></i> Add to cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </React.Fragment>
    )
}
