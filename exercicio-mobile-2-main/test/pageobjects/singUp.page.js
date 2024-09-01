import { $ } from '@wdio/globals'

class SignUpPage {
    get signUpButton() { return $('button=Sign up'); }

    openSignUp() {
        this.signUpButton.click();
    }
}

export default new SignUpPage();
