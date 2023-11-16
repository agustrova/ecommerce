const productStart = [
    {
        fullname: 'Not Cheese Bastoncitos',
        description:"Not Cheese Bastoncitos x300g - Notco",
        img: "/assets/products/notcheese.png", 
        oldprice: '$1.717,56',
        newprice: '$1.448,87',
    },
    {
        fullname:'Beyond Burger Cookout Classic (8u) x 907g - Beyond Meat',
        description:'Beyond Burger Cookout Classic',
        img: "/assets/products/paty.png", 
        oldprice: '$13.568,83',
        newprice: '$12.159,24',
        },
    {
        fullname: 'Banana Ecuador',
        description: 'Banana Ecuador x 1 Kg',
        img: "/assets/products/bananas.png", 
        oldprice: '$2.667,85',
        newprice: '$2.401,25',
        },
    {
        fullname: 'Franui Black',
        description: 'Franui Black x150g - Franui',
        img: "/assets/products/franui.png", 
        oldprice: '$2.790,34',
        newprice: '$1.953,54',
        },
    {
        fullname: 'Huevos Cruelty Free',
        description: 'Huevos Cruelty Free (6u) - Ovo',
        img: "/assets/products/huevos.png", 
        oldprice: '$1.105,34',
        newprice: '$829,23',
        },
    {
        fullname: 'Not Chicken Mila',
        description: 'Not Chicken Mila x 220g - NotCo',
        img: "/assets/products/notmila.png", 
        oldprice: '$1.490',
        newprice: '$1.338,79',
        },
    {
        fullname: 'Yogurt Vegetal Sabor Coco',
        description: 'Yogurt Vegetal Sabor Coco x 300g - Silk',
        img: "/assets/products/silkCoco.png", 
        oldprice: '$926,55',
        newprice: '$880,23',
        },
    {
        fullname: 'Bebida de Almendras Sin Azucar',
        description: 'Bebida de Almendras Original Sin Azucar x 946ml - Silk',
        img: "/assets/products/silkAlmendras.png", 
        oldprice: '$1.252,33',
        newprice: '$939,25',
        },
    {
        fullname: 'Protein Bar Frutilla',
        description: 'Protein Bar frutilla x46g - Ena',
        img: "/assets/products/proteinbar.png", 
        oldprice: '$780',
        newprice: '$600',
        },
    {
        fullname: 'Barras Laddubar Coco',
        description: 'Barras Laddubar Coco x30g - Golden Monkey',
        img: "/assets/products/barracoco.png", 
        oldprice: '$510,23',
        newprice: '$399,95',
        },
]


if (localStorage.getItem("products") === null) {
    localStorage.setItem("products", JSON.stringify(productStart)
)}