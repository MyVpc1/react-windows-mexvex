import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const AppFourTwoZero = React.lazy(() => import('./v4.2.0'));
const AppFourTwoOne = React.lazy(() => import('./v4.2.1'));

const Splash = (props) => {
  return <div style={{backgroundColor: "#0078D7", height: "100vh", alignItems: "center", display: "flex"}}>
            <h1 style={{margin: "0 auto", color: "white"}}>
              react-windows-ui
            </h1>
          </div>
}

class App extends React.Component {
  render() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/v4.2.1/home" />} />
        <Route
          path="/v4.2.0/*"
          element={
          <React.Suspense fallback={<Splash/>}>
            <AppFourTwoZero/>
          </React.Suspense>}
        />
        <Route
          path="/v4.2.1/*"
          element={
          <React.Suspense fallback={<Splash/>}>
            <AppFourTwoOne/>
          </React.Suspense>}
        />
      </Routes>
    </Router>
    )
  }
}

export default App;