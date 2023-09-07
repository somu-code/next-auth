import prisma from ".";

export async function likeTweet({ tweetId }: { tweetId: string }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
    return { tweet };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function unlikeTweet({ tweetId }: { tweetId: string }) {
  try {
    const tweet = await prisma.tweet.update({
      where: { id: tweetId },
      data: {
        likes: {
          decrement: 1,
        },
      },
    });
    return { tweet };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
