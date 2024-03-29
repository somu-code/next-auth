"use client";

import { useEffect, useState } from "react";

export default function Tweet({
  tweet,
}: {
  tweet: { id: string; body: string; likes: number; userId: string };
}) {
  const [likes, setLikes] = useState(tweet.likes);
  const [liked, setLiked] = useState(null);
  useEffect(() => {
    if (liked === null) return;
    const endPoint = liked
      ? `/api/tweets/${tweet.id}/like`
      : `/api/tweets/${tweet.id}/unlike`;
    async function fetchData() {
      const response = await fetch(endPoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const { tweet } = await response.json();
        console.log(tweet.likes);
        setLikes(tweet.likes);
      }
    }
    fetchData();
  }, [liked, tweet.id]);
  return (
    <li className="my-3 rounded bg-stone-200 p-4 text-stone-500 flex flex-row justify-between">
      <p>{tweet.body}</p>
      <div className="flex flex-row gap-2">
        {liked ? (
          <button onClick={() => setLiked((liked) => !liked)}>Unlike</button>
        ) : (
          <button onClick={() => setLiked((liked) => !liked)}>Like</button>
        )}
        <span>{likes}</span>
      </div>
    </li>
  );
}
