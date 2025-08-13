let parents = document.getElementById("parents")
let input = document.getElementById("input")
let button = document.getElementById("btn")


let data = [
    {
        img: "./img/image10(1).png",
        name: "Mars rug",
        coin: 100,
        number: 24,
    }, {
        img: "./img/image22.png",
        name: "Keyboard sticker",
        coin: 49,
        number: 11
    }, {
        img: "./img/img23.png",
        name: "Smart watch",
        coin: 899,
        number: 4
    }, {
        img: "./img/image24.png",
        name: "Wireless keyboard",
        coin: 350,
        number: 0,
    }, {
        img: "./img/image25.png",
        name: "Mouse",
        coin: 359,
        number: 24,
    }, {
        img: "./img/image26.png",
        name: "AirPods",
        coin: 499,
        number: 11,
    }, {
        img: "./img/image27.png",
        name: "Powerbank",
        coin: 899,
        number: 5
    }, {
        img: "./img/image28.png",
        name: "USB flash drive",
        coin: 299,
        number: 21,
    }, {
        img: "./img/image29.png",
        name: "Smartphone",
        coin: 3699,
        number: 2,
    }, {
        img: "./img/image30.png",
        name: "Playstation",
        coin: 7449,
        number: 0,
    }, {
        img: "./img/image31.png",
        name: "Yandex station",
        coin: 1999,
        number: 4,
    }, {
        img: "./img/image32.png",
        name: "Planshet Samsung",
        coin: 4999,
        number: 24,
    }
]


let getProducts = function(products){

    parents.innerHTML = ""
    products.map((item) => {
        let div = document.createElement("div")
    
        div.classList.add("white_div")
    
        div.innerHTML = `
             <img class="black_img" src=${item.img} alt="">
                            <p class="white_p">${item.name}</p>
                            <p class="green_p"> <img src="./img/Coin 1.png" alt=""> ${item.coin} coins</p>
                            <p class="smoke_p"> ${item.number} dona mavjud</p>
        `
    
        parents.appendChild(div)
    })
}

getProducts(data)


let filteredProduct = function(){
    let filtered = data.filter((item)=>{
        return item.name === input.value
    })

    getProducts(filtered)

}

button.addEventListener("click",filteredProduct)