import Footer from "../../../components/footer"
import Header from "../../../components/header"
import SlideBarAdmin from "../../../components/slidebar"

const Dashboard = function () {
    return /*html*/`

    ${Header()}

    <div class="mx-auto mt-10">
        <div class="flex shadow-md my-10">

            ${SlideBarAdmin()}

            <div class="bg-white px-10 py-10">
               dashboard
            </div>
        </div>
    </div>

    ${Footer()}
    `
}

export default Dashboard
