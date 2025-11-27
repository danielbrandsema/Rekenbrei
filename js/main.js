// --- DATA MODEL ---
// Hier definieer je alle kledingstukken en de onderdelen die berekend moeten worden.
// Later kun je deze uitbreiden met extra parameters.

const patterns = {
    socks: {
        label: "Sokken",
        parts: [
            { id: "boord", label: "Boord", type: "basic" },
            { id: "schacht", label: "Schacht", type: "basic" },
            { id: "hak", label: "Hak", type: "decrease" },
            { id: "teen", label: "Teen", type: "decrease" }
        ]
    },
    sweater: {
        label: "Trui",
        parts: [
            { id: "hals", label: "Hals", type: "basic" },
            { id: "schouder", label: "Schoudergedeelte", type: "basic" },
            { id: "rug", label: "Rug / Voorkant", type: "basic" },
            { id: "mouw", label: "Mouwen", type: "decrease" },
            { id: "boord", label: "Boord", type: "basic" }
        ]
    },
    cardigan: {
        label: "Vest",
        parts: [
            { id: "hals", label: "Hals", type: "basic" },
            { id: "schouder", label: "Schoudergedeelte", type: "basic" },
            { id: "rug", label: "Rug / Voorkant", type: "basic" },
            { id: "mouw", label: "Mouwen", type: "decrease" },
            { id: "boord", label: "Boord", type: "basic" },
            { id: "knoop", label: "Knoopsluiting", type: "basic" }
        ]
    },
    hat: {
        label: "Muts",
        parts: [
            { id: "boord", label: "Boord", type: "basic" },
            { id: "body", label: "Bovenkant", type: "decrease" }
        ]
    }
};

const valueToKey = {
  "trui": "sweater",
  "vest": "cardigan",
  "sok": "socks",
  "muts": "hat"
};

// --- BEREKENFUNCTIES ---
// Berekening van steken op basis van gauge en breedte in cm.
function calculateStitches(gauge, widthCm) {
    return Math.round((widthCm / 10) * gauge);
}

// Een voorbeeld van reduceren/vermeerderen (hier simpel gehouden)
function calculateWithDecrease(gauge, widthCm) {
    const base = calculateStitches(gauge, widthCm);
    // voorbeeld: verminder met 10% en minimaal 1 steek
    const decreased = Math.round(base * 0.9);
    return Math.max(1, decreased);
}

// --- UI VERBINDING ---
const form = document.getElementById("knitForm");
const garmentSelect = document.getElementById("garment");
const resultBox = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

// --- SUBMIT HANDLER ---
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rawGarment = garmentSelect.value;
    const gauge = parseFloat(document.getElementById("gauge").value);
    const width = parseFloat(document.getElementById("size").value);

    // Map de waarde naar de key in patterns (of gebruik direct als key)
    const garmentKey = valueToKey[rawGarment] || rawGarment;
    
    if (!patterns[garmentKey]) {
        resultBox.innerHTML = "<p>Kledingstuk niet herkend.</p>";
        return;
    }

    const selectedPattern = patterns[garmentKey];
    let html = `<h2>${selectedPattern.label}</h2>`;
    html += `<p>Aantal steken: ${gauge} steken / 10 cm<br>Breedte: ${width} cm</p>`;
    html += `<h3>Berekeningen per onderdeel</h3>`;
    html += `<ul>`;

    selectedPattern.parts.forEach(part => {
        let stitches;
        if (part.type === "basic") {
            stitches = calculateStitches(gauge, width);
        } else if (part.type === "decrease") {
            stitches = calculateWithDecrease(gauge, width);
        } else {
            stitches = calculateStitches(gauge, width);
        }

        html += `<li><strong>${part.label}:</strong> ${stitches} steken</li>`;
    });

    html += `</ul>`;
    resultBox.innerHTML = html;
});


// --- RESET ---
resetBtn.addEventListener("click", () => {
    resultBox.innerHTML = "";
});
