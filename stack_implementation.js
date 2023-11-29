
// class for each node within the stack
class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

// create a class for the stack
class Stack 
{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }   
                    
    // The push method.
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }    
        else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    // The pop method.
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value   
    }   
}

const stck = new Stack
stck.push("value1")
stck.push("value2")
stck.push("value3")

console.log(stck.first)     // Node { value: 'value2', next: Node}
console.log(stck.last)      // Node { value: 'value1', next: null}
console.log(stck.size)     // 3

stck.push("value4")
console.log(stck.pop())     // value4
