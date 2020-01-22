/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import userInfo from "./dummy-data"; // this pulls the data from dummy-data file and assigns it to the variable userInfo
// import the PostsPage and SearchBar and add them to the App
// import dummydata

// *I only import what I need to make the functional component*

const App = () => {
  // set up state for the dummy data and pass to your PostsPage
  const [userData] = useState(userInfo); // I pass in the imported userInfo variable which holds actual data as the useState.
  
  return (
    <div className="App">
      {/* Add components here and pass props where appropriate */}
      <SearchBar />
      <PostsPage userPosts= {userData}/>
    </div>
  );
};

export default App;
