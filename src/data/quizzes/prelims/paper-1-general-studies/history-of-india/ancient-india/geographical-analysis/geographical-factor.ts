import { QuizQuestion } from "@/types/quiz";

const quiz: QuizQuestion[] = [

    {
        id: "jharkhand-location-001",
      
        type: "pyq",
      
        exam: {
          commission: "JPSC",
          stage: "Prelims",
          year: 2011,
        },
      
        subject: "Jharkhand Geography",
      
        topic: "Location of Jharkhand",
      
        difficulty: "Easy",
      
        answerType: "single",
      
        question:
          "झारखण्ड किस गोलार्द्ध में स्थित है? / In which hemisphere is Jharkhand located?",
      
        options: [
          {
            id: "A",
            text: "पूर्वी गोलार्द्ध (Eastern Hemisphere)",
          },
          {
            id: "B",
            text: "पश्चिमी गोलार्द्ध (Western Hemisphere)",
          },
          {
            id: "C",
            text: "उत्तरी गोलार्द्ध (Northern Hemisphere)",
          },
          {
            id: "D",
            text: "दक्षिणी गोलार्द्ध (Southern Hemisphere)",
          },
        ],
      
        correctOptionId: "C",
      
        explanation:
          "झारखण्ड भारत के उत्तरी गोलार्द्ध में स्थित है। यह भूमध्य रेखा के उत्तर तथा प्रधान मध्यान्ह रेखा (Prime Meridian) के पूर्व में स्थित होने के कारण उत्तरी एवं पूर्वी दोनों गोलार्द्धों का भाग है। ./Jharkhand is located in the Northern Hemisphere. Since it lies north of the Equator and east of the Prime Meridian, it forms part of both the Northern and Eastern Hemispheres.",
      
        tags: [
          "jharkhand",
          "jharkhand-geography",
          "location-of-jharkhand",
          "hemisphere",
          "northern-hemisphere",
          "eastern-hemisphere",
          "jpsc",
          "pyq",
        ],
      },


];

export default quiz;