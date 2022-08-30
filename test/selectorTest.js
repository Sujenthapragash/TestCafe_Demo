import { Selector, ClientFunction } from 'testcafe';

const developerName = Selector("#developer-name");
const macosOption = Selector("#macos");
const submitButton = Selector("#submit-button");
const triedCheckBox = Selector("#tried-test-cafe");
const slider = Selector("#slider");

const getPageUrl = ClientFunction(() => window.location.href);

fixture("Selector Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("selector test", async t => {
    await t
        .typeText(developerName, "TAU")
        .click(macosOption)
        .click(triedCheckBox)
        .drag(slider, 360, 0, { offsetX: 10, offsetY: 10, speed: 0.01 })
        .click(submitButton)
        .expect(getPageUrl()).contains('thank-you');
});