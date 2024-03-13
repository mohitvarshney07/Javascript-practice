const myarr= [1,2,3,'mohit','hello',true]
// const arr= ['hello','hi','byy']

// const newarr = new Array(1,2,3,4,5)
// console.log(newarr)
// console.log( typeof myarr)

//************ Array Methods **************** 

// myarr.push(6)
// myarr.push(8)
// myarr.pop()
// myarr.pop()

// myarr.unshift(8)
// myarr.shift()
// console.log(myarr)

// console.log(myarr.includes('hi'))
// console.log(myarr.indexOf(3))

// const newarr = myarr.join()
// console.log(newarr)

//****************** slice and splice ****************** 
// const arr = [1,2,3,4,5]
// console.log('A',arr)
// const arr1 = arr.slice(1,3)
// console.log(arr1)
// console.log('C', arr)

// const arr2= arr.splice(1,3)
// console.log(arr2)
// console.log('D',arr)


// const marvel_heroes= ['Thor','Ironman','Spiderman']
// const dc_heroes = ['flash','batman','superman']
// const indian_heroes = ['shaktiman','veer']

// marvel_heroes.push(dc_heroes,indian_heroes)
// console.log(marvel_heroes)

// const all_heroes = indian_heroes.concat(marvel_heroes,dc_heroes)
 // console.log(all_heroes[3])

// const all_new = [...marvel_heroes, ...dc_heroes, ...indian_heroes]
// console.log(all_new)



// const another_arr = [1,2,3,[3,4,5],6,7,[11,12,[33,44]]]
// console.log(another_arr.flat(Infinity))


console.log(Array.isArray('Mohit'))
console.log(Array.from('Mohit'))