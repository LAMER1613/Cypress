describe('Тест покупки аватара', function() {
	it('Проверка корректной покупки фото для тренера покемона', function(){
		cy.visit('https://pokemonbattle.me/');
		cy.get(':nth-child(1) > .auth__input').type('AddEmail');
		cy.get('#password').type('AddPass');
		cy.get('.auth__button').click();
		cy.get('.header__btns > [href="/shop"]').click();
		//cy.get(':nth-child(9) > .shop__button').click();   //МЕНЯТЬ МЕСТАМИ ЕСЛИ КУПЛЕНО
		cy.get(':nth-child(8) > .shop__button').click();   //МЕНЯТЬ МЕСТАМИ ЕСЛИ КУПЛЕНО
		cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4555555555555550');
		cy.wait(6000);
		cy.get(':nth-child(1) > .pay_base-input-v2').type('0528');
		cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
		cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Abdula Abubaharov');
		cy.get('.pay-btn').click();
		cy.contains('Подтверждение покупки');
		cy.get('#cardnumber').type('56456');
		cy.get('.payment__submit-button').click();
		cy.contains('Покупка прошла успешно').should('be.visible');
		cy.get('.payment__adv').click();
	})
})
