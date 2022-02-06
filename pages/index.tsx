import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import GoogleLogin from "react-google-login";
import googleLogin from "../lib/googleLogin";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Login With Google</h1>
      <GoogleLogin clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
                   buttonText="Login with Google"
                   onSuccess={async (response) => {
                     const tokens = await googleLogin(response);
                     if (!tokens) {
                       alert("Error while logging in w/Google 1 ")
                     } else {
                       // put login logic (i.e. navigating to dashboard page, fetching user from backend
                       // using the new access token, etc
                     }
                   }}
                   onFailure={(response) => {
                     alert("Error while logging in w/Google 2")
                   }}
                   cookiePolicy={"single_host_origin"}
      />
    </div>
  )
}

export default Home
