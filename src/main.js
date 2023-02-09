import { render } from "../lib"
import ProductPage from "./pages/products"
import ProductDetailPage from "./pages/productdeail"
import Navigo from "navigo"
import './css/main.css'
import SearchPage from "./pages/search"

// Khai bao DOM
var app = document.querySelector("#app")

// app.innerHTML = ProductPage()

const router = new Navigo()
router.on('/', function () {
  console.log("Product Page");
  render(ProductPage(), app)
})

router.on('/product-detail', function () {
  console.log("Product Detail Page");
  render(ProductDetailPage(), app)
})

router.on('/search', function () {
  console.log("Search Page");
  render(SearchPage(), app)
})

router.resolve()

