import { likeTweet } from "@/lib/prisma/tweet";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    try {
      const { tweetId } = req.query;
      const { tweet, error } = await likeTweet({ tweetId });
      if (error) throw new Error(JSON.stringify(error));
      return res.status(200).json({ tweet });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error });
    }
  }
  res.setHeader("Allow", ["PATCH"]);
  res.status(425).end(`Method ${req.method} is not allowed`);
}
