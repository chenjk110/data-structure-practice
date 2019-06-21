/* Flight Graph */

class City {
  constructor(cityName) {
    this.name = cityName
    this.flights = new Map()
  }

  addFlight(city, price) {
    this.flights.set(city, price)
  }

  printFlights() {
    return Array.from(this.flights.entries())
      .map(([city, price]) => `${this.name} <- ${price} -> ${city.name}`)
  }

}

/* flight info between two cities */
// class Flight {
//   constructor(price, src, dest) {
//     this.price = price
//     this.src = src
//     this.dest = dest
//   }
// }

const cityA = new City('A')
const cityB = new City('B')
const cityC = new City('C')


cityA.addFlight(cityB, 100)
cityB.addFlight(cityC, 230)

console.log(cityA.printFlights())