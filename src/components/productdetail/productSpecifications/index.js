const ProductSpecifications = function (book) {
    return /*html*/`
    <div class="mx-auto mt-1">
        <h1 class="text-[20px] leading-[32px] font-normal text-[#333333]">Thông tin chi tiết</h1>
        <div class="flex w-[auto] h-[auto] rounded-[4px] mt-3">
            <div class="text-[13px] leading-[21px] font-normal text-[#4F4F4F] bg-[#EFEFEF] w-[250px]">
                <p class="mt-[10px] ml-5">${book?.specifications[0]?.attributes[0]?.name ?? ''}</p>
                <p class="mt-[20px] ml-5">${book?.specifications[0]?.attributes[1]?.name ?? ''}</p>
                <p class="mt-[20px] ml-5">${book?.specifications[0]?.attributes[2]?.name ?? ''}</p>
                <p class="mt-[20px] ml-5">${book?.specifications[0]?.attributes[3]?.name ?? ''}</p>
                <p class="mt-[20px] ml-5">${book?.specifications[0]?.attributes[4]?.name ?? ''}</p>
                <p class="mt-[20px] ml-5">${book?.specifications[0]?.attributes[5]?.name ?? ''}</p>
                <p class="mt-[20px] ml-5">${book?.specifications[0]?.attributes[6]?.name ?? ''}</p>
            </div>

            <div class="text-[13px] leading-[21px] font-normal text-[#242424] ml-3">
                <p class="mt-[10px]">${book?.specifications[0]?.attributes[0]?.value ?? ''}</p>
                <p class="mt-[20px]">${book?.specifications[0]?.attributes[1]?.value ?? ''}</p>
                <p class="mt-[20px]">${book?.specifications[0]?.attributes[2]?.value ?? ''}</p>
                <p class="mt-[20px]">${book?.specifications[0]?.attributes[3]?.value ?? ''}</p>
                <p class="mt-[20px]">${book?.specifications[0]?.attributes[4]?.value ?? ''}</p>
                <p class="mt-[20px]">${book?.specifications[0]?.attributes[5]?.value ?? ''}</p>
                <p class="mt-[20px]">${book?.specifications[0]?.attributes[6]?.value ?? ''}</p>
            </div>
        </div>
    </div>
    `
}

export default ProductSpecifications