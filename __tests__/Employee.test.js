const Employee = require("../lib/Employee");

test("should create new instance of employee object", () => {
    const employee = new Employee("Davey Havok", 138, "afireinside@lol.com");

    expect(employee instanceof Employee).toEqual(true);
}

)