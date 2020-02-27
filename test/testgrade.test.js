const mark = require("../index");
test("test if the mark is a number", () => {
  expect(typeof(mark.marks)).toBe("number");
  

});
test("test if the mark is a number", () => {
expect(mark.isValidate()).toBe(true);
});
test("testing the grade Mark", () =>{
  expect(mark.computeScore()).toBe('A')
});