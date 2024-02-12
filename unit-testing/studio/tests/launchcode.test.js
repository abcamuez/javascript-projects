// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
// Write your unit tests here
  test("returns if the value of organization is 'nonprofit' ", function() {
    expect(launchcode.organization).toBe("nonprofit")
});
  
test("returns if the value of executiveDirector is 'Jeff' ", function() {
  expect(launchcode.executiveDirector).toBe("Jeff")
});

test("returns if the value of percentage of cool employees is 100 ", function() {
  expect(launchcode.percentageCoolEmployees).toBe(100)
});

test("returns if the value of executiveDirector is 'Jeff' ", function() {
  expect(launchcode.executiveDirector).toBe("Jeff")
});
//programsOffered needs 4 expect statements
test("returns if value of programsOffered has four statements ", function() {
  expect(launchcode.programsOffered).toContain("Web Development");
  expect(launchcode.programsOffered).toContain("Data Analysis");
  expect(launchcode.programsOffered).toContain("Liftoff");
  expect(launchcode.programsOffered).toHaveLength(3);
});

test("return 'Launch!' when passed a number that is ONLY divisible by 2", function() {
  expect(launchcode.launchOutput(2)).toBe('Launch!');
});

test("return 'Code!' when passed a number that is ONLY divisible by 3", function() {
  expect(launchcode.launchOutput(3)).toBe('Code!');
});

test("return 'Rocks!' when passed a number that is ONLY divisible by 5", function() {
  expect(launchcode.launchOutput(5)).toBe('Rocks!')
});

test("return 'Launchcode!' when passed a number that is ONLY divisible by 2 and 3", function() {
  expect(launchcode.launchOutput(6)).toBe('LaunchCode!')
});

test("return 'Code Rocks!' when passed a number that is ONLY divisible by 3 and 5", function() {
  expect(launchcode.launchOutput(15)).toBe('Code Rocks!')
});

test("return 'Launch Rocks!' when passed a number that is divisible by 2 and 5", function () {
  expect(launchcode.launchOutput(10)).toBe('Launch Rocks!')
});

test("return 'LaunchCode Rocks!' when passed a number that is divisible by 2,3 and 5", function () {
  expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!')
});

test("return ''Rutabagas! That doesn't work.' when passed a number that is NOT divisible by 2,3,5", function() {
  expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.")
});

});