
// create a class for each node within the queue.
class Node 
{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// create a class for the queue.
class Queue 
{    
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    // enqueue method receives a value and adds it to the "end" of the queue
    enqueue(val)
    {
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    // dequeue method eliminates the element at the "beginning" of the queue and returns its value.
    dequeue()
    {
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const quickQueue = new Queue
quickQueue.enqueue("value1")
quickQueue.enqueue("value2")
quickQueue.enqueue("value3")

console.log(quickQueue.first)
console.log(quickQueue.last)      // Node { value: 'value3, next: null }
console.log(quickQueue.size)      // 3

quickQueue.enqueue("value4")
console.log(quickQueue.dequeue())    // value1