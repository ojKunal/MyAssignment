import * as React from "react";
import Header from "../Header/Header";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import StudyNav from "../StudyNav/StudyNav";
import FlashcardContent from "../FlashcardContent/FlashcardContent";
import Footer from "../Footer/Footer";
import FlashcardNav from "../FlashcardNav/FlashcardNav";
import FAQItem from "../FAQItem/FAQItem";

function MyComponent() {
  const faqQuestions = [
    "Can education flashcards be used for all age groups?",
    "How do education flashcards work?",
    "Can education flashcards be used for test preparation?",
  ];
  

  return (
    <div className="flex flex-col items-center px-16 pt-0 pb-20 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1236px] max-md:max-w-full">
        <Header />
        <Breadcrumbs />
        <div className="flex justify-start items-start">
        <h1 className="mt-16  text-[#06286E] text-3xl font-bold text-center bg-clip-text max-md:mt-10 max-md:max-w-full">
          Relations and Functions ( Mathematics )
        </h1>
        </div>
        <StudyNav />
        <FlashcardContent />
        <FlashcardNav />
        <Footer />
        <div className="flex justify-start items-start">
        <h2   className="mt-40 text-5xl  text-[#06286E] font-bold tracking-wide bg-clip-text max-md:mt-10 max-md:max-w-full max-md:text-4xl ">
          FAQ
        </h2>
        </div>
        {faqQuestions.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
    </div>
  );
}

export default MyComponent;