import { useEffect, useState } from "../../../lib";
import Header from "../../components/header"
import Footer from "../../components/footer"
import ProductInfo from "../../components/productdetail/producInfo";
import ProductSimilar from "../../components/productdetail/productSimilar";
import ProductSpecifications from "../../components/productdetail/productSpecifications";
import ProductDescription from "../../components/productdetail/productDescription";

const ProductDetailPage = function () {
    const urlParams = new URLSearchParams(location.search);
    const id = urlParams.get('book_id')
    const cate = urlParams.get('cate_id')

    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://localhost:3000/books')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

    const book = data.find(function (book) {
        return book.id == id
    })

    const similarbooks = data.filter(function (similarbooks) {
        return similarbooks.categories.id == cate && similarbooks.id != id
    })

    useEffect(function () {
        const decrementBtn = document.getElementById("decrement")
        const incrementBtn = document.getElementById("increment")
        const quantityInput = document.getElementById("quantity")

        decrementBtn.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value)
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1
            }
        });
        incrementBtn.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value)
            quantityInput.value = currentValue + 1
        });
        quantityInput.addEventListener("input", () => {
            const currentValue = parseInt(quantityInput.value)
            if (isNaN(currentValue) || currentValue < 1) {
                quantityInput.value = 1
            }
        })

        const addCart = document.getElementById("add-cart")
        addCart.addEventListener("click", () => {
            let cart = []
            const storage = sessionStorage.getItem("cart")
            if (storage) {
                cart = JSON.parse(storage)
            }
            const item = cart.find(item => item.product.id == id)
            if (item) {
                item.quantity += parseInt(quantityInput.value)
            } else {
                let product = book
                cart.push({
                    product: product,
                    quantity: parseInt(quantityInput.value)
                })
            }
            sessionStorage.setItem("cart", JSON.stringify(cart))
            location.reload()
        })
    })

    return /*html*/`

    ${Header()}

    <div class="w-full mb-[100px]">
        <div id="product" class="w-[1000px] h-[auto] mx-auto">
            
            ${ProductInfo(book)}
            
            ${ProductSimilar(similarbooks)}

            ${ProductSpecifications(book)}

            ${ProductDescription(book)}
            
        </div>
    </div>

    ${Footer()}
`

}

export default ProductDetailPage