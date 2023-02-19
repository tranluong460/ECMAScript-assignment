import { useEffect, useState } from "../../../../lib";
import Footer from "../../../components/footer";
import Header from "../../../components/header";


const EditProductPage = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const book_id = urlParams.get("book_id")

    const [data, setData] = useState([])
    useEffect(function () {
        fetch(`http://localhost:3000/books/${book_id}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

    useEffect(function () {
        document.getElementById("btn-update").addEventListener("click", function () {
            const newBook = {
                "categories": {
                    "name": document.getElementById("name_cate").value
                },
                "name": document.getElementById("name").value,
                "list_price": document.getElementById("list_price").value,
                // "images": [
                //     {
                //         "base_url": document.getElementById("img").src
                //     }
                // ],
                "id": book_id
            }

            fetch(`http://localhost:3000/books/${book_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newBook)
            })
        })
    })

    console.log(data)
    return /*html*/`

    ${Header()}
    
    <div class="w-full">
        <div class="w-[80%] mx-auto p-5">
            <h1 class="block text-gray-700 text-[20px] font-bold mb-2 text-center">
                Cập nhật sản phẩm
            </h1>

            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">Tên sách</p>
                <input id="name" type="text" value="${data.name}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">Đơn giá</p>
                <input id="list_price" type="text" value="${data.list_price}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">Danh mục</p>
                <input id="name_cate" value="${data.categories?.name}" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="p-3">
                <p class="block text-gray-700 text-sm font-bold mb-2">Hình ảnh:</p>
                <img id="img" src="${data.images?.[0].base_url}" class="h-[180px] w-[180px] flex-shrink-0 overflow-hidden rounded-md"/>
            </div>

            <div class="p-3 text-center">
                <button id="btn-update" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    <a href="/adminproducts">
                        Cập nhật
                    </a>
                </button>
            </div>
        </div>
    </div>

    ${Footer()}
`

}

export default EditProductPage