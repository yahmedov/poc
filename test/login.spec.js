const testCases = [
    {
        username: 'test',
        passowrd: 'test',
        expectedError: 'Please check your username and password.'
    },
    {
        username: 'test',
        passowrd: undefined,
        expectedError: 'Please enter your password.'
    },
    {
        username: undefined,
        passowrd: undefined,
        expectedError: undefined // There is no error message
    }
]

describe('Login page', () => {
    testCases.forEach(t => {
        it(`Error message - ${t.expectedError}`, () => {
            browser.url('/')

            if (t.username) $('#username').setValue(t.username)
            if (t.passowrd) $('#password').setValue(t.passowrd)

            $('#Login').click()

            if (t.expectedError) {
                const error = $('#error')

                error.waitForDisplayed()
                expect(error.getText()).to.contain(t.expectedError)
            }
        })
    })
})