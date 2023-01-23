import type { NextApiRequest, NextApiResponse } from 'next'

//http://localhost:3000/api/dashboard
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({name: "Dashboard api route"})
}