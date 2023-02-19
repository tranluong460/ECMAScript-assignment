import { useEffect, useState } from "../../../../../lib";

const ListUserAdmin = function () {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://localhost:3000/users')
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
                fetch(`http://localhost:3000/users/${btn.dataset.id}`, {
                    method: "DELETE",
                })

                window.location.href = "http://localhost:5173/adminusers"
            })
        }))
    })

    return data.map(function (item) {
        return /*html*/`
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div class="flex w-2/5">
                <div class="w-20">
                    <img class="h-24" src="${item.images}" alt="">
                </div>
                        
                <div class="flex flex-col justify-between ml-4 flex-grow">
                    <span class="font-bold text-sm">${item.name}</span>
                    <span class="text-[#787878] text-xs">Email: ${item.email}</span>
                    <span class="text-[#787878] text-xs">Số điện thoại: ${item.phone}</span>
                </div>
            </div>

            <span class="text-center w-1/5 font-semibold text-sm">${item.address}</span>
            <span class="text-center w-1/5 font-semibold text-sm text-red-600">${item.role}</span>

            <div class="text-center w-1/5 font-semibold text-sm">
                <button data-id="${item.id}" id="btn-delete" class="font-semibold hover:text-red-500 text-gray-500 text-[25px] p-1">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        `
    }).join('')
}

export default ListUserAdmin