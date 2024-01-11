// console.log();

// let heading = document.querySelector("h1");
// heading.innerHTML = "ajaude michael";

//  let username = document.getElementById("username");
// console.log(username)

// function userName(){
//     let name = prompt("what is your name")
//      username.innerHTML = name;
// }

// userName();

let friendlist = document.getElementById('friendlist');
let friends = ['tolu', 'dami', 'chika', 'chidinma', 'mike']
console.log(friendlist)

for (let friend of friends) {
    let li = document.createElement('li')
    li.innerHTML = friend;
    friendlist.appendChild(li)
}
