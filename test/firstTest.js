
fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");
@test comment
test("First test", async t => {
    await t
        .typeText("#developer-name", "TAU")
        .click("#macos")
        .click("#submit-button");
});

