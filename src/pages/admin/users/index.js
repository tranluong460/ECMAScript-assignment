import Footer from "../../../components/footer"
import Header from "../../../components/header"
import SlideBarAdmin from "../../../components/slidebar_admin"
import ListUserAdmin from "./components/listUser"

const AdminUserPage = function () {
    return /*html*/`

    ${Header()}

    <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">

            ${SlideBarAdmin()}

            <div class="w-3/4 bg-white px-10 py-10">
                <div class="text-center">
                    <h1 class="font-semibold text-2xl border-b pb-8">Quản lý người dùng</h1>
                </div>

                <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Thông tin người dùng</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Địa chỉ</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Vai trò</h3>
                    <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Thao tác</h3>
                </div>

                ${ListUserAdmin()}
                
            </div>
        </div>
    </div>
 
${Footer()}
    `
}

export default AdminUserPage