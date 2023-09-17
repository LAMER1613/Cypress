describe('Тесты логина QAstudio', function () {
   it('Позитивный тест авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })

   it('Позитивный тест на логику восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
         cy.get('#forgotForm > .header').should('be.visible');
         cy.get('#mailForgot').type('plohoy@mail');
         cy.get('#restoreEmailButton').click();
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })

   it('негативный тест верный логин не верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('NeVerniyPass');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      })

   it('негативный тест не верный логин верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('plohoy@mail');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('.link').should('be.visible');
      })

   it('негативный тест логин без собачки @ верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('.link').should('be.visible');
      })

   it('негативный тест неправильный регистр логина', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#loginButton').should('be.disabled');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').should('be.enabled');
         cy.get('#loginButton').click();
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
         cy.get('.link').should('be.visible');
      })     
})



