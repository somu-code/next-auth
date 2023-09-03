import prisma from ".";

type Tweet = {
  createMany: { data: { body: string; likes: number }[] };
};

export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function createUser(user: {
  id: string;
  email: string;
  name: string;
  imageUrl: string;
  tweets: Tweet[];
}) {
  try {
    const userFromDB = await prisma.user.create({ data: user });
    return { user: userFromDB };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return { user };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
