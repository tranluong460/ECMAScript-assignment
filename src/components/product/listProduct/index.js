import { discount, priceFormat, rating } from "../../../../lib"

const ListProduct = function (data) {
    return /*html*/`
    <div class="grid grid-cols-4 gap-2 pb-[100px]">
        ${data.map(function (book, index) {
        return /*html*/`
        <div class="m-3">
            <div class="w-[200px] h-[200px] mx-auto p-1">
                <a href="/product-detail/?book_id=${book.id}&cate_id=${book.categories.id}">
                    <img src="${book.images[0].base_url}" class="w-[auto] h-[200px] transition-all ease-in-out duration-300 transform hover:scale-110" />
                </a>
            </div>

            <div class="p-3 pt-5">
                <a href="/product-detail/?book_id=${book.id}&cate_id=${book.categories.id}" class="hover:text-red-500 text-[13px] font-normal leading-[20px]">
                    ${book.name}
                </a>

                <div class="flex pt-3 pb-3">
                    <div class="flex border-r-[1px] h-[15px]">
                        <p class="text-[8px] pr-2 pt-0.5">
                            ${rating(book.rating_average)}
                        </p>
                    </div>
                        
                    <p class="text-[12px] font-normal leading-[16px] text-[#787878] pl-2">
                        Đã bán ${book.quantity_sold?.value > 1000 ? '1000+' : book.quantity_sold?.value ?? 0}
                    </p>
                </div>

                <div class="flex">
                    <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1">
                        ${priceFormat.format(book.current_seller?.price)}
                    </p>

                    <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2">
                        <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">
                            -${discount(book.original_price, book.current_seller?.price)}%
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join('')}
        </div >
    </div >
    `
}

export default ListProduct