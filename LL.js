class LL {
	constructor() {
		this.head = null
		this.tail = null
	}

	insert(val) {
		//insert into null case
		if (!this.head) {
			this.head = this.tail = {
				val,
				next: null,
				previous: null
			}
		}
		//insert into one case
		else if (!this.head.next) {
			this.tail = this.head.next = {
				val,
				next: null,
				previous: this.head
			}
		}
		//insert into many case
		else {
			let pointer = this.head;
			while (pointer) {
				if (!pointer.next) {
					pointer.next = {
						val,
						next: null,
						previous: pointer
					}
					this.tail = pointer.next
					pointer = null;
				} else {
					pointer = pointer.next
				}
			}
		}
		return this
	}

	removeFromHead() {
		if (!this.head) {
			return 'Error: No node to remove!'
		}
		if (!this.head.next) {
			this.head = null
			this.tail = null
			return 'Node Removed! Empty List!'
		} else {
			this.head = this.head.next
			this.head.previous = null
		}
		return this
	}

	removeFromTail() {
		if (!this.tail) {
			return 'no node'
		}
		if (!this.tail.previous) {
			this.head = this.tail = null
			return 'Node Removed! Empty List!'
		} else {
			this.tail = this.tail.previous
			this.tail.next = null
		}
		return this
	}

	traverseFromHead() {
		if (!this.head) return 'Nothing to print'
		let printArray = [this.head.val]
		let pointer = this.head.next
		while (pointer) {
			if (pointer) printArray.push(pointer.val)
			pointer = pointer.next
		}
		return printArray
	}

	traverseFromTail() {
		if (!this.tail) return 'Nothing to print'
		let printArray = [this.tail.val]
		let pointer = this.tail.previous
		while (pointer) {
			if (pointer) printArray.push(pointer.val)
			pointer = pointer.previous
		}
		return printArray
	}

	//removeValue(val){
	//if(!this.head) return 'No list'

	//}
}

let cool = new LL()
	.insert(1)
	.insert(2)
	.insert(1)
	.insert('hello')

let cool1 = new LL()
	.insert(1)
	.insert('leftover')
	.insert(1)

let coolAfter = new LL()
	.insert(1)
	.insert('leftover')
	.insert(1)
	.removeFromHead()
	.removeFromTail()
let test1 = new LL()
	.removeFromHead();
let test2 = new LL()
	.insert(1)
	.removeFromHead()

console.log('This is a doubly linked list!!====== \n\n', cool, '\n\n')
console.log('Remove from Head and Tail!====== \n\n', cool1,  '\n\n', coolAfter, '\n\n')
console.log('Error checking!!=======\n\n', test1, '\n', test2, '\n\n')

console.log('Print out values starting from the head!!========\n\n', cool.traverseFromHead(), '\n\n')
console.log('Print out values from the tail too!!========\n\n', cool.traverseFromTail(), '\n\n')
