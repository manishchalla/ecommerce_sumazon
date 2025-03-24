import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('admin123', 10),
        phoneno: '1111111111',
        iaAdmin: true
    },
    {
        name: 'guest',
        email: 'guest@email.com',
        password: bcrypt.hashSync('guest123', 10),
        phoneno: '8888888888',
        iaAdmin: false
    },
    {
        name: 'test',
        email: 'test@email.com',
        password: bcrypt.hashSync('test123', 10),
        phoneno: '7777777777',
        iaAdmin: true
    },
];

export default users;