import { useEffect } from "../../../../../lib"

const ProductDescription = function (book) {
    useEffect(function () {
        const description = document.getElementById("description")
        const showMoreBtn = document.getElementById("show-more")
        const showLessBtn = document.getElementById("show-less")

        showMoreBtn.addEventListener("click", () => {
            description.innerHTML = book.description;
            showMoreBtn.classList.add("hidden");
            showLessBtn.classList.remove("hidden");
        })

        showLessBtn.addEventListener("click", () => {
            description.innerHTML = book.short_description;
            showMoreBtn.classList.remove("hidden");
            showLessBtn.classList.add("hidden");
        })
    })

    return /*html*/`
    <div class="mt-5">
        <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Mô tả sản phẩm</h1>
        <div class="text-[14px] leading-[21px] font-normal text-[#333333] p-1">
            <p id="description">
                ${book?.short_description}
            </p>
            <div class="border w-[200px] text-center border-[#189EFF] rounded-[10px] mx-auto mt-5">
                <button id="show-more" class="hover:text-red-500 text-[#189EFF] font-normal text-[13px] leading-[39px]">Xem Thêm Nội Dung</button>
                <button id="show-less" class="hover:text-red-500 text-[#189EFF] font-normal text-[13px] leading-[39px] hidden">Thu Gọn Nội Dung</button>
            </div>
        </div>
    </div>
    `
}

export default ProductDescription