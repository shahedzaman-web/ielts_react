
/* ──────────────────────────────────────────────────────────────────
   CAMBRIDGE BOOK — PRACTICE TESTS (3, 4, 5)
   Note: Test 4 here uses the flat blocks schema (table / notes / mcq /
   checkbox) shared by Tests 3 and 5 — this is NOT the same as the
   `listening4` object above. They are kept separately on purpose so
   each renderer can consume the schema it understands.
   ────────────────────────────────────────────────────────────────── */
export const cambridgeBookTestPractice = [
    /* ── TEST 3 ── */
    {
        title: 'Listening Test 3',
        parts: [
            {
                n: 1, from: 1, to: 10, desc: 'Questions 1–10 · Complete the notes',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 13.mp3',
                blocks: [
                    { type: 'text', html: 'Complete the notes.<br><strong>Write NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.' },
                    { type: 'h3', text: 'The Laine Hotel' },
                    { type: 'subtitle', html: '<em>Booking Notes</em>' },
                    {
                        type: 'table', head: ['', ''], rows: [
                            ['Name', 'Julia Olson'],
                            ['Reference number', ['(1) ', { q: 1 }, ' 3729 434']],
                            ['Website', 'booknet.com'],
                            ['Room type', 'Single comfort'],
                            ['Length of stay', ['(2) ', { q: 2 }]],
                            ['Method of payment', ['(3) ', { q: 3 }]],
                            ['Full daily rate', ['(4) $ ', { q: 4 }]],
                            ['Room number', ['(5) ', { q: 5 }]],
                            ['Alarm call time', '6 a.m.'],
                        ]
                    },
                    { type: 'h3', text: 'Questions 6–10' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.' },
                    { type: 'title', text: 'Getting to the meetings' },
                    {
                        type: 'notes', items: [
                            ['Day 1 (Chrysler Street): catch a ', { q: 6 }, ' from the stop right outside the hotel — no changes needed'],
                            ['the journey takes around ', { q: 7 }, ' minutes'],
                            ['Day 2 (Lincoln Business Park): take a taxi — a ride of about ', { q: 8 }, ' minutes'],
                            ['the taxi costs $ ', { q: 9 }, ' each way'],
                            ["Day 3 (Greene Hotel): the hotel's free ", { q: 10 }, ' bus to the airport runs every half an hour'],
                        ]
                    },
                ]
            },
            {
                n: 2, from: 11, to: 20, desc: 'Questions 11–20 · Multiple choice & matching',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 13.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 11–15' },
                    { type: 'text', html: 'Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.' },
                    {
                        type: 'mcq', q: 11, stem: 'The tour begins in', options: [
                            { value: 'A', label: 'the entrance hall.' },
                            { value: 'B', label: 'the great hall.' },
                            { value: 'C', label: 'the reception rooms.' }]
                    },
                    {
                        type: 'mcq', q: 12, stem: 'The first things visitors notice at the start of the tour are', options: [
                            { value: 'A', label: 'the carpets.' },
                            { value: 'B', label: 'the fine paintings.' },
                            { value: 'C', label: 'the china.' }]
                    },
                    {
                        type: 'mcq', q: 13, stem: 'The Gatfield family used the great hall to', options: [
                            { value: 'A', label: 'hold parties in the summer months.' },
                            { value: 'B', label: 'welcome visitors arriving at the house.' },
                            { value: 'C', label: 'entertain and dine with their guests.' }]
                    },
                    {
                        type: 'mcq', q: 14, stem: 'Nowadays the family eat in', options: [
                            { value: 'A', label: 'a dining room next to the kitchen.' },
                            { value: 'B', label: 'the great hall.' },
                            { value: 'C', label: 'the main reception room downstairs.' }]
                    },
                    {
                        type: 'mcq', q: 15, stem: 'From the main reception room, big double doors open out to', options: [
                            { value: 'A', label: 'the forest.' },
                            { value: 'B', label: 'the garden.' },
                            { value: 'C', label: 'the monument.' }]
                    },
                    { type: 'h3', text: 'Questions 16–20' },
                    { type: 'text', html: 'Which feature (<strong>A – G</strong>) will visitors see at each place?<br>Choose the correct letter, <strong>A – G</strong>.' },
                    {
                        type: 'mcq', q: 16, stem: 'the library', options: [
                            { value: 'A', label: 'antique furniture, carpets and a garden view' },
                            { value: 'B', label: 'a café and a gift shop' },
                            { value: 'C', label: 'the china for which the house is famous' },
                            { value: 'D', label: "the setting of the gentlemen's evening brandy and cigars" },
                            { value: 'E', label: 'the working areas of the household staff' },
                            { value: 'F', label: "the family's modern private rooms" },
                            { value: 'G', label: 'paintings of past centuries' }]
                    },
                    {
                        type: 'mcq', q: 17, stem: 'the billiard room', options: [
                            { value: 'A', label: 'antique furniture, carpets and a garden view' },
                            { value: 'B', label: 'a café and a gift shop' },
                            { value: 'C', label: 'the china for which the house is famous' },
                            { value: 'D', label: "the setting of the gentlemen's evening brandy and cigars" },
                            { value: 'E', label: 'the working areas of the household staff' },
                            { value: 'F', label: "the family's modern private rooms" },
                            { value: 'G', label: 'paintings of past centuries' }]
                    },
                    {
                        type: 'mcq', q: 18, stem: 'the upstairs rooms', options: [
                            { value: 'A', label: 'antique furniture, carpets and a garden view' },
                            { value: 'B', label: 'a café and a gift shop' },
                            { value: 'C', label: 'the china for which the house is famous' },
                            { value: 'D', label: "the setting of the gentlemen's evening brandy and cigars" },
                            { value: 'E', label: 'the working areas of the household staff' },
                            { value: 'F', label: "the family's modern private rooms" },
                            { value: 'G', label: 'paintings of past centuries' }]
                    },
                    {
                        type: 'mcq', q: 19, stem: 'the behind-the-scenes areas', options: [
                            { value: 'A', label: 'antique furniture, carpets and a garden view' },
                            { value: 'B', label: 'a café and a gift shop' },
                            { value: 'C', label: 'the china for which the house is famous' },
                            { value: 'D', label: "the setting of the gentlemen's evening brandy and cigars" },
                            { value: 'E', label: 'the working areas of the household staff' },
                            { value: 'F', label: "the family's modern private rooms" },
                            { value: 'G', label: 'paintings of past centuries' }]
                    },
                    {
                        type: 'mcq', q: 20, stem: 'the main gateway', options: [
                            { value: 'A', label: 'antique furniture, carpets and a garden view' },
                            { value: 'B', label: 'a café and a gift shop' },
                            { value: 'C', label: 'the china for which the house is famous' },
                            { value: 'D', label: "the setting of the gentlemen's evening brandy and cigars" },
                            { value: 'E', label: 'the working areas of the household staff' },
                            { value: 'F', label: "the family's modern private rooms" },
                            { value: 'G', label: 'paintings of past centuries' }]
                    },
                ]
            },
            {
                n: 3, from: 21, to: 30, desc: 'Questions 21–30 · Multiple choice & matching',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 13.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 21–25' },
                    { type: 'text', html: 'Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.' },
                    {
                        type: 'mcq', q: 21, stem: 'Why did Don NOT attend the assessment seminar?', options: [
                            { value: 'A', label: 'He overslept.' },
                            { value: 'B', label: 'He was ill.' },
                            { value: 'C', label: 'He was having lunch.' }]
                    },
                    {
                        type: 'mcq', q: 22, stem: 'What kind of assessment replaces presentations in the Finance course?', options: [
                            { value: 'A', label: 'Case studies' },
                            { value: 'B', label: 'An additional exam' },
                            { value: 'C', label: 'A maths module' }]
                    },
                    {
                        type: 'mcq', q: 23, stem: 'Which option does Mark take that Don does NOT take?', options: [
                            { value: 'A', label: 'Finance' },
                            { value: 'B', label: 'Marketing' },
                            { value: 'C', label: 'Accountancy' }]
                    },
                    {
                        type: 'mcq', q: 24, stem: 'How will Don first find out the deadlines for his essays?', options: [
                            { value: 'A', label: 'On the Business Department website' },
                            { value: 'B', label: 'The teachers will tell the students' },
                            { value: 'C', label: 'On the Business Department notice boards' }]
                    },
                    {
                        type: 'mcq', q: 25, stem: 'What new procedure will Don have to follow for his essays?', options: [
                            { value: 'A', label: 'How to do the layout of his essays' },
                            { value: 'B', label: 'How to give in his essays' },
                            { value: 'C', label: 'How much to write in his essays' }]
                    },
                    { type: 'h3', text: 'Questions 26–30' },
                    { type: 'text', html: 'What does Mark say about each of the following support measures?<br>Choose the correct letter, <strong>A – G</strong>.' },
                    {
                        type: 'mcq', q: 26, stem: 'the reading week', options: [
                            { value: 'A', label: 'It is being tried out for four months only.' },
                            { value: 'B', label: 'It has no classes apart from two optional seminars.' },
                            { value: 'C', label: 'Teachers each offer a one-hour slot every week.' },
                            { value: 'D', label: 'It helps students not to drop out of the course.' },
                            { value: 'E', label: 'Three teachers run it at the end of the working day.' },
                            { value: 'F', label: 'Students must sign up for it in advance.' },
                            { value: 'G', label: 'Its results are posted on the notice boards.' }]
                    },
                    {
                        type: 'mcq', q: 27, stem: 'the extra maths lessons', options: [
                            { value: 'A', label: 'It is being tried out for four months only.' },
                            { value: 'B', label: 'It has no classes apart from two optional seminars.' },
                            { value: 'C', label: 'Teachers each offer a one-hour slot every week.' },
                            { value: 'D', label: 'It helps students not to drop out of the course.' },
                            { value: 'E', label: 'Three teachers run it at the end of the working day.' },
                            { value: 'F', label: 'Students must sign up for it in advance.' },
                            { value: 'G', label: 'Its results are posted on the notice boards.' }]
                    },
                    {
                        type: 'mcq', q: 28, stem: 'the academic labs', options: [
                            { value: 'A', label: 'It is being tried out for four months only.' },
                            { value: 'B', label: 'It has no classes apart from two optional seminars.' },
                            { value: 'C', label: 'Teachers each offer a one-hour slot every week.' },
                            { value: 'D', label: 'It helps students not to drop out of the course.' },
                            { value: 'E', label: 'Three teachers run it at the end of the working day.' },
                            { value: 'F', label: 'Students must sign up for it in advance.' },
                            { value: 'G', label: 'Its results are posted on the notice boards.' }]
                    },
                    {
                        type: 'mcq', q: 29, stem: 'the electronic help desk', options: [
                            { value: 'A', label: 'It is being tried out for four months only.' },
                            { value: 'B', label: 'It has no classes apart from two optional seminars.' },
                            { value: 'C', label: 'Teachers each offer a one-hour slot every week.' },
                            { value: 'D', label: 'It helps students not to drop out of the course.' },
                            { value: 'E', label: 'Three teachers run it at the end of the working day.' },
                            { value: 'F', label: 'Students must sign up for it in advance.' },
                            { value: 'G', label: 'Its results are posted on the notice boards.' }]
                    },
                    {
                        type: 'mcq', q: 30, stem: 'the counselling service', options: [
                            { value: 'A', label: 'It is being tried out for four months only.' },
                            { value: 'B', label: 'It has no classes apart from two optional seminars.' },
                            { value: 'C', label: 'Teachers each offer a one-hour slot every week.' },
                            { value: 'D', label: 'It helps students not to drop out of the course.' },
                            { value: 'E', label: 'Three teachers run it at the end of the working day.' },
                            { value: 'F', label: 'Students must sign up for it in advance.' },
                            { value: 'G', label: 'Its results are posted on the notice boards.' }]
                    },
                ]
            },
            {
                n: 4, from: 31, to: 40, desc: 'Questions 31–40 · Sentence completion',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 13.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 31–40' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD ONLY</strong> for each answer.' },
                    { type: 'h3', text: 'Vostok Station' },
                    {
                        type: 'notes', items: [
                            ['the coldest place on Earth — temperatures recorded as low as minus 76 degrees ', { q: 31 }],
                            ['flights from South Africa operate only during the three short ', { q: 32 }, ' of good weather'],
                            ['below minus ', { q: 33 }, ' °C planes cannot take off, because frozen snow stops the skis working'],
                            ['in 1996, Russian scientists drilling for ', { q: 34 }, ' stopped at 3,623 metres, puzzled by the purity of the ice'],
                            ['core samples taken close to the water contained ', { q: 35 }, ' never found anywhere else'],
                        ]
                    },
                    { type: 'h3', text: 'Lake Vostok' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.' },
                    {
                        type: 'notes', items: [
                            ['the ice covering the lake is around ', { q: 36 }, ' years old'],
                            ['at the bottom of the lake there is a layer of ', { q: 37 }],
                            ['the lake is enclosed on all sides and underneath by ', { q: 38 }],
                        ]
                    },
                    { type: 'h3', text: 'Exploring the lake' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD ONLY</strong> for each answer.' },
                    {
                        type: 'notes', items: [
                            ['kerosene, used to keep the borehole open, could ', { q: 39 }, ' the samples and skew the data'],
                            ['before breaching the lake, the Cryobot probe would ', { q: 40 }, ' itself with a hydrogen peroxide bath'],
                        ]
                    },
                ]
            },
        ],
        KEY: {}, // TODO: fill in answers from audio
    },

    /* ── TEST 4 ── */
    {
        title: 'Listening Test 4',
        parts: [
            {
                n: 1, from: 1, to: 10, desc: 'Questions 1–10 · Complete the notes',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 12.mp3',
                blocks: [
                    { type: 'h3', text: 'Net Phone – Customer Service Notes' },
                    { type: 'text', html: 'Complete the notes.<br><strong>Write NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.' },
                    {
                        type: 'table', head: ['', ''], rows: [
                            ['First name', 'John'],
                            ['Family name', ['(1) ', { q: 1 }]],
                            ['Address', '14 London Road'],
                            ['', 'Westley'],
                            ['Postcode', 'WE6 2FF'],
                            ['Telephone', 'Home: Unavailable'],
                            ['', 'Work: 01836 829 748'],
                            // FIX: 3rd element was outside the cell array — must be wrapped
                            ['', ['Cell: 0176 6329 (2) ', { q: 2 }]],
                            ['Previous provider', 'Medi Com, Toronto'],
                            ['Payment method', ['(3) ', { q: 3 }]],
                            ['E-mail', 'Unavailable'],
                            ['Bank name', ['(4) ', { q: 4 }]],
                            ['Sort code', '13 – 40 – 25'],
                            ['Account number', ['629 861 (5) ', { q: 5 }]],
                        ]
                    },
                    { type: 'h3', text: 'Questions 6–10' },
                    { type: 'text', html: 'Complete the notes.<br><strong>Write NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.' },
                    { type: 'title', text: 'Phone Installation' },
                    {
                        type: 'table', head: ['', ''], rows: [
                            ['Deal chosen', ['(6) ', { q: 6 }]],
                            ['Monthly fee', '$25'],
                            ['', '(monthly fee includes telephone connection, internet services – no set-up charge)'],
                            ['Monthly bandwidth', ['(7) ', { q: 7 }]],
                            ['', ['( (8) ', { q: 8 }, ' can be added later)']],
                            ['Installation day', ['(9) ', { q: 9 }]],
                            ['Installation time', '5.30 p.m.'],
                            ['Installation duration', ['(10) ', { q: 10 }]],
                        ]
                    },
                ]
            },
            {
                n: 2, from: 11, to: 20, desc: 'Questions 11–20 · Multiple choice & matching',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 12.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 11–15' },
                    { type: 'text', html: 'Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.' },
                    {
                        type: 'mcq', q: 11, stem: 'Which methods of promotion did Janet use as a means to advertise the speech?', options: [
                            { value: 'A', label: 'The radio and posters' },
                            { value: 'B', label: 'Posters and e-mail' },
                            { value: 'C', label: 'Email and the radio' }]
                    },
                    {
                        type: 'mcq', q: 12, stem: 'What was the reason that Janet met Mr Mwanza in Mpanda?', options: [
                            { value: 'A', label: 'Travel problems.' },
                            { value: 'B', label: 'They met by accident at the bus station.' },
                            { value: 'C', label: 'They sat next to each other on a bus.' }]
                    },
                    {
                        type: 'mcq', q: 13, stem: 'How long did Janet first spend in Mpanda?', options: [
                            { value: 'A', label: '1 night' },
                            { value: 'B', label: '2 weeks' },
                            { value: 'C', label: '1 year' }]
                    },
                    {
                        type: 'mcq', q: 14, stem: 'What is the age range of the girls in the class?', options: [
                            { value: 'A', label: '12–16' },
                            { value: 'B', label: '12–17' },
                            { value: 'C', label: '16–17' }]
                    },
                    {
                        type: 'mcq', q: 15, stem: 'What other service does the school often have to provide the students in addition to education?', options: [
                            { value: 'A', label: 'Accommodation' },
                            { value: 'B', label: 'Travel expenses' },
                            { value: 'C', label: 'Transport from their homes to the school' }]
                    },
                    { type: 'h3', text: 'Questions 16–18' },
                    { type: 'text', html: 'What does Janet say the money raised will provide for each of the following?<br>Choose the correct letter, <strong>A – E</strong>.' },
                    {
                        type: 'mcq', q: 16, stem: 'Mr Mwanza', options: [
                            { value: 'A', label: "Support, partly for the care of the girls' children" },
                            { value: 'B', label: 'Salary' },
                            { value: 'C', label: 'Classroom rental' },
                            { value: 'D', label: 'Accommodation' },
                            { value: 'E', label: 'Teaching resources such as books, pens and textbooks' }]
                    },
                    {
                        type: 'mcq', q: 17, stem: 'Girls living away from home', options: [
                            { value: 'A', label: "Support, partly for the care of the girls' children" },
                            { value: 'B', label: 'Salary' },
                            { value: 'C', label: 'Classroom rental' },
                            { value: 'D', label: 'Accommodation' },
                            { value: 'E', label: 'Teaching resources such as books, pens and textbooks' }]
                    },
                    {
                        type: 'mcq', q: 18, stem: "The girls' families", options: [
                            { value: 'A', label: "Support, partly for the care of the girls' children" },
                            { value: 'B', label: 'Salary' },
                            { value: 'C', label: 'Classroom rental' },
                            { value: 'D', label: 'Accommodation' },
                            { value: 'E', label: 'Teaching resources such as books, pens and textbooks' }]
                    },
                    { type: 'h3', text: 'Questions 19–20' },
                    { type: 'text', html: 'What does Janet say about each of the following?<br>Choose the correct letter, <strong>A – D</strong>.' },
                    {
                        type: 'mcq', q: 19, stem: 'Computers for the school', options: [
                            { value: 'A', label: 'Still needing continued financial support' },
                            { value: 'B', label: 'Not expected to be available for at least ten years' },
                            { value: 'C', label: 'Already funded by donations' },
                            { value: 'D', label: 'Supplied by the government' }]
                    },
                    {
                        type: 'mcq', q: 20, stem: 'The three girls at university', options: [
                            { value: 'A', label: 'Still needing continued financial support' },
                            { value: 'B', label: 'Not expected to be available for at least ten years' },
                            { value: 'C', label: 'Already funded by donations' },
                            { value: 'D', label: 'Supplied by the government' }]
                    },
                ]
            },
            {
                n: 3, from: 21, to: 30, desc: 'Questions 21–30 · Matching & multiple choice',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 12.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 21–25' },
                    { type: 'text', html: 'What do the students say about each of the following sources or pieces of research material?<br>Choose the correct letter, <strong>A – G</strong>.' },
                    {
                        type: 'mcq', q: 21, stem: 'The books considered relevant from the recommended reading list', options: [
                            { value: 'A', label: 'Will arrive shortly before the presentation' },
                            { value: 'B', label: 'Contains information about the financial returns of previous ventures' },
                            { value: 'C', label: 'Already borrowed from the university library' },
                            { value: 'D', label: 'Examines difficulties affecting Argentinian mining in both the past and the present' },
                            { value: 'E', label: 'Provides an overview of the main developments in the twentieth century' },
                            { value: 'F', label: 'To be passed to another group member for inclusion in the presentation' },
                            { value: 'G', label: 'Focuses principally on Paraguay and Peru' }]
                    },
                    {
                        type: 'mcq', q: 22, stem: "Mendez's Mineral Exploitation in the South American Continent", options: [
                            { value: 'A', label: 'Will arrive shortly before the presentation' },
                            { value: 'B', label: 'Contains information about the financial returns of previous ventures' },
                            { value: 'C', label: 'Already borrowed from the university library' },
                            { value: 'D', label: 'Examines difficulties affecting Argentinian mining in both the past and the present' },
                            { value: 'E', label: 'Provides an overview of the main developments in the twentieth century' },
                            { value: 'F', label: 'To be passed to another group member for inclusion in the presentation' },
                            { value: 'G', label: 'Focuses principally on Paraguay and Peru' }]
                    },
                    {
                        type: 'mcq', q: 23, stem: "Janesko's The History of Mining in the Argentinian Andes", options: [
                            { value: 'A', label: 'Will arrive shortly before the presentation' },
                            { value: 'B', label: 'Contains information about the financial returns of previous ventures' },
                            { value: 'C', label: 'Already borrowed from the university library' },
                            { value: 'D', label: 'Examines difficulties affecting Argentinian mining in both the past and the present' },
                            { value: 'E', label: 'Provides an overview of the main developments in the twentieth century' },
                            { value: 'F', label: 'To be passed to another group member for inclusion in the presentation' },
                            { value: 'G', label: 'Focuses principally on Paraguay and Peru' }]
                    },
                    {
                        type: 'mcq', q: 24, stem: 'The additional examples needed to support the presentation', options: [
                            { value: 'A', label: 'Will arrive shortly before the presentation' },
                            { value: 'B', label: 'Contains information about the financial returns of previous ventures' },
                            { value: 'C', label: 'Already borrowed from the university library' },
                            { value: 'D', label: 'Examines difficulties affecting Argentinian mining in both the past and the present' },
                            { value: 'E', label: 'Provides an overview of the main developments in the twentieth century' },
                            { value: 'F', label: 'To be passed to another group member for inclusion in the presentation' },
                            { value: 'G', label: 'Focuses principally on Paraguay and Peru' }]
                    },
                    {
                        type: 'mcq', q: 25, stem: "Hall's Iron Ore Deposits in the Argentine Andes", options: [
                            { value: 'A', label: 'Will arrive shortly before the presentation' },
                            { value: 'B', label: 'Contains information about the financial returns of previous ventures' },
                            { value: 'C', label: 'Already borrowed from the university library' },
                            { value: 'D', label: 'Examines difficulties affecting Argentinian mining in both the past and the present' },
                            { value: 'E', label: 'Provides an overview of the main developments in the twentieth century' },
                            { value: 'F', label: 'To be passed to another group member for inclusion in the presentation' },
                            { value: 'G', label: 'Focuses principally on Paraguay and Peru' }]
                    },
                    { type: 'h3', text: 'Questions 26–30' },
                    { type: 'text', html: 'Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.' },
                    {
                        type: 'mcq', q: 26, stem: 'The 1954 article Andean Mining gave an overview of', options: [
                            { value: 'A', label: "The Andes' mineral resources and attempts to extract them." },
                            { value: 'B', label: 'The companies operating in the Andes.' },
                            { value: 'C', label: 'The development of mining techniques over time.' }]
                    },
                    {
                        type: 'mcq', q: 27, stem: 'A Historical Overview of Mining Techniques Used in Argentina dates from', options: [
                            { value: 'A', label: 'June 1905.' },
                            { value: 'B', label: 'May 2007.' },
                            { value: 'C', label: 'May 2010.' }]
                    },
                    {
                        type: 'mcq', q: 28, stem: 'The June 1905 article mainly discusses', options: [
                            { value: 'A', label: 'Changes in mineral-extraction technology.' },
                            { value: 'B', label: 'Distribution of valuable deposits across South America.' },
                            { value: 'C', label: 'Challenges with logistics.' }]
                    },
                    {
                        type: 'mcq', q: 29, stem: 'Why do they not need to spend any more time on the June 1905 article?', options: [
                            { value: 'A', label: 'Peter has already written down useful information from it.' },
                            { value: 'B', label: 'It contains very little information relevant to their presentation.' },
                            { value: 'C', label: 'They have found a more recent article covering the same subject.' }]
                    },
                    {
                        type: 'mcq', q: 30, stem: 'The May 2010 article is useful because it', options: [
                            { value: 'A', label: 'Describes mining methods used in 1930.' },
                            { value: 'B', label: 'Contains up-to-date statistics on metal deposits.' },
                            { value: 'C', label: 'Focuses only on gold and silver deposits.' }]
                    },
                ]
            },
            {
                n: 4, from: 31, to: 40, desc: 'Questions 31–40 · Sentence completion',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 12.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 31–40' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD ONLY</strong> for each answer.' },
                    { type: 'h3', text: 'The Channel Tunnel' },
                    {
                        type: 'notes', items: [
                            ['The tunnel has boosted the already lucrative second ', { q: 31 }, ' market in France for British investors'],
                            ['In 1802, Albert Mathieu proposed a mid-Channel artificial landmass, depending on special ', { q: 32 }, '-drawn transport'],
                            ['Being an island, the United Kingdom was apprehensive about opening up its ', { q: 33 }],
                            ['After the 1974 start was cancelled, 1985 brought the money ', { q: 34 }, ', when consultation began'],
                            ['The British entrance was built at Folkestone, where the ', { q: 35 }, ' was regarded as more suitable'],
                        ]
                    },
                    { type: 'h3', text: 'Building the Channel Tunnel' },
                    {
                        type: 'notes', items: [
                            ['The construction cost of £4.6 billion came in 80 per cent over the originally planned ', { q: 36 }],
                            ['Three tunnels were dug — two for ', { q: 37 }, ' and one for maintenance'],
                            ['The tunnels carry Eurostar passengers, the Euroshuttle for road vehicles, and trains carrying ', { q: 38 }],
                            ['The French and UK teams sealed the tunnel differently against the immense ', { q: 39 }, ' created by the sea above'],
                            ["The two teams' different weekly distances are put down to the challenging tunnelling ", { q: 40 }],
                        ]
                    },
                ]
            },
        ],
        KEY: {}, // TODO: fill in answers from audio
    },
    {
        id: 4,
        title: "Listening Test 4",
        audio: "https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 12.mp3",
        audioDuration: "27:13",

        parts: [
            /* ─────────────────────────  PART 1  ───────────────────────── */
            {
                part: 1,
                title: "Part 1",
                subtitle: "Listen and answer",
                questionRange: [1, 10],
                blocks: [
                    {
                        instructions:
                            "<p><strong>Questions 1 - 5</strong></p>" +
                            "<p>Complete the notes.</p>" +
                            "<p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>",
                        type: "table-cloze",
                        heading: "Net Phone - Customer Service Notes",
                        rows: [
                            { cells: [{ text: "First name" }, { text: "John" }] },
                            { cells: [{ text: "Family name" }, { inputs: [1] }] },
                            { cells: [{ text: "Address" }, { text: "14 London Road" }] },
                            { cells: [{ text: " " }, { text: "Westley" }] },
                            { cells: [{ text: "Postcode" }, { text: "WE6 2FF" }] },
                            { cells: [{ text: "Telephone" }, { text: "Home: Unavailable" }] },
                            { cells: [{ text: " " }, { text: "Work: 01836 829 748" }] },
                            {
                                cells: [
                                    { text: " " },
                                    { text: "Cell: 0176 6329 ", inputs: [2] },
                                ],
                            },
                            { cells: [{ text: "Previous provider" }, { text: "Medi Com, Toronto" }] },
                            { cells: [{ text: "Payment method" }, { inputs: [3] }] },
                            { cells: [{ text: "E-mail" }, { text: "Unavailable" }] },
                            { cells: [{ text: "Bank name" }, { inputs: [4] }] },
                            { cells: [{ text: "Sort code" }, { text: "13 - 40 - 25" }] },
                            {
                                cells: [
                                    { text: "Account number" },
                                    { text: "629 861 ", inputs: [5] },
                                ],
                            },
                        ],
                    },
                    {
                        instructions:
                            "<p><strong>Questions 6 - 10</strong></p>" +
                            "<p>Complete the notes.</p>" +
                            "<p>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.</p>",
                        type: "table-cloze",
                        heading: "Phone Installation",
                        rows: [
                            { cells: [{ text: "Deal chosen" }, { inputs: [6] }] },
                            { cells: [{ text: "Monthly fee" }, { text: "$25" }] },
                            {
                                colspan: 2,
                                cells: [
                                    {
                                        text:
                                            "(monthly fee includes telephone connection, internet services - no set-up charge)",
                                    },
                                ],
                            },
                            { cells: [{ text: "Monthly bandwidth" }, { inputs: [7] }] },
                            { cells: [{ text: " " }, { text: "( (", inputs: [8], suffix: " can be added later)" }] },
                            { cells: [{ text: "Installation day" }, { inputs: [9] }] },
                            { cells: [{ text: "Installation time" }, { text: "5.30 p.m." }] },
                            { cells: [{ text: "Installation duration" }, { inputs: [10] }] },
                        ],
                    },
                ],
            },

            /* ─────────────────────────  PART 2  ───────────────────────── */
            {
                part: 2,
                title: "Part 2",
                subtitle: "Listen and answer",
                questionRange: [11, 20],
                blocks: [
                    {
                        instructions:
                            "<p><strong>Questions 11 - 15</strong></p>" +
                            "<p>Choose the correct answer.</p>",
                        type: "mcq",
                        questions: [
                            {
                                n: 11,
                                prompt: "Which methods of promotion did Janet use as a means to advertise the speech?",
                                options: [
                                    { key: "A", text: "The radio and posters" },
                                    { key: "B", text: "Posters and e-mail" },
                                    { key: "C", text: "Email and the radio" },
                                ],
                            },
                            {
                                n: 12,
                                prompt: "What was the reason that Janet met Mr Mwanza in Mpanda?",
                                options: [
                                    { key: "A", text: "Travel problems." },
                                    { key: "B", text: "They met by accident at the bus station." },
                                    { key: "C", text: "They sat next to each other on a bus." },
                                ],
                            },
                            {
                                n: 13,
                                prompt: "How long did Janet first spend in Mpanda?",
                                options: [
                                    { key: "A", text: "1 night" },
                                    { key: "B", text: "2 weeks" },
                                    { key: "C", text: "1 year" },
                                ],
                            },
                            {
                                n: 14,
                                prompt: "What is the age range of the girls in the class?",
                                options: [
                                    { key: "A", text: "12-16" },
                                    { key: "B", text: "12-17" },
                                    { key: "C", text: "16-17" },
                                ],
                            },
                            {
                                n: 15,
                                prompt:
                                    "What other service does the school often have to provide the students in addition to education?",
                                options: [
                                    { key: "A", text: "Accommodation" },
                                    { key: "B", text: "Travel expenses" },
                                    { key: "C", text: "Transport from their homes to the school" },
                                ],
                            },
                        ],
                    },
                    {
                        instructions:
                            "<p><strong>Questions 16 - 18</strong></p>" +
                            "<p>What does Janet say the money raised will provide for each of the following?</p>" +
                            "<p>Choose the correct letter, <strong>A - E</strong>.</p>",
                        type: "mcq",
                        sharedOptions: [
                            { key: "A", text: "Support, partly for the care of the girls' children" },
                            { key: "B", text: "Salary" },
                            { key: "C", text: "Classroom rental" },
                            { key: "D", text: "Accommodation" },
                            { key: "E", text: "Teaching resources such as books, pens and textbooks" },
                        ],
                        questions: [
                            { n: 16, prompt: "Mr Mwanza" },
                            { n: 17, prompt: "Girls living away from home" },
                            { n: 18, prompt: "The girls' families" },
                        ],
                    },
                    {
                        instructions:
                            "<p><strong>Questions 19 - 20</strong></p>" +
                            "<p>What does Janet say about each of the following?</p>" +
                            "<p>Choose the correct letter, <strong>A - D</strong>.</p>",
                        type: "mcq",
                        sharedOptions: [
                            { key: "A", text: "Still needing continued financial support" },
                            { key: "B", text: "Not expected to be available for at least ten years" },
                            { key: "C", text: "Already funded by donations" },
                            { key: "D", text: "Supplied by the government" },
                        ],
                        questions: [
                            { n: 19, prompt: "Computers for the school" },
                            { n: 20, prompt: "The three girls at university" },
                        ],
                    },
                ],
            },

            /* ─────────────────────────  PART 3  ───────────────────────── */
            {
                part: 3,
                title: "Part 3",
                subtitle: "Listen and answer",
                questionRange: [21, 30],
                blocks: [
                    {
                        instructions:
                            "<p><strong>Questions 21 - 25</strong></p>" +
                            "<p>What do the students say about each of the following sources or pieces of research material?</p>" +
                            "<p>Choose the correct letter, <strong>A - G</strong>.</p>",
                        type: "mcq",
                        sharedOptions: [
                            { key: "A", text: "Will arrive shortly before the presentation" },
                            { key: "B", text: "Contains information about the financial returns of previous ventures" },
                            { key: "C", text: "Already borrowed from the university library" },
                            { key: "D", text: "Examines difficulties affecting Argentinian mining in both the past and the present" },
                            { key: "E", text: "Provides an overview of the main developments in the twentieth century" },
                            { key: "F", text: "To be passed to another group member for inclusion in the presentation" },
                            { key: "G", text: "Focuses principally on Paraguay and Peru" },
                        ],
                        questions: [
                            { n: 21, prompt: "The books considered relevant from the recommended reading list" },
                            { n: 22, prompt: "Mendez's Mineral Exploitation in the South American Continent" },
                            { n: 23, prompt: "Janesko's The History of Mining in the Argentinian Andes" },
                            { n: 24, prompt: "The additional examples needed to support the presentation" },
                            { n: 25, prompt: "Hall's Iron Ore Deposits in the Argentine Andes" },
                        ],
                    },
                    {
                        instructions:
                            "<p><strong>Questions 26 - 30</strong></p>" +
                            "<p>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.</p>",
                        type: "mcq",
                        questions: [
                            {
                                n: 26,
                                prompt: "The 1954 article Andean Mining gave an overview of",
                                options: [
                                    { key: "A", text: "The Andes' mineral resources and attempts to extract them." },
                                    { key: "B", text: "The companies operating in the Andes." },
                                    { key: "C", text: "The development of mining techniques over time." },
                                ],
                            },
                            {
                                n: 27,
                                prompt:
                                    "A Historical Overview of Mining Techniques Used in Argentina dates from",
                                options: [
                                    { key: "A", text: "June 1905." },
                                    { key: "B", text: "May 2007." },
                                    { key: "C", text: "May 2010." },
                                ],
                            },
                            {
                                n: 28,
                                prompt: "The June 1905 article mainly discusses",
                                options: [
                                    { key: "A", text: "Changes in mineral-extraction technology." },
                                    { key: "B", text: "Distribution of valuable deposits across South America." },
                                    { key: "C", text: "Challenges with logistics." },
                                ],
                            },
                            {
                                n: 29,
                                prompt:
                                    "Why do they not need to spend any more time on the June 1905 article?",
                                options: [
                                    { key: "A", text: "Peter has already written down useful information from it." },
                                    { key: "B", text: "It contains very little information relevant to their presentation." },
                                    { key: "C", text: "They have found a more recent article covering the same subject." },
                                ],
                            },
                            {
                                n: 30,
                                prompt: "The May 2010 article is useful because it",
                                options: [
                                    { key: "A", text: "Describes mining methods used in 1930." },
                                    { key: "B", text: "Contains up-to-date statistics on metal deposits." },
                                    { key: "C", text: "Focuses only on gold and silver deposits." },
                                ],
                            },
                        ],
                    },
                ],
            },

            /* ─────────────────────────  PART 4  ───────────────────────── */
            {
                part: 4,
                title: "Part 4",
                subtitle: "Listen and answer",
                questionRange: [31, 40],
                blocks: [
                    {
                        instructions:
                            "<p><strong>Questions 31 - 35</strong></p>" +
                            "<p>Complete the notes below.</p>" +
                            "<p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
                        type: "notes-cloze",
                        heading: "The Channel Tunnel",
                        bullets: [
                            {
                                parts: [
                                    { text: "The tunnel has boosted the already lucrative second " },
                                    { input: 31 },
                                    { text: " market in France for British investors" },
                                ],
                            },
                            {
                                parts: [
                                    { text: "In 1802, Albert Mathieu proposed a mid-Channel artificial landmass, depending on special " },
                                    { input: 32 },
                                    { text: " -drawn transport" },
                                ],
                            },
                            {
                                parts: [
                                    { text: "Being an island, the United Kingdom was apprehensive about opening up its " },
                                    { input: 33 },
                                ],
                            },
                            {
                                parts: [
                                    { text: "After the 1974 start was cancelled, 1985 brought the money " },
                                    { input: 34 },
                                    { text: " , when consultation began" },
                                ],
                            },
                            {
                                parts: [
                                    { text: "The British entrance was built at Folkestone, where the " },
                                    { input: 35 },
                                    { text: " was regarded as more suitable" },
                                ],
                            },
                        ],
                    },
                    {
                        instructions:
                            "<p><strong>Questions 36 - 40</strong></p>" +
                            "<p>Complete the notes below.</p>" +
                            "<p>Write <strong>ONE WORD ONLY</strong> for each answer.</p>",
                        type: "notes-cloze",
                        heading: "Building the Channel Tunnel",
                        bullets: [
                            {
                                parts: [
                                    { text: "The construction cost of £4.6 billion came in 80 per cent over the originally planned " },
                                    { input: 36 },
                                ],
                            },
                            {
                                parts: [
                                    { text: "Three tunnels were dug — two for " },
                                    { input: 37 },
                                    { text: " and one for maintenance" },
                                ],
                            },
                            {
                                parts: [
                                    { text: "The tunnels carry Eurostar passengers, the Euroshuttle for road vehicles, and trains carrying " },
                                    { input: 38 },
                                ],
                            },
                            {
                                parts: [
                                    { text: "The French and UK teams sealed the tunnel differently against the immense " },
                                    { input: 39 },
                                    { text: " created by the sea above" },
                                ],
                            },
                            {
                                parts: [
                                    { text: "The two teams' different weekly distances are put down to the challenging tunnelling " },
                                    { input: 40 },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }
    ,
    /* ── TEST 5 ── */
    {
        title: 'Listening Test 5',
        parts: [
            // ───────────────────────── PART 1 ─────────────────────────
            {
                n: 1, from: 1, to: 10, desc: 'Questions 1–10 · Complete the notes',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 38.mp3',
                blocks: [
                    { type: 'text', html: 'Complete the notes.<br><strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.' },
                    { type: 'title', text: 'Amplewick Book Discussion Club' },
                    { type: 'text', html: "Members of the book discussion club meet up to talk about a book they've all read." },
                    { type: 'h3', text: 'The meetings' },
                    {
                        type: 'notes', items: [
                            ['are very ', { q: 1 }],
                            ['are held on the first ', { q: 2 }, ' of each month'],
                            ['begin at ', { q: 3 }, ' p.m.'],
                            ['take place in the ', { q: 4 }, ' of one of the members, at 153 Hunt Road'],
                            ['The group avoids reading the ', { q: 5 }, ' for the book club meetings'],
                        ]
                    },
                    { type: 'h3', text: 'Questions 6–10' },
                    { type: 'text', html: 'Complete the table.<br><strong>Write ONE WORD ONLY</strong> for each answer.' },
                    {
                        type: 'table',
                        head: ['Author', 'Title', 'Main Characters', 'Notes'],
                        rows: [
                            ['Flora Tutuola',
                                ['"The (6) ', { q: 6 }, '"'],
                                ['a girl who is looking for her ', { q: 7 }],
                                ['The book is very ', { q: 8 }]],
                            [['Monica ', { q: 9 }],
                                '"Silent Tower"',
                            ['two people who are learning to play ', { q: 10 }],
                                'Members can get a discount on the book.'],
                        ]
                    },
                ]
            },

            // ───────────────────────── PART 2 ─────────────────────────
            {
                n: 2, from: 11, to: 20, desc: 'Questions 11–20 · Multiple choice & matching',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 38.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 11–16' },
                    { type: 'text', html: 'Choose <strong>TWO</strong> letters.' },
                    {
                        type: 'checkbox', q: 11, group: 'g11_12', max: 2,
                        stem: 'For which TWO reasons is the Enfield Centre such a good place for the event?',
                        options: [
                            { value: 'A', label: 'Its facilities are excellent.' },
                            { value: 'B', label: 'There is plenty of parking on site.' },
                            { value: 'C', label: 'Guests using it can get money off accommodation.' },
                            { value: 'D', label: 'Many excellent job fairs have been held there in the past.' },
                            { value: 'E', label: 'It is near to the offices of many of the companies who will be at the fair.' },
                        ]
                    },
                    {
                        type: 'checkbox', q: 13, group: 'g13_14', max: 2,
                        stem: 'Which TWO things can people at the Bakewell Jobs Fair get?',
                        options: [
                            { value: 'A', label: 'Free entry to other job fairs' },
                            { value: 'B', label: 'Advice about improving their CV' },
                            { value: 'C', label: 'A better chance of getting a job' },
                            { value: 'D', label: 'Practice at having a job interview' },
                            { value: 'E', label: 'Tips about how to choose a career' },
                        ]
                    },
                    {
                        type: 'checkbox', q: 15, group: 'g15_16', max: 2,
                        stem: "Which TWO of the following are advantages of the Bakewell Jobs Fair's smartphone app?",
                        options: [
                            { value: 'A', label: 'It shows which stands are less busy.' },
                            { value: 'B', label: 'It allows users to apply directly for jobs.' },
                            { value: 'C', label: 'It helps users find their way around the fair.' },
                            { value: 'D', label: 'It puts users directly in contact with company reps.' },
                            { value: 'E', label: 'It suggests how users can spend their free time at the fair.' },
                        ]
                    },
                    { type: 'h3', text: 'Questions 17–20' },
                    { type: 'text', html: 'Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.' },
                    {
                        type: 'mcq', q: 17,
                        stem: "When the fair's programme is available, what should job-seekers find out first?",
                        options: [
                            { value: 'A', label: 'Which companies will be at the event.' },
                            { value: 'B', label: 'Which companies they have heard of before.' },
                            { value: 'C', label: 'Decide which companies they want to speak with.' },
                        ]
                    },
                    {
                        type: 'mcq', q: 18,
                        stem: 'Why should visitors be selective about the firms they approach?',
                        options: [
                            { value: 'A', label: 'Some firms only speak to well-prepared applicants.' },
                            { value: 'B', label: 'They will not have enough time to meet every company.' },
                            { value: 'C', label: 'Their conversations will need to be planned beforehand.' },
                        ]
                    },
                    {
                        type: 'mcq', q: 19,
                        stem: 'Before meeting a company rep, visitors should plan',
                        options: [
                            { value: 'A', label: 'What they will say and ask.' },
                            { value: 'B', label: 'How to contact the company afterwards' },
                            { value: 'C', label: 'How long the meeting should last.' },
                        ]
                    },
                    {
                        type: 'mcq', q: 20,
                        stem: 'What should visitors note down immediately after each conversation?',
                        options: [
                            { value: 'A', label: 'The questions they asked in the conversation.' },
                            { value: 'B', label: 'The time of any follow-up meeting.' },
                            { value: 'C', label: 'The name of the person they spoke to.' },
                        ]
                    },
                ]
            },

            // ───────────────────────── PART 3 ─────────────────────────
            {
                n: 3, from: 21, to: 30, desc: 'Questions 21–30 · Complete the notes',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 9.mp3',
                blocks: [
                    { type: 'h3', text: 'Catching up' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.' },
                    {
                        type: 'notes', items: [
                            ['Heath left medical school and trained as a science ', { q: 21 }],
                            ['Sally travelled the world for two years — everywhere except ', { q: 22 }],
                            ['back home, Sally went into ', { q: 23 }, ' and now works for the local paper'],
                            ['Sally and Gordon have ', { q: 24 }, ' children'],
                            ['Heath and Kate finally married ', { q: 25 }, ' years after they graduated'],
                        ]
                    },
                    { type: 'h3', text: 'Dinner arrangements' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.' },
                    {
                        type: 'notes', items: [
                            ["dinner on Saturday at Heath and Kate's — arrive at ", { q: 26 }, " o'clock"],
                            ["Sally's mobile: ", { q: 27 }, ' 963 957'],
                            ['the flat is just past the church, with a ', { q: 28 }, " entrance opposite and a doctor's surgery next door"],
                            ["food: Sally hates fish and seafood; Gordon doesn't care much for ", { q: 29 }, ' meat'],
                            ['press the bell second from the bottom; the flat is on the ', { q: 30 }, ' floor'],
                        ]
                    },
                ]
            },

            // ───────────────────────── PART 4 ─────────────────────────
            {
                n: 4, from: 31, to: 40, desc: 'Questions 31–40 · Complete the notes',
                audio: 'https://static.gelnet.org/modules/writing_interface/ielts/audio/Listening 9.mp3',
                blocks: [
                    { type: 'h3', text: 'Questions 31–40' },
                    { type: 'text', html: 'Complete the notes below.<br><strong>Write ONE WORD AND/OR A NUMBER</strong> for each answer.' },
                    { type: 'title', text: 'THE MEGALODON (Carcharodon Megalodon) — the largest predator that ever lived on Earth' },
                    { type: 'h3', text: 'Description' },
                    {
                        type: 'table', head: ['', ''], rows: [
                            ['Size', '12 m + (possibly up to 15 m or 31 m)'],
                            ['', 'About 3 × length of Great White Shark (estimates from fossilised teeth and vertebrae).'],
                            ['Teeth', ["Size of a man's ", { q: 31 }]],
                            ['', "Very hard and fossilised well, unlike all other parts of sharks' cartilage skeletons."],
                            ['', ['A material similar to bone and covered with hard ', { q: 32 }, '.']],
                            ['', 'Like Great White Shark teeth, but bigger, thicker and more finely serrated.'],
                            ['Appearance', 'Possibly like a huge, streamlined Great White Shark.'],
                            ['Jaws', ['Open ', { q: 33 }, ' feet wide and 7 feet high; could swallow enormous objects.']],
                            ['', 'Loosely attached by ligaments and muscles to the skull.'],
                            ['', 'Teeth probably located in rotating rows.'],
                            ['', ['First two rows of teeth for obtaining ', { q: 34 }, '; others move as necessary.']],
                            ['', 'Lost, broken or worn teeth replaced by new ones.'],
                            ['', 'Did not chew food; gulped whole large chunks.'],
                            ['Diet', 'Mainly whales.'],
                            ['', ['Sharks eat approx. ', { q: 35 }, ' per cent of body weight daily.']],
                            ['', ['Remains of whales with large ', { q: 36 }, ' marks from serrated teeth — indicates predator–prey relationship.']],
                            ['Timeline', 'Megalodon existed in Miocene and Pliocene epochs (25 million – 1.6 million years ago).'],
                            ['', ['The precise time of its ', { q: 37 }, ' remains moot; could be only 10,000 years ago.']],
                            ['', ['Research shows that if Megalodon is extinct, it is only recently in the geological ', { q: 38 }, '.']],
                            ['', 'Other large animals can stay hidden, so maybe Megalodon still exists somewhere.'],
                            ['Sightings', ['In 1918, Australian crayfishmen reported an enormous shark attacking their pots. They said it was huge — approximately ', { q: 39 }, ' metres in length. The sighting was never repeated.']],
                            ['', ["Megalodon's existence today is debated only on ", { q: 40 }, ' grounds.']],
                        ]
                    },
                ]
            },
        ],

        KEY: {},   // TODO: fill in correct answers from audio

        // Multi-select (choose TWO) groupings — correct arrays to be filled from audio
        CHECKBOX: {
            11: { name: 'g11_12', correct: [] },
            12: { name: 'g11_12' },
            13: { name: 'g13_14', correct: [] },
            14: { name: 'g13_14' },
            15: { name: 'g15_16', correct: [] },
            16: { name: 'g15_16' },
        },
    },
];

