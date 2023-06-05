describe('Login screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('login flow', async () => {
    await expect(element(by.id('email'))).toBeVisible();
    await element(by.id('email')).typeText('test@yopmail.com');
    await expect(element(by.id('password'))).toBeVisible();
    await element(by.id('password')).typeText('12345678');
    await expect(element(by.id('login-button'))).toBeVisible();
    await element(by.id('login-button')).tap();
    await expect(element(by.id('homeScreen'))).toBeVisible();
  });
  
});
