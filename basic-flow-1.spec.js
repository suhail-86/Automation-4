import productPage from "../pageobjects/product-purchase.js";
let email = `${Math.random().toString(36).substring(2, 8)}@mailsac.com`;
let phoneNumber = Math.floor(Math.random() * 10000000000);
let firstName = await productPage.getRandomLetters(6);
let lastName = await productPage.getRandomLetters(4);

describe("Register with valid details and purchase a product", () => {
  it("Launch the URL", async () => {
    await productPage.openUrl("https://edelivery.zoproduct.com/");
  });

  it("Click on the 'Login' button", async () => {
    await productPage.login();
    expect(await productPage.$loginPopUp()).toHaveText("Login");
  });

  it("Click on the 'Signup Now' button", async () => {
    await productPage.signUp();
    expect(await productPage.$registerPopUp()).toBeDisplayed();
  });

  it("Fill the registration form", async () => {
    await productPage.fillRegistrationFeild(
      firstName,
      lastName,
      email,
      phoneNumber
    );
  });

  it("Click on the 'Verification message' button", async () => {
    await productPage.verificationPopUpMessage();
    expect(await productPage.$verificationMessage()).toHaveText(
      "Verification Message Sent"
    );
  });
  
});
