import { useEffect } from "../../../../lib/index"
import Background_register from "./components/background"

const Register = function () {
    document.title = "Đăng ký";

    useEffect(function () {
        document.getElementById("btn_submit").addEventListener("click", function () {
            const newUser = {
                "name": document.querySelector("#username").value,
                "images": "../src/images/XHXH7853.jpg",
                "email": document.querySelector("#email").value,
                "password": document.querySelector("#password").value,
                "address": document.querySelector("#address").value,
                "phone": document.querySelector("#phone").value,
                "role": "User",
            }
            fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })

            window.location.href = "/login"
        })
    })

    return /*html*/`
    <div class="lg:flex">
    
        ${Background_register()}

        <div class="lg:w-1/2 xl:max-w-screen-sm">
            <div class="mt-5 px-7 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">
                    Đăng Ký
                </h2>

                <div class="mt-4">
                        <div>
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Tên người dùng</div>
                            <input id="username" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="luong@gmail.com" autocomplete="off">
                        </div>

                        <div class="mt-4">
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                            <input id="email" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Trần Văn Lương" autocomplete="off">
                        </div>

                        <div class="mt-4">
                            <div class="flex justify-between items-center">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>
                            </div>
                            <input id="password" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Mời nhập mật khẩu" autocomplete="off">
                        </div>

                        <div class="mt-4">
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Số điện thoại</div>
                            <input id="phone" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="0123456789" autocomplete="off">
                        </div>

                        <div class="mt-4">
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Địa chỉ</div>
                            <input id="address" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text" placeholder="Bắc Giang" autocomplete="off">
                        </div>

                        <div class="mt-5">
                            <button id="btn_submit" class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                                Đăng ký
                            </button>
                        </div>
                    
                    <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Đã có tài khoản ? 
                        <a href="/login" class="cursor-pointer text-indigo-600 hover:text-indigo-800">
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

export default Register