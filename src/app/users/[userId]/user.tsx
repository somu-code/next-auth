import Image from "next/image";

export default function User({
  user,
}: {
  user: {
    id: string;
    email: string;
    name: string;
    imageUrl: string;
  };
}) {
  return (
    <section className="m-4 py-4">
      <div className="">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={user.imageUrl}
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
    </section>
  );
}
