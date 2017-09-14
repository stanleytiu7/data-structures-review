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
	.removeFromHead()

let test1 = new LL().removeFromHead();
let test2 = new LL()
	.insert(1)
	.removeFromHead()

console.log(cool)
console.log(test1, '\n', test2)

console.log(cool.traverseFromHead())
console.log(cool.traverseFromTail())

