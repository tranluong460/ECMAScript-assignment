import { discount, priceFormat, rating } from "../../../../lib"

const ProductSimilar = function (similarbooks) {
    return /*html*/`
    <div class="mx-auto mt-10">
        <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Sản phẩm tương tự</h1>

        <div class="flex mx-auto">
            <div class="grid grid-cols-6 gap-2 mx-auto">
                ${similarbooks.slice(0, 6).map(function (similarbooks) {
        return /*html*/`
                <div class="m-3">
                    <div class="w-[auto] h-[auto] mx-auto p-1">
                        <a href="/product-detail/?book_id=${similarbooks.id}&cate_id=${similarbooks.categories.id}">
                            <img src="${similarbooks.images[0].base_url}" class="w-[auto] h-[180px]  transition-all ease-in-out duration-300 transform hover:scale-110" />
                        </a>
                    </div>

                    <div class="p-2">
                        <a href="/product-detail/?book_id=${similarbooks.id}&cate_id=${similarbooks.categories.id}" class="hover:text-red-500 text-[13px] font-normal leading-[20px]">
                            ${similarbooks.name}
                        </a>
                               
                        <div class="flex pt-1 pb-1">
                            <div class="flex border-r-[1px] h-[15px]">
                                <p class="text-[6px] pr-2 pt-1">${rating(similarbooks.rating_average)}</p>
                            </div>

                            <p class="text-[11px] font-normal leading-[16px] text-[#787878] pl-2">Đã bán ${similarbooks.quantity_sold?.value > 1000 ? '1000+' : similarbooks.quantity_sold?.value ?? 0}</p>
                        </div>

                        <div class="flex">
                            <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1"> ${priceFormat.format(similarbooks.current_seller.price)}</p>

                            <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2">
                                <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">
                                    -${discount(similarbooks.original_price, similarbooks.current_seller.price)}%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                `
    }).join('')}
            </div>
        </div>
    </div>
    `
}

export default ProductSimilar