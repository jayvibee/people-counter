let prev = document.getElementById("prev")
let countEl = document.getElementById("count-el")

let count = 0
function add(){
    count +=1
    countEl.innerText = count
}
function sav(){
  let v = count + "-"
  prev.innerText += v
  countEl.innerText = 0
  count = 0
}