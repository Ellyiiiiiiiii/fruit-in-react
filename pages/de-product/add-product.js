import React from 'react'

export default function AddProduct() {
  return (
    <>
      <h2>商品上架</h2>
      <form>
        <label className="myFileLabel" htmlFor="myFile">上傳商品圖片:
          <div className="img" />
          <i className="fa-sharp fa-solid fa-folder-open icon" />
        </label>
        <input type="file" id="myFile" accept="image/*" />
        <br />
        <label>
          名稱: <input type="text" name="name" />
        </label>
        <br />
        <label>
          商品分類: <input type="text" name="category" />
        </label>
        <br />
        <label>
          品牌: <input type="text" name="brand" />
        </label>
        <br />
        商品介紹:
        <textarea name="info" />
        <br />
        <label>
          價格: <input type="number" name="price" />
        </label>
        <br />
        <label>
          規格: <input type="text" name="size" />
        </label>
        <br />
        <label>
          商品狀態: <input type="text" name="tag" />
        </label>
        <br />
        <button type="submit">上架</button>
      </form>
    </>
  )
}
