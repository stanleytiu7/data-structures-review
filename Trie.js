class Trie {
	constructor() {
		this.trie = {}
	}
	addWord(string) {
		let strArray = string.split('')
		let pointer = this.trie
		console.log(strArray)
		while (strArray.length) {
			let shifted = strArray.shift()
			if (pointer[shifted]) {
				pointer = pointer[shifted]
			} else if (!strArray.length) {
				pointer[shifted] = {null: 0}
			} else {
				pointer[shifted] = {}
				pointer = pointer[shifted]
			}
		}
		return this
	}
}

let testTrie = new Trie()
	.addWord('bicycle')
	.addWord('bicycles')
	.addWord('bicurious')

console.log(testTrie)
