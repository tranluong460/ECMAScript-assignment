import { useEffect } from "../../../../lib"
import Footer from "../../../components/footer"
import Header from "../../../components/header"

const CreateProducPage = function () {
    useEffect(function () {
        document.getElementById("btn_create").addEventListener("click", function () {
            const newBook = {
                "authors": [
                    {
                        "name": document.getElementById("author_name").value,
                    }
                ],
                "name": document.getElementById("book_name").value,
                "categories": {
                    "name": document.getElementById("cate_name").value,
                },
                "current_seller": {
                    "price": parseInt(document.getElementById("current_seller").value),
                },
                "list_price": parseInt(document.getElementById("list_price").value),
                "quantity_sold": {
                    "value": document.getElementById("quantity_sold").value
                },
                "short_description": document.getElementById("short_description").value,
            }

            fetch(`http://localhost:3000/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            })

            window.location.href = "http://localhost:5173/adminproducts"
        })
    })

    return /*html*/`
    ${Header()}

    <div class="p-10">
        <div>
            <a href="/adminproducts" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <i class="fas fa-chevron-left"></i>
            </a>
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2 pt-5">
            <div>
                <label for="book_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sách</label>
                <input type="text" id="book_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off">
            </div>

            <div>
                <label for="author_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tác giả</label>
                <input type="text" id="author_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off">
            </div>

            <div>
                <label for="cate_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh mục</label>
                <input type="text" id="cate_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off">
            </div>
            
            <div>
                <label for="current_seller" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giảm giá</label>
                <input type="text" id="current_seller" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off">
            </div>

            <div>
                <label for="list_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giá gốc</label>
                <input type="text" id="list_price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off">
            </div>

            <div>
                <label for="quantity_sold" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Đã bán</label>
                <input type="number" id="quantity_sold" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off" readonly="False">
            </div>
        </div>

        <div class="mb-6">
            <label for="short_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả ngắn</label>
            <input type="text" id="short_description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" autocomplete="off">
        </div> 

        <div class="text-center">
            <button id="btn_create" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Thêm mới
            </button>
        </div> 
    </div>

    ${Footer()}
    `
}

export default CreateProducPage