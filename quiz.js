
        const langBtn = document.getElementById("langBtn");
    const langOptions = document.getElementById("langOptions");

    // Toggle show/hide on button click
    langBtn.addEventListener("click", () => {
      langOptions.classList.toggle("show");
    });

    // Hide when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".lang-box")) {
        langOptions.classList.remove("show");
      }
    });

    // Hide after selecting a language
    langOptions.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        langOptions.classList.remove("show");
        // alert("Language Selected: " + btn.innerText); // optional feedback
      });
    });

        // Question Bank - 12 questions per section (48 total)
        const questionBank = {
            section1: [ // Script and Vocabulary (12 questions)
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img1.png",
                    imageWidth: 600,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "いなか",  correct: false},
                        {ja: "とかい", correct: true},
                        {ja: "ビル",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img2.png",
                    imageWidth:300,
                    imageHeight: 200,
                    score: 5,
                    options: [
                        {ja: "混む",  correct: true},
                        {ja: "車", correct: false},
                        {ja: "走る",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img3.png",
                    imageWidth: 300,
                    imageHeight: 230,
                    score: 5,
                    options: [
                        {ja: "すてる",  correct: false},
                        {ja: "熱い水", correct: false},
                        {ja: "そそぐ",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Look at the illustration and choose the correct word.",
                    
                    imageUrl: "set1-img/img4.png",
                    imageWidth: 270,
                    imageHeight: 200,
                    score: 5,
                    options: [
                        {ja: "勉強",  correct: false},
                        {ja: "描く", correct: false},
                        {ja: "書道",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img5.png",
                    imageWidth: 520,
                    imageHeight: 120,
                    score: 5,
                    options: [
                        {ja: "ひろうえん",  correct: false},
                        {ja: "新築祝い", correct: false},
                        {ja: "お見舞い",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img6.png",
                    imageWidth: 400,
                    imageHeight: 100,
                    score: 5,
                    options: [
                        {ja: "ふつ",  correct: false},
                        {ja: "ふづう", correct: false},
                        {ja: "ふつう",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img7.png",
                    imageWidth: 310,
                    imageHeight: 210,
                    score: 5,
                    options: [
                        {ja: "そうですね",  correct: false},
                        {ja: "そんなことないです", correct: true},
                        {ja: "そうなんですか",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img8.png",
                    imageWidth: 350,
                    imageHeight: 150,
                    score: 5,
                    options: [
                        {ja: "し",  correct: false},
                        {ja: "の", correct: true},
                        {ja: "か",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img9.png",
                    imageWidth: 400,
                    imageHeight: 150,
                    score: 5,
                    options: [
                        {ja: "片付けなくちゃ",  correct: true},
                        {ja: "片付けるし", correct: false},
                        {ja: "片付けるでしょう",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img10.png",
                    imageWidth: 600,
                    imageHeight: 80,
                    score: 5,
                    options: [
                        {ja: "にゅいんした",  correct: false},
                        {ja: "たいいんした", correct: false},
                        {ja: "にゅういんした",  correct: true},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img11.png",
                    imageWidth: 600,
                    imageHeight: 180,
                    score: 5,
                    options: [
                        {ja: "知られます",  correct: false},
                        {ja: "見られます", correct: true},
                        {ja: "ビル行われます",  correct: false},
                       
                    ]
                },
                {
                    questionJA: "Read the sentence and choose the word that fits in (     ) the most.",
                    
                    imageUrl: "set1-img/img12.png",
                    imageWidth: 600,
                    imageHeight: 180,
                    score: 5,
                    options: [
                        {ja: "なんですか",  correct: false},
                        {ja: "どこですか", correct: false},
                        {ja: "どうですか",  correct: true},
                       
                    ]
                },
            ],
            
            section2: [ // Conversation and Expression (12 questions)
                {
                    questionJA: "A: 「今日は何時に起きましたか。」 B: 「＿＿＿＿起きました。」",
                    questionEN: "A: 'What time did you wake up today?' B: 'I woke up at ____.'",
                    score: 5,
                    options: [
                        {ja: "7時に", en: "at 7 o'clock", correct: true},
                        {ja: "7時を", en: "7 o'clock (object)", correct: false},
                        {ja: "7時で", en: "by 7 o'clock", correct: false},
                        {ja: "7時が", en: "7 o'clock (subject)", correct: false}
                    ]
                },
                {
                    questionJA: "店員: 「いらっしゃいませ。」 客: 「＿＿＿＿」",
                    questionEN: "Store clerk: 'Welcome!' Customer: '____'",
                    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
                    imageWidth: 400,
                    imageHeight: 250,
                    score: 5,
                    options: [
                        {ja: "ありがとうございます", en: "Thank you", correct: true},
                        {ja: "すみません、これをください", en: "Excuse me, I'll take this", correct: false},
                        {ja: "さようなら", en: "Goodbye", correct: false},
                        {ja: "おはようございます", en: "Good morning", correct: false}
                    ]
                },
                {
                    questionJA: "「私は学校＿＿行きます。」正しい助詞を選んでください。",
                    questionEN: "'I go ___ school.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "に", en: "to", correct: true},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "で", en: "at/by", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "A: 「お疲れ様でした。」 B: 「＿＿＿＿」",
                    questionEN: "A: 'Good job today.' B: '____'",
                    score: 5,
                    options: [
                        {ja: "お疲れ様でした", en: "Good job to you too", correct: true},
                        {ja: "いただきます", en: "Thank you for the food", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                },
                {
                    questionJA: "「図書館＿＿本を借ります。」正しい助詞を選んでください。",
                    questionEN: "'I borrow books ___ the library.' Select the correct particle.",
                    score: 5,
                    options: [
                        {ja: "で", en: "at", correct: true},
                        {ja: "に", en: "to", correct: false},
                        {ja: "を", en: "object marker", correct: false},
                        {ja: "から", en: "from", correct: false}
                    ]
                }

            ],
            
            section3: [ // Listening (12 questions)
                {
                    questionJA: "音声を聞いて、男の人は何時に会社に行きますか。",
                    questionEN: "Listen to the audio. What time does the man go to the company?",
                    hasAudio: true,
                    audioUrl: "audio.mp3",
                    imageUrl: "ganesh.png",
                    imageWidth: 400,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "7時", en: "7 o'clock", correct: true},
                        {ja: "8時", en: "8 o'clock", correct: false},
                        {ja: "9時", en: "9 o'clock", correct: false},
                        {ja: "10時", en: "10 o'clock", correct: false}
                    ]
                },
                {
                    questionJA: "女の人は何を買いに行きますか。",
                    questionEN: "What is the woman going to buy?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "スーパーでパンと牛乳を買います。",
                    score: 5,
                    options: [
                        {ja: "パンと牛乳", en: "bread and milk", correct: true},
                        {ja: "肉と野菜", en: "meat and vegetables", correct: false},
                        {ja: "お米とお茶", en: "rice and tea", correct: false},
                        {ja: "魚と卵", en: "fish and eggs", correct: false}
                    ]
                },
                {
                    questionJA: "音声を聞いて、今日の天気はどうですか。",
                    questionEN: "Listen to the audio. How is today's weather?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "今日はとても暑いです。",
                    score: 5,
                    options: [
                        {ja: "暑いです", en: "hot", correct: true},
                        {ja: "寒いです", en: "cold", correct: false},
                        {ja: "雨です", en: "rainy", correct: false},
                        {ja: "雪です", en: "snowy", correct: false}
                    ]
                },
                {
                    questionJA: "男の人はどこで昼ごはんを食べますか。",
                    questionEN: "Where does the man eat lunch?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "会社の食堂で昼ごはんを食べます。",
                    score: 5,
                    options: [
                        {ja: "会社の食堂", en: "company cafeteria", correct: true},
                        {ja: "レストラン", en: "restaurant", correct: false},
                        {ja: "家", en: "home", correct: false},
                        {ja: "コンビニ", en: "convenience store", correct: false}
                    ]
                },
                {
                    questionJA: "女の人は何時に寝ますか。",
                    questionEN: "What time does the woman go to sleep?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "毎晩11時に寝ます。",
                    score: 5,
                    options: [
                        {ja: "10時", en: "10 o'clock", correct: true},
                        {ja: "11時", en: "11 o'clock", correct: false},
                        {ja: "12時", en: "12 o'clock", correct: false},
                        {ja: "9時", en: "9 o'clock", correct: false}
                    ]
                },
                {
                    questionJA: "音声を聞いて、男の人の趣味は何ですか。",
                    questionEN: "Listen to the audio. What is the man's hobby?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "私の趣味は読書です。毎日本を読みます。",
                    score: 5,
                    options: [
                        {ja: "読書", en: "reading", correct: true},
                        {ja: "映画", en: "movies", correct: false},
                        {ja: "音楽", en: "music", correct: false},
                        {ja: "スポーツ", en: "sports", correct: false}
                    ]
                },
                {
                    questionJA: "女の人はどこに住んでいますか。",
                    questionEN: "Where does the woman live?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "私は東京に住んでいます。",
                    score: 5,
                    options: [
                        {ja: "東京", en: "Tokyo", correct: true},
                        {ja: "大阪", en: "Osaka", correct: false},
                        {ja: "京都", en: "Kyoto", correct: false},
                        {ja: "横浜", en: "Yokohama", correct: false}
                    ]
                },
                {
                    questionJA: "音声を聞いて、男の人は何を飲みましたか。",
                    questionEN: "Listen to the audio. What did the man drink?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=350&h=250&fit=crop",
                    imageWidth: 350,
                    imageHeight: 250,
                    audioText: "朝はいつもコーヒーを飲みます。",
                    score: 5,
                    options: [
                        {ja: "コーヒー", en: "coffee", correct: true},
                        {ja: "お茶", en: "tea", correct: false},
                        {ja: "水", en: "water", correct: false},
                        {ja: "ジュース", en: "juice", correct: false}
                    ]
                },
                {
                    questionJA: "女の人はいつ日本に来ましたか。",
                    questionEN: "When did the woman come to Japan?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "私は去年の4月に日本に来ました。",
                    score: 5,
                    options: [
                        {ja: "去年の4月", en: "April last year", correct: true},
                        {ja: "今年の4月", en: "April this year", correct: false},
                        {ja: "去年の3月", en: "March last year", correct: false},
                        {ja: "今年の3月", en: "March this year", correct: false}
                    ]
                },
                {
                    questionJA: "音声を聞いて、男の人は何曜日に休みますか。",
                    questionEN: "Listen to the audio. What day of the week does the man rest?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "私は日曜日に休みます。",
                    score: 5,
                    options: [
                        {ja: "日曜日", en: "Sunday", correct: true},
                        {ja: "土曜日", en: "Saturday", correct: false},
                        {ja: "月曜日", en: "Monday", correct: false},
                        {ja: "金曜日", en: "Friday", correct: false}
                    ]
                },
                {
                    questionJA: "女の人は何歳ですか。",
                    questionEN: "How old is the woman?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "私は25歳です。",
                    score: 5,
                    options: [
                        {ja: "25歳", en: "25 years old", correct: true},
                        {ja: "23歳", en: "23 years old", correct: false},
                        {ja: "27歳", en: "27 years old", correct: false},
                        {ja: "24歳", en: "24 years old", correct: false}
                    ]
                },
                {
                    questionJA: "音声を聞いて、男の人の家族は何人ですか。",
                    questionEN: "Listen to the audio. How many people are in the man's family?",
                    hasAudio: true,
                    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
                    audioText: "私の家族は4人です。父、母、妹と私です。",
                    score: 5,
                    options: [
                        {ja: "4人", en: "4 people", correct: true},
                        {ja: "3人", en: "3 people", correct: false},
                        {ja: "5人", en: "5 people", correct: false},
                        {ja: "2人", en: "2 people", correct: false}
                    ]
                }
            ],
            
            section4: [ // Reading (12 questions)
                {
                    questionJA: "次の文を読んで答えてください。\n「田中さんは毎朝6時に起きて、7時に朝ごはんを食べます。8時に家を出て、9時に会社に着きます。」\n田中さんは何時に家を出ますか。",
                    questionEN: "Read the following text and answer.\n'Mr. Tanaka wakes up at 6 AM every morning, eats breakfast at 7 AM. He leaves home at 8 AM and arrives at the company at 9 AM.'\nWhat time does Mr. Tanaka leave home?",
                    score: 5,
                    options: [
                        {ja: "7時", en: "7 o'clock", correct: true},
                        {ja: "8時", en: "8 o'clock", correct: false},
                        {ja: "9時", en: "9 o'clock", correct: false},
                        {ja: "6時", en: "6 o'clock", correct: false}
                    ]
                },
                {
                    questionJA: "病院の案内を読んで答えてください。\n「受付時間：月〜金 9:00-17:00、土 9:00-12:00、日曜日は休み」\n土曜日は何時まで受付していますか。",
                    questionEN: "Read the hospital information and answer.\n'Reception hours: Mon-Fri 9:00-17:00, Sat 9:00-12:00, Closed on Sunday'\nUntil what time is reception open on Saturday?",
                    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
                    imageWidth: 400,
                    imageHeight: 300,
                    score: 5,
                    options: [
                        {ja: "12時", en: "12 o'clock", correct: true},
                        {ja: "17時", en: "17 o'clock", correct: false},
                        {ja: "9時", en: "9 o'clock", correct: false},
                        {ja: "休み", en: "closed", correct: false}
                    ]
                },
                {
                    questionJA: "メモを読んでください。\n「スーパーでりんご、バナナ、牛乳、パンを買う。薬局で薬を買う。」\nスーパーで買うものはいくつありますか。",
                    questionEN: "Read the memo.\n'Buy apples, bananas, milk, and bread at the supermarket. Buy medicine at the pharmacy.'\nHow many items should be bought at the supermarket?",
                    score: 5,
                    options: [
                        {ja: "3つ", en: "3 items", correct: true},
                        {ja: "4つ", en: "4 items", correct: false},
                        {ja: "5つ", en: "5 items", correct: false},
                        {ja: "2つ", en: "2 items", correct: false}
                    ]
                },
                {
                    questionJA: "電車の案内を読んでください。\n「この電車は新宿、渋谷、品川の順番で停まります。」\n渋谷の次はどこですか。",
                    questionEN: "Read the train announcement.\n'This train stops at Shinjuku, Shibuya, and Shinagawa in that order.'\nWhat is the next stop after Shibuya?",
                    score: 5,
                    options: [
                        {ja: "新宿", en: "Shinjuku", correct: true},
                        {ja: "品川", en: "Shinagawa", correct: false},
                        {ja: "東京", en: "Tokyo", correct: false},
                        {ja: "池袋", en: "Ikebukuro", correct: false}
                    ]
                },
                {
                    questionJA: "レストランのメニューを見てください。\n「ラーメン 800円、カレー 900円、定食 1200円」\n一番安い料理はどれですか。",
                    questionEN: "Look at the restaurant menu.\n'Ramen 800 yen, Curry 900 yen, Set meal 1200 yen'\nWhich dish is the cheapest?",
                    score: 5,
                    options: [
                        {ja: "ラーメン", en: "Ramen", correct: true},
                        {ja: "カレー", en: "Curry", correct: false},
                        {ja: "定食", en: "Set meal", correct: false},
                        {ja: "全部同じ", en: "All the same", correct: false}
                    ]
                },
                {
                    questionJA: "次の文を読んで答えてください。\n「山田さんは毎週火曜日と木曜日にテニスをします。土曜日は友達と映画を見ます。」\n山田さんは週に何回テニスをしますか。",
                    questionEN: "Read the following text and answer.\n'Mr. Yamada plays tennis every Tuesday and Thursday. On Saturday he watches movies with friends.'\nHow many times a week does Mr. Yamada play tennis?",
                    score: 5,
                    options: [
                        {ja: "1回", en: "1 time", correct: true},
                        {ja: "2回", en: "2 times", correct: false},
                        {ja: "3回", en: "3 times", correct: false},
                        {ja: "4回", en: "4 times", correct: false}
                    ]
                },
                {
                    questionJA: "図書館の案内を読んでください。\n「開館時間：平日 9:00-20:00、土日 10:00-18:00、祝日は休館」\n日曜日の開館時間は何時からですか。",
                    questionEN: "Read the library information.\n'Opening hours: Weekdays 9:00-20:00, Weekends 10:00-18:00, Closed on holidays'\nWhat time does the library open on Sunday?",
                    score: 5,
                    options: [
                        {ja: "9時", en: "9 o'clock", correct: true},
                        {ja: "10時", en: "10 o'clock", correct: false},
                        {ja: "18時", en: "18 o'clock", correct: false},
                        {ja: "20時", en: "20 o'clock", correct: false}
                    ]
                },
                {
                    questionJA: "次の文を読んで答えてください。\n「佐藤さんは車で会社に行きます。家から会社まで30分かかります。」\n佐藤さんは何で会社に行きますか。",
                    questionEN: "Read the following text and answer.\n'Mr. Sato goes to work by car. It takes 30 minutes from home to the company.'\nHow does Mr. Sato go to work?",
                    score: 5,
                    options: [
                        {ja: "車", en: "car", correct: true},
                        {ja: "電車", en: "train", correct: false},
                        {ja: "バス", en: "bus", correct: false},
                        {ja: "自転車", en: "bicycle", correct: false}
                    ]
                },
                {
                    questionJA: "店の看板を読んでください。\n「営業時間：午前11時〜午後9時、定休日：月曜日」\nこの店はいつ休みですか。",
                    questionEN: "Read the store sign.\n'Business hours: 11 AM - 9 PM, Regular holiday: Monday'\nWhen is this store closed?",
                    score: 5,
                    options: [
                        {ja: "月曜日", en: "Monday", correct: true},
                        {ja: "日曜日", en: "Sunday", correct: false},
                        {ja: "土曜日", en: "Saturday", correct: false},
                        {ja: "火曜日", en: "Tuesday", correct: false}
                    ]
                },
                {
                    questionJA: "次の文を読んで答えてください。\n「今日は雨が降っています。傘を持って出かけましょう。」\n今日の天気はどうですか。",
                    questionEN: "Read the following text and answer.\n'It is raining today. Let's take an umbrella when we go out.'\nHow is today's weather?",
                    score: 5,
                    options: [
                        {ja: "雨", en: "rainy", correct: true},
                        {ja: "晴れ", en: "sunny", correct: false},
                        {ja: "曇り", en: "cloudy", correct: false},
                        {ja: "雪", en: "snowy", correct: false}
                    ]
                },
                {
                    questionJA: "アパートの案内を読んでください。\n「家賃：月8万円、敷金：2ヶ月分、礼金：1ヶ月分」\n敷金はいくらですか。",
                    questionEN: "Read the apartment information.\n'Rent: 80,000 yen per month, Deposit: 2 months' worth, Key money: 1 month's worth'\nHow much is the deposit?",
                    score: 5,
                    options: [
                        {ja: "8万円", en: "80,000 yen", correct: true},
                        {ja: "16万円", en: "160,000 yen", correct: false},
                        {ja: "24万円", en: "240,000 yen", correct: false},
                        {ja: "32万円", en: "320,000 yen", correct: false}
                    ]
                },
                {
                    questionJA: "次の文を読んで答えてください。\n「私は毎朝コーヒーを飲みます。でも、夜はお茶を飲みます。」\nこの人は夜何を飲みますか。",
                    questionEN: "Read the following text and answer.\n'I drink coffee every morning. But at night I drink tea.'\nWhat does this person drink at night?",
                    score: 5,
                    options: [
                        {ja: "コーヒー", en: "coffee", correct: true},
                        {ja: "お茶", en: "tea", correct: false},
                        {ja: "水", en: "water", correct: false},
                        {ja: "ジュース", en: "juice", correct: false}
                    ]
                }
            ]
        };

        // Section information
        const sectionInfo = [
            {title: "Script & Vocabulary", subtitle: "Questions 1-12"},
            {title: "Conversation & Expression", subtitle: "Questions 1-12"},
            {title: "Listening Comprehension", subtitle: "Questions 1-12"},
            {title: "Reading Comprehension", subtitle: "Questions 1-12"}
        ];

        // Generate full 48 questions (12 per section)
        function generateFullQuestionSet() {
            const fullQuestions = [];
            
            Object.keys(questionBank).forEach((section, sectionIndex) => {
                questionBank[section].forEach((question, questionIndex) => {
                    const questionCopy = { ...question };
                    questionCopy.section = sectionIndex + 1;
                    questionCopy.sectionName = ['Script and Vocabulary', 'Conversation and Expression', 'Listening Comprehension', 'Reading Comprehension'][sectionIndex];
                    fullQuestions.push(questionCopy);
                });
            });
            
            return fullQuestions;
        }

        // Global variables
        let questions = generateFullQuestionSet();
        let currentQuestion = 0;
        let userAnswers = new Array(48).fill(null);
        let flaggedQuestions = new Set();
        let timeLeft = 3600; // 60 minutes (1 hour)
        let currentLang = 'ja';
        let timerInterval;
        let audioPlayCount = {};
        let isAudioPlaying = false;
        let currentAudioElement = null;

        // Initialize
        function initTest() {
            createQuestionNavigation();
            loadQuestion(0);
            startTimer();
            updateNavigationBar(0);
        }

        function createQuestionNavigation() {
            // Only show current section's questions
            updateQuestionNavigation();
        }

        function updateQuestionNavigation() {
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            const column = document.getElementById('currentSectionColumn');
            const header = document.getElementById('currentSectionHeader');
            
            // Update header
            header.textContent = `Section ${currentSectionIndex + 1}`;
            
            // Clear and populate current section questions
            column.innerHTML = '';
            
            for(let i = 0; i < 12; i++) {
                const questionNum = (currentSectionIndex * 12) + i;
                const btn = document.createElement('div');
                btn.className = 'question-num';
                btn.textContent = i + 1; // Section specific numbering (1-12)
                btn.onclick = () => loadQuestion(questionNum);
                column.appendChild(btn);
            }
            
            updateNavigationHighlight();
        }

        function updateNavigationBar(questionIndex) {
            const sectionIndex = Math.floor(questionIndex / 12);
            document.getElementById('navSectionTitle').textContent = sectionInfo[sectionIndex].title;
            document.getElementById('navSectionSubtitle').textContent = sectionInfo[sectionIndex].subtitle;
        }

        function loadQuestion(index) {
            // Stop any playing audio when changing questions
            stopAudio();
            
            // Check if we're changing sections
            const newSectionIndex = Math.floor(index / 12);
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            
            currentQuestion = index;
            const question = questions[index];
            const sectionQuestionNumber = (index % 12) + 1; // Calculate section-specific question number
            
            // Update header with section-specific question number
            document.getElementById('currentNum').textContent = sectionQuestionNumber;
            document.getElementById('questionHeaderNum').textContent = sectionQuestionNumber;
            document.getElementById('currentSection').textContent = question.sectionName;
            
            // Update navigation bar
            updateNavigationBar(index);
            
            // If section changed, update question navigation
            if(newSectionIndex !== currentSectionIndex) {
                updateQuestionNavigation();
            } else {
                // Update navigation highlighting only
                updateNavigationHighlight();
            }
            
            // Load question text
            document.getElementById('questionJA').textContent = question.questionJA;
            document.getElementById('questionEN').textContent = question.questionEN;
            
            // Show/hide and load question image
            const questionImageDiv = document.getElementById('questionImage');
            const questionImg = document.getElementById('questionImg');
            if(question.imageUrl) {
                questionImg.src = question.imageUrl;
                questionImg.style.width = question.imageWidth ? question.imageWidth + 'px' : 'auto';
                questionImg.style.height = question.imageHeight ? question.imageHeight + 'px' : 'auto';
                questionImageDiv.style.display = 'block';
            } else {
                questionImageDiv.style.display = 'none';
            }
            
            // Show/hide audio section
            const audioSection = document.getElementById('audioSection');
            if(question.hasAudio) {
                audioSection.style.display = 'block';
                if(!audioPlayCount[index]) {
                    audioPlayCount[index] = 0;
                }
                
                // Setup audio element
                const audioElement = document.getElementById('audioElement');
                if(question.audioUrl) {
                    audioElement.src = question.audioUrl;
                }
                
                updateAudioButtons(index);
            } else {
                audioSection.style.display = 'none';
            }
            
            // Load options
            loadOptions(question.options);
            
            // Update buttons
            updateControlButtons();
            
            // Set language display
            setLanguage(currentLang);
        }

        function loadOptions(options) {
            const container = document.getElementById('optionsContainer');
            container.innerHTML = '';
            
            options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                if(userAnswers[currentQuestion] === index) {
                    optionDiv.classList.add('selected');
                }
                
                optionDiv.innerHTML = `
                    <div class="option-radio"></div>
                    <div class="option-text">
                        <div class="option-jp">${option.ja}</div>
                        <div class="option-en" style="display: ${currentLang === 'en' ? 'block' : 'none'};">${option.en}</div>
                    </div>
                `;
                
                optionDiv.onclick = () => selectAnswer(index);
                container.appendChild(optionDiv);
            });
        }

        function selectAnswer(answerIndex) {
            // Don't allow selection during audio playing
            if(isAudioPlaying) {
                return;
            }
            
            // Clear previous selection
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            
            // Select new answer
            document.querySelectorAll('.option')[answerIndex].classList.add('selected');
            
            // Store answer
            userAnswers[currentQuestion] = answerIndex;
            
            // Update navigation
            updateNavigationHighlight();
        }

        function updateNavigationHighlight() {
            const currentSectionIndex = Math.floor(currentQuestion / 12);
            const sectionStartIndex = currentSectionIndex * 12;
            
            document.querySelectorAll('.question-num').forEach((btn, index) => {
                const questionIndex = sectionStartIndex + index;
                btn.classList.remove('current', 'answered', 'flagged');
                
                if(questionIndex === currentQuestion) {
                    btn.classList.add('current');
                    btn.style.position = 'relative';
                    btn.innerHTML = `${index + 1}<span style="position: absolute; right: -20px; top: 50%; transform: translateY(-50%); color: #3d7b1e; font-size: 16px;">▶</span>`;
                } else {
                    btn.textContent = index + 1;
                    btn.style.position = '';
                    if(userAnswers[questionIndex] !== null) {
                        btn.classList.add('answered');
                    }
                }
                
                if(flaggedQuestions.has(questionIndex)) {
                    btn.classList.add('flagged');
                }
            });
        }

        function setLanguage(lang) {
            currentLang = lang;
            const jaElements = document.querySelectorAll('.question-japanese, .option-jp');
            const enElements = document.querySelectorAll('.question-english, .option-en');
            const langBtns = document.querySelectorAll('.lang-btn');
            
            langBtns.forEach(btn => btn.classList.remove('active'));
            
            if(lang === 'ja') {
                jaElements.forEach(el => el.style.display = 'block');
                enElements.forEach(el => el.style.display = 'none');
                langBtns[0].classList.add('active');
            } else {
                jaElements.forEach(el => el.style.display = 'none');
                enElements.forEach(el => el.style.display = 'block');
                langBtns[1].classList.add('active');
            }
        }

        function playAudio() {
            const question = questions[currentQuestion];
            const audioElement = document.getElementById('audioElement');
            
            if(question.hasAudio && audioPlayCount[currentQuestion] < 2 && !isAudioPlaying) {
                audioPlayCount[currentQuestion]++;
                isAudioPlaying = true;
                currentAudioElement = audioElement;
                
                // Disable interface during audio
                document.getElementById('contentArea').classList.add('audio-playing');
                
                // Update buttons to show playing state
                updateAudioButtons(currentQuestion);
                
                // Play the audio
                audioElement.currentTime = 0;
                audioElement.play().then(() => {
                    // Audio started playing successfully
                }).catch((error) => {
                    console.error('Audio play failed:', error);
                    // Fallback: show text notification for demo
                    showAudioNotification(question.audioText || "Audio playing...");
                    
                    // Simulate audio duration (3 seconds) for demo
                    setTimeout(() => {
                        handleAudioEnd();
                    }, 3000);
                });
                
                // Handle when audio ends
                audioElement.onended = handleAudioEnd;
                audioElement.onerror = () => {
                    console.error('Audio error');
                    // Fallback: show text notification
                    showAudioNotification(question.audioText || "Audio playing...");
                    
                    // Simulate audio duration for demo
                    setTimeout(() => {
                        handleAudioEnd();
                    }, 3000);
                };
            }
        }
        
        function handleAudioEnd() {
            isAudioPlaying = false;
            currentAudioElement = null;
            document.getElementById('contentArea').classList.remove('audio-playing');
            updateAudioButtons(currentQuestion);
        }
        
        function stopAudio() {
            if(currentAudioElement && isAudioPlaying) {
                currentAudioElement.pause();
                currentAudioElement.currentTime = 0;
                handleAudioEnd();
            }
        }

        function replayAudio() {
            playAudio();
        }

        function showAudioNotification(audioText) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(44, 90, 160, 0.95);
                color: white;
                padding: 20px 30px;
                border-radius: 8px;
                z-index: 1000;
                font-size: 16px;
                font-weight: bold;
                text-align: center;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            `;
            
            notification.innerHTML = `
                <div>🎧 Audio Playing...</div>
                <div style="font-size: 14px; margin-top: 10px; font-weight: normal;">
                    "${audioText}"
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                if(notification.parentElement) {
                    notification.remove();
                }
            }, 3000);
        }

        function updateAudioButtons(questionIndex) {
            const playBtn = document.getElementById('playBtn');
            const replayBtn = document.getElementById('replayBtn');
            const playCount = audioPlayCount[questionIndex] || 0;
            
            if(isAudioPlaying) {
                playBtn.disabled = true;
                replayBtn.disabled = true;
                playBtn.textContent = '🔊 Playing...';
                replayBtn.textContent = '🔊 Playing...';
            } else {
                playBtn.disabled = playCount >= 2;
                replayBtn.disabled = playCount === 0 || playCount >= 2;
                
                if(playCount === 0) {
                    playBtn.textContent = '▶ Play';
                } else {
                    playBtn.textContent = `▶ Play (${2 - playCount} left)`;
                }
                replayBtn.textContent = `🔁 Replay (${Math.max(0, 2 - playCount)} left)`;
            }
        }

        function nextQuestion() {
            // Don't allow navigation during audio
            if(isAudioPlaying) {
                showWarningPopup('Please wait for audio to finish');
                return;
            }
            
            if(currentQuestion < 47) {
                // For listening section, check if audio was played
                const question = questions[currentQuestion];
                if(question.hasAudio && !audioPlayCount[currentQuestion]) {
                    showWarningPopup('Please listen to the audio first');
                    return;
                }
                
                const nextIndex = currentQuestion + 1;
                const nextSectionIndex = Math.floor(nextIndex / 12);
                const currentSectionIndex = Math.floor(currentQuestion / 12);
                
                if(nextSectionIndex !== currentSectionIndex) {
                    showSectionChangeConfirmation(nextIndex);
                } else {
                    loadQuestion(nextIndex);
                }
            }
        }

        function previousQuestion() {
            // Don't allow navigation during audio
            if(isAudioPlaying) {
                showWarningPopup('Please wait for audio to finish');
                return;
            }
            
            if(currentQuestion > 0) {
                const prevIndex = currentQuestion - 1;
                const prevSectionIndex = Math.floor(prevIndex / 12);
                const currentSectionIndex = Math.floor(currentQuestion / 12);
                
                if(prevSectionIndex !== currentSectionIndex) {
                    showSectionChangeConfirmation(prevIndex);
                } else {
                    loadQuestion(prevIndex);
                }
            }
        }

        function showSectionChangeConfirmation(targetQuestionIndex) {
            const targetSection = Math.floor(targetQuestionIndex / 12);
            const sectionName = sectionInfo[targetSection].title;
            
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 1500;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            popup.innerHTML = `
                <div style="
                    background: white;
                    padding: 0px 0px 20px 0px;
                    border-top-left-radius:5px ;
                    border-top-right-radius:5px ;
                    text-align: center;
                    max-width: 450px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                ">
                    <div style="background-color:black; padding:5px 0px 5px 5px;  color: white; font-size: 20px; font-weight: bold; margin-bottom: 20px;">
                        Confirm Finish Section
                    </div>
                    <div style="font-size: 16px; margin-bottom: 25px; line-height: 1.5; padding:6px; text-align:center;">
                       If you select <b>finish section</b>, you will not be <br> able to return to the section.<br>
                    </div>
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 6px; margin-bottom: 25px; font-size: 14px; color: #555;">
                        ⚠ Are you sure you would like to <b>finish this section?</b>
                    </div>
                    <div style="margin-buttom:10px;">
                        <button onclick="loadQuestion(${targetQuestionIndex}); this.parentElement.parentElement.parentElement.remove();" style="
                            background: green;
                           width:80%;
                           margin-buttom:5px;
                           margin-left:2.5em;
                            margin-top:0.6em;
                            display: block;
                            color: white;
                            border: none;
                            padding:10px;
                            border-radius: 4px;
                            font-size: 14px;
                            font-weight: bold;
                            cursor: pointer;
                        ">Yes, I would like to finish this section</button>
                        
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                            display: block;
                            width:80%;
                            margin-left:2.5em;
                            background: green;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 4px;
                            margin-buttom:20px;
                            margin-top:10px;
                            font-size: 14px;
                            cursor: pointer;
                        ">No, I would like to return to this section </button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(popup);
        }

        function flagQuestion() {
            // Don't allow flagging during audio
            if(isAudioPlaying) {
                return;
            }
            
            if(flaggedQuestions.has(currentQuestion)) {
                flaggedQuestions.delete(currentQuestion);
                document.getElementById('flagBtn').textContent = ' Flag';
                document.getElementById('flagBtn').style.backgroundColor = '#ff8c00';
            } else {
                flaggedQuestions.add(currentQuestion);
                document.getElementById('flagBtn').textContent = ' Unflag';
                document.getElementById('flagBtn').style.backgroundColor = ' #f0a83aff';
            }
            updateNavigationHighlight();
        }

        function updateControlButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const flagBtn = document.getElementById('flagBtn');
            
            prevBtn.disabled = currentQuestion === 0 || isAudioPlaying;
            nextBtn.disabled = currentQuestion === 47 || isAudioPlaying;
            
            // Update flag button
            if (flaggedQuestions.has(currentQuestion)) {
                flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Unflag';
                flagBtn.style.backgroundColor = ' #f0a83aff';
            } else {
                flagBtn.innerHTML = '<i class="fa-solid fa-flag"></i> Flag';
                flagBtn.style.backgroundColor = '#347c13';
            }
        }

        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimeDisplay();
                
                if(timeLeft <= 0) {
                    clearInterval(timerInterval);
                    showTimeUpPopup();
                }
            }, 1000);
        }

        function updateTimeDisplay() {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            const display = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('timeDisplay').textContent = display;
            
            // Warning colors
            if(timeLeft <= 300) { // Last 5 minutes
                document.getElementById('timeDisplay').style.backgroundColor = ' #f0a83aff';
            } else if(timeLeft <= 600) { // Last 10 minutes
                document.getElementById('timeDisplay').style.backgroundColor = '#ff8c00';
            }
        }

        function showTimeUpPopup() {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 2000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            popup.innerHTML = `
                <div style="
                    background: white;
                    padding: 50px;
                    border-radius: 10px;
                    text-align: center;
                    border: 4px solid #dc3545;
                    max-width: 500px;
                ">
                    <div style="color: #dc3545; font-size: 24px; font-weight: bold; margin-bottom: 20px;">
                        ⏰ TIME UP!
                    </div>
                    <div style="font-size: 18px; margin-bottom: 30px; line-height: 1.5;">
                        The test time has expired.<br>
                        Your answers will be automatically submitted.
                    </div>
                    <button onclick="submitTest(); this.parentElement.parentElement.remove();" style="
                        background: #dc3545;
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        border-radius: 6px;
                        font-size: 16px;
                        font-weight: bold;
                        cursor: pointer;
                    ">Submit Test</button>
                </div>
            `;
            
            document.body.appendChild(popup);
        }

        function submitTest() {
            showSubmitConfirmation();
        }

        function showSubmitConfirmation() {
            const unanswered = userAnswers.filter(answer => answer === null).length;
            
            // Calculate current score for display
            let currentScore = 0;
            let maxScore = 0;
            
            questions.forEach((question, index) => {
                const questionScore = question.score || 1;
                maxScore += questionScore;
                
                const userAnswer = userAnswers[index];
                if(userAnswer !== null && question.options[userAnswer].correct) {
                    currentScore += questionScore;
                }
            });
            
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                z-index: 1500;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            popup.innerHTML = `
                <div style="
                    background: white;
                    padding-bottom:20px ;
                    border-radius: 8px;
                    text-align: center;
                    max-width: 450px;
                ">
                    <div style="color: white; background-color:black; font-size: 20px; font-weight: bold; padding:10px;">
                        Confirm Finish
                    </div>
                    <div style="font-size: 16px; margin-bottom: 30px; margin-top:20px; line-height: 1.5; padding:15px;">
                    <b>If you select Submit Test, your answers will be submitted and you will not be to return to the exam.</b> 
                    </div>
                    
                    <div style="display: flex; gap: 15px; justify-content: center; margin-buttom:20px;">
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="
                            background: #347c13;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 4px;
                            font-size: 16px;
                            font-weight:bold;
                            cursor: pointer;
                        ">Cancel</button>
                        <button onclick="finalSubmit(); this.parentElement.parentElement.parentElement.remove();" style="
                            background: #347c13;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            border-radius: 4px;
                            font-size: 15px;
                            font-weight: bold;
                            cursor: pointer;
                        ">Submit Test</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(popup);
        }

        function finalSubmit() {
            clearInterval(timerInterval);
            
            // Stop any playing audio
            stopAudio();
            
            // Calculate scores with individual question scores
            const scores = [0, 0, 0, 0]; // Section scores
            let totalScore = 0;
            let maxPossibleScore = 0;
            
            questions.forEach((question, index) => {
                const questionScore = question.score || 1; // Default 1 point if no score specified
                maxPossibleScore += questionScore;
                
                const userAnswer = userAnswers[index];
                if(userAnswer !== null && question.options[userAnswer].correct) {
                    scores[question.section - 1] += questionScore;
                    totalScore += questionScore;
                }
            });
            
            // Calculate percentage based on total possible score
            const percentage = Math.round((totalScore / maxPossibleScore) * 100);
            
            // Display final results
            showFinalResults(totalScore, scores, maxPossibleScore, percentage);
        }

        function showFinalResults(totalScore, sectionScores, maxScore, percentage) {
            const passed = percentage >= 80;
            
            // Create URL parameters for the result pages
            const urlParams = new URLSearchParams();
            urlParams.append('totalScore', totalScore);
            urlParams.append('maxScore', maxScore);
            urlParams.append('percentage', percentage);
            urlParams.append('s1', sectionScores[0]);
            urlParams.append('s2', sectionScores[1]);
            urlParams.append('s3', sectionScores[2]);
            urlParams.append('s4', sectionScores[3]);
            
            // Redirect to appropriate result page
            if(passed) {
                window.location.href = `pass.html?${urlParams.toString()}`;
            } else {
                window.location.href = `fail.html?${urlParams.toString()}`;
            }
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if(e.ctrlKey || e.altKey || isAudioPlaying) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    previousQuestion();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    nextQuestion();
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                    e.preventDefault();
                    const optionIndex = parseInt(e.key) - 1;
                    if(optionIndex < 4) {
                        selectAnswer(optionIndex);
                    }
                    break;
                case 'f':
                case 'F':
                    e.preventDefault();
                    flagQuestion();
                    break;
                case ' ': // Space bar to play/pause audio
                    if(questions[currentQuestion].hasAudio) {
                        e.preventDefault();
                        playAudio();
                    }
                    break;
            }
        });

        // Prevent right-click and other shortcuts
        document.addEventListener('selectstart', e => e.preventDefault());
        document.addEventListener('dragstart', e => e.preventDefault());

        // Disable F5, Ctrl+R, etc.
        document.addEventListener('keydown', function(e) {
            if(e.key === 'F5' || 
               (e.ctrlKey && e.key === 'r') || 
               (e.ctrlKey && e.key === 'R') ||
               (e.ctrlKey && e.shiftKey && e.key === 'I') ||
               (e.key === 'F12')) {
                e.preventDefault();
                showWarningPopup('Function disabled during test');
            }
        });

        function showWarningPopup(message) {
            const popup = document.createElement('div');
            popup.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #ff4444;
                color: white;
                padding: 15px 20px;
                border-radius: 6px;
                z-index: 2000;
                font-weight: bold;
                box-shadow: 0 4px 15px rgba(255,68,68,0.3);
            `;
            popup.textContent = `⚠ ${message}`;
            document.body.appendChild(popup);
            
            setTimeout(() => popup.remove(), 3000);
        }

        // Window visibility warning
        document.addEventListener('visibilitychange', function() {
            if(document.hidden) {
                showWarningPopup('Test window lost focus - Please return to test');
            }
        });

        // Initialize the test when page loads
        window.onload = initTest;
    