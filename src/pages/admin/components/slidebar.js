const SlideBarAdmin = function () {
    return /*html*/`
    <div class="w-1/4 px-8 py-10 text-center">
        <h1 class="font-semibold text-2xl border-b pb-8">Trang quản trị</h1>
                            
        <div class="mt-5 hover:text-red-500">
            <a href="/adminproducts" class="font-semibold text-sm">Products</a>
        </div>

        <div class="mt-5 hover:text-red-500">
            <a href="/adminusers" class="font-semibold text-sm">Users</a>
        </div>
    </div>
    `
}

export default SlideBarAdmin