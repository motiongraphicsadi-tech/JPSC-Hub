const quiz = [
    {
      question:
        "मुण्डा गाँव का प्रधान कौन होता है? / Who is the head of a Munda village?",
  
      options: [
        "पाहन (Pahan)",
        "मानकी (Manki)",
        "मुण्डा (Munda)",
        "महतो (Mahato)",
      ],
  
      answer:
        "मुण्डा (Munda)",
    },
  
    {
      question:
        "मुण्डा समाज का धार्मिक प्रमुख कौन होता है? / Who is the religious head of the Munda society?",
  
      options: [
        "पाहन (Pahan)",
        "महतो (Mahato)",
        "मानकी (Manki)",
        "ठाकुर (Thakur)",
      ],
  
      answer:
        "पाहन (Pahan)",
    },
  
    {
      question:
        "पाहन को दी जाने वाली लगान-मुक्त भूमि क्या कहलाती है? / What is the tax-free land granted to the Pahan called?",
  
      options: [
        "भूत-खेता (Bhut Kheta)",
        "डाली-कटारी भूमि (Dali-Katari Land)",
        "खूँटकट्टी भूमि (Khuntkatti Land)",
        "परती भूमि (Fallow Land)",
      ],
  
      answer:
        "डाली-कटारी भूमि (Dali-Katari Land)",
    },
  
    {
      question:
        "भूत-प्रेत की पूजा हेतु दी जाने वाली अतिरिक्त भूमि क्या कहलाती है? / What is the additional land granted for rituals against evil spirits called?",
  
      options: [
        "डाली-कटारी भूमि (Dali-Katari Land)",
        "खूँटकट्टी भूमि (Khuntkatti Land)",
        "भूत-खेता (Bhut Kheta)",
        "बंजर भूमि (Wasteland)",
      ],
  
      answer:
        "भूत-खेता (Bhut Kheta)",
    },
  
    {
      question:
        "मुण्डा एवं पाहन का सहायक कौन होता है? / Who assists the Munda and the Pahan?",
  
      options: [
        "महतो (Mahato)",
        "ठाकुर (Thakur)",
        "दीवान (Diwan)",
        "कोटवार (Kotwar)",
      ],
  
      answer:
        "महतो (Mahato)",
    },
  
    {
      question:
        "पाहन का सहायक कौन होता है? / Who assists the Pahan?",
  
      options: [
        "पुजार / पनभरा (Pujar / Panbhara)",
        "मानकी (Manki)",
        "लाल (Lal)",
        "ठाकुर (Thakur)",
      ],
  
      answer:
        "पुजार / पनभरा (Pujar / Panbhara)",
    },
  
    {
      question:
        "15–20 गाँवों के समूह से बनी पंचायत को क्या कहा जाता है? / What is a council consisting of 15–20 villages called?",
  
      options: [
        "अखड़ा (Akhra)",
        "पड़हा पंचायत (Parha Panchayat)",
        "ग्राम सभा (Gram Sabha)",
        "खूँटकट्टी पंचायत (Khuntkatti Panchayat)",
      ],
  
      answer:
        "पड़हा पंचायत (Parha Panchayat)",
    },
  
    {
      question:
        "पड़हा पंचायत का प्रमुख कौन होता है? / Who is the head of the Parha Panchayat?",
  
      options: [
        "पड़हा राजा (Parha Raja)",
        "मुण्डा (Munda)",
        "मानकी (Manki)",
        "पाहन (Pahan)",
      ],
  
      answer:
        "मानकी (Manki)",
    },
  
    {
      question:
        "पड़हा पंचायत का सर्वोच्च अधिकारी कौन होता है? / Who is the highest authority of the Parha Panchayat?",
  
      options: [
        "मानकी (Manki)",
        "पाहन (Pahan)",
        "पड़हा राजा (Parha Raja)",
        "महतो (Mahato)",
      ],
  
      answer:
        "पड़हा राजा (Parha Raja)",
    },
  
    {
      question:
        "पंचायत बैठकों का आयोजन कहाँ किया जाता है? / Where are Panchayat meetings held?",
  
      options: [
        "अखड़ा (Akhra)",
        "सरना स्थल (Sarna Sthal)",
        "देवस्थल (Sacred Place)",
        "चौपाल (Village Square)",
      ],
  
      answer:
        "अखड़ा (Akhra)",
    },
  
    {
      question:
        "पड़हा राजा का मंत्री कौन होता है? / Who acts as the minister of the Parha Raja?",
  
      options: [
        "ठाकुर (Thakur)",
        "दीवान (Diwan)",
        "लाल (Lal)",
        "कोटवार (Kotwar)",
      ],
  
      answer:
        "दीवान (Diwan)",
    },
  
    {
      question:
        "पड़हा राजा का सहायक कौन होता है? / Who assists the Parha Raja?",
  
      options: [
        "ठाकुर (Thakur)",
        "कोटवार (Kotwar)",
        "लाल (Lal)",
        "पाण्डेय (Pandey)",
      ],
  
      answer:
        "ठाकुर (Thakur)",
    },
  
    {
      question:
        "अभिलेख एवं दस्तावेजों की देखरेख कौन करता है? / Who maintains records and documents?",
  
      options: [
        "लाल (Lal)",
        "पाण्डेय (Pandey)",
        "कोटवार (Kotwar)",
        "महतो (Mahato)",
      ],
  
      answer:
        "पाण्डेय (Pandey)",
    },
  
    {
      question:
        "गाँव का प्रहरी एवं संदेशवाहक कौन होता है? / Who acts as the village watchman and messenger?",
  
      options: [
        "कोटवार (Kotwar)",
        "ठाकुर (Thakur)",
        "लाल (Lal)",
        "कर्ता (Karta)",
      ],
  
      answer:
        "कोटवार (Kotwar)",
    },
  
    {
      question:
        "सभा की कार्यवाही का संचालन कौन करता है? / Who conducts the proceedings of the assembly?",
  
      options: [
        "लाल (Lal)",
        "कर्ता (Karta)",
        "ठाकुर (Thakur)",
        "महतो (Mahato)",
      ],
  
      answer:
        "कर्ता (Karta)",
    },
  
    {
      question:
        "सभा का वकील कौन होता है? / Who acts as the advocate of the assembly?",
  
      options: [
        "पाण्डेय (Pandey)",
        "कोटवार (Kotwar)",
        "लाल (Lal)",
        "ठाकुर (Thakur)",
      ],
  
      answer:
        "लाल (Lal)",
    },
  
    {
      question:
        "खूँटकट्टी भूमि का स्वामी क्या कहलाता है? / What is the owner of Khuntkatti land called?",
  
      options: [
        "खूँटकट्टीदार (Khuntkattidar)",
        "मानकी (Manki)",
        "महतो (Mahato)",
        "पाहन (Pahan)",
      ],
  
      answer:
        "खूँटकट्टीदार (Khuntkattidar)",
    },
  
    {
      question:
        "छोटे अपराधों का निपटारा किस स्तर पर किया जाता है? / At which level are minor offences settled?",
  
      options: [
        "राज्य स्तर (State Level)",
        "राष्ट्रीय स्तर (National Level)",
        "ग्राम स्तर (Village Level)",
        "जिला स्तर (District Level)",
      ],
  
      answer:
        "ग्राम स्तर (Village Level)",
    },
  
    {
      question:
        "मुण्डा समाज में सर्वोच्च न्यायिक संस्था कौन-सी है? / Which is the highest judicial body in Munda society?",
  
      options: [
        "ग्राम सभा (Village Assembly)",
        "पड़हा पंचायत (Parha Panchayat)",
        "सरना समिति (Sarna Committee)",
        "खूँटकट्टी पंचायत (Khuntkatti Panchayat)",
      ],
  
      answer:
        "पड़हा पंचायत (Parha Panchayat)",
    },
  
    {
      question:
        "निम्नलिखित में से कौन-सा कथन सही है? / Which of the following statements is correct?",
  
      options: [
        "मुण्डा धार्मिक प्रमुख होता है। / Munda is the religious head.",
        "पाहन ग्राम प्रधान होता है। / Pahan is the village head.",
        "मानकी पड़हा पंचायत का प्रमुख होता है। / Manki is the head of Parha Panchayat.",
        "महतो पड़हा राजा होता है। / Mahato is the Parha Raja.",
      ],
  
      answer:
        "मानकी पड़हा पंचायत का प्रमुख होता है। / Manki is the head of Parha Panchayat.",
    },
  ];
  
  export default quiz;