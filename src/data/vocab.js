// src/data/vocab.js
export const TOPICS = {
  acad:   { name: 'Academic & Research',    icon: '🎓', color: '#7c8cff' },
  env:    { name: 'Environment & Nature',   icon: '🌿', color: '#22c55e' },
  sci:    { name: 'Science & Technology',   icon: '🔬', color: '#22d3ee' },
  soc:    { name: 'Society & Culture',      icon: '🏛️', color: '#a78bfa' },
  biz:    { name: 'Business & Economy',     icon: '💼', color: '#f59e0b' },
  law:    { name: 'Law & Politics',         icon: '⚖️', color: '#ef4444' },
  health: { name: 'Health & Medicine',      icon: '🩺', color: '#ec4899' },
  emo:    { name: 'Emotion & Feeling',      icon: '❤️', color: '#f43f5e' },
  char:   { name: 'Character & Personality',icon: '👤', color: '#8b5cf6' },
  desc:   { name: 'Description & Quality',  icon: '🎨', color: '#06b6d4' },
  move:   { name: 'Movement & Travel',      icon: '✈️', color: '#0ea5e9' },
  comm:   { name: 'Communication & Language',icon:'💬', color: '#14b8a6' },
  time:   { name: 'Time & Change',          icon: '⏳', color: '#eab308' },
  conf:   { name: 'Conflict & Struggle',    icon: '⚔️', color: '#dc2626' },
  struct: { name: 'Structure & Form',       icon: '🏗️', color: '#64748b' },
  food:   { name: 'Food & Agriculture',     icon: '🍎', color: '#84cc16' },
  body:   { name: 'Body & Biology',         icon: '🧬', color: '#f472b6' },
  geo:    { name: 'Geography & Places',     icon: '🗺️', color: '#10b981' },
  art:    { name: 'Art & Creativity',       icon: '🎭', color: '#d946ef' },
  every:  { name: 'Everyday & General',     icon: '🌐', color: '#94a3b8' },
};

export const MAX_LEVEL = 5;
export const DECK_SIZE = 25;

