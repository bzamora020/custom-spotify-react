import React from "react";
import { Container } from "react-bootstrap";
const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
      variant="success"
      onClick={() => {
        window.location = AUTH_URL;
      }}
    >
      <button className="btn btn-success btn-lg">Login With Spotify</button>
    </Container>
  );
}
