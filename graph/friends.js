class Person {
  constructor(name) {
    this.name = name

    /* define */
    Object.defineProperties(this, {
      friends: {
        value: new Set()
      }
    })
  }

  get friendNames() {
    return Array.from(this.friends).map(({ name }) => name)
  }

  get friendList() {
    return Array.from(this.friends)
  }
  
  addFriend(friend) {
    if (friend === this) return
    this.friends.add(friend)
  }

  removeFriend(friend) {
    this.friends.delete(friend)
  }
  
}


const jack = new Person('Jack')
const jane = new Person('Jane')
const john = new Person('John')

jack.addFriend(jane)
jack.addFriend(john)

console.log(jack.friendNames)
console.log(jack.friendList)