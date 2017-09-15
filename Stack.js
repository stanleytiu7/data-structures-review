class Stack {
	constructor() {
		this.stack = []
	}
	insert(val) {
		this.stack.push(val)
		return this
	}
	remove() {
		this.stack.pop()
		return this
	}
  peek() {
  console.log(this.stack[this.stack.length - 1])
  return this
	}
}

let testStack = new Stack()
	.insert('hello')
	.insert('no')
	.insert(1)
	.insert(2)
  .insert('last')
  .peek()
	.remove()

console.log(testStack)
