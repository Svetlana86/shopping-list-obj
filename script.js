const shopList = document.querySelector('.shop-list');

let arrObjShopList = [{property:'Молочный продукт', name:'Молоко', position:1, price:119},
    {property:'Фрукты', name:'Яблоки', position:2, price:80},
    {property:'Овощи', name:'Картофель', position:3, price:67},
    {property:'Полуфабрикаты', name:'Пельмени', position:4, price:299}];

for (const iterator of arrObjShopList) {
    let objShopItem = iterator;
    let listItem = document.createElement('li');
    listItem.innerHTML = `${objShopItem.position}) ${objShopItem.name} (${objShopItem.property}) - ${objShopItem.price} руб.`;
    if(objShopItem.price>100) listItem.style.color = 'red';
    else listItem.style.color = 'green';
    shopList.appendChild(listItem);          
    
}



