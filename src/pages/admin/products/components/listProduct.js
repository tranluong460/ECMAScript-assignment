import { useEffect, useState, priceFormat } from "../../../../../lib";

const ListProductAdmin = function () {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://localhost:3000/books')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

    useEffect(function () {
        document.querySelectorAll('#btn-delete').forEach((btn => {
            btn.addEventListener('click', function () {
                fetch(`http://localhost:3000/books/${btn.dataset.id}`, {
                    method: "DELETE",
                })
                window.location.reload()
            })
        }))
    })

    return data.map(function (item) {
        return /*html*/`
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
                <div class="w-20">
                    <img class="h-24" src="${item.images?.[0].base_url}" alt="">
                </div>
                        
                <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">${item.name}</span>
                    <span class="text-[#787878] text-xs">Đã bán: ${item.quantity_sold?.value ?? 0}</span>
                    <span class="text-[#787878] text-xs">Thể loại: ${item.categories.name}</span>
                </div>
            </div>

            <span class="text-center w-1/5 font-semibold text-sm">${priceFormat.format(item.current_seller.price)}</span>
            <span class="text-center w-1/5 font-semibold text-sm text-red-600">${priceFormat.format(item.list_price)}</span>

            <div class="text-center w-1/5 font-semibold text-sm">
                <a href="/edit?book_id=${item.id}" class="font-semibold hover:text-red-500 text-gray-500 text-[25px] p-1">
                    <i class="fas fa-edit"></i>
                </a>

                <button data-id="${item.id}" id="btn-delete" class="font-semibold hover:text-red-500 text-gray-500 text-[25px] p-1">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `
    }).join('')
}

export default ListProductAdmin