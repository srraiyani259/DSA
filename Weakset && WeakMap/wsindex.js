let ws = new WeakSet

let object1 = {
    "name":"SR"
}
let object2 = {
    "name":"AB"
}

ws.add(object1)
ws.add(object2)

ws.delete(object2)
console.log(ws)
console.log("Set Has Second Object ?? " + ws.has(object2))