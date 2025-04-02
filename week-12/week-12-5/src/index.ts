import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username : string, password : string, firstName : string, lastName : string) {
    const user = await prisma.user.create({
        data: {
        username,
        password,
        firstName,
        lastName
        },
    })
    console.log(user);
};

async function insertTodo(title : string, description : string, userId : number) {
    const todo = await prisma.todo.create({
        data: {
        title,
        description,
        userId,
        },
    });
    console.log(todo);
}

async function getTodosAndUserDetails(userId : number) {
    const todos = await prisma.todo.findMany({
        where: {
            userId : userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    });
    console.log(todos);
}
// insertUser("john@com", "john123", "john", "doe");
// insertTodo("learn typescript", "learn typescript with prisma", 2);
// getTodosAndUserDetails(2);