import React, { useState, useEffect } from 'react';

import { Breadcrumbs, Footer, Nav, SideBanner } from '../Common';

import './styles/product-client.css';
import { FillterByPrice, handleLoadingPage } from '../../Common';

const SmartPhone = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'ShopTECH | Điện thoại - Sale ngập tràn';
    const fetchAPIs = () => {
      fetch('https://server-shoptech.onrender.com/api/products')
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    };
    fetchAPIs();
  }, []);

  useEffect(() => {
    // show tất cả những điện thoại di dộng
    products.map((product, index) => {
      const infoProductFeaturedSmartphone = document.querySelectorAll(
        '.product-client__item',
      )[index];
      if (product.type === 'Điện thoại') {
        infoProductFeaturedSmartphone.style.display = 'block';
      }
    });
  }, [products]);

  window.onload = () => {
    handleChangeBanner();
  };

  const handleChangeBanner = () => {
    const arrayBanner = [
      'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-banner.png',
      'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-banner2.png',
      'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-banner3.png',
      'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-banner4.png',
    ];
    var index = 0;
    setInterval(function () {
      if (index === arrayBanner.length) {
        index = 0;
      }
      document.querySelector('.product-client__event-primary').src =
        arrayBanner[index];
      index++;
    }, 3000);
  };

  const arrayPromote = [
    'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-list-item4.png',
    'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-list-item3.png',
    'https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-list-item5.png',
  ];
  var indexPromote = 0;
  const handleNextPromote = () => {
    if (indexPromote >= arrayPromote.length - 1) {
      indexPromote = 0;
    }
    indexPromote++;
    document.querySelector(
      '.product-client__event-col-right-item',
    ).style.animation = 'slideInLeft ease .3s';
    document.querySelector('.product-client__event-col-right-item').src =
      arrayPromote[indexPromote];
  };

  const handlePrevPromote = (event) => {
    if (indexPromote <= 0) {
      indexPromote = arrayPromote.length;
    }
    indexPromote--;
    document.querySelector(
      '.product-client__event-col-right-item',
    ).style.animation = 'slideInLeft ease .3s';
    document.querySelector('.product-client__event-col-right-item').src =
      arrayPromote[indexPromote];
  };

  const handleFormatStarProduct = (starOfProduct) => {
    if (starOfProduct < 1) {
      return `☆☆☆☆☆`;
    } else if (starOfProduct < 2) {
      return `★☆☆☆☆`;
    } else if (starOfProduct < 3) {
      return `★★☆☆☆`;
    } else if (starOfProduct < 4) {
      return `★★★☆☆`;
    } else if (starOfProduct < 5) {
      return `★★★★☆`;
    } else {
      return `★★★★★`;
    }
  };

  const handleFilterChange = (minPrice, maxPrice) => {
    const filteredProducts = products.filter(
      (product) =>
        Number(product.price) >= minPrice &&
        Number(product.price) <= maxPrice &&
        product.enType === 'smartphone',
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <Nav />
      <Breadcrumbs />
      <div
        className="container"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          marginTop: '60px',
          padding: '50px 0 40px',
        }}
      >
        <div className="grid wide">
          <SideBanner />
          <div className="product-client__event">
            <img
              src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-banner.png"
              alt=""
              className="product-client__event-primary"
            ></img>

            <div className="product-client__event-list">
              <div className="product-client__event-col-left">
                <img
                  src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-list-item.png"
                  className="product-client__event-col-left-item"
                ></img>
                <img
                  src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-list-item2.png"
                  className="product-client__event-col-left-item"
                ></img>
              </div>

              <div className="product-client__event-col-right">
                <button
                  className="product-client__event-btn--prev"
                  onClick={handlePrevPromote}
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
                <img
                  src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-list-item3.png"
                  className="product-client__event-col-right-item"
                ></img>
                <button
                  className="product-client__event-btn--next"
                  onClick={handleNextPromote}
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <img
              className="product-client__event-gif"
              src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/event-item-gif.gif"
              alt="ảnh gif"
            ></img>
          </div>

          <label className="product-client__title-brand">
          TOP BRAND
          </label>
          <div className="product-brand-list">
            <div className="product-client__brand">
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-iphone.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-samsung.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-xiaomi.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-oppo.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-realme.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-nokia.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-masstel.png"
              ></img>
              <img
                className="product-client__brand-item"
                src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/logo-vivo.png"
              ></img>
            </div>
          </div>

          <label className="product-client__title-brand">Filter products</label>
          <FillterByPrice
            minPrice={0}
            maxPrice={100000000}
            onFilterChange={handleFilterChange}
          />
          <ul className="product-client__list">
            {products.map((product, index) => (
              <li
                className="product-client__item"
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  handleLoadingPage(1);
                  window.setTimeout(() => {
                    window.location.href = `/product/${product.enType}/${product.name}`;
                  }, 1000);
                }}
              >
                <img
                  src={product.imageLink}
                  className="product-client__item-img"
                ></img>
                <label className="product-client__item-label">
                  {product.name}
                </label>
                <img
                  className="product-client__item-hot-icon"
                  src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/icon-hot.gif"
                ></img>
                <img
                  className="product-client__item-icon"
                  src="https://server-shoptech.onrender.com/public/product-img/smartphone-img/icon-18-month.png"
                ></img>
                <label className="product-client__item-price">
                  {Number(product.price).toLocaleString()} ₫
                </label>
                <span className="product-client__item-percent">
                  {(Number(product.price) * 1.065).toLocaleString()}đ
                </span>
                <label className="product-client__item-vote">
                  <span className="product-client__item-star-icon">
                    {handleFormatStarProduct(product.star)}{' '}
                  </span>{' '}
                  ({product.voter || 0} đánh giá)
                </label>
                <div className="product-client__item-tag">
                  Giảm {product.percent}%
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
      <p className="app-copyright">
      ©️ Copyright belongs to Clinic Online - 2023 <br />
      Address: 391 Nam Ky Khoi Nghia, Vo Thi Sau ward. District 3, Ho Chi Minh City.
      </p>
    </>
  );
};

export default SmartPhone;
