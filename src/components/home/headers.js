import React, { useState } from "react";
import { Col } from "reactstrap";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

export default function Headers() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <React.Fragment>
            <Col lg={{ size: 12, offset: 0 }} className="mb-4 mt-4 headers">
            <p className="text-muted">Selected Filters:</p>
            <div className='dropdown'>
            <p className="text-muted pr-3"> Sort by : </p>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>Popularity</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Most Bought</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>New Product</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </div>
          </Col>
        </React.Fragment>
    )
}
