import Header from "../components/header"
import Footer from "../components/footer";

const CartPage = function () {

    document.title = 'Giỏ hàng';

    return /*html*/`
    
    ${Header()}

    <div class="w-full flex justify-around pt-3">
        <h1 class="text-[23px] leading-[28px] font-normal p-4 text-[#000000]">Giỏ hàng</h1>
    </div>

    ${Footer()}
    `
}

export default CartPage