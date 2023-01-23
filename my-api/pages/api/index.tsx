import type { NextApiRequest, NextApiResponse } from 'next'
//http://localhost:3000/api

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({name: "Home api route"})
}