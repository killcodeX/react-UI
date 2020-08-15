import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import HomeBox from "./home-box";
import UpContent from './upContent';
import Headers from './headers';

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


  return (
    <React.Fragment>
      <section className="section bg-light home-half" id="home">
        <Container>
          <h3><strong>Recommended Products</strong></h3>
            <Headers/>
          <Row>
            <UpContent/>
          </Row>
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
