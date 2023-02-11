import { discount, priceFormat, rating } from "../../lib";
import Header from "../components/header"
import Footer from "../components/footer";
import data from '../../db.json' assert {type: 'json'}

const ProductDetailPage = function () {

    const urlParams = new URLSearchParams(location.search);

    const id = urlParams.get('book_id')
    let book = data.find(function (book) {
        return book.id == id
    })

    const cate = urlParams.get('cate_id')
    let simlarbook = data.filter(function (simlarbook) {
        return simlarbook.categories.id == cate && simlarbook.id != id
    })

    document.title = book.name

    document.addEventListener("DOMContentLoaded", function () {
        const decrementBtn = document.getElementById("decrement");
        const incrementBtn = document.getElementById("increment");
        const quantityInput = document.getElementById("quantity");

        decrementBtn.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });

        incrementBtn.addEventListener("click", () => {
            const currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });

        quantityInput.addEventListener("input", () => {
            const currentValue = parseInt(quantityInput.value);
            if (isNaN(currentValue) || currentValue < 1) {
                quantityInput.value = 1;
            }
        });

        const changeImg = document.querySelectorAll("img[id^='imgsmall']");
        changeImg.forEach(img => {
            img.addEventListener("click", function () {
                document.getElementById("imgbase").src = this.src;
            });
        });

        const description = document.getElementById("description");
        const showMoreBtn = document.getElementById("show-more");
        const showLessBtn = document.getElementById("show-less");

        showMoreBtn.addEventListener("click", () => {
            description.innerHTML = book.description;
            showMoreBtn.classList.add("hidden");
            showLessBtn.classList.remove("hidden");
        });

        showLessBtn.addEventListener("click", () => {
            description.innerHTML = book.short_description;
            showMoreBtn.classList.remove("hidden");
            showLessBtn.classList.add("hidden");
        });
    });

    return /*html*/`

    ${Header()}

    <div class="w-full mb-[100px]">
        <div class="w-[1000px] h-[auto] mx-auto">
            <div class="flex">
                <div class="border-r-[1px] mx-auto p-5">
                    <img id="imgbase" src="${book.images[0].base_url}" class="w-[444px] h-[444px]" alt="" srcset="">

                    <div class="flex w-[auto] h-[auto] pt-1">
                        ${book.images.slice(0, 5).map(function (image, index) {
        return `
                        <img id="imgsmall" class="w-[64px] h-[64px] p-0.5 transition-all ease-in-out duration-300 transform hover:scale-125" src="${image.base_url}" alt="">`
    }).join('')}
                    </div>
                </div>

                <div class="w-[500px]">
                    <div class="flex text-[13px] leading-[20px] font-normal pl-3 pt-3">
                        <p class="text-[#242424]">Tác giả:</p>
                        <a href="" class="text-[#0D5CB6] ml-1 hover:text-red-500">${book.authors ? book.authors[0].name
            : "Không có tác giả"}</a>
                    </div>

                    <div class="pl-3">
                        <h1 class="uppercase text-[23px] leading-[32px] font-normal text-[#242424]">${book.name}</h1>
                        <div class="flex pt-3 pb-3">
                            <div class="flex border-r-[1px] h-[15px]">
                                <p class="text-[8px] pr-2 pt-0.5">${rating(book.rating_average)}</p>
                            </div>
                            <p class="text-[12px] font-normal leading-[16px] text-[#787878] pl-2">Đã bán ${book.quantity_sold?.value > 1000 ? '1000+' : book.quantity_sold?.value ?? 0}</p>
                        </div>
                    </div>

                    <div class="flex bg-[#FAFAFA] rounded-[4px] w-[479px] h-[103px] m-3 p-3">
                        <h1 class="text-[32px] leading-[40px] font-normal text-[#FF424E] pt-3">
                            ${priceFormat.format(book.current_seller.price)}
                        </h1>
                        <p class="text-[13px] leading-[20px] font-normal text-[#808089] pt-8 pl-2">
                            <del>${priceFormat.format(book.original_price)}</del>
                        </p>
                        <div
                            class="w-[40autopx] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-8 ml-2">
                            <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">
                                -${discount(book.original_price, book.current_seller.price)}%</p>
                        </div>
                    </div>

                    <div class="border-t-[1px] p-5">
                        <p class="text-[15px] leading-[24px] font-normal text-[#000000]">Số lượng:</p>

                        <div class="flex pt-2">
                            <button id="decrement" class="hover:bg-red-500 border-[1px] bg-[#FFFFFF] w-[30px] h-[30px]">
                                <p>-</p>
                            </button>

                            <input type="text" id="quantity" class="w-[50px] border-[1px] border-[#ECECEC] bg-[#fff] h-[30px] outline-0 text-center" value="1">

                            <button id="increment" class="hover:bg-red-500 border-[1px] bg-[#FFFFFF] w-[30px] h-[30px]">
                                <p>+</p>
                            </button>
                        </div>

                        <div class="w-[auto] h-[48px] bg-[#FF3945] rounded-[4px] mt-3">
                            <a href="" class="text-[14px] leading-[24px] font-normal text-[#FFFFFF] capitalize">
                                <p class="text-center pt-3 hover:text-yellow-500">chọn mua</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mx-auto mt-10">
                <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Sản phẩm tương tự</h1>
                <div class="flex mx-auto">
                    <div class="grid grid-cols-6 gap-2 mx-auto">
                        ${simlarbook.slice(0, 6).map(function (simlarbook) {
                return /*html*/`
                        <div class="m-3">
                            <div class="w-[auto] h-[auto] mx-auto p-1">
                                <a href="/product-detail/?book_id=${simlarbook.id}&cate_id=${simlarbook.categories.id}">
                                    <img src="${simlarbook.images[0].base_url}" class="w-[auto] h-[180px]  transition-all ease-in-out duration-300 transform hover:scale-110" />
                                </a>
                            </div>

                            <div class="p-2">
                                <a href="/product-detail/?book_id=${simlarbook.id}&cate_id=${simlarbook.categories.id}" class="hover:text-red-500 text-[13px] font-normal leading-[20px]">${simlarbook.name}</a>
                                
                                <div class="flex pt-1 pb-1">
                                    <div class="flex border-r-[1px] h-[15px]">
                                        <p class="text-[6px] pr-2 pt-1">${rating(simlarbook.rating_average)}</p>
                                    </div>

                                    <p class="text-[11px] font-normal leading-[16px] text-[#787878] pl-2">Đã bán ${simlarbook.quantity_sold?.value > 1000 ? '1000+' : simlarbook.quantity_sold?.value ?? 0}</p>
                                </div>
                                <div class="flex">
                                    <p class="text-[16px] font-normal leading-[24px] text-[#FF424E] p-1"> ${priceFormat.format(simlarbook.current_seller.price)}</p>

                                    <div
                                        class="w-[40px] h-[20px] bg-[#FFF0F1] border-[1px] border-[#FF424E] rounded-[2px] mt-2">
                                        <p class="text-[14px] leading-[18px] font-normal text-[#FF424E] ml-0.5">
                                            -${discount(simlarbook.original_price, simlarbook.current_seller.price)}%
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

            <div class="mx-auto mt-1">
                <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Thông tin chi tiết</h1>

                <div class="flex w-[auto] h-[auto] rounded-[4px] mt-3">
                    <div class="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
                        <p class="mt-[10px] ml-5">${book.specifications[0]?.attributes[0]?.name ?? ''}</p>
                        <p class="mt-[20px] ml-5">${book.specifications[0]?.attributes[1]?.name ?? ''}</p>
                        <p class="mt-[20px] ml-5">${book.specifications[0]?.attributes[2]?.name ?? ''}</p>
                        <p class="mt-[20px] ml-5">${book.specifications[0]?.attributes[3]?.name ?? ''}</p>
                        <p class="mt-[20px] ml-5">${book.specifications[0]?.attributes[4]?.name ?? ''}</p>
                        <p class="mt-[20px] ml-5">${book.specifications[0]?.attributes[5]?.name ?? ''}</p>
                        <p class="mt-[20px] ml-5">${book.specifications[0]?.attributes[6]?.name ?? ''}</p>
                    </div>

                    <div class="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
                        <p class="mt-[10px]">${book.specifications[0]?.attributes[0]?.value ?? ''}</p>
                        <p class="mt-[20px]">${book.specifications[0]?.attributes[1]?.value ?? ''}</p>
                        <p class="mt-[20px]">${book.specifications[0]?.attributes[2]?.value ?? ''}</p>
                        <p class="mt-[20px]">${book.specifications[0]?.attributes[3]?.value ?? ''}</p>
                        <p class="mt-[20px]">${book.specifications[0]?.attributes[4]?.value ?? ''}</p>
                        <p class="mt-[20px]">${book.specifications[0]?.attributes[5]?.value ?? ''}</p>
                        <p class="mt-[20px]">${book.specifications[0]?.attributes[6]?.value ?? ''}</p>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Mô tả sản phẩm</h1>

                <div class="text-[14px] leading-[21px] font-normal text-[#333333] p-1">
                    <p id="description">${book.short_description}</p>
                    <div class="border w-[200px] text-center border-[#189EFF] rounded-[10px] mx-auto mt-5">
                        <button id="show-more" class="hover:text-red-500 text-[#189EFF] font-normal text-[13px] leading-[39px]">Xem Thêm Nội Dung</button>
                        <button id="show-less" class="hover:text-red-500 text-[#189EFF] font-normal text-[13px] leading-[39px] hidden">Thu Gọn Nội Dung</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    ${Footer()}
`

}

export default ProductDetailPage