import app from "./src/app"
import { AppDataSource } from "./src/data-source"
import "dotenv/config"
require("dotenv").config()

if (process.env.NODE_ENV !== "test") {
  const init = async () => {
    const PORT = process.env.PORT || 3000
    await AppDataSource.initialize()
      .then(() => {
        console.log("Data Source initialized!")
      })
      .catch((err) => {
        console.error("Error during Data Source initialization!", err)
      })

    app.listen(PORT, () => {
      console.log(`App is running at port ${PORT}`)
    })
  }
  init()
}

// async function init() {
//   const PORT = process.env.PORT || 3000

//   await AppDataSource.initialize()

//   app.listen(PORT, () => console.log("Running at http://localhost:" + PORT))
// }
// init()
