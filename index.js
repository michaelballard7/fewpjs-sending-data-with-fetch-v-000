

function submitData(name, email){
    let url = "http://localhost:3000/users";
    fetch(url, {
        method:'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name:name,
            email:email
        })
    })
    .then(res => res.json())
    .then(data => {
        let body = document.querySelector('body')
        let p = document.createElement('p')
        p.innerText = `${data.id}`
        body.appendChild(p)
    })
}

























// console.log('Hello World')
//
// let url = "http://localhost:3000/dogs"
//
// // i can prewrite data and configs
// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// };
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };
//
// // I can also write on the fly
//
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type":'application/json',
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// })
// .then( res => res.json())
// .then( data => console.log(data))
// .catch(err => console.log(err))
