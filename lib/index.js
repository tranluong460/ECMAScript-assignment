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

// Discount
function discount(original_price, current_seller) {
    const discountValue = ((original_price - current_seller) / original_price) * 100;
    return Math.round(discountValue);
}

export {
    discount
}

// Rating
function rating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

export {
    rating
}