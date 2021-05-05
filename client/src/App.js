import './App.css';

function App() {
  return (
    <div className="App"> 
    <h1>Movie Reviews</h1>
      <div class="form">
        <lable class="label">Movie Name</lable>
        <input type="text" name="MovieName" />
        <lable class="label">Review</lable>
        <input type="text" name="review" /> 

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
