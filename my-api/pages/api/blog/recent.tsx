import type { NextApiRequest, NextApiResponse } from 'next'
//http://localhost:3000/api/blog/recent

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({name: "Recent api route"})
}