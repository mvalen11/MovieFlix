import React from 'react';
import './quiz.css';

function Quiz() {
  return (
  <div id="container">
    <header className="header_quiz">
      <h1>MovieFlix Quiz</h1>
      <p>Akhtar<strong> GIVE ME AN A</strong></p>
    </header>
    <section>
      <div id="results">
        <form className="quizForm" onsubmit="return submitAnswers()">
          <h3>1. Favorite Genre</h3>
          <input type="radio" name="q1" value="a" id="q1a"/> a. Comedy<br></br>
          <input type="radio" name="q1" value="b" id="q1b"/> b. Romance<br></br>
          <input type="radio" name="q1" value="c" id="q1c"/> c. Horror<br></br>
          <input type="radio" name="q1" value="d" id="q1d"/> d. Action<br></br>
          <br></br>
          <h3>2. Favorite Streaming Service</h3>
          <input type="radio" name="q2" value="a" id="q2a"/> a. Hulu<br></br>
          <input type="radio" name="q2" value="b" id="q2b"/> b. Disney Plus<br></br>
          <input type="radio" name="q2" value="c" id="q2c"/> c. Netflix<br></br>
          <input type="radio" name="q2" value="d" id="q2d"/> d. HBO<br></br>      
          <br></br>
          <h3>3. Favorite Trilogy</h3>
          <input type="radio" name="q3" value="a" id="q3a"/> a. Star Wars<br></br>
          <input type="radio" name="q3" value="b" id="q3b"/> b. Twilight<br></br>  
          <input type="radio" name="q3" value="c" id="q3c"/> c. Avengers<br></br>  
          <input type="radio" name="q3" value="d" id="q3d"/> d. Fast & Furious<br></br>  
          <br></br>
          <h3>4. Favorite Professor</h3>
          <input type="radio" name="q4" value="a" id="q4a"/> a. Prof. Akhtar<br></br>
          <input type="radio" name="q4" value="b" id="q4b"/> b. Dr. Akhtar<br></br>  
          <input type="radio" name="q4" value="c" id="q4c"/> c. Maherukh Akhtar<br></br>  
          <input type="radio" name="q4" value="d" id="q4d"/> d. Grad Advisor Akhtar<br></br>  
          <br></br>
          <input type="submit" value="Submit Answers"/>
        </form>
      </div>
    </section>
    <footer>
      <p>Copyright &copy; Akhtar Corporation</p>
    </footer> 
</div>
  );
};

export default Quiz;
