import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import { Link } from 'react-router-dom'
import { LinkContainer} from 'react-router-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { Row, Col, ListGroup, Image, Form, Button, Card ,Nav} from 'react-bootstrap'
export default function CartScreen ({ match, location, history }) {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1
  console.log(qty)
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id))
  }


  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
}
  return (
    <div>
      <Row>
        <Col md={8}>
          <h5 m-3> Shopping Cart</h5>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is Empty <lInk to='/'>GO Back</lInk>
            </Message>
          ) : (
            <ListGroup>
              {cartItems.map(items => (
                <ListGroup.Item>
                  <Row>
                    <Col md={2}>
                      <Image src={items.image} fluid />
                    </Col>

                    <Col md={2}>
                      <Link to={`/products/${items.product}`}>
                        {items.name}
                      </Link>
                    </Col>

                    <Col md={2}>${items.price}</Col>

                    <Col md={3}>
                      <Form.Control
                        as='select'
                        value={items.qty}
                        onChange={e =>
                          dispatch(
                            addToCart(items.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(items.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>

                    <Col md={1}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(items.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2 className="M-2">
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                 Proceed To Checkout
              
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
