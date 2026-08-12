const GLOSS = {
  'apauruṣeya': { en: 'Apauruṣeya — "not of human authorship." The Vedas are held to be eternal truths heard by the ṛṣis, not composed by them.', gu: 'અપૌરુષેય — "માનવ-રચિત નહીં." વેદ ઋષિઓએ સાંભળેલાં શાશ્વત સત્યો મનાય છે, તેમની રચના નહીં.' },
  'mokṣa': { en: 'Mokṣa — liberation from the cycle of birth and death; the ultimate aim of human life.', gu: 'મોક્ષ — જન્મ-મરણના ચક્રમાંથી મુક્તિ; માનવ-જીવનનું અંતિમ લક્ષ્ય.' },
  'saṃsāra': { en: 'Saṃsāra — the continuous cycle of birth, death and rebirth driven by karma.', gu: 'સંસાર — કર્મથી ચાલતું જન્મ, મૃત્યુ અને પુનર્જન્મનું સતત ચક્ર.' },
  'ātman': { en: 'Ātman — the true Self; pure consciousness within every being, distinct from body and mind.', gu: 'આત્મા — સાચું સ્વરૂપ; દરેક જીવમાં રહેલી શુદ્ધ ચેતના, દેહ અને મનથી ભિન્ન.' },
  'Brahman': { en: 'Brahman — the ultimate, infinite reality underlying all existence; not to be confused with the deity Brahmā or the brāhmaṇa varṇa.', gu: 'બ્રહ્મ — સર્વ અસ્તિત્વ પાછળની અનંત પરમ સત્તા; દેવ બ્રહ્મા કે બ્રાહ્મણ વર્ણથી ભિન્ન.' },
  'māyā': { en: 'Māyā — the creative power by which the One appears as many; often glossed as "illusion," better understood as appearance.', gu: 'માયા — જે શક્તિથી એક અનેક રૂપે દેખાય છે; "ભ્રમ" કરતાં "દેખાવ" તરીકે સમજવી વધુ યોગ્ય.' },
  'prakṛti': { en: 'Prakṛti — primordial nature; the material principle from which all forms evolve (Sāṃkhya).', gu: 'પ્રકૃતિ — મૂળ પ્રકૃતિ; જેમાંથી સર્વ રૂપો વિકસે છે તે ભૌતિક તત્ત્વ (સાંખ્ય).' },
  'puruṣa': { en: 'Puruṣa — pure consciousness, the witness principle distinct from matter (Sāṃkhya).', gu: 'પુરુષ — શુદ્ધ ચેતના; પ્રકૃતિથી ભિન્ન સાક્ષી તત્ત્વ (સાંખ્ય).' },
  'guṇa': { en: 'Guṇa — the three qualities woven through all nature: sattva (clarity), rajas (activity), tamas (inertia).', gu: 'ગુણ — સમગ્ર પ્રકૃતિમાં વણાયેલા ત્રણ ગુણ: સત્ત્વ (સ્પષ્ટતા), રજસ્ (ક્રિયા), તમસ્ (જડતા).' },
  'yajña': { en: 'Yajña — sacred offering or ritual of exchange; more broadly, any act done as offering.', gu: 'યજ્ઞ — પવિત્ર આહુતિ કે વિનિમયની વિધિ; વ્યાપક અર્થે, અર્પણ ભાવે થયેલું કોઈપણ કર્મ.' },
  'tapas': { en: 'Tapas — disciplined inner heat; austerity and focused effort that transforms the practitioner.', gu: 'તપસ્ — શિસ્તબદ્ધ આંતરિક ઉષ્મા; સાધકને રૂપાંતરિત કરતી તપશ્ચર્યા અને એકાગ્ર પુરુષાર્થ.' },
  'darśana': { en: 'Darśana — literally "seeing"; a systematic school of philosophy, a way of seeing reality.', gu: 'દર્શન — શાબ્દિક અર્થ "જોવું"; વાસ્તવિકતાને જોવાની વ્યવસ્થિત તત્ત્વજ્ઞાનની શાળા.' },
  'sādhana': { en: 'Sādhana — dedicated spiritual practice; the means by which realization is cultivated.', gu: 'સાધના — સમર્પિત આધ્યાત્મિક અભ્યાસ; આત્મ-સાક્ષાત્કાર કેળવવાનું સાધન.' },
  'sampradāya': { en: 'Sampradāya — a living lineage of teaching and practice passed from guru to disciple.', gu: 'સંપ્રદાય — ગુરુથી શિષ્ય સુધી પ્રવાહિત જીવંત ઉપદેશ-પરંપરા.' },
  'dīkṣā': { en: 'Dīkṣā — formal initiation by a qualified guru, which opens entry into a lineage of practice.', gu: 'દીક્ષા — યોગ્ય ગુરુ દ્વારા વિધિવત્ પ્રવેશ; સાધના-પરંપરામાં પ્રવેશદ્વાર.' },
  'jīvanmukti': { en: 'Jīvanmukti — liberation while still living in the body; the freed sage is a jīvanmukta.', gu: 'જીવન્મુક્તિ — દેહધારી અવસ્થામાં જ મુક્તિ; મુક્ત જ્ઞાની જીવન્મુક્ત કહેવાય.' },
  'nirguṇa': { en: 'Nirguṇa — the Absolute "without qualities," beyond all form and attribute.', gu: 'નિર્ગુણ — ગુણો-રહિત પરમ તત્ત્વ; સર્વ રૂપ અને લક્ષણથી પર.' },
  'saguṇa': { en: 'Saguṇa — the Absolute "with qualities" — God with form, approachable through love and worship.', gu: 'સગુણ — ગુણ-સહિત પરમાત્મા — રૂપ ધરાવતા ભગવાન, પ્રેમ અને ભક્તિથી પામી શકાય.' },
  'ahiṃsā': { en: 'Ahiṃsā — non-harming in thought, word and deed; the first of the yamas.', gu: 'અહિંસા — વિચાર, વાણી અને કર્મમાં અહાનિ; યમોમાં પ્રથમ.' },
  'satya': { en: 'Satya — truthfulness; alignment of thought, speech and action with what is.', gu: 'સત્ય — સત્યનિષ્ઠા; વિચાર, વાણી અને વર્તનનું યથાર્થ સાથે સંરેખન.' },
  'japa': { en: 'Japa — meditative repetition of a mantra or divine name, often counted on a mālā of 108 beads.', gu: 'જપ — મંત્ર કે ભગવન્નામનું ધ્યાનપૂર્વક પુનરાવર્તન, ઘણીવાર ૧૦૮ મણકાની માળા પર.' },
  'saṃskāra': { en: 'Saṃskāra — (1) a sacred rite of passage marking life\'s stages; (2) a deep mental impression left by experience.', gu: 'સંસ્કાર — (૧) જીવનના તબક્કા ચિહ્નિત કરતી પવિત્ર વિધિ; (૨) અનુભવે મૂકેલી ઊંડી માનસિક છાપ.' }
};
const QUIZ = {
  en: {
    qs: [
      { q: 'When life gets difficult, what steadies you most?', o: ['Doing useful work for others', 'Prayer, remembering God', 'Understanding why — reading, reflecting', 'Sitting quietly, watching the breath'] },
      { q: 'Which describes you best?', o: ['Hands-on, practical, active', 'Warm-hearted, devoted, emotional', 'Curious, analytical, questioning', 'Calm, inward, disciplined'] },
      { q: 'What draws you in a temple?', o: ['Helping — seva, serving food, organizing', 'The āratī — singing, the living presence', 'The meaning behind the rituals', 'The silence before the crowds arrive'] },
      { q: 'Your idea of a perfect Sunday morning:', o: ['Volunteering or helping family', 'Bhajans and satsang', 'A deep book and good conversation', 'Yoga, meditation, a long quiet walk'] },
      { q: 'What is God to you, most naturally?', o: ['The good I can do in the world', 'A beloved presence I can talk to', 'The truth behind everything', 'The stillness within me'] }
    ],
    results: {
      0: ['Karma Yoga — the Path of Action', 'Your nature points to karma yoga: acting wholeheartedly without clinging to results. The Bhagavad Gītā (ch. 3) calls this the path of the engaged householder — work itself becomes worship when offered. Begin by dedicating one daily task, done with full attention, as an offering.'],
      1: ['Bhakti Yoga — the Path of Devotion', 'Your nature points to bhakti yoga: love as the road to the Divine. The Gītā (ch. 12) calls this the most accessible of paths. Begin with daily japa or āratī before your home altar — the relationship matters more than the ritual\'s perfection.'],
      2: ['Jñāna Yoga — the Path of Knowledge', 'Your nature points to jñāna yoga: inquiry into what is real and what is passing. The Upaniṣads are your country. Begin with a short daily reading — the Īśā or Kena Upaniṣad — and sit with one verse rather than racing through many.'],
      3: ['Rāja Yoga — the Path of Meditation', 'Your nature points to rāja yoga: stilling the mind to see clearly, mapped in Patañjali\'s Yoga Sūtras. Begin with ten minutes daily: steady posture, slow breath, one point of attention. Consistency outweighs duration.']
    },
    counter: 'Question', restart: 'Take it again', note: 'All four paths lead to the same summit — most people walk a blend, led by one.'
  },
  gu: {
    qs: [
      { q: 'જીવન કઠિન બને ત્યારે તમને સૌથી વધુ શું સ્થિર રાખે છે?', o: ['બીજા માટે ઉપયોગી કામ કરવું', 'પ્રાર્થના, ભગવાનનું સ્મરણ', 'કારણ સમજવું — વાંચન, ચિંતન', 'શાંત બેસી શ્વાસ નિહાળવો'] },
      { q: 'તમારું સૌથી સાચું વર્ણન કયું?', o: ['વ્યવહારુ, કર્મઠ, સક્રિય', 'ભાવુક, ભક્તિમય, હૃદયવાન', 'જિજ્ઞાસુ, વિશ્લેષક, પ્રશ્નશીલ', 'શાંત, અંતર્મુખ, શિસ્તબદ્ધ'] },
      { q: 'મંદિરમાં તમને શું ખેંચે છે?', o: ['સેવા — મદદ, ભોજન પીરસવું, વ્યવસ્થા', 'આરતી — ગાયન, જીવંત સાન્નિધ્ય', 'વિધિઓ પાછળનો અર્થ', 'ભીડ આવે તે પહેલાંની શાંતિ'] },
      { q: 'આદર્શ રવિવારની સવાર એટલે:', o: ['સ્વયંસેવા કે પરિવારને મદદ', 'ભજન અને સત્સંગ', 'ઊંડું પુસ્તક અને સારી ચર્ચા', 'યોગ, ધ્યાન, લાંબી શાંત લટાર'] },
      { q: 'તમારા માટે ભગવાન સ્વાભાવિક રીતે શું છે?', o: ['જગતમાં હું કરી શકું તે સારપ', 'જેની સાથે વાત કરી શકાય તેવું પ્રિય સાન્નિધ્ય', 'સર્વ પાછળનું સત્ય', 'મારી ભીતરની નીરવતા'] }
    ],
    results: {
      0: ['કર્મયોગ — કર્મનો માર્ગ', 'તમારો સ્વભાવ કર્મયોગ ભણી નિર્દેશ કરે છે: ફળની આસક્તિ વિના પૂર્ણ હૃદયે કર્મ. ભગવદ્ ગીતા (અધ્યાય ૩) આને ગૃહસ્થનો માર્ગ કહે છે — અર્પણ ભાવે થાય ત્યારે કાર્ય જ પૂજા બને. રોજનું એક કાર્ય પૂર્ણ ધ્યાનથી, અર્પણ રૂપે કરવાથી શરૂઆત કરો.'],
      1: ['ભક્તિયોગ — ભક્તિનો માર્ગ', 'તમારો સ્વભાવ ભક્તિયોગ ભણી નિર્દેશ કરે છે: પ્રેમ એ જ પરમાત્મા સુધીનો રસ્તો. ગીતા (અધ્યાય ૧૨) આને સૌથી સુલભ માર્ગ કહે છે. ઘરના મંદિર સમક્ષ રોજ જપ કે આરતીથી શરૂઆત કરો — વિધિની પૂર્ણતા કરતાં સંબંધ વધુ મહત્ત્વનો છે.'],
      2: ['જ્ઞાનયોગ — જ્ઞાનનો માર્ગ', 'તમારો સ્વભાવ જ્ઞાનયોગ ભણી નિર્દેશ કરે છે: શું શાશ્વત છે અને શું ક્ષણિક — તેની ખોજ. ઉપનિષદો તમારો પ્રદેશ છે. રોજ ટૂંકું વાંચન — ઈશ કે કેન ઉપનિષદ્ — અને ઘણા શ્લોકો દોડાવવાને બદલે એક શ્લોક સાથે બેસવાથી શરૂઆત કરો.'],
      3: ['રાજયોગ — ધ્યાનનો માર્ગ', 'તમારો સ્વભાવ રાજયોગ ભણી નિર્દેશ કરે છે: સ્પષ્ટ દર્શન માટે મનની સ્થિરતા — પતંજલિનાં યોગસૂત્રોમાં એનો નકશો છે. રોજ દસ મિનિટથી શરૂઆત કરો: સ્થિર આસન, ધીમો શ્વાસ, એક બિંદુ પર ધ્યાન. અવધિ કરતાં નિયમિતતા વધુ મહત્ત્વની.']
    },
    counter: 'પ્રશ્ન', restart: 'ફરી કરો', note: 'ચારેય માર્ગ એક જ શિખરે લઈ જાય છે — મોટા ભાગના લોકો એક મુખ્ય માર્ગની આગેવાનીમાં મિશ્ર માર્ગે ચાલે છે.'
    }
};
