/**
This program fetches the club data from a public spreadsheet and converts it into
an array of the following form:

[
  {name: "Counterfeit Money Club", description: "Officer: You're under arrest for using counterfeit bank notes. Me: *Slides a crisp £17 bill* How about now eh?", categories:
]
*/

const fs = require('fs')
const fetch = require('node-fetch')

const outFile = "clubs.json"
const columnMeanings = {
  2: "name",
  4: "description",
  5: "categories"
}

fetch("https://spreadsheets.google.com/feeds/cells/1vW-UJiqGgtMXYPPGjqYt5U3jwU6ZXqQaGerjEms3u0o/1/public/full?alt=json")
  .then(resp => resp.json())
  .then(json => {
    const clubObjects = {}

    function registerClubProperty(row, propName, prop, time) {
      // tfw no nullish coalescing operator
      const clubObj = clubObjects[row] ? clubObjects[row] : (clubObjects[row] = {})

      clubObj[propName] = prop

      clubObj.lastUpdated = Math.max(clubObj.lastUpdated, time)
    }

    for (const entry of json.feed.entry) {
      const cell = entry.gs$cell
      const {
        row,
        col
      } = cell

      if (row <= 1)
        continue

      registerClubProperty(row, columnMeanings[col], cell.$t, new Date(entry.updated.$t).getTime())
    }

    const clubs = Object.values(clubObjects)

    fs.writeFile(outFile, JSON.stringify(clubs), () => console.log(`Finished writing ${clubs.length} clubs to ${outFile}`))
  })
