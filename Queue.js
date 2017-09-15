class Queue {
	constructor() {
		this.queue = [];
	}
	insert(val) {
		this.queue.push(val);
		return this
	}
	dequeue() {
		if (!this.queue.length) {
			return 'nothing to dequeue!'
		} else {
			this.queue.shift()
			return this
		}
  }
  next(){
  console.log(this.queue[0])
  return this
  }
}

let test = new Queue()
	.insert('hello')
	.insert('second')
  .insert('third')
  .next()
	.dequeue()

console.log(test)
