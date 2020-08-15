import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import HomeBox from "./home-box";

export default function Home() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Continental PremiumContact 6",
      type: "195/55 R15 85V",
      stock: "✓",
      price: "$ 340",
      total: "$ 1,360",
      icon: "fas fa-shopping-cart",
      button: "Add to cart",
      value: 4,
    },
    {
      id: 2,
      name: "Continental PremiumContact 6",
      type: "195/55 R15 85V",
      stock: "!",
      price: "$ 340",
      total: " $ 1,360",
      icon: "fas fa-shopping-cart",
      button: "Add to cart",
      value: 4,
    },
    {
      id: 3,
      name: "Continental PremiumContact 6",
      type: "195/55 R15 85V",
      stock: "X",
      price: "$ 340",
      total: " $ 1,360",
      icon: "fas fa-bell",
      button: "Notify Me!",
      value: 4,
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <React.Fragment>
      <section className="section bg-light home-half" id="home">
        <Container>
          <h3><strong>Recommended Products</strong></h3>
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
          <Row></Row>
          <Row>
            {product.map((prod) => (
              <HomeBox
                key={prod.id}
                name={prod.name}
                type={prod.type}
                stock={prod.stock}
                price={prod.price}
                total={prod.total}
                icon={prod.icon}
                button={prod.button}
                value={prod.value}
              />
            ))}
            <Col lg={{ size: 12, offset: 0 }}>
                <button className='load'>Load More Results</button>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
