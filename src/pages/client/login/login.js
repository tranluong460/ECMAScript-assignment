import { useEffect, useState } from "../../../../lib/index"
import Background_login from "./components/background"

const Login = function () {
    document.title = "Đăng nhập";

    const [data, setData] = useState([])
    useEffect(function () {
        fetch('http://localhost:3000/users')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

    useEffect(function () {
        document.getElementById("btn_submit").addEventListener("click", function () {
            const username = document.getElementById("username").value
            const password = document.getElementById("password").value
            data.forEach(function (data) {
                if (data.email == username && data.password == password) {
                    localStorage.setItem("isLogin", "true")
                    localStorage.setItem("idUser", data.id)
                    localStorage.setItem("role", data.role)
                }
            })
        })
        const isLogin = localStorage.getItem("isLogin")
        if (isLogin === 'true') {
            window.location.href = "http://localhost:5173/"
        }
    })

    return /*html*/`
    <div class="lg:flex">
        <div class="lg:w-1/2 xl:max-w-screen-sm">
            <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div class="cursor-pointer flex items-center">
                    <a href="/" class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                        TIKI
                    </a>
                </div>
            </div>

            <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">
                    Đăng Nhập
                </h2>

                <div class="mt-12">
                    <form>
                        <div>
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                            <input id="username" type="text" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="luong@gmail.com" autocomplete="off">
                        </div>
                        
                        <div class="mt-8">
                            <div class="flex justify-between items-center">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>

                                <div>
                                    <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>

                            <input id="password" type="password" class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Mời nhập mật khẩu" autocomplete="off">
                        </div>

                        <div class="mt-10">
                            <button id="btn_submit" class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                    <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Chưa có tài khoản ? 
                        <a href="/register" class="cursor-pointer text-indigo-600 hover:text-indigo-800">
                            Đăng ký
                        </a>
                    </div>
                </div>
            </div>
        </div>
            
        ${Background_login()}

    </div>
    `
}

export default Login