const Header = function () {

    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.getElementById("searchInput");
        const searchBtn = document.getElementById("searchBtn");

        searchBtn.addEventListener("click", function () {
            const keyword = searchInput.value;
            sessionStorage.setItem("searchKeyword", keyword);
        });
    });

    return /*html*/`
    <div class="w-full bg-[#1A94FF]">
        <div class="flex justify-around h-[100px] w-[1200px] mx-auto">
            <div class="my-auto">
                <a href="/">
                    <img src="../src/images/Tiki.png" alt="" class="w-[60px] h-[40px] mb-[11px]">
                </a>
                <img src="../src/images/Freeship.png" alt="" class="w-[83px] h-[12px]">
            </div>

            <div class="my-auto flex">
                <input type="text" id="searchInput" placeholder="Search" class="outline-0 w-[500px] h-[40px] pl-5" value="">
                <a href="/search">
                    <button id="searchBtn" class="bg-[#0D5CB6] h-[40px] w-[120px] text-white flex hover:bg-blue-900 ">
                        <img src="../src/images/Search.png" alt="" class="w-[20px] h-[20px] mt-[11px] ml-5">
                        <p class="text-[13px] font-normal leading-[15px] mt-3 ml-1">Tìm kiếm</p>
                    </button>
                </a>
            </div>

            <div class="flex text-white my-auto">
                <img src="../src/images/Account.png" alt="" class="w-[32px] h-[32px] mr-2 ml-[-100px]">
                <div>
                    <div class="leading-[16px] text-[11px] font-normal">
                        <a href="" class="hover:text-red-500">Đăng nhập</a> / <a href="" class="hover:text-red-500">Đăng
                            kí</a>
                    </div>
                    <div>
                        <a href="" class="leading-[20px] text-[13px] font-normal flex hover:text-red-500">
                            <p>Tài khoản</p>
                            <img src="../src/images/Detail.png" alt="" class="w-[16px] h-[16px] mt-1">
                        </a>
                    </div>
                </div>

                <div class="my-auto text-white flex hover:text-red-500">
                    <img src="../src/images/Cart.png" alt="" class="w-[32px] h-[32px] ml-5">
                    <a href="" class="text-[11px] mt-4 ml-1 font-normal leading-[14px]">Giỏ hàng</a>
                </div>
            </div>
        </div>
    </div>

    <div class="w-full bg-[#F5F5FA] flex">
        <div class="w-[1050px] mx-auto p-1">
            <a href="/" class="text-[13px] font-normal leading-[20px] hover:text-red-500 text-[#808089]">Trang chủ</a>
        </div>
    </div>
    `
}

export default Header;