import React from "react";
import Navbar from "./Components/Header/Navbar";
import OurServices from "./Components/Main/OurServices/OurServices";
import ExplorePrograms from "./Components/Main/ExplorePrograms/ExplorePrograms";
import Tutors from "./Components/Main/Tutors/Tutors";
import OurRecentBlogs from "./Components/Main/OurRecentBlogs/OurRecentBlogs";
import Footer from "./Components/Footer/Footer";
import Feedback from "./Components/Main/Feedback/Feedback";
import images from "./Components/Main/Feedback/Images"

function App() {
  return (
    <div className="App">
      <Navbar />
      <OurServices />
      <ExplorePrograms />
      <Tutors />
      <Feedback images={images}/>
      <OurRecentBlogs />
      <Footer />
    </div>
  );
}

export default App;