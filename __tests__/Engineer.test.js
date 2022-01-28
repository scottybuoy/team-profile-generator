const Engineer = require("../lib/Engineer");

test("should create a new instance of Engineer object", () => {
    const engineer = new Engineer("Karl Crisis", 315, "wrathofsanity@exc.com");

    expect(engineer instanceof Engineer).toEqual(true);
})