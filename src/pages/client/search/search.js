import Header from "../../../components/header";
import Footer from "../../../components/footer"
import SlideBar from "../../../components/slidebar"
import SearchCate from "../search/components/searchCate";
import SearchWord from "../search/components/searchWord";

const SearchPage = function () {
    const urlParams = new URLSearchParams(window.location.search);
    return /*html*/`

    ${Header()}

    <div class="w-[full] flex justify-around pt-3">
    ${SlideBar()}
        <div class="mx-auto w-[950px]">
            <div class="flex p-4">
                <h1 class="text-[23px] leading-[28px] font-normal text-[#000000]">Kết quả tìm kiếm</h1>
            </div>

            <div class="border-b-[1px] w-[900px] p-3">
                <div class="flex justify-around w-[500px] font-normal text-[13px] leading-[20px]">
                    <a href="/" class="hover:text-red-500">Phổ biến</a>
                    <a href="/" class="hover:text-red-500">Bán chạy</a>
                    <a href="/" class="hover:text-red-500">Hàng mới</a>
                    <a href="/" class="hover:text-red-500">Giá thấp</a>
                    <a href="/" class="hover:text-red-500">Giá cao</a>
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

            <div class="grid grid-cols-4 gap-2 pb-[100px]">
                ${SearchWord(urlParams.get('keyword'))}
                ${SearchCate(urlParams.get('cate_id'))}
            </div>
        </div>
    </div>

    ${Footer()}
    `
}

export default SearchPage