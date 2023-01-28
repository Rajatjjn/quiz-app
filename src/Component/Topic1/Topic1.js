import React, { useState,useEffect } from 'react'
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

function Topic1() {
  const nevigate = useNavigate();
    const questions = [
        {
          questionText: "Which one below is CM of chhattisgarh?",
          answerOptions: [
            { answerText: "Bhupesh Baghel", isCorrect: true },
            { answerText: "Shivraj Chauhan", isCorrect: false },
            { answerText: "Amit Shah", isCorrect: false },
            { answerText: "Nitin Gadkari", isCorrect: false },
          ],
        },
        {
          questionText: " Which body framed the Constitution of Independent India?",
          answerOptions: [
            { answerText: "Drafting Committee", isCorrect: true },
            { answerText: "Constituent Assembly", isCorrect: false },
            { answerText: "Union Constitution Committee", isCorrect: false },
            { answerText: "A Working Committee", isCorrect: false },
          ],
        },
        {
          questionText: "The constituent Assembly was set up in :?",
          answerOptions: [
            { answerText: "1946", isCorrect: true },
            { answerText: "1947", isCorrect: false },
            { answerText: "1934", isCorrect: false },
            { answerText: "1990", isCorrect: false },
          ],
        },
        {
          questionText: "Who among the following was the Chairman of Steering Committee of the Constituent Assembly ?",
          answerOptions: [
            { answerText: "B. R. Ambedkar", isCorrect: false },
            { answerText: "J. B. Kripalani", isCorrect: false },
            { answerText: " Tej Bahadur Sapru", isCorrect: false },
            { answerText: "Rajendra Prasad", isCorrect: true },
          ],
        },
      ];
    
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [score, setScore] = useState(0);
    
      const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
          swal({
            title: "Good job!",
            text: "Correct Answer",
            icon: "success",
          });
        }

    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowScore(true);
        }
      };

      
      return (
        <div className="app">
          {showScore ? (
            <div className="score-section">
              You scored {score} out of {questions.length}
              <button onClick={()=> nevigate("/")}>Go Home</button>
          
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      );
}

export default Topic1
