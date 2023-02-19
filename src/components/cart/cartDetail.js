import { priceFormat } from "../../../lib"

const CartDetail = function () {
    const key = sessionStorage.getItem("cart")
    const cart = JSON.parse(key)
    if (!Array.isArray(cart) || cart.length == '') {
        return /*html*/`
        <div class="flex border-b-[1px] text-center font-semibold">
            <h1 class="m-auto p-3">Không có sản phẩm trong giỏ hàng</h1>
        </div>
        `
    }
    else {
        return cart.map(function (item) {
            return /*html*/`
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                    <div class="w-20">
                        <img class="h-24" src="${item.product.images[0].base_url}" alt="">
                    </div>
                            
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm">${item.product.name}</span>
                        <span class="text-red-500 text-xs">${item.product.categories.name}</span>
                        <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                </div>

                <div class="flex justify-center w-1/5">
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>

                    <input class="mx-2 border text-center w-8" type="text" value="${item.quantity}">

                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
                </div>

                <span class="text-center w-1/5 font-semibold text-sm">${priceFormat.format(item.product.current_seller.price)}</span>
                <span class="text-center w-1/5 font-semibold text-sm text-red-600">${priceFormat.format(item.product.current_seller.price * item.quantity)}</span>
            </div>
            `
        }).join('')
    }
}
export default CartDetail