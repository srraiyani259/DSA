let wm = new WeakMap

let object1 = {
    "name":"SR"
}
let object2 = {
    "name":"AB"
}

wm.set(object1,"SR's")
wm.set(object2,"SR's")
wm.delete(object1)
console.log(wm)
console.log(wm.get(object2))
console.log("Set Has Second Object ?? " + wm.has(object2))