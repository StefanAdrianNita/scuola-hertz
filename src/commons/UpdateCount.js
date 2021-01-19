

const countEl=document.getElementById("count");
 export function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/Hertz_Virtual_Tour/virtualtour/?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value;
    });
}
