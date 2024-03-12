const name = 'mohit'
const repo = 25
console.log(`My name is ${name} and i have ${repo} repository in my github account`)

console.log(name[0])
console.log(name.toUpperCase())
console.log(name.charAt(2))
console.log(name.indexOf('t'))

const newString = name.substring(0,2)  //it is used to to make sub string from a string it always start from 0
console.log(newString)

const anotherString = name.slice(-4,0) //it is also used to make substring from a string but it can take negative value and start printing from reverse
console.log(anotherString)

const stringone= "        mohit        "
console.log(stringone)
console.log(stringone.trim()) // trim function is used to remove unusual space from a string

const url= "https:/mohit.com/mohit@#20varshney"
console.log(url.replace('@#20', '__')) // replace is used o replace thing from a string or a url