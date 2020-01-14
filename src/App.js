import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setQuestions } from './actions';

import MainContainer from './container/MainContainer';
import Result from './container/Result';

class App extends React.Component{
  //props.setQuestions(["Question1", "Question2"]);
  componentDidMount = () => {
    this.props.setQuestions([
      {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: ["<script>" , "<javascript>", "<scripting>", "<js>" ]
    },
    {
        question: `What is the correct JavaScript syntax to change the content of the HTML element here => <p id="geek">GeeksforGeeks</p> `,
        answer: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
        options: [
          "document.getElement(“geek”).innerHTML=”I am a Geek”;" ,
          "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
          "document.getId(“geek”)=”I am a Geek”;", 
          "document.getElementById(“geek”).innerHTML=I am a Geek;" ]
    },
    {
      question: "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
      answer: "alert(“GeeksforGeeks”);",
      options: [
        "alertbox(“GeeksforGeeks”);" , 
        "msg(“GeeksforGeeks”);", 
        "msgbox(“GeeksforGeeks”);", 
        "alert(“GeeksforGeeks”);" ]
  },
  {
    question: "What is the correct syntax for referring to an external script called “geek.js”?",
    answer: "<script src=”geek.js”>",
    options: [
      "<script src=”geek.js”>" , 
    "<script href=”geek.js”>", 
    "<script ref=”geek.js”>", 
    "<script name=”geek.js”>" ]
},
{
  question: "The external JavaScript file must contain <script> tag. True or False?",
  answer: "False",
  options: ["True" , "False", "None", "Both" ]
},
{
  question: `Predict the output of the following JavaScript code. <script type="text/javascript"> 
  a = 8 + "8"; 
  document.write(a); 
  </script>`,
  answer: "88",
  options: ["16" , "Complilation Error", "88", "Run Time Error" ]
},
{
  question: `Predict the output of the following JavaScript code. 
  <script type="text/javascript"> 
var a="GeeksforGeeks"; 
var x=a.lastIndexOf("G"); 
document.write(x); 
</script> `,
  answer: "8",
  options: ["8" , "0", "9", "Error" ]
},
{
  question: `Which of the following is not a reserved word in JavaScript?",
  answer: "program",
  options: ["interface" , "throws", "program", "short" ]
},
{
  question: "Predict the output of the following JavaScript code.
  <script type="text/javascript" language="javascript"> 
  
var a = "GeeksforGeeks"; 
var result = a.substring(4, 5); 
document.write(result); 
  
</script> `,
  answer: "s",
  options: ["sf" , "ks", "s", "k" ]
},
]);
  }
  
  render(){
    // console.log("Options: ", this.props.questions)
    return (
      <div className="app-container">
        {this.props.questions.length === this.props.currentQuestion? <Result /> :
          <MainContainer/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion
  }
}
export default connect(mapStateToProps,{ setQuestions } )(App);
