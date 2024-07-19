import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 模擬後端的資料來源: https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
// 資料範例:
// [
//   {
//     "id": 1,
//     "name":"ASUS G614JVR 16吋2K電競筆電",
//     "category":"筆記型電腦",
//     "brand":"ASUS",
//     "info":"i9-14900HX/RTX4060/16G/1TB SSD/ROG Strix G16",
//     "price":63000,
//     "photo":"ASUS G614JVR 16吋2K電競筆電$63000.png",
//     "size":"16吋",
//     "tag": "hot"
//   }
// ]
export default function List() {
  // 注意1: 初始值至少要空白陣列。初次render是使用初始值，需要對應伺服器的資料模型
  // 注意2: 在應用程式執行過程中，一定要保持狀態的資料類型一致(務必一定要是陣列)
  const [products, setProducts] = useState([])

  // 與伺服器作fetch獲得資料
  const getProducts = async () => {
    const url = 'http://localhost:3005/api/de-products'

    // 使用try-catch語句，讓和伺服器連線的程式能作錯誤處理
    try {
      const res = await fetch(url)
      const resData = await res.json()

      if (resData.status === 'success') {
        // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)，呈現資料
        // 確定資料是陣列資料類型才設定到狀態中(最基本的保護)
        if (Array.isArray(resData.data.products)) {
          setProducts(resData.data.products)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  // 樣式2 didMount
  // 首次渲染(render)之後(after)，執行一次第一傳入參數函式其中程式碼，之後不會再執行
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <div className="col-md-6 col-lg-4 col-xl-3" key={v.id}>
              <div className="rounded position-relative fruite-item">
                <div className="fruite-img">
                  <Image
                    className="card-img-top"
                    src={`/images/product/device/${v.photo.split(',')[0]}`}
                    alt="..."
                    width={300}
                    height={200}
                    placeholder="blur"
                    blurDataURL={`/images/product/device/${v.photo.split(',')[0]}`}
                    style={{ width: '100%', height: 'auto' }} // optional
                  />
                  <Link href={`/de-product/${v.id}`}>{v.name}</Link>
                </div>
              </div>
            </div>


            
          )
        })}
      </ul>
    </>
  )
}
