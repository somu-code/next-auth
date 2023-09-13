import Image from "next/image";
import Tweet from "./tweet";

type Tweet = {
  id: string;
  body: string;
  likes: number;
  userId: string;
};

export default function User({
  user,
}: {
  user: {
    id: string;
    email: string;
    name: string;
    image: string;
    tweets: Tweet[];
  };
}) {
  return (
    <section className="m-4 py-4 flex flex-row gap-8">
      <div className="">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={user.image}
            alt={user.name}
            style={{ objectFit: "cover" }}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div>
        <h1 className="text-xl font-bold">{user.name}</h1>
        <p className="text-sm text-stone-400">{user.email}</p>
      </div>
      <div className="w-1/3">
        <h2 className="text-2xl font-semibold tracking-tighter">
          Recent Tweets
        </h2>
        <ul>
          {user.tweets.map((tweet: Tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </ul>
      </div>
    </section>
  );
}
