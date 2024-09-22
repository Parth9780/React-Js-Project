import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <>
      <Container fluid style={{ width: "100%" }}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Router>
                <Routes>
                  <Route
                    path="/home"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Routes>
              </Router>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;