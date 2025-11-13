import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <h2>Корзина пуста</h2>
          <p>Добавьте товары в корзину, чтобы увидеть их здесь.</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Корзина</h2>
      <Row>
        {cartItems.map(item => (
          <Col key={item.id} md={12} className="mb-3">
            <Card>
              <Card.Body>
                <Row className="align-items-center">
                  <Col md={2}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </Col>
                  <Col md={4}>
                    <h5>{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                  </Col>
                  <Col md={2}>
                    <p className="mb-0"><strong>{item.price} ₽</strong></p>
                  </Col>
                  <Col md={2}>
                    <div className="d-flex align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-3">{item.quantity}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Удалить
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col md={8}></Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <h4>Итого: {getTotalPrice()} ₽</h4>
              <Button variant="success" className="w-100 mb-2">
                Оформить заказ
              </Button>
              <Button variant="outline-danger" className="w-100" onClick={clearCart}>
                Очистить корзину
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
