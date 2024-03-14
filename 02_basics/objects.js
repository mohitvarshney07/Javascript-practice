//object.create ==> singleton

// object literals                in objects we give data in key value pair form

// const sym = Symbol("key1")   //symbol declaration

// const jsuser = {
//     name : 'mohit',
//     age : 22,
//     [sym] : "mykey1",
//     location : 'mathura',
//     gmail : 'mohit@gmail.com',
//     isloggedin : false,
//     loggedindays : ['monday','tuesday']
// }

// console.log(jsuser.gmail)
// console.log(jsuser['gmail'])
// console.log(typeof jsuser[sym])

// jsuser.gmail = 'smart@gmail.com'
// console.log(jsuser)

// jsuser.greeting = function(){
//     console.log("hello js user")
// }
// jsuser.greetingone = function(){
//     console.log(`hello js user, ${this.name}`)
// }

// console.log(jsuser.greeting)
// console.log(jsuser.greeting())
// console.log(jsuser.greetingone)
// console.log(jsuser.greetingone())



//****************************Singleton **********************
//object creation using constructors............

// const tinderuser = new Object()
        //   or we can write it as

    const tinderuser ={}
    tinderuser.id = '123abc'
    tinderuser.name = 'Mohit'
    tinderuser.isloggedin = false
    // console.log(tinderuser)


    const regularuser = {
        email : 'reg@gmail.com',
        fullname : {
            username : {
                firstname : 'Mohit',
                lastname : 'Varshney'
            }
        }
    }
    // console.log(regularuser.fullname.username.firstname)


    // const obj1 = {1 : 'hi', 2: 'hello'}
    // const obj2 = {3: 'byee',4: 'seeyou'}

    // const obj3 = Object.assign({},obj1,obj2)
    // console.log(obj3)
    // console.log(obj3 === obj1)
    // const obj4 ={...obj1, ...obj2,...obj3}
    // console.log(obj4)

    // console.log(tinderuser)
    // console.log(Object.keys(tinderuser))
    // console.log(Object.values(tinderuser))
    // console.log(Object.keys(regularuser))
    // console.log(Object.values(regularuser))

    // console.log(tinderuser.hasOwnProperty('islogged'))


    // destructure of objects
    const course = {
        name : "javascript tutorial",
        price : '999',
        instructor : "mohit"
    }
    const{instructor : teacher, price} = course
    console.log(teacher,price)