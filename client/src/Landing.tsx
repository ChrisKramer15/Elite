function Landing() {
  const user = "Chris";
  if (user) return <h1>Welcome {user}, select your dynasty.</h1>;
  return <h1>Please Log In</h1>;
}

export default Landing;
