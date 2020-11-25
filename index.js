// Add your code here
console.log('Hello World')

let url = "http://localhost:3000/dog"
fetch(url, {
    method: 'POST',
    headers: {'content-type':'application/json'}
})
