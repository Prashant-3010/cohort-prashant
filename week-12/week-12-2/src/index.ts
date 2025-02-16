interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

type UpdateUserOptional = Partial<UpdateProps>;

function UpdateUser(updatedProps : UpdateUserOptional) {
    // hit the db to update the user
}

UpdateUser({
    name: 'asd'
})