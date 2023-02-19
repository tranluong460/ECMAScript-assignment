import { useEffect, useState } from "../../lib";

const Header = function () {
    const [data, setData] = useState([])
    const id_user = localStorage.getItem("idUser")

    useEffect(function () {
        fetch(`http://localhost:3000/users/${id_user}`)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

    useEffect(function () {
        const searchInput = document.getElementById("searchInput")
        const searchBtn = document.getElementById("searchBtn")
        const isLogin = localStorage.getItem("isLogin")
        const role = localStorage.getItem("role")

        if (isLogin === 'true') {
            document.getElementById("login").innerHTML = /*html*/`
                <img src="${data.images}" class="w-[32px] h-[32px] rounded-[50%]">
                <div id="logout" class="flex mt-2 ml-3 hover:text-red-500">
                    <p>${data.name}</p>
                    <i class="fa fa-caret-down mt-1 ml-1"></i>
                </div>
                <div id="admin" class="ml-2 mt-2 hover:text-red-500">
                    
                </div>
            `
            const logout = document.getElementById("logout")
            logout.addEventListener("click", function () {
                localStorage.removeItem("isLogin")
                localStorage.removeItem("idUser")
                window.location.href = "http://localhost:5173/"
            })

            if (role === "Admin") {
                document.getElementById("admin").innerHTML = /*html*/`
                <a href="/adminproducts"><i class="fas fa-user-tie"></i></a>
                `
            }

        }
        else {
            document.getElementById("login").innerHTML = /*html*/`
            <a href="/login" class="hover:text-red-500">Đăng nhập</a> / 
            <a href="/register" class="hover:text-red-500">Đăng kí</a>
            `
        }

        searchBtn.addEventListener("click", function () {
            const keyword = searchInput.value.replace(/[^a-zA-Z0-9\s]/g, "")
            if (!keyword) {
                message.innerHTML = "Vui lòng nhập thông tin cần tìm kiếm";
                message.classList.remove('hidden');
                return;
            }
            else {
                window.location.href = '/search/?keyword=' + keyword
            }
        });

        document.getElementById("searchInput").addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                document.getElementById("searchBtn").click();
            }
        });

        if (sessionStorage.getItem("cart")) {
            document.getElementById("length").innerHTML = `<p class="text-[#242424] text-[13px] leading-[20px] text-center font-normal">${JSON.parse(sessionStorage.getItem("cart")).length}</p>`;
        }
    })

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
                <button id="searchBtn" class="bg-[#0D5CB6] h-[40px] w-[120px] text-white flex hover:bg-blue-900 ">
                    <img src="../src/images/Search.png" alt="" class="w-[20px] h-[20px] mt-[11px] ml-5">
                    <p class="text-[13px] font-normal leading-[15px] mt-3 ml-1">Tìm kiếm</p>
                </button>
                <div id="message" class="absolute hidden text-red-600 text-[14px] font-normal leading-[20px] mt-11 ml-5"></div>
            </div>

            <div class="flex my-auto" id="login">
                
            </div>

            <div class="text-white my-auto">
                <div class="my-auto text-white flex">
                    <img src="../src/images/Cart.png" alt="" class="w-[32px] h-[32px] ml-5">

                    <a href="/cart" class="text-[11px] mt-4 ml-1 font-normal leading-[14px] hover:text-red-500">Giỏ hàng</a>

                    <div id="length" class="absolute w-[21px] h-[20px] bg-[#FDD835] rounded-[40px] ml-10">
                        <p class="text-[#242424] text-[13px] leading-[20px] text-center font-normal">0</p>
                    </div>
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