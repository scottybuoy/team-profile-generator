
const Manager = require("../lib/Manager");

test("should create new instance of manager object", () => {
    const manager = new Manager("Davey Havok", 138, "afireinside@lol.com");

    expect(manager instanceof Manager).toEqual(true);
}

)