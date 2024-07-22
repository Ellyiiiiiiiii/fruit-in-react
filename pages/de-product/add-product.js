import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaUser, FaDollarSign } from 'react-icons/fa6'
import { FaShoppingBag } from 'react-icons/fa'
import { GiShop } from 'react-icons/gi'

export default function AddProduct() {
  // 記錄選擇的圖片檔案，特殊物件初始值用null
  // const [selectedImg, setSelectedImg] = useState(null)
  // 預覽圖片網址(呼叫URL.createObjectURL 後產生的暫時網址
  // const [previewURL, setPreviewURL] = useState('')

  // 呈現伺服器的訊息
  const [message, setMessage] = useState('')

  const [product, setProduct] = useState({
    name: '',
    category: '',
    brand: '',
    info: '',
    price: '',
    size: '',
    tag: '',
  })

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0]
  //   console.log(file)
  //   // 需要判斷使用者是否在點開選擇圖片時，按取消按鈕，會返回undefined值
  //   if (file) {
  //     setSelectedImg(file)
  //     // 產生預覽網址
  //     setPreviewURL(URL.createObjectURL(file))
  //   } else {
  //     setSelectedImg(null)
  //     setPreviewURL('')
  //   }
  // }

  // 輸入用
  const handleFieldChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const postInForm = async (e) => {
    e.preventDefault()
    // 傳圖功能
    // const fd = new FormData()
    // 注意檔案設定到狀態後是陣列，photo檔案是索引6
    // fd.append('photo', selectedImg)

    try {
      const url = 'http://localhost:3005/api/de-products/upload'
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      const resData = await res.json()
      setMessage(JSON.stringify(resData))
      // console.log(resData)

      alert('送到伺服器去')
    } catch (e) {
      console.error(e)
    }

    // fetch('http://localhost:3005/api/de-products/upload-photo', {
    //   method: 'POST',
    //   body: fd,
    // })
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log(data)
    //   })
  }

  return (
    <>
      <div className="container-fluid full-height-container ">
        <div className="row ">
          {/* Sidebar */}
          <div className="col-md-3 sidebar full-height-container ">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="../member">
                  <FaUser />
                  個人資料
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../member-cou">
                  <FaDollarSign />
                  商店優惠券
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../member-or">
                  <FaShoppingBag />
                  訂單
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./de-product/add-product">
                  <GiShop />
                  上架商品
                </a>
              </li>
            </ul>
          </div>

          {/* Main content */}
          <div className="col-md-9 main-content full-height-container">
            <div className="center">
              <h2 className="profile-header">商品上架</h2>
              <form className="profile-form form" onSubmit={postInForm}>
                <div className="img">
                  <p>上傳商品圖片:</p>
                  {/* <input
                    type="file"
                    name="photo"
                    onChange={handleImageChange}
                  /> */}
                  <div>伺服器回應：{message}</div>
                <div>
                  預覽:
                  {/* <img src={previewURL} alt="" /> */}
                </div>
                </div>
                <div className="texts">
                  <p className="libox">
                    <label>
                      名稱:{' '}
                      <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleFieldChange}
                      />
                    </label>
                  </p>
                  <p className="libox">
                    <label>
                      商品分類:{' '}
                      <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleFieldChange}
                      />
                    </label>
                  </p>
                  <p className="libox">
                    <label>
                      品牌:{' '}
                      <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleFieldChange}
                      />
                    </label>
                  </p>
                  <p className="libox">
                    商品介紹:{' '}
                    <textarea
                      name="info"
                      rows={3}
                      value={product.info}
                      onChange={handleFieldChange}
                    />
                  </p>
                  <p className="libox">
                    <label>
                      價格:{' '}
                      <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleFieldChange}
                      />
                    </label>
                  </p>
                  <p className="libox">
                    <label>
                      規格:{' '}
                      <input
                        type="text"
                        name="size"
                        value={product.size}
                        onChange={handleFieldChange}
                      />
                    </label>
                  </p>
                  <p className="libox">
                    <label>
                      商品狀態:{' '}
                      <input
                        type="text"
                        name="tag"
                        value={product.tag}
                        onChange={handleFieldChange}
                      />
                    </label>
                  </p>
                <button className="submit" type="submit">
                  上架
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .profile-header {
            margin-bottom: 2rem;
          }
          .form {
            color: #f7a969da;
            font-family: 'Noto Sans';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            display: flex;
          }

          .libox {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .libox input {
            {/* width: 256px; */}
            height: 36px;
            border-radius: 10px;
            border: 2px solid #9FAAA6;
            display: block;
          }

          .libox textarea {
            width: 250px;
            border-radius: 10px;
            border: 2px solid #9FAAA6;
          }

          .submit {
            display: flex;
            padding: 8px 40px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 10px;
            background: var(--yellow, #fede62);
            border: 1px solid #fede62;
            color: var(--gray, #9faaa6);
            font-family: 'Noto Sans';
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin: 0 auto;
          }

          @media (max-width: 1199.98px) {
            .form {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}
