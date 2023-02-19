import { discount, priceFormat, rating, useEffect, useState } from "../../../../lib"

const SearchCate = function (cate_id) {
    const [data, setData] = useState([])
    useEffect(function () {
        fetch(`http://localhost:3000/books?categories.id=${cate_id}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

    return data.map(function (searchBook, index) {
        return /*html*/`
        <div class="m-3">
            <div class="w-[200px] h-[200px] mx-auto p-1">
                <a href="/product-detail/?book_id=${searchBook.id}&cate_id=${searchBook.categories.id}">
                    <img src="${searchBook.images[0].base_url}" class="w-[auto] h-[200px] transition-all ease-in-out duration-300 transform hover:scale-110" />
                </a>
            </div>
        
            <div class="p-3 pt-5">
                <a href="/product-detail/?book_id=${searchBook.id}&cate_id=${searchBook.categories.id}" class="hover:text-red-500 text-[13px] font-normal leading-[20px]">
                    ${searchBook.name}
                </a>

                <div class="flex pt-3 pb-3">
                    <div class="flex border-r-[1px] h-[15px]">
                        <p class="text-[8px] pr-2 pt-0.5">
                            ${rating(searchBook.rating_average)}
                        </p>
                    </div>

                    <p class="text-[12px] font-normal leading-[16px] text-[#787878] pl-2">
                        Đã bán ${searchBook.quantity_sold?.value > 1000 ? '1000+' : searchBook.quantity_sold?.value ?? 0}
                    </p>
                </div>

                <div class="flex">
                    <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1">
                        ${priceFormat.format(searchBook.current_seller.price)}
                    </p>

                    <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2">
                        <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">
                            -${discount(searchBook.original_price, searchBook.current_seller.price)}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join('')

}

export default SearchCate;