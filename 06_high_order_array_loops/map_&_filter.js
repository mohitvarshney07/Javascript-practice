// //example using filter
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// let userfilter = books.filter((book)=> book.genre === 'Non-Fiction')
// let user = books.filter((bk)=> bk.edition === 2010)
// console.log(user)
// console.log(userfilter)



//example using map
let mynum = [1,2,3,4,5,6,7,8,9,10]
// const newnum = mynum.map((n)=> n +20)
// console.log(newnum)

const newnum= mynum.map((n)=> n*10)
                   .map((n)=>n+5)
                   .filter((n)=> n>30)
console.log(newnum)