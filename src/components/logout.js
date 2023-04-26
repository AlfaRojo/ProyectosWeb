import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom'

const cliendID = "834090234899-ej2d2256bvvuej6gt7vjkn749b4rqlpa.apps.googleusercontent.com"

function LogoutForm() {

    let history = useNavigate();

    const onSuccess = () => {
        localStorage.clear();
        history('/');
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={cliendID}
                buttonText="Sign Out"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogoutForm;