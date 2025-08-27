<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Bienestar Consciente · by Nancy Nieves</title>
<style>
  :root{
    --verde:#A8BA55;        /* principal */
    --verde-suave:#A8BA5599;/* hover / acento translúcido */
    --verde-claro:#CED79E82;/* fondos suaves */
    --blanco:#FFFFFF;
    --gris:#5f6b63;
  }
  *{box-sizing:border-box}
  html,body{margin:0;padding:0;font-family:system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;background:var(--blanco);color:#111}
  header{padding:18px 16px 4px; text-align:center;}
  .brand{display:flex;align-items:center;justify-content:center;gap:12px}
  .logo{width:72px;height:72px}
  h1{margin:0;color:var(--verde);font-size:clamp(24px,5vw,32px);}
  .slogan{margin:8px 16px 14px;color:var(--gris)}
  .wrap{max-width:900px;margin:0 auto;padding:12px 16px 60px}
  section{background:#fff;border:2px solid var(--verde-claro);border-radius:16px;padding:14px;margin:12px 0;box-shadow:0 4px 14px rgba(0,0,0,.04)}
  section h2{margin:0 0 10px;font-size:20px;color:var(--verde)}
  .row{display:flex;gap:8px;align-items:center}
  input[type="text"], textarea{width:100%;padding:12px 14px;border:2px solid var(--verde-claro);border-radius:12px;font-size:16px}
  button{padding:10px 16px;border:none;border-radius:12px;background:var(--verde);color:#fff;font-weight:600}
  button:active{transform:translateY(1px)}
  button.ghost{background:transparent;color:var(--verde);border:2px solid var(--verde)}
  ul{list-style:none;padding:0;margin:0}
  .habit{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px 12px;margin:10px 0;background:var(--blanco);border:1px solid var(--verde-claro);border-radius:12px}
  .habit-name{flex:1}
  .habit.done .habit-name{color:#777;text-decoration:line-through}
  .chip{font-size:12px;padding:4px 8px;border-radius:999px;background:var(--verde-claro);}
  .fade-in{animation:fade .4s ease-out}
  @keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}

  /* Mindfulness */
  .timer-grid{display:flex;gap:8px;flex-wrap:wrap}
  .breath{width:160px;height:160px;border-radius:50%;margin:16px auto;background:var(--verde-suave);display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff}
  .pulse{animation:pulse 4s ease-in-out infinite}
  @keyframes pulse{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(1)}}

  /* Quote & retos */
  .quote{padding:12px;border-left:6px solid var(--verde);background:#f8fbf4;border-radius:8px;margin:8px 0;color:#2f3b33}
  .reto{display:flex;justify-content:space-between;align-items:center;gap:8px}

  /* Responsive */
  @media (min-width:700px){.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:12px}}
</style>
</head>
<body>
  <header>
    <div class="brand">
      <!-- Ilustración SVG inline para no depender de internet -->
      <svg class="logo" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#e8f2d8"/>
            <stop offset="1" stop-color="#cfe8a2"/>
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#g)" stroke="#a0c061" stroke-width="2"/>
        <path d="M60 26c16 0 29 13 29 29S76 84 60 84 31 71 31 55 44 26 60 26z" fill="#A8BA55" opacity=".25"/>
        <path d="M60 78c-8 0-14-6-14-14 0-9 6-15 14-15s14 6 14 15c0 8-6 14-14 14z" fill="#7ca03a" opacity=".35"/>
        <circle cx="60" cy="60" r="6" fill="#6a8f2f"/>
      </svg>
      <div>
        <h1>Bienestar Consciente</h1>
        <div class="slogan">Un espacio para escucharte, transformarte y elegir tu mejor versión.</div>
      </div>
    </div>
  </header>

  <div class="wrap">
    <!-- Frase motivadora -->
    <section id="fraseSec">
      <h2>Frase del día</h2>
      <div class="quote" id="frase"></div>
    </section>

    <div class="grid-2">
      <!-- Hábitos conscientes -->
      <section>
        <h2>Registro de hábitos</h2>
        <div class="row" style="margin-bottom:8px">
          <input id="habitInput" type="text" placeholder="Ej.: Respirar 3 min al despertar" />
          <button id="addHabitBtn">Agregar</button>
        </div>
        <ul id="habitList"></ul>
      </section>

      <!-- Mindfulness Express -->
      <section>
        <h2>Mindfulness Express</h2>
        <div class="timer-grid" style="margin-bottom:8px">
          <button class="ghost" data-min="3">3 min</button>
          <button class="ghost" data-min="5">5 min</button>
          <button class="ghost" data-min="10">10 min</button>
        </div>
        <div class="breath" id="breath" style="display:none;">00:00</div>
        <div id="breathHint" style="color:var(--gris);font-size:14px;text-align:center"></div>
      </section>
    </div>

    <div class="grid-2">
      <!-- Pregunta poderosa del día -->
      <section>
        <h2>Pregunta poderosa del día</h2>
        <div id="pregunta" class="quote" style="margin-bottom:8px"></div>
        <textarea id="respuesta" placeholder="Escribe aquí tu reflexión..."></textarea>
        <div class="row" style="justify-content:flex-end;margin-top:8px">
          <button id="saveRespBtn">Guardar reflexión</button>
        </div>
        <ul id="refList" style="margin-top:8px"></ul>
      </section>

      <!-- Reto semanal -->
      <section>
        <h2>Reto de bienestar</h2>
        <div class="reto">
          <div id="retoTexto" class="quote" style="flex:1"></div>
          <button id="retoHecho" class="ghost">Hecho hoy</button>
        </div>
        <div id="progresoReto" style="margin-top:8px;color:var(--gris)"></div>
      </section>
    </div>
  </div>

<script>
// ======= Utilidades =======
const $ = (sel)=>document.querySelector(sel);
const ls = {
  get:(k,def)=>{ try{ return JSON.parse(localStorage.getItem(k)) ?? def }catch{ return def } },
  set:(k,v)=>localStorage.setItem(k, JSON.stringify(v))
};
const todayStr = ()=> new Date().toISOString().slice(0,10); // YYYY-MM-DD
const ymd = (d)=> d.toISOString().slice(0,10);
function daysBetween(a,b){ return Math.round((new Date(a)-new Date(b))/(1000*60*60*24)); }

// ======= Datos iniciales =======
const QUOTES = [
  "La raíz de todo lo bueno —y de lo que sanar— está en tu interior.",
  "Donde va tu enfoque, fluye tu energía.",
  "Hoy elijo escucharme con amabilidad.",
  "Pequeños actos conscientes crean grandes cambios.",
  "Respira. Vuelve a ti. Vuelve al presente.",
  "El lenguaje que eliges crea el mundo que habitas.",
  "Un paso a la vez también es avanzar.",
];
const PREGUNTAS = [
  "¿Qué emoción quiero elegir hoy?",
  "¿Qué conversación necesito tener conmigo misma?",
  "¿Qué puedo agradecer ahora mismo?",
  "¿Qué límite amoroso necesito poner hoy?",
  "¿Qué acción pequeña me acerca a mi propósito?",
  "¿Qué creencia quiero desafiar con curiosidad?",
];
const RETOS = [
  "Agradecer 3 cosas cada noche.",
  "5 minutos de respiración consciente al despertar.",
  "Escribir una intención diaria de 1 oración.",
  "Pausa de 1 minuto antes de responder en conversaciones difíciles.",
  "Caminar 10 minutos en presencia plena.",
  "Elegir una palabra guía para el día.",
];

// Estado
let state = ls.get('bc_state', {
  habits: [], // {id, name, dates:Set[], lastDate, streak}
  reflexiones: [], // {fecha, texto, pregunta}
  reto:{ semana: weekNumber(new Date()), hechos: [] } // fechas marcadas
});

// ======= Frase del día =======
function seedIndex(arr){
  const d = new Date();
  const seed = Number(`${d.getFullYear()}${d.getMonth()+1}${d.getDate()}`);
  return seed % arr.length;
}
function setFrase(){ $('#frase').textContent = QUOTES[seedIndex(QUOTES)]; }

// ======= Hábitos =======
const habitList = $('#habitList');
$('#addHabitBtn').addEventListener('click', addHabit);
$('#habitInput').addEventListener('keydown', e=>{ if(e.key==='Enter') addHabit(); });

function addHabit(){
  const v = $('#habitInput').value.trim();
  if(!v) return;
  const id = cryptoRandomId();
  state.habits.push({id,name:v,dates:[],lastDate:null,streak:0});
  $('#habitInput').value='';
  save();
  renderHabits();
}

function toggleToday(h){
  const t = todayStr();
  const hasToday = h.dates.includes(t);
  if(hasToday){
    // Quitar hoy
    h.dates = h.dates.filter(d=>d!==t);
    // Recalcular streak con última fecha restante
    recomputeStreak(h);
  }else{
    h.dates.push(t);
    if(!h.lastDate){ h.streak = 1; }
    else{
      const diff = daysBetween(t, h.lastDate);
      h.streak = (diff===1) ? (h.streak+1) : 1;
    }
    h.lastDate = t;
  }
}
function recomputeStreak(h){
  if(h.dates.length===0){ h.streak=0; h.lastDate=null; return; }
  h.dates.sort();
  let streak=1;
  for(let i=h.dates.length-1;i>0;i--){
    if(daysBetween(h.dates[i], h.dates[i-1])===1) streak++; else break;
  }
  h.streak = streak;
  h.lastDate = h.dates[h.dates.length-1];
}

function renderHabits(){
  habitList.innerHTML = '';
  state.habits.forEach(h=>{
    const li = document.createElement('li');
    li.className = 'habit fade-in'+(h.dates.includes(todayStr())?' done':'');
    const left = document.createElement('div');
    left.className = 'habit-name';
    left.textContent = h.name;

    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = `🔥 Racha: ${h.streak}`;

    const btn = document.createElement('button');
    btn.className = 'ghost';
    btn.textContent = h.dates.includes(todayStr())? 'Desmarcar hoy' : 'Hecho hoy';
    btn.onclick = ()=>{ toggleToday(h); save(); renderHabits(); };

    li.append(left, chip, btn);
    habitList.appendChild(li);
  });
}

// ======= Mindfulness =======
const breath = $('#breath');
const hint = $('#breathHint');
document.querySelectorAll('[data-min]').forEach(b=> b.addEventListener('click', ()=> startBreath(Number(b.dataset.min))));
let interval = null;
function startBreath(min){
  let s = min*60;
  breath.style.display='flex';
  breath.classList.add('pulse');
  hint.textContent = 'Inhala 4s · Retén 2s · Exhala 4s · Pausa 2s';
  clearInterval(interval);
  updateClock();
  interval = setInterval(()=>{ s--; updateClock(); if(s<=0){ stopBreath(); } },1000);
  function updateClock(){ breath.textContent = `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}` }
}
function stopBreath(){ clearInterval(interval); breath.classList.remove('pulse'); breath.style.display='none'; hint.textContent=''; }

// ======= Pregunta poderosa & reflexiones =======
function setPregunta(){ $('#pregunta').textContent = PREGUNTAS[seedIndex(PREGUNTAS)]; }
$('#saveRespBtn').addEventListener('click', ()=>{
  const texto = $('#respuesta').value.trim();
  if(!texto) return;
  state.reflexiones.unshift({ fecha: new Date().toISOString(), texto, pregunta: $('#pregunta').textContent });
  $('#respuesta').value='';
  save();
  renderReflexiones();
});
function renderReflexiones(){
  const ul = $('#refList'); ul.innerHTML='';
  state.reflexiones.slice(0,20).forEach(r=>{
    const li = document.createElement('li');
    li.className='quote fade-in';
    const d = new Date(r.fecha);
    li.textContent = `[${d.toLocaleDateString()} ${d.toLocaleTimeString().slice(0,5)}] ${r.pregunta} → ${r.texto}`;
    ul.appendChild(li);
  });
}

// ======= Reto semanal =======
function weekNumber(d){ // ISO-like simple calc
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7; // 1..7
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return Math.ceil((((date - yearStart) / 86400000) + 1)/7);
}
function setReto(){
  const wk = weekNumber(new Date());
  const reto = RETOS[wk % RETOS.length];
  $('#retoTexto').textContent = `Semana ${wk}: ${reto}`;
  if(!state.reto || state.reto.semana!==wk){ state.reto = { semana:wk, hechos: [] }; save(); }
  updateReto();
}
$('#retoHecho').addEventListener('click', ()=>{
  const t = todayStr();
  if(!state.reto.hechos.includes(t)) state.reto.hechos.push(t);
  save();
  updateReto();
});
function updateReto(){
  const wk = state.reto.semana; const dias = state.reto.hechos.length;
  $('#progresoReto').textContent = `Progreso semana ${wk}: ${dias} día(s) marcado(s).`;
}

// ======= Persistencia =======
function save(){ ls.set('bc_state', state); }

// ======= Inicio =======
setFrase();
setPregunta();
setReto();
renderHabits();
renderReflexiones();
</script>
</body>
</html>
