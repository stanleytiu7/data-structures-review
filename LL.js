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

}

let cool = new LL()
	.insert(1)
	.insert(2)
	.insert(1)

console.dir(cool)
