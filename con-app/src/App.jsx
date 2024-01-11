
import './App.css'
import GreetFriends from './components/GreetFriends'
import Button from './components/Button'

function App() {
  // handle signup
  const handleSignup = () => {
    alert("You have successfully signed up");
  };

  // handle login
  const handleLogin = () => {
    alert("You have successfully logged in");
  };

  // handle logout
  const handleLogout = () => {
    alert("You have successfully logged out");
  };
  return (
    <>
    <div>
      <h1 className='title'>Welcome to React App</h1>
      <div>
        <Button 
            cname="signup"
            bgcolor="blue"
            func={handleSignup}
        >
          sign up
        </Button>
        <Button bgcolor="red" func={handleLogin}>Login</Button>
        <Button bgcolor="orange" bradius="25px" func={handleLogout}>
          log out
        </Button>
      </div>
      {/* use greet component here */}
      <div>

        <GreetFriends
          name = "Ajaude Michael" 
          job = "full stack web developer"
          imgurl = "https://shorturl.at/ltuyM"
        />
        <GreetFriends
          name = "Lucia dike"
          job = "TV Broadcaster"
          imgurl = "https://shorturl.at/dvOP1"
        />
        <GreetFriends
          name = "Chinedu Ajaude"
          job = "software engr"
          imgurl = ""
        />
        <GreetFriends/>
        <GreetFriends/>
      </div>

     </div>

  </>
  )
}

export default App
