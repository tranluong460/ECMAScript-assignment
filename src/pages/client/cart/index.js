import Header from "../../../components/header"
import Footer from "../../../components/footer"
import CartDetail from "./components/cartDetail";
import CartSummary from "./components/cartSummary";
import CartQuantity from "./components/cartQuantity";

const CartPage = function () {

    document.title = 'Giỏ hàng';

    return /*html*/`
    
    ${Header()}

    <div class="bg-gray-100">
        <div class="container mx-auto mt-10">
            <div class="flex shadow-md my-10">
                <div class="w-3/4 bg-white px-10 py-10">
                    ${CartQuantity()}

                    ${CartDetail()}

                    <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
                        <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                        Tiếp tục mua hàng
                    </a>
                </div>

                ${CartSummary()}
            </div>
        </div>
    </div>

    ${Footer()}
    `
}

export default CartPage