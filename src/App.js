import { Footer } from "./components/Footer";
import Header from "./components/Header";
import React from "react";
import { About } from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Header title="My Todo List" searchBar={false} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    // <>
    //   <Header title="My Todo List" searchBar={false} />
    //   <AddTodo addTodo={addTodo} />
    //   <Todos todos={todos} onDelete={onDelete} />
    //   <Footer />
    // </>
  );
}

export default App;
