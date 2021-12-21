const fun = (() => {
    if (document.getElementById ('basicPrice').innerText === '$199.99') {
        document.getElementById ('basicPrice').innerText = '$19.99';
    }else if (document.getElementById ('basicPrice').innerText === '$19.99') {
        document.getElementById ('basicPrice').innerText = '$199.99';
    }

    if (document.getElementById ('professionalPrice').innerText === '$249.99') {
        document.getElementById ('professionalPrice').innerText = '$24.99'
    }else if (document.getElementById ('professionalPrice').innerText === '$24.99') {
        document.getElementById ('professionalPrice').innerText = '$249.99'
    }

    if (document.getElementById ('masterPrice').innerText === '$399.99') {
        document.getElementById ('masterPrice').innerText = '$39.99';
    }else if (document.getElementById ('masterPrice').innerText === '$39.99') {
        document.getElementById ('masterPrice').innerText = '$399.99';
    }
})
