const accountId = 12234
var accountEmail = "var@gmail.com"
let accountPassword = "991755"
accountCity = "jaipur"
let account
console.table([accountId,accountEmail,accountPassword,accountCity,account])

// prefer not to use var because of block scope issue in javascript

accountEmail = "moh@gmail.com"
accountPassword = "20303"
accountCity = "bengaluru"
account = "10000"
console.table([account,accountEmail,accountId,accountPassword,accountCity])