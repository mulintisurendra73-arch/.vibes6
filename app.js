const roomData=[
  ["🎧","Late Night Music","@dj_akash","1.2K"],
  ["🎤","Chill & Talk","@maya_vibes","846"],
  ["🔥","Weekend Party","@partyking","2.1K"]
];
const rooms=document.getElementById("rooms");
rooms.innerHTML=roomData.map(r=>`<article class="room"><div class="room-icon">${r[0]}</div><h3>${r[1]}</h3><p>${r[2]} · ${r[3]} listening</p><button class="join" onclick="joinRoom('${r[1]}')">Join room</button></article>`).join("");

function go(id,btn){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".navitem").forEach(x=>x.classList.remove("active"));
  if(btn) btn.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function openRoom(){document.getElementById("modal").classList.remove("hidden");document.getElementById("roomName").focus()}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function createRoom(){
  const n=document.getElementById("roomName").value.trim()||"My Vibe Room";
  closeModal();showToast(n+" created");
}
function joinRoom(name){showToast("Joining "+name+"…")}
function openChat(name){showToast("Opening chat with "+name)}
let toastTimer;
function showToast(msg){
  const t=document.getElementById("toast");t.textContent=msg;t.style.display="block";
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.style.display="none",2200);
}
