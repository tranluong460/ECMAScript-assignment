import Footer from "../../../components/footer"
import Header from "../../../components/header"
import ListProductAdmin from "../components/product"
import SlideBarAdmin from "../components/slidebar"

const AdminProductPage = function () {
    return /*html*/`

    ${Header()}

    <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
            
            ${SlideBarAdmin()}

            <div class="w-3/4 bg-white px-10 py-10">
                <div class="text-center">
                    <h1 class="font-semibold text-2xl border-b pb-8">Quản lý sản phẩm</h1>
                </div>

                <div class="flex mt-10 mb-5">
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