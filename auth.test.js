// const { signup, login } = require("./auth");

// describe("Signup feature", () => {

//     // 1. Successful signup
//     test("Create a new user successfully", () => {

//         const result = signup(
//             "Dhanya",
//             "dhanya@gmail.com",
//             "123456"
//         );

//         expect(result.success).toBe(true);
//         expect(result.message).toBe("Signup successful");
//         expect(result.user.name).toBe("Dhanya");
//         expect(result.user.email).toBe("dhanya@gmail.com");
//     });


//     // 2. Duplicate signup
//     test("Signup should fail if email already exists", () => {

//         const result = signup(
//             "Dhanya",
//             "dhanya@gmail.com",
//             "123456"
//         );

//         expect(result.success).toBe(false);
//         expect(result.message).toBe("User already exists");
//     });

// });


// describe("Login feature", () => {

//     // 3. Successful login
//     test("User should login with correct password", () => {

//         const result = login(
//             "dhanya@gmail.com",
//             "123456"
//         );

//         expect(result.success).toBe(true);
//         expect(result.message).toBe("Login successful");
//         expect(result.user.email).toBe("dhanya@gmail.com");
//     });


//     // 4. Invalid password
//     test("Login should fail with incorrect password", () => {

//         const result = login(
//             "dhanya@gmail.com",
//             "wrongpassword"
//         );

//         expect(result.success).toBe(false);
//         expect(result.message).toBe("Invalid password");
//     });

// });
const { signup, login } = require("./auth");

describe("Authentication feature", () => {

    test("Successful signup", () => {
        expect(signup("Dhanya", "dhanya@gmail.com", "123456")).toBeTruthy();
    });

    test("Duplicate signup", () => {
        signup("Dhanya", "dhanya@gmail.com", "123456");
        expect(signup("Dhanya", "dhanya@gmail.com", "123456")).toBeFalsy();
    });

    test("Successful login", () => {
        signup("Dhanya", "dhanya@gmail.com", "123456");
        expect(login("dhanya@gmail.com", "123456")).toBeTruthy();
    });

    test("Invalid password", () => {
        signup("Dhanya", "dhanya@gmail.com", "123456");
        expect(login("dhanya@gmail.com", "wrongpassword")).toBeFalsy();
    });

});