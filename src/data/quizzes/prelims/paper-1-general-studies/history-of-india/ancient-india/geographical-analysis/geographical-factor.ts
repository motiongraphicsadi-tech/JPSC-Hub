import { QuizQuestion } from "@/types/quiz";

const quiz: QuizQuestion[] = [
  {
    id: "prehistoric-india-001",

    type: "pyq",

    exam: {
      commission: "UP Lower Subordinate",
      stage: "Prelims",
      year: 2015,
    },

    subject: "History of India",

    topic: "Prehistoric India",

    difficulty: "Easy",

    question:
      "भारत में प्रथम पुरापाषाण उपकरण की खोज करने वाले रॉबर्ट ब्रूस फूट क्या थे? / Robert Bruce Foote, who discovered the first Palaeolithic tool in India, was a/an—",

    options: [
      { id: "A", text: "भूवैज्ञानिक (Geologist)" },
      { id: "B", text: "पुरातत्त्वविद् (Archaeologist)" },
      { id: "C", text: "पुरावनस्पतिविज्ञानी (Paleobotanist)" },
      { id: "D", text: "इतिहासकार (Historian)" },
    ],

    correctOptionId: "A",

    explanation:
      "रॉबर्ट ब्रूस फूट एक ब्रिटिश भूवैज्ञानिक तथा पुरातत्त्वविद् थे। उन्हें भारतीय प्रागैतिहासिक अध्ययन का जनक माना जाता है। प्रश्न में एकल उत्तर अपेक्षित है, इसलिए आधिकारिक उत्तर 'A' रखा गया है, हालांकि ऐतिहासिक रूप से वे Archaeologist भी थे.",

    tags: [
      "prehistoric-india",
      "robert-bruce-foote",
      "palaeolithic",
      "archaeology",
      "stone-age",
      "pyq",
      "upsc-history",
    ],
  },

  {
    id: "prehistoric-india-002",

    type: "pyq",

    exam: {
      commission: "UPPCS",
      stage: "Prelims",
      year: 2010,
    },

    subject: "History of India",

    topic: "Prehistoric India",

    difficulty: "Easy",

    question:
      "कोपेनहेगन संग्रहालय के संग्रह के आधार पर विकसित पाषाण, कांस्य एवं लौह युगों के त्रियुग सिद्धांत (Three-Age System) का प्रतिपादन किसने किया? / The Three-Age System, dividing prehistory into Stone, Bronze, and Iron Ages based on the collection of the Copenhagen Museum, was propounded by—",

    options: [
      { id: "A", text: "थॉमसेन (Thomsen)" },
      { id: "B", text: "लुबॉक (Lubbock)" },
      { id: "C", text: "टायलर (Tylor)" },
      { id: "D", text: "चाइल्ड (Childe)" },
    ],

    correctOptionId: "A",

    explanation:
      "त्रियुग सिद्धांत (Three-Age System) का प्रतिपादन डेनमार्क के पुरातत्त्वविद् क्रिश्चियन युर्गेनसेन थॉमसेन (Christian Jürgensen Thomsen) ने किया। उन्होंने कोपेनहेगन संग्रहालय की पुरावस्तुओं को क्रमशः पाषाण, कांस्य और लौह युगों में वर्गीकृत किया, जो बाद में प्रागैतिहासिक काल के अध्ययन का मानक आधार बना।",

    tags: [
      "prehistoric-india",
      "three-age-system",
      "thomsen",
      "stone-age",
      "bronze-age",
      "iron-age",
      "archaeology",
      "pyq",
      "uppcs",
    ],
  },

  {
    id: "prehistoric-india-003",

    type: "pyq",

    exam: {
      commission: "UPPCS",
      stage: "Mains",
      year: 2006,
    },

    subject: "History of India",

    topic: "Mesolithic Age",

    difficulty: "Easy",

    question:
      "उत्खनन साक्ष्यों के अनुसार पशुओं का पालतूकरण किस काल में प्रारम्भ हुआ? / According to the excavated evidence, the domestication of animals began in—",

    options: [
      {
        id: "A",
        text: "निम्न पुरापाषाण काल (Lower Palaeolithic Period)",
      },
      {
        id: "B",
        text: "मध्य पुरापाषाण काल (Middle Palaeolithic Period)",
      },
      {
        id: "C",
        text: "उच्च पुरापाषाण काल (Upper Palaeolithic Period)",
      },
      {
        id: "D",
        text: "मध्यपाषाण काल (Mesolithic Period)",
      },
    ],

    correctOptionId: "D",

    explanation:
      "पुरातात्त्विक साक्ष्यों के अनुसार भारत में पशुओं के पालतूकरण का प्रारम्भ मध्यपाषाण (Mesolithic) काल में हुआ। इसके प्रारम्भिक प्रमाण मध्य प्रदेश के आदमगढ़ (Adamgarh) तथा राजस्थान के बागोर (Bagor) से प्राप्त हुए हैं। कुत्ता सबसे प्रारम्भिक पालतू पशुओं में से एक माना जाता है।",

    tags: [
      "mesolithic-age",
      "prehistoric-india",
      "animal-domestication",
      "adamgarh",
      "bagor",
      "stone-age",
      "archaeology",
      "pyq",
      "uppcs",
    ],
  },

];

export default quiz;