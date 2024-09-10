import React from "react";
import { useState } from "react";
import "./FAQ.css";
import Footer from "../Footer";

export default function FAQ() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  const faqs = [
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    },
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    },
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    },
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    },
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    },
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    },
    {
      question: "What is the IP to the server?",
      answer: "The IP to our network is play.endpixel.gg"
    }
  ];
  return (
    <>
      <div className="FAQContainer">
        <h1>Frequently Asked Questions</h1>
        <div className="FAQList">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="FAQItem" onClick={() => toggleQuestion(index)}>
                <span className="FAQQuestion">{faq.question}</span>
                <span
                  className={`FAQArrow ${
                    openQuestionIndex === index ? "open" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              {openQuestionIndex === index && (
                <div className="FAQAnswer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
