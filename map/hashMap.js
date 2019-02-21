class HashMap {
  constructor(length) {
    this.length = length
    this.initMap(length)
  }

  initMap(length) {
    const map = []
    for (let i = 0; i < length; i++) {
      map.push([])
    }
    this.map = map
  }

  genKey(value) {
    return value % this.length
  }

  getStore(key) {
    return this.map[key]
  }

  canInsert(key) {
    const store = this.getStore(key)
    return store.length !== this.length
  }

  insert(value) {
    const key = this.genKey(value)
    if (this.canInsert(key)) {
      const store = this.getStore(key)
      store.push(value)
    }
  }

  search(value) {
    const key = this.genKey(value)
    const store = this.getStore(key)
    return store.findIndex(item => item === value)
  }

  remove(value) {
    const index = this.search(value)
    if (index !== -1) {
      const key = this.genKey(value)
      const store = this.getStore(key)
      store.splice(index, 1)
    }
  }

  toString() {
    return JSON.stringify(this.map)
  }
}

// test

const hs = new HashMap(12)

console.log(hs)

hs.insert(123)
hs.insert(381)
console.log(hs)

hs.remove(123)

console.log(hs)