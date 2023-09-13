import prisma from ".";

type Tweet = {
  createMany: { data: { body: string; likes: number }[] };
};

type User = {
  id: string;
  email: string;
  name: string;
  image: string;
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

export async function createUser(user: User) {
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
    const user = await prisma.user.findUnique({
      where: { id },
      include: { tweets: true },
    });
    return { user };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
