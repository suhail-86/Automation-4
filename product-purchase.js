import Common from "./common.js";
class ProductPurchase extends Common {
  constructor() {
    super();
    this.$loginButton = () => $('//button[text()="Login "]');
    this.$loginPopUp = () => $('//div[@class="pop_header"]');
    this.$signUpBotton = () =>
      $('//div[@class="sgn_up_btn"]//a[@class="signup_btn"]');
    this.$registerPopUp = () => $('//div[@class="pop_tle"]');
    this.$registerationFeild = (fieldName) =>
      $(
        `//div[@class="modal-inner-wrap user-register-popup"]//input[@id="${fieldName}"]`
      );
    this.$continueButton = () => $('//button[text()="Continue"]');
    this.$verificationLogin = () =>
      $('//div[@class="subm_btn"]//a[@class="ng-binding"]');
    this.$verificationMessage = () =>
      $('//div[@class="pop_header"]//div[@class="pop_tle ng-binding"]');
  }
  /**
   * Launch the valid Url.
   * @param {string} url
   */
  async openUrl(url) {
    await browser.maximizeWindow();
    await browser.url(url);
  }

  /**
   * Click on the "Login" button.
   */
  async login() {
    await this.$loginButton().click();
    await this.$loginPopUp().waitForDisplayed({ timeout: 10000 });
  }

  /**
   * Click on the "Signup Now" button.
   */
  async signUp() {
    await this.$signUpBotton().click();
    await this.$registerPopUp().waitForDisplayed({ timeout: 10000 });
  }

  /**
   * Filling the registration feild with required data.
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} email
   * @param {string} phoneNumber
   */
  async fillRegistrationFeild(firstName, lastName, email, phoneNumber) {
    //Entering random users first name, last name, email and phone number.
    await this.$registerationFeild("first_name").setValue(firstName);
    await this.$registerationFeild("last_name").setValue(lastName);
    await this.$registerationFeild("email").setValue(email);
    await this.$registerationFeild("tel").setValue(phoneNumber);
    //click on the continue button
    await this.$continueButton().click();
    await this.$verificationMessage().waitForDisplayed({ timeout: 5000 });
  }

  /**
   * Click on the 'Login' button.
   */
  async verificationPopUpMessage() {
    await this.$verificationLogin().click();
  }
}
export default new ProductPurchase();
