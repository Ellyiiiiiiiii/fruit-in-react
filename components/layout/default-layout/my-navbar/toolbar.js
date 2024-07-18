import Image from 'next/image'
import Link from 'next/link'
import styles from './toolbar.module.scss'

export default function Toolbar({ handleShow }) {
  return (
    <>
      <div className="container-fluid sticky-top p-0">
        <nav className="navbar navbar-light  navbar-expand-xl bgclor">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-primary display-6">Fruitables</h1>
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  商品列表
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a href="/notebook-shop.html" className="dropdown-item">
                    筆記型電腦
                  </a>
                  <a href="/PC-shop.html" className="dropdown-item">
                    桌上型電腦
                  </a>
                  <a href="/earphone-shop.html" className="dropdown-item">
                    耳機
                  </a>
                  <a href="/tablet-shop.html" className="dropdown-item">
                    平板電腦
                  </a>
                  <a href="/cellphone-shop.html" className="dropdown-item">
                    手機
                  </a>
                  <a href="/videogame-shop.html" className="dropdown-item">
                    遊戲機
                  </a>
                  <a href="moniter-shop.html" className="dropdown-item">
                    顯示器
                  </a>
                </div>
              </div>
              <a href="shop-detail.html" className="nav-item nav-link">
                Shop Detail
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a href="cart.html" className="dropdown-item">
                    Cart
                  </a>
                  <a href="chackout.html" className="dropdown-item">
                    Chackout
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
            </div>
            <form className="d-flex" role="search ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-danger"
                type="submit"
                style={{ color: 'FF5533' }}
              >
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: 'white' }}
                />
              </button>
            </form>
            <i
              className="fa fa-shopping-bag fa-2x ms-2 me-2"
              style={{ color: 'white' }}
            />
            <a href="./member.html">
              <i
                className="fa-solid fa-user fa-2x me-2"
                style={{ color: 'white' }}
              />
            </a>
          </div>
        </nav>
      </div>

      <style global jsx>
        {`
          a {
            text-decoration: none;
          }
          .bgclor {
            background: linear-gradient(to bottom, #f6402e 10%, #ff6433 100%);
          }
          body {
            background: #f5f5f5;
          }
          /* 鼠标悬停时的样式 */
          .media-body:hover {
            background-color: #f0f0f0; /* 改变背景颜色 */
            border: 1px solid #ccc; /* 添加边框 */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
          }
        `}
      </style>
    </>
  )
}
