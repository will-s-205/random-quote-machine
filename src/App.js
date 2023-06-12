import logo from './logo.svg';
import react_logo from './react-logo.png';
import './App.css';

// const page = (
//   <div>
//       <img src={react_logo} className="App-logo" alt="logo" />
//       <h1>Fun facts about React</h1>
//       <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100K stars on GitHub</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </div>
// )

// function App() {
//   return (
//     <div className="App">
//       {page}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Header() {
  return (
      <header>
          <nav>
              <img src="./react-logo.png" width="40px" />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function Footer() {
  return (
      <footer>
          <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
  )
}

function MainContent() {
  return (
      <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's a popular library, so I'll be 
              able to fit in with the cool kids!</li>
              <li>I'm more likely to get a job as a developer
              if I know React</li>
          </ol>
      </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
