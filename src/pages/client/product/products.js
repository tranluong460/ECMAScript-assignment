import { useEffect, useState } from "../../../../lib/index";
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import SlideBar from "../../../components/slidebar"
import ListProduct from "./components/listProduct";

const ProductPage = function () {
    const [data, setData] = useState([])

    useEffect(function () {
        fetch('http://localhost:3000/books/')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setData(data)
            });
    }, [])

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
                    <button class="hover:text-red-500">Phổ biến</button>
                    <button class="hover:text-red-500">Bán chạy</button>
                    <button class="hover:text-red-500">Hàng mới</button>
                    <button class="hover:text-red-500">Giá thấp</button>
                    <button class="hover:text-red-500">Giá cao</button>
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

            ${ListProduct(data)}
            
        </div >
    </div>

    ${Footer()}
`
}

export default ProductPage