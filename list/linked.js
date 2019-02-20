class ListItem {
  constructor(prev, next, value) {
    this.prev = prev
    this.next = next
    this.value = value
  }

  setValue(value) {
    this.value = value
  }

  setPrev(prev) {
    this.prev = prev
  }

  getPrev() {
    return this.prev
  }

  setNext(next) {
    this.next = next
  }

  getNext() {
    return this.next
  }

  getValue() {
    return this.value
  }

}

class List {
  
  constructor(ListItem) {
    this.head = new ListItem(null, null, null)
    this.length = 0
  }

  push() {

    Array.prototype.forEach.call(arguments, item => {
      let next = this.head
      while (next.getNext()) {
        next = next.getNext()
      }
      next.setNext(item)
      item.setPrev(next)

      this.length += 1
    })
    return this.length
  }

  pop() {
    if (this.length <= 0) return null

    let next = this.head

    while (next.getNext()) {
      next = next.getNext()
    }

    const prev = next.getPrev()

    next.setPrev(null)
    prev.setNext(null)

    this.length -= 1
    
    return next
  }

  shift() {
    if (this.length <= 0) return null

    const head = this.head
    const next = head.getNext()

    head.setNext(null)
    next.setPrev(null)
    
    this.head = next
    this.length -= 1

    return head
  }

  unshift() {

    Array.prototype.forEach.call(arguments, item => {

      const head = this.head

      item.setNext(head)
      head.setPrev(item)

      this.head = item

      this.length += 1
    })

    return this.length
  }

  getValues() {
    const values = []

    let next = this.head

    while(next.getNext()) {
      next = next.getNext()
      values.push(next.getValue())
    }

    return values
  }
  
}

// test

const list = new List(ListItem)

console.log(list)

const item1 = new ListItem()
const item2 = new ListItem()
const item3 = new ListItem()

item1.setValue('item1')
item2.setValue('item2')
item3.setValue('item3')

list.push(item1, item2, item3)

const length = list.length
const values = list.getValues()

console.log(length, values)
