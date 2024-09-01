import { $ } from '@wdio/globals'

class RegistrationPage {
    get firstNameInput() { return $('id:firstName'); }
    get lastNameInput() { return $('id:lastName'); }
    get phoneInput() { return $('id:phone'); }
    get emailInput() { return $('id:email'); }
    get passwordInput() { return $('id:password'); }
    get repasswordInput() { return $('id:repassword'); }
    get createButton() { return $('button=Create'); }

    register(firstName, lastName, phone, email, password, repassword) {
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.phoneInput.setValue(phone);
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.repasswordInput.setValue(repassword);
        this.createButton.click();
    }
}

export default new RegistrationPage();