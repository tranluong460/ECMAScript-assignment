import { useEffect } from "../../../../lib"
import Footer from "../../../components/footer"
import Header from "../../../components/header"

const CreateProducPage = function () {
    useEffect(function () {
        document.getElementById("btn-create").addEventListener("click", function () {
            const newBook = {
                "categories": {
                    "name": document.getElementById('name_cate').value
                },
                "name": document.getElementById('name').value,
                "list_price": document.getElementById('list_price').value,
                "images": [
                    {
                        "base_url": "https://salt.tikicdn.com/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg"
                    }
                ]
            }

            fetch(`http://localhost:3000/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            })
        })
    })

    return /*html*/`
    ${Header()}

    <div class="w-full">
        <div class="w-[80%] mx-auto p-5">
            <h1 class="block text-gray-700 text-[20px] font-bold mb-2 text-center">
                Thêm mới sản phẩm
            </h1>

            <form action="">
                <div class="p-3">
                    <p class="block text-gray-700 text-sm font-bold mb-2">Tên sách</p>
                    <input type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="p-3">
                    <p class="block text-gray-700 text-sm font-bold mb-2">Đơn giá</p>
                    <input type="text" id="list_price" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="p-3">
                    <p class="block text-gray-700 text-sm font-bold mb-2">Tên danh mục</p>
                    <input type="text" id="name_cate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                </div>

                <div class="text-center p-3">
                    <button id="btn-create" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        <a href="/adminproducts">
                            Thêm mới
                        </a>
                    </button>
                </div>
            </form>
        </div>
    </div>

    ${Footer()}
    `
}

export default CreateProducPage