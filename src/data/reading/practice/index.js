export default [
    // ============================================================
    // TEST 1 — Mammoth kill (existing)
    // ============================================================
    {
        title: "Mammoth kill",
        passages: [
            {
                part: 1,
                title: "Mammoth kill",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–13, which are based on the Reading Passage below.</em></p>
          <p>A mammoth is any species of the extinct genus <em>Mammuthus</em>, proboscideans commonly equipped with long, curved tusks and, in northern species, a covering of long hair. They lived from the Pliocene epoch (from around 5 million years ago) into the Holocene at about 4,500 years ago, and were members of the family <em>Elephantidae</em>, which contains, along with mammoths, the two genera of modern elephants and their ancestors.</p>
          <p><strong>A</strong> Like their modern relatives, mammoths were quite large. The largest known species reached heights in the region of 4 m at the shoulder and weights of up to 8 tonnes, while exceptionally large males may have exceeded 12 tonnes. However, most species of mammoth were only about as large as a modern Asian elephant. Both sexes bore tusks. A first, small set appeared at about the age of six months, and these were replaced at about 18 months by the permanent set. Growth of the permanent set was at a rate of about 2.5 to 15.2 cm per year. Based on studies of their close relatives, the modern elephants, mammoths probably had a gestation period of 22 months, resulting in a single calf being born. Their social structure was probably the same as that of African and Asian elephants, with females living in herds headed by a matriarch, whilst bulls lived solitary lives or formed loose groups after sexual maturity.</p>
          <p><strong>B</strong> MEXICO CITY – Although it's hard to imagine in this age of urban sprawl and automobiles, North America once belonged to mammoths, camels, ground sloths as large as cows, bear-size beavers and other formidable beasts. Some 11,000 years ago, however, these large-bodied mammals and others – about 70 species in all – disappeared. Their demise coincided roughly with the arrival of humans in the New World and dramatic climatic change – factors that have inspired several theories about the die-off. Yet despite decades of scientific investigation, the exact cause remains a mystery. Now new findings offer support to one of these controversial hypotheses: that human hunting drove this megafaunal menagerie to extinction. The overkill model emerged in the 1960s, when it was put forth by Paul S. Martin of the University of Arizona. Since then, critics have charged that no evidence exists to support the idea that the first Americans hunted to the extent necessary to cause these extinctions. But at the annual meeting of the Society of Vertebrate Paleontology in Mexico City last October, paleoecologist John Alroy of the University of California at Santa Barbara argued that, in fact, hunting-driven extinction is not only plausible, it was unavoidable. He has determined, using a computer simulation, that even a very modest amount of hunting would have wiped these animals out.</p>
          <p><strong>C</strong> Assuming an initial human population of 100 people that grew no more than 2 percent annually, Alroy determined that if each band of, say, 50 people killed 15 to 20 large mammals a year, humans could have eliminated the animal populations within 1,000 years. Large mammals in particular would have been vulnerable to the pressure because they have longer gestation periods than smaller mammals and their young require extended care.</p>
          <p><strong>D</strong> Not everyone agrees with Alroy's assessment. For one, the results depend in part on population-size estimates for the extinct animals – figures that are not necessarily reliable. But a more specific criticism comes from mammalogist Ross D. E. MacPhee of the American Museum of Natural History in New York City, who points out that the relevant archaeological record contains barely a dozen examples of stone points embedded in mammoth bones (and none, it should be noted, are known from other megafaunal remains) – hardly what one might expect if hunting drove these animals to extinction. Furthermore, some of these species had huge ranges – the giant Jefferson's ground sloth, for example, lived as far north as the Yukon and as far south as Mexico – which would have made slaughtering them in numbers sufficient to cause their extinction rather implausible, he says.</p>
          <p><strong>E</strong> MacPhee agrees that humans most likely brought about these extinctions (as well as others around the world that coincided with human arrival), but not directly. Rather he suggests that people may have introduced hyperlethal disease, perhaps through their dogs or hitchhiking vermin, which then spread wildly among the immunologically naive species of the New World. As in the overkill model, populations of large mammals would have a harder time recovering. Repeated outbreaks of a hyperdisease could thus quickly drive them to the point of no return. So far MacPhee does not have empirical evidence for the hyperdisease hypothesis, and it won't be easy to come by: hyperlethal disease would kill far too quickly to leave its signature on the bones themselves. But he hopes that analyses of tissue and DNA from the last mammoths to perish will eventually reveal murderous microbes.</p>
          <p><strong>F</strong> The third explanation for what brought on this North American extinction does not involve human beings. Instead its proponents blame the loss on the weather. The Pleistocene epoch witnessed considerable climatic instability, explains paleontologist Russell W. Graham of the Denver Museum of Nature and Science. As a result, certain habitats disappeared, and species that had once formed communities split apart. For some animals, this change brought opportunity. For much of the megafauna, however, the increasingly homogeneous environment left them with shrinking geographical ranges – a death sentence for large animals, which need large ranges. Although these creatures managed to maintain viable populations through most of the Pleistocene, the final major fluctuation – the so-called Younger Dryas event – pushed them over the edge, Graham says. For his part, Alroy is convinced that human hunters demolished the titans of the Ice Age. The overkill model explains everything the disease and climate scenarios explain, he asserts, and makes accurate predictions about which species would eventually go extinct. "Personally, I'm a vegetarian," he remarks, "and I find all of this kind of gross – but believable."</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "gap",
                        heading: "Questions 1–7",
                        instructions: [
                            "Complete the summary below. Write <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.",
                            "Write your answers in boxes <strong>1–7</strong> on your answer sheet."
                        ],
                        items: [
                            { q: 1, before: "The cause of the extinction of large mammals around 11,000 years ago remains debated. One explanation is that human ", after: "" },
                            { q: 2, before: " caused the extinctions. This theory, known as the ", after: "" },
                            { q: 3, before: ", was proposed in the 1960s. Another hypothesis suggests that a deadly ", after: "" },
                            { q: 4, before: " introduced by humans caused the animals' demise. However, this theory still needs more ", after: "" },
                            { q: 5, before: " to support it. A third explanation links the extinction to ", after: "" },
                            { q: 6, before: " during the Pleistocene. Habitat changes left many large mammals with shrinking ", after: "" },
                            { q: 7, before: ", and the final major climate fluctuation, the ", after: ", pushed them towards extinction." }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 8–13",
                        boxTitle: "People",
                        instructions: [
                            "Look at the following people and the list of ideas below.",
                            "Match each person with the correct idea, <strong>A–C</strong>.",
                            "Write the correct letter, <strong>A–C</strong>, in boxes <strong>8–13</strong> on your answer sheet.",
                            "<em>NB</em> You may use any letter more than once."
                        ],
                        options: [
                            { value: "A", label: "John Alroy" },
                            { value: "B", label: "Ross D. E. MacPhee" },
                            { value: "C", label: "Russell W. Graham" }
                        ],
                        items: [
                            { q: 8, statement: "Human hunting well explained which species would finally disappear." },
                            { q: 9, statement: "Further grounded proof needed to explain human's indirect impact on mammals." },
                            { q: 10, statement: "Over hunting situation has caused die-out of large mammals." },
                            { q: 11, statement: "Illness rather than hunting caused extensive extinction." },
                            { q: 12, statement: "Doubt raised through the study of several fossil records." },
                            { q: 13, statement: "Climate shift is the main reason of extinction." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["hunting"], 2: ["overkill model"], 3: ["disease", "hyper disease", "hyperdisease", "hyper-disease", "hyper lethal disease"], 4: ["empirical evidence"], 5: ["climatic instability"], 6: ["geographical ranges", "geographic ranges", "geographical range"], 7: ["Younger Dryas event", "Younger Dryas"],
            8: ["A"], 9: ["B"], 10: ["A"], 11: ["B"], 12: ["B"], 13: ["C"]
        }
    },

    // ============================================================
    // TEST 2 — Language Strategy In Multinational Company (existing)
    // ============================================================
    {
        title: "Language Strategy In Multinational Company",
        passages: [
            {
                part: 1,
                title: "Language Strategy In Multinational Company",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–14, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong> The importance of language management in multinational companies has never been greater than today. Multinationals are becoming ever more conscious of the importance of global coordination as a source of competitive advantage and language remains the ultimate barrier to aspirations of international harmonization. Before attempting to consider language management strategies, companies will have to evaluate the magnitude of the language barrier confronting them and in doing so they will need to examine it in three dimensions: the Language Diversity, the Language Penetration and the Language Sophistication. Companies next need to turn their attention to how they should best manage language. There is a range of options from which MNCs can formulate their language strategy.</p>
          <p><strong>B</strong> <em>Lingua Franca:</em> The simplest answer, though realistic only for English speaking companies, is to rely on one's native tongue. As recently as 1991 a survey of British exporting companies found that over a third used English exclusively in dealings with foreign customers. This attitude that "one language fits all" has also been carried through into the Internet age. A survey of the web sites of top American companies confirmed that over half made no provision for foreign language access, and another found that less than 10% of leading companies were able to respond adequately to emails other than in the company's language. Widespread though it is however, reliance on a single language is a strategy that is fatally flawed. It makes no allowance for the growing trend in Linguistic Nationalism whereby buyers in Asia, South America and the Middle East in particular are asserting their right to "work in the language of the customer". It also fails to recognize the increasing vitality of languages such as Spanish, Arabic and Chinese that over time are likely to challenge the dominance of English as a lingua franca. In the IT arena it ignores the rapid globalization of the Internet where the number of English-language e-commerce transactions, emails and websites, is rapidly diminishing as a percentage of the total. Finally, the total reliance on a single language puts the English speaker at risk in negotiations. Contracts, rules and legislation are invariably written in the local language, and a company unable to operate in that language is vulnerable.</p>
          <p><strong>C</strong> <em>Functional Multilingualism:</em> Another improvised approach to Language is to rely on what has been termed "Functional Multilingualism". Essentially what this means is to muddle through, relying on a mix of languages, pidgins and gestures to communicate by whatever means the parties have at their disposal. In a social context such a shared effort to make one another understand might be considered an aid to the bonding process with the frustration of communication being regularly punctuated by moments of absurdity and humor. However, as the basis for business negotiations it appears very hit-and-miss. And yet Hagen's recent study suggests that 16% of international business transactions are conducted in a "cocktail of languages". Functional Multilingualism shares the same defects as reliance on a lingua franca and increases the probability of cognitive divergence between the parties engaged in the communication.</p>
          <p><strong>D</strong> <em>External Language Resources:</em> A more rational and obvious response to the language barrier is to employ external resources such as translators and interpreters, and certainly there are many excellent companies specialized in these fields. However, such a response is by no means an end to the language barrier. For a start these services can be very expensive with a top Simultaneous Interpreter, commanding daily rates as high as a partner in an international consulting company. Secondly, any good translator or interpreter will insist that to be fully effective they must understand the context of the subject matter. This is not always possible. In some cases it is prohibited by the complexity or specialization of the topic. Sometimes by lack of preparation time but most often the obstacle is the reluctance of the parties to explain the wider context to an outsider. Another problem is that unless there has been considerable pre-explaining between the interpreter and his clients it is likely that there will be ambiguity and cultural overtones in the source messages the interpreter has to work with. They will of course endeavour to provide a high-fidelity translation but in this circumstance the interpreter has to use initiative and guess work. This clearly injects a potential source of misunderstanding into the proceedings. Finally, while a good interpreter will attempt to convey not only the meaning but also the spirit of any communication, there can be no doubt that there is a loss of rhetorical power when communications go through a third party. So in situations requiring negotiation, persuasion, humor etc. the use of an interpreter is a poor substitute for direct communication.</p>
          <p><strong>E</strong> <em>Training:</em> The immediate and understandable reaction to any skills shortage in a business is to consider personnel development and certainly the language training industry is well developed. Offering programs at almost every level and in numerous languages. However, without doubting the value of language training no company should be deluded into believing this to be assured of success. Training in most companies is geared to the economic cycle. When times are good, money is invested in training. When belts get tightened, training is one of the first "luxuries" to be pared down. In a study conducted across four European countries, nearly twice as many companies said they needed language training in coming years as had conducted training in past years. This disparity between "good intentions" and "actual delivery", underlines the problems of relying upon training for language skills. Unless the company is totally committed to sustaining the strategy even through bad times, it will fail.</p>
          <p><strong>F</strong> One notable and committed leader in the field of language training has been the Volkswagen Group. They have developed a language strategy over many years and in many respects can be regarded as a model of how to manage language professionally. However, the Volkswagen approach underlines that language training has to be considered a strategic rather than a tactical solution. In their system, to progress from "basics" to "communications competence" in a language requires the completion of 6 language stages, each one demanding approximately 90 hours of refresher course, supported by many more hours of self-study, spread over a 6-9 month period. The completion of each stage is marked by a post-stage achievement test, which is a prerequisite for continued training. So even this professionally managed program expects a minimum of three years of fairly intensive study to produce an accountant, Engineer, buyer or salesperson capable of working effectively in a foreign language. Clearly companies intending to pursue this route need to do so with realistic expectations and with the intention of sustaining the program over many years. Except in terms of "brush-up" courses for people who were previously fluent in a foreign language, training cannot be considered a quick fix and hence other methods will have to be considered.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "word-bank",
                        heading: "Questions 1–6",
                        instructions: [
                            "Complete the following summary. Drag the correct word from the bank into each blank.",
                            "Write your answers in boxes <strong>1–6</strong> on your answer sheet."
                        ],
                        bank: [
                            { value: "A", label: "gestures" }, { value: "B", label: "clients" },
                            { value: "C", label: "transaction" }, { value: "D", label: "assumption" },
                            { value: "E", label: "accurate" }, { value: "F", label: "documents" },
                            { value: "G", label: "managers" }, { value: "H", label: "body language" },
                            { value: "I", label: "long-term" }, { value: "J", label: "effective" },
                            { value: "K", label: "rivals" }, { value: "L", label: "costly" }
                        ],
                        mode: "drag",
                        items: [
                            { q: 1, before: "MNCs often encounter language barriers in their daily strategy, then they seek several approaches to solve such problems. First, native language gives them a realistic base in a different language speaking country, but problems turn up when they deal with oversea ", after: ". For example, operation on translation of some key " },
                            { q: 2, before: "", after: ", it is inevitable to generate differences by rules from different countries. Another way is to rely on a combination of spoken language and " },
                            { q: 3, before: "", after: ", yet a report written that over one-tenth business " },
                            { q: 4, before: "", after: " processed in a party language setting. Third way: hire translators. However, firstly it is " },
                            { q: 5, before: "", after: ", besides if they are not well-prepared, they have to take " },
                            { q: 6, before: "", after: " work." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 7–13",
                        instructions: [
                            "Answer the questions below.",
                            "Choose <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the passage for each answer."
                        ],
                        items: [
                            { q: 7, before: "What understandable reaction does Training pay attention to according to the author?", after: "" },
                            { q: 8, before: "In what term does the writer describe training during economy depression?", after: "" },
                            { q: 9, before: "What contribution does Volkswagen Group do for multinational companies?", after: "" },
                            { q: 10, before: "What does Volkswagen Group consider language training as in their company?", after: "" },
                            { q: 11, before: "How many stages are needed from basic course to advanced in training?", after: "" },
                            { q: 12, before: "How long does a refresher course need normally?", after: "" },
                            { q: 13, before: "At least how long is needed for a specific professional to acquire a foreign language?", after: "" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Question 14",
                        instructions: ["Write your answer in box <strong>14</strong> on your answer sheet."],
                        items: [
                            {
                                q: 14,
                                stem: "What is the main function of this passage?",
                                options: [
                                    { value: "A", label: "to reveal all kinds of language problems that companies may encounter" },
                                    { value: "B", label: "to exhibit some well-known cases in dealing with language difficulties" },
                                    { value: "C", label: "to evaluate various approaches for language barrier in multinational companies" },
                                    { value: "D", label: "to testify that training is only feasible approach to solve language problem" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["B"], 2: ["F"], 3: ["A"], 4: ["C"], 5: ["L"], 6: ["D"],
            7: ["personnel development"], 8: ["luxury", "luxuries"], 9: ["model"],
            10: ["strategic solution", "strategic"], 11: ["six", "6"],
            12: ["90 hours", "90"], 13: ["three years", "3 years"], 14: ["C"]
        }
    },

    // ============================================================
    // TEST 3 — The Rise of Agritourism (existing)
    // ============================================================
    {
        title: "The Rise of Agritourism",
        passages: [
            {
                part: 1,
                title: "The Rise of Agritourism",
                html: `
          <p><em>You should spend about 20 minutes on Questions 14–26, which are based on the Reading Passage below.</em></p>
          <p>In advanced industrialised countries, small farmers have been challenged by changing economic and social conditions, such as increased global competition, falling commodity prices, and capital- and technology-intensive agricultural production. In addition, there has been added public pressure to make expensive changes in farming methods, due to public environmental concerns about industrialised agricultural production in combination with political pressures to reduce agricultural subsidies. These changing economic and social conditions have disproportionately impacted smaller farms in Europe and the US.</p>
          <p>Agritourism is becoming an increasingly popular way for rural property owners to earn additional income from agricultural properties. In addition to more traditional farm tours and seasonal activities, such as hay rides, corn mazes and u-pick fruits, farm owners are devising new ways to bring people to their door by offering more entertainment-oriented activities. Some farmers are offering their barns as venues for weddings, parties, dances and other special events. Others are opening their homes to visitors for vacations, so guests can experience life on a working farm by helping out with routine farm chores, such as feeding or herding the livestock, milking the animals, making cheese, collecting eggs, picking vegetables and preparing farm fresh meals. Agritourism works in combination with a growing public desire to engage in rural experiences and outdoor recreational activities. By combining agriculture and tourism, agritourism offers these rural experiences to urban residents and economic diversification to farmers.</p>
          <p>Part of the attraction of agritourism is the nostalgia it creates for a simpler time and its authenticity. Tourists are being sold, not only on beautiful sceneries and visual aesthetics, but also experiences that are meant to open up a new world for these customers who are tired of the hustle and bustle of city life. Authenticity has been an abiding theme in tourism studies and it may have a special meaning in this combination of agriculture and tourism. For one thing, the image of the family farm remains imbued with deep authenticity, the surviving representation of an old world ideal. To partake in agritourism is therefore likely to convey the sense of having a deeply authentic experience. Critics have claimed that this desire to reconnect with the life world of one's ancestors may conflict with the nature of modern agriculture and whether the tourist will want to face its true realities. It seems therefore that often the most distinctive innovative effort involves the reinvention of tradition and rural tourism products. Examples are the recreation of home-produced products long since replaced by manufactured commodities and the provision of hands-on-experiences in crafts often recreated for tourists. As a result, some critics argue that the tourists who are running to the countryside are overcrowding and ruining the pristine beauty that they so desperately want to experience.</p>
          <p>Agritourism can benefit the life and economy of local communities, as well as the farms themselves. Agritourism firstly means that some farms can continue in business and employ workers. Employment underscores the genuine importance of agritourism farms to local economies, as rural communities are usually areas that both have high unemployment and few alternatives for the unemployed to find work. Secondly, a significant number of agritourists come from areas reasonably local to the visited farms. This means that tourist spending on agritourism often stays in the region, helping to generate taxable revenues and more disposable incomes. The U.S. Department of Agriculture's agricultural census, taken every five years, found that last year approximately 23,000 farms took part in agritourism. These farms each earned $24,300 from agritourism, compared to five years ago, when farms engaged in this brought in only $7,200 per farm. The trend is clearly growing and the money generated will stimulate local economies. Thirdly, agritourism benefits the local community in terms of education. Many farms offer tours for elementary school-age children, who can learn where their food is coming from and how it is produced.</p>
          <p>Farms choosing to develop agritourism have had reasonable government support. Over the last 20 years, European Union countries have spent 2 billion euros to subsidise agritourism development in rural farming areas that cannot compete in a global market with declining commodity prices. This, in turn, helps governments by keeping farmers on land, protecting picturesque rural landscapes that attract tourists, and supporting the production of regional agricultural products. As well as finance, local and national governments should create in the areas under their jurisdiction favourable environments for the development of agritourism, by changing regulatory and tax constraints, so that more farms are encouraged to enter the industry. It is clear that there are strong economic and social benefits that agritourism can provide farmers, customers and the local areas where the farms are situated. Agritourism contributes to and enhances the quality of life in communities by expanding recreational opportunities, rural economies, and promoting the retention of agricultural lands. Working agricultural landscapes reflect the efforts of generations of farm families and often provide a defining sense of culture, heritage, and rural character. Agritourism provides educational opportunities for school children and adults to learn about this agrarian heritage, the production of food, and resource stewardship. Finally, many agritourism operations provide consumers with direct access to fresh farm goods. Agritourism is an industry with an enormous potential for growth. With it, farming could become more efficient and sustainable, rural areas could become more beautiful and farmers could become better off and more significant employers and contributors to economies.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "mcq",
                        heading: "Questions 14–19",
                        instructions: [
                            "Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.",
                            "Write the correct letter in boxes 14–19 on your answer sheet."
                        ],
                        items: [
                            {
                                q: 14, stem: "Farmers today face demands from the public about", options: [
                                    { value: "A", label: "reacting to global competition." },
                                    { value: "B", label: "improving workers' conditions." },
                                    { value: "C", label: "changing to more environmentally friendly production methods." },
                                    { value: "D", label: "making production cheaper." }
                                ]
                            },
                            {
                                q: 15, stem: "Farmers today are experiencing pressure from governments, as the latter wishes to", options: [
                                    { value: "A", label: "reduce the amount of money they provide to help farmers." },
                                    { value: "B", label: "increase taxes to gain more public income." },
                                    { value: "C", label: "force farmers to employ more workers." },
                                    { value: "D", label: "reduce the amount of pesticides used in agricultural production." }
                                ]
                            },
                            {
                                q: 16, stem: "Farmers can attract tourists by", options: [
                                    { value: "A", label: "undercutting the competition of traditional holidays on prices." },
                                    { value: "B", label: "being close to transport hubs." },
                                    { value: "C", label: "letting people get married on the farm." },
                                    { value: "D", label: "marketing on a door-by-door basis." }
                                ]
                            },
                            {
                                q: 17, stem: "Farming authenticity partly depends on", options: [
                                    { value: "A", label: "the beauty of the farms' surroundings." },
                                    { value: "B", label: "the public's traditional perceptions of a small farm." },
                                    { value: "C", label: "how the farm workers dress and behave." },
                                    { value: "D", label: "the type of livestock the farms have." }
                                ]
                            },
                            {
                                q: 18, stem: "Farms can create authenticity by", options: [
                                    { value: "A", label: "making tourist workers get up very early in the morning." },
                                    { value: "B", label: "having interactive displays of farm workings." },
                                    { value: "C", label: "not showing animals being killed." },
                                    { value: "D", label: "re-establishing old processes that are not usually used any more." }
                                ]
                            },
                            {
                                q: 19, stem: "One criticism of agritourism is that", options: [
                                    { value: "A", label: "farm workers lose their jobs." },
                                    { value: "B", label: "tourists change how farms operate." },
                                    { value: "C", label: "the extra numbers of people in the countryside spoil its appeal." },
                                    { value: "D", label: "only the farmer receives the extra income." }
                                ]
                            }
                        ]
                    },
                    {
                        type: "word-bank",
                        heading: "Questions 20–26",
                        instructions: [
                            "Complete the summary below. Drag the correct word from the bank into each blank.",
                            "Write your answers in boxes 20–26 on your answer sheet."
                        ],
                        bank: [
                            { value: "A", label: "spending" }, { value: "B", label: "disposable incomes" },
                            { value: "C", label: "governments" }, { value: "D", label: "landscapes" },
                            { value: "E", label: "regional agricultural products" }, { value: "F", label: "rural economies" },
                            { value: "G", label: "fresh farm goods" }, { value: "H", label: "tourists" },
                            { value: "I", label: "communities" }
                        ],
                        mode: "drag",
                        items: [
                            { q: 20, before: "The Benefits of Agritourism — Farms continue in business and are employers. Tourist ", after: " remains in the area." },
                            { q: 21, before: "It generates taxes and creates ", after: ". Local economies grow because of the extra money spent. Children can learn about farming." },
                            { q: 22, before: "", after: " benefit by keeping farms in operation on the land." },
                            { q: 23, before: "Rural ", after: " are preserved." },
                            { q: 24, before: "", after: " continue to be manufactured. Improved quality of life and more recreational possibilities in communities." },
                            { q: 25, before: "Diversified ", after: ". Land remains in use by agriculture. Education for all." },
                            { q: 26, before: "People can easily buy ", after: "." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            14: ["C"], 15: ["A"], 16: ["C"], 17: ["B"], 18: ["D"], 19: ["C"],
            20: ["A"], 21: ["B"], 22: ["C"], 23: ["D"], 24: ["E"], 25: ["F"], 26: ["G"]
        }
    },

    // ============================================================
    // TEST 4 — Sunset for the Oil Business (existing)
    // ============================================================
    {
        title: "Sunset for the Oil Business",
        passages: [
            {
                part: 1,
                title: "Sunset for the Oil Business",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–14, which are based on the Reading Passage below.</em></p>
          <p><em>The world is about to run out of oil. Or perhaps not. It depends whom you believe…</em></p>
          <p><strong>A</strong> Members of the Department Analysis Centre (ODAC) recently met in London and presented technical data that support their grim forecast that the world is perilously close to running out of oil. Leading lights of this moment, including the geologists Colin Campbell, rejected rival views presented by American geological survey and the international energy agency that contradicted their findings. Dr Campbell even decried the amazing display of ignorance, denial and obfuscation by government, industry and academics on this topic.</p>
          <p><strong>B</strong> So is the oil really running out? The answer is easy: Yes. Nobody seriously disputes the notion that oil is, for all practical purposes, a non-renewable resource that will run out someday, be that years or decades away. The harder question is determining when precisely oil will begin to get scarce. And answering that question involves scaling Hubbert's peak.</p>
          <p><strong>C</strong> M. King Hubbert, a Shell geologist of legendary status among depletion experts, forecast in 1956 that oil production in the United States would peak in the early 1970s and then slowly decline, in something resembling a bell-shaped curve. At the time, his forecast was controversial, and many rubbished it. After 1970, however, empirical evidence proved him correct: oil production in America did indeed peak and has been in decline ever since.</p>
          <p><strong>D</strong> Dr Hubbert's analysis drew on the observation that oil production in a new area typically rises quickly at first, as the easiest and cheapest reserves are tapped. Over time, reservoirs age and go into decline, and so lifting oil becomes more expensive. Oil from that area then becomes less competitive in relation to other fuels, or to oil from other areas. As a result, production slows down and usually tapers off and declines. That, he argued, made for a bell-shaped curve.</p>
          <p><strong>E</strong> His successful prediction has emboldened a new generation of geologists to apply his methodology on a global scale. Chief among them are the experts at ODAC, who worry that the global peak in production will come in the next decade. Dr Campbell used to argue that the peak should have come already; he now thinks it is just around the corner. A heavyweight has now joined this gloomy chorus. Kenneth Deffeyes of Princeton University argues in a lively new book ("The View from Hubbert's Peak") that global oil production could peak as soon as 2004.</p>
          <p><strong>F</strong> That sharply contradicts mainstream thinking. America's Geological Survey prepared an exhaustive study of oil depletion last year (in part to rebut Dr Campbell's arguments) that put the peak of production some decades off. The IEA has just weighed in with its new "World Energy Outlook", which foresees enough oil to comfortably meet the demand to 2020 from remaining reserves. René Dahan, one of ExxonMobil's top managers, goes further: with an assurance characteristic of the world's largest energy company, he insists that the world will be awash in oil for another 70 years.</p>
          <p><strong>G</strong> Who is right? In making sense of these wildly opposing views, it is useful to look back at the pitiful history of oil forecasting. Doomsters have been predicting dry wells since the 1970s, but so far the oil is still gushing. Nearly all the predictions for 2000 made after the 1970s oil shocks were far too pessimistic. America's Department of Energy thought that oil would reach $150 a barrel (at 2000 prices); even Exxon predicted a price of $100.</p>
          <p><strong>H</strong> Michael Lynch of DRI-WEFA, an economic consultancy, is one of the few oil forecasters who has got things generally right. In a new paper, Dr Lynch analyses those historical forecasts. He finds evidence of both bias and recurring errors, which suggests that methodological mistakes (rather than just poor data) were the problem. In particular, he faults forecasters who used Hubbert-style analysis for relying on fixed estimates of how much "ultimately recoverable" oil there really is below ground, in the industry's jargon: that figure, he insists, is actually a dynamic one, as improvements in infrastructure, knowledge and technology raise the amount of oil which is recoverable.</p>
          <p><strong>I</strong> That points to what will probably determine whether the pessimists or the optimists are right: technological innovation. The first camp tends to be dismissive of claims of forthcoming technological revolutions in such areas as deep-water drilling and enhanced recovery. Dr Deffeyes captures this end-of-technology mindset well. He argues that because the industry has already spent billions on technology development, it makes it difficult to ask today for new technology, as most of the wheels have already been invented.</p>
          <p><strong>J</strong> Yet techno-optimists argue that the technological revolution in oil has only just begun. Average recovery rates (how much of the known oil in a reservoir can actually be brought to the surface) are still only around 30-35%. Industry optimists believe that new techniques on the drawing board today could lift that figure to 50-60% within a decade.</p>
          <p><strong>K</strong> Given the industry's astonishing track record of innovation, it may be foolish to bet against it. That is the result of adversity: the nationalisations of the 1970s forced Big Oil to develop reserves in expensive, inaccessible places such as the North Sea and Alaska, undermining Dr Hubbert's assumption that cheap reserves are developed first. The resulting upstream investments have driven down the cost of finding and developing wells over the last two decades from over $20 a barrel to around $6 a barrel. The cost of producing oil has fallen by half, to under $4 a barrel.</p>
          <p><strong>L</strong> Such miracles will not come cheap, however, since much of the world's oil is now produced in ageing fields that are rapidly declining. The IEA concludes that global oil production need not peak in the next two decades if the necessary investments are made. So how much is necessary? If oil companies are to replace the output lost at those ageing fields and meet the world's ever-rising demand for oil, the agency reckons they must invest $1 trillion in non-OPEC countries over the next decade alone. That's quite a figure.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "tfng",
                        heading: "Questions 1–5",
                        instructions: [
                            "Do the following statements agree with the claims of the writer in Reading Passage?",
                            "In boxes 1–5 on your answer sheet, write",
                            "<strong>YES</strong> — if the statement agrees with the information",
                            "<strong>NO</strong> — if the statement contradicts the information",
                            "<strong>NOT GIVEN</strong> — if there is no information on this"
                        ],
                        items: [
                            { q: 1, statement: "Hubbert has a high-profile reputation amongst ODAC members." },
                            { q: 2, statement: "Oil is likely to last longer than some other energy sources." },
                            { q: 3, statement: "The majority of geologists believe that oil will start to run out sometime this decade." },
                            { q: 4, statement: "Over 50 percent of the oil we know about is currently being recovered." },
                            { q: 5, statement: "History has shown that some of Hubbert's principles were mistaken." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 6–9",
                        instructions: [
                            "Complete the notes below.",
                            "Choose <strong>ONE WORD ONLY</strong> from the passage for each answer.",
                            "Write your answers in boxes 6–9 on your answer sheet."
                        ],
                        image: "https://ieltstrainingonline.com/wp-content/uploads/2019/09/46-IELTS-Reading-28-v28111-q27-40-32-35-600x338.jpg",
                        items: [
                            { q: 6, before: "Many people believed Hubbert's theory was ", after: " when it was originally presented." },
                            { q: 7, before: "When an oilfield is ", after: ", it is easy to extract." },
                            { q: 8, before: "The recovery of the oil gets more ", after: " as the reservoir gets older." },
                            { q: 9, before: "The oilfield can't be as ", after: " as other areas." }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 10–14",
                        boxTitle: "People",
                        instructions: [
                            "Look at the following statements (questions 10–14) and the list of people below.",
                            "Match each statement with the correct person, <strong>A–E</strong>.",
                            "Write the correct letter, <strong>A–E</strong>, in boxes 10–14 on your answer sheet.",
                            "<em>NB</em> You may use any letter more than once."
                        ],
                        options: [
                            { value: "A", label: "Colin Campbell" }, { value: "B", label: "M. King Hubbert" },
                            { value: "C", label: "Kenneth Deffeyes" }, { value: "D", label: "René Dahan" },
                            { value: "E", label: "Michael Lynch" }
                        ],
                        items: [
                            { q: 10, statement: "has found fault in the geological research procedure" },
                            { q: 11, statement: "has provided the longest-range forecast regarding oil supply" },
                            { q: 12, statement: "has convinced others that oil production will follow a particular model" },
                            { q: 13, statement: "has accused fellow scientists of refusing to see the truth" },
                            { q: 14, statement: "has expressed doubt over whether improved methods of extracting oil are possible" }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["YES"], 2: ["NOT GIVEN"], 3: ["NO"], 4: ["NO"], 5: ["YES"],
            6: ["controversial"], 7: ["tapped"], 8: ["expensive"], 9: ["competitive"],
            10: ["E"], 11: ["D"], 12: ["B"], 13: ["A"], 14: ["C"]
        }
    },

    // ============================================================
    // TEST 5 — Knowledge in Medicine (existing)
    // ============================================================
    {
        title: "Knowledge in Medicine",
        passages: [
            {
                part: 1,
                title: "Knowledge in Medicine",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–14, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong> What counts as knowledge? What do we mean when we say that we know something? What is the status of different kinds of knowledge? In order to explore these questions, we are going to focus on one particular area of knowledge – medicine.</p>
          <p><strong>B</strong> How do you know when you are ill? This may seem to be an absurd question. You know you are ill because you feel ill; your body tells you that you are ill. You may know that you feel pain or discomfort but knowing you are ill is a bit more complex. At times, people experience the symptoms of illness, but in fact, they are simply tired or over-worked or they may just have a hangover. At other times, people may be suffering from a disease and fail to be aware of the illness until it has reached a late stage in its development. So how do we know we are ill, and what counts as knowledge?</p>
          <p><strong>C</strong> Think about this example. You feel unwell. You have a bad cough and always seem to be tired. Perhaps it could be stress at work, or maybe you should give up smoking. You feel worse. You visit the doctor who listens to your chest and heart, takes your temperature and blood pressure, and then finally prescribes antibiotics for your cough.</p>
          <p><strong>D</strong> Things do not improve but you struggle on thinking you should pull yourself together, perhaps things will ease off at work soon. A return visit to your doctor shocks you. This time the doctor, drawing on years of training and experience, diagnoses pneumonia. This means that you will need bed rest and a considerable time off work. The scenario is transformed. Although you still have the same symptoms, you no longer think that these are caused by pressure at work. You now have proof that you are ill. This is the result of the combination of your own subjective experience and the diagnosis of someone who has the status of a medical expert. You have a medically authenticated diagnosis and it appears that you are seriously ill; you know you are ill and have the evidence upon which to base this knowledge.</p>
          <p><strong>E</strong> This scenario shows many different sources of knowledge. For example, you decide to consult the doctor in the first place because you feel unwell – this is personal knowledge about your own body. However, the doctor's expert diagnosis is based on experience and training, with sources of knowledge as diverse as other experts, laboratory reports, medical textbooks and years of experience.</p>
          <p><strong>F</strong> One source of knowledge is the experience of our own bodies; the personal knowledge we have of changes that might be significant, as well as the subjective experiences are mediated by other forms of knowledge such as the words we have available to describe our experience, and the common sense of our families and friends as well as that drawn from popular culture. Over the past decade, for example, Western culture has seen a significant emphasis on stress-related illness in the media. Reference to being 'stressed out' has become a common response in daily exchanges in the workplace and has become part of popular common-sense knowledge. It is thus not surprising that we might seek such an explanation of physical symptoms of discomfort.</p>
          <p><strong>G</strong> We might also rely on the observations of others who know us. Comments from friends and family such as 'you do look ill' or 'that's a bad cough' might be another source of knowledge. Complementary health practices, such as holistic medicine, produce their own sets of knowledge upon which we might also draw in deciding the nature and degree of our ill health and about possible treatments.</p>
          <p><strong>H</strong> Perhaps the most influential and authoritative source of knowledge is the medical knowledge provided by the general practitioner. We expect the doctor to have access to expert knowledge. This is socially sanctioned. It would not be acceptable to notify our employer that we simply felt too unwell to turn up for work or that our faith healer, astrologer, therapist or even our priest thought it was not a good idea. We need an expert medical diagnosis in order to obtain the necessary certificate if we need to be off work for more than the statutory self-certification period. The knowledge of the medical sciences is privileged in this respect in contemporary Western culture. Medical practitioners are also seen as having the required expert knowledge that permits them legally to prescribe drugs and treatment to which patients would not otherwise have access. However, there is a range of different knowledge upon which we draw when making decisions about our own state of health.</p>
          <p><strong>I</strong> However, there is more than existing knowledge in this little story; new knowledge is constructed within it. Given the doctor's medical training and background, she may hypothesize 'is this now pneumonia?' and then proceed to look for evidence about it. She will use observations and instruments to assess the evidence and – critically – interpret it in light of her training and experience. This results in new knowledge and new experience both for you and for the doctor. This will then be added to the doctor's medical knowledge and may help in the future diagnosis of pneumonia.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "gap",
                        heading: "Questions 1–6",
                        instructions: [
                            "Complete the table.",
                            "Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.",
                            "Write your answers in boxes 1–6 on your answer sheet."
                        ],
                        items: [
                            { q: 1, before: "Personal experience — Symptoms of a ", after: " and tiredness" },
                            { q: 2, before: "Personal experience — Doctor's measurement by taking ", after: " and temperature" },
                            { q: 3, before: "Personal experience — Common judgment from ", after: " around you" },
                            { q: 4, before: "Scientific evidence — Medical knowledge from the general ", after: "." },
                            { q: 5, before: "Scientific evidence — e.g. doctor's medical ", after: "" },
                            { q: 6, before: "Scientific evidence — Examine the medical hypothesis with the previous drill and ", after: "" }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 7–14",
                        boxTitle: "Paragraphs",
                        instructions: [
                            "The Reading Passage has nine paragraphs <strong>A–I</strong>.",
                            "Which paragraph contains the following information?",
                            "Write the correct letter <strong>A–I</strong> in boxes 7–14 on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" },
                            { value: "D", label: "D" }, { value: "E", label: "E" }, { value: "F", label: "F" },
                            { value: "G", label: "G" }, { value: "H", label: "H" }, { value: "I", label: "I" }
                        ],
                        items: [
                            { q: 7, statement: "the contrast between the nature of personal judgment and the nature of doctor's diagnosis" },
                            { q: 8, statement: "a reference of culture about pressure" },
                            { q: 9, statement: "sick leave will not be permitted without the professional diagnosis" },
                            { q: 10, statement: "how doctors' opinions are regarded in society" },
                            { q: 11, statement: "the illness of patients can become part of new knowledge" },
                            { q: 12, statement: "a description of knowledge drawn from non-specialized sources other than personal knowledge" },
                            { q: 13, statement: "an example of collective judgment from personal experience and professional doctor" },
                            { q: 14, statement: "a reference that some people do not realize they are ill" }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["bad cough"], 2: ["blood pressure"], 3: ["families and friends", "family and friends"],
            4: ["practitioner"], 5: ["diagnosis"], 6: ["background"],
            7: ["E"], 8: ["F"], 9: ["H"], 10: ["H"], 11: ["I"], 12: ["G"], 13: ["D"], 14: ["B"]
        }
    },

    // ============================================================
    // TEST 6 — We have Star Performers! (existing)
    // ============================================================
    {
        title: "We have Star Performers!",
        passages: [
            {
                part: 1,
                title: "We have Star Performers!",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–13, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong> The difference between companies is people. With capital and technology in plentiful supply, the critical resource for companies in the knowledge era will be human talent. Companies full of achievers will, by definition, outperform organisations of plodders. Ergo, compete ferociously for the best people. Poach and pamper stars; ruthlessly weed out second-raters. This, in essence, has been the recruitment strategy of the ambitious company of the past decade. The 'talent mindset' was given definitive form in two reports by the consultancy McKinsey famously entitled The War for Talent. Although the intensity of the warfare subsequently subsided along with the air in the internet bubble, it has been warming up again as the economy tightens: labour shortages, for example, are the reason the government has laid out the welcome mat for immigrants from the new Europe.</p>
          <p><strong>B</strong> Yet while the diagnosis – people are important – is evident to the point of platitude, the apparently logical prescription – hire the best – like so much in management is not only not obvious: it is in fact profoundly wrong. The first suspicions dawned with the crash to earth of the dotcom meteors, which showed that dumb is dumb whatever the IQ of those who perpetrate it. The point was illuminated in brilliant relief by Enron, whose leaders, as a New Yorker article called 'The Talent Myth' entertainingly related, were so convinced of their own cleverness that they never twigged that collective intelligence is not the sum of a lot of individual intelligence. In fact, in a profound sense, the two are opposites. Enron believed in stars, noted author Malcolm Gladwell, because they didn't believe in systems. But companies don't just create: 'they execute and compete and coordinate the efforts of many people, and the organisations that are most successful at that task are the ones where the system is the star'. The truth is that you can't win the talent wars by hiring stars – only lose it. New light on why this should be so is thrown by an analysis of star behaviour in this months' Harvard Business Review. In a study of the careers of 1,000 star-stock analysts in the 1990s, the researchers found that when a company recruited a star performer, three things happened.</p>
          <p><strong>C</strong> First, stardom doesn't easily transfer from one organisation to another. In many cases, performance dropped sharply when high performers switched employers and in some instances never recovered. More of success than commonly supposed is due to the working environment – systems, processes, leadership, accumulated embedded learning that are absent in and can't be transported to the new firm. Moreover, precisely because of their past stellar performance, stars were unwilling to learn new tricks and antagonised those (on whom they now unwittingly depended) who could teach them. So they moved, upping their salary as they did – 36 per cent moved on within three years, fast even for Wall Street. Second, group performance suffered as a result of tensions and resentment by rivals within the team. One respondent likened hiring a star to an organ transplant. The new organ can damage others by hogging the blood supply, other organs can start aching or threaten to stop working or the body can reject the transplants altogether, he said. 'You should think about it very carefully before you do a transplant to a healthy body.' Third, investors punished the offender by selling its stock. This is ironic since the motive for importing stars was often a suffering share price in the first place. Shareholders evidently believe that the company is overpaying, the hiree is cashing in on a glorious past rather than preparing for a glowing present, and a spending spree is in the offing.</p>
          <p><strong>D</strong> The result of mass star hirings as well as individual ones seems to confirm such doubts. Look at County NatWest and Barclays de Zoete Wedd, both of which hired teams of stars with loud fanfare to do great things in investment banking in the 1990s. Both failed dismally. Everyone accepts the cliche that people make the organisation – but much more does the organisation make the people. When researchers studied the performance of fund managers in the 1990s, they discovered that just 30 per cent of the variation in fund performance was due to the individual, compared to 70 per cent to the company-specific setting.</p>
          <p><strong>E</strong> That will be no surprise to those familiar with systems thinking. W Edwards Deming used to say that there was no point in beating up on people when 90 per cent of performance variation was down to the system within which they worked. Consistent improvement, he said, is a matter not of raising the level of individual intelligence, but of the learning of the organisation as a whole. The star system is glamorous – for the few. But it rarely benefits the company that thinks it is working it. And the knock-on consequences indirectly affect everyone else too. As one internet response to Gladwell's New Yorker article put it: after Enron, 'the rest of corporate America is stuck with overpaid, arrogant, underachieving, and relatively useless talent.'</p>
          <p><strong>F</strong> Football is another illustration of the star vs systems strategic choice. As with investment banks and stockbrokers, it seems obvious that success should ultimately be down to money. Great players are scarce and expensive. So the club that can afford more of them than anyone else will win. But the performance of Arsenal and Manchester United on one hand and Chelsea and Real Madrid on the other proves that it's not as easy as that. While Chelsea and Real have the funds to be compulsive star collectors – as with Juan Sebastian Veron – they are less successful than Arsenal and United which, like Liverpool before them, have put much more emphasis on developing a setting within which stars-in-the-making can flourish. Significantly, Thierry Henry, Patrick Veira and Robert Pires are much bigger stars than when Arsenal bought them, their value (in all senses) enhanced by the Arsenal system. At Chelsea, by contrast, the only context is the stars themselves – managers with different outlooks come and go every couple of seasons. There is no settled system for the stars to blend into. The Chelsea context has not only not added value, but it has also subtracted it. The side is less than the sum of its exorbitantly expensive parts. Even Real Madrid's galacticos, the most extravagantly gifted on the planet, are being outperformed by less talented but better-integrated Spanish sides. In football, too, stars are trumped by systems.</p>
          <p><strong>G</strong> So if not by hiring stars, how do you compete in the war for talent? You grow your own. This worked for investment analysts, where some companies were not only better at creating stars but also at retaining them. Because they had a much more sophisticated view of the interdependent relationship between star and system, they kept them longer without resorting to the exorbitant salaries that were so destructive to rivals.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1–4",
                        boxTitle: "Paragraphs",
                        instructions: [
                            "The Reading Passage has seven paragraphs <strong>A–G</strong>.",
                            "Which paragraph contains the following information?",
                            "Write the correct letter <strong>A–G</strong> in boxes 1–4 on your answer sheet.",
                            "<em>NB</em> You may use any letter more than once."
                        ],
                        options: [
                            { value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" },
                            { value: "D", label: "D" }, { value: "E", label: "E" }, { value: "F", label: "F" }, { value: "G", label: "G" }
                        ],
                        items: [
                            { q: 1, statement: "One example from non-commerce/business settings that better system win bigger stars" },
                            { q: 2, statement: "One failed company that believes stars rather than the system" },
                            { q: 3, statement: "One suggestion that the author made to acquire employees than to win the competition nowadays" },
                            { q: 4, statement: "One metaphor to human medical anatomy that illustrates the problems of hiring stars" }
                        ]
                    },
                    {
                        type: "tfng",
                        heading: "Questions 5–8",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage?",
                            "In boxes 5–8 on your answer sheet, write",
                            "<strong>YES</strong> — if the statement agrees with the information",
                            "<strong>NO</strong> — if the statement contradicts the information",
                            "<strong>NOT GIVEN</strong> — if there is no information on this"
                        ],
                        items: [
                            { q: 5, statement: "McKinsey who wrote The War for Talent had not expected the huge influence made by this book." },
                            { q: 6, statement: "Economic condition becomes one of the factors which decide whether or not a country would prefer to hire foreign employees." },
                            { q: 7, statement: "The collapse of Enron is caused totally by an unfortunate incident instead of company's management mistake." },
                            { q: 8, statement: "Football clubs that focus making stars in the setting are better than simply collecting stars" }
                        ]
                    },
                    {
                        type: "word-bank",
                        heading: "Questions 9–13",
                        instructions: [
                            "Complete the summary. Drag the correct word from the bank into each blank.",
                            "Write your answers in boxes 9–13 on your answer sheet."
                        ],
                        bank: [
                            { value: "A", label: "analysts" }, { value: "B", label: "performance star" },
                            { value: "C", label: "working environment" }, { value: "D", label: "salary" },
                            { value: "E", label: "rivals" }, { value: "F", label: "investors" }, { value: "G", label: "shareholders" }
                        ],
                        mode: "drag",
                        items: [
                            { q: 9, before: "An investigation carried out on 1000 ", after: ". Participants of a survey by Harvard Business Review found a company hire a " },
                            { q: 10, before: "", after: " has negative effects. For instance, they behave considerably worse in a new team than in the " },
                            { q: 11, before: "", after: " that they used to be. They move faster than wall street and increase their " },
                            { q: 12, before: "", after: ". Secondly, they faced rejections or refuse from those " },
                            { q: 13, before: "", after: " within the team. Lastly, the one who made mistakes had been punished by selling his/her stock share." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["F"], 2: ["B"], 3: ["G"], 4: ["C"],
            5: ["NOT GIVEN"], 6: ["YES"], 7: ["NO"], 8: ["YES"],
            9: ["A"], 10: ["B"], 11: ["C"], 12: ["D"], 13: ["E"]
        }
    },

    // ============================================================
    // TEST 7 — Stress of Workplace (existing)
    // ============================================================
    {
        title: "Stress of Workplace",
        passages: [
            {
                part: 1,
                title: "Stress of Workplace",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–14, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong> How busy is too busy? For some it means having to miss the occasional long lunch; for others it means missing lunch altogether. For a few, it is not being able to take a "sickie" once a month. Then there is a group of people for whom working every evening and weekend is normal, and frantic is the tempo of their lives. For most senior executives, workloads swing between extremely busy and frenzied. The vice-president of the management consultancy AT Kearney and its head of telecommunications for the Asia-Pacific region, Neil Plumridge, says his work weeks vary from a "manageable" 45 hours to 80 hours, but average 60 hours.</p>
          <p><strong>B</strong> Three warning signs alert Plumridge about his workload: sleep, scheduling and family. He knows he has too much on when he gets less than six hours of sleep for three consecutive nights; when he is constantly having to reschedule appointments; "and the third one is on the family side", says Plumridge, the father of a three-year-old daughter, and expecting a second child in October. "If I happen to miss a birthday or anniversary, I know things are out of control." Being "too busy" is highly subjective. But for any individual, the perception of being too busy over a prolonged period can start showing up as stress: disturbed sleep, and declining mental and physical health. National workers' compensation figures show stress causes the most lost time of any workplace injury. Employees suffering stress are off work an average of 16.6 weeks. The effects of stress are also expensive. Comcare, the Federal Government insurer, reports that in 2003-04, claims for psychological injury accounted for 7% of claims but almost 27% of claim costs. Experts say the key to dealing with stress is not to focus on relief – a game of golf or a massage – but to reassess workloads. Neil Plumridge says he makes it a priority to work out what has to change; that might mean allocating extra resources to a job, allowing more time or changing expectations. The decision may take several days. He also relies on the advice of colleagues, saying his peers coach each other with business problems. "Just a fresh pair of eyes over an issue can help," he says.</p>
          <p><strong>C</strong> There is nothing new about stress in the workplace, of course. But in recent years, the issue has become a much more prominent feature of the corporate landscape. For a start, the pace of work has increased. Technology, far from freeing us from drudgery, has simply speeded things up. Email, mobile phones and the internet have made it possible to be contacted anywhere, at any time. And the boundaries between work and home life have become increasingly blurred as a result.</p>
          <p><strong>D</strong> The cost of all this is becoming clearer. In Australia, a study by the University of New South Wales found that stress-related illness was costing the economy about $10 billion a year. Meanwhile, the European Agency for Safety and Health at Work has estimated that the cost of work-related stress in the European Union is about €20 billion a year. And in the US, the American Institute of Stress reckons that stress-related problems cost American industry about $300 billion a year.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1–5",
                        boxTitle: "Paragraphs",
                        instructions: [
                            "The Reading Passage has four paragraphs <strong>A–D</strong>.",
                            "Which paragraph contains the following information?",
                            "Write the correct letter <strong>A–D</strong> in boxes 1–5 on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" }, { value: "D", label: "D" }
                        ],
                        items: [
                            { q: 1, statement: "How busy is too busy for different people" },
                            { q: 2, statement: "A description of how stress has become more common in the workplace" },
                            { q: 3, statement: "Warning signs that indicate a person is overworked" },
                            { q: 4, statement: "The financial cost of stress to the economy" },
                            { q: 5, statement: "How the boundaries between work and home life have blurred" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 6–8",
                        instructions: [
                            "Complete the sentences below.",
                            "Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.",
                            "Write your answers in boxes 6–8 on your answer sheet."
                        ],
                        items: [
                            { q: 6, before: "Three warning signs that indicate Neil Plumridge has too much work are sleep, scheduling and ", after: "." },
                            { q: 7, before: "According to experts, the key to dealing with stress is not to focus on relief but to ", after: "." },
                            { q: 8, before: "Plumridge says his peers ", after: " with business problems." }
                        ]
                    },
                    {
                        type: "word-bank",
                        heading: "Questions 9–14",
                        instructions: [
                            "Complete the summary below. Drag the correct word from the bank into each blank.",
                            "Write your answers in boxes 9–14 on your answer sheet."
                        ],
                        bank: [
                            { value: "A", label: "workplace injury" }, { value: "B", label: "16.6 weeks" },
                            { value: "C", label: "7%" }, { value: "D", label: "golf" }, { value: "E", label: "massage" },
                            { value: "F", label: "workloads" }, { value: "G", label: "stress" }, { value: "H", label: "relief" }
                        ],
                        mode: "drag",
                        items: [
                            { q: 9, before: "National workers' compensation figures show stress causes the most lost time of any ", after: ". Employees suffering stress are off work an average of " },
                            { q: 10, before: "", after: ". In 2003–04, claims for psychological injury accounted for " },
                            { q: 11, before: "", after: " of claims but almost 27% of claim costs. Experts say the key to dealing with stress is not to focus on relief – a game of " },
                            { q: 12, before: "", after: " or a " },
                            { q: 13, before: "", after: " – but to reassess " },
                            { q: 14, before: "", after: "." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["A"], 2: ["C"], 3: ["B"], 4: ["D"], 5: ["C"],
            6: ["family"], 7: ["reassess workloads", "reassess workload"], 8: ["coach each other"],
            9: ["A"], 10: ["B"], 11: ["C"], 12: ["D"], 13: ["E"], 14: ["F"]
        }
    },

    // ============================================================
    // TEST 8 — Ancient Chinese Chariots (existing)
    // ============================================================
    {
        title: "Ancient Chinese Chariots",
        passages: [
            {
                part: 1,
                title: "Ancient Chinese Chariots",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–13, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong> The Shang Dynasty or Yin Dynasty, according to traditional historiography, ruled in the Yellow River valley in the second millennium. Archaeological work at the Ruins of Yin (near modern-day Anyang), which has been identified as the last Shang capital, uncovered eleven major Yin royal tombs and the foundations of palaces and ritual sites, containing weapons of war and remains from both animal and human sacrifices.</p>
          <p><strong>B</strong> The Tomb of Fu Hao is an archaeological site at Yinxu, the ruins of the ancient Shang Dynasty capital Yin, within the modem city of Anyang in Henan Province, China. Discovered in 1976, it was identified as the final resting place of the queen and military general Fu Hao. The artifacts unearthed within the grave included jade objects, bone objects, bronze objects etc. These grave goods are confirmed by the oracle texts, which constitute almost all of the first hand written record we possess of the Shang Dynasty. Below the corpse was a small pit holding the remains of six sacrificial dogs and along the edge lay the skeletons of human slaves, evidence of human sacrifice.</p>
          <p><strong>C</strong> The Terracotta Army was discovered on 29 March 1974 to the east of Xian in Shaanxi. The terracotta soldiers were accidentally discovered when a group of local farmers was digging a well during a drought around 1.6 km (1 mile) east of the Qin Emperors tomb around at Mount Li (Lishan), a region riddled with underground springs and watercourses. Experts currently place the entire number of soldiers at 8,000 — with 130 chariots (130 cm long), 530 horses and 150 cavalry horses helping to ward of any dangers in the afterlife. In contrast, the burial of Tutank Hamun yielded six complete but dismantled chariots of unparalleled richness and sophistication. Each was designed for two people (90 cm long) and had its axle sawn through to enable it to be brought along the narrow corridor into the tomb.</p>
          <p><strong>D</strong> Excavation of ancient Chinese chariots has confirmed the descriptions of them in the earliest texts. Wheels were constructed from a variety of woods: elm provided the hub, rose-wood the spokes and oak the felloes. The hub was drilled through to form an empty space into which the tampering axle was fitted, the whole being covered with leather to retain lubricating oil. Though the number of spokes varied, a wheel by the fourth century BC usually had eighteen to thirty-two of them. Records show how elaborate was the testing of each completed wheel: flotation and weighing were regarded as the best measures of balance, but even the empty spaces in the assembly were checked with millet grains. One outstanding constructional asset of the ancient Chinese wheel was dishing. Dishing refers to the dishlike shape of an advanced wooden wheel, which looks rather like a flat cone. On occasion they chose to strengthen a dished wheel with a pair of struts running from rim to rim on each of the hub. As these extra supports were inserted separately into the felloes, they would have added even greater strength to the wheel. Leather wrapped up the edge of the wheel aimed to retain bronze.</p>
          <p><strong>E</strong> Within a millennium, however, Chinese chariot-makers had developed a vehicle with shafts, the precursor of the true carriage or cart. This design did not make its appearance in Europe until the end of the Roman Empire. Because the shafts curved upwards, and the harness pressed against a horse's shoulders, not his neck, the shaft chariot was incredibly efficient. The halberd was also part of chariot standard weaponry. This halberd usually measured well over 3 metres in length, which meant that a chariot warrior wielding it sideways could strike down the charioteer in a passing chariot. The speed of chariot which was tested on the sand was quite fast. At speed these passes were very dangerous for the crews of both chariots.</p>
          <p><strong>F</strong> The advantages offered by the new chariots were not entirely missed. They could see how there were literally the warring states, whose conflicts lasted down the Qin unification of China. Qin Shi Huang was buried in the most opulent tomb complex ever constructed in China, a sprawling, city-size collection of underground caverns containing everything the emperor would need for the afterlife. Even a collection of terracotta armies called Terra-Cotta Warriors was buried in it. The ancient Chinese, along with many cultures including ancient Egyptians, believed that items and even people buried with a person could be taken with him to the afterlife.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "tfng",
                        heading: "Questions 1–4",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage?",
                            "In boxes <strong>1–4</strong> on your answer sheet, write",
                            "<strong>TRUE</strong> if the statement is true",
                            "<strong>FALSE</strong> if the statement is false",
                            "<strong>NOT GIVEN</strong> if the information is not given in the passage"
                        ],
                        items: [
                            { q: 1, statement: "When discovered, the written records of the grave goods proved to be accurate." },
                            { q: 2, statement: "Human skeletons in Anyang tomb were identified as soldiers who were killed in the war." },
                            { q: 3, statement: "The Terracotta Army was discovered by people lived nearby by chance." },
                            { q: 4, statement: "The size of the King Tutankhamen's tomb is bigger than that of in Qin Emperors' tomb." }
                        ]
                    },
                    {
                        type: "word-bank",
                        heading: "Questions 5–10",
                        instructions: [
                            "Complete the notes below. Drag the correct word from the bank into each blank.",
                            "Choose <strong>ONE WORD</strong> from the passage for each answer.",
                            "Write your answers in boxes <strong>5–10</strong> on your answer sheet."
                        ],
                        bank: [
                            { value: "A", label: "elm" }, { value: "B", label: "oil" }, { value: "C", label: "32" },
                            { value: "D", label: "dish" }, { value: "E", label: "struts" }, { value: "F", label: "bronze" },
                            { value: "G", label: "oak" }, { value: "H", label: "leather" }, { value: "I", label: "spokes" }
                        ],
                        mode: "drag",
                        items: [
                            { q: 5, before: "The hub is made of wood from the tree of ", after: "" },
                            { q: 6, before: "The room through the hub was to put tempering axle in which is wrapped up by leather aiming to retain ", after: "" },
                            { q: 7, before: "The number of spokes varied from 18 to ", after: "" },
                            { q: 8, before: "The shape of wheel resembles a ", after: "" },
                            { q: 9, before: "Two was used to strengthen the wheel ", after: "" },
                            { q: 10, before: "Leather wrapped up the edge of the wheel aimed to remain ", after: "" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 11–13",
                        instructions: [
                            "Answer the questions below.",
                            "Choose <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the passage for each answer."
                        ],
                        items: [
                            { q: 11, before: "What body part of horse was released the pressure from to the shoulder?", after: "" },
                            { q: 12, before: "What kind road surface did the researchers measure the speed of the chariot?", after: "" },
                            { q: 13, before: "What part of his afterlife palace was the Emperor Qin Shi Huang buried?", after: "" }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["TRUE"], 2: ["FALSE"], 3: ["TRUE"], 4: ["NOT GIVEN"],
            5: ["A"], 6: ["B"], 7: ["C"], 8: ["D"], 9: ["E"], 10: ["F"],
            11: ["neck"], 12: ["sand"], 13: ["tomb complex"]
        }
    },

    // ============================================================
    // TEST 9 — Amateur Naturalists (existing)
    // ============================================================
    {
        title: "Amateur Naturalists",
        passages: [
            {
                part: 1,
                title: "Amateur Naturalists",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–14, which are based on the Reading Passage below.</em></p>
          <p style="text-align:center"><strong><em>From the results of an annual Alaskan betting contest to sightings of migratory birds, ecologists are using a wealth of unusual data to predict the impact of climate change.</em></strong></p>
          <p><strong>A</strong> Tim Sparks slides a small leather-bound notebook out of an envelope. The book's yellowing pages contain bee-keeping notes made between 1941 and 1969 by the late Walter Coates of Kilworth, Leicestershire. He adds it to his growing pile of local journals, birdwatchers' lists and gardening diaries. "We're uncovering about one major new record each month," he says, "I still get surprised." Around two centuries before Coates, Robert Marsham, a landowner from Norfolk in the east of England, began recording the life cycles of plants and animals on his estate - when the first wood anemones flowered, the dates on which the oaks burst into leaf and the rooks began nesting. Successive Marshams continued compiling these notes for 211 years.</p>
          <p><strong>B</strong> Today, such records are being put to uses that their authors could not possibly have expected. These data sets, and others like them, are proving invaluable to ecologists interested in the timing of biological events, or phenology. By combining the records with climate data, researchers can reveal how, for example, changes in temperature affect the arrival of spring, allowing ecologists to make improved predictions about the impact of climate change. A small band of researchers is combing through hundreds of years of records taken by thousands of amateur naturalists. And more systematic projects have also started up, producing an overwhelming response. "The amount of interest is almost frightening," says Sparks, a climate researcher at the Centre for Ecology and Hydrology in Monks Wood, Cambridgeshire.</p>
          <p><strong>C</strong> Sparks first became aware of the army of "closet phenologists", as he describes them, when a retiring colleague gave him the Marsham records. He now spends much of his time following leads from one historical data set to another. As news of his quest spreads, people tip him off to other historical records, and more amateur phenologists come out of their closets. The British devotion to recording and collecting makes his job easier - one man from Kent sent him 30 years' worth of kitchen calendars, on which he had noted the date that his neighbour's magnolia tree flowered.</p>
          <p><strong>D</strong> Other researchers have unearthed data from equally odd sources. Rafe Sagarin, an ecologist at Stanford University in California, recently studied records of a betting contest in which participants attempt to guess the exact time at which a specially erected wooden tripod will fall through the surface of a thawing river. The competition has taken place annually on the Tenana River in Alaska since 1917, and analysis of the results showed that the thaw now arrives five days earlier than it did when the contest began.</p>
          <p><strong>E</strong> Overall, such records have helped to show that, compared with 20 years ago, a raft of natural events now occur earlier across much of the northern hemisphere, from the opening of leaves to the return of birds from migration and the emergence of butterflies from hibernation. The data can also hint at how nature will change in the future. Together with models of climate change, amateurs' records could help guide conservation. Terry Root, an ecologist at the University of Michigan in Ann Arbor, has collected birdwatchers' counts of wildfowl taken between 1955 and 1996 on seasonal ponds in the American Midwest and combined them with climate data and models of future warming. Her analysis shows that the increased droughts that the models predict could halve the breeding populations at the ponds. "The number of waterfowl in North America will most probably drop significantly with global warming," she says.</p>
          <p><strong>F</strong> But not all professionals are happy to use amateur data. "A lot of scientists won't touch them, they say they're too full of problems," says Root. Because different observers can have different ideas of what constitutes, for example, an open snowdrop. "The biggest concern with ad hoc observations is how carefully and systematically they were taken," says Mark Schwartz of the University of Wisconsin, Milwaukee, who studies the interactions between plants and climate. "We need to know pretty precisely what a person's been observing - if they just say 'I noted when the leaves came out', it might not be that useful." Measuring the onset of autumn can be particularly problematic because deciding when leaves change colour is a more subjective process than noting when they appear.</p>
          <p><strong>G</strong> Overall, most phenologists are positive about the contribution that amateurs can make. "They get at the raw power of science: careful observation of the natural world," says Sagarin. But the professionals also acknowledge the need for careful quality control. Root, for example, tries to gauge the quality of an amateur archive by interviewing its collector. "You always have to worry - things as trivial as vacations can affect measurement. I disregard a lot of records because they're not rigorous enough," she says. Others suggest that the right statistics can iron out some of the problems with amateur data. Together with colleagues at Wageningen University in the Netherlands, environmental scientist Arnold van Vliet is developing statistical techniques to account for the uncertainty in amateur phenological data. With the enthusiasm of amateur phenologists evident from past records, professional researchers are now trying to create standardised recording schemes for future efforts. They hope that well-designed studies will generate a volume of observations large enough to drown out the idiosyncrasies of individual recorders. The data are cheap to collect, and can provide breadth in space, time and range of species. "It's very difficult to collect data on a large geographical scale without enlisting an army of observers," says Root.</p>
          <p><strong>H</strong> Phenology also helps to drive home messages about climate change. "Because the public understand these records, they accept them," says Sparks. It can also illustrate potentially unpleasant consequences, he adds, such as the finding that more rat infestations are reported to local councils in warmer years. And getting people involved is great for public relations. "People are thrilled to think that the data they've been collecting as a hobby can be used for something scientific - it empowers them," says Root.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1–7",
                        boxTitle: "Paragraphs",
                        instructions: [
                            "Reading Passage has eight paragraphs <strong>A–H</strong>.",
                            "Which paragraph contains the following information?",
                            "Write the correct letter <strong>A–H</strong> in boxes <strong>1–7</strong> on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" },
                            { value: "D", label: "D" }, { value: "E", label: "E" }, { value: "F", label: "F" },
                            { value: "G", label: "G" }, { value: "H", label: "H" }
                        ],
                        items: [
                            { q: 1, statement: "The definition of phenology" },
                            { q: 2, statement: "How Sparks first became aware of amateur records" },
                            { q: 3, statement: "How people reacted to their involvement in data collection" },
                            { q: 4, statement: "The necessity to encourage amateur data collection" },
                            { q: 5, statement: "A description of using amateur records to make predictions" },
                            { q: 6, statement: "Records of a competition providing clues to climate change" },
                            { q: 7, statement: "A description of a very old record compiled by generations of amateur naturalists" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 8–10",
                        instructions: [
                            "Complete the sentences below with <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.",
                            "Write your answers in boxes <strong>8–10</strong> on your answer sheet."
                        ],
                        items: [
                            { q: 8, before: "Walter Coates's records largely contain the information of ", after: "" },
                            { q: 9, before: "Robert Marsham is famous for recording the ", after: " of animals and plants on his land." },
                            { q: 10, before: "According to some phenologists, global warming may cause the number of waterfowl in North America to drop significantly due to increased ", after: "" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Questions 11–14",
                        instructions: [
                            "Choose the correct letter <strong>A, B, C</strong> or <strong>D</strong>.",
                            "Write your answers in boxes <strong>11–14</strong> on your answer sheet."
                        ],
                        items: [
                            {
                                q: 11, stem: "Why do a lot of scientists discredit the data collected by amateurs?", options: [
                                    { value: "A", label: "Scientific methods were not used in data collection." },
                                    { value: "B", label: "Amateur observers are not careful in recording their data." },
                                    { value: "C", label: "Amateur data is not reliable." },
                                    { value: "D", label: "Amateur data is produced by wrong candidates." }
                                ]
                            },
                            {
                                q: 12, stem: "Mark Schwartz used the example of leaves to illustrate that", options: [
                                    { value: "A", label: "amateur records can't be used." },
                                    { value: "B", label: "amateur records are always unsystematic." },
                                    { value: "C", label: "the colour change of leaves is hard to observe." },
                                    { value: "D", label: "valuable information is often precise." }
                                ]
                            },
                            {
                                q: 13, stem: "How do the scientists suggest amateur data should be used?", options: [
                                    { value: "A", label: "Using improved methods" },
                                    { value: "B", label: "Being more careful in observation" },
                                    { value: "C", label: "Using raw materials" },
                                    { value: "D", label: "Applying statistical techniques in data collection" }
                                ]
                            },
                            {
                                q: 14, stem: "What's the implication of phenology for ordinary people?", options: [
                                    { value: "A", label: "It empowers the public." },
                                    { value: "B", label: "It promotes public relations." },
                                    { value: "C", label: "It warns people of animal infestation." },
                                    { value: "D", label: "It raises awareness about climate change in the public." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["B"], 2: ["C"], 3: ["H"], 4: ["G"], 5: ["E"], 6: ["D"], 7: ["A"],
            8: ["bee-keeping", "bee keeping"], 9: ["life cycles", "life cycle"], 10: ["droughts", "drought"],
            11: ["C"], 12: ["D"], 13: ["D"], 14: ["D"]
        }
    },

    // ============================================================
    // TEST 10 — Improving Patient Safety (existing)
    // ============================================================
    {
        title: "Improving Patient Safety",
        passages: [
            {
                part: 1,
                title: "Improving Patient Safety",
                html: `
          <p><em>You should spend about 20 minutes on Questions 27–40, which are based on the Reading Passage below.</em></p>
          <p><strong>Packaging</strong></p>
          <p>One of the most prominent design issues in pharmacy is that of drug packaging and patient information leaflets (PILs). Many letters have appeared in The Journal's letters pages over the years from pharmacists dismayed at the designs of packaging that are "accidents waiting to happen".</p>
          <p>Packaging design in the pharmaceutical industry is handled by either in-house teams or design agencies. Designs for over-the-counter medicines, where characteristics such as attractiveness and distinguishability are regarded as significant, are usually commissioned from design agencies. A marketing team will prepare a brief and the designers will come up with perhaps six or seven designs. These are whittled down to two or three that might be tested on a consumer group. In contrast, most designs for prescription-only products are created in-house. In some cases, this may simply involve applying a company's house design (ie, logo, colour, font, etc). The chosen design is then handed over to design engineers who work out how the packaging will be produced.</p>
          <p><strong>Design considerations</strong></p>
          <p>The author of the recently published "Information design for patient safety," Thea Swayne, tracked the journey of a medicine from manufacturing plant, through distribution warehouses, pharmacies and hospital wards, to patients' homes. Her book highlights a multitude of design problems with current packaging, such as look-alikes and sound-alikes, small type sizes and glare on blister foils. Situations in which medicines are used include a parent giving a cough medicine to a child in the middle of the night and a busy pharmacist selecting one box from hundreds. It is argued that packaging should be designed for moments such as these. "Manufacturers are not aware of the complex situations into which products go. As designers, we are interested in not what is supposed to happen in [hospital] wards, but what happens in the real world," Ms Swayne said.</p>
          <p>Incidents where vein has been injected intrathecally instead of spine are a classic example of how poor design can contribute to harm. Investigations following these tragedies have attributed some blame to poor typescript.</p>
          <p><strong>Safety and compliance</strong></p>
          <p>Child protection is another area that gives designers opportunities to improve safety. According to the Child Accident Prevention Trust, seven out of 10 children admitted to hospital with suspected poisoning have swallowed medicines. Although child-resistant closures have reduced the number of incidents, they are not fully child-proof. The definition of such a closure is one that not more than 15 percent of children aged between 42 and 51 months can open within five minutes. There is scope for improving what is currently available, according to Richard Mawle, a freelance product designer. "Many child-resistant packs are based on strength. They do not necessarily prevent a child from access, but may prevent people with a disability," he told The Journal. "The legal requirements are there for a good reason, but they are not good enough in terms of the users," he said. "Older people, especially those with arthritis, may have the same level of strength as a child," he explained, and suggested that better designs could rely on cognitive skills (eg, making the opening of a container a three-step process) or be based on the physical size of hands.</p>
          <p>Mr. Mawle worked with GlaxoSmithKline on a project to improve compliance through design, which involved applying his skills to packaging and PILs. Commenting on the information presented, he said: "There can be an awful lot of junk at the beginning of PILs. For example, why are company details listed towards the beginning of a leaflet when what might be more important for the patient is that the medicine should not be taken with alcohol?"</p>
          <p><strong>Design principles and guidelines</strong></p>
          <p>Look-alike boxes present a potential for picking errors and an obvious solution would be to use colours to highlight different strengths. However, according to Ms. Swayne, colour differentiation needs to be approached with care. Not only should strong colour contrasts be used, but designating a colour to a particular strength (colour coding) is not recommended because this could lead to the user not reading the text on a box.</p>
          <p>Design features can provide the basis for lengthy debates. For example, one argument is that if all packaging is white with black lettering, people would have no choice but to read every box carefully. The problem is that trials of drug packaging design are few—common studies of legibility and comprehensibility concern road traffic signs and visual display units. Although some designers take results from such studies into account, proving that a particular feature is beneficial can be difficult. For example, EU legislation requires that packaging must now include the name of the medicine in Braille but, according to Karel van der Waarde, a design consultant to the pharmaceutical industry, "it is not known how much visually impaired patients will benefit nor how much the reading of visually able patients will be impaired".</p>
          <p>More evidence might, however, soon be available. EU legislation requires PILs to reflect consultations with target patient groups to ensure they are legible, clear and easy to use. This implies that industry will have to start conducting tests. Dr. van der Waarde has performed readability studies on boxes and PILS for industry. A typical study involves showing a leaflet or package to a small group and asking them questions to test understanding. Results and comments are used to modify the material, which is then tested on a larger group. A third group is used to show that any further changes made are an improvement. Dr. van der Waarde is, however, sceptical about the legal requirements and says that many regulatory authorities do not have the resources to handle packaging information properly. "They do not look at the use of packaging in a practical context—they only see one box at a time and not several together as pharmacists would do," he said.</p>
          <p><strong>Innovations</strong></p>
          <p>The RCA innovation exhibition this year revealed designs for a number of innovative objects. "The popper", by Hugo Glover, aims to help arthritis sufferers remove tablets from blister packs, and "pluspoint", by James Cobb, is an adrenaline auto-injector that aims to overcome the fact that many patients do not carry their auto-injectors due to their prohibitive size. The aim of good design, according Roger Coleman, professor of inclusive design at the RCA, is to try to make things more user-friendly as well as safer. Surely, in a patient-centred health system, that can only be a good thing. "Information design for patient safety" is not intended to be mandatory. Rather, its purpose is to create a basic design standard and to stimulate innovation. The challenge for the pharmaceutical industry, as a whole, is to adopt such a standard.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 27–32",
                        boxTitle: "People",
                        instructions: [
                            "Look at the following statements and the list of people or organisation below.",
                            "Match each statement with the correct person or organisation, <strong>A–D</strong>.",
                            "Write the correct letter, <strong>A–D</strong>.",
                            "<em>NB</em> You may use any letter more than once."
                        ],
                        options: [
                            { value: "A", label: "Thea Swayne" }, { value: "B", label: "Children Accident Prevention Trust" },
                            { value: "C", label: "Richard Mawle" }, { value: "D", label: "Karel van der Waarde" }
                        ],
                        items: [
                            { q: 27, statement: "Elderly people may have the same problem with children if the lids of containers require too much strength to open." },
                            { q: 28, statement: "Adapting packaging for the blind may disadvantage the sighted people." },
                            { q: 29, statement: "Specially designed lids cannot eliminate the possibility of children swallowing pills accidentally." },
                            { q: 30, statement: "Container design should consider situations, such as drug used at home." },
                            { q: 31, statement: "Governing bodies should investigate many different container cases rather than individual ones." },
                            { q: 32, statement: "Information on the list of a leaflet hasn't been in the right order." }
                        ]
                    },
                    {
                        type: "word-bank",
                        heading: "Questions 33–37",
                        instructions: [
                            "Complete the notes using the list of words, <strong>A–G</strong>, below. Drag the correct word into each blank.",
                            "Write the correct letter, <strong>A–G</strong>."
                        ],
                        bank: [
                            { value: "A", label: "consumers" }, { value: "B", label: "marketing teams" },
                            { value: "C", label: "pharmaceutical industry" }, { value: "D", label: "external designers" },
                            { value: "E", label: "in-house designers" }, { value: "F", label: "design engineers" },
                            { value: "G", label: "pharmacist" }
                        ],
                        mode: "drag",
                        items: [
                            { q: 33, before: "Packaging in pharmaceutical industry — Designs for over-the-counter medicines. First, ", after: " make the proposal, then pass them to the " },
                            { q: 34, before: "", after: ". Finally, these designs will be tested by " },
                            { q: 35, before: "", after: ". Prescription-only: First, the design is made by " },
                            { q: 36, before: "", after: " and then subjected to " },
                            { q: 37, before: "", after: "." }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Questions 38–40",
                        instructions: [
                            "Choose the correct letter, <strong>A, B, C</strong> or <strong>D</strong>.",
                            "Write the correct letter."
                        ],
                        items: [
                            {
                                q: 38, stem: "What may cause the accident in 'design container'?", options: [
                                    { value: "A", label: "a print error" },
                                    { value: "B", label: "style of print" },
                                    { value: "C", label: "wrong label" },
                                    { value: "D", label: "the shape of the bottle" }
                                ]
                            },
                            {
                                q: 39, stem: "What do people think about the black and white only print?", options: [
                                    { value: "A", label: "Consumers dislike these products." },
                                    { value: "B", label: "People have to pay more attention to the information." },
                                    { value: "C", label: "That makes all products looks alike." },
                                    { value: "D", label: "Sighted people may feel it more helpful." }
                                ]
                            },
                            {
                                q: 40, stem: "Why does the writer mention 'popper' and 'pluspoint'?", options: [
                                    { value: "A", label: "to show that container design has made some progress" },
                                    { value: "B", label: "to illustrate an example of inappropriate design which can lead to accidents" },
                                    { value: "C", label: "to show that the industry still needs more to improve" },
                                    { value: "D", label: "to point out that consumers should be more informed about the information" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            27: ["C"], 28: ["D"], 29: ["B"], 30: ["A"], 31: ["D"], 32: ["C"],
            33: ["B"], 34: ["D"], 35: ["A"], 36: ["E"], 37: ["F"],
            38: ["B"], 39: ["B"], 40: ["A"]
        }
    },

    // ============================================================
    // TEST 11 — A New Ice Age
    // ============================================================
    {
        title: "A New Ice Age",
        passages: [
            {
                part: 1,
                title: "A New Ice Age",
                html: `
          <p style="text-align:center"><img src="http://images.mini-ielts.com/images/2017/8/ice-age.jpg" alt="A New Ice Age" style="max-width:400px"></p>
          <p><strong>William Curry</strong> is a serious, sober climate scientist, not an art critic. But he has spent a lot of time perusing Emanuel Gottlieb Leutze's famous <strong>painting</strong> "George Washington Crossing the Delaware", which depicts a boatload of colonial American soldiers making their way to attack English and Hessian troops the day after Christmas in 1776. "Most people think these other guys in the boat are rowing, but <span class="explain">they are actually pushing the ice away</span>," says Curry, tapping his finger on a reproduction of the painting. Sure enough, the lead oarsman is bashing the frozen river with his boot. "I grew up in Philadelphia. The place in this painting is 30 minutes away by car. <span class="explain">I can tell you, this kind of thing just doesn't happen anymore</span>."</p>
          <p>But it may again soon. And ice-choked scenes, similar to those immortalised by the 16th-century Flemish painter Pieter Brueghel the Elder, may also return to Europe. His works, including the 1565 masterpiece "Hunters in the Snow", make the now-temperate European landscapes look more like Lapland. Such frigid settings were commonplace during a period dating roughly from 1300 to 1850 because much of North America and Europe was in the throes of a little ice age. And now there is mounting evidence that the chill could return. A growing number of scientists believe conditions are ripe for another prolonged cooldown, or small ice age. While no one is predicting a brutal ice sheet like the one that covered the <span class="explain">Northern Hemisphere with glaciers about 12,000 years ago</span>, the next cooling trend could drop average temperatures 5 degrees Fahrenheit over much of the United States and 10 degrees in the Northeast, northern Europe, and northern Asia.</p>
          <p>"It could happen in 10 years," says Terrence Joyce, who chairs the Woods Hole Physical Oceanography Department. "Once it does, it can take hundreds of years to reverse." <span class="explain">And he is alarmed that Americans have yet to take the threat seriously.</span></p>
          <p>A drop of 5 to 10 degrees entails much more than simply bumping up the thermostat and carrying on. Both economically and ecologically, such quick, persistent chilling could have devastating consequences. A 2002 report titled "<span class="explain">Abrupt Climate Change: Inevitable Surprises", produced by the National Academy of Sciences</span>, pegged the cost from agricultural losses alone at $100 billion to $250 billion while also predicting that damage to ecologies could be vast and incalculable. A grim sampler: disappearing forests, increased housing expenses, dwindling fresh water, lower crop yields, and accelerated species extinctions.</p>
          <p>The reason for such huge effects is simple. A quick climate change wreaks far more disruption than a slow one. People, animals, plants, and the economies that depend on them are like rivers; says the report: "For example, high water in a river will pose few problems until the water runs over the bank, after which levees can be breached and massive flooding can occur. Many biological processes undergo shifts at particular thresholds of temperature and precipitation."</p>
          <p>Political changes since the <span class="explain"><strong>last ice age could make survival far more difficult for the world's poor</strong></span>. During previous cooling periods, whole tribes simply picked up and moved south, but <span class="explain">that option doesn't work in the modern, tense world of closed borders</span>. "To the extent that abrupt climate change may cause rapid and extensive changes of fortune for those who live off the land, the inability to migrate may remove one of the major safety nets for distressed people," says the report.</p>
          <p>But first things first. Isn't the earth actually warming? Indeed it is, says Joyce. In his cluttered office, full of soft light from the foggy Cape Cod morning, he explains <span class="explain">how such warming could actually be the surprising culprit of the next mini-ice age</span>. The paradox is a result of the appearance over the past 30 years in the North Atlantic of huge rivers of fresh water - the equivalent of a 10-foot-thick layer - mixed into the salty sea. No one is certain where the fresh torrents are coming from, but a prime suspect is melting Arctic ice, caused by a build-up of carbon dioxide in the atmosphere that traps solar energy.</p>
          <p>The freshwater trend is major news in ocean-science circles. <span class="explain">Bob Dickson, a British oceanographer who sounded an alarm at a February conference</span> in Honolulu, has termed the drop in salinity and temperature in the Labrador Sea - a body of water between northeastern Canada and Greenland that adjoins the Atlantic - "arguably the largest full-depth changes observed in the modern instrumental oceanographic record".</p>
          <p>The trend could cause a little ice age by subverting the northern penetration of Gulf Stream waters. Normally, the Gulf Stream, laden with <span class="explain">heat</span> soaked up in the tropics, meanders up the east coasts of the United States and Canada. As it flows northward, the stream surrenders heat to the air. Because <span class="explain">the prevailing North Atlantic winds blow eastward, a lot of the heat wafts to Europe</span>. That's why many scientists believe winter temperatures on the Continent are as much as 36 degrees Fahrenheit warmer than those in North America at the same latitude. Frigid Boston, for example, lies at almost precisely the same latitude as balmy Rome. And some scientists say the heat also warms Americans and Canadians. "It's a real mistake to think of this solely as a European phenomenon," says Joyce.</p>
          <p>Having given up its heat to the air, the now-cooler water becomes <span class="explain">denser</span> and sinks into the North Atlantic by a mile or more in a process oceanographers call thermohaline circulation. This massive column of cascading cold is the main engine powering a deep-water current called the <span class="explain">Great Ocean Conveyor</span> that snakes through all the world's oceans. But as the North Atlantic fills with <span class="explain">fresh water</span>, it grows less dense, making the waters carried northward by the Gulf Stream less able to sink. The new mass of relatively fresh water sits on top of the ocean like a big thermal blanket, threatening the thermohaline circulation. That in turn could make the Gulf Stream slow or veer southward. At some point, the whole system could simply shut down, and do so quickly. "There is increasing evidence that we are getting closer to a transition point, from which we can jump to a new state."</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "mcq",
                        heading: "Questions 1–4",
                        instructions: [
                            "Choose the correct letter <strong>A, B, C</strong> or <strong>D</strong>.",
                            "Write your answers in boxes <strong>1–4</strong> on your answer sheet."
                        ],
                        items: [
                            {
                                q: 1, stem: "The writer uses paintings in the first paragraph to illustrate", options: [
                                    { value: "A", label: "possible future climate change." },
                                    { value: "B", label: "climate change of the last two centuries." },
                                    { value: "C", label: "the river doesn't freeze in winter anymore." },
                                    { value: "D", label: "how George Washington led his troops across the river." }
                                ]
                            },
                            {
                                q: 2, stem: "Which of the following do scientists believe to be possible?", options: [
                                    { value: "A", label: "The temperature may drop over much of the Northern Hemisphere." },
                                    { value: "B", label: "It will be colder than 12,000 years ago." },
                                    { value: "C", label: "The entire Northern Hemisphere will be covered in ice." },
                                    { value: "D", label: "Europe will look more like Lapland." }
                                ]
                            },
                            {
                                q: 3, stem: "Why is it difficult for the poor to survive the next ice age?", options: [
                                    { value: "A", label: "People don't live in tribes anymore." },
                                    { value: "B", label: "Politics are changing too fast today." },
                                    { value: "C", label: "Abrupt climate change causes people to live off their land." },
                                    { value: "D", label: "Migration has become impossible because of closed borders." }
                                ]
                            },
                            {
                                q: 4, stem: "Why is continental Europe much warmer than North America in winter?", options: [
                                    { value: "A", label: "Wind blows most of the heat of tropical currents to Europe." },
                                    { value: "B", label: "Europe and North America are at different latitudes." },
                                    { value: "C", label: "The Gulf Stream has stopped yielding heat to the air." },
                                    { value: "D", label: "The Gulf Stream moves north along the east coast of North America." }
                                ]
                            }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 5–9",
                        boxTitle: "People",
                        instructions: [
                            "Look at the following statements (Questions <strong>5–9)</strong> and the list of people in the box below.",
                            "Match each statement with the correct person <strong>A-D</strong>.",
                            "Write the appropriate letter <strong>A-D</strong> in boxes <strong>5–9</strong> on your answer sheet.",
                            "<em>NB</em> You may use any letter <strong>more than once</strong>."
                        ],
                        options: [
                            { value: "A", label: "William Curry" },
                            { value: "B", label: "Terrence Joyce" },
                            { value: "C", label: "Bob Dickson" },
                            { value: "D", label: "National Academy of Sciences" }
                        ],
                        items: [
                            { q: 5, statement: "Most Americans are not prepared for the next ice age." },
                            { q: 6, statement: "The result of abrupt climate change is catastrophic." },
                            { q: 7, statement: "The world is not as cold as it used to be." },
                            { q: 8, statement: "Global warming is closely connected to the ice age." },
                            { q: 9, statement: "Alerted people to the change of ocean water in a conference." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 10–13",
                        instructions: [
                            "Complete the flow chart below.",
                            "Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.",
                            "Write your answers in boxes <strong>10–13</strong> on your answer sheet."
                        ],
                        image: "http://images.mini-ielts.com/images/2017/8/diagram.jpg",
                        items: [
                            { q: 10, before: "The Gulf Stream is laden with ", after: " soaked up in the tropics." },
                            { q: 11, before: "Having given up its heat, the water becomes ", after: " and sinks." },
                            { q: 12, before: "This powers the deep-water current called the ", after: "." },
                            { q: 13, before: "As the North Atlantic fills with ", after: ", it grows less dense and threatens the circulation." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["B"], 2: ["A"], 3: ["D"], 4: ["A"],
            5: ["B"], 6: ["D"], 7: ["A"], 8: ["B"], 9: ["C"],
            10: ["heat"], 11: ["denser"], 12: ["Great Ocean Conveyor"], 13: ["fresh water"]
        }
    },

    // ============================================================
    // TEST 12 — Inspired by Mimicking Mother Nature
    // ============================================================
    {
        title: "Inspired by Mimicking Mother Nature",
        passages: [
            {
                part: 1,
                title: "Inspired by Mimicking Mother Nature",
                html: `
          <p style="text-align:center"><img src="http://images.mini-ielts.com/images/2022/07/biomimicry01_resized.jpg" alt="Biomimicry" style="max-width:400px"></p>
          <p><strong>A</strong> Researchers and designers around the globe endeavor to create new technologies that, by honoring the tenets of life, are both highly efficient and often environmentally friendly. And while biomimicry is not a new concept (Leonardo da Vinci looked to nature to design his flying machines, for example, and pharmaceutical companies have long been miming plant organisms in synthetic drugs), there is a greater need for products and manufacturing processes that use a minimum of energy, materials, and toxins. What's more, due to technological advancements and a newfound spirit of innovation among designers, there are now myriad ways to mimic Mother Nature's best assets.</p>
          <p><strong>B</strong> "We have a perfect storm happening right now," says Jay Harman, an inventor and CEO of PAX Scientific, which designs fans, mixers, and pumps to achieve maximum efficiency by imitating the natural flow of fluids. "Shapes in nature are extremely simple once you understand them, but to understand what geometries are at play, and to adapt them, is a very complex process. We only just recently have had the computer power and manufacturing capability to produce these types of shapes." "If we could capture nature's efficiencies across the board, we could decrease dependency on fuel by at least 50 percent," Harman says. "What we're finding already with the tools and methodology we have right now is that we can reduce energy consumption by between 30 and 40 percent."</p>
          <p><strong>C</strong> It's only recently that mainstream companies have begun to equate biomimicry with the bottom line. DaimlerChrysler, for example, introduced a prototype car modeled on a coral reef fish. Despite its boxy, cube-shaped body, which defies a long-held aerodynamic standard in automotive design (the raindrop shape), the streamlined boxfish proved to be aerodynamically ideal and the unique construction of its skin—numerous hexagonal, bony plates—a perfect recipe for designing a car of maximum strength with minimal weight.</p>
          <p><strong>D</strong> Companies and communities are flocking to Janine Benyus, author of the landmark book Biomimicry: Innovation Inspired by Nature (Perennial, 2002) and cofounder of the Biomimicry Guild, which seats biologists at the table with researchers and designers at companies such as Nike, Interface carpets, Novell, and Procter & Gamble. Their objective is to marry industrial problems with natural solutions.</p>
          <p><strong>E</strong> Benyus, who hopes companies will ultimately transcend mere product design to embrace nature on a more holistic level, breaks biomimicry into three tiers. On a basic (albeit complicated) level, industry will mimic nature's precise and efficient shapes, structures, and geometries. The microstructure of the lotus leaf, for example, causes raindrops to bead and run off immediately, while self-cleaning and drying its surface—a discovery that the British paint company Sto has exploited in a line of building paints. The layered structure of a butterfly wing or a peacock plume, which creates iridescent color by refracting light, is being mimicked by cosmetics giant L'Oreal in a soon-to-be-released line of eye shadow, lipstick, and nail varnish.</p>
          <p><strong>F</strong> The next level of biomimicry involves imitating natural processes and biochemical "recipes": Engineers and scientists are now looking at the nasal glands of seabirds to solve the problem of desalination; the abalone's ability to self-assemble its incredibly durable shell in water, using local ingredients, has inspired an alternative to the conventional, and often toxic, "heat, beat, and treat" manufacturing method. How other organisms deal with harmful bacteria can also be instructive: Researchers for the Australian company Biosignal, for instance, observed a seaweed that lives in an environment teeming with microbes to figure out how it kept free of the same sorts of bacterial colonies, called biofilms, that cause plaque on your teeth and clog up your bathroom drain. They determined that the seaweed uses natural chemicals, called furanones, that jam the cell-to-cell signaling systems that allow bacteria to communicate and gather.</p>
          <p><strong>G</strong> Ultimately, the most sophisticated application of biomimicry, according to Benyus, is when a company starts seeing itself as an organism in an economic ecosystem that must make thrifty use of limited resources and creates symbiotic relationships with other organisms. A boardroom approach at this level begins with imagining any given company, or collection of industries, as a forest, prairie, or coral reef, with its own "food web" (manufacturing inputs and outputs) and asking whether waste products from one manufacturing process can be used, or perhaps sold, as an ingredient for another industrial activity. For instance, Geoffrey Coates, a chemist at Cornell, has developed a biodegradable plastic synthesized from carbon dioxide and limonene (a major component in the oil extracted from citrus rind) and is working with a cement factory to trap their waste CO2 and use it as an ingredient.</p>
          <p><strong>H</strong> Zero Emissions Research and Initiatives (ZERI), a global network of scientists, entrepreneurs, and educators, has initiated eco industrial projects that attempt to find ways to reuse all wastes as raw materials for other processes. Storm Brewing in Newfoundland, Canada—in one of a growing number of projects around the world applying ZERI principles—is using spent grains, a by-product of the beer-making process, to make bread and grow mushrooms.</p>
          <p><em>As industries continue to adopt nature's models, entire manufacturing processes could operate locally, with local ingredients like the factories that use liquefied beach sand to make windshields. As more scientists and engineers begin to embrace biomimicry, natural organisms will come to be regarded as mentors, their processes deemed masterful.</em></p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1–6",
                        boxTitle: "Levels",
                        instructions: [
                            "Look at the following descriptions mentioned in the Reading Passage. Match the three kinds of levels (A-C) listed below the descriptions.",
                            "Write the appropriate letters, A-C, in boxes 1-6 on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "First level: mimic nature's precise and efficient shapes, structures, and geometries" },
                            { value: "B", label: "Second level: imitating natural processes and biochemical 'recipes'" },
                            { value: "C", label: "Third level: creates symbiotic relationships with other like organisms" }
                        ],
                        items: [
                            { q: 1, statement: "Synthesized Plastic, developed together with cement factory, can recycle waste gas." },
                            { q: 2, statement: "Cosmetics companies produce a series of shine cosmetics colours." },
                            { q: 3, statement: "People are inspired how to remove excess salt inspired by nature." },
                            { q: 4, statement: "Daimler Chrysler introduced a fish-shaped car." },
                            { q: 5, statement: "Marine plan company integrated itself into a part in economic ecosystem." },
                            { q: 6, statement: "Natural chemicals developed based on seaweed known to kill bacteria." }
                        ]
                    },
                    {
                        type: "tfng",
                        heading: "Questions 7–14",
                        instructions: [
                            "Do the following statements agree with the information given in the Reading Passage?",
                            "In boxes 7-14 on your answer sheet, write",
                            "<strong>YES</strong> — if the statement agrees with the writer",
                            "<strong>NO</strong> — if the statement does not agree with the writer",
                            "<strong>NOT GIVEN</strong> — if there is no information about this in the passage"
                        ],
                        items: [
                            { q: 7, statement: "Biomimicry is a totally new concept that has been unveiled recently." },
                            { q: 8, statement: "Leonardo da Vinci has been the first designer to mimic nature." },
                            { q: 9, statement: "Scientists believe it involves more than mimicking the shape to capture the design in nature." },
                            { q: 10, statement: "We can save the utilisation of energy by up to 40% if we take advantage of the current findings." },
                            { q: 11, statement: "Daimler Chrysler's prototype car modelled on a coral reef fish is a best-seller." },
                            { q: 12, statement: "Some great companies and communities themselves are seeking solutions beyond their own industrial scope." },
                            { q: 13, statement: "The British paint company Sto did not make the microstructure of the lotus leaf, applicable." },
                            { q: 14, statement: "A Canadian beer company increased the production by applying ZERI principles." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["C"], 2: ["A"], 3: ["B"], 4: ["A"], 5: ["C"], 6: ["B"],
            7: ["NO"], 8: ["NOT GIVEN"], 9: ["YES"], 10: ["YES"],
            11: ["NOT GIVEN"], 12: ["YES"], 13: ["NO"], 14: ["NO"]
        }
    },

    // ============================================================
    // TEST 13 — Implication Of False Belief Experiments
    // ============================================================
    {
        title: "Implication Of False Belief Experiments",
        passages: [
            {
                part: 1,
                title: "Implication Of False Belief Experiments",
                html: `
          <p><em>You should spend about 20 minutes on Questions 14-26, which are based on Reading Passage 2 below.</em></p>
          <p><strong>A</strong> A considerable amount of research since the mid-1980s has been concerned with what has been termed children's theory of mind. This involves children's ability to understand that people can have different beliefs and representations of the world—a capacity that is shown by four years of age. Furthermore, this ability appears to be absent in children with autism. The ability to work out what another person is thinking is clearly an important aspect of both cognitive and social development. Furthermore, one important explanation for autism is that children suffering from this condition do not have a theory of mind (TOM). Consequently, the development of children's TOM has attracted considerable attention.</p>
          <p><strong>B</strong> Wimmer and Perner devised a "false belief task" to address this question. They used some toys to act out the following story. Maxi left some chocolate in a blue cupboard before he went out. When he was away his mother moved the chocolate to a green cupboard. Children were asked to predict where Maxi will look for his chocolate when he returns. Most children under four years gave the incorrect answer, that Maxi will look in the green cupboard. Those over four years tended to give the correct answer, that Maxi will look in the blue cupboard. The incorrect answers indicated that the younger children did not understand that Maxi's beliefs and representations no longer matched the actual state of the world, and they failed to appreciate that Maxi will act on the basis of his beliefs rather than the way that the world is actually organised.</p>
          <p><strong>C</strong> A simpler version of the Maxi task was devised by Baron-Cohen to take account of criticisms that younger children may have been affected by the complexity and too much information of the story in the task described above. For example, the child is shown two dolls, Sally and Anne, who have a basket and box, respectively. Sally also has a marble, which she places in her basket, and then leaves to take a walk. While she is out of room, Anne takes the marble from the basket, eventually putting it in the box. Sally returns, and the child is then asked where Sally will look for the marble. The child passes the task if she answers that Sally will look in the basket, where she put the marble; the child fails the task if she answers that Sally will look in the box, where the child knows the marble is hidden even though Sally cannot know, since she did not see it hidden there. In order to pass the task, the child must be able to understand that another's mental representation of the situation is different from her own, and the child must be able to predict behaviour based on that understanding. The results of research using false-belief tasks have been fairly consistent: most normally-developing children are unable to pass the tasks until around age four.</p>
          <p><strong>D</strong> Leslie argues that, before 18 months, children treat the world in a literal way and rarely demonstrate pretence. He also argues that it is necessary for the cognitive system to distinguish between what is pretend and what is real. If children were not able to do this, they would not be able to distinguish between imagination and what is real. Leslie suggests that this pretend play becomes possible because of the presence of a de-coupler that copies primary representations to secondary representations. For example, children, when pretending a banana is a telephone, would make a secondary representation of a banana. They would manipulate this representation and they would use their stored knowledge of "telephone" to build on this pretence.</p>
          <p><strong>E</strong> There is also evidence that social processes play a part in the development of TOM. Meins and her colleagues have found that what they term mind-mindedness in maternal speech to six-month-old infants is related to both security of attachment and to TOM abilities. Mind-mindedness involves speech that discusses infants' feelings and explains their behaviour in terms of mental states (eg "you're feeling hungry").</p>
          <p><strong>F</strong> Lewis investigated older children living in extended families in Crete and Cyprus. They found that children who socially interact with more adults, who have more friends, and who have more older siblings tend to pass TOM tasks at a slightly earlier age than other children. Furthermore, because young children are more likely to talk about their thoughts and feelings with peers than with their mothers, peer interaction may provide a special impetus to the development of a TOM. A similar point has been made by Dunn, who argues that peer interaction is more likely to contain pretend play and that it is likely to be more challenging because other children, unlike adults, do not make large adaptations to the communicative needs of other children.</p>
          <p><strong>G</strong> In addition, there has been concern that some aspects of the TOM approach underestimate children's understanding of other people. After all, infants will point to objects apparently in an effort to change a person's direction of gaze and interest; they can interact quite effectively with other people; they will express their ideas in opposition to the wishes of others; and they will show empathy for the feelings of others. All these suggest that they have some level of understanding that their own thoughts are different from those in another person's mind. Evidence to support this position comes from a variety of sources. When a card with a different picture on each side is shown to a child and an adult sitting opposite her, the three-year-old understands that she sees a different picture to that seen by the adult.</p>
          <p><strong>H</strong> Schatz studied the spontaneous speech of three-year-olds and found that these children used mental terms, and used them in circumstances where there was a contrast between, for example, not being sure where an object was located and finding it or between pretending and reality. Thus the social abilities of children indicate that they are aware of the difference between mental states and external reality at ages younger than four.</p>
          <p><strong>I</strong> A different explanation has been put forward by Harris. He proposed that children use "simulation". This involves putting yourself in the other person's position, and then trying to predict what the other person would do. Thus success on false belief tasks can be explained by children trying to imagine what they would do if they were a character in the stories, rather than children being able to appreciate the beliefs of other people. Such thinking about situations that do not exist involves what is termed counterfactual reasoning.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 14–20",
                        boxTitle: "Researchers",
                        instructions: [
                            "Look at the following statements and the list of researchers below.",
                            "Match each statement with the correct researcher, A-G.",
                            "Write the correct letter in boxes 14-20."
                        ],
                        options: [
                            { value: "A", label: "Baron-Cohen" }, { value: "B", label: "Meins" },
                            { value: "C", label: "Wimmer and Perner" }, { value: "D", label: "Lewis" },
                            { value: "E", label: "Dunn" }, { value: "F", label: "Schatz" }, { value: "G", label: "Harris" }
                        ],
                        items: [
                            { q: 14, statement: "gave an alternative explanation that children may not be understanding other's belief" },
                            { q: 15, statement: "found that children under certain age can tell difference between reality and mentality" },
                            { q: 16, statement: "conducted a well-known experiment and drew conclusion that young children were unable to comprehend the real state of the world" },
                            { q: 17, statement: "found that children who get along with adults often comparatively got through the test more easily" },
                            { q: 18, statement: "revised an easier experiment to rule out the possibility that children might be influenced by sophisticated reasoning" },
                            { q: 19, statement: "related social factor such as mother-child communication to capability act in TOM" },
                            { q: 20, statement: "explained children are less likely to tell something interactive to their mother than to their friends" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 21–26",
                        instructions: [
                            "Complete the summary below.",
                            "Choose <strong>ONE WORD ONLY</strong> from the passage for each answer."
                        ],
                        items: [
                            { q: 21, before: "In 1980s, research studies were designed to test the subject called Theory of Mind that if children have the ability to represent the reality. First experiments were carried out on this subject on a boy. And questions had been made on where the boy can find the location of the ", after: "." },
                            { q: 22, before: "But it was accused that it had excessive ", after: "." },
                            { q: 23, before: "So second modified experiment was conducted involving two dolls, and most children passed the test at the age of ", after: "." },
                            { q: 24, before: "Then Lewis and Dunn researched ", after: " children in a certain place." },
                            { q: 25, before: "And found children who have more interaction such as more conversation with ", after: " actually have better performance in the test." },
                            { q: 26, before: "And peer interaction is ", after: " because of consisting pretending elements." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            14: ["G"], 15: ["F"], 16: ["C"], 17: ["D"], 18: ["A"], 19: ["B"], 20: ["E"],
            21: ["chocolate"], 22: ["information"], 23: ["four"], 24: ["older"], 25: ["adults"], 26: ["challenging"]
        }
    },

    // ============================================================
    // TEST 14 — Musical Maladies
    // ============================================================
    {
        title: "Musical Maladies",
        passages: [
            {
                part: 1,
                title: "Musical Maladies",
                html: `
          <p><em>You should spend about 20 minutes on Questions 27-40, which are based on Reading Passage 3 below.</em></p>
          <p class="ira-passage-subhead"><strong>Musical Maladies</strong></p>
          <p>Norman M. Weinberger reviews the latest work of Oliver Sacks on music.</p>
          <p>Music and the brain are both endlessly fascinating subjects, and as a neuroscientist specialising in auditory learning and memory, I find them especially intriguing. So I had high expectations of Musicophilia, the latest offering from neurologist and prolific author Oliver Sacks. And I confess to feeling a little guilty reporting that my reactions to the book are mixed.</p>
          <p>Sacks himself is the best part of Musicophilia. He richly documents his own life in the book and reveals highly personal experiences. The photograph of him on the cover of the book—which shows him wearing headphones, eyes closed, clearly enchanted as he listens to Alfred Brendel perform Beethoven's Pathétique Sonata—makes a positive impression that is borne out by the contents of the book. Sacks's voice throughout is steady and erudite but never pontifical. He is neither self-conscious nor self-promoting.</p>
          <p>The preface gives a good idea of what the book will deliver. In it Sacks explains that he wants to convey the insights gleaned from the "enormous and rapidly growing body of work on the neural underpinnings of musical perception and imagery, and the complex and often bizarre disorders to which these are prone." He also stresses the importance of "the simple art of observation" and "the richness of the human context." He wants to combine "observation and description with the latest in technology," he says, and to imaginatively enter into the experience of his patients and subjects. The reader can see that Sacks, who has been practicing neurology for 40 years, is torn between the "old-fashioned" path of observation and the new-fangled, high-tech approach: He knows that he needs to take heed of the latter, but his heart lies with the former.</p>
          <p>The book consists mainly of detailed descriptions of cases, most of them involving patients whom Sacks has seen in his practice. Brief discussions of contemporary neuroscientific reports are sprinkled liberally throughout the text. Part I, "Haunted by Music," begins with the strange case of Tony Cicoria, a nonmusical, middle-aged surgeon who was consumed by a love of music after being hit by lightning. He suddenly began to crave listening to piano music, which he had never cared for in the past. He started to play the piano and then to compose music, which arose spontaneously in his mind in a "torrent" of notes. How could this happen? Was the cause psychological? (He had had a near-death experience when the lightning struck him.) Or was it the direct result of a change in the auditory regions of his cerebral cortex? Electro-encephalography (EEG) showed his brain waves to be normal in the mid-1990s, just after his trauma and subsequent "conversion" to music. There are now more sensitive tests, but Cicoria has declined to undergo them; he does not want to delve into the causes of his musicality. What a shame!</p>
          <p>Part II, "A Range of Musicality," covers a wider variety of topics, but unfortunately, some of the chapters offer little or nothing that is new. For example, chapter 13, which is five pages long, merely notes that the blind often have better hearing than the sighted. The most interesting chapters are those that present the strangest cases. Chapter 8 is about "amusia," an inability to hear sounds as music, and "dysharmonia," a highly specific impairment of the ability to hear harmony, with the ability to understand melody left intact. Such specific "dissociations" are found throughout the cases Sacks recounts.</p>
          <p>To Sacks's credit, part III, "Memory, Movement and Music," brings us into the underappreciated realm of music therapy. Chapter 16 explains how "melodic intonation therapy" is being used to help expressive aphasic patients (those unable to express their thoughts verbally following a stroke or other cerebral incident) once again become capable of fluent speech. In chapter 20, Sacks demonstrates the near-miraculous power of music to animate Parkinson's patients and other people with severe movement disorders, even those who are frozen into odd postures. Scientists cannot yet explain how music achieves this effect.</p>
          <p>To readers who are unfamiliar with neuroscience and music behavior, Musicophilia may be something of a revelation. But the book will not satisfy those seeking the causes and implications of the phenomena Sacks describes. For one thing, Sacks appears to be more at ease discussing patients than discussing experiments. And he tends to be rather uncritical in accepting scientific findings and theories.</p>
          <p>It's true that the causes of music-brain oddities remain poorly understood. However, Sacks could have done more to draw out some of the implications of the careful observations that he and other neurologists have made and of the treatments that have been successful. For example, he might have noted that the many specific dissociations among components of music comprehension, such as loss of the ability to perceive harmony but not melody, indicate that there is no music center in the brain. Because many people who read the book are likely to believe in the brain localisation of all mental functions, this was a missed educational opportunity.</p>
          <p>Another conclusion one could draw is that there seem to be no "cures" for neurological problems involving music. A drug can alleviate a symptom in one patient and aggravate it in another, or can have both positive and negative effects in the same patient. Treatments mentioned seem to be almost exclusively antiepileptic medications, which "damp down" the excitability of the brain in general; their effectiveness varies widely.</p>
          <p>Finally, in many of the cases described here the patient with music-brain symptoms is reported to have "normal" EEG results. Although Sacks recognises the existence of new technologies, among them far more sensitive ways to analyze brain waves than the standard neurological EEG test, he does not call for their use. In fact, although he exhibits the greatest compassion for patients, he conveys no sense of urgency about the pursuit of new avenues in the diagnosis and treatment of music-brain disorders. This absence echoes the book's preface, in which Sacks expresses fear that "the simple art of observation may be lost" if we rely too much on new technologies. He does call for both approaches, though, and we can only hope that the neurological community will respond.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "mcq",
                        heading: "Questions 27–30",
                        instructions: [
                            "Choose the correct letter, A, B, C or D."
                        ],
                        items: [
                            {
                                q: 27, stem: "Why does the writer have a mixed feeling about the book?", options: [
                                    { value: "A", label: "The guilty feeling made him so." },
                                    { value: "B", label: "The writer expected it to be better than it was." },
                                    { value: "C", label: "Sacks failed to include his personal stories in the book." },
                                    { value: "D", label: "This is the only book written by Sacks." }
                                ]
                            },
                            {
                                q: 28, stem: "What is the best part of the book?", options: [
                                    { value: "A", label: "the photo of Sacks listening to music" },
                                    { value: "B", label: "the tone of voice of the book" },
                                    { value: "C", label: "the autobiographical description in the book" },
                                    { value: "D", label: "the description of Sacks's wealth" }
                                ]
                            },
                            {
                                q: 29, stem: "In the preface, what did Sacks try to achieve?", options: [
                                    { value: "A", label: "make terms with the new technologies" },
                                    { value: "B", label: "give detailed description of various musical disorders" },
                                    { value: "C", label: "explain how people understand music" },
                                    { value: "D", label: "explain why he needs to do away with simple observation" }
                                ]
                            },
                            {
                                q: 30, stem: "What is disappointing about Tony Cicoria's case?", options: [
                                    { value: "A", label: "He refuses to have further tests." },
                                    { value: "B", label: "He can't determine the cause of his sudden musicality." },
                                    { value: "C", label: "He nearly died because of the lightning." },
                                    { value: "D", label: "His brain waves were too normal to show anything." }
                                ]
                            }
                        ]
                    },
                    {
                        type: "tfng",
                        heading: "Questions 31–36",
                        instructions: [
                            "Do the following statements agree with the views of the writer in Reading Passage 3?",
                            "Write",
                            "<strong>YES</strong> if the statement agrees with the views of the writer",
                            "<strong>NO</strong> if the statement contradicts with the views of the writer",
                            "<strong>NOT GIVEN</strong> if it is impossible to say what the writer thinks about this"
                        ],
                        items: [
                            { q: 31, statement: "It is difficult to give a well-reputable writer a less than favorable review." },
                            { q: 32, statement: "Beethoven's Pathétique Sonata is a good treatment for musical disorders." },
                            { q: 33, statement: "Sacks believes technological methods is not important compared with observation when studying his patients." },
                            { q: 34, statement: "It is difficult to understand why music therapy is undervalued." },
                            { q: 35, statement: "Sacks should have more skepticism about other theories and findings." },
                            { q: 36, statement: "Sacks is impatient to use new testing methods." }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 37–40",
                        boxTitle: "Endings",
                        instructions: [
                            "Complete each sentence with the correct ending, A-F, below."
                        ],
                        options: [
                            { value: "A", label: "show no music-brain disorders." },
                            { value: "B", label: "indicates that medication can have varied results." },
                            { value: "C", label: "is key for the neurological community to unravel the mysteries." },
                            { value: "D", label: "should not be used in isolation." },
                            { value: "E", label: "indicate that not everyone can receive good education." },
                            { value: "F", label: "show that music is not localised in the brain." }
                        ],
                        items: [
                            { q: 37, statement: "The dissociations between harmony and melody" },
                            { q: 38, statement: "The study of treating musical disorders" },
                            { q: 39, statement: "The EEG scans of Sacks's patients" },
                            { q: 40, statement: "Sacks believes testing based on new technologies" }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            27: ["B"], 28: ["C"], 29: ["A"], 30: ["A"],
            31: ["YES"], 32: ["NOT GIVEN"], 33: ["NO"], 34: ["NOT GIVEN"], 35: ["YES"], 36: ["NO"],
            37: ["F"], 38: ["B"], 39: ["A"], 40: ["D"]
        }
    },

    // ============================================================
    // TEST 15 — The History Of The Automobile
    // ============================================================
    {
        title: "The History Of The Automobile",
        passages: [
            {
                part: 1,
                title: "The History Of The Automobile",
                html: `
          <p><em>You should spend about 20 minutes on Questions 14-27, which are based on Reading Passage 2 below.</em></p>
          <p class="ira-passage-subhead"><strong>The History of the Automobile</strong></p>
          <p>The start of the automobile's history went all the way back to 1769 when automobiles running on the steam engine were invented as carriers for human transport. In 1806, the first batch of cars powered by an internal combustion engine came into being, which pioneered the introduction of the widespread modern petrol-fueled internal combustion engine in 1885.</p>
          <p>It is generally acknowledged that the first practical automobiles equipped with petrol/gasoline-powered internal combustion engines were invented almost at the same time by different German inventors who were working on their own. Karl Benz first built the automobile in 1885 in Mannheim. Benz attained a patent for his invention on 29 January 1886, and in 1888, he started to produce automobiles in a company that later became the renowned Mercedes-Benz.</p>
          <p>As this century began, the automobile industry marched into the transportation market for the wealth. Drivers at that time were an adventurous bunch; they would go out regardless of the weather condition even if they weren't even protected by an enclosed body or a convertible top. Everybody in the community knew who owned what car, and cars immediately became a symbol of identity and status. Later, cars became more popular among the public since it allowed people to travel whenever and wherever they wanted. Thus, the price of automobiles in Europe and North America kept dropping, and more people from the middle class could afford them. This was especially attributed to Henry Ford who did two crucial things. First, he set the price as reasonable as possible for his cars; second, he paid his employees enough salaries so that they could afford the cars made by their very own hands.</p>
          <p>The trend of interchangeable parts and mass production in an assembly line style had been led by America, and from 1914, this concept was significantly reinforced by Henry Ford. This large-scale, production-line manufacture of affordable automobiles was debuted. A Ford car would come off all assembled from the line every 15 minutes, an interval shorter than any of the former methods. Not only did it raise productivity, but also cut down on the requirement for manpower. Ford significantly lowered the chance of injury by carrying out complicated safety procedures in production—particularly assigning workers to specific locations rather than giving them the freedom to wander around. This mixture of high wages and high efficiency was known as Fordism, which provided a valuable lesson for most major industries.</p>
          <p>The first Jeep automobile that came out as the prototype Bantam BRC was the primary light 4-wheel-drive automobile of the U.S. Army and Allies, and during World War II and the postwar period, its sale skyrocketed. Since then, plenty of Jeep derivatives with similar military and civilian functions have been created and kept upgraded in terms of overall performance in other nations.</p>
          <p>Through all the 1950s, engine power and automobile rates grew higher, designs evolved into a more integrated and artful form, and cars were spreading globally. In the 1960s, the landscape changed as Detroit was confronted with foreign competition. The European manufacturers used the latest technology, and Japan came into the picture as a dedicated car-making country. General Motors, Chrysler, and Ford dabbled with radical tiny cars such as the GM A-bodies with little success. As joint ventures such as the British Motor Corporation unified the market, captive imports and badge imports swept all over the US and the UK. BMC first launched a revolutionary space-friendly Mini in 1959, which turned out to harvest large global sales. Previously remaining under the Austin and Morris names, Mini later became an individual marque in 1969. The trend of corporate consolidation landed in Italy when niche makers such as Maserati, Ferrari, and Lancia were bought by larger enterprises. By the end of the 20th century, there had been a sharp fall in the number of automobile marques.</p>
          <p>In the US, car performance dominated marketing, justified by the typical cases of pony cars and muscle cars. However, in the 1970s, everything changed as the American automobile industry suffered from the 1973 oil crisis, competition with Japanese and European imports, automobile emission-control regulations, and moribund innovation. The irony in all this was that full-size sedans such as Cadillac and Lincoln scored a huge comeback between the years of economic crisis.</p>
          <p>In terms of technology, the most mentionable developments that postwar era had seen were the widespread use of independent suspensions, broader application of fuel injection, and a growing emphasis on safety in automobile design. Mazda achieved many triumphs with its engine firstly installed in the fore-wheel, though it gained itself a reputation as a gas-guzzler.</p>
          <p>The modern era also has witnessed a sharp elevation of fuel power in the modern engine management system with the help of the computer. Nowadays, most automobiles in use are powered by an internal combustion engine, fueled by gasoline or diesel. Toxic gas from both fuels is known to pollute the air and is responsible for climate change as well as global warming.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 14–19",
                        boxTitle: "Automobile Brands",
                        instructions: [
                            "Look at the following descriptions and the list of automobile brands below.",
                            "Match each description with the correct automobile brand, A-G."
                        ],
                        options: [
                            { value: "A", label: "Ford" }, { value: "B", label: "the BMC Mini" },
                            { value: "C", label: "Cadillac and Lincoln" }, { value: "D", label: "Mercedes Benz" },
                            { value: "E", label: "Mazda" }, { value: "F", label: "Jeep" },
                            { value: "G", label: "Maserati, Ferrari, and Lancia" }
                        ],
                        items: [
                            { q: 14, statement: "began producing the first automobiles" },
                            { q: 15, statement: "produced the industrialised cars that common consumers could afford" },
                            { q: 16, statement: "improved the utilisation rate of automobile space" },
                            { q: 17, statement: "upgraded the overall performance of the car continuously" },
                            { q: 18, statement: "maintained leading growth even during an economic recession" },
                            { q: 19, statement: "installed its engine on the front wheel for the first time" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 20–26",
                        instructions: [
                            "Answer the questions below.",
                            "Choose <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the passage for each answer."
                        ],
                        items: [
                            { q: 20, before: "What is the important feature owned by the modern engine since the 19th century?", after: "" },
                            { q: 21, before: "What did a car symbolise to the rich at the very beginning of this century?", after: "" },
                            { q: 22, before: "How long did Ford assembly line take to produce a car?", after: "" },
                            { q: 23, before: "What is the major historical event that led American cars to suffer when competing with Japanese imported cars?", after: "" },
                            { q: 24, before: "What do people call the Mazda car which was designed under the front-wheel engine?", after: "" },
                            { q: 25, before: "What has greatly increased with the computerised engine management systems in modern society?", after: "" },
                            { q: 26, before: "What factor is blamed for contributing to pollution, climate change and global warming?", after: "" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Question 27",
                        instructions: ["Choose the correct letter, A, B, C or D."],
                        items: [
                            {
                                q: 27, stem: "What is the main idea of the passage?", options: [
                                    { value: "A", label: "The influence of the cars on the environment" },
                                    { value: "B", label: "The historical development and innovation in car designs" },
                                    { value: "C", label: "The beginning of the modern designed gasoline engines" },
                                    { value: "D", label: "The history of human and the Auto industry" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            14: ["D"], 15: ["A"], 16: ["B"], 17: ["F"], 18: ["C"], 19: ["E"],
            20: ["petrol-fueled internal combustion"], 21: ["identity and status"],
            22: ["15 minutes"], 23: ["the 1973 oil crisis", "1973 oil crisis"],
            24: ["a gas-guzzler", "gas-guzzler"], 25: ["fuel power"], 26: ["toxic gas"], 27: ["B"]
        }
    },

    // ============================================================
    // TEST 16 — What Do Babies Know?
    // ============================================================
    {
        title: "What Do Babies Know?",
        passages: [
            {
                part: 1,
                title: "What Do Babies Know?",
                html: `
          <p><em>You should spend about 20 minutes on Questions 27-40, which are based on Reading Passage 3 below.</em></p>
          <p class="ira-passage-subhead"><strong>What Do Babies Know?</strong></p>
          <p>As Daniel Haworth is settled into a high chair and wheeled behind a black screen, a sudden look of worry furrows his 9-month-old brow. His dark blue eyes dart left and right in search of the familiar reassurance of his mother's face. She calls his name and makes soothing noises, but Daniel senses something unusual is happening. He sucks his fingers for comfort, but, finding no solace, his month crumples, his body stiffens, and he lets rip an almighty shriek of distress. This is the usual expression when babies are left alone or abandoned. Mom picks him up, reassures him, and two minutes later, a chortling and alert Daniel returns to the darkened booth behind the screen and submits himself to baby lab, a unit set up in 2005 at the University of Manchester in northwest England to investigate how babies think.</p>
          <p>Watching infants piece life together, seeing their senses, emotions and motor skills take shape, is a source of mystery and endless fascination—at least to parents and developmental psychologists. We can decode their signals of distress or read a million messages into their first smile. But how much do we really know about what's going on behind those wide, innocent eyes? How much of their understanding of and response to the world comes preloaded at birth? How much is built from scratch by experience? Such are the questions being explored at baby lab. Though the facility is just 18 months old and has tested only 100 infants, it's already challenging current thinking on what babies know and how they come to know it.</p>
          <p>Daniel is now engrossed in watching video clips of a red toy train on a circular track. The train disappears into a tunnel and emerges on the other side. A hidden device above the screen is tracking Daniel's eyes as they follow the train and measuring the diametre of his pupils 50 times a second. As the child gets bored—or "habituated", as psychologists call the process—his attention level steadily drops. But it picks up a little whenever some novelty is introduced. The train might be green, or it might be blue. And sometimes an impossible thing happens—the train goes into the tunnel one color and comes out another.</p>
          <p>Variations of experiments like this one, examining infant attention, have been a standard tool of developmental psychology ever since the Swiss pioneer of the field, Jean Piaget, started experimenting on his children in the 1920s. Piaget's work led him to conclude that infants younger than 9 months have no innate knowledge of how the world works or any sense of "object permanence" (that people and things still exist even when they're not seen). Instead, babies must gradually construct this knowledge from experience. Piaget's "constructivist" theories were massively influential on postwar educators and psychologist, but over the past 20 years or so they have been largely set aside by a new generation of "nativist" psychologists and cognitive scientists whose more sophisticated experiments led them to theorise that infants arrive already equipped with some knowledge of the physical world and even rudimentary programming for math and language. Baby lab director Sylvain Sirois has been putting these smart-baby theories through a rigorous set of tests. His conclusions so far tend to be more Piagetian: "Babies," he says, "know nothing."</p>
          <p>What Sirois and his postgraduate assistant Lain Jackson are challenging is the interpretation of a variety of classic experiments begun in the mid-1980s in which babies were shown physical events that appeared to violate such basic concepts as gravity, solidity and contiguity. In one such experiment, by University of Illinois psychologist Renee Baillargeon, a hinged wooden panel appeared to pass right through a box. Baillargeon and M.I.T's Elizabeth Spelke found that babies as young as 3½ months would reliably look longer at the impossible event than at the normal one. Their conclusion: babies have enough built-in knowledge to recognise that something is wrong.</p>
          <p>Sirois does not take issue with the way these experiments were conducted. "The methods are correct and replicable," he says, "it's the interpretation that's the problem." In a critical review to be published in the forthcoming issue of the European Journal of Developmental Psychology, he and Jackson pour cold water over recent experiments that claim to have observed innate or precocious social cognition skills in infants. His own experiments indicate that a baby's fascination with physically impossible events merely reflects a response to stimuli that are novel. Data from the eye tracker and the measurement of the pupils (which widen in response to arousal or interest) show that impossible events involving familiar objects are no more interesting than possible events involving novel objects. In other words, when Daniel had seen the red train come out of the tunnel green a few times, he gets as bored as when it stays the same color. The mistake of previous research, says Sirois, has been to leap to the conclusion that infants can understand the concept of impossibility from the mere fact that they are able to perceive some novelty in it. "The real explanation is boring," he says.</p>
          <p>So how do babies bridge the gap between knowing squat and drawing triangles—a task Daniel's sister Lois, 2½, is happily tackling as she waits for her brother? "Babies have to learn everything, but as Piaget was saying, they start with a few primitive reflexes that get things going," said Sirois. For example, hardwired in the brain is an instinct that draws a baby's eyes to a human face. From brain imaging studies we also know that the brain has some sort of visual buffer that continues to represent objects after they have been removed—a lingering perception rather than conceptual understanding. So when babies encounter novel or unexpected events, Sirois explains, "there's a mismatch between the buffer and the information they're getting at that moment. And what you do when you've got a mismatch is you try to clear the buffer. And that takes attention." So learning, says Sirois, is essentially the laborious business of resolving mismatches. "The thing is, you can do a lot of it with this wet sticky thing called a brain. It's a fantastic, statistical-learning machine". Daniel, exams ended, picks up a plastic tiger and, chewing thoughtfully upon its heat, smiles as if to agree.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "tfng",
                        heading: "Questions 27–32",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage 3?",
                            "Write",
                            "<strong>TRUE</strong> if the statement agrees with the information",
                            "<strong>FALSE</strong> if the statement contradicts with the information",
                            "<strong>NOT GIVEN</strong> if there is no information on this"
                        ],
                        items: [
                            { q: 27, statement: "Baby's behavior after being abandoned is not surprising." },
                            { q: 28, statement: "Parents are over-estimating what babies know." },
                            { q: 29, statement: "Only 100 experiments have been done but can prove the theories about what we know." },
                            { q: 30, statement: "Piaget's theory was rejected by parents in 1920s." },
                            { q: 31, statement: "Sylvain Sirois's conclusion on infant's cognition is similar to Piaget's." },
                            { q: 32, statement: "Sylvain Sirois found serious flaws in the experimental designs by Baillargeon and Elizabeth Spelke." }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 33–37",
                        boxTitle: "Endings",
                        instructions: [
                            "Complete each sentence with the correct ending, A-E, below."
                        ],
                        options: [
                            { value: "A", label: "before they are born." },
                            { value: "B", label: "before they learn from experience." },
                            { value: "C", label: "when they had seen the same thing for a while." },
                            { value: "D", label: "when facing the possible and impossible events." },
                            { value: "E", label: "when the previous things appear again in the lives." }
                        ],
                        items: [
                            { q: 33, statement: "Jean Piaget thinks infants younger than 9 months won't know something existing" },
                            { q: 34, statement: "Jean Piaget thinks babies only get the knowledge" },
                            { q: 35, statement: "Some cognitive scientists think babies have the mechanism to learn a language" },
                            { q: 36, statement: "Sylvain Sirois thinks that babies can reflect a response to stimuli that are novel" },
                            { q: 37, statement: "Sylvain Sirois thinks babies' attention level will drop" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Questions 38–40",
                        instructions: ["Choose the correct letter, A, B, C or D."],
                        items: [
                            {
                                q: 38, stem: "What can we know about Daniel in the third paragraph?", options: [
                                    { value: "A", label: "Daniel's attention level rose when he saw a blue train." },
                                    { value: "B", label: "Kid's attention fell when he was accustomed to the changes." },
                                    { value: "C", label: "Child's brain activity was monitored by a special equipment." },
                                    { value: "D", label: "Size of the train changed when it came out of the tunnel." }
                                ]
                            },
                            {
                                q: 39, stem: "What can we know from the writer in the fourth paragraph?", options: [
                                    { value: "A", label: "The theories about what baby knows changed over time." },
                                    { value: "B", label: "Why the experiments that had been done before were rejected." },
                                    { value: "C", label: "Infants have the innate knowledge to know the external environment." },
                                    { value: "D", label: "Piaget's 'constructivist' theories were massively influential on parents." }
                                ]
                            },
                            {
                                q: 40, stem: "What can we know from the argument of the experiment about the baby in the sixth paragraph?", options: [
                                    { value: "A", label: "Infants are attracted by various colours of the trains all the time." },
                                    { value: "B", label: "Sylvain Sirois accuses misleading approaches of current experiments." },
                                    { value: "C", label: "Sylvain Sirois indicates that only impossible events make children interested." },
                                    { value: "D", label: "Sylvain Sirois suggests that novel things attract baby's attention." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            27: ["TRUE"], 28: ["NOT GIVEN"], 29: ["FALSE"], 30: ["NOT GIVEN"], 31: ["TRUE"], 32: ["FALSE"],
            33: ["B"], 34: ["E"], 35: ["A"], 36: ["D"], 37: ["C"],
            38: ["B"], 39: ["A"], 40: ["D"]
        }
    },
    // ============================================================
    // TEST — The contribution of language to business (Academic Reading Test 15.2)
    // ============================================================
    {
        title: "The contribution of language to business",
        passages: [
            {
                part: 1,
                title: "The contribution of language to business",
                html: `
          <p><em>You should spend about 20 minutes on Questions 14-26, which are based on Reading Passage below.</em></p>
          <p>People say that business is all about relationships, but the truth is that business is really all about language communication. Languages make either a direct or indirect contribution to business and industry—from acquiring and retaining customers to improving employee engagement and performance. At the most fundamental level, the business cannot happen without communication. This is even more true in the era of globalization. As geographic borders become porous and the world flattens, effective communication with customers, employees, partners, suppliers, and other stakeholders across the globe becomes essential to successfully running a company.</p>
          <p>There is no universal agreement on how significant the language factor is; nor the degree of language proficiency in contribution to the success of business and industry. In large modern enterprises, people have the unique experience of working with thousands of organizations across different industries and sectors that are tackling this very problem. Companies adjust to these demographic, cultural, and economic trends and proactively build workforces with the skills and capabilities needed to grow and thrive in this multicultural and international economy. Although the combination of business functions and processes impacted by improved communication may vary from company to company, language skills consistently deliver tangible business value and results for organizations that invest in language training.</p>
          <p>Although English is dominant for international transactions, many business people also think and deal in scores of languages. Companies that operate solely in English will miss opportunities to capitalize on the explosive growth in developing and untapped markets at home and abroad. These companies also run the risk of misunderstandings with customers, and with members of an increasingly global workforce. Moreover, travellers on business need to have different levels of language proficiency. On a basic level, they are able to use the language at the airport and to check-in at the hotel. Besides, they need a high language proficiency to deal with workers at their offshore factories.</p>
          <p>One of the biggest business advantages of a workforce that can effectively communicate in more than one language is the ability to reach new markets - both at home and abroad. On the domestic side, for example, the U.S. has become even more of a melting pot than in the past, with minorities accounting for a greater proportion of the total population. Accordingly, in domestic venues, the consumer contacts and service activities also ask for workers with good skills in different languages, such as at restaurants or in duty-free stores.</p>
          <p>The language proficiency needed to hold a conversation is quite different from that needed for negotiating. Receptionists and telephonists are the first point of contact between firms. The language proficiency they need is to gather basic factual information. Yet negotiating well in another language is one of the most difficult skills, especially nowadays when it is often done at a distance by videoconference, teleconference or email. It is also one of the most important things to do well, with usually a clear financial penalty for doing it badly. To really master the negotiating skill, negotiators need a thorough understanding of the very many phrases they might hear during the negotiation and an ability to show fine shades in meaning in their own contributions. Similar to negotiating, certain occupations like shipping, also require unbroken and detailed communication between officials.</p>
          <p>When it comes to negotiation, the interpreters and translators are needed. Interpreters and translators aid communication by converting messages or text from one language into another language. Although some people do both, interpreting and translating are different professions: interpreters work with spoken communication, and translators work with written communication. The selection of interpreters and translators is critical. Both the loyalty and accuracy of the interpreters and translators must be put at the top of the agenda. Thus, loyalty to the speaker and the original appears to be a hallmark of professionals more so than of amateurs.</p>
          <p>Who can judge the performance of the interpreters? A person with language proficiency is needed in the negotiating team to check on the interpreters, guaranteeing the quality and accuracy of the interpretation. Listeners are presumably listening only to the output and as such not aware of the structure of the source speech. Only an experienced expert will understand the constraints of any given situation and be in a position to judge. Only she (or he) can assess just how the speed, density and complexity of the speech will affect interpretation in any particular language combination. And even this task is not easy: interpreters are trained to listen and speak at the same time, not to listen to two different audio streams. Therefore, the check-on is best accomplished by those trained to teach or with enough experience to have mastered this skill.</p>
          <p>Businesses may ask help from local consultants who are responsible for hiring local workers or train company managers to deal with local consumers. That was the case with CommScope, a multibillion-dollar telecom equipment manufacturer with customers, employees, and partners in 18 countries across the world. In the wake of these transactions, the company began offering Jacqueline K. Crofton, a local resident, language training to key employees and executives. The goal of the training was not to make employees fluent in the new language, as much as to give them a degree of functional proficiency. "In order to advance well in new markets and with new customers, we had to be able to at least understand and communicate at a basic level, even with the use of interpreters," says David Hartsoe, manager of CommScope's Global Learning Center. In the long run, effective communication will definitely help their employees stay positive and productive.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "tfng",
                        heading: "Questions 14-19",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage?",
                            "In boxes 14-19 on your answer sheet, write",
                            "<strong>YES</strong> — if the statement agrees with the view of the writer",
                            "<strong>NO</strong> — if the statement contradicts the view of the writer",
                            "<strong>NOT GIVEN</strong> — if it is impossible to say what the writer thinks about this"
                        ],
                        items: [
                            { q: 14, statement: "There are two types of contributions that languages make to the business." },
                            { q: 15, statement: "All businesses have recognized the importance of language to business." },
                            { q: 16, statement: "English is the most important language for all business purposes." },
                            { q: 17, statement: "Senior executives, especially, need to be fluent in the language of their trading partners." },
                            { q: 18, statement: "Travellers on business need several different levels of language proficiency." },
                            { q: 19, statement: "Some businesses provide interpreter training to their employees." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 20-23",
                        instructions: [
                            "Answer the questions below.",
                            "Choose <strong>NO MORE THAN THREE WORDS</strong> from Reading Passage for each answer.",
                            "Write your answers in boxes 20-23 on your answer sheet."
                        ],
                        items: [
                            { q: 20, before: "What level of language proficiency are the workers required in the duty-free stores?", after: "" },
                            { q: 21, before: "Who are the first people the client usually have contact within business?", after: "" },
                            { q: 22, before: "Which industry is high language proficiency essential to?", after: "" },
                            { q: 23, before: "What business are interpreters and translators needed for?", after: "" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Questions 24-26",
                        instructions: [
                            "Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.",
                            "Write your answers in boxes 24-26 on your answer sheet."
                        ],
                        items: [
                            {
                                q: 24,
                                stem: "One of the most important qualities of the interpreter is",
                                options: [
                                    { value: "A", label: "trustworthiness." },
                                    { value: "B", label: "appropriate reaction." },
                                    { value: "C", label: "industry knowledge and contacts." },
                                    { value: "D", label: "common sense." }
                                ]
                            },
                            {
                                q: 25,
                                stem: "A qualified interpreter is essential to the business for",
                                options: [
                                    { value: "A", label: "financial reasons." },
                                    { value: "B", label: "ensuring cultural appropriateness." },
                                    { value: "C", label: "accuracy of information." },
                                    { value: "D", label: "success in trading." }
                                ]
                            },
                            {
                                q: 26,
                                stem: "In the writer's opinion, hiring an indigenous person to improve the dialect language proficiency of the company staff is",
                                options: [
                                    { value: "A", label: "unlikely." },
                                    { value: "B", label: "sensible." },
                                    { value: "C", label: "expensive." },
                                    { value: "D", label: "unethical." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            14: ["YES"], 15: ["NO"], 16: ["NO"], 17: ["NOT GIVEN"], 18: ["YES"], 19: ["NOT GIVEN"],
            20: ["GOOD SKILLS"], 21: ["RECEPTIONISTS AND TELEPHONISTS"], 22: ["SHIPPING"], 23: ["NEGOTIATION"],
            24: ["A"], 25: ["C"], 26: ["B"]
        }
    },

    // ============================================================
    // TEST — The Fight Against Polio (Academic Reading Test 36, Part 3)
    // ============================================================
    {
        title: "The Fight Against Polio",
        passages: [
            {
                part: 1,
                title: "The Fight Against Polio",
                html: `
          <p><em>You should spend about 20 minutes on Questions 27-40, which are based on Reading Passage below.</em></p>
          <p><strong>A</strong> The poliovirus is one of the smallest and simplest viruses. It is usually spread by just dirty fingers and in most cases is confined to the gut. As the virus travels down the intestine, it induces the body to produce antibodies against it, which will protect the person against future attacks. In about one per cent of cases, the virus floods into the bloodstream and infects the nerve cells in the spinal cord that drive the muscles. This causes the characteristic paralysis, which can affect one or more limbs and/or the muscles of respiration, in which case artificial ventilation, for example with the iron lung, may be needed to keep the patient breathing and alive. The iron lung, which was officially known as a negative pressure ventilator, was invented hundreds of years ago, but was further developed in the 1930's to help with the world polio outbreaks. At one point, the need for iron lungs was so high that they were used with a patient within an hour of their manufacture.</p>
          <p><strong>B</strong> Polio originally caused sporadic clusters of paralysis, especially in children. For some reason, this pattern changed during the late nineteenth century into explosive epidemics, which swept through many countries each summer. The first major outbreak, on the East Coast of the USA in the summer of 1916, caused 25,000 cases of paralysis and 6,000 deaths. Draconian public health measures were powerless to prevent the spread of the disease, resulting in widespread panic across America. Each year, panic resurfaced as the polio season approached, with the wealthy leaving towns and cities in droves.</p>
          <p><strong>C</strong> This fear of polio was deliberately fuelled and exploited by the March of Dimes, an American fundraising organisation set up by President Franklin D Roosevelt, himself a polio survivor. The March of Dimes raised vast sums, and funded both practical support for polio victims and their families, and the research programmes that ultimately resulted in effective polio vaccines.</p>
          <p><strong>D</strong> Polio can be prevented but not cured. Treatments proposed for patients with acute polio have included barbaric measures, such as branding the child's back with a red-hot poker and 'brain washout therapy'. Less dramatic were massive doses of vitamins C and chemically modified cobra venom. None of these had any impact on paralysis or survival, and some were positively dangerous. The iron lung could rescue patients from suffocation if their respiratory muscles were paralysed, but the iron lung itself carried considerable risks. Until chest infections could be properly treated, seventy per cent of patients put inside the iron lung died there.</p>
          <p><strong>E</strong> Two rival strategies were used to develop vaccines to protect against polio. Jonas Salk (1914–1998) favoured an 'inactivated polio vaccine' (IPV), in which wild polioviruses are 'killed' with formalin, so that they can no longer replicate and spread into the spinal cord. IPV is injected into a muscle and causes protective antibodies to appear in the bloodstream.</p>
          <p>The 'oral polio vaccine' (OPV) developed by Albert Sabin (1906–1993) relies on the fact that polioviruses forced to grow under unfavourable conditions in the laboratory will undergo mutation into forms that can no longer invade the spinal cord. The OPV virus is still 'alive' and able to replicate, but cannot enter the spinal cord and cause paralysis. OPV is taken by mouth and, like a wild poliovirus, induces immunity against itself in the gut wall as it travels through the intestine. It therefore provides a different type of immunity protection when compared with the Salk vaccine.</p>
          <p><strong>F</strong> Salk's IPV was the first polio vaccine to be tested on a large scale, in massive clinical trials in 1954 involving 1.8 million American children. Following the sensational declaration that his vaccine 'works and is safe', Salk became a national and international hero, and mass vaccination of children with his IPV began immediately. Vaccination continued despite a tragic outbreak of paralytic (and sometimes fatal) polio due to contamination of the Salk vaccine with wild poliovirus, which was the result of carelessness in the vaccine production plant.</p>
          <p>Numbers of paralytic cases and deaths from polio fell dramatically in the USA over the next few years, and Salk's vaccine was taken up across the world. Sabin's OPV, being cheaper, more effective and easier to give, later superseded the Salk vaccine. Given correctly, both vaccines protect against polio and are overwhelmingly safe. There is an exceedingly low risk (one in 500,000 vaccinations) of Sabin's OPV reverting to a paralysing variant, a drawback that Sabin always refused to acknowledge.</p>
          <p><strong>G</strong> Polio vaccine not only protects individuals, but, if given intensively and on a massive scale, can prevent the virus from spreading and so stamp it out. In 1988, various organisations set out to clear the planet of polio through a worldwide vaccination campaign. The hope was that polio would follow the example of smallpox, which was exterminated by intensive global vaccination during the late 1970's.</p>
          <p>Now, after 26 years, polio is tantalisingly close to being eradicated, with just 200 paralytic cases worldwide last year, as compared with over 300,000 in 1988. Tragically, though, endemic polio continues to cling on in three areas, Afghanistan, Pakistan and Northern Nigeria, largely because of anti-western ideology that is backed up by intimidation, death threats and the murder of many vaccinators and their supporters. Usually refugees, but also other travellers, have reintroduced polio to other countries, for example Syria, Lebanon and various African states, which had been previously cleared of polio.</p>
          <p>Unfortunately, it is now very unlikely that polio will be eradicated within the next two to three years and it seems that the final extermination of the virus will depend as much on diplomacy as on medicine and science.</p>
          <p><strong>Glossary</strong></p>
          <p>Draconian – severe or harsh.</p>
          <p>In droves — in large numbers.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 27-33",
                        boxTitle: "Paragraphs",
                        instructions: [
                            "The text above has 7 paragraphs A - G.",
                            "Which paragraph contains the following information?",
                            "Write the correct letter, <strong>A-G</strong>, in boxes 27-33 on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" },
                            { value: "D", label: "D" }, { value: "E", label: "E" }, { value: "F", label: "F" },
                            { value: "G", label: "G" }
                        ],
                        items: [
                            { q: 27, statement: "The OPV protects people in the same way as a wild virus works in the body." },
                            { q: 28, statement: "Panic was intentionally created in order to raise money to fight polio." },
                            { q: 29, statement: "The OPV was more successful than the IPV at preventing polio." },
                            { q: 30, statement: "The US polio outbreaks caused some people to move away from high population areas in the summers." },
                            { q: 31, statement: "Extremism is one barrier to the eradication of polio." },
                            { q: 32, statement: "Iron lungs were in great demand because the numbers of people sick with polio." },
                            { q: 33, statement: "One medicine used to treat polio was based on snake poison." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 34-37",
                        instructions: [
                            "Complete the summary below.",
                            "Write <strong>NO MORE THAN ONE WORD</strong> from the text for each answer.",
                            "Write your answers in boxes 34-37 on your answer sheet."
                        ],
                        items: [
                            { q: 34, before: "Salk developed one of the two anti-polio vaccines by using ", after: " to stop the ability of the polio virus to attack the spinal cord. The vaccine's presence after injection therefore causes the creation of antibodies." },
                            { q: 35, before: "Sabin's other vaccine uses induced ", after: " to stop the ability of the virus to attack the spinal cord. After administration, it too creates antibodies." },
                            { q: 36, before: "After large-scale ", after: ", the IPV was declared safe and was used for vaccination in the US. Salk was a hero, despite one outbreak of polio due to a contaminated vaccine. The cheaper OPV became more popular over time. Both vaccines are effective, though there is a possible and unlikely danger of an unsafe " },
                            { q: 37, before: "", after: " developing in the IPV." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 38-40",
                        instructions: [
                            "Answer the questions below.",
                            "Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the text for each answer.",
                            "Write your answers in boxes 38-40 on your answer sheet."
                        ],
                        items: [
                            { q: 38, before: "What group is especially prone to the paralysis caused by polio?", after: "" },
                            { q: 39, before: "What proportion of people did not survive treatment in the iron lung without effective chest treatment?", after: "" },
                            { q: 40, before: "Who have been the most significant cause for the reintroduction of polio into countries where it was previously eradicated?", after: "" }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            27: ["E"], 28: ["C"], 29: ["F"], 30: ["B"], 31: ["G"], 32: ["A"], 33: ["D"],
            34: ["formalin"], 35: ["mutation"], 36: ["trials"], 37: ["variant"],
            38: ["Children"], 39: ["70%", "70"], 40: ["Refugees"]
        }
    },

    // ============================================================
    // TEST — TV Addiction 1 (Academic Reading Test 17, Part 2)
    // ============================================================
    {
        title: "TV Addiction 1",
        passages: [
            {
                part: 1,
                title: "TV Addiction 1",
                html: `
          <p><em>You should spend about 20 minutes on Questions 14-26, which are based on Reading Passage below.</em></p>
          <p><strong>A</strong> The amount of time people spend watching television is astonishing. On average, individuals in the industrialized world devote three hours a day to the pursuit – fully half of their leisure time, and more than on any single activity save work and sleep. At this rate, someone who lives to 75 would spend nine years in front of the tube. To some commentators, this devotion means simply that people enjoy TV and make a conscious decision to watch it. But if that is the whole story, why do so many people experience misgivings about how much they view? In Gallup polls in 1992 and 1999, two out of five adult respondents and seven out of 10 teenagers said they spent too much time watching TV. Other surveys have consistently shown that roughly 10 percent of adults calls themselves TV addicts.</p>
          <p><strong>B</strong> To study people's reactions to TV, researchers have undertaken laboratory experiments in which they have monitored the brain waves (using an electroencephalograph, or EEG) to track behavior and emotion in the normal course of life, as opposed to the artificial conditions of the lab. Participants carried a beeper, and we signaled them six to eight times a day, at random, over the period of a week; whenever they heard the beep, they wrote down what they were doing and how they were feeling using a standardized scorecard.</p>
          <p><strong>C</strong> As one might expect, people who were watching TV when we beeped them reported feeling relaxed and passive. The EEG studies similarly show less mental stimulation, as measured by alpha brain-wave production, during viewing than during reading. What is more surprising is that the sense of relaxation ends when the set is turned off, but the feelings of passivity and lowered alertness continue. Survey participants say they have more difficulty concentrating after viewing than before. In contrast, they rarely indicate such difficulty after reading. After playing sports or engaging in hobbies, people report improvements in mood. After watching TV, people's moods are about the same or worse than before. That may be because of viewers' vague learned sense that they will feel less relaxed if they stop viewing. So they tend not to turn the set-off. Viewing begets more viewing which is the same as the experience of habit-forming drugs. Thus, the irony of TV: people watch a great deal longer than they plan to, even though prolonged viewing is less rewarding. In our ESM studies the longer people sat in front of the set, the less satisfaction they said they derived from it. For some, a twinge of unease or guilt that they aren't doing something more productive may also accompany and depreciate the enjoyment of prolonged viewing. Researchers in Japan, the U.K. and the U.S. have found that this guilt occurs much more among middle-class viewers than among less affluent ones.</p>
          <p><strong>D</strong> What is it about TV that has such a hold on us? In part, the attraction seems to spring from our biological 'orienting response.' First described by Ivan Pavlov in 1927, the orienting response is our instinctive visual or auditory reaction to any sudden or novel stimulus. It is part of our evolutionary heritage, a built-in sensitivity to movement and potential predatory threats. In 1986 Byron Reeves of Stanford University, Esther Thorson of the University of Missouri and their colleagues began to study whether the simple formal features of television – cuts, edits, zooms, pans, sudden noises – activate the orienting response, thereby keeping attention on the screen. By watching how brain waves were affected by formal features, the researchers concluded that these stylistic tricks can indeed trigger involuntary responses and 'derive their attentional value through the evolutionary significance of detecting movement... It is the form, not the content, of television that is unique.'</p>
          <p><strong>E</strong> The natural attraction to television's sound and the light starts very early in life. Dafna Lemish of Tel Aviv University has described babies at six to eight weeks attending to television. We have observed slightly older infants who, when lying on their backs on the floor, crane their necks around 180 degrees to catch what light through yonder window breaks. This inclination suggests how deeply rooted the orienting response is.</p>
          <p><strong>F</strong> The Experience Sampling Method permitted us to look closely at most every domain of everyday life: working, eating, reading, talking to friends, playing a sport, and so on. We found that heavy viewers report feeling significantly more anxious and less happy than light viewers do in unstructured situations, such as doing nothing, daydreaming or waiting in line. The difference widens when the viewer is alone. Subsequently, Robert D. Mcllwraith of the University of Manitoba extensively studies those who called themselves TV addicts on surveys. On a measure called the Short Imaginal Processes Inventory (SIPI), he found that the self-described addicts are more easily bored and distracted and have poorer attentional control than the non-addicts. The addicts said they used TV to distract themselves from unpleasant thoughts and to fill time. Other studies over the years have shown that heavy viewers are less likely to participate in community activities and sports and are more likely to be obese than moderate viewers or non-viewers.</p>
          <p><strong>G</strong> More than 25 years ago psychologist Tannis M. MacBeth Williams of the University of British Columbia studied a mountain community that had no television until cable finally arrived. Over time, both adults and children in the town became less creative in problem-solving, less able to persevere at tasks, and less tolerant of unstructured time.</p>
          <p><strong>H</strong> Nearly 40 years ago Gary A. Steiner of the University of Chicago collected fascinating individual accounts of families whose set had broken. In experiments, families have volunteered or been paid to stop viewing, typically for a week or a month. Some fought, verbally and physically. In a review of these could-turkey studies, Charles Winick of the City University of New York concluded: 'The first three or four days for most persons were the worst, even in many homes where the viewing was minimal and where there were other ongoing activities. In over half of all the households, during these first few days of loss, the regular routines were disrupted, family members had difficulties in dealing with the newly available time, anxiety and aggressions were expressed.... By the second week, a move toward adaptation to the situation was common.' Unfortunately, researchers have yet to flesh out these anecdotes; no one has systematically gathered statistics on the prevalence of these withdrawal symptoms.</p>
          <p><strong>I</strong> Even though TV does seem to meet the criteria for substance dependence, not all researchers would go so far as to call TV addictive. Mcllwraith said in 1988 that 'displacement of other activities by television may be socially significant but still fall short of the clinical requirement of significant impairment.' He argued that a new category of 'TV addiction' may not be necessary if heavy viewing stems from conditions such as depression and social phobia. Nevertheless, whether or not we formally diagnose someone as TV-dependent, millions of people sense that they cannot readily control the amount of television they watch.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "tfng",
                        heading: "Questions 14-18",
                        instructions: [
                            "Do the following statements agree with the claims of the writer in Reading Passage?",
                            "In boxes 14-18 on your answer sheet, write",
                            "<strong>TRUE</strong> — if the statement is true",
                            "<strong>FALSE</strong> — if the statement is false",
                            "<strong>NOT GIVEN</strong> — if the information is not given in the passage"
                        ],
                        items: [
                            { q: 14, statement: "Study shows that males are more likely to be addicted to TV than females." },
                            { q: 15, statement: "Greater improvements in mood are experienced after watching TV than playing sports." },
                            { q: 16, statement: "TV addiction works in similar ways as drugs." },
                            { q: 17, statement: "It is reported that people's satisfaction is in proportion to the time they spend watching TV." },
                            { q: 18, statement: "Middle-class viewers are more likely to feel guilty about watching TV than the poor." }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 19-23",
                        boxTitle: "Statements",
                        instructions: [
                            "Look at the following researchers and the list of statements below.",
                            "Match each researcher with the correct statement.",
                            "Write the correct letter, <strong>A-H</strong>, in boxes 19-23 on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "Audiences would get hypnotized from viewing too much television." },
                            { value: "B", label: "People have been sensitive to the TV signals since a younger age." },
                            { value: "C", label: "People are less likely to accomplish their work with television." },
                            { value: "D", label: "A handful of studies have attempted to study other types of media addiction." },
                            { value: "E", label: "The addictive power of television could probably minimize the problems." },
                            { value: "F", label: "Various media formal characters stimulate people's reaction on the screen." },
                            { value: "G", label: "People who believe themselves to be TV addicts are less likely to join in the group activities." },
                            { value: "H", label: "It is hard for people to accept life without a TV at the beginning." }
                        ],
                        items: [
                            { q: 19, statement: "Byron Reeves and Esther Thorson" },
                            { q: 20, statement: "Dafna Lemish" },
                            { q: 21, statement: "Robert D. Mcllwraith" },
                            { q: 22, statement: "Tannis M. MacBeth Williams" },
                            { q: 23, statement: "Charles Winick" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Questions 24-26",
                        instructions: [
                            "Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.",
                            "Write your answers in boxes 24-26 on your answer sheet."
                        ],
                        items: [
                            {
                                q: 24,
                                stem: "People in the industrialized world",
                                options: [
                                    { value: "A", label: "devote ten hours watching TV on average" },
                                    { value: "B", label: "spend more time on TV than other entertainment" },
                                    { value: "C", label: "call themselves TV addicts." },
                                    { value: "D", label: "enjoy working best." }
                                ]
                            },
                            {
                                q: 25,
                                stem: "When compared with light viewers, heavy viewers",
                                options: [
                                    { value: "A", label: "like playing sport more than reading." },
                                    { value: "B", label: "feel relaxed after watching TV." },
                                    { value: "C", label: "spend more time in daydreaming." },
                                    { value: "D", label: "are more easily bored while waiting in line." }
                                ]
                            },
                            {
                                q: 26,
                                stem: "Which of the following statements is true about the family experiment?",
                                options: [
                                    { value: "A", label: "Not all subjects participate in the experiment for free." },
                                    { value: "B", label: "There has been complete gathered data." },
                                    { value: "C", label: "People are prevented from other activities during the experiment." },
                                    { value: "D", label: "People can not adapt to the situation until the end." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            14: ["NOT GIVEN"], 15: ["FALSE"], 16: ["TRUE"], 17: ["FALSE"], 18: ["TRUE"],
            19: ["F"], 20: ["B"], 21: ["G"], 22: ["C"], 23: ["H"],
            24: ["B"], 25: ["D"], 26: ["A"]
        }
    },

    // ============================================================
    // TEST — The Power of Nothing
    // ============================================================
    {
        title: "The Power of Nothing",
        passages: [
            {
                part: 1,
                title: "The Power of Nothing",
                html: `
          <p><em>Geoff Watts, New Scientist (May 26th, 2001)</em></p>
          <p><strong>A</strong> Want to devise a new form of alternative medicine? No problem. Here is the recipe. Be warm, sympathetic, reassuring and enthusiastic. Your treatment should involve physical contact, and each session with your patients should last at least half an hour. Encourage your patients to take an active part in their treatment and understand how their disorders relate to the rest of their lives. Tell them that their own bodies possess the true power to heal. Make them pay you out of their own pockets. Describe your treatment in familiar words, but embroidered with a hint of mysticism: energy fields, energy flows, energy blocks, meridians, forces, auras, rhythms and the like. Refer to the knowledge of an earlier age: wisdom carelessly swept aside by the rise and rise of blind, mechanistic science. Oh, come off it, you are saying. Something invented off the top of your head could not possibly work, could it?</p>
          <p><strong>B</strong> Well yes, it could – and often well enough to earn you a living. A good living if you are sufficiently convincing, or better still, really believe in your therapy. Many illnesses get better on their own, so if you are lucky and administer your treatment at just the right time you will get the credit. But that's only part of it. Some of the improvement really would be down to you. Your healing power would be the outcome of a paradoxical force that conventional medicine recognizes but remains oddly ambivalent about: the placebo effect.</p>
          <p><strong>C</strong> Placebos are treatments that have no direct effect on the body, yet still, work because the patient has faith in their power to heal. Most often the term refers to a dummy pill, but it applies just as much to any device or procedure, from a sticking plaster to a crystal to an operation. The existence of the placebo effect implies that even quackery may confer real benefits, which is why any mention of placebo is a touchy subject for many practitioners of complementary and alternative medicine, who are likely to regard it as tantamount to a charge of charlatanism. In fact, the placebo effect is a powerful part of all medical care, orthodox or otherwise, though its role is often neglected or misunderstood.</p>
          <p><strong>D</strong> One of the great strengths of CAM may be its practitioners' skill in deploying the placebo effect to accomplish real healing. "Complementary practitioners are miles better at producing non-specific effects and good therapeutic relationships," says Edzard Ernst, professor of CAM at Exeter University. The question is whether CAM could be integrated into conventional medicines, as some would like, without losing much of this power.</p>
          <p><strong>E</strong> At one level, it should come as no surprise that our state of mind can influence our physiology: anger opens the superficial blood vessels of the face; sadness pumps the tear glands. But exactly how placebos work their medical magic is still largely unknown. Most of the scant research done so far has focused on the control of pain because it's one of the commonest complaints and lends itself to experimental study. Here, attention has turned to the endorphins, morphine-like neurochemicals known to help control pain.</p>
          <p><strong>F</strong> But exactly how placebos work their medical magic is still largely unknown. Most of the scant research to date has focused on the control of pain because it's one of the commonest complaints and lends itself to experimental study. Here, attention has turned to the endorphins, natural counterparts of morphine that are known to help control pain. "Any of the neurochemicals involved in transmitting pain impulses or modulating them might also be involved in generating the placebo response," says Don Price, an oral surgeon at the University of Florida who studies the placebo effect in dental pain.</p>
          <p><strong>G</strong> "But endorphins are still out in front." That case has been strengthened by the recent work of Fabrizio Benedetti of the University of Turin, who showed that the placebo effect can be abolished by a drug, naloxone, which blocks the effects of endorphins. Benedetti induced pain in human volunteers by inflating a blood-pressure cuff on the forearm. He did this several times a day for several days, using morphine each time to control the pain. On the final day, without saying anything, he replaced the morphine with a saline solution. This still relieved the subjects' pain: a placebo effect. But when he added naloxone to the saline the pain relief disappeared. Here was direct proof that placebo analgesia is mediated, at least in part, by these natural opiates.</p>
          <p><strong>H</strong> Still, no one knows how belief triggers endorphin release, or why most people can't achieve placebo pain relief simply by willing it. Though scientists don't know exactly how placebos work, they have accumulated a fair bit of knowledge about how to trigger the effect. A London rheumatologist found, for example, that red dummy capsules made more effective painkillers than blue, green or yellow ones. Research on American students revealed that blue pills make better sedatives than pink, a colour more suitable for stimulants. Even branding can make a difference: if Aspro or Tylenol is what you like to take for a headache, their chemically identical generic equivalents may be less effective.</p>
          <p><strong>I</strong> It matters, too, how the treatment is delivered. Decades ago, when the major tranquilliser chlorpromazine was being introduced, a doctor in Kansas categorised his colleagues according to whether they were keen on it, openly skeptical of its benefits, or took a "let's try and see" attitude. His conclusion: the more enthusiastic the doctor, the better the drug performed. And this year Ernst surveyed published studies that compared doctors' bedside manners. The studies turned up one consistent finding: "Physicians who adopt a warm, friendly and reassuring manner," he reported, "are more effective than those whose consultations are formal and do not offer reassurance."</p>
          <p><strong>J</strong> Warm, friendly and reassuring are precisely CAM's strong suits, of course. Many of the ingredients of that opening recipe – the physical contact, the generous swathes of time, the strong hints of supernormal healing power – are just the kind of thing likely to impress patients. It's hardly surprising, then, that complementary practitioners are generally best at mobilising the placebo effect, says Arthur Kleinman, professor of social anthropology at Harvard University.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1-6",
                        boxTitle: "Descriptions",
                        instructions: [
                            "Use the information in the passage to match the deed (listed <strong>A-H</strong>) with people below.",
                            "Write the appropriate letters <strong>A-H</strong> in boxes 1-6 on your answer sheet.",
                            "<em>NB</em> You may use any letter more than once."
                        ],
                        options: [
                            { value: "A", label: "Should easily be understood" },
                            { value: "B", label: "Should improve by itself" },
                            { value: "C", label: "Should not involve any mysticism" },
                            { value: "D", label: "Ought to last a minimum length of time." },
                            { value: "E", label: "Needs to be treated at the right time." },
                            { value: "F", label: "Should give more recognition." },
                            { value: "G", label: "Can earn valuable money." },
                            { value: "H", label: "Do not rely on any specific treatment" }
                        ],
                        items: [
                            { q: 1, statement: "Appointments with an alternative practitioner" },
                            { q: 2, statement: "An alternative practitioner's description of the treatment" },
                            { q: 3, statement: "An alternative practitioner who has faith in what he does" },
                            { q: 4, statement: "The illness of patients convinced of alternative practice" },
                            { q: 5, statement: "Improvements of patients receiving alternative practice" },
                            { q: 6, statement: "Conventional medical doctors (who is aware of placebo)" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Questions 7-9",
                        instructions: [
                            "Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.",
                            "Write your answers in boxes 7-9 on your answer sheet."
                        ],
                        items: [
                            {
                                q: 7,
                                stem: "In the fifth paragraph, the writer uses the example of anger and sadness to illustrate that:",
                                options: [
                                    { value: "A", label: "People's feeling could affect their physical behaviour" },
                                    { value: "B", label: "Scientists don't understand how the mind influences the body." },
                                    { value: "C", label: "Research on the placebo effect is very limited" },
                                    { value: "D", label: "How placebo achieves its effect is yet to be understood." }
                                ]
                            },
                            {
                                q: 8,
                                stem: "Research on pain control attracts most of the attention because",
                                options: [
                                    { value: "A", label: "Scientists have discovered that endorphins can help to reduce pain." },
                                    { value: "B", label: "Only a limited number of researchers gain relevant experience" },
                                    { value: "C", label: "Pain reducing agents might also be involved in the placebo effect." },
                                    { value: "D", label: "Patients often experience pain and like to complain about it" }
                                ]
                            },
                            {
                                q: 9,
                                stem: "Fabrizio Benedetti's research on endorphins indicates that",
                                options: [
                                    { value: "A", label: "They are widely used to regulate pain." },
                                    { value: "B", label: "They can be produced by willful thoughts" },
                                    { value: "C", label: "They can be neutralized by introducing naloxone." },
                                    { value: "D", label: "Their pain-relieving effects do not last long enough." }
                                ]
                            }
                        ]
                    },
                    {
                        type: "tfng",
                        heading: "Questions 10-14",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage?",
                            "In boxes 10-14 on your answer sheet, write",
                            "<strong>TRUE</strong> — if the statement is true",
                            "<strong>FALSE</strong> — if the statement is false",
                            "<strong>NOT GIVEN</strong> — if the information is not given in the passage"
                        ],
                        items: [
                            { q: 10, statement: "There is enough information for scientists to fully understand the placebo effect." },
                            { q: 11, statement: "A London based researcher discovered that red pills should be taken off the market." },
                            { q: 12, statement: "People's preference for brands would also have an effect on their healing." },
                            { q: 13, statement: "Medical doctors have a range of views of the newly introduced drug of chlorpromazine." },
                            { q: 14, statement: "Alternative practitioners are seldom known for applying the placebo effect." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["D"], 2: ["A"], 3: ["G"], 4: ["B"], 5: ["H"], 6: ["F"],
            7: ["A"], 8: ["D"], 9: ["C"],
            10: ["FALSE"], 11: ["NOT GIVEN"], 12: ["TRUE"], 13: ["TRUE"], 14: ["FALSE"]
        }
    },

    // ============================================================
    // TEST — Hunting Perfume in Madagascar
    // ============================================================
    {
        title: "Hunting Perfume in Madagascar",
        passages: [
            {
                part: 1,
                title: "Hunting Perfume in Madagascar",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage below.</em></p>
          <p><strong>A</strong> Ever since the unguentari plied their trade in ancient Rome, perfumers have to keep abreast of changing fashions. These days they have several thousand ingredients to choose from when creating new scents, but there is always demand for new combinations. The bigger the "palette" of smells, the better the perfumer's chance of creating something fresh and appealing. Even with everyday products such as shampoo and soap, kitchen cleaners and washing powders, consumers are becoming increasingly fussy. And many of today's fragrances have to survive tougher treatment than ever before, resisting the destructive power of bleach or a high temperature wash cycle. Chemists can create new smells from synthetic molecules, and a growing number of the odours on the perfumer's palette are artificial. But nature has been in the business far longer.</p>
          <p><strong>B</strong> The island of Madagascar is an evolutionary hot spot; 85% of its plants are unique, making it an ideal source for novel fragrances. Last October, Quest International, a company that develops fragrances for everything from the most delicate perfumes to cleaning products, sent an expedition to Madagascar in pursuit of some of nature's most novel fragrances. With some simple technology, borrowed from the pollution monitoring industry, and a fair amount of ingenuity, the perfume hunters bagged 20 promising new aromas in the Madagascan rainforest. Each day the team set out from their "hotel"—a wooden hut lit by kerosene lamps, and trailed up and down paths and animal tracks, exploring the thick vegetation up to 10 meters on either side of the trail. Some smells came from obvious places, often big showy flowers within easy reach- Others were harder to pin down. "Often it was the very small flowers that were much more interesting," says Clery. After the luxuriance of the rainforest, the little-known island of Nosy Hara was a stark, dry place geologically and biologically very different from the mainland, "Apart from two beaches, the rest of the island is impenetrable, except by hacking through the bush," says Clery. One of the biggest prizes here was a sweet-smelling sap weeping from the gnarled branches of some ancient shrubby trees in the parched interior. So far no one has been able to identify the plant.</p>
          <p><strong>C</strong> With most flowers or fruits, the hunters used a technique originally designed to trap and identify air pollutants. The technique itself is relatively simple. A glass bell jar or flask is fitted over the flower. The fragrance molecules are trapped in this "headspace" and can be extracted by pumping the air out over a series of filters which absorb different types of volatile molecules. Back home in the laboratory, the molecules are flushed out of the filters and injected into a gas chromatograph for analysis. If it is impossible to attach the headspace gear, hunters fix an absorbent probe close to the source of the smell. The probe looks something like a hypodermic syringe, except that the 'needle' is made of silicone rubber which soaks up molecules from the air. After a few hours, the hunters retract the rubber needle and seal the tube, keeping the odour molecules inside until they can be injected into the gas chromatograph in the laboratory.</p>
          <p><strong>D</strong> Some of the most promising fragrances were those given off by resins that oozed from the bark of trees. Resins are the source of many traditional perfumes, including frankincense and myrrh. The most exciting resin came from a Calophyllum tree, which produces a strongly scented medicinal oil. The sap of this Calophyllum smelt rich and aromatic, a little like church incense. But it also smelt of something the fragrance industry has learnt to live without castoreum a substance extracted from the musk glands of beavers and once a key ingredient in many perfumes. The company does not use animal products any longer, but it was wonderful to find a tree with an animal smell.</p>
          <p><strong>E</strong> The group also set out from the island to capture the smell of coral reefs. Odors that conjure up sun kissed seas are highly sought after by the perfume industry. "From the ocean, the only thing we have is seaweed, and that has a dark and heavy aroma. We hope to find something unique among the corals," says Clery. The challenge for the hunters was to extract a smell from water rather than air. This was an opportunity to try Clery's new "aquaspace" apparatus a set of filters that work underwater. On Nosy Hara, jars were fixed over knobs of coral about 2 meters down and water pumped out over the absorbent filters. So what does coral smell like? "It's a bit like lobster and crab," says Clery. The team's task now is to recreate the best of the captured smells. First they must identify the molecules that make up each fragrance. Some ingredients may be quite common chemicals. But some may be completely novel, or they may be too complex or expensive to make in the lab. The challenge then is to conjure up the fragrances with more readily available materials. "We can avoid the need to import plants from the rainforest by creating the smell with a different set of chemicals from those in the original material," says Clery. "If we get it right, you can sniff the sample and it will transport you straight back to the moment you smelt it in the rainforest."</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1-5",
                        boxTitle: "Paragraphs",
                        instructions: [
                            "The reading passage has paragraphs <strong>A-E</strong>.",
                            "Which paragraphs contain the following details?",
                            "Write the correct letter, <strong>A-E</strong>, in boxes 1-5 on your answer sheet.",
                            "<em>NB</em> You may use any letter more than once."
                        ],
                        options: [
                            { value: "A", label: "A" }, { value: "B", label: "B" }, { value: "C", label: "C" },
                            { value: "D", label: "D" }, { value: "E", label: "E" }
                        ],
                        items: [
                            { q: 1, statement: "One currently preferred spot to pick up plants for novel finding" },
                            { q: 2, statement: "A new task seems to be promising yet producing limited finding in fragrance source" },
                            { q: 3, statement: "The demanding conditions for fragrance to endure" },
                            { q: 4, statement: "A substitute for substance no longer available to the perfume manufacture" },
                            { q: 5, statement: "Description of an outdoor expedition on land chasing new fragrances" }
                        ]
                    },
                    {
                        type: "tfng",
                        heading: "Questions 6-10",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage?",
                            "In boxes 6-10 on your answer sheet, write",
                            "<strong>TRUE</strong> — if the statement is true",
                            "<strong>FALSE</strong> — if the statement is false",
                            "<strong>NOT GIVEN</strong> — if the information is not given in the passage"
                        ],
                        items: [
                            { q: 6, statement: "Manufacturers can choose to use synthetic odors for the perfume nowadays" },
                            { q: 7, statement: "Madagascar is chosen to be a place for hunting plants which are rare in other parts of the world" },
                            { q: 8, statement: "Capturing the smell is one of the most important things for creating new aromas" },
                            { q: 9, statement: "The technique the hunters used to trap fragrance molecules is totally out of their ingenuity" },
                            { q: 10, statement: "Most customers prefer the perfume made of substance extracted from the musk glands of animals" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 11-13",
                        instructions: [
                            "Complete the sentences below.",
                            "Write <strong>ONE WORD ONLY</strong> from the passage for each answer.",
                            "Write your answers in boxes 11-13 on your answer sheet."
                        ],
                        items: [
                            { q: 11, before: "The fragrance molecules are trapped in a glass bell jar or flask in the ", after: "." },
                            { q: 12, before: "The air is pumped out over a series of ", after: " which absorb different types of volatile molecules." },
                            { q: 13, before: "An absorbent probe has a ", after: " made of silicone rubber which soaks up molecules from the air." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["B"], 2: ["E"], 3: ["A"], 4: ["D"], 5: ["B"],
            6: ["TRUE"], 7: ["TRUE"], 8: ["NOT GIVEN"], 9: ["FALSE"], 10: ["NOT GIVEN"],
            11: ["headspace"], 12: ["filters"], 13: ["needle"]
        }
    },
    // ============================================================
    // TEST 29 — Mrs. Carlill and the Carbolic Smoke Ball
    // ============================================================
    {
        title: "Mrs. Carlill and the Carbolic Smoke Ball",
        passages: [
            {
                part: 1,
                title: "Mrs. Carlill and the Carbolic Smoke Ball",
                html: `
          <p><em>You should spend about 20 minutes on Questions 1–13, which are based on the Reading Passage below.</em></p>
          <p>On 14 January 1892, Queen Victoria’s grandson Prince Albert Victor, second in line to the British throne, died from flu. He had succumbed to the third and most lethal wave of the Russian flu pandemic sweeping the world. The nation was shocked. The people mourned. Albert was relegated to a footnote in history.</p>
          <p>Three days later, London housewife Louisa Carlill went down with flu. She was shocked. For two months, she had inhaled thrice daily from a carbolic smoke ball, a preventive measure guaranteed to fend off flu - if you believed the advert. Which she did. And why shouldn’t she when the Carbolic Smoke Ball Company had promised to cough up £100 for any customer who fell ill? Unlike Albert, Louisa recovered, claimed her £100 and set in train events that would win her lasting fame.</p>
          <p>It started in the spring of 1889. The first reports of a flu epidemic came from Russia. By the end of the year, the world was in the grip of the first truly global flu pandemic. The disease came in waves, once a year for the next four years, and each worse than the last.</p>
          <p>Whole cities came to a standstill. London was especially hard-hit. As the flu reached each annual peak, normal life stopped. The postal service ground to a halt, trains stopped running, banks closed. Even courts stopped sitting for lack of judges. At the height of the third wave in 1892, 200 people were buried every day at just one London cemetery. This flu was far more lethal than previous epidemics, and those who recovered were left weak, depressed, and often unfit for work. It was a picture repeated across the continent.</p>
          <p>Accurate figures for the number of the sick and dead were few and far between but Paris, Berlin and Vienna all reported a huge upsurge in deaths. The newspapers took an intense interest in the disease, not just because of the scale of it but because of who it attacked. Most epidemics carried off the poor and weak, the old and frail. This flu was cutting as great a swathe through the upper classes, dealing death to the rich and famous, and the young and fit.</p>
          <p>The newspaper-reading public was fed a daily diet of celebrity victims. The flu had worked its way through the Russian imperial family and invaded the royal palaces of Europe. It carried off the Dowager Empress of Germany and the second son of the king of Italy, as well as England’s future king. Aristocrats and politicians, poets and opera singers, bishops and cardinals - none escaped the attentions of the Russian flu.</p>
          <p>The public grew increasingly fearful. The press might have been overdoing the doom and gloom, but their hysterical coverage had exposed one terrible fact.</p>
          <p>The medical profession had no answer to the disease. This flu, which might not even have begun in Russia, was a mystery. What caused it and how did it spread? No one could agree on anything.</p>
          <p>By now, the theory that micro-organisms caused disease was gaining ground, but no one had identified an organism responsible for flu (and wouldn’t until 1933). In the absence of a germ, many clung to the old idea of bad airs, or miasmas, possibly stirred by some great physical force - earthquakes, perhaps, or electrical phenomena in the upper atmosphere, even a passing comet.</p>
          <p>Doctors advised people to eat well avoiding “unnecessary assemblies”, and if they were really worried, to stuff cotton wool up their nostrils. If they fell ill, they should rest, keep warm and eat a nourishing diet of “milk, eggs and farinaceous puddings”. Alcohol figured prominently among the prescriptions: one eminent English doctor suggested champagne, although he conceded “brandy in considerable quantities has sometimes been given with manifest advantages”. French doctors prescribed warm alcoholic drinks, arguing that they never saw an alcoholic with flu. Their prescription had immediate results: over a three-day period, 1,200 of the 1,500 drunks picked up on the streets of Paris claimed they were following doctor’s orders.</p>
          <p>Some doctors gave drugs to ease symptoms - quinine for fever, salicin for headache, heroin for an “incessant cough”. But nothing in the pharmacy remotely resembled a cure. Not surprisingly, people looked elsewhere for help. Hoping to cash in while the pandemic lasted, purveyors of patent medicines competed for the public’s custom with ever more outrageous advertisements. One of the most successful was the Carbolic Smoke Ball Company.</p>
          <p>The carbolic smoke ball was a hollow rubber ball, 5 centimetres across, with a nozzle covered by gauze. Inside was a powder treated with carbolic acid, or phenol. The idea was to clutch it close to the nose and squeeze gently, inhaling deeply from the emerging cloud of pungent powder. This, the company claimed, would disinfect the mucous membranes, curing any condition related to “taking cold”. In the summer of 1890, sales were steady at 300 smoke balls a month. In January 1891, the figure skyrocketed to 1,500.</p>
          <p>Eager to exploit the public’s mounting panic, the Carbolic Smoke Ball Company made increasingly extravagant claims. On 13 November 1892, its latest advert in the Pall Mall Gazette caught the eye of south London housewife Louisa Carlill. “Carbolic Smoke Ball,” it declared, “will positively cure colds, coughs, asthma, bronchitis, hoarseness, influenza, croup, whooping cough ...”. And the list went on. But it was the next part Mrs. Carlill found compelling. “A £100 reward will be paid by the Carbolic Smoke Ball Company to any person who contracts the increasing epidemic influenza, colds or any disease caused by taking cold, after having used the carbolic smoke ball according to the printed directions supplied with each ball. £1,000 is deposited with the Alliance bank, Regent Street, showing our sincerity in the matter.”</p>
          <p>Mrs. Carlill hurried off to buy a smoke ball, price 10 shillings. After carefully reading the instructions, she diligently dosed herself thrice daily until 17 January - when she fell ill.</p>
          <p>On 20 January, Louisa’s husband wrote to the Carbolic Smoke Ball Company. Unfortunately for them, Mr. Carlill happened to be a solicitor. His wife, he wrote, had seen their advert and bought a smoke ball on the strength of it. She had followed the instructions to the letter, and yet now - as their doctor could confirm - she had flu.</p>
          <p>There was no reply. But £100 was not a sum to be sneezed at. Mr. Carlill persisted. The company resisted. Louisa recovered and sued. In June, Mr. Justice Hawkins found in Mrs. Carlill’s favour. The company’s main defence was that adverts were mere “puffery” and only an idiot would believe such extravagant claims. Judge Hawkins pointed out that adverts were not aimed at the wise and thoughtful, but at the credulous and weak. A vendor who made a promise “must not be surprised if occasionally he is held to his promise”.</p>
          <p>Carbolic appealed. In December, three lord justices considered the case. Carbolic’s lawyers tried several lines of defence. But in the end, the case came down to a single matter: not whether the remedy was useless, or whether Carbolic had committed fraud, but whether its advert constituted a contract - which the company had broken. A contract required agreement between two parties, argued Carbolic’s lawyers. What agreement had Mrs. Carlill made with them?</p>
          <p>There were times, the judges decided, when a contract could be one-sided. The advert had made a very specific offer to purchasers: protection from flu or £100. By using the smoke ball as instructed, Mrs. Carlill had accepted that offer. The company might just have wriggled out of it if it hadn’t added the bit about the £1,000 deposit. That, said the judges, gave buyers reason to believe Carbolic meant what it said. “It seems to me that if a person chooses to make extravagant promises of this kind, he probably does so because it pays him to make them, and, if he has made them, the extravagance of the promises is no reason in law why he should not be bound by them,” pronounced Lord Justice Bowen.</p>
          <p>Louisa got her £100. The case established the principle of the unilateral contract and is frequently cited today.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "tfng",
                        heading: "Questions 1–4",
                        instructions: [
                            "Do the following statements agree with the claims of the writer in Reading Passage?",
                            "In boxes 1–4 on your answer sheet write",
                            "<strong>TRUE</strong> if the statement agrees with the information",
                            "<strong>FALSE</strong> if the statement contradicts the information",
                            "<strong>NOT GIVEN</strong> if there is no information on this"
                        ],
                        items: [
                            { q: 1, statement: "Cities rather than rural areas were badly affected by the pandemic flu." },
                            { q: 2, statement: "At the time of the flu pandemic, people didn’t know the link between micro-organisms and illnesses." },
                            { q: 3, statement: "People used to believe flu was caused by miasmas." },
                            { q: 4, statement: "Flu prescriptions often contained harmful ingredients." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 5–8",
                        instructions: [
                            "Complete the diagram below.",
                            "Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.",
                            "Write your answers in boxes 5–8 on your answer sheet."
                        ],
                        items: [
                            { q: 5, before: "The nozzle is covered by ", after: "." },
                            { q: 6, before: "The part covered by gauze is the ", after: "." },
                            { q: 7, before: "Inside the ball is a ", after: " treated with carbolic acid." },
                            { q: 8, before: "The carbolic smoke ball is a hollow ", after: "." }
                        ]
                    },
                    {
                        type: "matching-table",
                        heading: "Questions 9–12",
                        boxTitle: "People",
                        instructions: [
                            "Look at the following people (Questions 9–12) and the list of statements.",
                            "Match each person with the correct statement.",
                            "Write the correct letter <strong>A–F</strong> in boxes 9–12 on your answer sheet."
                        ],
                        options: [
                            { value: "A", label: "Filed a complaint which was never responded to" },
                            { value: "B", label: "Broke the contract made with Carbolic Smoke Ball Company" },
                            { value: "C", label: "Initiated a legal case" },
                            { value: "D", label: "Described the audience of advertisement" },
                            { value: "E", label: "Claimed that most advertisements are fraudulent" },
                            { value: "F", label: "Treated advertisement as a type of contract" }
                        ],
                        items: [
                            { q: 9, statement: "Mrs. Carlill" },
                            { q: 10, statement: "Mrs. Carlill’s husband" },
                            { q: 11, statement: "Judge Hawkins" },
                            { q: 12, statement: "Lord Justice Bowen" }
                        ]
                    },
                    {
                        type: "mcq",
                        heading: "Question 13",
                        instructions: [
                            "Choose the correct letter, <strong>A, B, C</strong> or <strong>D</strong>.",
                            "Write your answer in box 13 on your answer sheet."
                        ],
                        items: [
                            {
                                q: 13,
                                stem: "Why is Mrs. Carlill’s case often cited in present-day court trials?",
                                options: [
                                    { value: "A", label: "It proved the untrustworthiness of advertisements." },
                                    { value: "B", label: "It established the validity of one-sided contract." },
                                    { value: "C", label: "It explained the nature of contract." },
                                    { value: "D", label: "It defended the rights of consumers." }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["NOT GIVEN"],
            2: ["FALSE"],
            3: ["TRUE"],
            4: ["NOT GIVEN"],
            5: ["gauze"],
            6: ["nozzle"],
            7: ["powder"],
            8: ["rubber ball"],
            9: ["C"],
            10: ["A"],
            11: ["D"],
            12: ["F"],
            13: ["B"]
        }
    },

    // ============================================================
    // TEST 30 — Western Immigration of Canada
    // ============================================================
    {
        title: "Western Immigration of Canada",
        passages: [
            {
                part: 1,
                title: "Western Immigration of Canada",
                html: `
          <p><strong>A</strong></p>
          <p>By the mid-1870s Canada wanted an immigrant population of agricultural settlers established in the West. No urban centres existed on the prairies in the 1870s, and rural settlement was the focus of the federal government’s attention. The western rural settlement was desired, as it would provide homesteads for the sons and daughters of eastern farmers, as eastern agricultural land filled to capacity. As well, eastern farmers and politicians viewed western Canada, with its broad expanses of unpopulated land, as a prime location for expanding Canada’s agricultural output, especially in terms of wheat production to serve the markets of eastern Canada.</p>
          <p><strong>B</strong></p>
          <p>To bolster Canada’s population and agricultural output, the federal government took steps to secure western land. The Dominion of Canada purchased Rupert’s Land from the Hudson’s Bay Company in 1870. In 1872, the federal government enacted the Dominion Lands Act. This act enabled settlers to acquire 160 acres of free land, as long as settlers remained on their land for a period of three years, made certain minor improvements to the land, and paid a $10.00 registration fee. The Canadian government also created a Mounted Police Force in 1873. The Mounties journeyed west to secure the area for future settlers. By 1876 the NWMP had established themselves in the West. The major posts included Swan River, Fort Saskatchewan, Fort Calgary, Fort Walsh and Fort Macleod. All of these initiatives attracted a number of eastern-Canadian settlers, as well as European and American immigrants, to Canada’s West, and particularly to the area of Manitoba.</p>
          <p><strong>C</strong></p>
          <p>The surest way to protect Canadian territory, and to achieve the secondary goal for joining British Columbia to the rest of the country, was to import large numbers of Eastern Canadian and British settlers. Settling the West also made imperative the building of a transcontinental railway. The railway would work to create an east-west economy, in which western Canada would feed the growing urban industrial population of the east, and in return become a market for eastern Canadian manufactured goods.</p>
          <p><strong>D</strong></p>
          <p>Winnipeg became the metropolis of the West during this period. Winnipeg’s growth before 1900 was the result of a combination of land speculation, growth of housing starts, and the federal government’s solution in 1881 of Winnipeg as a major stop along the CPR. This decision culminated in a land boom between 1881 and 1883 which resulted in the transformation of hamlets like Portage la Prairie and Brandon into towns, and a large increase in Manitoba’s population. Soon, Winnipeg stood at the junction of three transcontinental railway lines which employed thousands in rail yards. Winnipeg also became the major processor of agricultural products for the surrounding hinterland.</p>
          <p><strong>E</strong></p>
          <p>The majority of settlers to Winnipeg, and the surrounding countryside, during this early period, were primarily Protestant English-speaking settlers from Ontario and the British Isles. These settlers established Winnipeg upon a British-Ontarian ethos which came to dominate the society’s social, political, and economic spirit. This British-Ontarian ethnic homogeneity, however, did not last very long. Increasing numbers of foreign immigrants, especially from Austria-Hungary and Ukraine soon added a new ethnic element to the recent British, the older First Nation Métis, and Selkirk’s settler population base. Settling the West with (in particular) Eastern Canadians and British immigrant offered the advantage of safeguarding the 49th parallel from the threat of American take-over, had not the Minnesota legislature passed a resolution which provided for the annexation of the Red River district. The Red River in 1870 was the most important settlement on the Canadian prairies. It contained 11,963 inhabitants of whom 9,700 were Métis and First Nations. But neighbouring Minnesota already had a population of over 100,000.</p>
          <p><strong>F</strong></p>
          <p>Not all of the settlers who came to western Canada in the 1880s, however, desired to remain there. In the 1870s and 1880s, economic depression kept the value of Canada’s staple exports low, which discouraged many from permanent settlement in the West. Countries including Brazil, Argentina, Australia, New Zealand and the United States competed with Canada for immigrants. Many immigrants and thousands of Canadians chose to settle in the accessible and attractive American frontier. Canada before 1891 has been called “a huge demographic railway station” where thousands of men, women, and children were constantly going and coming, and where the number of departures invariably exceeded that of arrivals.”</p>
          <p><strong>G</strong></p>
          <p>By 1891 Eastern Canada had its share of both large urban centres and problems associated with city life. While the booming economic centres of Toronto and Montreal were complete with electricity and telephones in the cities’ wealthiest areas by the turn of the century, slum conditions characterised the poorest areas like the district known as ‘the Ward’ in Toronto. Chickens and pigs ran through the streets; privy buckets spilled onto backyards and lanes creating cesspools in urban slums. These same social reformers believed that rural living, in stark contrast to urban, would lead to a healthy, moral, and charitable way of life. Social reformers praised the ability of fresh air, hard work, and open spaces for ‘Canadianizing’ immigrants. Agricultural pursuits were seen as especially fitting for attaining this ‘moral’ and family-oriented way of life, in opposition to the single male-dominated atmosphere of the cities. Certainly, agriculture played an important part in the Canadian economy in 1891. One-third of the workforce worked on farms.</p>
          <p><strong>H</strong></p>
          <p>The Canadian government presented Canada’s attractions to potential overseas migrants in several ways. The government offered free or cheap land to potential agriculturists. As well, the government established agents and/or agencies for the purpose of attracting emigrants overseas. Assisted passage schemes, bonuses and commissions to agents and settlers and pamphlets also attracted some immigrants to Canada. The most influential form of attracting others to Canada, however, remained the letters home written by emigrants already in Canada. Letters from trusted friends and family members. Letters home often contained exaggerations of the ‘wonder of the new world.’ Migrant workers and settlers already in Canada did not want to disappoint, or worry, their family and friends at home. Embellished tales of good fortune and happiness often succeeded in encouraging others to come.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "matching-table",
                        heading: "Questions 1–7",
                        boxTitle: "List of Headings",
                        instructions: [
                            "The Reading Passage has eight paragraphs <strong>A–H</strong>.",
                            "Choose the correct heading for paragraphs <strong>B–H</strong> from the list below.",
                            "Write the correct number, <strong>i–xii</strong>, in boxes 1–7 on your answer sheet.",
                            "Example: Paragraph A — ix"
                        ],
                        options: [
                            { value: "i", label: "Not all would stay in Canada forever" },
                            { value: "ii", label: "Government’s safeguard in the West" },
                            { value: "iii", label: "Eastern Canada is full" },
                            { value: "iv", label: "Built-up to the new infrastructure" },
                            { value: "v", label: "An exclusive British domination in Ontario established ever since" },
                            { value: "vi", label: "Ethnics and language make-up" },
                            { value: "vii", label: "Pursuing a pure life" },
                            { value: "viii", label: "Police recruited from mid-class families" },
                            { value: "ix", label: "Demand of western immigration" },
                            { value: "x", label: "Early major urban development of the West" },
                            { value: "xi", label: "Attracting urban environment" },
                            { value: "xii", label: "Advertising of Western Canada" }
                        ],
                        items: [
                            { q: 1, statement: "Paragraph B" },
                            { q: 2, statement: "Paragraph C" },
                            { q: 3, statement: "Paragraph D" },
                            { q: 4, statement: "Paragraph E" },
                            { q: 5, statement: "Paragraph F" },
                            { q: 6, statement: "Paragraph G" },
                            { q: 7, statement: "Paragraph H" }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 8–13",
                        instructions: [
                            "Complete the following summary of the paragraphs of Reading Passage.",
                            "Using <strong>NO MORE THAN TWO WORDS</strong> from the Reading Passage for each answer.",
                            "Write your answers in boxes 8–13 on your answer sheet."
                        ],
                        items: [
                            { q: 8, before: "With the saturation of Eastern Canada, the Western rural area would supply ", after: " for the descendants of easterners." },
                            { q: 9, before: "Politicians also declared that the West had potential to increase ", after: " of Canada." },
                            { q: 10, before: "This was especially in terms of ", after: " production to serve the markets of eastern Canada." },
                            { q: 11, before: "First, the government bought land from a private ", after: ", and legally offered a certain area to people who stayed for a qualifying period of time." },
                            { q: 12, before: "Then, a mounted ", after: " was formed to secure the land." },
                            { q: 13, before: "However, the best way to protect citizens was to build a ", after: " to transport the migrants and goods between the West and the East." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["ii"],
            2: ["iv"],
            3: ["x"],
            4: ["vi"],
            5: ["i"],
            6: ["vii"],
            7: ["xii"],
            8: ["Homesteads"],
            9: ["agricultural output"],
            10: ["wheat"],
            11: ["Company"],
            12: ["Police Force"],
            13: ["transcontinental railway"]
        }
    },

    // ============================================================
    // TEST 31 — Communication in Science
    // ============================================================
    {
        title: "Communication in Science",
        passages: [
            {
                part: 1,
                title: "Communication in Science",
                html: `
          <p><strong>A</strong></p>
          <p>Science plays an increasingly significant role in people’s lives, making the faithful communication of scientific developments more important than ever. Yet such communication is fraught with challenges that can easily distort discussions, leading to unnecessary confusion and misunderstandings.</p>
          <p><strong>B</strong></p>
          <p>Some problems stem from the esoteric nature of current research and the associated difficulty of finding sufficiently faithful terminology. Abstraction and complexity are not signs that a given scientific direction is wrong, as some commentators have suggested, but are instead a tribute to the success of human ingenuity in meeting the increasingly complex challenges that nature presents. They can, however, make communication more difficult. But many of the biggest challenges for science reporting arise because in areas of evolving research, scientists themselves often only partly understand the full implications of any particular advance or development. Since that dynamic applies to most of the scientific developments that directly affect people’s lives – global warming, cancer research, diet studies – learning how to overcome it is critical to spurring a more informed scientific debate among the broader public.</p>
          <p><strong>C</strong></p>
          <p>Ambiguous word choices are the source of some misunderstandings. Scientists often employ colloquial terminology, which they then assign a specific meaning that is impossible to fathom without proper training. The term “relativity,” for example, is intrinsically misleading. Many interpret the theory to mean that everything is relative and there are no absolutes. Yet although the measurements any observer makes depend on his coordinates and reference frame, the physical phenomena he measures have an invariant description that transcends that observer’s particular coordinates. Einstein’s theory of relativity is really about finding an invariant description of physical phenomena. True, Einstein agreed with the idea that his theory would have been better named “Invariantentheorie.” But the term “relativity” was already entrenched at the time for him to change.</p>
          <p><strong>D</strong></p>
          <p>“The uncertainty principle” is another frequently abused term. It is sometimes interpreted as a limitation on observers and their ability to make measurements.</p>
          <p><strong>E</strong></p>
          <p>But it is not about intrinsic limitations on any one particular measurement; it is about the inability to precisely measure particular pairs of quantities simultaneously. The first interpretation is perhaps more engaging from a philosophical or political perspective. It’s just not what the science is about.</p>
          <p><strong>F</strong></p>
          <p>Even the word “theory” can be a problem. Unlike most people, who use the word to describe a passing conjecture that they often regard as suspect, physicists have very specific ideas in mind when they talk about theories. For physicists, theories entail a definite physical framework embodied in a set of fundamental assumptions about the world that lead to a specific set of equations and predictions – ones that are borne out by successful predictions. Theories aren’t necessarily shown to be correct or complete immediately. Even Einstein took the better part of a decade to develop the correct version of his theory of general relativity. But eventually both the ideas and the measurements settle down and theories are either proven correct, abandoned or absorbed into other, more encompassing theories.</p>
          <p><strong>G</strong></p>
          <p>“Global warming” is another example of problematic terminology. Climatologists predict more drastic fluctuations in temperature and rainfall – not necessarily that every place will be warmer. The name sometimes subverts the debate, since it lets people argue that their winter was worse, so how could there be global warming? Clearly “global climate change” would have been a better name. But not all problems stem solely from poor word choices. Some stem from the intrinsically complex nature of much of modern science. Science sometimes transcends this limitation: remarkably, chemists were able to detail the precise chemical processes involved in the destruction of the ozone layer, making the evidence that chlorofluorocarbon gases (Freon, for example) were destroying the ozone layer indisputable.</p>
          <p><strong>H</strong></p>
          <p>A better understanding of the mathematical significance of results and less insistence on a simple story would help to clarify many scientific discussions. For several months, Harvard was tortured by empty debates over the relative intrinsic scientific abilities of men and women. One of the more amusing aspects of the discussion was that those who believed in the differences and those who didn’t used the same evidence about gender-specific special ability. How could that be? The answer is that the data shows no substantial effects. Social factors might account for these tiny differences, which in any case have an unclear connection to scientific ability. Not much of a headline when phrased that way, is it? Each type of science has its own source of complexity and potential for miscommunication. Yet there are steps we can take to improve public understanding in all cases. The first would be to inculcate greater understanding and acceptance of indirect scientific evidence. The information from an unmanned space mission is no less legitimate than the information from one in which people are on board.</p>
          <p><strong>I</strong></p>
          <p>This doesn’t mean questioning an interpretation, but it also doesn’t mean equating indirect evidence with blind belief, as people sometimes suggest. Second, we might need different standards for evaluating science with urgent policy implications than research with purely theoretical value. When scientists say they are not certain about their predictions, it doesn’t necessarily mean they’ve found nothing substantial. It would be better if scientists were more open about the mathematical significance of their results and if the public didn’t treat math as quite so scary; statistics and errors, which tell us the uncertainty in a measurement, give us the tools to evaluate new developments fairly.</p>
          <p><strong>J</strong></p>
          <p>But most important, people have to recognize that science can be complex. If we accept only simple stories, the description will necessarily be distorted. When advances are subtle or complicated, scientists should be willing to go the extra distance to give proper explanations and the public should be more patient about the truth. Even so, some difficulties are unavoidable. Most developments reflect work in progress, so the story is complex because no one yet knows the big picture.</p>
        `
            }
        ],
        sections: [
            {
                part: 1,
                groups: [
                    {
                        type: "mcq",
                        heading: "Questions 1–5",
                        instructions: [
                            "Choose the correct letter <strong>A, B, C</strong> or <strong>D</strong>.",
                            "Write your answers in boxes 1–5 on your answer sheet."
                        ],
                        items: [
                            {
                                q: 1,
                                stem: "Why is faithful science communication important?",
                                options: [
                                    { value: "A", label: "Science plays an increasingly significant role in people’s lives." },
                                    { value: "B", label: "Science is fraught with challenges the public are interested in." },
                                    { value: "C", label: "The nature of complexity in science communication leads to confusion." },
                                    { value: "D", label: "Scientific inventions are more important than ever before." }
                                ]
                            },
                            {
                                q: 2,
                                stem: "What reason does the author give for the biggest challenges for science reporting?",
                                options: [
                                    { value: "A", label: "Phenomena such as global warming, cancer research and diet studies are too complex." },
                                    { value: "B", label: "Scientists themselves often only partly understand the Theory of Evolution." },
                                    { value: "C", label: "Scientists do not totally comprehend the meaning of certain scientific evolution." },
                                    { value: "D", label: "Scientists themselves often only partly understand the esoteric communication nature." }
                                ]
                            },
                            {
                                q: 3,
                                stem: "According to the third paragraph, the reference to the term and example of “theory of relativity” is to demonstrate",
                                options: [
                                    { value: "A", label: "theory of relativity is about an invariant physical phenomenon." },
                                    { value: "B", label: "common people may be misled by the inaccurate choice of scientific phrase." },
                                    { value: "C", label: "the term “relativity” is designed to be misleading to the public." },
                                    { value: "D", label: "everything is relative and there are no absolutes." }
                                ]
                            },
                            {
                                q: 4,
                                stem: "Which one is a good example of appropriate word choice?",
                                options: [
                                    { value: "A", label: "Scientific theory for the uncertainty principle" },
                                    { value: "B", label: "Phenomenon of global warming" },
                                    { value: "C", label: "The importance of ozone layer" },
                                    { value: "D", label: "Freon’s destructive process on the environment" }
                                ]
                            },
                            {
                                q: 5,
                                stem: "What is a surprising finding of the Harvard debates in the passage?",
                                options: [
                                    { value: "A", label: "There are equal intrinsic scientific abilities of men and women." },
                                    { value: "B", label: "The proof applied by both sides seemed to be of no big difference." },
                                    { value: "C", label: "Scientific data usually shows no substantial figures to support a debated idea." },
                                    { value: "D", label: "Social factors might have a clear connection to scientific ability." }
                                ]
                            }
                        ]
                    },
                    {
                        type: "tfng",
                        heading: "Questions 6–9",
                        instructions: [
                            "Do the following statements agree with the information given in Reading Passage?",
                            "In boxes 6–9 on your answer sheet write",
                            "<strong>YES</strong> if the statement agrees with the information",
                            "<strong>NO</strong> if the statement contradicts the information",
                            "<strong>NOT GIVEN</strong> if there is no information on this"
                        ],
                        items: [
                            { q: 6, statement: "“Global warming” scientifically refers to greater fluctuations in temperature and rainfall rather than a universal temperature rise." },
                            { q: 7, statement: "More media coverage of “global warming” would help the public to recognize the phenomenon." },
                            { q: 8, statement: "Harvard debates should focus more on female scientists and male scientists." },
                            { q: 9, statement: "Public understanding and acceptance of indirect scientific evidence in all cases would lead to confusion." }
                        ]
                    },
                    {
                        type: "gap",
                        heading: "Questions 10–14",
                        instructions: [
                            "Complete the following summary of the paragraphs of Reading Passage.",
                            "Using <strong>NO MORE THAN TWO WORDS</strong> from the Reading Passage for each answer.",
                            "Write your answers in boxes 10–14 on your answer sheet."
                        ],
                        items: [
                            { q: 10, before: "Science communication is fraught with challenges. Firstly, ambiguous ", after: " are the source of some misunderstandings." },
                            { q: 11, before: "Common people without proper training do not understand clearly or deeply a specific scientific meaning via the ", after: " scientists often employ." },
                            { q: 12, before: "Besides, the measurements any ", after: " makes cannot be confined to describe in a constant" },
                            { q: 13, before: "", after: ", yet the phenomenon can be." },
                            { q: 14, before: "What is more, even the word “theory” can be a problem. Theories aren’t necessarily shown to be correct or complete immediately since scientists often evolve better versions of specific theories; a good example can be the theory of ", after: "." }
                        ]
                    }
                ]
            }
        ],
        ANSWER_KEY: {
            1: ["A"],
            2: ["C"],
            3: ["B"],
            4: ["D"],
            5: ["B"],
            6: ["YES"],
            7: ["NOT GIVEN"],
            8: ["NOT GIVEN"],
            9: ["NO"],
            10: ["word choices"],
            11: ["colloquial terminology"],
            12: ["observer"],
            13: ["invariant description"],
            14: ["general relativity"]
        }
    },
  // ============================================================
  // TEST — The Sun: Our Nearest Star
  // ============================================================
  {
    title: "The Sun: Our Nearest Star",
    passages: [
      {
        part: 1,
        title: "The Sun: Our Nearest Star",
        html: `
          <p><em>You should spend about 20 minutes on Questions 14–26, which are based on the Reading Passage below.</em></p>
          <p>The Sun is our nearest star and it dominates our sky from a distance of ‘only’ 150 million kilometres. Even though it appears to be the same size as the full Moon, it is over 400,000 times brighter, and dictates when we have night and day here on Earth. The Sun is the largest body in the Solar System and it is also the most massive, containing 99.9 per cent of the total mass of all the planets, moons, dwarf planets, asteroids and comets combined. This concentration of mass, and the accompanying gravitational force, is why the Sun sits at the very centre of the Solar System, pulling all the other bodies in orbit around it. We are entirely dependent on the Sun for the habitability of our planet, as it provides us with the energy in the form of heat and light that we require to survive. But it also brings many potential hazards, from the continual flow of hazardous radiation that always lurks just beyond Earth’s atmosphere, to the sporadic and violent space weather that threatens much of our society’s infrastructure.</p>
          <p>Given that the Sun has a volume that is over a million times that of the Earth, yet contains only 330,000 times the mass, we can immediately deduce that its average density is far lower than that of a terrestrial planet. Indeed, the average density is about the same as that of water, and less than a quarter of the density of the Earth. The Sun is made mainly of the lightest elements, hydrogen (the Sun’s fuel) and helium, in a gaseous form.</p>
          <p>The source of the Sun’s energy remained a mystery until Einstein’s 1905 special theory of relativity highlighted the promise of efficient nuclear fusion. For nuclear fusion to occur, matter needs to be under conditions of tremendous pressure and of extreme heat, so that the electric repulsion can be overcome, and the nuclei get close enough to smash into each other. It was the English astronomer Sir Arthur Eddington who realised in the 1920’s that the physical conditions within the core of the Sun were extreme enough to permit the necessary nuclear reactions. The Sun converts 600,000 million kilograms of hydrogen to helium every second to sustain its phenomenal energy output.</p>
          <p>The Sun’s core is approximately 15,000,000 degrees Celsius and is the site of the nuclear fusion. The energy from the core travels outwards through the radiation zone by the transfer of the energy from one molecule to another. Heated gases move the energy from the radiation zone through to the convection zone, where the gases start to cool and this causes them to sink back down to the radiation zone. Outside the convection zone is the photosphere, which is approximately 500 kilometres thick and is the surface layer of the sun. Beyond, there is a thin layer of gas that surrounds the photosphere called the chromosphere. Finally, the corona is another layer of gas that extends a long way outside of the Sun.</p>
          <p>Observations of more evolved objects around us in the galaxy lead to our understanding of the eventual fate of the Sun. The Sun has sufficient hydrogen at the right temperature and density to continue creating helium for a further six billion years. Then, the supply of fuel, and all possibility of future nuclear reactions, will eventually be exhausted. By this point, the Sun will appear very different from how it does today. It will have become a red giant; a much cooler, redder and far more bloated version of itself, with an atmosphere puffed so large as to swallow up the planets Mercury and Venus and make conditions pretty uncomfortable on Earth. Eventually, the outer envelope of the red giant will be lost, expanding away to form a planetary nebula. The remaining hot core of the star will be left exposed as a white dwarf, which will slowly cool and fade over billions of years, until finally fading into a cold, dark and dense ball of compressed matter.</p>
          <p>From time to time, there are eruptions of matter from the Sun. The magnetic energy in an exceptionally powerful sun flare can heat and speed up a huge cloud of charged particles to form a coronal mass ejection. The cloud produced by such an eruption escapes away out into interplanetary space, but can cause concern if directed towards Earth. When a coronal mass ejection reaches the Earth, it rattles the Earth’s magnetic field to generate what is known as a ‘geomagnetic storm’. The occurrence of the flare gives us advance notice of this event and that it will arrive between 15 hours and a couple of days later, depending on how fast it’s moving, and how clear the passage between Sun and Earth is. The major effect for humans of a coronal mass ejection is on our satellites, which can be seriously damaged. Power cuts on Earth can also take place.</p>
          <p>Although we may now understand the basics of the Sun, we remain unable to reliably predict everything about it. There is much still to understand and learn about it, and it seems the more intensely it is studied, the more questions there are to answer!</p>
        `
      }
    ],
    sections: [
      {
        part: 1,
        groups: [
          {
            type: "gap",
            heading: "Questions 14–19",
            instructions: [
              "Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
              "Write your answers in boxes <strong>14–19</strong> on your answer sheet."
            ],
            items: [
              { q: 14, before: "The Sun is the Earth’s ", after: "." },
              { q: 15, before: "The Sun contains 99.9% of the entire ", after: " of our solar system." },
              { q: 16, before: "The Sun gives us the energy we need to survive, but also danger in the form of dangerous ", after: " and powerful space weather." },
              { q: 17, before: "In spite of its size, the Sun has a low average ", after: "." },
              { q: 18, before: "Nuclear fusion requires extreme ", after: " and heat, which the Sun can provide." },
              { q: 19, before: "The Sun’s energy is created from nuclear fusion changing ", after: " to helium." }
            ]
          },
          {
            type: "gap",
            heading: "Questions 20–22",
            instructions: [
              "Write <strong>NO MORE THAN THREE WORDS</strong> from the text for each answer.",
              "Write your answers in boxes <strong>20–22</strong> on your answer sheet."
            ],
            items: [
              { q: 20, before: "The layer through which energy travels outwards from the core by transfer from one molecule to another is the ", after: "." },
              { q: 21, before: "The surface layer of the Sun, approximately 500 kilometres thick, is the ", after: "." },
              { q: 22, before: "The outermost layer of gas extending a long way outside the Sun is the ", after: "." }
            ]
          },
          {
            type: "gap",
            heading: "Questions 23–26",
            instructions: [
              "Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> from the text for each answer.",
              "Write your answers in boxes <strong>23–26</strong> on your answer sheet."
            ],
            items: [
              { q: 23, before: "For how much longer will the Sun continue to operate nuclear fusion?", after: "" },
              { q: 24, before: "What will the outer section of the Sun become following the red giant stage?", after: "" },
              { q: 25, before: "What part of a powerful Sun flare heats up and accelerates the particles that make up a coronal mass ejection?", after: "" },
              { q: 26, before: "What can the geomagnetic storms caused by coronal mass ejections cause on Earth?", after: "" }
            ]
          }
        ]
      }
    ],
    ANSWER_KEY: {
      14: ["nearest star"],
      15: ["mass"],
      16: ["radiation"],
      17: ["density"],
      18: ["pressure"],
      19: ["hydrogen"],
      20: ["the radiation zone", "radiation zone"],
      21: ["the photosphere", "photosphere"],
      22: ["the corona", "corona"],
      23: ["6 billion years", "six billion years"],
      24: ["planetary nebula", "a planetary nebula"],
      25: ["magnetic energy", "the magnetic energy"],
      26: ["power cuts"]
    }
  },

  // ============================================================
  // TEST — The Exploration of Mars
  // ============================================================
  {
    title: "The Exploration of Mars",
    passages: [
      {
        part: 1,
        title: "The Exploration of Mars",
        html: `
          <p><em>You should spend about 20 minutes on Questions 1–14, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong>. In 1877, Giovanni Schiaparelli, an Italian astronomer, made drawings and maps of the Martian surface that suggested strange features. The images from telescopes at this time were not as sharp as today’s. Schiaparelli said he could see a network of lines, or canali. In 1894, an American astronomer, Percival Lowell, made a series of observations of Mars from his own observatory at Flagstaff, Arizona, USA. Lowell was convinced a great network of canals had been dug to irrigate crops for the Martian race! He suggested that each canal had fertile vegetation on either side, making them noticeable from Earth. Drawings and globes he made show a network of canals and oases all over the planet.</p>
          <p><strong>B</strong>. The idea that there was intelligent life on Mars gained strength in the late 19th century. In 1898, H.G. Wells wrote a science fiction classic, The War of the Worlds about an invading force of Martians who try to conquer Earth. They use highly advanced technology (advanced for 1898) to crush human resistance in their path. In 1917, Edgar Rice Burroughs wrote the first in a series of 11 novels about Mars. Strange beings and rampaging Martian monsters gripped the public’s imagination. A radio broadcast by Orson Welles on Halloween night in 1938 of The War of the Worlds caused widespread panic across America. People ran into the streets in their pyjamas-millions believed the dramatic reports of a Martian invasion.</p>
          <p><strong>C</strong>. Probes are very important to our understanding of other planets. Much of our recent knowledge comes from these robotic missions into space. The first images sent back from Mars came from Mariner 4 in July 1965. They showed a cratered and barren landscape, more like the surface of our moon than Earth. In 1969, Mariners 6 and 7 were launched and took 200 photographs of Mars’s southern hemisphere and pole on fly-by missions. But these showed little more information. In 1971, Mariner 9’s mission was to orbit the planet every 12 hours. In 1975, The USA sent two Viking probes to the planet, each with a lander and an orbiter. The Landers had sampler arms to scoop up Martian rocks and did experiments to try and find signs of life. Although no life was found, they sent back the first colour pictures of the planet’s surface and atmosphere from pivoting cameras.</p>
          <p><strong>D</strong>. The Martian meteorite found in Earth aroused doubts to the above analysis. ALH84001 meteorite was discovered in December 1984 in Antarctica, by members of the ANSMET project; The sample was ejected from Mars about 17 million years ago and spent 11,000 years in or on the Antarctic ice sheets. Composition analysis by NASA revealed a kind of magnetite that on Earth, is only found in association with certain microorganisms. Some structures resembling the mineralized casts of terrestrial bacteria and their appendages fibrils or by-products occur in the rims of carbonate globules and pre-terrestrial aqueous alteration regions. The size and shape of the objects is consistent with Earthly fossilized nanobacteria but the existence of nanobacteria itself is still controversial.</p>
          <p><strong>E</strong>. In 1965, the Mariner 4 probe discovered that Mars had no global magnetic field that would protect the planet from potentially life-threatening cosmic radiation and solar radiation; observations made in the late 1990s by the Mars Global Surveyor confirmed this discovery. Scientists speculate that the lack of magnetic shielding helped the solar wind blow away much of Mars’s atmosphere over the course of several billion years. After mapping cosmic radiation levels at various depths on Mars, researchers have concluded that any life within the first several meters of the planet’s surface would be killed by lethal doses of cosmic radiation. In 2007, it was calculated that DNA and RNA damage by cosmic radiation would limit life on Mars to depths greater than 7.5 metres below the planet’s surface. Therefore, the best potential locations for discovering life on Mars may be at subsurface environments that have not been studied yet. Disappearance of the magnetic field may played an significant role in the process of Martian climate change. According to the valuation of the scientists, the climate of Mars gradually transits from warm and wet to cold and dry after magnetic field vanished.</p>
          <p><strong>F</strong>. NASA’s recent missions have focused on another question: whether Mars held lakes or oceans of liquid water on its surface in the ancient past. Scientists have found hematite, a mineral that forms in the presence of water. Thus, the mission of the Mars Exploration Rovers of 2004 was not to look for present or past life, but for evidence of liquid water on the surface of Mars in the planet’s ancient past. Liquid water, necessary for Earth life and for metabolism as generally conducted by species on Earth, cannot exist on the surface of Mars under its present low atmospheric pressure and temperature, except at the lowest shaded elevations for short periods and liquid water does not appear at the surface itself. In March 2004, NASA announced that its rover Opportunity had discovered evidence that Mars was, in the ancient past, a wet planet. This had raised hopes that evidence of past life might be found on the planet today. ESA confirmed that the Mars Express orbiter had directly detected huge reserves of water ice at Mars’s south pole in January 2004.</p>
          <p><strong>G</strong>. Researchers from the Center of Astrobiology (Spain) and the Catholic University of the North in Chile have found an ‘oasis’ of microorganisms two meters below the surface of the Atacama Desert, SOLID, a detector for signs of life which could be used in environments similar to subsoil on Mars. “We have named it a ‘microbial oasis’ because we found microorganisms developing in a habitat that was rich in rock salt and other highly hygroscopic compounds that absorb water” explained Victor Parro, researcher from the Center of Astrobiology in Spain. “If there are similar microbes on Mars or remains in similar conditions to the ones we have found in Atacama, we could detect them with instruments like SOLID” Parro highlighted.</p>
          <p><strong>H</strong>. Even more intriguing, however, is the alternative scenario by Spanish scientists: If those samples could be found to that use DNA, as Earthly life does, as their genetic code. It is extremely unlikely that such a highly specialised, complex molecule like DNA could have evolved separately on the two planets, indicating that there must be a common origin for Martian and Earthly life. Life based on DNA first appeared on Mars and then spread to Earth, where it then evolved into the myriad forms of plants and creatures that exist today. If this was found to be the case, we would have to face the logical conclusion: we are all Martian. If not, we would continue to search the life of signs.</p>
        `
      }
    ],
    sections: [
      {
        part: 1,
        groups: [
          {
            type: "matching-table",
            heading: "Questions 1–6",
            boxTitle: "Paragraphs",
            instructions: [
              "The reading passage has eight paragraphs <strong>A–H</strong>.",
              "Which paragraph contains the following information?",
              "Write the correct letter <strong>A–H</strong> in boxes <strong>1–6</strong> on your answer sheet."
            ],
            options: [
              { value: "A", label: "A" }, { value: "B", label: "B" },
              { value: "C", label: "C" }, { value: "D", label: "D" },
              { value: "E", label: "E" }, { value: "F", label: "F" },
              { value: "G", label: "G" }, { value: "H", label: "H" }
            ],
            items: [
              { q: 1, statement: "Martian evidence on Earth" },
              { q: 2, statement: "Mars and Earth may share the same life origin" },
              { q: 3, statement: "Certain agricultural construction was depicted specifically" },
              { q: 4, statement: "The project which aims to identify life under similar condition of Mars" },
              { q: 5, statement: "Mars had experienced terrifying climate transformation" },
              { q: 6, statement: "Attempts in scientific investigation to find liquid water" }
            ]
          },
          {
            type: "mcq",
            heading: "Questions 7–10",
            instructions: [
              "Choose the correct letter, <strong>A, B, C or D</strong>.",
              "Write your answers in boxes <strong>7–10</strong> on your answer sheet."
            ],
            items: [
              {
                q: 7,
                stem: "How did Percival Lowell describe Mars in this passage?",
                options: [
                  { value: "A", label: "Perfect observation location is in Arizona." },
                  { value: "B", label: "Canals of Mars are broader than that of the earth." },
                  { value: "C", label: "Dedicated water and agriculture trace is similar to the earth." },
                  { value: "D", label: "Actively moving Martian lives are found by observation." }
                ]
              },
              {
                q: 8,
                stem: "How did people change their point of view towards Mars from 19th century?",
                options: [
                  { value: "A", label: "They experienced Martian attack." },
                  { value: "B", label: "They learned knowledge of Mars through some literature works." },
                  { value: "C", label: "They learned new concept by listening famous radio program." },
                  { value: "D", label: "They attended lectures given by famous writers." }
                ]
              },
              {
                q: 9,
                stem: "In 1960s, which information is correct about Mars by a number of Probes sent to the space?",
                options: [
                  { value: "A", label: "It has a landscape full of rock and river" },
                  { value: "B", label: "It was not as vivid as the earth" },
                  { value: "C", label: "It contained the same substance as in the moon" },
                  { value: "D", label: "It had different images from the following probes" }
                ]
              },
              {
                q: 10,
                stem: "What is the implication of project proceeded by technology called SOLID in Atacama Desert?",
                options: [
                  { value: "A", label: "It could be employed to explore organisms under Martian condition." },
                  { value: "B", label: "This technology could NOT be used to identify life on similar condition of Mars." },
                  { value: "C", label: "Atacama Desert is the only place that has a suitable environment for organisms." },
                  { value: "D", label: "Life had not yet been found yet in Atacama Desert." }
                ]
              }
            ]
          },
          {
            type: "tfng",
            heading: "Questions 11–14",
            instructions: [
              "Do the following statements agree with the information given in Reading Passage?",
              "In boxes <strong>11–14</strong> on your answer sheet, write",
              "<strong>TRUE</strong> if the statement is true",
              "<strong>FALSE</strong> if the statement is false",
              "<strong>NOT GIVEN</strong> if the information is not given in the passage"
            ],
            items: [
              { q: 11, statement: "Technology of Martian creature was superior than what human had at that time in every field according to The War of the Worlds." },
              { q: 12, statement: "Proof sent by Viking probes has not been challenged yet." },
              { q: 13, statement: "Analysis on meteorite from Mars found a substance which is connected to some germs." },
              { q: 14, statement: "According to Victor Parro, their project will be deployed on Mars after they identified DNA substance on earth." }
            ]
          }
        ]
      }
    ],
    ANSWER_KEY: {
      1: ["D"],
      2: ["H"],
      3: ["A"],
      4: ["G"],
      5: ["E"],
      6: ["F"],
      7: ["C"],
      8: ["B"],
      9: ["B"],
      10: ["B"],
      11: ["NOT GIVEN"],
      12: ["FALSE"],
      13: ["TRUE"],
      14: ["NOT GIVEN"]
    }
  },  // ============================================================
  // TEST — Using Mathematics to Secure Our Money
  // ============================================================
  {
    title: "Using Mathematics to Secure Our Money",
    passages: [
      {
        part: 1,
        title: "Using Mathematics to Secure Our Money",
        html: `
          <p><em>You should spend about 20 minutes on Questions 27–40, which are based on the Reading Passage below.</em></p>
          <p><strong>A</strong> Up until very recently people's wealth, mostly coins and jewels, was kept safe under lock and key. Rich medieval families would keep a strongbox with a large key, both of which were carefully hidden in different places. Later the box may have been kept in a bank. In either case, potential thieves would need to find both the box and the key. A similar principle was used for sending secret diplomatic and military messages. The messages were written in code with both the sender and the receiver having the key to the code. Thus, while the message could be discovered its meaning could only be found if the 'key' was also known. And so began a long-running battle between code-makers who tried to make better keys and code-breakers who sought ways of finding them.</p>
          <p><strong>B</strong> Nowadays, cryptography is central to how our money is kept secure, even though we may not be aware of it. Our money is no longer in a tangible form, but in the form of information kept with our banks. To keep everyone involved happy, the messages initiated by our plastic cards have to be sent and received safely and the entire operation must be carried out with a high level of confidentiality and security.</p>
          <p><strong>C</strong> On a practical level, it is clear that the work of code-makers has been introduced into our daily financial lives. Our credit cards have 16-digit numbers on the front and a 3-digit number on the back. They also contain a 'chip' that can do all sorts of mysterious operations with these numbers. Finally, we also have a Personal Identification Number which we all need to memorize. All these numbers form a type of cryptographic key. However, as we shall see, modern cryptosystems are very different in the way the keys are used.</p>
          <p><strong>D</strong> The main feature of the traditional systems was that only one key was needed by both the sender and the receiver to understand the message. However, the main problem was that the key itself needed to be communicated to both parties before they could use it. Obviously a major security risk. A very different approach was developed in the 1970s, based on a different way of using the keys. Now the main idea is that the typical user, let us call him Amir, has two keys; a 'public key' and a 'private key'. The public key is used to encrypt messages that other people wish to send to Amir, and the private key is used by Amir to decrypt these messages. The security of the system is based on keeping Amir's private key secret.</p>
          <p><strong>E</strong> This system of public-key cryptography, known as RSA – from the names of the developers (Ronald Rivest, Adi Shamir and Leonard Adleman) – was developed in the late 1970s and is based on a collection of several mathematical algorithms. The first is a process that allows the user, Amir, to calculate two numerical keys: private and public, based on two prime numbers. To complete the RSA system, two more algorithms are then needed: one for encrypting messages and one for decrypting them.</p>
          <p><strong>F</strong> The effectiveness of RSA depends on two things. It is efficient, because the encryption and decryption algorithms used by participants are easy, in a technical sense they can be made precise. On the other hand, it is believed to be secure, because no one has found an easy way of decrypting the encrypted message without knowing Amir's private key.</p>
          <p><strong>G</strong> When the RSA system was first written about in Scientific American, the strength of the system was shown by challenging the readers to find the prime factors – the two original numbers – of a certain number with 129 digits. It took 17 years to solve this problem, using the combined efforts of over 600 people. So clearly it is a very secure system. Using mathematics in this way, scientists and technologists have enabled us to keep our money as secure as the rich medieval barons with their strong boxes and hidden keys.</p>
        `
      }
    ],
    sections: [
      {
        part: 1,
        groups: [
          {
            type: "gap",
            heading: "Questions 33–36",
            instructions: [
              "Complete the notes below.",
              "Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.",
              "Write your answers in boxes <strong>33–36</strong> on your answer sheet."
            ],
            items: [
              {
                q: 33,
                before: "Through the use of cryptography, banks keep money ",
                after: "."
              },
              {
                q: 34,
                before: "The way credit cards work is an example of the influence of ",
                after: "."
              },
              {
                q: 35,
                before: "Cryptosystems developed in the 1970s relied on 2 keys: the ",
                after: " and the"
              },
              {
                q: 36,
                before: "",
                after: "."
              }
            ]
          },
          {
            type: "tfng",
            heading: "Questions 37–40",
            instructions: [
              "Do the following statements agree with the views of the writer in Reading Passage 3?",
              "In boxes <strong>37–40</strong> on your answer sheet, write",
              "<strong>YES</strong> if the statement agrees with the views of the writer",
              "<strong>NO</strong> if the statement contradicts the views of the writer",
              "<strong>NOT GIVEN</strong> if it is impossible to say what the writer thinks about this"
            ],
            items: [
              { q: 37, statement: "Online banking makes most people nervous." },
              { q: 38, statement: "The way keys are used in modern cryptography is quite different from the past." },
              { q: 39, statement: "The main problem with traditional cryptography systems is that neither party can decode the message." },
              { q: 40, statement: "The RSA system represents the most secure cryptography we are ever likely to develop." }
            ]
          }
        ]
      }
    ],
    ANSWER_KEY: {
      33: ["secure", "safe"],
      34: ["code markers", "code-makers", "code makers"],
      35: ["public", "public key"],
      36: ["private key", "private"],
      37: ["NOT GIVEN"],
      38: ["YES"],
      39: ["NO"],
      40: ["NOT GIVEN"]
    }
  },
];