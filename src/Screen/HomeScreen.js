import React, { useState, useEffect } from 'react'
import { Container, Row, Col,Carousel } from 'react-bootstrap'
import Product from '../products'
import Products from '../components/Product'
import axios from 'axios'
import { productList } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/loader'
import Message from '../components/message'
import Paginate from '../components/paginator'
export default function HomeScreen ({ history }) {
  const dispatch = useDispatch()
  const productlist = useSelector(state => state.productList)
  const { loading, error, products, pages, page } = productlist

  let keyword = history.location.search
  useEffect(() => {
    dispatch(productList(keyword))
  }, [dispatch])

  return (
    <div>
      <h1>Latest Products</h1>
                       
      {/* <Carousel pause='hover' className='bg-dark'>
                    {products.map(product => (
                        <Carousel.Item key={product._id}>
                            
                                <Image src={product.image} alt={product.name} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} (${product.price})</h4>
                                </Carousel.Caption>
                            
                        </Carousel.Item>
                    ))}
                </Carousel> */}
           


      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map(item => (
              <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                <Products products={item} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} Keyword={keyword} />
        </div>
      )}
    </div>
  )
}
