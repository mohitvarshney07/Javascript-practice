// const num = [1,2,3,4,5,6,7,8,9,10]
// const total = num.reduce(function(acc,curval){
//     console.log(`acc : ${acc} and curval : ${curval}`)
//     return acc + curval
// },0)
// console.log(total)


//using arrow funcion
// const total = num.reduce((acc , curval)=> acc+curval,0)
// console.log(total)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const bill = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(bill)