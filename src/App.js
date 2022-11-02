import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./Context/FeedbackContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
