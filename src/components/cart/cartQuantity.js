const CartQuantity = function () {
    return /*html*/`
    <div class="flex justify-between border-b pb-8">
        <h1 class="font-semibold text-2xl">Giỏ hàng</h1>
        <h2 class="font-semibold text-2xl">1 Items</h2>
    </div>

    <div class="flex mt-10 mb-5">
        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Thông tin sản phẩm</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Số lượng</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Giá</h3>
        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Tổng</h3>
    </div>
    `
}

export default CartQuantity