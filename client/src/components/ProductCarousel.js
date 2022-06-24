import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { listTopProducts } from "../actions/productActions";
import banner1 from "../banner1.jpeg";
import banner2 from "../banner2.jpg";
import banner3 from "../banner3.png";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel variant="dark" pause="hover" className="bg-dark">
      {/* {products.map((product) => ( */}
      <Carousel.Item key="62b5fcd1481f55002354cc83">
        <Link to={`/product/62b5fcd1481f55002354cc83`}>
          <Image src={banner1} alt="Iphone" fluid />
          <Carousel.Caption className="carousel-caption">
            {/* <h2>
                {product.name} (₹{product.price})
              </h2> */}
            {/* <h2>Range of Apple products</h2> */}
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item key="62b5e80be6823900238c2b9c">
        <Link to={`/product/62b5e80be6823900238c2b9c`}>
          <Image src={banner2} alt="Watch" fluid />
          <Carousel.Caption className="carousel-caption">
            {/* <h2>
                {product.name} (₹{product.price})
              </h2> */}
            {/* <h2>Range of Apple products</h2> */}
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item key="60fe946aa3a1914014c29392">
        <Link to={`/product/60fe946aa3a1914014c29392`}>
          <Image src={banner3} alt="Airpods" fluid />
          <Carousel.Caption className="carousel-caption">
            {/* <h2>
                {product.name} (₹{product.price})
              </h2> */}
            {/* <h2>Range of Apple products</h2> */}
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      {/* ))} */}
    </Carousel>
  );
};

export default ProductCarousel;
