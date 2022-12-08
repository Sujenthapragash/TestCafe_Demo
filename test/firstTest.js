@add test node
fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});

