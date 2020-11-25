// Add your code here
console.log('Hello World')

let url = "http://localhost:3000/dog"

// i can prewrite data and configs
let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};

let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

// I can also write on the fly

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type":'application/json',
        "Accept": "application/json"
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle"
    })
});
