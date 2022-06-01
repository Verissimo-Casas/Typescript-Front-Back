import { Request, Response } from "express"

const index = function (resqest: Request, response: Response) {
  response.send("Verissimo")
}

export { index }
