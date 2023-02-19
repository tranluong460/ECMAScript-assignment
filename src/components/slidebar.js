const SlideBar = function () {

    let newListCate = []

    fetch('http://localhost:3000/books')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            document.getElementById('categories').innerHTML = data.map(function (book, index) {
                if (!newListCate.includes(book.categories.name)) {
                    newListCate.push(book.categories.name);
                    return /*html*/`
                        <a href="/search/?cate_id=${book.categories.id}"
                        class="hover:text-red-500 text-[12px] leading-[20px] font-normal pl-3 pb-[8px] text-[#242424]">${book.categories.name}</a>
                        `
                }
            }).join('')
        })
        .catch(error => {
            console.error('Error:', error);
        });
    return /*html*/`
    <div class="mx-auto pl-[150px]">
        <h1 class="text-[13px] leading-[20px] font-normal pl-3 pb-[14px] uppercase text-[#242424]">Danh Mục Sản Phẩm
        </h1>

        <div id="categories" class="grid grid-cols-1">
            
        </div >
    </div >
    `
}

export default SlideBar;