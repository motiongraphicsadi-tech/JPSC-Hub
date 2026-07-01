import { QuizQuestion } from "@/types/quiz";

const quiz: QuizQuestion[] = [
  {
    id: "munda-governance-001",

    type: "practice",

    subject: "History of Jharkhand",

    topic: "Munda Governance System",

    difficulty: "Easy",

    question:
      "मुण्डा गाँव का प्रधान कौन होता है? / Who is the head of a Munda village?",

    options: [
      { id: "A", text: "पाहन (Pahan)" },
      { id: "B", text: "मानकी (Manki)" },
      { id: "C", text: "मुण्डा (Munda)" },
      { id: "D", text: "महतो (Mahato)" },
    ],

    correctOptionId: "C",

    explanation:
      "मुण्डा गाँव का प्रशासनिक प्रमुख होता है। धार्मिक कार्यों का प्रमुख पाहन होता है। / The Munda is the administrative head of the village, while the Pahan performs religious duties.",

    tags: [
      "munda",
      "governance",
      "village administration",
      "jpsc",
    ],
  },

  {
    id: "munda-governance-002",

    type: "practice",

    subject: "History of Jharkhand",

    topic: "Munda Governance System",

    difficulty: "Easy",

    question:
      "मुण्डा समाज का धार्मिक प्रमुख कौन होता है? / Who is the religious head of the Munda society?",

    options: [
      { id: "A", text: "पाहन (Pahan)" },
      { id: "B", text: "महतो (Mahato)" },
      { id: "C", text: "मानकी (Manki)" },
      { id: "D", text: "ठाकुर (Thakur)" },
    ],

    correctOptionId: "A",

    explanation:
      "पाहन धार्मिक अनुष्ठानों और सरना पूजा का संचालन करता है। / The Pahan performs religious rituals and conducts Sarna worship.",

    tags: [
      "pahan",
      "religion",
      "tribal administration",
      "jpsc",
    ],
  },

  {
    id: "munda-governance-003",

    type: "practice",

    subject: "History of Jharkhand",

    topic: "Munda Governance System",

    difficulty: "Medium",

    question:
      "पाहन को दी जाने वाली लगान-मुक्त भूमि क्या कहलाती है? / What is the tax-free land granted to the Pahan called?",

    options: [
      { id: "A", text: "भूत-खेता (Bhut Kheta)" },
      { id: "B", text: "डाली-कटारी भूमि (Dali-Katari Land)" },
      { id: "C", text: "खूँटकट्टी भूमि (Khuntkatti Land)" },
      { id: "D", text: "परती भूमि (Fallow Land)" },
    ],

    correctOptionId: "B",

    explanation:
      "पाहन को धार्मिक सेवाओं के बदले डाली-कटारी नामक लगान-मुक्त भूमि दी जाती थी। / Tax-free Dali-Katari land was granted to the Pahan for performing religious duties.",

    tags: [
      "land",
      "pahan",
      "tribal rights",
      "jpsc",
    ],
  },

  {
    id: "munda-governance-004",

    type: "practice",

    subject: "History of Jharkhand",

    topic: "Munda Governance System",

    difficulty: "Medium",

    question:
      "भूत-प्रेत की पूजा हेतु दी जाने वाली अतिरिक्त भूमि क्या कहलाती है? / What is the additional land granted for rituals against evil spirits called?",

    options: [
      { id: "A", text: "डाली-कटारी भूमि (Dali-Katari Land)" },
      { id: "B", text: "खूँटकट्टी भूमि (Khuntkatti Land)" },
      { id: "C", text: "भूत-खेता (Bhut Kheta)" },
      { id: "D", text: "बंजर भूमि (Wasteland)" },
    ],

    correctOptionId: "C",

    explanation:
      "भूत-खेता अतिरिक्त भूमि थी जो विशेष धार्मिक अनुष्ठानों के लिए प्रदान की जाती थी। / Bhut Kheta was additional land used for rituals related to spirits.",

    tags: [
      "bhut kheta",
      "land",
      "religion",
      "jpsc",
    ],
  },

  {
    id: "munda-governance-005",

    type: "practice",

    subject: "History of Jharkhand",

    topic: "Munda Governance System",

    difficulty: "Easy",

    question:
      "मुण्डा एवं पाहन का सहायक कौन होता है? / Who assists the Munda and the Pahan?",

    options: [
      { id: "A", text: "महतो (Mahato)" },
      { id: "B", text: "ठाकुर (Thakur)" },
      { id: "C", text: "दीवान (Diwan)" },
      { id: "D", text: "कोटवार (Kotwar)" },
    ],

    correctOptionId: "A",

    explanation:
      "महतो गाँव के प्रशासनिक कार्यों में मुण्डा एवं पाहन दोनों की सहायता करता है। / The Mahato assists both the Munda and the Pahan in village administration.",

    tags: [
      "mahato",
      "assistant",
      "administration",
      "jpsc",
    ],
  },
];

export default quiz;