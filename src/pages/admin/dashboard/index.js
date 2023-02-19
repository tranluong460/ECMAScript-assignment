import Footer from "../../../components/footer"
import Header from "../../../components/header"
import SlideBarAdmin from "../../../components/slidebar_admin"

const Dashboard = function () {
    return /*html*/`

    ${Header()}

    <div class="mx-auto mt-10">
        <div class="flex shadow-md my-10">

            ${SlideBarAdmin()}

            <div class="w-full bg-white px-10 py-10">
                <div class="flex flex-wrap -mx-3" >
                    <!-- card1 -->
                    <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div class="relative flex flex-col min-w-0 break-word shadow-soft-xl rounded-2xl bg-clip-border" style="background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)">
                            <div class="flex-auto p-4">
                                <div class="flex flex-row -mx-3">
                                    <div class="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p class="mb-0 font-sans font-semibold leading-normal text-sm">Tiền hôm nay</p>
                                            <h5 class="mb-0 font-bold">
                                                1,200,000đ
                                                <span class="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                                            </h5>
                                        </div>
                                    </div>

                                    <div class="px-3 text-right basis-1/3">
                                        <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i class="fas fa-coins leading-none text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- card2 -->
                    <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div class="relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border" style="background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)">
                            <div class="flex-auto p-4">
                                <div class="flex flex-row -mx-3">
                                    <div class="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p class="mb-0 font-sans font-semibold leading-normal text-sm">Người dùng hôm nay</p>
                                            <h5 class="mb-0 font-bold">
                                                10
                                            <span class="leading-normal text-sm font-weight-bolder text-lime-500">+3%</span>
                                            </h5>
                                        </div>
                                    </div>

                                    <div class="px-3 text-right basis-1/3">
                                        <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i class="fas fa-users leading-none text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <!-- card3 -->
                    <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                        <div class="relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border" style="background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)">
                            <div class="flex-auto p-4">
                                <div class="flex flex-row -mx-3">
                                    <div class="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p class="mb-0 font-sans font-semibold leading-normal text-sm">Khách hàng mới</p>
                                            <h5 class="mb-0 font-bold">
                                                +5
                                                <span class="leading-normal text-red-600 text-sm font-weight-bolder">+2%</span>
                                            </h5>
                                        </div>
                                    </div>

                                    <div class="px-3 text-right basis-1/3">
                                        <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i class="fa fa-paper-plane leading-none text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <!-- card4 -->
                    <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                        <div class="relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border"  style="background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)">
                            <div class="flex-auto p-4">
                                <div class="flex flex-row -mx-3">
                                    <div class="flex-none w-2/3 max-w-full px-3">
                                        <div>
                                            <p class="mb-0 font-sans font-semibold leading-normal text-sm">Doanh thu</p>
                                            <h5 class="mb-0 font-bold">
                                            700,000đ
                                            <span class="leading-normal text-sm font-weight-bolder text-lime-500">+5%</span>
                                            </h5>
                                        </div>
                                    </div>

                                    <div class="px-3 text-right basis-1/3">
                                        <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                                            <i class="fa fa-balance-scale leading-none text-lg relative top-3.5 text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     

                <div class="flex flex-wrap mt-6 -mx-3">
                    <div class="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                        <div class="relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border bg-blue-100">
                            <div class="flex-auto p-4">
                                <div class="flex flex-wrap -mx-3">
                                    <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
                                        <div class="flex flex-col h-full">
                                            <p class="pt-2 mb-1 font-semibold">Được xây dựng bởi nhà phát triển</p>
                                            <h5 class="font-bold">Trần Văn Lương</h5>
                                            <p class="mt-3">Từ màu sắc, thẻ, kiểu chữ đến các yếu tố phức tạp..</p>
                                            <a class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="../src/images/XHXH7853.jpg">
                                                Đọc thêm
                                                <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none" >
                                        <div class="h-ful rounded-xl">
                                            <img src="../src/images/waves-white.svg" class="absolute top-0 hidden w-1/2 h-full lg:block" alt="waves">
                                            <div class="relative flex items-center justify-center h-full">
                                                <img class="relative z-20 w-[110px] rounded-[50%]" src="../src/images/XHXH7853.jpg" alt="rocket">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
                        <div class="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
                            <div class="relative h-full overflow-hidden bg-cover rounded-xl" style="background-image: url('../src/images/ivancik.jpg')">
                                <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
                                <div class="relative z-10 flex flex-col flex-auto h-full p-4">
                                    <h5 class="pt-2 mb-6 font-bold text-white">Làm việc với Lương</h5>
                                    <p class="text-white">Hãy nắm bắt cơ hội</p>
                                    <a class="mt-auto mb-0 font-semibold leading-normal text-white group text-sm" href="javascript:;">
                                        Đọc thêm
                                        <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="flex flex-wrap my-6 -mx-3">
                    <div class="w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-2/3 lg:flex-none">
                        <div class="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                <div class="flex flex-wrap mt-0 -mx-3">
                                    <div class="flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
                                        <h6>Dự án</h6>
                                        <p class="mb-0 leading-normal text-sm">
                                            <i class="fa fa-check text-cyan-500" aria-hidden="true"></i>
                                            Hoàn thành trong
                                            <span class="ml-1 font-semibold">1 tháng</span>
                                        </p>
                                    </div>

                                    <div class="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
                                        <div class="relative pr-6 lg:float-right">
                                            <a dropdown-trigger="" class="cursor-pointer" aria-expanded="false">
                                                <i class="fa fa-ellipsis-v text-slate-400" aria-hidden="true"></i>
                                            </a>

                                            <p class="hidden transform-dropdown-show"></p>

                                            <ul dropdown-menu="" class="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']">
                                                <li class="relative">
                                                    <a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Action</a>
                                                </li>

                                                <li class="relative">
                                                    <a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Another action</a>
                                                </li>

                                                <li class="relative">
                                                    <a class="py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300" href="javascript:;">Something else here</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                <div class="flex-auto p-6 px-0 pb-2">
                                    <div class="overflow-x-auto ps">
                                        <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                                                <thead class="align-bottom">
                                                    <tr>
                                                        <th class="px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Companies</th>
                                                        <th class="px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Members</th>
                                                        <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Budget</th>
                                                        <th class="px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70">Completion</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="flex px-2 py-1">
                                                                <div>
                                                                    <img src="../src/images/XHXH7853.jpg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="xd">
                                                                </div>

                                                                <div class="flex flex-col justify-center">
                                                                    <h6 class="mb-0 leading-normal text-sm">Soft UI XD Version</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="mt-2 avatar-group">
                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team1">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(617.6px, 573.867px);">
                                                                    Ryan Tompson
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team2">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(630.4px, 573.867px);">
                                                                    Romina Hadid
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team3">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(642.133px, 573.867px);">
                                                                    Alexander Smith
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team4">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(653.867px, 573.867px);">
                                                                    Jessica Doe
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                                                            <span class="font-semibold leading-tight text-xs"> $14,000 </span>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="w-3/4 mx-auto">
                                                                <div>
                                                                    <div>
                                                                        <span class="font-semibold leading-tight text-xs">60%</span>
                                                                    </div>
                                                                </div>

                                                                <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                    <div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="flex px-2 py-1">
                                                                <div>
                                                                    <img src="../src/images/XHXH7853.jpg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="atlassian">
                                                                </div>
                                                                <div class="flex flex-col justify-center">
                                                                    <h6 class="mb-0 leading-normal text-sm">Add Progress Track</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="mt-2 avatar-group">
                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team5">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(617.6px, 635.733px);">
                                                                    Romina Hadid
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team6">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(630.4px, 635.733px);">
                                                                    Jessica Doe
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                                                            <span n class="font-semibold leading-tight text-xs"> $3,000 </span>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="w-3/4 mx-auto">
                                                                <div>
                                                                    <div>
                                                                        <span class="font-semibold leading-tight text-xs">10%</span>
                                                                    </div>
                                                                </div>
                                                                <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                    <div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 w-1/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="flex px-2 py-1">
                                                                <div>
                                                                    <img src="../src/images/XHXH7853.jpg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="team7">
                                                                </div>

                                                                <div class="flex flex-col justify-center">
                                                                    <h6 class="mb-0 leading-normal text-sm">Fix Platform Errors</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="mt-2 avatar-group">
                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team8">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(617.6px, 698.667px);">
                                                                    Romina Hadid
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="team9">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(630.4px, 698.667px);">
                                                                    Jessica Doe
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                                                            <span class="font-semibold leading-tight text-xs"> Not set </span>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="w-3/4 mx-auto">
                                                                <div>
                                                                    <div>
                                                                        <span class="font-semibold leading-tight text-xs">100%</span>
                                                                    </div>
                                                                </div>

                                                                <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                    <div class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="flex px-2 py-1">
                                                                <div>
                                                                    <img src="../src/images/XHXH7853.jpg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="spotify">
                                                                </div>

                                                                <div class="flex flex-col justify-center">
                                                                    <h6 class="mb-0 leading-normal text-sm">Launch our Mobile App</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="mt-2 avatar-group">
                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user1">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(617.6px, 760.533px);">
                                                                    Ryan Tompson
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user2">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(630.4px, 760.533px);">
                                                                    Romina Hadid
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user3">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(642.133px, 760.533px);">
                                                                    Alexander Smith
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user4">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(653.867px, 760.533px);">
                                                                    Jessica Doe
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                                                            <span class="font-semibold leading-tight text-xs"> $20,500 </span>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="w-3/4 mx-auto">
                                                                <div>
                                                                    <div>
                                                                        <span class="font-semibold leading-tight text-xs">100%</span>
                                                                    </div>
                                                                </div>

                                                                <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                    <div class="duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="flex px-2 py-1">
                                                                <div>
                                                                    <img src="../src/images/XHXH7853.jpg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="jira">
                                                                </div>

                                                                <div class="flex flex-col justify-center">
                                                                    <h6 class="mb-0 leading-normal text-sm">Add the New Pricing Page</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="mt-2 avatar-group">
                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user5">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(617.6px, 822.4px);">
                                                                    Ryan Tompson
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap">
                                                            <span class="font-semibold leading-tight text-xs"> $500 </span>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap">
                                                            <div class="w-3/4 mx-auto">
                                                                <div>
                                                                    <div>
                                                                        <span class="font-semibold leading-tight text-xs">25%</span>
                                                                    </div>
                                                                </div>

                                                                <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                    <div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                                                            <div class="flex px-2 py-1">
                                                                <div>
                                                                    <img src="../src/images/XHXH7853.jpg" class="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="invision">
                                                                </div>

                                                                <div class="flex flex-col justify-center">
                                                                    <h6 class="mb-0 leading-normal text-sm">Redesign New Online Shop</h6>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                                                            <div class="mt-2 avatar-group">
                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user6">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(617.6px, 884.267px);">
                                                                    Ryan Tompson
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>

                                                                <a href="javascript:;" class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                                    <img src="../src/images/XHXH7853.jpg" class="w-full rounded-full" alt="user7">
                                                                </a>

                                                                <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(630.4px, 884.267px);">
                                                                    Jessica Doe
                                                                    <div class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(0px, 0px);">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap">
                                                            <span class="font-semibold leading-tight text-xs"> $2,000 </span>
                                                        </td>

                                                        <td class="p-2 align-middle bg-transparent border-0 whitespace-nowrap">
                                                            <div class="w-3/4 mx-auto">
                                                                <div>
                                                                    <div>
                                                                        <span class="font-semibold leading-tight text-xs">40%</span>
                                                                    </div>
                                                                </div>

                                                                <div class="text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200">
                                                                    <div class="duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                                                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;">
                                                </div>
                                            </div>

                                            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                                                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- card 2 -->
                            <div class="w-full max-w-full px-3 md:w-1/2 md:flex-none lg:w-1/3 lg:flex-none">
                                <div class="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                                    <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0">
                                        <h6>Tổng quan về đơn hàng</h6>
                                        <p class="leading-normal text-sm">
                                        <i class="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
                                        <span class="font-semibold">24%</span> tháng này
                                        </p>
                                    </div>

                                    <div class="flex-auto p-4">
                                        <div class="before:border-r-solid relative before:absolute before:top-0 before:left-4 before:h-full before:border-r-2 before:border-r-slate-100 before:content-[''] before:lg:-ml-px">

                                        <div class="relative mb-4 mt-0 after:clear-both after:table after:content-['']">
                                            <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                            <i class="fa fa-bell relative z-10 text-transparent leading-none leading-pro bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text fill-transparent"></i>
                                            </span>
                                            <div class="ml-11 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                                <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">1,000,000đ, Thay đổi thiết kế</h6>
                                                <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">Ngày 22 tháng 12, 7:20 PM</p>
                                            </div>
                                        </div>

                                        <div class="relative mb-4 after:clear-both after:table after:content-['']">
                                            <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                            <i class="fab fa-html5 relative z-10 text-transparent leading-none leading-pro bg-gradient-to-tl from-red-600 to-rose-400 bg-clip-text fill-transparent"></i>
                                            </span>
                                            <div class="ml-11 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                                <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">Đơn hàng mới #1832412</h6>
                                                <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">Ngày 21 tháng 12, 11:00 PM</p>
                                            </div>
                                        </div>

                                        <div class="relative mb-4 after:clear-both after:table after:content-['']">
                                            <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                            <i class="fa fa-shopping-cart relative z-10 text-transparent leading-none leading-pro bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text fill-transparent"></i>
                                            </span>
                                            <div class="ml-11 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                            <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">Thanh toán Server cho tháng 4</h6>
                                            <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">Ngày 21 tháng 12, 9:34 PM</p>
                                            </div>
                                        </div>

                                        <div class="relative mb-4 after:clear-both after:table after:content-['']">
                                            <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                            <i class="fa fa-credit-card relative z-10 text-transparent leading-none leading-pro bg-gradient-to-tl from-red-500 to-yellow-400 bg-clip-text fill-transparent"></i>
                                            </span>
                                            <div class="ml-11 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                            <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">Thêm thẻ mới cho đơn hàng #4395133</h6>
                                            <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">Ngày 20 tháng 12, 2:20 AM</p>
                                            </div>
                                        </div>

                                        <div class="relative mb-4 after:clear-both after:table after:content-['']">
                                            <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                            <i class="fa fa-key relative z-10 text-transparent leading-none leading-pro bg-gradient-to-tl from-purple-700 to-pink-500 bg-clip-text fill-transparent"></i>
                                            </span>
                                            <div class="ml-11 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                            <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">Mở khóa các gói để phát triển</h6>
                                            <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">Ngày 18 tháng 12, 4:54 AM</p>
                                            </div>
                                        </div>

                                        <div class="relative mb-0 after:clear-both after:table after:content-['']">
                                            <span class="w-6.5 h-6.5 text-base absolute left-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-full bg-white text-center font-semibold">
                                            <i class="fa fa-coins relative z-10 text-transparent leading-none leading-pro bg-gradient-to-tl from-gray-900 to-slate-800 bg-clip-text fill-transparent"></i>
                                            </span>
                                            <div class="ml-11 pt-1.4 lg:max-w-120 relative -top-1.5 w-auto">
                                            <h6 class="mb-0 font-semibold leading-normal text-sm text-slate-700">Đơn hàng mới #9583120</h6>
                                            <p class="mt-1 mb-0 font-semibold leading-tight text-xs text-slate-400">Ngày 17 tháng 12, 3:00 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    ${Footer()}
    `
}

export default Dashboard
