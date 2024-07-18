import React from 'react'
import { FaStar, FaShoppingBag } from 'react-icons/fa'
import { TiMinus } from 'react-icons/ti'
import { IoMdAdd } from 'react-icons/io'

export default function Detail() {
  return (
    <>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary" role="status" />
      </div> */}
      {/* Spinner End */}

      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Shop Detail</h1>
      </div>
      {/* Single Page Header end */}

      {/* Single Product Start */}
      <div className="container-fluid py-5 mt-5">
        <div className="container py-5">
          <div className="row g-4 mb-5">
            <div className="col-lg-8 col-xl-9">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="border rounded">
                    <a href="#">
                      <img
                        src="/images/product/food/single-item.jpg"
                        className="img-fluid rounded"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h4 className="fw-bold mb-3">Brocoli</h4>
                  <p className="mb-3">Category: Vegetables</p>
                  <h5 className="fw-bold mb-3">3,35 $</h5>
                  <div className="d-flex mb-4">
                    <FaStar />
                    <FaStar />
                    {/* <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" />
                    <i className="fa fa-star text-secondary" /> */}
                    <i className="fa fa-star" />
                  </div>
                  <>
                    <p className="mb-4">單品介紹</p>
                    <p className="mb-4">
                      椰菜花，十字花科蕓薹屬的物種[1]，是一種常見的蔬菜，是甘藍的變種[2]，源於地中海東部[3]，
                      可能是賽普勒斯，再傳入義大利[4]。花椰菜的頭部為白色或綠色花序，與青花菜的頭部類似。花椰菜富含維生素B群、C，這些成分屬於水溶性，
                      易受熱溶出而流失，所以花椰菜不宜高溫烹調，也不適合水煮。
                    </p>
                    <div
                      className="input-group quantity mb-5"
                      style={{ width: 100 }}
                    >
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                          <TiMinus />
                        </button>
                      </div>
                      <input
                        type="text"
                        className="form-control form-control-sm text-center border-0"
                        defaultValue={1}
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                          <IoMdAdd />
                        </button>
                      </div>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-5 py-2 mb-4 text-primary"
                      >
                        <FaShoppingBag />
                        加入購物車
                      </a>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-5 py-2 mb-4 text-primary"
                      >
                        <FaShoppingBag />
                        直接購買
                      </a>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single Product End */}

      {/* 買家評論 Start */}
      <div className="testimonial-item img-border-radius bg-light rounded">
        <div className="container py-5">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 border-bottom border-secondary"></div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src="/images/features/testimonial-1.jpg"
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">Client Name</h4>
                <div className="d-flex pe-5">
                  <FaStar />
                  <FaStar />
                  {/* <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" /> */}
                </div>
                <p className="mt-5">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 border-bottom border-secondary" />
        </div>
      </div>

      <div className="testimonial-item img-border-radius bg-light rounded">
        <div className="container py-5">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 border-bottom border-secondary"></div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src="/images/features/testimonial-1.jpg"
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">Client Name</h4>
                <div className="d-flex pe-5">
                  <FaStar />
                  <FaStar />
                  {/* <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" /> */}
                </div>
                <p className="mt-5">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 border-bottom border-secondary" />
        </div>
      </div>

      <div className="testimonial-item img-border-radius bg-light rounded">
        <div className="container py-5">
          <div className="position-relative">
            <i
              className="fa fa-quote-right fa-2x text-secondary position-absolute"
              style={{ bottom: 30, right: 0 }}
            />
            <div className="mb-4 border-bottom border-secondary"></div>
            <div className="d-flex align-items-center flex-nowrap">
              <div className="bg-secondary rounded">
                <img
                  src="/images/features/testimonial-1.jpg"
                  className="img-fluid rounded"
                  style={{ width: 100, height: 100 }}
                  alt=""
                />
              </div>
              <div className="ms-4 d-block">
                <h4 className="text-dark">Client Name</h4>
                <div className="d-flex pe-5">
                  <FaStar />
                  <FaStar />
                  {/* <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" />
                  <i className="fas fa-star text-primary" /> */}
                </div>
                <p className="mt-5">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
          <div className="mb-4 border-bottom border-secondary" />
        </div>
      </div>
      {/* 買家評論 End */}

      {/* 購買其他商品 Start */}
      <div className="container-fluid col-lg-7 row g-4 py-5 mx-auto">
        <h1 className="fw-bold mb-0">購買其他商品</h1>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-4">
          <div className="rounded position-relative fruite-item">
            <div className="fruite-img">
              <img
                src="images/product/food/fruite-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-secondary px-3 py-1 rounded position-absolute"
              style={{ top: 10, left: 10 }}
            >
              Fruits
            </div>
            <div className="p-4 border border-secondary border-top-0 rounded-bottom">
              <h4>Grapes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary" /> Add to
                  cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 購買其他商品 End */}

      <style global jsx>
        {`
          .page-header {
            position: relative;
            background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
              url(../images/product/food/cart-page-header-img.jpg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </>
  )
}
