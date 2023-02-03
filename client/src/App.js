
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const clientId="930280719874-80e5d142rd3rdg7jhhvrkepuirrttfeu.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientId} >
      <Messenger></Messenger>
    </GoogleOAuthProvider>
  );
}

export default App;