// ---- paste the SAME SEED_RAW constant from your HTML file here ----
export const SEED_RAW = `abolition|n|বিলোপ|Ending, Elimination|law
abortive|adj|ব্যর্থ|Unsuccessful|desc
abrasion|n|ঘর্ষণ / ক্ষয়|Erosion, Wear|env
abrupt|adj|আকস্মিক|Sudden, Unexpected|time
abstract|adj|বিমূর্ত|Conceptual, Theoretical|acad
abundantly|adv|প্রচুর পরিমাণে|Plenty, Ample|desc
abundant|adj|প্রচুর|Plentiful, Copious, Ample|desc
accolade|n|প্রশংসা / পুরস্কার|Award, Honor|acad
accord|n|চুক্তি|Agreement, Harmony|law
accounted|v|হিসাব রাখা|Reckoned, Counted, Logged|biz
accumulation|n|সঞ্চয় / আহরণ|Collection, Procurement|biz
accumulate|v|সঞ্চয় করা|Amass, Gather, Heap, Pile Up|biz
accurate|adj|নির্ভুল|Exact, Precise, Correct|desc
acidification|n|অম্লীকরণ|Souring, Oxidation|env
acclaim|n|প্রশংসা|Praise, Applaud, Cheer|art
acoustic|adj|শব্দসংক্রান্ত|Sound-related|sci
acquaint|v|পরিচিত করা|Familiarize|comm
acquire|v|অর্জন করা / পাওয়া|Obtain, Get, Gain, Attain|biz
acquisition|n|গ্রহণ|Purchase, Attainment|biz
activate|v|সক্রিয় করা|Energize, Enable|sci
acute|adj|তীব্র|Severe, Intense|health
acutely|adv|তীব্রভাবে|Intensely, Severely|health
adamant|adj|কঠোর|Unyielding, Relentless|char
adequate|adj|পর্যাপ্ত|Sufficient, Enough|desc
adjacent|adj|সংলগ্ন|Adjoining, Surrounding|geo
administer|v|পরিচালনা / প্রদান করা|Manage, Control, Govern|law
adolescent|n|কিশোর|Teenager, Lad|soc
advent|n|আবির্ভাব|Appearance, Emergence|time
adverse|adj|প্রতিকূল|Negative, Harmful, Unfavorable|desc
adversarial|adj|বিরোধপূর্ণ|Opposing, Hostile|conf
advocate|n|সমর্থক / সমর্থন করা|Supporter, Promoter, Back|law
aficionados|n|অনুরাগী|Fans, Amateur, Lovers|soc
aftermath|n|পরবর্তী পরিণতি / ফলাফল|Consequence, Result|time
affluent|adj|প্রাচুর্যপূর্ণ|Prosperous, Opulent, Wealthy|biz
aggravating|adj|অবনতিকর|Worsening|desc
aggregate|n|সমষ্টি|Total, Collection|desc
agile|adj|চটপটে|Nimble, Quick|char
ailment|n|অসুস্থতা|Illness, Disease, Disorder|health
albeit|conj|যদিও|Although|comm
alongside|prep|পাশাপাশি|Beside, Near|geo
altruism|n|পরার্থপরতা|Benevolence, Kindness|char
amass|v|সঞ্চয় করা / জড়ো করা|Collect, Gather|biz
amuse|v|আনন্দ করা|Divert, Delight|emo
analogical|adj|সাদৃশ্যমূলক|Parallel, Comparable, Similar|acad
anecdotal|adj|অকল্পনীয়|Unreliable, Fallacious|acad
animate|v|প্রাণবন্ত করা|Enliven, Stimulate|desc
anticipated|adj|প্রত্যাশিত|Expected, Longed, Hoped|time
antiquity|n|প্রাচীনত্ব|Oldness, Aged|time
apathy|n|উদাসীনতা|Lack Of Interest, Lack Of Concern|emo
apparent|adj|স্পষ্ট|Obvious, Evident|desc
apparently|adv|দৃশ্যত / আপাতদৃষ্টিতে|Ostensibly, Evidently, Seemingly|desc
appetite|n|ক্ষুধা|Desire, Liking|food
appliance|n|গৃহস্থালি যন্ত্র|Device, Machine|sci
apprehend|v|গ্রেপ্তার করা|Arrest, Seize|law
apprehensions|n|চেতনা|Consciousness, Cognition, Sensation|emo
apprentice|n|শিক্ষানবিশ|Novice, Beginner|acad
apprenticeship|n|শিক্ষানবিশি|Traineeship, Internship, Training|acad
approach|n|পন্থা / কাজে আসা|Method, Tactic, Way, Path|every
appropriate|adj|যথাযথ|Suitable, Fitting, Apt|desc
apt|adj|উপযুক্ত|Suitable, Appropriate|desc
aquatic|adj|জলজ|Marine, Water-dwelling|env
arbitrary|adj|ইচ্ছামত|Random, Capricious|char
archaeological|adj|প্রত্নতাত্ত্বিক|Antiquarian|acad
archaeology|n|প্রত্নতত্ত্ব|Study Of Antiquities|acad
archipelago|n|দ্বীপপুঞ্জ|A Group Of Islands|geo
archives|n|সংগ্রহশালা|Records, Documents|acad
ardent|adj|উৎসাহী|Passionate, Enthusiastic|emo
arduous|adj|কঠিন|Difficult, Laborious|conf
arid|adj|শুষ্ক / অনুর্বর|Dry, Barren, Flat|env
arouse|v|জাগানো|Stimulate, Provoke, Awaken|emo
arousal|n|উত্তেজনা|Excitement, Stimulation|emo
arson|n|অগ্নিসংযোগ|Fire-starting, Fire-raising|law
arterial|adj|ধমনীসংক্রান্ত / প্রধান সড়ক|Main Road|body
artistry|n|কারুকার্য|Craftsmanship, Handicraft|art
ascent|n|উত্থান / চড়াই|Rise, Climb|move
associate with|v|সংযুক্ত করা|Join With, Link With, Connect With|comm
association|n|সংগঠন|Organisation, Union, Alliance|soc
astonishing|adj|আশ্চর্যজনক|Wonderful, Amazing, Surprising|emo
astonishingly|adv|আশ্চর্যজনকরূপে|Surprisingly, Shockingly|emo
astounding|adj|অবাক হওয়া|Amazing, Incredible|emo
atmosphere|n|আবহাওয়া|Mood, Environment, Climate|geo
attain|v|অর্জন করা|Achieve, Accomplish|every
attainable|adj|অর্জনযোগ্য|Achievable, Reachable|desc
attributed|v|আরোপিত / দায়ী|Imposed, Ascribed, Imputed|desc
audacious|adj|দুঃসাহসী|Bold, Daring|char
authoritarianism|n|কর্তৃত্ববাদ|Dictatorship|law
autonomy|n|স্বায়ত্তশাসন|Independence, Self-Sufficiency, Freedom|law
automotive|adj|স্বয়ংচালিত|Motorized, Relating To Cars|sci
avenue|n|পথ|Opportunity, Possibility, Chance|geo
awe|n|বিস্ময় / শ্রদ্ধা|Wonder, Reverence|emo
backwater|n|অচলতা|Remote Place|geo
barrier|n|বাধা / অন্তরায়|Obstacle, Hindrance|conf
beads|n|পুঁতি / জপমালা|Rosary, Chaplet|art
benevolent|adj|পরোপকারী|Kind, Charitable|char
benign|adj|সৌম্য / নিরীহ|Gentle, Harmless|char
bespoke|adj|কাস্টমাইজড|Custom-made|biz
betray|v|বিশ্বাস ভাঙা|Show Accidentally, Leak|comm
bewilder|v|বিভ্রান্ত করা|Confuse, Baffle|emo
bewildering|adj|বিভ্রান্তিকর|Confusing, Puzzling|emo
biodegradable|adj|জৈব-বিশ্লেষণযোগ্য|Decomposable|env
bioavailable|adj|জৈব উপলব্ধ|Bioactive|sci
bioactive|adj|জৈব সক্রিয়|Bioavailable, Potent|sci
bizarre|adj|অদ্ভুত|Strange, Weird|desc
bleak|adj|অনাবৃত|Bare, Uncovered, Open|desc
blighted|adj|ক্ষতিগ্রস্ত / ধ্বংসপ্রাপ্ত|Damaged, Ruined|desc
blazes|n|আগুনে প্রজ্বলিত বস্তু|Shine, Glare, Spark|sci
blurred|adj|বিস্মৃত করা|Obscure, Confused|desc
bolster|v|জোরদার করা|Strengthen, Support, Boost|struct
bombard|v|বোমাবর্ষণ করা|Pelt, Overwhelm|conf
bother|v|বিরক্ত করা|Trouble, Annoy|every
breach|n|লঙ্ঘন|Violation, Rupture|law
breakneck|adj|বিপজ্জনক|Speedy, Swift, Rapid|move
breather|n|বিরতি|Break, Rest|every
brief|adj|সংক্ষিপ্ত|Short, Concise|comm
brisk|adj|চটপটে|Quick, Lively|move
brittle|adj|ভঙ্গুর|Fragile, Delicate|desc
bronze|n|ধাতু|Brass, Tanned, Alloy|sci
buffers|n|ঢাল / ছায়া|Cushion, Shield, Barrier|struct
bulk|n|প্রধান অংশ / বৃহদাংশ|Main Part, Majority|biz
bully|v|ধমক|Frighten, Intimidate, Harass|conf
buoyancy|n|ভাসমানতা|Floatability|sci
bureaucracy|n|আমলাতন্ত্র|Administration, Red Tape|biz
burgeon|v|দ্রুত বেড়ে ওঠা|Grow Rapidly, Expand|biz
burglary|n|চুরি করা|Robbery, Stealing|law
burial|n|দাফন করা|Interment, Entombment|soc
bystander|n|দর্শক|Onlooker, Witness|soc
captivate|v|মুগ্ধ করা|Enchant, Fascinate|emo
captivity|n|বন্দিত্ব|Cage, Prison, Custody|law
caravels|n|দ্রুতগামী হাল্কা জাহাজ|Small Fast Sailing Ships|move
cardiovascular|adj|হৃদরোগ-সংক্রান্ত|Heart-related|health
carnivore|n|মাংসাশী|Predator, Meat-eater|env
carve out|v|তৈরি করা / গড়ে তোলা|Build, Establish|art
carved|adj|অঙ্কিত|Engraved, Sculpted|art
cast|v|নিক্ষেপ|Ramble, Pitch|move
catastrophe|n|বিপর্যয়|Calamity, Disaster|conf
cater|v|পরিবেশন করা / সরবরাহ করা|Serve, Provide, Supply|biz
caterpillar|n|শুঁয়াপোকা|Larva|env
cautious|adj|সতর্ক|Careful, Wary|char
cease|v|বন্ধ করা|Stop, Discontinue|time
census|n|জনগণনা|Population Count|soc
ceramic|n|মৃৎশিল্প|Pottery, Earthenware|art
charcoal|n|কাঠ কয়লা|Carbon, Anthracite|sci
charitable|adj|দাতব্য|Giving, Generous, Benevolent|char
chatter|v|অনর্থক কথা বলা|Blabber, Jabber|comm
cheapen|v|সস্তা|Reduce, Lower In Price|biz
cherish|v|লালন করা|Treasure, Value|emo
chronic|adj|দীর্ঘস্থায়ী / পুরনো|Persistent, Long-term|health
circumvent|v|পরিহার করা|Avoid, Bypass|every
cite|v|উদ্ধৃতি করা|Mention, Refer To|comm
clarity|n|স্পষ্টতা|Clearness, Lucidity|desc
cleanse|v|পরিষ্কার করা|Purify, Wash|health
cleansing|n|পরিষ্কারক|Detergent, Mordant|health
clearance|n|সাফাই / বন পরিষ্কার|Cleanup, Deforestation, Removal|env
coastal|adj|উপকূলীয়|Seaside, Littoral|geo
coastline|n|উপকূল|Seaboard, Seaside|geo
cognitive|adj|জ্ঞান-বৃত্তিক / জ্ঞানগত|Reasoning, Mental, Intellectual|sci
cohesion|n|সংহতি|Unity, Solidarity, Togetherness|soc
collaboration|n|সহযোগিতা|Cooperation, Teamwork, Partnership|soc
colossal|adj|বিশাল|Huge, Massive, Gigantic, Enormous|desc
commemoration|n|স্মৃতি রক্ষা|Memorial, Monument|soc
commodity|n|পণ্য|Product, Goods, Merchandise|biz
communal|adj|সাম্প্রদায়িক|Shared, Public, Sectarian|soc
companion|n|সহচর|Friend, Buddy, Mate, Comrade|soc
compassion|n|সহানুভূতি / করুণা|Empathy, Kindness|emo
compensation|n|ক্ষতিপূরণ|Reward, Benefit|biz
compilation|n|সংকলন|Collection, Composition|acad
compile|v|সংকলন করা|Construct, Collect, Composed|acad
complied|v|প্রতিপালিত|Met, Followed|law
completion|n|সমাপ্তি|Finish, Conclusion|time
compliance|n|সম্মতি|Conformity, Obedience|law
component|n|উপাদান|Part, Element, Piece, Factor|struct
compound|n|নৌগ|Complex, Mixture, Combination|struct
comprehend|v|বোঝা|Understand, Perceive, Know|acad
comprehension|n|উপলব্ধি|Knowledge, Awareness, Insight|acad
comprehensive|adj|ব্যাপক|Thorough, In-Depth, Complete|desc
comprise|v|গঠিত|Include, Consist Of|struct
comprised|v|অন্তর্ভুক্ত|Include, Appurtenant|struct
compromised|v|আপস করা|Worsen, Make Worse|conf
conceal|v|গোপন করা|Hide, Cover|every
concealed|adj|গোপন|Hidden, Secret, Covert|desc
concede|v|স্বীকার করা|Admit, Acknowledge|comm
concentrated|adj|ঘনীভূত|Focused, Intense|desc
conception|n|গর্ভধারণ|Belief, Idea, View, Thought|acad
concise|adj|সংক্ষিপ্ত|Brief, Succinct|comm
concur|v|সম্মত হওয়া|Agree, Coincide|comm
condemn|v|নিন্দা|Criticize, Attack, Blame|conf
condiment|n|মসলা|Spice, Seasoning, Flavoring|food
confer|v|অর্পণ করা|Offer, Delegate, Hand|comm
confined|adj|আটকে / সীমাবদ্ধ|Limited, Restricted, Finite|desc
confinement|n|বন্দী|Imprisonment, Captivity|law
congruent|adj|সঙ্গতিপূর্ণ|Consistent, Agreeing|desc
conscience|n|বিবেক|Moral Sense, Scruples|emo
conscientious|adj|কর্তব্যপরায়ণ / বিবেকবান|Diligent, Responsible|char
conscious|adj|সচেতন|Intentional, Aware, Mindful|sci
consecutive|adj|ধারাবাহিক|Sequential, Serial|time
consensus|n|ঐক্যমত|Agreement, Unanimousness, Unity|law
conspicuous|adj|সুস্পষ্ট|Visible, Clear, Noticeable|desc
conspiracy|n|ষড়যন্ত্র|Plot, Scheme|law
constellation|n|নক্ষত্রমণ্ডল|Star Pattern|sci
constitute|v|গঠন করা|Set Up, Establish, Create|law
constitutes|v|গঠন করা|Compose, Establishes|law
constraint|n|সীমাবদ্ধতা|Limitation, Restriction|law
constraints|n|সীমাবদ্ধতা|Blockade, Confines|law
contagious|adj|সংক্রামক|Transmissible, Infectious|health
contend|v|তর্কবিতর্ক করা|Argue, Claim, Insist, Declare|acad
contention|n|বিরোধ|Conflict, Strife, Quarrel|conf
contentedly|adv|পরিতৃপ্ত|Happily, Cheerfully|emo
contented|adj|সন্তুষ্ট|Happy, Satisfied|emo
contentment|n|সন্তুষ্টি|Happiness, Pleasure|emo
contentious|adj|বিতর্কিত|Controversial|char
contiguous|adj|সংলগ্ন|Adjacent, Adjoining|geo
contingent|adj|শর্তসাপেক্ষ|Conditional, Dependent|law
continuous|adj|ধারাবাহিক|Uninterrupted, Constant|time
contraction|n|সংকোচন|Tightening, Shrinking|struct
contraption|n|অদ্ভুত যন্ত্র|Device, Gadget, Machine|sci
controversial|adj|বিতর্কিত|Debatable, Disputable, Arguable|desc
conundrum|n|ধাঁধা|Puzzle, Maze, Riddle|acad
conventional|adj|প্রচলিত|Traditional, Normal, Regular|soc
conventionally|adv|প্রচলিতভাবে|Traditionally, Normally|soc
converge|v|মিলিত হওয়া|Meet, Unite|move
convey|v|বহন করা / প্রকাশ করা|Communicate, Send, Express|comm
correlate|v|সম্পর্কিত করা|Relate, Connect|acad
correlation|n|পারস্পরিক সম্পর্ক|Association, Connection, Link|acad
correspond|v|মিলে যাওয়া|Match, Agree|comm
correspondence|n|চিঠিপত্র / সাদৃশ্য|Similarity, Resemblance, Connection|comm
corresponding|adj|অনুরূপ|Matching, Equivalent, Related|desc
courteous|adj|ভদ্র|Polite, Respectful|char
courtyard|n|আতিথেয়তা|Yards, Forecourts|geo
cradle|n|ধারণ করা|Cushion, Hold, Rest|every
critically|adv|গুরুতরভাবে / সংকটজনকভাবে|Seriously, Vitally, Importantly|every
cropping|n|কেটে ছোট করা|Cutting|food
crucial|adj|অত্যন্ত গুরুত্বপূর্ণ|Vital, Essential|desc
crude|adj|অমার্জিত|Simple, Basic, Undeveloped|desc
cruelty|n|নিষ্ঠুরতা|Brutality, Savagery|conf
cue|n|চিহ্ন|Signal, Sign, Clue, Indication|comm
culminate|v|চরমে পৌঁছানো|Peak, Climax|time
culmination|n|উন্নতির চরম সীমা|Peak, Climax, Apex|time
culprit|n|অপরাধী|Offender, Wrongdoer, Criminal|law
cult|n|উপাসনা|Worship, Devotion|soc
cumulative|adj|ক্রমবর্ধমান|Increasing, Accretive|time
cure|v|নিরাময়|Heal, Treat, Alleviate, Therapy|health
curing|n|নিরাময়|Healing, Treating, Alleviating|health
curtail|v|হ্রাস করা|Reduce, Minimize, Decrease|biz
cushioning|n|গদি|Padding, Damping|struct
custodian|n|তত্ত্বাবধায়ক|Caretaker, Guardian|soc
cynical|adj|নিন্দুক|Skeptical, Pessimistic|char
dais|n|মঞ্চ|Platform, Podium|struct
damp|adj|স্যাঁতসেঁতে|Moist, Wet|env
dangling|adj|ঝুলন্ত|Suspended, Pendent|desc
daring|adj|সাহসী|Bold, Audacious|char
dated|adj|পুরনো|Outdated, Old-fashioned|time
daunting|adj|ভয়ঙ্কর|Intimidating, Scary|emo
debris|n|ধ্বংসাবশেষ|Wreckage, Rubbish, Ruins|env
decisive|adj|সিদ্ধান্তমূলক|Determined, Final, Ultimate|char
decorative|adj|আলংকারিক|Ornamental|art
deficit|n|ঘাটতি|Shortage, Shortfall|biz
definitive|adj|নির্ধারক|Conclusive, Final, Ultimate|desc
defying|v|অস্বীকার|Disobey, Flout|conf
degrade|v|অবনতি|Demote|env
deliberate|adj|ইচ্ছাকৃত|Planned, Voluntary, Willful, Intentional|char
deliberately|adv|ইচ্ছাকৃতভাবে|Knowingly, Purposely, On Purpose|char
delicate|adj|উপমেয় / সূক্ষ্ম|Fragile, Weak, Slight|desc
delight|n|আনন্দ|Enjoyment, Pleasure, Joy|emo
demise|n|মৃত্যু|Death, End|time
denounce|v|নিন্দা করা|Condemn, Criticize|conf
depict|v|বর্ণনা করা / চিত্রিত করা|Describe, Illustrate, Show, Portray|art
depicted|v|বর্ণনা করা|Described, Represented, Outlined|art
depiction|n|চিত্রণ|Picture, Portrait, Image, Portrayal|art
depicts|v|অংকে করা|Portrays, Draw, Outline|art
deplete|v|হ্রাস করা|Drain, Consume|env
depleted|adj|ক্ষয়প্রাপ্ত / নিঃশেষিত|Exhausted, Diminished, Drained|env
depleting|adj|ক্ষয়কারী / গ্রাস করা|Exhausting, Reducing, Decreasing|env
deprivation|n|বঞ্চনা|Lack, Loss|soc
deprive of|v|থেকে বঞ্চিত করা|Take Away, Remove, Withdraw|law
descent|n|নেমে আসা / অবতরণ|Drop, Landing|move
descend|v|নেমে আসা|Go Down, Drop, Land|move
desperate|adj|মরিয়া / দুর্দান্ত|Formidable, Unruly, Grim|emo
destined|adj|নির্ধারিত / নিয়ত|Intended, Bound|time
destructive|adj|ধ্বংসাত্মক|Damaging, Harmful|conf
detach|v|বিচ্ছিন্ন করা|Disconnect, Sever|every
deter|v|নিরুৎসাহিত করা|Prevent, Discourage, Put Off|conf
deteriorate|v|অবনতি|Decline, Worsen, Weaken|desc
deterioration|n|অবনতি / ক্ষয়|Decline, Degradation, Worsening|desc
detrimental|adj|ক্ষতিকর|Harmful, Damaging, Injurious|desc
detract|v|ক্ষুণ্ণ করা / কমিয়ে দেওয়া|Diminish, Reduce|desc
devastate|v|ধ্বংস করা|Destroy, Waste|conf
devastating|adj|বিধ্বংসী / ভয়াবহ|Destructive, Ruinous|conf
devastation|n|বিধ্বংস|Destruction, Ruin|conf
deviation|n|বিচ্যুতি|Deflected, Digressed|desc
devise|v|কৌশল|Invent, Create, Plan|acad
devising|v|উদ্ভাবক|Design, Conceive|acad
devote|v|উৎসর্গ করা|Dedicate, Give|every
devoted|adj|অনুগত / অনুরক্ত|Obedient, Affectionate|char
dichotomy|n|দ্বিধাবিভক্তি|Contrast, Opposition|acad
dictate|v|আদেশ / নির্দেশ|Command, Order, Direct|law
differing|adj|ভিন্ন|Vary, Diverge|desc
dilemma|n|দ্বিধা / উভয়সঙ্কট|Hesitation, Doubt, Difficulties|conf
diligence|n|পরিশ্রম|Hard Work, Industry|char
din|n|কোলাহল|Noise, Uproar|every
dinghy|n|ছোট নৌকা|Small Boat|move
dire|adj|ভয়ানক|Dreadful, Terrible|desc
discern|v|উপলব্ধি করা|Perceive, Distinguish|acad
disciple|n|শিষ্য|Follower, Student|acad
discrepancy|n|অমিল|Difference, Inconsistency|acad
discrete|adj|বিচ্ছিন্ন|Separate, Distinct, Detached|desc
discretion|n|বিবেচনা / স্ববিবেচনা|Judgment, Prudence|law
discrimination|n|বৈষম্য|Prejudice, Bias|law
disguise|n|ছদ্মবেশ|Camouflage, Conceal|comm
disintegrate|v|ভাঙা|Break, Crush, Impair|conf
dismal|adj|হতাশাজনক|Miserable, Gloomy, Depressing|emo
dismay|n|আতঙ্ক|Alarm, Consternation|emo
disorder|n|ব্যাধি|Chaos, Mess-Up|health
disorganisation|n|অব্যবস্থাপনা|Disorder, Incompetence, Inefficiency|every
disparate|adj|ভিন্নধর্মী|Different, Dissimilar|desc
disparity|n|বৈষম্য|Difference, Gap, Discrepancy|soc
disparities|n|বৈষম্য / অসমতা|Inequality, Unevenness|soc
disproportionate|adj|অসামঞ্জস্যপূর্ণ|Unequal, Unbalanced|desc
dissenting|adj|ভিন্নমত / বিরোধী|Opposing, Disagreeing|conf
dissolve|v|দ্রবীভূত করা|Melt, Liquefy|sci
distant|adj|দূরবর্তী|Remote, Far, Isolated|move
distinct|adj|স্বতন্ত্র|Clear, Separate, Individual, Different|desc
distinction|n|পার্থক্য / বৈশিষ্ট্য|Differentiation, Contrast|desc
distinguished|adj|বিশিষ্ট|Prominent, Eminent, Noted|char
distort|v|বিকৃত করা|Warp, Deform|desc
distraction|n|বিভ্রান্তি / ক্ষতি|Diversion, Interruption|emo
distressed|adj|দুঃখিত|Upset, Troubled|emo
distressing|adj|কষ্টদায়ক / উদ্বেগজনক|Saddening, Worrying, Painful|emo
divert|v|ঘুরিয়ে দেওয়া|Redirect, Deflect|move
divisive|adj|বিভাজনকারী|Controversial, Contentious|conf
doom|n|ধ্বংস / নিয়তি|Destruction, Fate, Damned|conf
dose|n|মাত্রা|Quantity, Amount|health
downturn|n|মন্দা|Slump, Decline, Recession|biz
downright|adv|সরাসরি|Absolutely, Totally, Extremely|desc
downside|n|অসুবিধা|Disadvantage|biz
down-to-earth|adj|বাস্তববাদী|Practical, Sensible|char
downtown|n|শহরের কেন্দ্রস্থল|City Center|geo
drastically|adv|মারাত্মকরূপে|Significantly, Greatly, Extremely|desc
draw a blank|v|কিছু মনে না পড়া|Fail To Remember|every
draw out|v|আঁকা|To Mention, Explain|art
dreadful|adj|ভয়ানক|Terrible, Awful|desc
drought|n|অনাবৃষ্টি / খরা|Dryness, Dearth|env
durable|adj|টেকসই|Serviceable, Lasting, Robust, Strong|desc
duration|n|সময়কাল|Length, Period|time
duty|n|কর্তব্য|Task, Responsibility, Undertaking|law
dwell|v|বাস করা|Reside, Live|geo
dwelling|n|বাসস্থান|House, Home|geo
eager|adj|আগ্রহী|Enthusiastic, Excited|emo
ease|v|উপশম করা / স্বস্তি নেওয়া|Relieve, Comfort, Relax|health
eccentric|adj|উদ্ভট|Unusual, Strange, Weird|char
ecological|adj|পরিবেশগত / বাস্তুতান্ত্রিক|Environmental|env
ecology|n|বাস্তুতন্ত্র|Ecosystem, Bionetwork|env
edge|n|প্রান্ত|Rim, Border, Boundary, Side|geo
edible|adj|খাদ্য|Eatable, Esculent|food
effete|adj|জীর্ণ|Decrepit, Raddled, Threadbare|desc
egalitarianism|n|সমতাবাদ|Even-Handed, Impartial|soc
egocentric|adj|আত্মকেন্দ্রিক|Narcissistic, Vain, Selfish|char
elaborate|adj|বিস্তারিত|Detailed, Complicated|desc
elapsed|adj|অতিবাহিত|Passed, Gone By|time
elevate|v|উন্নয়ন সাধন করা|Lift, Upgrade, Promote|desc
elevation|n|উচ্চতা / উন্নীতকরণ|Heightening, Raising|geo
elicit|v|প্রকাশ করা|Provoking, Obtain|comm
elongate|v|দীর্ঘ করা|Lengthen|struct
eloquent|adj|বাগ্মী|Articulate, Fluent|comm
eloquently|adv|অলংকারপূর্ণভাবে|Fluently, Smoothly|comm
elucidate|v|ব্যাখ্যা করা|Explain, Clarify, Reveal|comm
embark|v|শুরু করা|Begin, Commence, Start|every
embarrass|v|বিব্রত করা|Humiliate, Shame|emo
embarrassing|adj|লজ্জাজনক|Puzzling, Baffling|emo
emboldened|adj|সাহসী|Encourage, Cheer|emo
emerge|v|আত্মপ্রকাশ|Come Out, Appear, Arise, Occur|time
emergence|n|উত্থান / আবির্ভাব|Uprising, Elevation, Appearance|time
emerging|adj|উদীয়মান|Rising, Fresh, Further|time
emigrate|v|দেশত্যাগ|Migrate, Relocate, Move|move
emission|n|নির্গমন / নিঃসরণ|Discharge, Release, Escape|sci
emphasis|n|জোর|Stress, Importance, Highlighting|comm
emphasise|v|জোর দেওয়া|Highlight, Stress, Underline|comm
emphassising|v|জোর দেওয়া|Stressing, Attention|comm
empirical|adj|প্রায়োগিক / গবেষণামূলক|Experimental, Observational, Practical|acad
enables|v|সক্ষম করা / অধিকার করা|Qualify, Occupy|every
encompassing|adj|পরিবেষ্টিত|Surround, Enclose|struct
endangered|adj|বিপন্ন|Rare, Threatened, Vulnerable|env
endeavor|n|প্রচেষ্টা|Effort, Try, Attempt|every
endorsement|n|সমর্থন|Approval, Support|biz
endure|v|সহ্য করা|Lasts, Persists, Tolerates, Suffer, Bear|conf
endured|v|সহ্য করা|Suffered, Tolerable|conf
endures|v|সহ্য করা|Lasts, Persists, Tolerates|conf
energetic|adj|উদ্যমী|Active, Lively|char
energizing|adj|কর্মোদ্দীপক|Bracing, Stimulating|health
enforce|v|প্রয়োগ করা|Implement, Impose|law
engage|v|অংশগ্রহণ করা|Participate, Involve|soc
engage in|v|রত|Participate In, Take Part In|soc
engender|v|উৎপাদন করা|Produce, Cause, Create|every
engrave|v|খোদাই করা|Carve, Inscribe|art
enigmatic|adj|বিভ্রান্তিকর|Puzzling, Mysterious, Obscure|emo
enlarge|v|বৃদ্ধি করা|Increase, Expand, Extend|struct
enrol|v|নিবন্ধন করা|Register, Sign Up|acad
entail|v|প্রয়োজন করা / চাহিদা|Involve, Require, Demand|every
entailed|v|সৃষ্টি|Brought About|every
entanglement|n|জড়িয়ে পড়া / জট|Complication, Involvement|conf
enthusiasm|n|উৎসাহ / উদ্দীপনা|Eagerness, Passion, Zeal|emo
enthusiasts|n|উৎসাহী|Fan, Devotee, Admirer|soc
enthusiastic|adj|উৎসাহী|Eager, Keen|emo
enthusiastically|adv|উৎসাহের সাথে|Warmly, Happily|emo
entice|v|প্রলুব্ধ করা|Tempt, Attract|biz
entitled|adj|অধিকারী|Authorized, Qualified|law
entrepreneur|n|উদ্যোক্তা|Businessperson, Founder|biz
entrenched|adj|পুরাতন রীতি অনুযায়ী সংরক্ষিত|Ingrained, Established, Rooted|soc
entrenching|adj|পুরাতন রীতি দ্বারা সংরক্ষিত|Establishing|soc
envisage|v|কল্পনা করা|Imagine, Expect, Foresee|acad
envisaged|v|কল্পনা করা|Imagined, Planned|acad
envisioned|v|কল্পনা করা|Imagined, Planned|acad
envy|n|ঈর্ষা|Jealousy, Green Eye, Spite|emo
ephemeral|adj|ক্ষণস্থায়ী|Transient, Short-lived|time
epidemic|n|মহামারী|Outbreak, Plague|health
epilogue|n|উপসংহার|Finale, Finality|art
epitome|n|উপাখ্যান / সংক্ষিপ্তসার|Tale, Compendium, Synopsis|acad
equator|n|নিরক্ষরেখা|Tropical Line|geo
equivalent|adj|সমতুল্য / সমক্ষ|Identical, Equal, Same, Similar|desc
eradicate|v|নির্মূল করা|Eliminate, Wipe Out, Destroy|env
eradicated|adj|নির্মূল|Exterminated, Destroyed, Eliminated|env
eradication|n|উচ্ছেদ|Eviction, Excision|env
erode|v|ক্ষয়|Corrode, Destroy, Wear Down|env
erosion|n|ক্ষয়|Corrosion, Abrasion, Attrition|env
erratic|adj|অনিশ্চিত|Uncertain, Insecure|char
eruption|n|বিফারণ|Outbreak, Explosion, Emission|env
escapism|n|পলায়ন করা|Escape, Fantasy|emo
estimating|v|আনুমান / বরাদ্দ করা|Reckon, Allot|biz
eternal|adj|চিরস্থায়ী|Everlasting, Perpetual|time
ethnicity|n|জাতিগত পরিচয়|Ethnic Identity|soc
etiquette|n|শিষ্টাচার|Courtesy, Manners, Propriety|soc
eventful|adj|ঘটনাবহুল|Memorable, Significant|time
eventually|adv|অবশেষে / শেষ পর্যন্ত|Finally, Ultimately|time
evolution|n|বিবর্তন|Development, Growth, Progress, Adaptation|sci
evolutionary|adj|বিবর্তনমূলক|Developmental, Changing, Evolving|sci
evolve|v|বিবর্তিত হওয়া|Develop, Progress, Grow, Transform|sci
evolved|adj|প্রসূত / বিবর্তিত|Developed, Advanced, Manifested|sci
exacerbate|v|বাড়িয়ে দেওয়া|Worsen|time
exaggerate|v|অতিরঞ্জিত করা|Overstate, Amplify|comm
exaggeration|n|অতিরঞ্জিত|Overstatement, Embellishment|comm
exchange|n|বিনিময়|Swap, Trade, Barter, Interchange|biz
excitement|n|উত্তেজনা|Excitation, Exhilaration|emo
excited|adj|উদ্দীপিত|Augmented, Incited|emo
exclude|v|বর্জন করা|Eliminate, Debar|soc
exclusion|n|বর্জন|Rejection, Omission|soc
exclusive|adj|একচেটিয়া|Restricted, Selective|desc
excursion|n|ভ্রমণ|Trip, Tour, Expedition, Journey|move
execute|v|সম্পন্ন করা|Carry Out, Perform|every
executed|adj|সম্পন্ন|Attained, Realized, Accomplished|every
exemplify|v|উদাহরণ দেওয়া|Illustrate, Demonstrate|acad
exert|v|জাহির করা|Exercise, Apply|every
exertion|n|পরিশ্রম|Effort, Labor|every
exhaust|v|নিঃশেষ|Run Out, Use Up, Deplete|every
exhausted|adj|নিঃশেষিত / ক্ষয়প্রাপ্ত|Depleted, Used Up, Attenuated|health
exhaustion|n|ক্লান্তি|Tiredness, Weariness|health
exhilarating|adj|উৎসাহকর|Thrilling, Exciting, Stimulating|emo
exile|n|নির্বাসন|Banishment, Expulsion|law
exotic|adj|বিদেশি / বিহঙ্গ|Unusual, Alien, Foreign, Strange|desc
expansive|adj|বিস্তৃত|Broad, Wide|desc
expansively|adv|বিস্তৃতভাবে|Broadly, Widely, Thoroughly|desc
expedite|v|ত্বরান্বিত করা|Hasten, Accelerate|biz
expedition|n|অভিযান|Voyage, Excursion, Journey|move
explicit|adj|স্পষ্ট|Clear, Obvious, Definite|comm
exploit|v|শোষণ করা / কাজে লাগানো|Utilize, Harness, Take Advantage Of|biz
exploitation|n|শোষণ|Mistreatment|biz
exploiting|v|পরিশ্রমজীবী|Operate, Harness|biz
explosion|n|বিফারণ|Blast, Burst, Blowup|conf
exposure|n|প্রকাশ / সংস্পর্শ|Contact, Revelation, Disclosure|every
expound|v|ব্যাখ্যা করা|Explain, Develop, Expand|comm
expressive|adj|ভাবপূর্ণ|Eloquent, Meaningful|art
extant|adj|বিদ্যমান|Existent, Present, Existing|desc
extinct|adj|বিলুপ্ত|Vanished, Defunct, Dead, Obsolete|env
extol|v|প্রশংসা করা|Praise, Laud|comm
extraordinary|adj|অসাধারণ|Remarkable, Outstanding, Incredible, Unusual|desc
extrinsic|adj|বহিঃস্থ|External, Outside|desc
exuberance|n|উদ্দীপনা|Enthusiasm, Spur, Incentive|emo
eye-catching|adj|নজরকাড়া / আকর্ষণীয়|Attractive, Striking, Enchanting|desc
facet|n|দিক|Aspect, Feature, Component|desc
facilitate|v|সহজতর করা|Enable, Aid, Help, Assist, Simplify|every
fairy-tale|n|রূপকথা|Enchanted, Magical, Fabulous|art
fallibility|n|ভ্রান্তি|Inaccuracy, Fallacy|acad
fallacy|n|ভুল ধারণা|Delusions, Error|acad
fanciful|adj|কল্পনাপ্রসূত|Mythical, Fantastical|art
far-off|adj|দূরের|Far, Remote, Distant|move
fascinating|adj|চিত্তাকর্ষক|Charming, Interesting, Captivating|desc
fatal|adj|মারাত্মক|Deadly, Lethal|health
fatigue|n|ক্লান্তি|Tiredness, Exhaustion|health
favourable|adj|অনুকূল|Advantageous, Positive|desc
feared|v|ভীত হওয়া|Be Afraid, Be Timid|emo
feasible|adj|কার্যকর / সম্ভাব্য|Possible, Viable, Realistic, Likely|desc
feat|n|কৃতিত্ব|Achievement, Renown, Skill|char
federal|adj|ফেডারেল|Central, National|law
fierce|adj|উগ্র|Violent, Ferocious, Wild, Grim|char
firm|n|প্রতিষ্ঠান|Company, Business, Enterprise|biz
firmly|adv|দৃঢ়ভাবে|Strongly, Decisively, Determinedly|desc
flare|n|ফ্লেয়ার|Flash, Blaze, Sparkle|sci
flee|v|ভাগা|Run Away, Escape|move
flightless|adj|উড়তে অক্ষম|Unable To Fly|env
flourish|v|সমৃদ্ধ হওয়া / বিকশিত|Thrive, Prosper, Grow|biz
flourishing|adj|সমৃদ্ধ|Exuberant, Affluent|biz
flotilla|n|ক্ষুদ্র জাহাজ সমূহের বহর|Convoy, Navy|move
foliage|n|পাতা / পর্ণরাজি|Leaves, Leafage, Flora|env
folk|n|লোক|People, Traditional|soc
forefather|n|পূর্বপুরুষ|Ancestor, Forebear, Precursor|soc
foremost|adj|প্রধান|Leading, Primary|desc
foresee|v|পূর্বাভাস দেওয়া|Predict, Anticipate|time
formidable|adj|ভয়ংকর|Daunting, Intimidating|conf
forsake|v|পরিত্যাগ করা|Abandon, Desert|conf
fortunately|adv|ভাগ্যিমত|Luckily, Mercifully|emo
foster|v|লালনপালন|Encourage, Promote, Raise, Nurture|soc
foul|adj|ফাউল|Unpleasant, Stinking, Disgusting|desc
fragment|n|টুকরা|Piece, Slice, Shred, Portion|struct
fragile|adj|ভঙ্গুর|Weak, Feeble, Delicate, Breakable|desc
fraudulent|adj|প্রতারণামূলক|Deceitful, Dishonest|law
frenzy|n|উন্মাদনা|Madness, Hysteria|emo
frenetic|adj|উন্মাদ|Frantic, Wild, Mad|emo
frequent|adj|ঘন ঘন|Often, Regular|time
frosty|adj|হিমশীতল পূর্ণ|Snow-Capped, Snow White|env
frugal|adj|মিতব্যয়ী|Thrifty, Economical|char
futile|adj|বৃথা|Useless, Pointless|conf
gallant|adj|সাহসী|Kind, Polite, Respectful, Gracious|char
gauge|n|মাপকাঠি|Measures, Counts, Scales|sci
gaze|n|দৃষ্টি|Stare, Look|every
gem|n|রত্ন|Jewel, Treasure|art
generic|adj|সাধারণ|General, Common|desc
genre|n|উপায়|Kind, Sort|art
give off|v|নির্গত করা|Emit, Release|sci
glacial|adj|হিমবাহ|Frigid, Polar, Chill|env
glaciers|n|হিমবাহ|Icebergs, Snows|env
glaring|adj|স্পষ্ট|Obvious, Blatant|desc
gleaming|adj|উজ্জ্বল হওয়া|Shining, Bright, Glowing|desc
glimpse|n|এক ঝলক দৃষ্টি|Glance, Peek, Sight|every
glorified|adj|মহিমান্বিত করা|Exalt, Honor|art
gradual|adj|ক্রমিক|Progressive, Slow|time
grant|v|মঞ্জুর করা|Give, Award|law
grasp|n|উপলব্ধি|Understanding, Knowledge, Awareness|acad
grateful|adj|কৃতজ্ঞ|Thankful, Appreciative|emo
grimy|adj|ময়লাযুক্ত|Dirty, Filthy|desc
grooved|adj|খাজ কাটা|Channeled|struct
groundbreaking|adj|অভূতপূর্ব|Unprecedented, Revolutionary, Pioneering|acad
grove|n|কুঞ্জ|Wilderness, Garden|env
gruesome|adj|ভয়ংকর|Grisly, Hideous|desc
grunt|n|কণ্ঠস্বর|Mumble, Murmur|comm
guarantee|n|গ্যারান্টি|Assure, Ensure, Warrant|biz
gut|n|অস্ত্র / সাহস|Intestine, Entrail, Courage|body
habitat|n|বাসস্থান|Home, Environment, Surrounding|env
habitable|adj|বাসযোগ্য|Livable, Inhabitable|env
halt|v|থামা / থামানো|Stop, Cease, Pause|time
handful|n|অল্প পরিমাণ|Scantling, Morsel|desc
harbor|n|নিরাপদ বন্দর|Port, Dock, Shelter|geo
harbour|n|বন্দর / আশ্রয়স্থল|Shelter, Asylum, Protection|geo
harmonious|adj|সুরেলা|Peaceful, Balanced|every
hazardous|adj|বিপজ্জনক|Dangerous, Risky|conf
hazard|n|বিপত্তি|Risk, Peril|conf
heavy-duty|adj|শক্তিশালী / দীর্ঘমেয়াদি|Durable, Secure, Sturdy|desc
heighten|v|বাড়ানো / তীব্র করা|Increase, Intensify|every
hierarchies|n|শ্রেণীবিন্যাস|Ranking, Order|soc
hierarchical|adj|অনুক্রমিক|Graded, Ranked, Stratified|soc
hierarchy|n|অনুক্রম|Grading, Rank, Order|soc
hillside|n|পাহাড়ের ঢালু গায়ে|Slope, Mountainside, Gradient|geo
historian|n|ইতিহাসবিদ|Chronicler|acad
hoisted|adj|উত্তোলিত|Lifted|move
hostile|adj|শত্রুভাবাপন্ন|Aggressive, Antagonistic|conf
hunch|n|পুরু ভাঁজ|Hump, Bower|every
hydrothermal|adj|হাইড্রোথার্মাল|Aquatic, Hot-Water|sci
hygiene|n|স্বাস্থ্যবিধি|Sanitation, Cleanliness|health
hyper-vigilant|adj|অতিসতর্ক|Overly Alert, Highly Watchful|health
hysteria|n|হিস্টিরিয়া / উন্মাদনা|Frenzy, Panic|emo
ideology|n|ভাবাদর্শ|Belief System, Doctrine|law
ignoble|adj|অমর্যাদাকর|Dishonorable, Shameful|char
immaculate|adj|নিখুঁত|Flawless, Spotless|desc
imminent|adj|আসন্ন|Impending, Approaching|time
immobile|adj|অচল|Motionless|body
immune|adj|প্রতিরোধী|Resistant, Protected|health
impair|v|ক্ষতিগ্রস্ত করা|Damage, Weaken|health
impartiality|n|নিরপেক্ষতা|Fairness, Justice, Equity|law
impatience|n|অধৈর্য|Eagerness, Anxiety, Worry|emo
impeccable|adj|নির্ভুল|Flawless, Faultless|desc
impediments|n|প্রতিবন্ধক|Obstacle, Curb|conf
impenetrable|adj|দুর্ভেদ্য|Impermeable, Inaccessible|desc
imperative|adj|অত্যাবশ্যক|Essential, Crucial|desc
imperceptible|adj|অদৃশ্য|Invisible, Undetectable|desc
implications|n|অনুপ্রকাশ|Consequences, Result, Effect|acad
implication|n|প্রভাব|Effect, Inference, Association|acad
implicit|adj|অন্তর্নিহিত / পরোক্ষ|Unspoken, Indirect, Inherent|desc
imply|v|বোঝানো|Indicate, Mean, Suggest|comm
implies|v|অনুপ্রকাশ করা|Assumes, Suggests|comm
impose|v|আরোপ করা|Enforce, Levy|law
imposing|adj|চিত্তাকর্ষক|Impressive, Majestic|desc
impressive|adj|চিত্তাকর্ষক|Remarkable, Striking, Captivating|desc
impressively|adv|আকর্ষণীয়ভাবে|Strikingly|desc
impulse|n|তাড়না|Urge, Instinct|emo
impulses|n|আবেগ / প্রেরণা|Emotion, Passion, Motivation|emo
impulsive|adj|আবেগপ্রবণ|Spontaneous, Rash|emo
inability|n|অক্ষমতা|Powerlessness, Failure|every
inadequate|adj|অপর্যাপ্ত|Deficient, Insufficient|desc
inactivated|adj|নিষ্ক্রিয়|Deactivated, Demobilize|sci
inadequacy|n|অপর্যাপ্ত|Shortage, Dearth|desc
inadvertently|adv|অসাবধানতাবশত|Accidentally|every
inaccessibility|n|দুর্গমতা|Unreachability|geo
incentivizes|v|উদ্দীপনা|Encourage, Stimulate|biz
incidence of|n|আনাকাঙ্ক্ষিত|Occurrence, Prevalence, Frequency|acad
inclined|adj|ঝোঁক / অনুরক্ত|Preferring, Affectionate, Devoted|char
inclination|n|আগ্রহ|Desire, Tendency|char
inclusion|n|অন্তর্ভুক্তি|Insertion, Addition|soc
incorporate|v|সংগঠিত|Integrate, Combine|biz
incubation|n|ডিমে তা দেওয়া|Hatching, Brooding|env
incubate|v|ডিমে তা দেওয়া|Hatch, Brood|env
indicating|adj|সূচক|Signifying, Betoken|comm
indigenous|adj|দেশীয় / স্থানীয়|Native, Aboriginal, Original, Local|soc
individual|adj|স্বতন্ত্র|Singular, Personal, Separate|desc
induce|v|সৃষ্টি করা / প্ররোচিত করা|Cause, Trigger, Create, Generate|every
indulge|v|প্রশ্রয় দেওয়া|Gratify, Satisfy|emo
industrial|adj|শিল্প|Manufactured|biz
inevitable|adj|অনিবার্য|Certain, Destined, Unavoidable|time
inert|adj|নিষ্ক্রিয়|Inactive, Motionless|sci
infer|v|অনুমান করা|Deduce, Conclude|acad
inferred|adj|অনুমান|Supposed, Deduced|acad
infinite|adj|অসীম|Boundless, Limitless, Vast|desc
inflammatory|adj|জ্বালাময়|Incendiary, Provocative|conf
influx|n|অন্তঃপ্রবাহ|Inflow, Arrival|move
ingenuity|n|উদ্ভাবনী দক্ষতা / চতুরতা|Creativity, Inventiveness|art
ingest|v|খাওয়া|Swallow, Consume, Absorbing|food
ingredient|n|উপাদান|Material, Components, Element|food
inhabit|v|বাস করা|Live In, Settle In, Dwell In|geo
inhabitants|n|অধিবাসী|Citizens, Dwellers, Occupants|soc
inhabitant|n|বাসিন্দা|Resident, Citizen|soc
inherent|adj|অন্তর্নিহিত|Intrinsic, Innate, Natural|desc
initiative|n|উদ্যোগ|Proposal, Scheme, Idea, Project|biz
injure|v|আঘাত করা|Hurt, Harm, Wound, Damage|health
innate|adj|সহজাত|Inherent, Natural, Inborn|char
innumerable|adj|অগণিত|Countless, Infinite|desc
inquisitive|adj|কৌতূহলী|Curious, Inquiring|char
inscribed|adj|খোদাই করা|Engraved, Carve|art
inscription|n|মুদ্রা লিপি|Engraving, Etching, Signature|art
instigate|v|উসকানি দেওয়া|Provoke, Incite|conf
instinct|n|প্রবৃত্তি|Nature, Character, Predisposition|char
instinctive|adj|স্বভাবজাত|Intuitive, Natural, Inborn|char
instruct|v|নির্দেশ দেওয়া|Direct, Order|comm
insulation|n|অন্তরণ / তাপনিরোধ|Protection, Shielding|sci
intact|adj|অক্ষত / অবিকৃত|Complete, Unbroken, Undamaged|desc
intake|n|গ্রহণ|Consumption, Absorption|food
integral|adj|অবিচ্ছেদ্য|Essential, Fundamental|struct
integrate|v|একীভূত করা|Combine, Merge, Incorporate|struct
intellectual|adj|বুদ্ধিজীবী|Thinker, Scholar, Knowledgeable|acad
intellect|n|বুদ্ধিবৃত্তি|Wit, Discernment, Sense|acad
intergenerational|adj|আন্তঃপ্রজন্মীয়|Between Generations|soc
interlock|v|পরস্পর সংযুক্ত হওয়া|Interconnect|struct
interlude|n|বিরতি|Interval, Pause|time
interminable|adj|অন্তহীন|Endless, Eternal|time
intermittent|adj|বিরামচিহ্নিত|Sporadic, Irregular|time
intermittently|adv|মাঝে মাঝে|Sporadically, Irregularly|time
internalized|adj|অন্তরীণ করা|Absorb, Accommodate|acad
interpersonal|adj|আন্তঃব্যক্তিক|Social, Relational, Mutual|soc
interpret|v|ব্যাখ্যা করা|Explain, Understand, Comprehend, Translate|acad
interpretation|n|ব্যাখ্যা|Clarification, Understanding, Explanation|acad
interprets|v|ব্যাখ্যা করা|Explain, Renders, Perform|acad
intersperse|v|মিশিয়ে দেওয়া|Scatter, Intermingle|desc
intervention|n|হস্তক্ষেপ|Involvement, Interference|law
interventions|n|হস্তক্ষেপ|Involvements|law
intriguing|adj|কৌতূহলোদ্দীপক|Fascinating, Interesting|desc
intrinsic|adj|অন্তর্নিহিত / সহজাত|Inherent, Innate, Inborn, Natural|desc
inundate|v|প্লাবিত করা|Flood, Overwhelm|env
invasion|n|আক্রমণ|Attack, Onslaught, Foray|conf
invasive|adj|আক্রমণকারী / আক্রমণাত্মক|Aggressive, Spreading|conf
invader|n|আক্রমণকারী|Attacker, Assailant, Intruder|conf
ironically|adv|বিদ্রূপাত্মকভাবে|Paradoxically, Oddly|emo
irrational|adj|অমৌলিক|Fallacious, Illogical|char
itinerary|n|ভ্রমণসূচি|Travel Plan, Route|move
jeopardy|n|বিপদ|Danger, Risk|conf
jeopardise|v|ঝুঁকিতে ফেলা|Endanger, Threaten|conf
juggle|v|সামলানো|Manage, Balance|every
jurisdiction|n|এখতিয়ার|Authority, Control|law
jurisdictions|n|আইনগত অধিকার|States, Province, Area|law
just|adj|ন্যায্য|Fair, Righteous|law
kennel|n|কুকুরের ঘর|Doghouse|every
keynote|n|মূল / প্রধান|Main, Principal|comm
kindred spirit|n|সমমনা ব্যক্তি|Soulmate|soc
knack|n|কৌশল|Talent, Ability, Skill|char
laboriously|adv|শ্রমসাধ্য|Arduously, Strenuously, Hard|every
lament|n|বিলাপ|Mourning, Regret|emo
landscapes|n|ভূদৃশ্য|Scenery, Topography|geo
lapse|n|ত্রুটি|Error, Slip|every
latitudes|n|প্রসার|Scope, Parallel, Freedom|geo
legislation|n|আইন|Regulation, Arrangement|law
lesion|n|ক্ষত|Wound, Injury|health
liability|n|দায়|Obligation, Responsibility, Accountability|biz
lid|n|ঢাকনা|Cap, Top, Cover|every
likelihood|n|সম্ভাবনা|Probability, Chance|acad
liken|v|তুলনা করা|Compare|acad
likewise|adv|একইভাবে|Similarly, Also|comm
linger|v|দেরি করা|Stay, Remain|time
linked|adj|সংযুক্ত|Connected, Associated|every
literacy|n|সাক্ষরতা|Ability To Read/Write|soc
literally|adv|আক্ষরিকভাবে|Exactly, Word For Word|comm
livelihood|n|জীবিকা|Subsistence, Living, Profession|biz
loath|adj|অনিচ্ছুক|Reluctant, Unwilling|char
locomotion|n|চলাচল|Movement, Motion|move
lofty|adj|উচ্চ|High, Elevated|desc
lonesome|adj|একাকী|Lonely, Solitary, Isolated|emo
looming|adj|আসন্ন|Threatening, Alarming, Frightening|emo
looms|v|ভীতি উদ্রেককারী|Brew, Dominate, Emerge, Overshadow|emo
lucrative|adj|লাভজনক|Gainful, Profitable, Money-Making, Beneficial|biz
lucid|adj|স্বচ্ছ|Clear, Understandable|desc
lumber|n|কাঠ|Wood, Logs, Timber, Planks|env
luminous|adj|দীপ্তিমান|Bright, Glowing|sci
lure|n|প্রলোভন|Tempt, Attract|biz
lurk|v|লুকিয়ে থাকা|Hide, Skulk|conf
majestic|adj|মহিমান্বিত / রাজকীয়|Grand, Magnificent|desc
makeshift|adj|অস্থায়ী|Temporary, Improvised|desc
malicious|adj|বিদ্বেষপূর্ণ / ক্ষতিকর|Spiteful, Harmful, Malevolent|char
mandate|n|আদেশ|Order, Command|law
manipulate|v|হাত দ্বারা কার্য করা|Control, Manage|biz
manoeuvre|n|কৌশল|Strategy, Tactic|conf
manuscript|n|পাণ্ডুলিপি|Document, Draft|art
manure|n|গোবর সার|Fertilizer|food
mastery|n|আয়ত্ত|Proficiency, Knowledge, Ability|acad
materialize|v|বাস্তবায়িত হওয়া|Appear, Happen|time
maximisation|n|সর্বাধিকীকরণ|Increasing To The Highest Degree|biz
meadow|n|তৃণভূমি|Grassland, Pasture|env
medieval|adj|মধ্যযুগীয়|Antique, Knightly|time
mediocre|adj|সাধারণ মানের|Average, Ordinary|desc
melancholy|n|বিষণ্ণতা|Sadness, Depression|emo
menace|n|হুমকি|Threat, Peril, Danger, Scare|conf
metropolis|n|মহানগর|Large City|geo
meticulous|adj|সূক্ষ্ম|Careful, Precise|char
meticulously|adv|নিখুঁতভাবে|Thoroughly, Carefully|char
microbes|n|জীবাণু|Germs, Virus, Bacilli|sci
microbe|n|জীবাণু|Germ, Microscopic Insect|sci
microscopic|adj|আণুবীক্ষণিক|Tiny, Minute, Atomic|sci
mild|adj|মৃদু|Gentle, Moderate|desc
milder|adj|মৃদু|Warmer, Pleasanter, Clement|env
mildly|adv|মৃদুভাবে|Gently, Meekly|desc
mindful of|adj|সচেতন|Aware, Attentive|char
misconduct|n|অসদাচরণ|Wrongdoing, Malpractice|law
misperceptions|n|ভুল ধারণা|Misconception, Misinterpretation|acad
mitigate|v|উপশম করা|Lessen, Reduce, Alleviate|env
mitigating|adj|নির্বাপক|Extinguishing, Alleviating|env
mobilise|v|সচল করা|Move, Activate|every
moderate|adj|মাঝারি|Average, Modest|desc
molar|n|পেষণ দাঁত|Back Tooth|body
molasses|n|গুড়|Sugar, Honey|food
molecule|n|অণু|Particle, Atom, Grain, Mote|sci
mollusc|n|মোলাস্ক / নরম দেহের প্রাণী|Shellfish|env
monarch|n|রাজা|King, Ruler|law
monopolise|v|একচেটিয়া করা|Control Exclusively|biz
monstrous|adj|দৈত্যাকার|Huge, Enormous|desc
monumental|adj|স্মারক|Historic, Classic, Fascinating|soc
morale|n|মনোবল|Confidence, Spirit|emo
moralistic|adj|নৈতিকতাবাদী|Didactic, Prudish|char
mortality|n|মৃত্যুহার|Death Rate, Fatality|health
motives|n|উদ্দেশ্য / অভিপ্রায়|Intent, Purpose, Objective|char
motivate|v|অনুপ্রাণিত করা|Inspire, Encourage, Stimulate|emo
motivations|n|অনুপ্রেরণা|Motive, Reasons|char
motto|n|নীতিবাক্য|Slogan, Saying|comm
moulded|adj|ঢালাই / চটকান|Cast, Manhandled|struct
mounting|n|মাউন্ট|Encasing, Exhibiting, Installing|struct
mounds|n|ছোট পাহাড়|Hills, Heaps, Piles|geo
mountainous|adj|পাহাড়ী|Hilly, Rocky|geo
mountaineer|n|পর্বতারোহী|Hiker, Climber, Rock Climber|move
muffle|v|চাপা দেওয়া|Suppress, Dampen|comm
mulberry|n|তুঁত গাছ|Blueberry, Plum, Grape|food
multitude|n|বহুসংখ্যক / বহু|Large Number|desc
mural|n|দেয়ালচিত্র|Wall Painting|art
mythology|n|পৌরাণিক|Myths, Tradition, Fables|art
naive|adj|সরল|Innocent, Unsophisticated|char
narratives|n|কাহিনী|Tales, Stories|comm
navigate|v|নেভিগেট করা / পথ চলা|Steer, Direct, Voyage, Guide|move
navigability|n|নাব্যতা|Sailing, Boating, Shipping|move
nearly|adv|প্রায়|Almost, Approximately|every
neonatal|adj|নবজাতক|Newborn, Infant|health
neural pathways|n|স্নায়বিক পথ|Nerve Tract|body
niche|n|কুলুফি / উপযুক্ত|Place, Position, Area, Corner|geo
nocturnal|adj|রাত্রিচর / রাতে সক্রিয়|Night-Active, Crepuscular|env
nominal|adj|নামমাত্র|Minimal, Token|biz
nominate|v|মনোনীত করা|Propose, Suggest|law
noteworthy|adj|লক্ষণীয়|Notable, Remarkable|desc
notion|n|ধারণা|Idea, Concept, Conception, Perception|acad
notorious|adj|কুখ্যাত|Infamous, Famed, Renowned|desc
nourish|v|পুষা|Nurture, Cultivate, Strengthen, Enrich|food
nourishes|v|লালন-পালন করা|Rear, Feed, Support|food
novelty|n|নতুনত্ব|Newness, Freshness|time
novelties|n|নতুনত্ব|Newness, Freshness|time
nuance|n|অতি সূক্ষ্ম পার্থক্য|Shade, Subtlety, Distinction|desc
numeracy|n|সংখ্যাজ্ঞান|Mathematical Ability|acad
obesity|n|স্থূলতা / অতিস্থূল|Fatness, Overweightness|health
obligation|n|দায়িত্ব / কর্তব্য|Responsibility, Duty, Liability|law
oblige|v|বাধ্য করা|Compel, Require, Force, Coerce|law
obligated|adj|বাধ্য|Grateful, Appreciative, Thankful|law
obscure|adj|অস্পষ্ট|Unclear, Vague, Dim, Fuzzy, Mystical|desc
obscured|adj|অস্পষ্ট|Hidden|desc
obscurity|n|প্রচ্ছন্নতা|Ambiguity, Gloom|desc
obsess|v|আচ্ছন্ন করা|Preoccupy, Haunt|emo
obsessed|adj|আক্রান্ত / আচ্ছন্ন|Distressed, Sullen, Demoniac|emo
obstacle|n|বাধা|Hindrance, Barrier, Problem, Difficulty|conf
off-limits|adj|নাগালের বাইরে|Forbidden, Illicit, Impermissible|law
offshore|adj|উপকূল থেকে দূরে|Seaward|geo
omnivorous|adj|সর্বভুক|All-Eating, Mixed-Diet|env
onwards|adv|পরবর্তীতে|Forwards, Ahead, Straight On|time
opaque|adj|অস্বচ্ছ|Cloudy, Murky|desc
operate|v|পরিচালনা করা|Run, Manage|every
oppose|v|প্রতিরোধ করা|Be Against, Object To, Disagree With|conf
oppression|n|নিপীড়ন|Tyranny, Subjugation|conf
optimal|adj|সর্বোত্তম|Finest, Prime, Best|desc
optimistic|adj|আশাবাদী|Hopeful, Positive, Cheerful, Confident|emo
opulence|n|ঐশ্বর্য|Wealth, Affluence, Richness|biz
oral|adj|মৌখিক|Viva, Vocal|comm
orchestrate|v|সংগঠিত করা|Arrange, Coordinate|art
ordeal|n|পরীক্ষা|Trial, Tribulation|conf
ornate|adj|অলংকৃত|Decorated, Elaborate|art
orthodox|adj|গোঁড়া|Traditional, Conventional|soc
ostensible|adj|আপাতত|Apparent, Seeming|desc
ostensibly|adv|আপাততদৃষ্টিতে|Apparently, Seemingly|desc
ostracise|v|বহিষ্কৃত করা|Exclude, Reject, Boycott|soc
ostracism|n|বহিষ্কার|Isolation, Exclusion, Keeping Out|soc
otherwise|adv|অন্যথায়|Alternatively, Else|every
outbreak|n|প্রাদুর্ভাব|Prevalence, Epidemic|health
outburst|n|বিস্ফোরণ|Eruption, Flare-Up|emo
outlook|n|আউটলুক / দৃষ্টিভঙ্গি|Viewpoint, Attitude, Position, View|comm
outlived|v|জীবিত / বেঁচে থাকা|Live, Survive, Subsist|time
outraged|v|অত্যাচার করা|Incense, Enrage|emo
outskirt|n|শহরতলি|Suburbs, Periphery|geo
outskirts|n|শহরতলি|Suburbs, Periphery|geo
outsource|v|বাইরে থেকে নেওয়া|Contract Out, Farm Out|biz
outstrip|v|ছাড়িয়ে যাওয়া|Surpass, Exceed|biz
outward|adj|বাহ্যিক|External, Outer|desc
outweigh|v|বেশি গুরুত্বপূর্ণ হওয়া|Outbalance, Prevail|desc
over-connected|adj|অতিসংযুক্ত|Excessively Connected|soc
overexploit|v|অতিরিক্ত শোষণ করা|Overuse|env
overfish|v|অতিরিক্ত মাছ ধরা|Deplete Fish Stock|env
overlook|v|উপেক্ষা করা|Ignore, Miss, Neglect|every
overly|adv|অতিরিক্তভাবে|Too, Very|desc
overpopulation|n|অতিরিক্ত জনসংখ্যা|Excessive Population|soc
overriding|adj|সর্বাধিক গুরুত্বপূর্ণ|Paramount, Supreme|desc
overrun|v|পরিপূর্ণ করা|Invade, Spread|conf
oversee|v|তদারকি করা|Supervise, Monitor|biz
overt|adj|প্রকাশ্য|Open, Apparent|desc
overwhelm|v|অভিভূত করা|Overpower, Inundate|emo
owe|v|ঋণী হওয়া|Be Indebted, Be Obliged|biz
pacifier|n|প্রশান্তকারী|Peacemaker, Comforter, Pacifist|soc
painstaking|adj|শ্রমসাধ্য|Meticulous|char
palpable|adj|স্পষ্ট / অনুভবযোগ্য|Tangible, Obvious|desc
panacea|n|সর্বব্যাধিহর ঔষধ|Cure-All, Heal-All|health
panache|n|ডাঁই করা|Dash, Verve, Style|art
panicked|adj|আতঙ্কিত|Nervous, Worried, Frightened|emo
paradigm|n|দৃষ্টান্ত|Model, Pattern|acad
paralyse|v|পক্ষাঘাতগ্রস্ত করা|Immobilize|health
paramount|adj|সর্বোচ্চ|Supreme, Foremost|desc
paranoia|n|প্যারানোয়া|Insanity, Delusion|health
parasite|n|পরজীবী|Leech, Dependent|env
parch|v|শুকানো|Dry, Dehydrate|env
partially|adv|আংশিকভাবে|Partly, Somewhat|every
particular|adj|নির্দিষ্ট|Specific, Special|desc
pass away|v|মারা যাওয়া|Die, Decease|soc
passion|n|প্রচণ্ড আবেগ|Affection|emo
passionate|adj|আবেগপ্রবণ|Ardent, Fervent|emo
passionately|adv|আবেগের সাথে / মনেপ্রাণে|Emotionally, Eagerly|emo
pathogen|n|রোগজীবাণু|Germ, Microbe|health
pathogenic|adj|রোগ-সৃষ্টিকারী|Infective, Unhealthful|health
patience|n|ধৈর্য|Tolerance, Forbearance|char
patient|adj|ধৈর্যশীল / সহিষ্ণু|Tolerant, Enduring, Forbearing|char
patron|n|পৃষ্ঠপোষক|Supporter, Protector, Sponsor|soc
patrons|n|পৃষ্ঠপোষক|Supporters, Protectors, Sponsors|soc
peculiar|adj|অদ্ভুত|Strange, Weird, Unusual, Abnormal|desc
pedantic|adj|অতিরিক্ত খুঁটিনাটি|Meticulous, Overly Exacting|char
peer|n|সমকক্ষ|Equal, Fellow|soc
penalty|n|জরিমানা|Punishment, Fine|law
penetrate|v|অনুপ্রবেশ করা|Pierced, Infiltrated, Drilled|move
perceived|adj|অনুভূত|Felt, Received|emo
perceive|v|উপলব্ধি করা|Recognize, Understand, See, Sense|acad
perception|n|উপলব্ধি|Insight, View, Opinion, Awareness|acad
perceives|v|অনুভব করা|Observes, Feels|acad
performance|n|কার্যক্ষমতা / কর্মক্ষমতা|Presentation, Effectiveness, Result|art
peril|n|ভয়ানক বিপদ|Risk, Danger, Threat|conf
peripheral|adj|সীমান্তবর্তী|Outer, External, Marginal|geo
periphery|n|পরিধি|Edge, Outskirts|geo
perish|v|ধ্বংস হওয়া|Die, Vanish|conf
permit|n|অনুমতি / লাইসেন্স|License, Authorization|law
perpendicular|adj|লম্ব|Vertical, Upright|struct
perpetual|adj|চিরস্থায়ী|Eternal, Everlasting|time
perplexing|adj|বিভ্রান্তিকর|Complex, Complicated|emo
persist|v|স্থায়ী অবস্থায় থাকা|Hold, Carry On, Last|time
personnel|n|কর্মী|Worker, Staff, Employee|biz
perspective|n|দৃষ্টিভঙ্গি / পরিপ্রেক্ষিত|Viewpoint, Outlook, Standpoint, Aspect|comm
persuade|v|বোঝানো|Convince, Influence, Prompt|comm
persuaded|adj|প্ররোচক|Convinced, Sure, Satisfied|comm
pertinent|adj|প্রাসঙ্গিক|Relevant, Appropriate|desc
pertinently|adv|প্রাসঙ্গিকভাবে|Appropriately, Suitably, Fittingly|desc
pest|n|কীট|Vermin, Insect|env
pesticide|n|কীটনাশক|Poison, Insecticide, Herbicide|env
pests|n|কীট|Vermin|env
phenomenal|adj|অসাধারণ|Extraordinary, Remarkable|acad
phenomenon|n|ঘটনা বিষয়|Occurrence, Happening|acad
philosophy|n|দর্শন|Idea, Viewpoint|acad
picturesque|adj|মনোরম|Scenic, Beautiful|geo
pierce|v|ভেদ্র করা|Puncture, Drill|every
pinpoint|v|নির্দেশ / সঠিকভাবে চিহ্নিত করা|Locate, Identify, Find|acad
pioneer|n|পথিকৃৎ / অগ্রগামী|Trailblazer, Innovator, Inventor|biz
pitch|n|মাত্রা|Throw, Toss|art
pivotal|adj|পিভট-সংক্রান্ত|Key, Paramount, Crucial|desc
placid|adj|শান্ত|Calm, Peaceful|char
plague|v|জ্বলাতন করা|Disease, Epidemic, Pandemic|health
plantation|n|বাগান / চাষাবাদ|Estate, Farm, Large Farm|food
plateau|n|মালভূমি|Tableland|geo
plausible|adj|বিশ্বাসযোগ্য|Credible, Believable, Reliable, Possible|desc
plea|n|অনুরোধ|Request, Appeal|comm
pleasant|adj|আনন্দদায়ক|Agreeable, Enjoyable|emo
pleasurable|adj|আনন্দদায়ক|Pleasant, Delightful, Satisfying|emo
plentiful|adj|প্রচুর|Abundant, Bountiful|desc
pliable|adj|নমনীয়|Easily Bent, Flexible|desc
plough|v|হাল চাষ করা|Cultivate, Till|food
plummet|v|খসে পড়া|Dive, Fall|move
plummeted|v|নিমজ্জিত|Dive, Fell|move
pods|n|শুঁটি|Husk, Shuck|food
poach|v|চোরাশিকার করা|Illegally Hunt|env
poison|n|বিষ|Contaminate, Taint|health
polar|adj|মেরু|Arctic, Antarctic|geo
polarized|adj|সংহত|Centered, Centralized, Compacted|desc
portray|v|বর্ণনা করা|Depict, Describe|art
portrait|n|প্রতিকৃতি|A Drawing, Painting, Photograph|art
possess|v|অধিকারী|Own, Have, Retain|biz
possessed|adj|আচ্ছন্ন|Owned, Possess|biz
possessions|n|সম্পত্তি / মালিকানা|Asset, Ownership, Wealth|biz
postulate|v|অনুমান করা|Assume, Hypothesize|acad
pottery|n|মৃৎপাত্র|Earthenware, Crockery, Clay Pot|art
practitioner|n|পেশাদার|Professional|biz
prairie|n|বৃক্ষহীন তৃণভূমি|Plain, Grassland, Savannah|env
precarious|adj|অনিশ্চিত / অস্থির|Uncertain, Unstable|char
precaution|n|সতর্কতা|Safeguard, Protection|health
precautions|n|সতর্কতা|Safeguards, Protection|health
precede|v|পূর্বে ঘটে থাকা|Come Before, Antedate|time
precedent|n|নজির|Example, Model|law
preceding|adj|পূর্ববর্তী|Previous, Prior|time
precious|adj|মূল্যবান|Valued, Cherished, Treasured, Priceless|desc
precision|n|স্পষ্টতা|Precision, Legibility|desc
preclude|v|বাধা দেওয়া|Prevent, Hinder|conf
predecessor|n|পূর্বসূরী|Ancestor, Forefather, Sire|time
predecessors|n|পূর্বপুরুষ|Ancestors, Forefather|time
predate|v|পূর্বে ঘটে থাকা|Precede, Earlier|time
predated|adj|পূর্ববর্তী|Earlier|time
predator|n|শিকারি প্রাণী|Carnivore, Hunter, Beast|env
predator-free|adj|শিকারিমুক্ত|Safe From Predators|env
predisposed|adj|পূর্বনির্ধারিত|Inclined, Prone|char
predisposition|n|প্রবণতা|Tendency, Predilection|char
predominant|adj|প্রধান|Flourishing, Ascendant|desc
predominantly|adv|প্রধানত|Mainly, Principally, Mostly, Largely|desc
preemptively|adv|প্রতিরক্ষামূলক|Preventative, Precautionary|health
preface|n|ভূমিকা|Introduction, Foreword|art
preferable|adj|পছন্দনীয়|Better, Desirable|desc
preferential|adj|অগ্রাধিকারমূলক|Biased, Discriminative|law
prehistoric|adj|প্রাগৈতিহাসিক|Ancient, Earliest, Antique, Primal|time
prejudice|n|কুসংস্কার|Bias, Discrimination, Unfairness|soc
prejudices|n|পক্ষপাত|Harm, Detriment|soc
premises|n|প্রাঙ্গণ|Property, Building|geo
premonition|n|পূর্বাভাস|Foreboding, Presentiment|emo
preoccupied|adj|মগ্ন|Absorbed, Engrossed|emo
prescribe|v|নির্দেশ দেওয়া|Order, Recommend|health
presence|n|উপস্থিতি|Availability, Arrival, Emergence|time
preserving|v|অক্ষুণ্ন রাখা|Maintain, Safeguard|env
prestige|n|প্রতিপত্তি|Reputation, Fame, Honour|soc
prestigious|adj|মর্যাদাপূর্ণ|Reputable, Distinguished|soc
presumably|adv|সম্ভবত|Seemingly, Apparently|acad
presume|v|অনুমান|Assume, Guess, Suppose|acad
presupposition|n|অনুমান|Assumption, Supposition|acad
pretence|n|ভান|Pretense, Make-Believe|emo
prevalent|adj|প্রচলিত / প্রভাবশালী / ব্যাপক|Usual, Common, Dominant, Rife, Popular|soc
primacy|n|প্রাধান্য|Supremacy, Priority|desc
primates|n|প্রাইমেট|Anthropoid, Hominoid|env
primitive|adj|আদিম|Pristine, Primordial, Ancient, Savage|time
prioritize|v|অগ্রাধিকার|Rank, Order|every
prise|v|শক্ত করে খোলা|Pry|every
pristine|adj|আদিম|Original, Pure|env
privilege|n|বিশেষাধিকার|Advantage, Right|soc
probe|v|অনুসন্ধান করা|Investigate, Explore|acad
procedure|n|পদ্ধতি|Method, Process, Course Of Action|every
proclaim|v|ঘোষণা করা|Announce, Declare, Assert|comm
procrastination|n|গড়িমসি / বিলম্ব|Delay, Postponement|time
procure|v|সংগ্রহ করা|Obtain, Acquire|biz
prodigious|adj|বিস্ময়কর|Amazing, Surprising, Astonishing|desc
produce|v|উৎপাদন করা|Create, Generate|food
produced|adj|উৎপাদিত|Grown, Created, Made|food
productive|adj|উৎপাদনশীল|Practical, Useful, Helpful, Effective|char
prohibit|v|নিষিদ্ধ করা|Ban, Forbid|law
prohibitive|adj|নিষিদ্ধ|Preventive, Prophylactic|law
projectile|n|ক্ষেপণাস্ত্র|Missile|sci
prolong|v|দীর্ঘায়িত করা|Extend, Elongate|time
prolonged|adj|দীর্ঘায়িত|Extended, Expanded, Stretched|time
prominent|adj|প্রধান / বিশিষ্ট|Noticeable, Important, Famous, Renowned|desc
prone to|adj|প্রবণ হওয়া|Likely To Get, Likely To Have|health
propellant|n|চালক|Propeller, Thrust|sci
propeller|n|চালক|Fan, Screws, Prop|sci
propel|v|চালিত করা|Drive, Push|move
proper|adj|সঠিক|Appropriate, Suitable, Apt|desc
prosper|v|সমৃদ্ধ হওয়া|Thrive, Flourish|biz
prosperity|n|সমৃদ্ধি|Wealth, Success, Affluence|biz
prosperous|adj|সমৃদ্ধ|Rich, Wealthy|biz
protection|n|সুরক্ষা|Defense, Safeguard|law
protest|n|প্রতিবাদ|Objection, Demonstration|law
protracted|adj|দীর্ঘায়িত|Prolonged, Extended|time
province|n|প্রদেশ|State, Region, County|geo
provincial|adj|প্রাদেশিক|Regional, Local|geo
provision|n|বিধান|Supply, Arrangement|law
provoke|v|উসকানি দেওয়া|Incite, Stimulate|conf
proximity|n|নৈকট্য|Closeness, Nearness|geo
prudent|adj|বিচক্ষণ|Wise, Cautious|char
punctual|adj|সময়নিষ্ঠ|On Time, Prompt|char
punishable|adj|শাস্তিযোগ্য / দণ্ডনীয়|Culpable, Condemnable, Penal|law
purist|n|বিশুদ্ধতাবাদী|Traditionalist|acad
pursue|v|অনুসরণ করা / ইচ্ছুক করা|Chase, Follow, Hunt, Proceed|every
pursuit|n|সাধনা / অন্বেষণ|Chase, Quest, Pastime, Interest|acad
qualitative|adj|গুণগত|Quality-related|acad
quench|v|নিবারণ|Extinction, Slaking, Destruction|health
query|n|প্রশ্ন|Question, Inquiry|comm
queue|n|সারি|Line|every
quirk|n|অদ্ভুততা|Peculiarity, Idiosyncrasy|char
quota|n|কোটা|Allocation, Share|biz
quotas|n|কোটা|Ration, Shares|biz
radical|adj|মৌলিক|Revolutionary, Progressive|soc
ragged|adj|জীর্ণ|Torn, Tattered|desc
rapport|n|সম্পর্ক|Relationship, Connection|soc
rationale|n|যুক্তি|Reasoning, Logic|acad
ravines|n|গভীর|Canyons, Chasms|geo
readily|adv|সহজে|Easily, Willingly|every
reap|v|লাভ করা / ফসল কাটা|Harvest, Gain|food
rear|v|পিছনে|Raise, Nurture, Look After|soc
reasonable|adj|যুক্তিসঙ্গত|Fair, Sensible|char
rebel|n|বিদ্রোহী|Insurgent, Revolutionary|conf
rebuilt|adj|পুনর্নির্মিত|Reconstruct, Renovate|struct
recede|v|পিছিয়ে আসা / কমে যাওয়া|Regress, Retreat|env
recession|n|মন্দা|Downturn, Decline, Collapse|biz
recline|v|হেলান দেওয়া|Lean Back, Lie Back|every
reclining|adj|হেলান দেওয়া|Reposing, Relax|every
recognition|n|স্বীকৃতি|Confession, Acknowledgment|soc
recognize|v|চিনতে পারা|Realize, Identify, Know|acad
recollection|n|স্মরণ|Thinking, Meditation|acad
recommendation|n|সুপারিশ|Suggestion, Advice|every
reconcile|v|পুনর্মিলন করা|Reunite, Resolve|soc
reconstruction|n|পুনর্গঠন|Recast, Reformation, Alteration|struct
recruited|v|সম্মিলিত করা|Hire, Employed|biz
recruitment|n|নিয়োগ|Employment, Staffing|biz
rectangular|adj|আয়তাকার|Oblong, Quadrilateral|struct
recur|v|পুনরায় ঘটে যাওয়া|Repeat, Reoccur|time
recurring|adj|পুনরায় ঘটে যাওয়া|Regular, Frequent|time
redeem|v|খালাস|Exchange, Convert|biz
redundant|adj|অপ্রয়োজনীয়|Additional, Extra, Spare|biz
redundancies|n|প্রাচুর্য|Repetitions|biz
reef|n|প্রবালপ্রাচীর|Coral Reef, Shoal|env
refer|v|উল্লেখ করা|Mention, Allude|comm
reference|n|উল্লেখ|Mention, Citation|acad
refine|v|পরিশোধিত করা|Purify, Improve|biz
refinement|n|পরিশোধন|Purification|biz
reform|v|সংস্কার|Improve, Amend|law
refrain|v|বিরত থাকা|Hold Back, Abstain|char
refuge|n|আশ্রয়|Access, Shelter|geo
regression|n|প্রত্যাগতি|Recoil, Throw-Back|time
regulate|v|নিয়ন্ত্রণ|Control, Adjust, Standardize|law
regulated|adj|নিয়ন্ত্রিত|Systematic, Regular|law
regulating|v|নিয়ন্ত্রণ|Controlling, Directing|law
regulation|n|নিয়ন্ত্রণ|Control, Management|law
regulatory|adj|নিয়ন্ত্রক|Controlling, Supervisory, Administrative|law
rehearse|v|মহড়া করা|Practice, Drill|art
reign|v|শাসন করা|Rule, Govern|law
reinforce|v|শক্তিশালী করা|Strengthen, Consolidate, Fortify|struct
reiterate|v|পুনরাবৃত্তি করা|Repeat, Restate|comm
rejuvenate|v|পুনরুজ্জীবিত করা|Revitalize, Restore|health
rekindle|v|পুনর্জীবিত করা|Rekindle|emo
relate|v|সম্পর্কিত করা|Connect, Associate|comm
relentless|adj|নিষ্ঠুর|Unstoppable, Persistent, Merciless|conf
reliance|n|নির্ভরতা|Dependence, Support|soc
relied|v|নির্ভর করা|Count On, Hinge, Lean|soc
relieve|v|উপশম করা|Alleviate, Ease|health
reluctant|adj|অনিচ্ছুক|Unwilling, Disinclined, Hesitant|char
reluctance|n|অনিচ্ছা|Unwillingness, Hesitancy|char
remedy|n|প্রতিকার|Cure, Treatment|health
remedies|n|প্রতিকার|Redress, Amends, Salve|health
reminiscent|adj|স্মৃতিবিজড়িত|Evocative, Suggestive|emo
remnant|n|অবশিষ্টাংশ|Remainder, Leftover, Residue|desc
remote|adj|দূরবর্তী / নির্জন / বিচ্ছিন্ন|Far-Off, Distant, Isolated|move
renaissance|n|নবজাগরণ|Renewal, Rebirth|time
renowned|adj|বিখ্যাত|Famous, Celebrated|desc
repeal|v|বাতিল|Cancel, Abolish, End|law
repeat|v|পুনরাবৃত্তি করা|Reiterate, Redo|comm
repel|v|প্রতিরোধ করা|Repulse, Drive Back|conf
replenish|v|পূরণ করা|Refill, Restore, Supply|env
replicable|adj|প্রতিলিপিযোগ্য|Reproducible, Copyable, Duplicable|acad
reproductive|adj|প্রজনন|Generative, Regenerative|body
repopulation|n|পুনর্বাসন|Reforestation, Resettling|soc
reputation|n|খ্যাতি|Fame, Renown|soc
requirement|n|প্রয়োজনীয়তা|Necessity, Prerequisite|every
rescue|n|উদ্ধার|Salvage, Relief|every
resembled|v|সদৃশ হওয়া|Paralleled, Simulated|desc
resent|v|বিরক্ত হওয়া|Dislike, Begrudge|emo
reserve|v|সংরক্ষণ|Keep, Book|env
reservoir|n|জলাধার|Tank, Water Gauge|env
residence|n|বাসস্থান|House, Home, Dwelling|geo
resident|n|বাসিন্দা|Inhabitant, Occupant|soc
residential|adj|আবাসিক|Housing, Domestic|geo
residual|adj|অবশিষ্ট|Remaining, Leftover|desc
resilience|n|স্থিতিস্থাপকতা / পুনরুদ্ধার ক্ষমতা|Endurance, Toughness, Elasticity|char
resilient|adj|স্থিতিস্থাপক / প্রাণবন্ত|Strong, Durable, Tough|char
resistance|n|প্রতিরোধ / বাধা|Immunity, Opposition, Endurance|conf
resistant|adj|সহ্যকারী|Covering, Prohibitive, Exclusive|health
resolution|n|রেজোলিউশন|Determination, Decision|char
resort|n|অবলম্বন|Support, Adopt, Shelter|move
respite|n|বিরতি / স্বস্তি|Break, Relief, Pause|time
respondent|n|উত্তরদাতা|Participant, Interviewee|acad
responded|v|প্রতিক্রিয়া / জবাব দেওয়া|Reply, React|comm
restrain|v|সংযত করা|Control, Restrict|char
resurgence|n|পুনরুত্থান|Revival, Reemergence|time
retention|n|ধারণ ক্ষমতা|Capacity, Holding|acad
retaliate|v|পাল্টা আক্রমণ করা|Strike Back, Revenge|conf
retaliation|n|বদলা / প্রতিফল|Reprisal, Retribution|conf
retrospect|n|পিছনে তাকানো|Review, Hindsight|time
retrospectively|adv|অতীতদৃষ্টিতে|In Retrospect|time
reunited|v|পুনরায় মিলিত হওয়া|Reunify, Assembled|soc
revealed|adj|প্রকাশ করা|Published, Expressed, Disclosed|comm
revere|v|শ্রদ্ধা|Respect, Admire|soc
revered|adj|শ্রদ্ধা|Admired, Honored, Esteemed|soc
reversal|n|বিপর্যয়|Turnaround, Setback|time
reversing|v|বাতিল করা|Reverse, Inverting, Repeal|time
revert|v|প্রত্যাবর্তন করা|Return, Go Back, Relapse|time
reversion|n|প্রত্যাবর্তন|Throwback, Regression|time
rhetoric|n|অলংকার|Oratory, Eloquence|comm
rhetorically|adv|অলঙ্কৃতভাবে|Articulate, Declamatory|comm
ridge|n|শৈলশিরা|Bluff, Rib, Edge, Point|geo
ridgeway|n|পাহাড়ি পথ|Track, Path, Trail|geo
rigorous|adj|কঠোর / নিখুঁত|Strict, Thorough, Severity, Discipline|acad
roam|v|ঘুরে বেড়ানো|Wander|move
robust|adj|বলিষ্ঠ / পরিপুষ্ট|Strong, Sturdy, Hard, Hearty|desc
row|n|গণ্ডগোল|Dispute, Fight|conf
rudimentary|adj|প্রাথমিক / অপরিণত|Basic, Elementary|acad
ruthless|adj|নির্মম / নিষ্ঠুর|Brutal, Cruel, Barbarous|char
sacred|adj|পবিত্র|Holy, Divine|soc
salient|adj|প্রধান|Prominent, Important|desc
salinity|n|লবণাক্ততা|Saltiness|env
salvage|n|উদ্ধার|Rescue, Save, Salvation|every
sanction|n|অনুমোদন|Approve, Authorize|law
sanctuary|n|অভয়ারণ্য|Refuge, Shelter|env
sanitation|n|স্যানিটেশন|Hygiene, Cleanliness|health
satire|n|ব্যঙ্গ|Parody, Irony|art
saturate|v|সম্পৃক্ত করা|Soak, Drench|sci
savoury|adj|ঝাল / নোনতা|Salty, Spicy|food
scaffolding|n|ভারা|Framework, Structure|struct
scandalous|adj|কেলেঙ্কারিপূর্ণ|Shocking, Disgraceful|soc
scarce|adj|দুর্লভ / দুষ্প্রাপ্য|Rare, Uncommon, Limited|desc
scarcity|n|অভাব|Dearth, Lack, Deficiency, Poverty|biz
scenic|adj|দর্শনীয়|Picturesque, Beautiful|geo
sceptical|adj|সন্দেহপ্রবণ|Skeptical, Suspicious|char
scepticism|n|সংশয়বাদ|Skepticism, Negativism|char
scholar|n|পণ্ডিত|Professor, Intellectual, Researcher|acad
scrutinise|v|সূক্ষ্মভাবে পরীক্ষা করা|Examine, Inspect|acad
scrutiny|n|সূক্ষ্মপরীক্ষা|Inspection, Study|acad
seamless|adj|বিরামহীন|Coherent, Consistent, Smooth|desc
seaweed|n|সমুদ্র উদ্ভিদ|Tangle, Wrack, Seagrass|env
secluded|adj|নিভৃত|Isolated, Private|geo
sediment|n|পলি / গাদ|Silt, Alluvium, Deposit|env
sediments|n|পলল|Dregs, Deposit|env
seem|v|মনে হয়|Feel, Suppose, Think|every
seemingly|adv|আপাততদৃষ্টিতে|Apparently, Superficially|desc
seldom|adv|কদাচিৎ|Rarely, Infrequently|time
sensation|n|সংবেদন / চাঞ্চল্য|Excitement, Phenomenon|emo
sensationalism|n|উত্তেজনাকর উপস্থাপন|Exaggeration|comm
serene|adj|শান্ত|Calm, Peaceful|char
serpent|n|সাপ|Snake, Viper|env
setbacks|n|বিপত্তি|Hazard, Danger, Trouble|conf
severe|adj|তীব্র|Harsh, Intense|desc
severely|adv|গুরুতরভাবে|Harshly, Strictly, Brutally|desc
shaft|n|শাখা / কুড়ালের হাতল|Handle, Shank, Axle|struct
sharpen|v|ধার দেওয়া|Hone, Focus|every
shear|v|লোম কাটা|Clip, Trim|food
shed|v|চালা / ঝরানো / বর্জন করা|Drop, Cast, Discard|env
sheer|adj|নিছক|Candid, Erect, Straight|desc
shipwreck|n|জাহাজডুবি|Wreck, Ruin|move
shore|n|কূল|Bank, Waterfront, Riverside|geo
shortcoming|n|ত্রুটি|Fault, Defect|char
shrink|v|সংকুচিত হওয়া|Contract, Diminish|struct
shrinking|adj|সংকুচিত|Bashful, Timid, Shy|char
shrivelled|adj|কুঁচকে যাওয়া|Shrunken, Wizened|desc
shrub|n|গুল্ম|Bush|env
shuffle|v|এলোমেলো করা|Mix, Rearrange|every
sieze|v|দখল করা|Capture, Seize|law
signalling|v|সংকেত / ইঙ্গিত দেওয়া|Indicate, Suggest|comm
signify|v|নির্দেশ করা|Indicate, Mean|comm
signifies|v|সূচিত হওয়া|Mean, Mark|comm
silhouette|n|ছায়াচিত্র|Outline, Profile|art
simmer|v|ফুটানো|Boil Gently, Stew|food
simultaneous|adj|যুগপত / সমসাময়িক|Synchronous, Contemporary|time
sincerely|adv|আন্তরিকভাবে|Genuinely, Truthfully|comm
singular|adj|একক|Unique, Exceptional|desc
sinister|adj|অশুভ|Evil, Ominous|char
skimming|v|দ্রুত আঁচড়ানো|Slide, Glide, Cream|acad
skis|n|সরু কাঠের পাদ|Runners, Skates|move
sleek|adj|মসৃণ|Smooth, Glossy|desc
slender|adj|সরু|Thin, Small|desc
sluggish|adj|মন্থর|Inert, Slack|desc
smelting|v|ধাতু বিগলন|Liquefying, Dissolving|sci
smuggle|v|পাচার|Smuggle, Kidnap|law
sniff|v|শ্বাস নেওয়া|Inhale, Breathe|body
soar|v|উড্ডয়ন|Climb, Rocket, Rise|move
soaring|adj|উড্ডয়ন / দ্রুত বৃদ্ধি পাওয়া|Lofty, Rising, Shoot Up|move
social acceptance|n|সামাজিক স্বীকৃতি|Public Approval, Cultural Acceptance|soc
societal|adj|সামাজিক|Social, Public, Community|soc
sociologist|n|সমাজবিজ্ঞানী|Pollster, Analyst|acad
sober|adj|সংযত|Serious, Solemn|char
solidify|v|দৃঢ় করা|Harden, Strengthen|struct
solitary|adj|একাকী / নিঃসঙ্গ|Lone, Reclusive, Isolated, Lonely|emo
solution|n|সমাধান|Key, Answer, Resolution|acad
somber|adj|বিষণ্ণ|Gloomy, Dark|emo
sophisticated|adj|অত্যাধুনিক / বাস্তব বুদ্ধিসম্পন্ন|Complex, Advance, Smart, Worldly|desc
sought|v|খোঁজা|Searched, Pursued|every
sovereign|adj|সার্বভৌম|Supreme, Independent|law
spacious|adj|প্রশস্ত|Wide, Ample, Broad, Roomy|geo
span|n|বিস্তার|Extend, Stretch|struct
sparse|adj|বিক্ষিপ্ত|Scattered, Thin|env
sparsely|adv|বিরলভাবে / ফাঁকাফাঁকাভাবে|Barely, Rarely, Seldom|env
spawn|v|ডিম পাড়া / প্রজনন করা|Reproduce, Lay Eggs|env
spearhead|v|নেতৃত্ব দেওয়া|Lead, Pioneer|biz
spectacularly|adv|দর্শনীয়ভাবে|Impressively, Dramatically|desc
spectator|n|দর্শক|Watcher, Viewer, Seer|soc
spectacles|n|চশমা|Glasses, Specs|every
spectrum|n|বর্ণালি / বিস্তৃত পরিসর|Range, Variety|desc
speculation|n|জল্পনা|Assumption, Theory, Guess, Prediction|acad
speculate|v|অনুমান করা|Guess, Hypothesis, Conjecture|acad
spike|n|হঠাৎ বৃদ্ধি|Surge, Rise Sharply|biz
spill over|v|ছড়িয়ে পড়া|Overflow, Spread|every
spirited|adj|প্রাণবন্ত|Lively, Energetic|char
spoil|v|লুণ্ঠন|Ruin, Destroy|conf
spontaneous|adj|স্বাধীন ইচ্ছামূলক / স্বতঃস্ফূর্ত|Natural, Unplanned, Impulsive|char
spontaneously|adv|স্বতঃস্ফূর্তভাবে|Effortlessly, Naturally, Freely|char
sporadic|adj|বিক্ষিপ্ত|Intermittent, Irregular|time
sprawl|v|টানা / ছড়িয়ে পড়া|Stretch, Drag, Spread|move
springs|n|উদয়|Flourishing, Debut, Emergence|time
sprout|n|অঙ্কুর / ছোট বৃক্ষ|Sapling, Germ|food
spur|n|উদ্দীপনা|Encourage, Stimulate, Boost|emo
squander|v|অপচয়|Waste, Consume|biz
squashed|adj|চাপা দেওয়া|Crushed, Smashed|desc
stagnant|adj|স্থবির|Inactive, Motionless|biz
stakeholder|n|স্বার্থসংশ্লিষ্ট পক্ষ / স্টেকহোল্ডার|Participant, Interested Party|biz
stale|adj|বাসি|Old, Stagnant|food
stand up to|v|প্রতিরোধ করা|Resist, Confront|conf
staple|n|প্রধান|Foremost, Paramount, Main|food
startle|v|চমকে দেওয়া|Surprise, Shock|emo
starvation|n|অনাহার / খাদ্য না পেয়ে থাকা|Hunger, Famine, Food Shortage|food
steep|adj|খাড়া / কষ্টসাধ্য|Dramatic, Sharp, Extreme|geo
steering|n|চালনা|Guiding, Directing|move
stems|n|বৃক্ষের কান্ড|Trunks|env
stereotype|n|স্টেরিওটাইপ|Cliché, Generalization|soc
sterile|adj|অনুর্বর|Unproductive, Fruitless|health
stew|n|স্টু|Boil, Brood|food
stifled|adj|কণ্ঠ রোধ করা|Faint, Muted|emo
stimulate|v|উদ্দীপিত করা / চেতনা|Excite, Inspire, Provoke, Motivate|emo
stimulated|adj|অনুপ্রাণিত|Aroused, Excited|emo
stimulating|adj|উদ্দীপক|Exciting, Tonic, Stirring|emo
stimulus|n|উদ্দীপক|Incentive, Spur, Input|sci
stimuli|n|অনুপ্রেরণা|Input, Incentive|sci
stitch|v|সেলাই করা|Sew, Mend|art
stitching|n|সেলাই|Seam, Sew|art
stock|n|সংরক্ষণ|Keep, Have, Carry, Supply|biz
stoic|adj|ধৈর্যশীল|Patient, Enduring|char
storage|n|সঞ্চয়|Warehouse, Depository|biz
strategies|n|কৌশল|Policies, Plans|biz
strenuous|adj|পরিশ্রমসাধ্য|Arduously, Vigorous|conf
stretches|n|প্রসারিত / বিস্তার|Extension, Spread, Expansion|struct
stretched|adj|টানা|Pulled, Continuous, Tight|struct
stretching|v|প্রসারিত করা|Reach, Enlarge, Prolong|struct
strive|v|সংগ্রাম করা|Struggle, Attempt|conf
striving|v|সংগ্রাম করা|Struggle, Attempt|conf
struggled|v|সংগ্রাম করা / কষ্ট করা|Try Hard, Labour, Strive|conf
stubborn|adj|একগুঁয়ে|Opinionated, Obdurate|char
stunning|adj|অসাধারণ|Amazing, Mesmerizing|desc
sturdy|adj|বলিষ্ঠ|Robust, Durable, Strong|desc
subdue|v|বশীভূত করা|Defeat, Control|conf
subjective|adj|বিষয়ভিত্তিক|Personal, Biased|acad
submissive|adj|বিনয়ী|Compliant, Docile|char
subsequent|adj|পরবর্তী|Next, Following, After, Successive|time
subsequently|adv|পরবর্তীকালে|Afterwards, Later|time
subside|v|হ্রাস পাওয়া|Diminish, Slacken, Wane|env
subsidence|n|ধসে পড়া / বসে যাওয়া|Sinking, Collapse|geo
subsistence|n|অস্তিত্ব / জীবিকা|Existence, Livelihood, Profession|biz
subtle|adj|সূক্ষ্ম|Delicate, Fine, Exquisite, Skillful|desc
subtlety|n|সূক্ষ্মতা|Delicacy, Nuance|desc
subtly|adv|চতুরভাবে|Finely, Delicately, Nicely|desc
subtraction|n|বিয়োগ|Deduction|acad
suburban|adj|শহরতলির|Outlying|geo
suburb|n|শহরতলি|Outlying Area|geo
subversive|adj|ধ্বংসকারী|Destructive, Undermining|conf
succeed|v|সফল / জয় করা|Attain, Conquer, Win|biz
succumb|v|হার মানা / বশ্যতা স্বীকার|Yield, Surrender|conf
sudden|adj|হঠাৎ|Unexpected, Rapid, Quick|time
suited|adj|উপযুক্ত|Suitable, Appropriate, Fits|desc
superb|adj|চমৎকার|Excellent, Outstanding|desc
superior|adj|উচ্চতর / উৎকৃষ্ট|Excellent, High-Class, Supreme|desc
supremacy|n|শ্রেষ্ঠত্ব / সর্বোচ্চ আধিপত্য|Dominance, Superiority|law
supersede|v|স্থলাভিষিক্ত করা|Replace, Supplant|time
supportive|adj|সহায়ক|Helpful, Encouraging|char
supplanted|v|উচ্ছেদ করা|Replaced|time
suppressing|v|দমন করা|Repress, Inhibiting|conf
supremely|adv|সর্বোচ্চভাবে|Extremely, Completely, Totally|desc
surpass|v|ছাড়িয়ে যাওয়া|Exceed, Outdo|biz
surplus|n|উদ্বৃত্ত|Excess, Extra|biz
surveying|n|মাপজোক|Examining, Measuring, Observing|acad
susceptible|adj|সংবেদনশীল / দুর্বল|Vulnerable, Prone, Capable|health
sustenance|n|জীবিকা|Nourishment, Food|food
swamp|n|জলাভূমি|Marsh, Bog, Moorland|env
sway|n|নিয়ন্ত্রণ|Swing, Surge, Vibrancy|law
swear|v|শপথ করা|Promise, Vow|comm
swift|adj|দ্রুত|Quick, Rapid|move
swiftly|adv|দ্রুত|Quickly, Speedily, Rapidly|move
synthesis|n|সংশ্লেষণ|Mixture, Combination, Blend|sci
synthetic|adj|কৃত্রিম|Artificial, Fake, Manmade, Simulated|sci
systematic|adj|পদ্ধতিগত|Methodical, Organized|acad
tailor|v|উপযোগী করা|Customize, Adapt|biz
take off|v|সফল হওয়া / জনপ্রিয় হওয়া|Become Successful|biz
take up|v|নেওয়া|Start, Adopt|every
tame|v|পোষ মানানো|Domesticate, Train|env
tangible|adj|বাস্তব|Visible, Obvious, Apparent, Clear|desc
tarnish|v|কলঙ্কিত করা|Stain, Sully|soc
teem|v|ভরপুর থাকা|Swarm, Abound|env
tedious|adj|ক্লান্তিকর / একঘেয়ে|Boring, Dull|emo
temperament|n|স্বভাব|Humor, Makeup, Disposition|char
tenacious|adj|অধ্যবসায়ী|Persistent, Determined|char
tender|adj|কোমল|Gentle, Soft|char
tentative|adj|অনুমানসাপেক্ষ|Provisional, Uncertain|desc
terrain|n|ভূখণ্ড / ভূপ্রকৃতি / ভূমি|Landscape, Topography, Land|geo
terrestrial|adj|স্থলজ / পার্থিব|Earthly, Terrene|geo
terrible|adj|ভয়ানক|Awful, Dreadful, Appalling|desc
theorist|n|তাত্ত্বিক|Philosopher, Theoretician, Thinker|acad
theorize|v|তত্ত্বীয় করা|Speculate, Hypothesize|acad
therapeutic|adj|চিকিৎসামূলক|Healing, Curative|health
thermal stress|n|তাপীয় চাপ|Heat Pressure|sci
thinned|adj|পাতলা|Thinned Out|desc
thorough|adj|পুঙ্খানুপুঙ্খ|Comprehensive, Detailed|acad
thoroughfare|n|প্রধান সড়ক|Main Road, Highway|geo
thoroughly|adv|পুঙ্খানুপুঙ্খভাবে|Comprehensively, Completely|acad
thoughtful|adj|চিন্তাশীল|Thorough, Deep, Considerate|char
thrive|v|উন্নতি লাভ করা / সমৃদ্ধ হওয়া|Prosper, Gain, Flourish|biz
thriving|adj|সমৃদ্ধশালী / সমৃদ্ধ|Flourishing, Prosperous, Growing|biz
thwart|v|ব্যর্থ করা|Prevent, Foil|conf
tide|n|জোয়ার-ভাটা|Tidal Flow|env
tier|n|স্তর|Level, Rank|desc
tightly|adv|দৃঢ়ভাবে|Firmly, Securely|desc
tightened|v|দৃঢ় করা|Narrow, Increase|struct
timber|n|কাঠ|Wood|env
time-consuming|adj|সময়সাপেক্ষ|Laborious, Slow, Time-Wasting|time
timeless|adj|কালজয়ী|Eternal, Everlasting|time
timid|adj|লাজুক|Shy, Bashful|char
tipping point|n|টিপিং পয়েন্ট|Critical Moment|time
tissue|n|টিস্যু|Fabric, Material|body
toiletries|n|প্রসাধন সামগ্রী|Personal Care Items|health
tolerant|adj|সহনশীল / সহনক্ষম|Resilient, Enduring, Patient|char
tolerate|v|সহ্য করা|Bear, Endure, Put Up With|char
torment|n|যন্ত্রণা|Agony, Suffering|emo
torrent|n|প্রবল স্রোত|Flood, Stream|env
tortoise|n|কাছিম|Turtle|env
toxin|n|বিষ|Poison, Venom, Contaminant|health
trace|n|সন্ধান|Find, Discover, Footprints, Tracks|acad
trailblazer|n|পথিকৃৎ|Pioneer, Innovator|biz
trait|n|বৈশিষ্ট্য|Characteristic, Feature, Attribute|char
traits|n|বৈশিষ্ট্য|Characteristic, Attribute, Feature|char
tranquil|adj|শান্ত|Peaceful, Calm|env
transfer|v|স্থানান্তর|Move, Shift|move
transformation|n|রূপান্তর|Conversion, Metamorphosis, Change|time
transformational|adj|রূপান্তরমূলক|Revolutionary, Life-Changing|time
transformative|adj|রূপান্তরকারী|Revolutionary, Life-Changing|time
transformed|adj|রূপান্তরিত|Resolved, Converted, Altered|time
traumatic|adj|আঘাতজনিত|Distressing, Painful|health
traverse|v|বিচরণ / বিতর্ক|Cross, Span, Dispute|move
traversing|v|অতিক্রম|Crossing, Roaming, Moving|move
treaty|n|চুক্তি|Agreement, Accord, Pact, Truce|law
tremendous|adj|বিশাল|Huge, Enormous|desc
trend|n|প্রবণতা|Tendency, Direction, Movement|soc
trial and error|n|পরীক্ষা-নিরীক্ষা|Experimentation|acad
tribe|n|উপজাতি|Clan, Ethnic Group|soc
tribal|adj|উপজাতীয়|Ethnic, Clannish, Racial|soc
tribute|n|শ্রদ্ধা|Homage, Respect|soc
tributes|n|শ্রদ্ধা|Praise, Honors, Respect|soc
trigger|v|ট্রিগার / সূচনা করা|Activate, Cause, Generate, Initiate|sci
trigonometry|n|ত্রিকোণমিতি|Triangle, Calculus|acad
trireme|n|তিন সারির রণতরী|Galley, Ship, Galleon|move
trivial|adj|তুচ্ছ|Minor, Unimportant, Insignificant, Petty|desc
trolley|n|ট্রলি|Cart, Trolley|every
troubling|adj|সমস্যাগ্রস্ত|Quarrel, Dispute, Fight|conf
truism|n|স্বতঃসিদ্ধ|Obvious Truth|acad
turbulent|adj|অশান্ত|Stormy, Chaotic|conf
tusk|n|দাঁত / হাতির দাঁত|Ivory Tooth|body
tweak|v|চিমটি কাটা / হেঁচকা টান দেওয়া|Pinch, Twinge, Twist|every
twist|v|মোচড়|Bend, Turn|move
ubiquitous|adj|সর্বব্যাপী|Omnipresent, Universal, Common, Global|desc
ubiquity|n|সর্বব্যাপীতা|Popular, Common|desc
unanticipated|adj|অপ্রত্যাশিত|Unforeseen, Sudden, Unexpected|time
unconventional|adj|অপ্রচলিত|Awry, Informal|soc
uncover|v|উন্মোচন|Discover, Find Out|acad
undergo|v|ভোগ করা / সহ্য করা|Bear, Pass Through, Experience|every
undergrowth|n|লতাগুল্মের জঙ্গল|Underwood|env
underlying|adj|অন্তর্নিহিত|Fundamental, Basic|desc
underrated|adj|অবমূল্যায়িত|Undervalued|desc
undertake|v|দায়িত্বগ্রহণ করা / গ্রহণ করা|Engage In, Carry Out, Take On|biz
undertaking|n|উদ্যোগ|Mission, Duty, Task|biz
underway|adj|চলমান|In Progress|time
undesirable|adj|অবাঞ্ছিত|Unwanted, Bad, Unpleasant|desc
undesired|adj|অবাঞ্ছিত|Unexpected, Unwanted|desc
understate|v|কম গুরুত্ব দেওয়া|Downplay|comm
undoubtedly|adv|নিঃসন্দেহে|Certainly, Unquestionably|desc
unearth|v|আবিষ্কার করা|Discover, Find, Detect, Dig Up|acad
unearthed|adj|আবিষ্কার করা / মাটি খুঁড়ে তোলা|Discover, Find, Dig Up|acad
uneven|adj|অসমতল|Not Smooth, Not Flat|desc
unexceptional|adj|ব্যতিক্রমী নয়|Usual, Ordinary|desc
unflinching|adj|অটল|Resolute, Steadfast|char
unfolded|adj|উদ্ভাসিত|Revealed, Brought To Light|comm
unforgiving|adj|ক্ষমাহীন / নির্মম|Harsh, Severe|char
unfulfilled|adj|অসম্পূর্ণ|Incomplete|emo
uniformity|n|একরূপতা|Sameness|desc
unify|v|ঐক্যসাধন করা|Unite, Bring Together, Integrate|soc
unilateral|adj|একপাক্ষিক|One-Sided, Independent|law
unintended|adj|অনিচ্ছাকৃত / অপরিকল্পিত|Accidental, Unforeseen, Unplanned|every
unique|adj|অনন্য / অদ্বিতীয়|Sole, Exclusive, Exceptional, Distinctive|desc
unleash|v|মুক্ত করা|Release, Set Free|conf
unoccupied|adj|অরক্ষিত|Vacant, Empty, Unused|geo
unparalleled|adj|অতুলনীয়|Unique, Peerless|desc
unpleasant|adj|অপ্রীতিকর|Unfavorable|desc
unprecedented|adj|অভূতপূর্ব|Exceptional, First-Time, Unique, Revolutionary|time
unprotected|adj|অরক্ষিত|Defenseless, Insecure, Vulnerable|health
unravelling|v|স্পষ্ট করা / সমাধান করা|Resolve, Outcome, Sorting Out|acad
unrelated|adj|অসম্পর্কিত|Disconnected, Irrelevant|desc
unreliable|adj|অবিশ্বাসী|Faithless, Truthless|char
unrest|n|অশান্তি / অস্থিরতা|Turmoil, Trouble|conf
unsatisfactory|adj|অসন্তোষজনক|Inadequate, Poor|desc
unselfish|adj|নিঃস্বার্থ|Altruistic, Selfless|char
unsophisticated|adj|খাঁটি|Simple, Plain|char
unstable|adj|অস্থির|Unsteady, Precarious|desc
unsurpassed|adj|অতুলনীয়|Unmatchable, Unrivaled|desc
untangle|v|জটিলতা মোচন করা|Unravel, Solve|acad
unthinkable|adj|চিন্তনীয়|Improbable, Unexpected|desc
untroubled|adj|শান্ত|Peaceful, Calm, Tranquil|char
unveil|v|উন্মোচন করা|Reveal, Disclose|comm
unwelcoming|adj|অপ্রিয়|Unfriendly, Cool|char
unwillingly|adv|অনিচ্ছায়|Reluctantly, Grudgingly|char
upheaval|n|আলোড়ন / বিপর্যয়|Disruption, Disturbance|conf
uphold|v|সমর্থন করা|Support, Maintain|law
uplifting|adj|অনুপ্রেরণাদায়ক|Inspiring, Encouraging|emo
uprisings|n|বিদ্রোহ / উত্থান|Revolt, Mutiny, Emergence, Rise|conf
upend|v|উল্টে দেওয়া|Overturn|conf
upbringing|n|লালন-পালন|Rearing, Nurturing|soc
upkeep|n|রক্ষণাবেক্ষণ|Maintenance, Care|every
upper|adj|উপরের|Higher, Superior|geo
uproot|v|উৎপাদিত করা|Displace, Remove|soc
urge|n|তাড়না / প্রবল ইচ্ছা|Drive, Impulse|emo
urgently|adv|জরুরিভাবে|Immediately, Critically|time
usage|n|ব্যবহার|Use, Application|comm
usher|v|পরিচালনা করা|Guide, Lead|soc
usurp|v|দখল করা|Seize, Appropriate|law
utensils|n|পাত্র|Tools, Implements|food
utmost|adj|সর্বোচ্চ|Maximum, Supreme|desc
utopian|adj|ইউটোপিয়ান|Idealistic, Perfect|soc
utter|adj|সম্পূর্ণ|Absolute, Total|desc
utterly|adv|সম্পূর্ণরূপে|Completely, Absolutely, Entirely|desc
vacant|adj|খালি|Empty, Unoccupied|desc
vaccine|n|টিকা|Inoculation, Immunization|health
vague|adj|অস্পষ্ট|Unclear, Indistinct|desc
vain|adj|বৃথা|Futile, Useless|desc
valuable|adj|মূল্যবান|Worthy, Costly, Precious, Important|desc
vanish|v|অদৃশ্য হওয়া|Disappear|time
vanished|adj|অদৃশ্য / বিলুপ্ত|Defunct, Lost|time
variability|n|পরিবর্তনশীলতা|Variation, Inconsistency|acad
vehement|adj|তীব্র|Fierce, Passionate|emo
veil|n|পর্দা|Cover, Conceal|art
vein|n|শিরা|Vessel, Artery|body
velocity|n|বেগ|Speed, Rapidity|sci
vendor|n|বিক্রেতা|Seller, Merchant|biz
venture|n|ঝুঁকি নেওয়া / উদ্যোগ|Hazard, Gamble, Enterprise, Risk|biz
venue|n|স্থান / ভেন্যু|Place, Location|geo
verdict|n|রায়|Judgment, Decision|law
versatile|adj|বহুমুখী|Multipurpose, Many Sided|char
versus|prep|বিপক্ষে|Facing, Against, Opposite|conf
vertical|adj|লম্বভাবে অবস্থিত|Upright, Straight, Perpendicular|struct
verticals|n|উলম্ব / খাড়া|Perpendicular, Upright|struct
veteran|n|অভিজ্ঞ|Experienced, Seasoned|char
viable|adj|টেকসই|Feasible, Workable|biz
viability|n|কার্যক্ষমতা|Durability, Permanence|biz
vibrant|adj|প্রাণবন্ত|Vivid, Lively, Colorful, Energetic|desc
vicinity|n|আশেপাশ|Neighborhood, Proximity|geo
vicious|adj|নিষ্ঠুর|Brutal, Savage|char
vigilant|adj|সতর্ক|Watchful, Alert|char
vigorous|adj|বলিষ্ঠ|Lively, Healthy, Strong, Forceful|char
vile|adj|জঘন্য|Disgusting, Repulsive|desc
violation|n|লঙ্ঘন|Breach, Infraction|law
virtual|adj|ভার্চুয়াল / অপাতুর|Computer-Generated, Simulated|sci
virtually|adv|কার্যত|Actually, In Effect|desc
virtue|n|পুণ্য|Goodness, Integrity, Morality|char
virtuous|adj|নৈতিক|Moral, Upright|char
virulent|adj|বিষাক্ত / তীব্র|Aggressive, Deadly|health
visualize|v|দৃষ্টিগোচর করা|Reveal, Look On|art
vivid|adj|প্রাণবন্ত / স্পষ্ট|Clear, Graphic|desc
vogue|n|প্রথা / ফ্যাশন|Fashion, Trend, Craze|soc
void|n|শূন্যতা|Emptiness, Vacuum|desc
volatile|adj|অস্থির|Unstable, Unpredictable|char
volatility|n|অস্থিরতা|Unpredictability, Instability|biz
volcanic|adj|আগ্নেয়গিরি-সম্বন্ধীয় / হিংস্র|Violent, Turbulent, Fierce|env
volition|n|ইচ্ছাশক্তি|Will, Choice|char
voluminous|adj|বৃহৎ|Large, Bulky|desc
voyage|n|সমুদ্রযাত্রা|Journey, Expedition|move
voyaging|v|ভ্রমণ করা / জলযাত্রা করা|Travel, Roam, Sail|move
wages|n|বেতন|Salary, Pay, Stipend|biz
warfare|n|যুদ্ধ / সংঘর্ষ|Hostilities, Battle, Conflict|conf
warship|n|যুদ্ধজাহাজ / রণতরী|Battleship, Frigate, Dreadnought|conf
wary|adj|সতর্ক|Cautious, Careful|char
weaken|v|দুর্বল করা|Undermine|health
weary|adj|ক্লান্ত|Tired, Exhausted|health
weave|v|বুনন করা|Knit, Interlace|art
welfare|n|কল্যাণ|Well-Being, Benefit|soc
well-being|n|মঙ্গল|Comfort, Happiness, Welfare|health
whereas|conj|যেখানে|While, Although|comm
whimsical|adj|খামখেয়ালী|Fanciful, Capricious|char
wholesale|adj|পাইকারি|Bulk, Large-Scale|biz
wilderness|n|মরুভূমি|Wild, Wasteland, Desert|env
willing|adj|ইচ্ছুক|Ready, Inclined, Eager, Keen|char
windblown|adj|বায়ুপ্রবাহ|Blown, Messy|env
wipe out|v|অপমার্জন করা|Destroy, Eradicate, Devastate, Remove|conf
withstand|v|প্রতিরোধ করা|Resist, Endure, Fight Back|conf
workforce|n|কর্মীবাহিনী|Labor Force, Employees|biz
worthwhile|adj|সাশ্রয়ী / সার্থক|Valuable, Useful, Beneficial|desc
worthy|adj|যোগ্য|Deserving, Meritorious|char
wrecked|adj|ধ্বংস করা|Destroy, Demolish, Shatter|conf
wrecking|v|ধ্বংস করা|Ruin, Destroy|conf
wrinkle|n|বলি / ভাঁজ|Crease, Line|body
yacht|n|ইয়ট|Ship, Vessel, Cruiser, Ferry|move
zeal|n|উৎসাহ|Passion, Enthusiasm|emo
zealous|adj|উৎসাহী, উদ্যোগী|Enthusiastic, Passionate, Fervent|emo
zenith|n|শীর্ষবিন্দু, চরম অবস্থা|Peak, Summit, Apex|time
yearn|verb|আকাঙ্ক্ষা করা, ব্যাকুল হওয়া|Long, Crave, Pine|emo
coherent|adj|সুসংগত, সঙ্গতিপূর্ণ|Logical, Consistent, Reasoned|acad
deft|adj|দক্ষ, নিপুণ|Skilful, Adept, Nimble|char
glean|verb|সংগ্রহ করা, চয়ন করা|Gather, Collect, Harvest|acad
hindsight|noun|পশ্চাদদৃষ্টি|Retrospect|time
inevitable|adj|অনিবার্য, অবশ্যম্ভাবী|Unavoidable, Certain, Inescapable|time
mundane|adj|সাধারণ, নীরস|Ordinary, Routine, Dull|every
novice|noun|নতুন, শিক্ষানবিশ|Beginner, Learner, Rookie|acad
opulent|adj|ঐশ্বর্যপূর্ণ|Luxurious, Lavish, Sumptuous|biz
quintessential|adj|সারমর্মস্বরূপ, নিখুঁত উদাহরণ|Typical, Archetypal, Classic|desc
vindicate|verb|নির্দোষ প্রমাণ করা|Justify, Exonerate, Acquit|law
candidly|adverb|অকপটে, স্পষ্টভাবে|Frankly, Honestly, Openly|comm
diminish|verb|হ্রাস করা, কমে যাওয়া|Reduce, Decrease, Lessen|desc
eloquence|noun|বাগ্মিতা|Fluency, Articulacy, Expressiveness|comm
grasp|verb|বোঝা, আঁকড়ে ধরা|Comprehend, Understand, Clutch|acad
kindle|verb|জ্বালানো, প্রজ্বলিত করা|Ignite, Spark, Arouse|emo
notably|adverb|বিশেষভাবে, লক্ষণীয়ভাবে|Particularly, Especially, Remarkably|desc
obstinate|adj|একগুঁয়ে, জেদি|Stubborn, Headstrong, Inflexible|char
persevere|verb|অধ্যবসায় করা, লেগে থাকা|Persist, Continue, Endure|char
quaintly|adverb|মনোরমভাবে|Charmingly, Picturesquely|desc
sedentary|adj|আসীন, নিষ্ক্রিয়|Inactive, Seated|health
tranquillity|noun|শান্তি, প্রশান্তি|Peace, Calm, Serenity|env
unravel|verb|উন্মোচন করা, জট খোলা|Solve, Untangle, Decipher|acad
vulnerable|adj|দুর্বল, অসুরক্ষিত|Exposed, Defenceless, At Risk|health`;

