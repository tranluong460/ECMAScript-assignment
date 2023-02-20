const checkRole = function () {
    let role = localStorage.getItem('role')
    if (role !== 'Admin') {
        alert("Bạn không phải là Admin, không thể vào trang này")
        window.location.href = "/"
    }
}

export default checkRole