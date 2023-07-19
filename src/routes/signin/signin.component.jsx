import {signInWithGooglePopup,createUserDocFromAuth} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        createUserDocFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In</button>
        </div>
    )
}
export default SignIn;