// ---------- helpers ----------
export function topicInfo(code) {
  return TOPICS[code] || { name: code, icon: '📁', color: '#94a3b8' };
}

export function isMastered(w) { return (Number(w.level) || 0) >= MAX_LEVEL; }
export function isNew(w) { return (Number(w.level) || 0) === 0 && (Number(w.reviews) || 0) === 0; }
export function isLearning(w) { return !isNew(w) && !isMastered(w); }

export function difficulty(w) {
  const lvl = Number(w.level) || 0;
  const hard = Number(w.hard) || 0;
  const total = Math.max(1, Number(w.reviews) || 0);
  return (MAX_LEVEL - lvl) * 2 + (hard / total) * 5 + hard * 0.3;
}

export function parseSeed() {
  const seen = new Set();
  const out = [];
  for (const line of SEED_RAW.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const parts = trimmed.split('|');
    if (parts.length < 5) continue;
    const [word, pos, bangla, synonyms, topic] = parts;
    const key = word.toLowerCase().trim();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push({
      word: word.trim(),
      pos: pos.trim(),
      bangla: bangla.trim(),
      definition: synonyms.trim() || '—',
      example: '',
      synonyms: synonyms.trim(),
      topic: (topic || 'every').trim(),
      level: 0, reviews: 0, hard: 0, good: 0, easy: 0, known: 0,
      createdAt: Date.now(), lastReviewed: 0,
    });
  }
  return out;
}

export function normalizeIncoming(item) {
  const word = String(item.word || item.text || '').trim();
  const definition = String(item.definition || item.meaning || item.synonyms || '').trim();
  if (!word || !definition) return null;
  return {
    word, definition,
    pos: item.pos || '',
    topic: TOPICS[item.topic] ? item.topic : 'every',
    bangla: item.bangla || '',
    example: item.example || '',
    synonyms: item.synonyms || '',
    level: Math.max(0, Math.min(MAX_LEVEL, Math.floor(Number(item.level) || 0))),
    reviews: Math.max(0, Math.floor(Number(item.reviews) || 0)),
    hard: Math.max(0, Math.floor(Number(item.hard) || 0)),
    good: Math.max(0, Math.floor(Number(item.good) || 0)),
    easy: Math.max(0, Math.floor(Number(item.easy) || 0)),
    known: Math.max(0, Math.floor(Number(item.known) || 0)),
    createdAt: Number(item.createdAt) || Date.now(),
    lastReviewed: Number(item.lastReviewed) || 0,
  };
}