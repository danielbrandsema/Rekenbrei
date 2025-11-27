const form = document.getElementById("knitForm");
const result = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");


form.addEventListener("submit", (e) => {
e.preventDefault();


const garment = document.getElementById("garment").value;
const gauge = parseFloat(document.getElementById("gauge").value);
const size = parseFloat(document.getElementById("size").value);


if (isNaN(gauge) || isNaN(size)) {
result.textContent = "Vul alle velden correct in.";
return;
}


const stitchesPerCm = gauge / 10;
const neededStitches = Math.round(stitchesPerCm * size);


result.textContent = `Voor een ${garment} heb je ongeveer ${neededStitches} steken nodig.`;
});


resetBtn.addEventListener("click", () => {
result.textContent = "";
});