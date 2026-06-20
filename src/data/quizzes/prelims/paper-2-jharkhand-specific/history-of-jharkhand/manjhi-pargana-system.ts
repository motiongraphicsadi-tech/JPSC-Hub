const quiz = [
    {
      question:
        "मांझी-परगना शासन व्यवस्था किस जनजाति से संबंधित है? / The Manjhi-Pargana system is associated with which tribe?",
  
      options: [
        "मुण्डा (Munda)",
        "उराँव (Oraon)",
        "संथाल (Santhal)",
        "हो (Ho)",
      ],
  
      answer:
        "संथाल (Santhal)",
    },
  
    {
      question:
        "संथाल गाँव के प्रधान को क्या कहा जाता है? / What is the head of a Santhal village called?",
  
      options: [
        "नायके (Nayake)",
        "जोग मांझी (Jog Manjhi)",
        "मांझी (Manjhi)",
        "परगनैत (Parganait)",
      ],
  
      answer:
        "मांझी (Manjhi)",
    },
  
    {
      question:
        "मांझी का प्रमुख सहायक कौन होता है? / Who is the chief assistant of the Manjhi?",
  
      options: [
        "जोग पारनिक (Jog Parnik)",
        "जोग मांझी (Jog Manjhi)",
        "नायके (Nayake)",
        "कुड़ाम नायके (Kudam Nayake)",
      ],
  
      answer:
        "जोग मांझी (Jog Manjhi)",
    },
  
    {
      question:
        "जोग मांझी का सहायक कौन होता है? / Who assists the Jog Manjhi?",
  
      options: [
        "नायके (Nayake)",
        "परगनैत (Parganait)",
        "जोग पारनिक (Jog Parnik)",
        "लासेर टांगाय (Laser Tangay)",
      ],
  
      answer:
        "जोग पारनिक (Jog Parnik)",
    },
  
    {
      question:
        "संथाल गाँव का धार्मिक प्रमुख कौन होता है? / Who is the religious head of a Santhal village?",
  
      options: [
        "मांझी (Manjhi)",
        "नायके (Nayake)",
        "परगनैत (Parganait)",
        "चौकीदार (Chowkidar)",
      ],
  
      answer:
        "नायके (Nayake)",
    },
  
    {
      question:
        "नायके का सहायक कौन होता है? / Who assists the Nayake?",
  
      options: [
        "जोग मांझी (Jog Manjhi)",
        "कुड़ाम नायके (Kudam Nayake)",
        "लासेर टांगाय (Laser Tangay)",
        "भांडारी पूजा (Bhandari Puja)",
      ],
  
      answer:
        "कुड़ाम नायके (Kudam Nayake)",
    },
  
    {
      question:
        "गाँव की सुरक्षा का कार्य कौन करता है? / Who is responsible for village security?",
  
      options: [
        "जोग मांझी (Jog Manjhi)",
        "चौकीदार (Chowkidar)",
        "लासेर टांगाय (Laser Tangay)",
        "परगनैत (Parganait)",
      ],
  
      answer:
        "लासेर टांगाय (Laser Tangay)",
    },
  
    {
      question:
        "पुलिस की भाँति कार्य करने वाला अधिकारी कौन है? / Which official functions like a police officer?",
  
      options: [
        "नायके (Nayake)",
        "चौकीदार (Chowkidar)",
        "जोग पारनिक (Jog Parnik)",
        "भांडारी पूजा (Bhandari Puja)",
      ],
  
      answer:
        "चौकीदार (Chowkidar)",
    },
  
    {
      question:
        "परगनैत कितने गाँवों का प्रमुख होता है? / The Parganait is the head of how many villages?",
  
      options: [
        "5–8 गाँव (5–8 villages)",
        "10–12 गाँव (10–12 villages)",
        "15–20 गाँव (15–20 villages)",
        "21–22 गाँव (21–22 villages)",
      ],
  
      answer:
        "15–20 गाँव (15–20 villages)",
    },
  
    {
      question:
        "मांझी द्वारा न सुलझाए गए मामलों का निपटारा कौन करता है? / Who settles disputes unresolved by the Manjhi?",
  
      options: [
        "नायके (Nayake)",
        "जोग मांझी (Jog Manjhi)",
        "परगनैत (Parganait)",
        "चौकीदार (Chowkidar)",
      ],
  
      answer:
        "परगनैत (Parganait)",
    },
  
    {
      question:
        "लासेर टांगाय का मुख्य कार्य क्या है? / What is the primary duty of Laser Tangay?",
  
      options: [
        "पूजा कराना (Conduct worship)",
        "विवाह संबंधी सूचना रखना (Maintain marriage records)",
        "गाँव की सुरक्षा करना (Protect the village)",
        "लगान वसूलना (Collect taxes)",
      ],
  
      answer:
        "गाँव की सुरक्षा करना (Protect the village)",
    },
  
    {
      question:
        "भांडारी पूजा क्या है? / What is Bhandari Puja?",
  
      options: [
        "एक दण्ड व्यवस्था (A punishment system)",
        "वरिष्ठ व्यक्तियों का समूह (Group of senior persons)",
        "धार्मिक भूमि (Religious land)",
        "ग्राम पंचायत (Village council)",
      ],
  
      answer:
        "वरिष्ठ व्यक्तियों का समूह (Group of senior persons)",
    },
  
    {
      question:
        "मांझी की अनुपस्थिति में उसके कार्य कौन करता है? / Who performs the duties of Manjhi in his absence?",
  
      options: [
        "नायके (Nayake)",
        "परगनैत (Parganait)",
        "जोग मांझी (Jog Manjhi)",
        "जोग पारनिक (Jog Parnik)",
      ],
  
      answer:
        "जोग मांझी (Jog Manjhi)",
    },
  
    {
      question:
        "संथाल समाज में सबसे कठोर दण्ड क्या माना जाता है? / Which is considered the most severe punishment in Santhal society?",
  
      options: [
        "जुर्माना (Fine)",
        "बहिष्कार (Excommunication)",
        "बिटलाहा (Bitalaha)",
        "कारावास (Imprisonment)",
      ],
  
      answer:
        "बिटलाहा (Bitalaha)",
    },
  
    {
      question:
        "‘विलाला’ क्या है? / What is 'Vilala'?",
  
      options: [
        "ग्राम सभा (Village assembly)",
        "परगना का प्रमुख (Head of Pargana)",
        "सबसे कठोर दण्ड (Most severe punishment)",
        "धार्मिक अनुष्ठान (Religious ritual)",
      ],
  
      answer:
        "सबसे कठोर दण्ड (Most severe punishment)",
    },
  
    {
      question:
        "निम्नलिखित में से कौन सही सुमेलित है? / Which of the following is correctly matched?",
  
      options: [
        "मांझी — धार्मिक प्रमुख / Manjhi — Religious head",
        "नायके — धार्मिक प्रमुख / Nayake — Religious head",
        "जोग मांझी — परगनैत / Jog Manjhi — Parganait",
        "चौकीदार — परगना प्रमुख / Chowkidar — Pargana head",
      ],
  
      answer:
        "नायके — धार्मिक प्रमुख / Nayake — Religious head",
    },
  
    {
      question:
        "जोग मांझी मुख्यतः किससे संबंधित मामलों पर निगरानी रखता है? / Jog Manjhi mainly supervises matters related to?",
  
      options: [
        "धार्मिक अपराध (Religious offences)",
        "विवाह संबंधी मामले (Marriage-related matters)",
        "बाहरी सुरक्षा (External security)",
        "कर वसूली (Tax collection)",
      ],
  
      answer:
        "विवाह संबंधी मामले (Marriage-related matters)",
    },
  
    {
      question:
        "गंभीर विवादों के निपटारे में अंतिम निर्णय कौन देता है? / Who gives the final decision in serious disputes?",
  
      options: [
        "मांझी (Manjhi)",
        "नायके (Nayake)",
        "परगनैत (Parganait)",
        "जोग पारनिक (Jog Parnik)",
      ],
  
      answer:
        "परगनैत (Parganait)",
    },
  
    {
      question:
        "मांझी-परगना व्यवस्था की प्रकृति कैसी मानी जाती है? / The Manjhi-Pargana system is considered to be?",
  
      options: [
        "राजशाही (Monarchical)",
        "सैन्य (Military)",
        "लोकतांत्रिक (Democratic)",
        "धर्मतांत्रिक (Theocratic)",
      ],
  
      answer:
        "लोकतांत्रिक (Democratic)",
    },
  
    {
      question:
        "संथाल समाज में गाँव से निष्कासित अपराधी को क्या कहा जाता है? / What is an expelled offender called in Santhal society?",
  
      options: [
        "बिटलाहा (Bitalaha)",
        "लासेर टांगाय (Laser Tangay)",
        "परगनैत (Parganait)",
        "जोग पारनिक (Jog Parnik)",
      ],
  
      answer:
        "बिटलाहा (Bitalaha)",
    },
  ];
  
  export default quiz;