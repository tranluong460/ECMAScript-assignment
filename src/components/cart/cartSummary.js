const CartSummary = function () {
    return /*html*/`
    <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Tóm tắt</h1>
        <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">1 sản phẩm</span>
            <span class="font-semibold text-sm">1.000.000đ</span>
        </div>

        <div class="py-10">
            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Mã giảm giá</label>
            <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
        </div>

        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Kiểm tra</button>

        <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Tổng</span>
                <span>1.000.000đ</span>
            </div>

            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Mua hàng</button>
        </div>
    </div>
    `
}

export default CartSummary