// Render
const render = function (component, dom) {
    dom.innerHTML = component
}

export {
    render
}

// Format Price

const priceFormat = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })

export {
    priceFormat
}