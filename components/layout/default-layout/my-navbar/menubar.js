import Link from 'next/link'
import styles from './menubar.module.scss'

// 說明:
// 選單客製化以靜態方式、移至config檔案或寫死(hard code)來產生是常見
// 選單項目定義在這裡，下面元件程式碼會自動產生對應的dom
// id是作key用的，不重覆即可
// 有下拉的選單需要加一個children的陣列屬性
const menuItems = [
  {
    id: 1,
    label: '商品列表',
    href: '/member',
    children: [
      { id: 32, label: '筆記型電腦', href: '/notebook-shop' },
      { id: 33, label: '桌上型電腦', href: '/member/register' },
      { id: 34, label: '耳機', href: '/member/forget-password' },
      { id: 35, label: '平板', href: '/member/forget-password' },
      { id: 36, label: '手機', href: '/member/forget-password' },
      { id: 37, label: '遊戲機', href: '/member/forget-password' },
      { id: 38, label: '顯示器', href: '/member/forget-password' },
    ],
  },
  {
    id: 2,
    label: 'Shop Detail',
    href: '/detail',
  },
  // {
  //   id: 3,
  //   label: '老師版會員',
  //   href: '/member',
  //   children: [
  //     { id: 32, label: '登入', href: '/member/login' },
  //     { id: 33, label: '註冊', href: '/member/register' },
  //     { id: 34, label: '忘記密碼', href: '/member/forget-password' },
  //   ],
  // },
  // {
  //   id: 4,
  //   label: '老師版商品',
  //   href: '/product',
  //   children: [
  //     { id: 41, label: '列表', href: '/product/list' },
  //     { id: 42, label: '詳細', href: '/product/01' },
  //     { id: 43, label: '購物車', href: '/cart' },
  //   ],
  // },
]

export default function MainMenu({ currentRoute = '/' }) {
  return (
    <>
      <ul className="navbar-nav flex-grow-1 ps-lg-5 ps-xs-0 mx-auto bgclor">
        {menuItems.map((v) => {
          // 用children判斷是否有下拉選單
          if (!v.children) {
            return (
              <li className="nav-item" key={v.id}>
                <Link
                  className={`nav-link ${
                    currentRoute === v.href
                      ? 'active ' + styles['custom-active']
                      : ''
                  }`}
                  aria-current="page"
                  href={v.href}
                >
                  {v.label}
                </Link>
              </li>
            )
          }

          // 以下為有dropmenu(下拉選單)的選單項目的jsx
          return (
            <li
              className={`nav-item dropdown ${styles['dropdown']}`}
              key={v.id}
            >
              <Link
                // 尋找是否有符合 currentRoute 的 children href
                className={`nav-link dropdown-toggle ${
                  v.children.find((v) => v.href === currentRoute)
                    ? 'active ' + styles['custom-active']
                    : ''
                }`}
                href={v.href}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {v.label}
              </Link>
              <ul
                className={`dropdown-menu ${styles['slideIn']} ${styles['dropdown-menu']}`}
              >
                {v.children.map((v2) => {
                  return (
                    <li key={v2.id}>
                      <Link
                        className={`dropdown-item ${
                          currentRoute === v2.href ? 'active' : ''
                        }`}
                        href={v2.href}
                      >
                        {v2.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      
      {/* <i
        className="fa fa-shopping-bag fa-2x ms-2 me-2"
        style={{ color: 'white' }}
      />
      <a href="./member.html">
        <i className="fa-solid fa-user fa-2x me-2" style={{ color: 'white' }} />
      </a> */}

      <style global jsx>
        {`
          .bgclor {
            background: linear-gradient(to bottom, #f6402e 10%, #ff6433 100%);
          }
          body {
            background: #f5f5f5;
          }
        `}
      </style>
    </>
  )
}
