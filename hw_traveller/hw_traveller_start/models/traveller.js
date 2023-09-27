class Traveller {
  constructor(journeys) {
    this.journeys = journeys;
  }

  getJourneyStartLocations() {
    return this.journeys.map((journey) => journey.startLocation)
  }

  getJourneyEndLocations() {
    return this.journeys.map((journey) => journey.endLocation)
  }

  getJourneysByTransport(transport) {
    return this.journeys.filter((journey) => journey.transport === transport)
  }

  getJourneysByMinDistance(minDistance) {
    return this.journeys.filter((journey) => journey.distance > minDistance)
  }

  calculateTotalDistanceTravelled() {
    const journeyDistance = this.journeys.map((journey) => journey.distance)
    const totalDistance = journeyDistance.reduce((distance, currentDistance) => {
      return distance + currentDistance
    })
    return totalDistance
  }

  getUniqueModesOfTransport() {
    const allModesOfTransport = this.journeys.map((journey) => journey.transport)
    const uniqueTransport = [... new Set (allModesOfTransport)]
    return uniqueTransport
  }
}


module.exports = Traveller;