const quiz = [
    {
      question:
        "पड़हा-पंचायत शासन व्यवस्था मुख्यतः किस जनजाति से संबंधित है? / The Parha Panchayat system is mainly associated with which tribe?",
  
      options: [
        "मुण्डा (Munda)",
        "संथाल (Santhal)",
        "उराँव (Oraon)",
        "हो (Ho)",
      ],
  
      answer:
        "उराँव (Oraon)",
    },
  
    {
      question:
        "गाँव का प्रधान किसे कहा जाता है? / Who is the head of the village?",
  
      options: [
        "पाहन (Pahan)",
        "महतो (Mahato)",
        "बैगा (Baiga)",
        "पड़हा राजा (Parha Raja)",
      ],
  
      answer:
        "महतो (Mahato)",
    },
  
    {
      question:
        "महतो का सहायक कौन होता है? / Who assists the Mahato?",
  
      options: [
        "बैगा (Baiga)",
        "पाहन (Pahan)",
        "मांझी (Manjhi)",
        "दीवान (Diwan)",
      ],
  
      answer:
        "मांझी (Manjhi)",
    },
  
    {
      question:
        "पड़हा पंचायत सामान्यतः कितने गाँवों से मिलकर बनती है? / A Parha Panchayat generally consists of how many villages?",
  
      options: [
        "10, 15, 20 villages",
        "5, 7, 11, 21 or 22 villages",
        "12, 18, 24 villages",
        "25, 30 villages",
      ],
  
      answer:
        "5, 7, 11, 21 or 22 villages",
    },
  
    {
      question:
        "पड़हा पंचायत का सर्वोच्च अधिकारी कौन होता है? / Who is the highest authority of the Parha Panchayat?",
  
      options: [
        "महतो (Mahato)",
        "पाहन (Pahan)",
        "पड़हा राजा (Parha Raja)",
        "बैगा (Baiga)",
      ],
  
      answer:
        "पड़हा राजा (Parha Raja)",
    },
  
    {
      question:
        "गाँव का धार्मिक प्रमुख कौन होता है? / Who is the religious head of the village?",
  
      options: [
        "मांझी (Manjhi)",
        "बैगा (Baiga)",
        "पाहन (Pahan)",
        "महतो (Mahato)",
      ],
  
      answer:
        "पाहन (Pahan)",
    },
  
    {
      question:
        "पाहन का सहायक कौन होता है? / Who assists the Pahan?",
  
      options: [
        "मांझी (Manjhi)",
        "बैगा (Baiga)",
        "महतो (Mahato)",
        "दीवान (Diwan)",
      ],
  
      answer:
        "बैगा (Baiga)",
    },
  
    {
      question:
        "पाहन को दी जाने वाली भूमि क्या कहलाती है? / The land granted to the Pahan is known as?",
  
      options: [
        "डाली-कटारी भूमि (Dali-Katari Land)",
        "भूत खेता (Bhut Kheta)",
        "पहनई भूमि (Pahanai Land)",
        "खूँटकट्टी भूमि (Khuntkatti Land)",
      ],
  
      answer:
        "पहनई भूमि (Pahanai Land)",
    },
  
    {
      question:
        "बैगा का प्रमुख कार्य क्या है? / What is the major function of the Baiga?",
  
      options: [
        "लगान वसूली (Tax collection)",
        "ग्राम रक्षा (Village security)",
        "ग्रामीण देवताओं की पूजा (Worship of village deities)",
        "न्यायिक कार्य (Judicial work)",
      ],
  
      answer:
        "ग्रामीण देवताओं की पूजा (Worship of village deities)",
    },
  
    {
      question:
        "पड़हा पंच का आयोजन कब किया जाता है? / On which occasion is Parha Panch organized?",
  
      options: [
        "करम पर्व (Karma Festival)",
        "सरहुल पर्व (Sarhul Festival)",
        "आश्विन पूर्णिमा (Ashwin Purnima)",
        "होली (Holi)",
      ],
  
      answer:
        "आश्विन पूर्णिमा (Ashwin Purnima)",
    },
  
    {
      question:
        "किस प्रकार के गाँव को दूषभैया गाँव कहा जाता है? / Which type of village is called a Dushbhaiya village?",
  
      options: [
        "राजा गाँव (Raja village)",
        "दीवान गाँव (Diwan village)",
        "दूसरे पड़हा में जाने वाला गाँव (Village joining another Parha)",
        "नया गाँव (New village)",
      ],
  
      answer:
        "दूसरे पड़हा में जाने वाला गाँव (Village joining another Parha)",
    },
  
    {
      question:
        "दूषभैया गाँव नए पड़हा में सम्मिलित होने पर क्या कहलाता है? / What is a Dushbhaiya village called after joining a new Parha?",
  
      options: [
        "राजा गाँव (Raja village)",
        "अंतर्पड़हा (Antar-Parha)",
        "कोटवार गाँव (Kotwar village)",
        "प्रजा गाँव (Praja village)",
      ],
  
      answer:
        "अंतर्पड़हा (Antar-Parha)",
    },
  
    {
      question:
        "महतो के उदय से पूर्व गाँव का पुरोहित एवं लौकिक प्रमुख कौन था? / Who served as the priest and secular head before the rise of Mahato?",
  
      options: [
        "बैगा (Baiga)",
        "पाहन (Pahan)",
        "मांझी (Manjhi)",
        "पड़हा राजा (Parha Raja)",
      ],
  
      answer:
        "बैगा (Baiga)",
    },
  
    {
      question:
        "करम पर्व के अवसर पर सबसे पहले करम वृक्ष कौन गाड़ता है? / Who plants the Karma tree first during the Karma festival?",
  
      options: [
        "पाहन (Pahan)",
        "बैगा (Baiga)",
        "महतो (Mahato)",
        "मांझी (Manjhi)",
      ],
  
      answer:
        "महतो (Mahato)",
    },
  
    {
      question:
        "निम्न में से कौन पड़हा के अंतर्गत गाँवों का प्रकार नहीं है? / Which of the following is NOT a type of village under Parha?",
  
      options: [
        "राजा गाँव (Raja village)",
        "दीवान गाँव (Diwan village)",
        "कोटवार गाँव (Kotwar village)",
        "जागीर गाँव (Jagir village)",
      ],
  
      answer:
        "जागीर गाँव (Jagir village)",
    },
  
    {
      question:
        "पड़हा राजा का प्रमुख कार्य क्या है? / What is the primary role of the Parha Raja?",
  
      options: [
        "धार्मिक अनुष्ठान (Religious rituals)",
        "विभिन्न गाँवों के विवादों का समाधान (Settlement of inter-village disputes)",
        "कर संग्रह (Tax collection)",
        "सैनिक कार्य (Military functions)",
      ],
  
      answer:
        "विभिन्न गाँवों के विवादों का समाधान (Settlement of inter-village disputes)",
    },
  
    {
      question:
        "पड़हा पंचायत किस स्तर की पंचायत है? / What type of council is the Parha Panchayat?",
  
      options: [
        "ग्राम स्तर (Village level)",
        "अंतरग्रामीय स्तर (Inter-village level)",
        "राज्य स्तर (State level)",
        "राष्ट्रीय स्तर (National level)",
      ],
  
      answer:
        "अंतरग्रामीय स्तर (Inter-village level)",
    },
  
    {
      question:
        "निम्नलिखित में से कौन सही सुमेलित है? / Which of the following is correctly matched?",
  
      options: [
        "महतो — धार्मिक प्रमुख / Mahato — Religious head",
        "बैगा — पाहन का सहायक / Baiga — Assistant of Pahan",
        "मांझी — पड़हा राजा / Manjhi — Parha Raja",
        "पाहन — महतो का सहायक / Pahan — Assistant of Mahato",
      ],
  
      answer:
        "बैगा — पाहन का सहायक / Baiga — Assistant of Pahan",
    },
  
    {
      question:
        "पहनई भूमि किससे संबंधित है? / Pahanai land is associated with whom?",
  
      options: [
        "महतो (Mahato)",
        "पाहन (Pahan)",
        "मांझी (Manjhi)",
        "बैगा (Baiga)",
      ],
  
      answer:
        "पाहन (Pahan)",
    },
  
    {
      question:
        "पड़हा पंचायत व्यवस्था में सर्वोच्च पदाधिकारी कौन माना जाता है? / Who is considered the supreme authority in the Parha Panchayat system?",
  
      options: [
        "पाहन (Pahan)",
        "महतो (Mahato)",
        "पड़हा दीवान (Parha Diwan)",
        "पड़हा राजा (Parha Raja)",
      ],
  
      answer:
        "पड़हा राजा (Parha Raja)",
    },
  ];
  
  export default quiz;