import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import Rating from './rating'
import {Link} from 'react-router-dom'
export default function Product ({ products }) {
  return (
    <Card className='my-3 p-3'>
      <Link to={`products/${products._id}`}>
        <CardImg src={products.image}></CardImg>
      </Link>

      <Card.Body>
        <Link to={`products/${products._id}`}>
          <Card.Title>
            <strong>{products.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text>
          <div className=' my-3'>
            <Rating
              value={products.rating}
              text={`${products.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
        </Card.Text>

        <Card.Text>${products.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
