const CH = [
 {n:1,part:1,en:"What Is Sanātana Dharma",gu:"સનાતન ધર્મ એટલે શું",deva:"स्वरूप",mins:7,pct:100},
 {n:2,part:1,en:"Pronunciation",gu:"ઉચ્ચારણ",deva:"उच्चारण",mins:4,pct:100},
 {n:3,part:1,en:"Śruti & Smṛti",gu:"શ્રુતિ-સ્મૃતિ",deva:"श्रुति · स्मृति",mins:6,pct:62},
 {n:4,part:2,en:"The Four Vedas",gu:"ચાર વેદ",deva:"चतुर्वेद",mins:14,pct:0},
 {n:5,part:2,en:"Upavedas",gu:"ઉપવેદ",deva:"उपवेद",mins:9,pct:0},
 {n:6,part:2,en:"Vedāṅgas",gu:"વેદાંગ",deva:"वेदाङ्ग",mins:11,pct:0},
 {n:7,part:2,en:"Upāṅgas",gu:"ઉપાંગ",deva:"उपाङ्ग",mins:8,pct:0},
 {n:8,part:2,en:"Purāṇas",gu:"પુરાણ",deva:"पुराण",mins:18,pct:0},
 {n:9,part:2,en:"Itihāsas",gu:"ઇતિહાસ",deva:"इतिहास",mins:10,pct:0},
 {n:10,part:3,en:"The Six Darśanas",gu:"ષડ્ દર્શન",deva:"षड्दर्शन",mins:13,pct:0},
 {n:11,part:3,en:"Vedānta",gu:"વેદાંત",deva:"वेदान्त",mins:12,pct:0},
 {n:12,part:3,en:"Nāstika Schools",gu:"નાસ્તિક દર્શન",deva:"नास्तिक",mins:7,pct:0},
 {n:13,part:3,en:"Āgamas & Tantra",gu:"આગમ અને તંત્ર",deva:"आगम",mins:8,pct:0},
 {n:14,part:4,en:"Core Concepts",gu:"મૂળ વિભાવના",deva:"मूलतत्त्व",mins:9,pct:0},
 {n:15,part:4,en:"Misconceptions",gu:"ભ્રાંતિઓ",deva:"भ्रान्ति",mins:12,pct:0},
 {n:16,part:4,en:"Symbols",gu:"ચિહ્નો",deva:"प्रतीक",mins:6,pct:0},
 {n:17,part:4,en:"The Four Yogas",gu:"ચાર યોગ",deva:"चतुर्योग",mins:8,pct:0},
 {n:18,part:4,en:"Daily Practice",gu:"નિત્ય સાધના",deva:"साधना",mins:7,pct:0},
 {n:19,part:4,en:"Festivals",gu:"ઉત્સવો",deva:"उत्सव",mins:9,pct:0},
 {n:20,part:4,en:"Mahāvākyas",gu:"મહાવાક્ય",deva:"महावाक्य",mins:5,pct:0},
 {n:21,part:4,en:"Guru Paramparā",gu:"ગુરુ-પરંપરા",deva:"गुरुपरम्परा",mins:6,pct:0},
 {n:22,part:4,en:"Timeline",gu:"કાળરેખા",deva:"कालरेखा",mins:8,pct:0}
];
const BODY = {
 3: {en:[
   {t:"p",text:"Sanātana Dharma divides its scripture into two great categories. Śruti — “that which is heard” — was not composed but revealed to ṛṣis in states of deep meditation. Smṛti — “that which is remembered” — was composed by human authors drawing from Śruti and their own realized insight."},
   {t:"quote",deva:"श्रुति · स्मृति",text:"That which is heard, and that which is remembered.",cite:"THE TWO CATEGORIES"},
   {t:"p",text:"Where Śruti is fixed and eternal, Smṛti is vast and revisable — epics, law codes, Purāṇas, commentaries. When the two conflict, Śruti prevails."},
   {t:"card",text:"Śruti",cite:"Vedas · Brāhmaṇas · Āraṇyakas · Upaniṣads",deva:"श्रुति"},
   {t:"card",text:"Smṛti",cite:"Itihāsa · Purāṇa · Dharmaśāstra · Āgama",deva:"स्मृति"}
 ],gu:[
   {t:"p",text:"સનાતન ધર્મ પોતાના શાસ્ત્રોને બે મુખ્ય શ્રેણીમાં વહેંચે છે. શ્રુતિ — “જે સાંભળવામાં આવ્યું” — રચાયું નથી, પણ ઋષિઓને ગહન ધ્યાનમાં પ્રગટ થયું. સ્મૃતિ — “જે યાદ રાખવામાં આવ્યું” — મનુષ્ય રચયિતાઓએ શ્રુતિ અને પોતાની અનુભૂતિમાંથી રચ્યું."},
   {t:"quote",deva:"श्रुति · स्मृति",text:"જે સાંભળવામાં આવ્યું, અને જે યાદ રાખવામાં આવ્યું.",cite:"બે શ્રેણી"},
   {t:"p",text:"શ્રુતિ સ્થિર અને શાશ્વત છે, જ્યારે સ્મૃતિ વિશાળ અને સંશોધનીય — ઇતિહાસ, ધર્મશાસ્ત્ર, પુરાણ, ભાષ્ય. બંને વચ્ચે વિરોધ થાય ત્યારે શ્રુતિ પ્રમાણ ગણાય."},
   {t:"card",text:"શ્રુતિ",cite:"વેદ · બ્રાહ્મણ · આરણ્યક · ઉપનિષદ",deva:"श्रुति"},
   {t:"card",text:"સ્મૃતિ",cite:"ઇતિહાસ · પુરાણ · ધર્મશાસ્ત્ર · આગમ",deva:"स्मृति"}
 ]},
 4: {en:[
   {t:"p",text:"The Vedas are humanity's oldest surviving literary and spiritual corpus. Modern scholarship dates the earliest layers to roughly 1500 BCE, while the tradition holds them apauruṣeya — not of human authorship, but heard by ṛṣis in deep meditation."},
   {t:"quote",deva:"एकं सत् विप्रा बहुधा वदन्ति",text:"Truth is one; the wise call it by many names.",cite:"ṚGVEDA 1.164.46"},
   {t:"p",text:"Each Veda unfolds in four layers — Saṃhitās, Brāhmaṇas, Āraṇyakas, and the Upaniṣads, where ritual gives way to inquiry."},
   {t:"card",text:"Ṛgveda",cite:"1,028 hymns · 10,552 verses",deva:"ऋग्"},
   {t:"card",text:"Yajurveda",cite:"The Veda of ritual formulae",deva:"यजुर्"},
   {t:"card",text:"Sāmaveda",cite:"The Veda of melodies · origin of Indian music",deva:"साम"},
   {t:"card",text:"Atharvaveda",cite:"Healing, household rite, and inquiry",deva:"अथर्व"}
 ],gu:[
   {t:"p",text:"વેદ માનવજાતના સૌથી પ્રાચીન સચવાયેલા સાહિત્યિક અને આધ્યાત્મિક ગ્રંથો છે. આધુનિક વિદ્વત્તા તેના પ્રારંભિક સ્તરોને આશરે ઈ.પૂ. ૧૫૦૦ સુધી લઈ જાય છે, જ્યારે પરંપરા તેમને અપૌરુષેય માને છે."},
   {t:"quote",deva:"एकं सत् विप्रा बहुधा वदन्ति",text:"સત્ય એક છે; જ્ઞાનીઓ તેને અનેક નામે કહે છે.",cite:"ઋગ્વેદ ૧.૧૬૪.૪૬"},
   {t:"p",text:"દરેક વેદના ચાર સ્તર છે — સંહિતા, બ્રાહ્મણ, આરણ્યક અને ઉપનિષદ, જ્યાં કર્મકાંડ જ્ઞાનમાં પરિણમે છે."},
   {t:"card",text:"ઋગ્વેદ",cite:"૧,૦૨૮ સૂક્ત · ૧૦,૫૫૨ ઋચા",deva:"ऋग्"},
   {t:"card",text:"યજુર્વેદ",cite:"યજ્ઞ-સૂત્રોનો વેદ",deva:"यजुर्"},
   {t:"card",text:"સામવેદ",cite:"સંગીતનો વેદ · ભારતીય સંગીતનું મૂળ",deva:"साम"},
   {t:"card",text:"અથર્વવેદ",cite:"આરોગ્ય, ગૃહ્ય-વિધિ અને જિજ્ઞાસા",deva:"अथर्व"}
 ]}
};
const FEST = [
 {day:"14",mon:"AUG",en:"Janmāṣṭamī",gu:"જન્માષ્ટમી",noteEn:"In 3 days · Kṛṣṇa's appearance",noteGu:"૩ દિવસમાં · કૃષ્ણ જન્મ",soon:true},
 {day:"27",mon:"AUG",en:"Gaṇeśa Caturthī",gu:"ગણેશ ચતુર્થી",noteEn:"Ten days of Gaṇapati",noteGu:"દસ દિવસનો ગણપતિ ઉત્સવ",soon:false},
 {day:"22",mon:"SEP",en:"Navarātri begins",gu:"નવરાત્રિ પ્રારંભ",noteEn:"Nine nights of the Devī",noteGu:"દેવીની નવ રાત્રિ",soon:false},
 {day:"20",mon:"OCT",en:"Dīpāvalī",gu:"દીપાવલી",noteEn:"The festival of lights",noteGu:"દીપોનો ઉત્સવ",soon:false}
];
const YOGA = [
 {deva:"ज्ञान",en:"Jñāna",gu:"જ્ઞાન",nEn:"The path of knowledge",nGu:"જ્ઞાનનો માર્ગ"},
 {deva:"भक्ति",en:"Bhakti",gu:"ભક્તિ",nEn:"The path of devotion",nGu:"ભક્તિનો માર્ગ"},
 {deva:"कर्म",en:"Karma",gu:"કર્મ",nEn:"The path of action",nGu:"કર્મનો માર્ગ"},
 {deva:"राज",en:"Rāja",gu:"રાજ",nEn:"The path of meditation",nGu:"ધ્યાનનો માર્ગ"}
];
const PARTS = [
 {id:1,en:"Foundations",gu:"પાયો",deva:"आधार"},
 {id:2,en:"The Corpus",gu:"ગ્રંથરાશિ",deva:"ग्रन्थ"},
 {id:3,en:"Philosophy",gu:"દર્શન",deva:"दर्शन"},
 {id:4,en:"Living Tradition",gu:"જીવંત પરંપરા",deva:"परम्परा"}
];
const ROMAN = ["","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII"];

