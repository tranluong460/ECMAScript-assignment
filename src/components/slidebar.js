import data from '../../db.json' assert {type: 'json'}

const SlideBar = function () {

    let newListCate = []

    return /*html*/`
    <div class="mx-auto pl-[150px]">
        <div class="grid grid-cols-1">
            <h1 class="text-[13px] leading-[20px] font-normal pl-3 pb-[14px] uppercase text-[#242424]">Danh Mục Sản Phẩm
            </h1>
            ${data.map(function (book, index) {
        if (!newListCate.includes(book.categories.name)) {
            newListCate.push(book.categories.name);
            return /*html*/`
            <a href="/search/?value=cate&cate=${book.categories.name}"
                class="hover:text-red-500 text-[12px] leading-[20px] font-normal pl-3 pb-[8px] text-[#242424]">${book.categories.name}</a>
                `
        }
    }).join('')}
        </div >
    </div >
    `
}

export default SlideBar;