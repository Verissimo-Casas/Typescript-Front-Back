import { Request, Response } from "express"

const store = function (reqest: Request, response: Response) {
  response.json("store")
}

export { store }
