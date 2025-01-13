import React, {useState, useEffect} from 'react'
import Banner from '../components/banner/Banner'
import Product from '../components/product/Product'
import axios from 'axios'

let API = "https://dummyjson.com/products"
function Home() {
  const [products, setProducts] = useState([])

  async function getProduct() {
    try {
      const res = await axios.get(API)
      console.log(res);
      setProducts(res.data.products)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProduct()
  },[])

  return (
    <div>
      <Banner/>
      <div className='products'>
        {
          products.map((item) => (
            <Product key={item.id} product={item} />
          ))
        }
      </div>
      {/* <Product product={image}/> */}
    </div>
  )
}

export default Home
