class BST {
	constructor(val, left, right) {
		this.val = val || null
		this.left = left || null
		this.right = right || null
	}

	insert(val, left = null, right = null) {
		let pointer = this;
		// insert into nothing case
		if (!pointer.val) {
			this.val = val;
			this.left = left || null;
			this.right = right || null;
		} else {
			// insert into sommething case
			while (pointer) {
				//greater than case
				if (val > pointer.val) {
					//insert into nothing case
					if (!pointer.right) {
						pointer.right = new BST(
								val,
								left,
								right
							)
							//to end loop
						pointer = null;
					} else {
						//keep looping with different pointer
						pointer = pointer.right;
					}
				} else if (!pointer.left) {
					pointer.left = new BST(
						val,
						left,
						right
					)
					pointer = null;
				} else {
					pointer = pointer.left;
				}
			}
		}
		// for chaining
		return this;
	}

	contains(num) {
		if (this.val === num) {
			return true;
		} else {
			let pointer = this;
			while (pointer) {
				if (pointer.val === num) {
					return true
				}
				if (num <= pointer.val) {
					if (!pointer.left) {
						return false
					} else {
						pointer = pointer.left
					}
				} else if (!pointer.right) {
					return false
				} else {
					pointer = pointer.right
				}
			}
		}
	}

	//just to print out all numberrs in a BFS manner
	breadFirstSearch() {
		//check if there's anything before doing anything
		if (!this.val) return 'no tree'
		let printArray = [];
		let queue = [this];
		while (queue.length) {
			let pointer = queue.shift()
			printArray.push(pointer.val)
			if (pointer.left) queue.push(pointer.left)
			if (pointer.right) queue.push(pointer.right)
		}
    console.log(printArray)
	}

	preOrder() {
		console.log(this.val)
		if (this.left) this.preOrder.call(this.left)
    if (this.right) this.preOrder.call(this.right)
	}

	inOrder() {
		if (this.left) this.inOrder.call(this.left)
		console.log(this.val)
    if (this.right) this.inOrder.call(this.right)
	}

  postOrder() {
		if (this.left) this.postOrder.call(this.left)
    if (this.right) this.postOrder.call(this.right)
    console.log(this.val)
  }
}

let tree = new BST(5)
	.insert(4)
	.insert(3)
	.insert(2)
	.insert(6)
	.insert(7)
	.insert(5.5)

let contains = 5;
console.log('This is the tree: \n\n', tree, '\n')
console.log(`Does it contain ${contains}?\n\n`, tree.contains(contains), '\n')
console.log('BFS done \n\n', tree.breadFirstSearch())
console.log('DFS Pre-order done \n\n', tree.preOrder())
console.log('DFS In-order done \n\n', tree.inOrder())
console.log('DFS Post-order done \n\n', tree.postOrder())
