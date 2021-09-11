    let price;
    let p;
    let a = prompt("Введите страну");
    let hot = confirm("Горячий тур?")
    switch (a) {
        case 'Турция':
            p = 100
            price = p; //hot  price -20
            break;
        case 'Египет':
            p = 150
            price = p;
            break;
        case 'Майами':
            p = 200
            price = p;
            break;
        default:
            price = 'Укажите правильно день недели'
    }
    if (hot == true) {
        price = p - (p * 0.2)
    } else {
        price = p + (p * 2)
    }

    alert(price);