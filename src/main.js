import { render, router } from "../lib/index"

import ProductPage from "./pages/client/product/products"
import ProductDetailPage from "./pages/client/productdetail/productdeail"
import SearchPage from "./pages/client/search/search"
import CartPage from "./pages/client/cart/index"
import Login from "./pages/client/login/login"
import Register from "./pages/client/register/register"

import AdminProductPage from "./pages/admin/products/index"
import EditProductPage from "./pages/admin/products/update"
import CreateProducPage from "./pages/admin/products/create"
import AdminUserPage from "./pages/admin/users/index"
import Dashboard from "./pages/admin/dashboard/index"

import '@fortawesome/fontawesome-free/css/all.css'
import './css/main.css'

var app = document.querySelector("#app")

router.on('/', function () {
  console.log("Product Page");
  render(ProductPage, app)
})

router.on('/product-detail', function () {
  console.log("Product Detail Page");
  render(ProductDetailPage, app)
})

router.on('/search', function () {
  console.log("Search Page");
  render(SearchPage, app)
})

router.on('/cart', function () {
  console.log("Cart Page");
  render(CartPage, app)
})

router.on('/login', function () {
  console.log("Login Page");
  render(Login, app)
})

router.on('/register', function () {
  console.log("Register Page");
  render(Register, app)
})

router.on('/adminproducts', function () {
  console.log("Admin Product Page");
  render(AdminProductPage, app)
})

router.on('/edit', function () {
  console.log("Admin Edit Product Page");
  render(EditProductPage, app)
})

router.on('/create', function () {
  console.log("Admin Create Product Page");
  render(CreateProducPage, app)
})

router.on('/adminusers', function () {
  console.log("Admin User Page");
  render(AdminUserPage, app)
})

router.on('/dashboard', function () {
  console.log("Admin Dashboard Page");
  render(Dashboard, app)
})

router.resolve()

