const SIGNIN = 'SIGNIN';

const signIn = (data) => (
    {
        type:SIGNIN,
        payload:data
    }
)
export {SIGNIN, signIn}
