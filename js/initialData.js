const productStart = [
    {
        fullname: 'Not Cheese Bastoncitos',
        description:"Not Cheese Bastoncitos x300g - Notco",
        image: "/assets/images/products/notcheese.png", 
        oldprice: '1.717',
        newprice: '1.448',
        category: 'Congelados',
        id: '1',
    },
    {
        fullname:'Beyond Burger Cookout Classic (8u) x907g - Beyond Meat',
        description:'Beyond Burger Cookout Classic',
        image: "/assets/images/products/paty.png", 
        oldprice: '13.883',
        newprice: '12.159',
        category: 'Congelados',
        id: '2',
        },
    {
        fullname: 'Banana Ecuador',
        description: 'Banana Ecuador x1 Kg',
        image: "/assets/images/products/bananas.png", 
        oldprice: '2.667,85',
        newprice: '2.401,25',
        category: 'Frutas',
        id: '3',
        },
    {
        fullname: 'Franui Black',
        description: 'Franui Black x150g - Franui',
        image: "/assets/images/products/franui.png", 
        oldprice: '2.790,34',
        newprice: '1.953,54',
        category: 'Congelados',
        id: '4',
        },
    {
        fullname: 'Huevos Cruelty Free',
        description: 'Huevos Cruelty Free (6u) - Ovo',
        image: "/assets/images/products/huevos.png", 
        oldprice: '1.105,34',
        newprice: '829,23',
        category: 'Alacena',
        id: '5',
        },
    {
        fullname: 'Not Chicken Mila',
        description: 'Not Chicken Mila x220g - NotCo',
        image: "/assets/images/products/notmila.png", 
        oldprice: '1.490',
        newprice: '1.338,79',
        category: 'Congelados',
        id: '6',
        },
    {
        fullname: 'Yogurt Vegetal Sabor Coco',
        description: 'Yogurt Vegetal Sabor Coco x300g - Silk',
        image: "/assets/images/products/silkCoco.png", 
        oldprice: '926,55',
        newprice: '880,23',
        category: 'Lácteos',
        id: '7',
        },
    {
        fullname: 'Bebida de Almendras Sin Azucar',
        description: 'Bebida de Almendras Original Sin Azucar x946ml - Silk',
        image: "/assets/images/products/silkAlmendras.png", 
        oldprice: '1.252,33',
        newprice: '939,25',
        category: 'Bebidas',
        id: '8',
        },
    {
        fullname: 'Protein Bar Frutilla',
        description: 'Protein Bar frutilla x46g - Ena',
        image: "/assets/images/products/proteinbar.png", 
        oldprice: '780',
        newprice: '600',
        category: 'Snacks',
        id: '9',
        },
    {
        fullname: 'Barras Laddubar Coco',
        description: 'Barras Laddubar Coco x30g - Golden Monkey',
        image: "/assets/images/products/barracoco.png", 
        oldprice: '510,23',
        newprice: '399,95',
        category: 'Snacks',
        id: '10',
        },
    {
        fullname: 'Hummus Kyros',
        description: 'Kyros Clásico x230g',
        image: "/assets/images/products/hummus1.png", 
        oldprice: '1400',
        newprice: '1340',
        category: 'Dips',
        id: '11',
        },
    {
        fullname: 'Not Mayo Spicy Squeeze',
        description: 'Mayonesa Not Mayo Spicy Squeeze x325g',
        image: "/assets/images/products/notmayo.webp", 
        oldprice: '1250',
        newprice: '1199',
        category: 'Dips',
        id: '12',
        },
    {
        fullname: 'Granola Candy Canela',
        description: 'Granola Natural Candy Canela x200g',
        image: "/assets/images/products/granola.webp", 
        oldprice: '1200',
        newprice: '1160',
        category: 'Snacks',
        id: '13',
        },
    {
        fullname: 'Mix 4 Frutos Rojos Karinat',
        description: 'Frutas Congeladas Karinat Mix 4 Frutos Rojos x400g',
        image: "/assets/images/products/karinat4berries.webp", 
        oldprice: '370,80',
        newprice: '3500',
        category: 'Congelados',
        id: '14',
        },
    {
        fullname: 'Yogurt Natural Beaudroit Entero',
        description: 'Yogurt Natural Familia Beaudroit Entero x160g',
        image: "/assets/images/products/beaudroit.webp", 
        oldprice: '940',
        newprice: '890',
        category: 'Lácteos',
        id: '15',
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
        rol:'Admin'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
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
        rol:'Client'
        },
]

if (localStorage.getItem("users") === null) {
    localStorage.setItem("users", JSON.stringify(usersStart)
)}