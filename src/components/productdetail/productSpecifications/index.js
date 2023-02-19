const ProductSpecifications = function (book) {
    return /*html*/`
    <div class="mx-auto mt-1">
        <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Thông tin chi tiết</h1>
        <div class="flex w-[auto] h-[auto] rounded-[4px] mt-3">
            <div class="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
                ${book?.specifications[0]?.attributes.map(function (item) {
        return /*html*/`
                        <p class="mt-[10px] ml-5">${item.name}</p>
                    `
    }).join('')}
            </div>

            <div class="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
                    ${book?.specifications[0]?.attributes.map(function (item) {
        return /*html*/`
                        <p class="mt-[10px] ml-5">${item.value}</p>
                    `
    }).join('')}
            </div>
        </div>
    </div>
    `
}

export default ProductSpecifications