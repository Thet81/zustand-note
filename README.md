
## Mocking with vitest

- We can use `vi.fn()` to create a mock. Essentially it will give us a function that does nothing by default and returns `undefined`, but it tracks every call that we made to it.

*see mockingdemo.test.js file with a tag test("mock function basics")*


- If we want to control what it returns (usually we do) so that we can test how our code reacts to different values :

*see test("mock return values")*