let S = { lang:"en", tab:"home", reader:null, saved:[3], query:"", font:1, progress:{3:62,1:100,2:100} };
function setS(patch){ S = Object.assign({}, S, patch); render(); }
function t(en,gu){ return S.lang === "en" ? en : gu; }
function esc(s){ return (s+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

function chapters(){ return CH.map(c => Object.assign({}, c, {title: t(c.en,c.gu), pct: S.progress[c.n]||0})); }

function langBtnCls(on,guj){
  return `padding:4px 11px;border-radius:16px;border:none;cursor:pointer;font-weight:500;letter-spacing:.06em;` +
    (guj ? `font-family:'Noto Serif Gujarati',serif;font-size:11px;` : `font-family:'Work Sans',sans-serif;font-size:10px;`) +
    `background:${on ? '#2E2B26' : 'transparent'};color:${on ? '#EFEBE2' : 'rgba(46,43,38,.5)'}`;
}
function langToggle(){
  return `<div style="display:flex;gap:4px;align-items:center;border:1px solid rgba(46,43,38,.22);border-radius:20px;padding:3px;background:rgba(255,255,255,.35)">
    <button onclick="setS({lang:'en'})" style="${langBtnCls(S.lang==='en',false)}">EN</button>
    <button onclick="setS({lang:'gu'})" style="${langBtnCls(S.lang==='gu',true)}">ગુજરાતી</button>
  </div>`;
}
function tabIconStyle(active,om){
  return `font-size:17px;line-height:1;color:${active?'#B0801F':'rgba(46,43,38,.45)'};font-family:${om?"'Noto Serif Devanagari',serif":'inherit'}`;
}
function tabTextStyle(active){
  return `font-family:'Work Sans',sans-serif;font-size:9.5px;font-weight:${active?500:400};color:${active?'#8A6A2A':'rgba(46,43,38,.45)'}`;
}

function renderHome(){
  const chs = chapters(), cur = chs.find(c=>c.n===3)||chs[0], fest = FEST[0];
  const partsHtml = PARTS.map(p => `
    <div onclick="setS({tab:'library',query:''})" style="background:#EFEBE2;border-radius:14px;padding:16px 15px;box-shadow:0 1px 0 rgba(255,255,255,.85) inset,0 2px 9px rgba(120,105,80,.12);cursor:pointer">
      <div style="font-family:'Noto Serif Devanagari',serif;font-size:19px;color:#B0801F">${p.deva}</div>
      <div style="font-size:19px;font-weight:600;margin-top:3px;line-height:1.2">${esc(t(p.en,p.gu))}</div>
      <div style="font:400 11px 'Work Sans',sans-serif;color:rgba(46,43,38,.5);margin-top:3px">${CH.filter(c=>c.part===p.id).length}${t(' chapters',' પ્રકરણ')}</div>
    </div>`).join('');
  return `
  <div style="flex:none;height:326px;position:relative;overflow:hidden;background:linear-gradient(168deg,#DAD4C8 0%,#C9C1B2 55%,#BCB2A0 100%);box-shadow:inset 0 -18px 34px rgba(120,105,80,.2)">
    <div style="position:absolute;top:160px;left:50%;width:420px;height:420px;border-radius:50%;border:1px solid rgba(176,128,31,.16);animation:sdSpin 90s linear infinite"></div>
    <div style="position:absolute;top:160px;left:50%;width:330px;height:330px;border-radius:50%;border:1px solid rgba(176,128,31,.22);border-style:dashed;animation:sdSpinR 60s linear infinite"></div>
    <div style="position:absolute;top:160px;left:50%;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(233,162,39,.16),transparent 70%);animation:sdBreathe 7s ease-in-out infinite"></div>
    <div style="position:absolute;left:22%;bottom:40px;width:3px;height:3px;border-radius:50%;background:rgba(176,128,31,.7);animation:sdDust 9s linear infinite"></div>
    <div style="position:absolute;left:44%;bottom:30px;width:2px;height:2px;border-radius:50%;background:rgba(176,128,31,.6);animation:sdDust 11s linear infinite 2s"></div>
    <div style="position:absolute;left:68%;bottom:50px;width:3px;height:3px;border-radius:50%;background:rgba(176,128,31,.55);animation:sdDust 13s linear infinite 4s"></div>
    <div style="position:absolute;left:82%;bottom:24px;width:2px;height:2px;border-radius:50%;background:rgba(176,128,31,.6);animation:sdDust 10s linear infinite 6s"></div>
    <div style="position:absolute;top:54px;left:26px;right:26px;display:flex;align-items:center;justify-content:space-between">
      <span style="font:500 10.5px 'Work Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:rgba(46,43,38,.55)">${t('Sunday · Śrāvaṇa','રવિવાર · શ્રાવણ')}</span>
      ${langToggle()}
    </div>
    <div style="position:absolute;top:92px;left:50%;transform:translateX(-50%);width:136px;height:136px;border-radius:50%;background:linear-gradient(160deg,#E9E3D6,#CEC5B3);box-shadow:inset 2px 3px 7px rgba(255,255,255,.8),inset -3px -4px 10px rgba(120,105,80,.38),0 6px 18px rgba(120,105,80,.18);display:flex;align-items:center;justify-content:center">
      <span style="font-family:'Noto Serif Devanagari',serif;font-size:62px;line-height:1;color:#B0801F;display:block;transform:translateY(15px);text-shadow:0 1px 0 rgba(255,255,255,.65),0 -1px 1px rgba(90,70,35,.35)">ॐ</span>
    </div>
    <div style="position:absolute;left:26px;right:26px;bottom:26px;text-align:center">
      <div style="font-family:'Cinzel',serif;font-size:26px;letter-spacing:.12em;font-weight:600;color:#2E2B26">${t('SANĀTANA','સનાતન')}</div>
      <div style="font-size:16.5px;font-style:italic;color:rgba(46,43,38,.6);margin-top:2px">${t("The eternal order · a reader's guide",'શાશ્વત ધર્મ · વાચકની માર્ગદર્શિકા')}</div>
    </div>
  </div>
  <div class="scroll" style="padding:22px 26px 94px">
    <div onclick="openReader(${cur.n})" style="background:#EFEBE2;border-radius:16px;padding:19px 20px;box-shadow:0 1px 0 rgba(255,255,255,.85) inset,0 3px 12px rgba(120,105,80,.15);cursor:pointer">
      <div style="display:flex;align-items:baseline;justify-content:space-between">
        <div style="font-family:'Cinzel',serif;font-size:11px;letter-spacing:.18em;color:#B0801F">${t('CONTINUE','આગળ વાંચો')}</div>
        <div style="font:400 11px 'Work Sans',sans-serif;color:rgba(46,43,38,.5)">${t('Chapter ','પ્રકરણ ')}${ROMAN[cur.n]} · ${cur.pct}%</div>
      </div>
      <div style="font-size:26px;font-weight:600;line-height:1.15;margin:5px 0 3px">${esc(cur.title)}</div>
      <div style="font-family:'Noto Serif Devanagari',serif;font-size:13px;color:#B0801F;letter-spacing:.1em">${cur.deva}</div>
      <div style="height:4px;border-radius:3px;background:#DDD7CA;overflow:hidden;margin-top:13px"><div style="width:${cur.pct}%;height:100%;background:linear-gradient(90deg,#E9A227,#C97C15)"></div></div>
    </div>
    <div style="margin-top:22px;font-family:'Cinzel',serif;font-size:12px;letter-spacing:.18em;color:rgba(46,43,38,.55)">${t('VERSE OF THE DAY','આજનો શ્લોક')}</div>
    <div style="margin-top:10px;background:linear-gradient(160deg,#E4DED2,#D6CEBE);border-radius:16px;padding:20px;text-align:center;box-shadow:inset 2px 3px 6px rgba(255,255,255,.6),inset -2px -3px 8px rgba(120,105,80,.26)">
      <div style="font-family:'Noto Serif Devanagari',serif;font-size:19px;line-height:1.65;color:#8A6A2A">एकं सत् विप्रा बहुधा वदन्ति</div>
      <div style="font-size:16.5px;font-style:italic;color:rgba(46,43,38,.68);margin-top:7px">${t('Truth is one; the wise call it by many names.','સત્ય એક છે; જ્ઞાનીઓ તેને અનેક નામે કહે છે.')}</div>
      <div style="font:400 10.5px 'Work Sans',sans-serif;letter-spacing:.16em;color:rgba(46,43,38,.45);margin-top:9px">ṚGVEDA 1.164.46</div>
    </div>
    <div onclick="setS({tab:'practice'})" style="margin-top:20px;background:#EFEBE2;border-radius:16px;padding:15px 18px;box-shadow:0 1px 0 rgba(255,255,255,.85) inset,0 2px 10px rgba(120,105,80,.13);display:flex;gap:15px;align-items:center;cursor:pointer">
      <div style="flex:none;width:48px;height:48px;border-radius:12px;background:linear-gradient(160deg,#E9A227,#C97C15);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;line-height:1"><span style="font-family:'Cinzel',serif;font-size:17px">${fest.day}</span><span style="font:500 8px 'Work Sans',sans-serif;letter-spacing:.1em;margin-top:2px">${fest.mon}</span></div>
      <div style="flex:1"><div style="font:500 10px 'Work Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#B0801F">${t('Upcoming','આગામી')}</div><div style="font-size:21px;font-weight:600;line-height:1.2">${esc(t(fest.en,fest.gu))}</div></div>
      <span style="color:rgba(46,43,38,.35);font-size:15px">›</span>
    </div>
    <div style="margin-top:24px;font-family:'Cinzel',serif;font-size:12px;letter-spacing:.18em;color:rgba(46,43,38,.55)">${t('EXPLORE','વિષય-વિભાગ')}</div>
    <div style="margin-top:11px;display:grid;grid-template-columns:1fr 1fr;gap:12px">${partsHtml}</div>
  </div>`;
}

function renderLibrary(){
  const chs = chapters(); const q = S.query.trim().toLowerCase();
  const match = c => !q || c.title.toLowerCase().includes(q) || c.en.toLowerCase().includes(q) || c.deva.includes(q);
  const meta = c => { const m = c.mins+t(' min',' મિનિટ'); if (c.pct>=100) return m+t(' · complete',' · પૂર્ણ'); if (c.pct>0) return m+' · '+c.pct+t('% read','% વાંચ્યું'); return m; };
  const cardHtml = c => `
    <div onclick="openReader(${c.n})" style="background:#EFEBE2;border-radius:13px;padding:14px 16px;box-shadow:0 1px 0 rgba(255,255,255,.85) inset,0 2px 9px rgba(120,105,80,.12);display:flex;align-items:center;gap:14px;cursor:pointer">
      <span style="font-family:'Cinzel',serif;font-size:14px;color:#B0801F;width:26px;flex:none">${ROMAN[c.n]}</span>
      <div style="flex:1"><div style="font-size:20px;font-weight:600;line-height:1.2">${esc(c.title)}</div><div style="font:400 11.5px 'Work Sans',sans-serif;color:rgba(46,43,38,.5);margin-top:2px">${meta(c)}</div></div>
      <span style="font-size:13px;color:#B0801F">${S.saved.includes(c.n)?'❖':(c.pct>=100?'✓':'')}</span>
    </div>`;
  const groups = PARTS.map(p => ({label:t(p.en,p.gu).toUpperCase(), items: chs.filter(c=>c.part===p.id && match(c))})).filter(g=>g.items.length);
  const body = groups.length
    ? groups.map(g => `<div style="font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.2em;color:rgba(46,43,38,.5);margin:14px 0 10px">${g.label}</div><div style="display:flex;flex-direction:column;gap:10px">${g.items.map(cardHtml).join('')}</div>`).join('')
    : `<div style="text-align:center;padding:50px 0;font-size:18px;font-style:italic;color:rgba(46,43,38,.45)">${t('Nothing found.','કંઈ મળ્યું નહીં.')}</div>`;
  return `
  <div style="flex:none;padding:52px 26px 18px;background:linear-gradient(170deg,#D9D3C7,#CFC8BA);box-shadow:inset 0 -10px 20px rgba(120,105,80,.12)">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="font-family:'Cinzel',serif;font-size:25px;font-weight:600;letter-spacing:.08em">${t('LIBRARY','ગ્રંથાલય')}</div>
      ${langToggle()}
    </div>
    <div style="margin-top:14px;background:#EFEBE2;border-radius:12px;padding:10px 14px;display:flex;gap:10px;align-items:center;box-shadow:inset 1px 2px 4px rgba(120,105,80,.2)">
      <span style="color:rgba(46,43,38,.4);font-size:14px">⌕</span>
      <input value="${esc(S.query)}" oninput="setS({query:this.value})" placeholder="${t('Search 22 chapters','શોધો')}" style="flex:1;border:none;outline:none;background:transparent;font:400 14.5px 'Work Sans',sans-serif;color:#2E2B26">
    </div>
  </div>
  <div class="scroll" style="padding:16px 26px 94px">${body}</div>`;
}

function renderPractice(){
  const chip = f => `flex:none;width:46px;height:46px;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:${f.soon?'#fff':'#8A6A2A'};background:${f.soon?'linear-gradient(160deg,#E9A227,#C97C15)':'linear-gradient(160deg,#E4DED2,#D6CEBE)'};box-shadow:${f.soon?'0 2px 8px rgba(201,124,21,.3)':'inset 1px 2px 4px rgba(255,255,255,.6),inset -1px -2px 5px rgba(120,105,80,.25)'}`;
  const festHtml = FEST.map(f => `
    <div style="background:#EFEBE2;border-radius:14px;padding:13px 16px;box-shadow:0 1px 0 rgba(255,255,255,.85) inset,0 2px 9px rgba(120,105,80,.12);display:flex;gap:14px;align-items:center">
      <div style="${chip(f)}"><span style="font-family:'Cinzel',serif;font-size:16px;line-height:1">${f.day}</span><span style="font:500 8px 'Work Sans',sans-serif;letter-spacing:.1em;margin-top:2px">${f.mon}</span></div>
      <div style="flex:1"><div style="font-size:20px;font-weight:600;line-height:1.2">${esc(t(f.en,f.gu))}</div><div style="font:400 11.5px 'Work Sans',sans-serif;color:rgba(46,43,38,.5);margin-top:2px">${esc(t(f.noteEn,f.noteGu))}</div></div>
    </div>`).join('');
  const yogaHtml = YOGA.map(y => `
    <div style="background:linear-gradient(160deg,#E4DED2,#D8D0C0);border-radius:14px;padding:16px 15px;box-shadow:inset 1px 2px 5px rgba(255,255,255,.6),inset -2px -2px 6px rgba(120,105,80,.22)">
      <div style="font-family:'Noto Serif Devanagari',serif;font-size:20px;color:#8A6A2A">${y.deva}</div>
      <div style="font-size:19px;font-weight:600;margin-top:3px">${esc(t(y.en,y.gu))}</div>
      <div style="font:400 11px 'Work Sans',sans-serif;color:rgba(46,43,38,.55);margin-top:3px;line-height:1.4">${esc(t(y.nEn,y.nGu))}</div>
    </div>`).join('');
  return `
  <div style="flex:none;padding:52px 26px 20px;background:linear-gradient(170deg,#D9D3C7,#CFC8BA);box-shadow:inset 0 -10px 20px rgba(120,105,80,.12)">
    <div style="font-family:'Cinzel',serif;font-size:25px;font-weight:600;letter-spacing:.08em">${t('PRACTICE','સાધના')}</div>
    <div style="font-size:16px;font-style:italic;color:rgba(46,43,38,.6);margin-top:2px">${t('The calendar and the four paths','ઉત્સવ-પંચાંગ અને ચાર માર્ગ')}</div>
  </div>
  <div class="scroll" style="padding:20px 26px 94px">
    <div style="font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.2em;color:rgba(46,43,38,.5)">${t('FESTIVAL CALENDAR','ઉત્સવ-પંચાંગ')}</div>
    <div style="margin-top:11px;display:flex;flex-direction:column;gap:10px">${festHtml}</div>
    <div style="font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.2em;color:rgba(46,43,38,.5);margin:22px 0 11px">${t('THE FOUR PATHS','ચાર માર્ગ')}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${yogaHtml}</div>
  </div>`;
}

function renderSaved(){
  const chs = chapters().filter(c => S.saved.includes(c.n));
  const meta = c => { const m = c.mins+t(' min',' મિનિટ'); if (c.pct>=100) return m+t(' · complete',' · પૂર્ણ'); if (c.pct>0) return m+' · '+c.pct+t('% read','% વાંચ્યું'); return m; };
  const body = chs.length
    ? `<div style="display:flex;flex-direction:column;gap:10px">${chs.map(c=>`
      <div onclick="openReader(${c.n})" style="background:#EFEBE2;border-radius:13px;padding:14px 16px;box-shadow:0 1px 0 rgba(255,255,255,.85) inset,0 2px 9px rgba(120,105,80,.12);display:flex;align-items:center;gap:14px;cursor:pointer">
        <span style="font-family:'Cinzel',serif;font-size:14px;color:#B0801F;width:26px;flex:none">${ROMAN[c.n]}</span>
        <div style="flex:1"><div style="font-size:20px;font-weight:600;line-height:1.2">${esc(c.title)}</div><div style="font:400 11.5px 'Work Sans',sans-serif;color:rgba(46,43,38,.5);margin-top:2px">${meta(c)}</div></div>
        <span style="font-size:13px;color:#B0801F">❖</span>
      </div>`).join('')}</div>`
    : `<div style="text-align:center;padding:70px 24px"><div style="font-family:'Noto Serif Devanagari',serif;font-size:38px;color:rgba(176,128,31,.45)">❖</div><div style="font-size:18px;font-style:italic;color:rgba(46,43,38,.5);margin-top:12px;line-height:1.5">${t('Tap the ❖ while reading to keep a chapter here.','વાંચતી વખતે ❖ દબાવીને પ્રકરણ અહીં સાચવો.')}</div></div>`;
  return `
  <div style="flex:none;padding:52px 26px 20px;background:linear-gradient(170deg,#D9D3C7,#CFC8BA);box-shadow:inset 0 -10px 20px rgba(120,105,80,.12)">
    <div style="font-family:'Cinzel',serif;font-size:25px;font-weight:600;letter-spacing:.08em">${t('SAVED','સાચવેલું')}</div>
    <div style="font-size:16px;font-style:italic;color:rgba(46,43,38,.6);margin-top:2px">${t('Chapters you have bookmarked','તમે સાચવેલાં પ્રકરણો')}</div>
  </div>
  <div class="scroll" style="padding:20px 26px 94px">${body}</div>`;
}

function renderReader(){
  const chs = chapters(); const rch = chs.find(c=>c.n===S.reader);
  const raw = BODY[rch.n] ? BODY[rch.n][S.lang] : null;
  const blocks = raw || [{t:"p",text: t("This chapter is part of the guide's "+(PARTS.find(p=>p.id===rch.part)||{}).en+" sequence. Full text flows in from the guide.","આ પ્રકરણ માર્ગદર્શિકાના ક્રમનો ભાગ છે. પૂર્ણ લખાણ ગ્રંથમાંથી આવે છે.")}];
  const blocksHtml = blocks.map(b => {
    if (b.t === "quote") return `<div style="background:linear-gradient(160deg,#E4DED2,#D6CEBE);border-radius:14px;padding:20px;text-align:center;margin:0 0 20px;box-shadow:inset 2px 3px 6px rgba(255,255,255,.6),inset -2px -3px 8px rgba(120,105,80,.28)">
      <div style="font-family:'Noto Serif Devanagari',serif;font-size:1.05em;line-height:1.6;color:#8A6A2A">${b.deva}</div>
      <div style="font-size:.9em;font-style:italic;color:rgba(46,43,38,.65);margin-top:7px">${esc(b.text)}</div>
      <div style="font:400 10.5px 'Work Sans',sans-serif;letter-spacing:.16em;color:rgba(46,43,38,.45);margin-top:8px">${b.cite}</div></div>`;
    if (b.t === "card") return `<div style="background:#E7E2D8;border-radius:12px;padding:14px 16px;margin:0 0 10px;display:flex;align-items:baseline;justify-content:space-between;box-shadow:0 1px 0 rgba(255,255,255,.8) inset">
      <div><div style="font-size:1.05em;font-weight:600">${esc(b.text)}</div><div style="font:400 12px 'Work Sans',sans-serif;color:rgba(46,43,38,.5);margin-top:2px">${esc(b.cite)}</div></div>
      <span style="font-family:'Noto Serif Devanagari',serif;font-size:1em;color:#B0801F">${b.deva}</span></div>`;
    return `<p style="font-size:1em;line-height:1.75;color:#3A362E;margin:0 0 18px">${esc(b.text)}</p>`;
  }).join('');
  const idx = CH.findIndex(c=>c.n===rch.n), prev = idx>0?CH[idx-1]:null, next = idx<CH.length-1?CH[idx+1]:null;
  const fontLabel = S.font===0?'A':(S.font===1?'Aa':'AA');
  const guFont = S.lang==='gu' ? "'Noto Serif Gujarati','Cormorant Garamond',serif" : "'Cormorant Garamond',Georgia,serif";
  const isSaved = S.saved.includes(S.reader);
  return `
  <div style="display:flex;flex-direction:column;height:100%;background:#EFEBE2;animation:sdFade .28s ease">
    <div style="flex:none;background:linear-gradient(170deg,#D9D3C7,#C9C1B2);padding:52px 26px 20px;box-shadow:inset 0 -12px 22px rgba(120,105,80,.16)">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span onclick="setS({reader:null})" style="font-size:19px;color:rgba(46,43,38,.6);cursor:pointer;padding:4px 8px 4px 0">←</span>
        <div style="display:flex;gap:14px;align-items:center">
          <span onclick="setS({font:(${S.font}+1)%3})" style="font-size:15px;color:rgba(46,43,38,.6);cursor:pointer;padding:4px 6px">${fontLabel}</span>
          <span onclick="toggleSave()" style="font-size:15px;cursor:pointer;padding:4px 6px;color:${isSaved?'#C97C15':'rgba(46,43,38,.4)'}">❖</span>
        </div>
      </div>
      <div style="font-family:'Cinzel',serif;font-size:11.5px;letter-spacing:.2em;color:rgba(46,43,38,.55);margin-top:14px">${t('CHAPTER ','પ્રકરણ ')}${ROMAN[rch.n]}</div>
      <div style="font-family:'Cinzel',serif;font-size:29px;font-weight:600;line-height:1.18;margin-top:5px">${esc(rch.title)}</div>
      <div style="font-family:'Noto Serif Devanagari',serif;font-size:15px;color:#B0801F;letter-spacing:.1em;margin-top:4px">${rch.deva}</div>
    </div>
    <div style="flex:none;height:4px;background:linear-gradient(90deg,#E9A227,#C97C15 40%,transparent);opacity:.75"></div>
    <div class="scroll" style="padding:22px 28px 26px">
      <div style="font-size:${17+S.font*2}px;font-family:${guFont}">${blocksHtml}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:16px;border-top:1px solid rgba(46,43,38,.12)">
        <span onclick="${prev?`openReader(${prev.n})`:''}" style="font:400 12px 'Work Sans',sans-serif;color:rgba(46,43,38,.5);cursor:${prev?'pointer':'default'}">${prev?'← '+esc(t(prev.en,prev.gu)):''}</span>
        <span onclick="${next?`openReader(${next.n})`:''}" style="font:400 12px 'Work Sans',sans-serif;color:#B0801F;cursor:${next?'pointer':'default'}">${next?esc(t(next.en,next.gu))+' →':''}</span>
      </div>
    </div>
    <div style="flex:none;padding:12px 28px 30px;display:flex;align-items:center;gap:14px;background:#EFEBE2">
      <div style="flex:1;height:3px;border-radius:2px;background:#DDD7CA;overflow:hidden"><div style="width:${Math.max(rch.pct,8)}%;height:100%;background:#C97C15"></div></div>
      <span style="font:400 11px 'Work Sans',sans-serif;color:rgba(46,43,38,.5)">${rch.mins}${t(' min read',' મિનિટ')}</span>
    </div>
  </div>`;
}

function renderTabs(){
  return `<div style="position:absolute;left:0;right:0;bottom:0;background:#DFDACE;padding:11px 20px 30px;display:flex;justify-content:space-between;box-shadow:0 -1px 0 rgba(255,255,255,.6) inset,0 -6px 18px rgba(120,105,80,.1)">
    <div onclick="setS({tab:'home',reader:null})" style="display:flex;flex-direction:column;align-items:center;gap:5px;width:66px;cursor:pointer"><span style="${tabIconStyle(S.tab==='home',true)}">ॐ</span><span style="${tabTextStyle(S.tab==='home')}">${t('Home','ઘર')}</span></div>
    <div onclick="setS({tab:'library',reader:null})" style="display:flex;flex-direction:column;align-items:center;gap:5px;width:66px;cursor:pointer"><span style="${tabIconStyle(S.tab==='library')}">☰</span><span style="${tabTextStyle(S.tab==='library')}">${t('Library','ગ્રંથ')}</span></div>
    <div onclick="setS({tab:'practice',reader:null})" style="display:flex;flex-direction:column;align-items:center;gap:5px;width:66px;cursor:pointer"><span style="${tabIconStyle(S.tab==='practice')}">◈</span><span style="${tabTextStyle(S.tab==='practice')}">${t('Practice','સાધના')}</span></div>
    <div onclick="setS({tab:'saved',reader:null})" style="display:flex;flex-direction:column;align-items:center;gap:5px;width:66px;cursor:pointer"><span style="${tabIconStyle(S.tab==='saved')}">☾</span><span style="${tabTextStyle(S.tab==='saved')}">${t('Saved','સાચવેલું')}</span></div>
  </div>`;
}

function openReader(n){ setS({reader:n}); }
function toggleSave(){ const has = S.saved.includes(S.reader); setS({saved: has ? S.saved.filter(x=>x!==S.reader) : S.saved.concat(S.reader)}); }

function render(){
  document.documentElement.lang = S.lang;
  let inner;
  if (S.reader) { inner = renderReader(); }
  else {
    const body = S.tab==='home' ? renderHome() : S.tab==='library' ? renderLibrary() : S.tab==='practice' ? renderPractice() : renderSaved();
    inner = body + renderTabs();
  }
  document.getElementById('stage').innerHTML = inner;
}
render();
