const productStart = [
    {
        fullname: 'Not Cheese Bastoncitos',
        description:"Not Cheese Bastoncitos x300g - Notco",
        image: "/assets/images/products/notcheese.png", 
        oldprice: '$1.717',
        newprice: '$1.448',
        id: '1',
    },
    {
        fullname:'Beyond Burger Cookout Classic (8u) x 907g - Beyond Meat',
        description:'Beyond Burger Cookout Classic',
        image: "/assets/images/products/paty.png", 
        oldprice: '$13.883',
        newprice: '$12.159',
        id: '2',
        },
    {
        fullname: 'Banana Ecuador',
        description: 'Banana Ecuador x 1 Kg',
        image: "/assets/images/products/bananas.png", 
        oldprice: '$2.667,85',
        newprice: '$2.401,25',
        id: '3',
        },
    {
        fullname: 'Franui Black',
        description: 'Franui Black x150g - Franui',
        image: "/assets/images/products/franui.png", 
        oldprice: '$2.790,34',
        newprice: '$1.953,54',
        id: '4',
        },
    {
        fullname: 'Huevos Cruelty Free',
        description: 'Huevos Cruelty Free (6u) - Ovo',
        image: "/assets/images/products/huevos.png", 
        oldprice: '$1.105,34',
        newprice: '$829,23',
        id: '5',
        },
    {
        fullname: 'Not Chicken Mila',
        description: 'Not Chicken Mila x 220g - NotCo',
        image: "/assets/images/products/notmila.png", 
        oldprice: '$1.490',
        newprice: '$1.338,79',
        id: '6',
        },
    {
        fullname: 'Yogurt Vegetal Sabor Coco',
        description: 'Yogurt Vegetal Sabor Coco x 300g - Silk',
        image: "/assets/images/products/silkCoco.png", 
        oldprice: '$926,55',
        newprice: '$880,23',
        id: '7',
        },
    {
        fullname: 'Bebida de Almendras Sin Azucar',
        description: 'Bebida de Almendras Original Sin Azucar x 946ml - Silk',
        image: "/assets/images/products/silkAlmendras.png", 
        oldprice: '$1.252,33',
        newprice: '$939,25',
        id: '8',
        },
    {
        fullname: 'Protein Bar Frutilla',
        description: 'Protein Bar frutilla x46g - Ena',
        image: "/assets/images/products/proteinbar.png", 
        oldprice: '$780',
        newprice: '$600',
        id: '9',
        },
    {
        fullname: 'Barras Laddubar Coco',
        description: 'Barras Laddubar Coco x30g - Golden Monkey',
        image: "/assets/images/products/barracoco.png", 
        oldprice: '$510,23',
        newprice: '$399,95',
        id: '10',
        },
]


if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify(productStart)
)}

const usersStart = [
    {
        fullname: "Agustina Trova",
        age: 29,
        email: "admin@admin.com",
        id: "1",
        active: true,
        password: "admin",
        bornDate: new Date("1994-08-24").getTime(),
        location: "Buenos Aires",
        image:"/assets/images/avatars/agusfoto.jpg",
        role:'Admin'
        },
    {
        fullname: "Alejandro Torres",
        age: 55,
        email: "ale@torres.com",
        id: "2",
        active: false,
        password: "password123",
        bornDate: new Date("1968-05-05").getTime(),
        location: "Rio Negro",
        image:"/assets/images/avatars/hombre1.jpg",
        role:'Client'
        },
    {
        fullname: "Valentina Herrera",
        age: 22,
        email: "valentina@herrera.com",
        id: "3",
        active: true,
        password: "password456",
        bornDate: new Date("1998-05-08").getTime(),
        location: "San Luis",
        image:"/assets/images/avatars/mujer1.jpg",
        role:'Client'
        },
    {
        fullname: "Sebastian Muñoz",
        age: 30,
        email: "sebastian@muñoz.com",
        id: "4",
        active: false,
        password: "password789",
        bornDate: new Date("1993-08-10").getTime(),
        location: "Buenos Aires",
        image:"/assets/images/avatars/hombre2.jpg",
        role:'Client'
        },
    {
        fullname: "Camila Sanchez",
        age: 26,
        email: "camila@sanchez.com",
        id: "5",
        active: true,
        password: "password101",
        bornDate: new Date("1997-02-15").getTime(),
        location: "La Pampa",
        image:"/assets/images/avatars/mujer2.jpg",
        role:'Client'
        },
    {
        fullname: "Facundo Rodriguez",
        age: 32,
        email: "facundo@rodriguez.com",
        id: "6",
        active: false,
        password: "password202",
        bornDate: new Date("1991-07-07").getTime(),
        location: "Formosa",
        image:"/assets/images/avatars/hombre3.jpg",
        role:'Client'
        },
    {
        fullname: "Sofia Lopez",
        age: 29,
        email: "sofia@lopez.com",
        id: "7",
        active: true,
        password: "password303",
        bornDate: new Date("1994-11-11").getTime(),
        location: "Santa Fe",
        image:"/assets/images/avatars/mujer3.jpg",
        role:'Client'
        },
    {
        fullname: "Matias Gonzalez",
        age: 45,
        email: "matias@gonzalez.com",
        id: "8",
        active: false,
        password: "password404",
        bornDate: new Date("1978-12-19").getTime(),
        location: "Entre Rios",
        image: "/assets/images/avatars/hombre4.jpg",
        role:'Client'
    },
    {
        fullname: "Victoria Fernandez",
        age: 44,
        email: "victoria@fernandez.com",
        id: "9",
        active: true,
        password: "password505",
        bornDate: new Date("1979-06-24").getTime(),
        location: "Buenos Aires",
        image:"/assets/images/avatars/mujer4.jpg",
        role:'Client'
        },
    {
        fullname: "Nicolas Castro",
        age: 47,
        email: "nicolas@castro.com",
        id: "10",
        active: false,
        password: "password606",
        bornDate: new Date("1976-03-03").getTime(),
        location: "Rosario",
        image:"/assets/images/avatars/hombre5.jpg",
        role:'Client'
        },
]

if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart)
)}