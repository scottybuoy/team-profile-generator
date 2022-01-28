
const Intern = require("../lib/Intern");

test("should create new instance of employee object", () => {
    const intern = new Intern("Davey Havok", 138, "afireinside@lol.com");

    expect(intern instanceof Intern).toEqual(true);
}

)