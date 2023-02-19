import Footer from "../../../components/footer"
import Header from "../../../components/header"
import ListProductAdmin from "../components/product"
import SlideBarAdmin from "../components/slidebar"

const AdminProductPage = function () {
    return /*html*/`

    ${Header()}

    <div class="mx-auto mt-10">
        <div class="flex shadow-md my-10">
            
            ${SlideBarAdmin()}

            <div class="w-3/4 bg-white px-10 py-10">
                <div>
                    <h1 class="font-semibold text-2xl border-b pb-8 text-center">Quản lý sản phẩm</h1>
                    <div class="text-right p-3">
                        <a href="/create" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm sản phẩm mới</a>
                    </div>
                </div>

                <div class="flex mt-3 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Thông tin sản phẩm</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Giảm giá</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Giá gốc</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Thao tác</h3>
                </div>

                ${ListProductAdmin()}
                
            </div>
        </div>
    </div>
 
${Footer()}
    `
}

export default AdminProductPage