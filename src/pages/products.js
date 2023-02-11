import { discount, priceFormat, rating } from "../../lib";
import Header from "../components/header"
import Footer from "../components/footer";
import SlideBar from "../components/slidebar";
import data from '../../db.json' assert {type: 'json'}
import '@fortawesome/fontawesome-free/css/all.css'

const ProductPage = function () {

    return /*html*/`
    
    ${Header()}

    <div class="w-full flex justify-around pt-3">
        ${SlideBar()}

        <div class="mx-auto w-[950px]">
            <div>
                <h1 class="text-[23px] leading-[28px] font-normal p-4 text-[#000000]">Nhà Sách Tiki</h1>
                <img src="../src/images/Banner.png" alt="" class="w-[800px] h-[285px]">
            </div>

            <div class="border-b-[1px] w-[900px] p-3">
                <div class="flex justify-around w-[500px] font-normal text-[13px] leading-[20px]">
                    <button id="popularProducts" class="hover:text-red-500">Phổ biến</button>
                    <button id="bestSellerProducts" class="hover:text-red-500">Bán chạy</button>
                    <button id="" class="hover:text-red-500">Hàng mới</button>
                    <button id="lowProducts" class="hover:text-red-500">Giá thấp</button>
                    <button id="highProducts" class="hover:text-red-500">Giá cao</button>
                </div>
            </div>

            <div class="flex p-3">
                <div class="bg-[#EEEEEE] rounded-[100px] w-[80px] h-[24px]">
                    <img src="../src/images/TikiNow.png" alt="" class="w-[56px] h-[24px] ml-3.5">
                </div>

                <div class="bg-[#EEEEEE] rounded-[100px] w-[80px] h-[24px] ml-3">
                    <img src="../src/images/Freeship1.png" alt="" class="w-[56px] h-[24px] ml-3.5">
                </div>
            </div>

            <div id="products" class="grid grid-cols-4 gap-2 pb-[100px]">
                ${data.map(function (book, index) {
        return /*html*/`
                <div class="m-3">
                    <div class="w-[200px] h-[200px] mx-auto p-1">
                        <a href="/product-detail/?book_id=${book.id}&cate_id=${book.categories.id}">
                            <img src="${book.images[0].base_url}" class="w-[auto] h-[200px]" />
                        </a>
                    </div>

                    <div class="p-2">
                        <a href="/product-detail/?book_id=${book.id}&cate_id=${book.categories.id}"
                            class="hover:text-red-500 text-[13px] font-normal leading-[20px]">${book.name}</a>
                        <div class="flex pt-3 pb-3">
                            <div class="flex border-r-[1px] h-[15px]">
                                <p class="text-[8px] pr-2 pt-0.5">${rating(book.rating_average)}</p>
                            </div>
                            <p class="text-[12px] font-normal leading-[16px] text-[#787878] pl-2">Đã bán ${book.quantity_sold?.value > 1000 ? '1000+' : book.quantity_sold?.value ?? 0}</p>
                        </div>
                        <div class="flex">
                            <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1">${priceFormat.format(book.current_seller.price)}</p>
                            <div class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2">
                                <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">-${discount(book.original_price, book.current_seller.price)}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
    }).join('')}
            </div>
        </div>
    </div>

    ${Footer()}
    `
}

export default ProductPage