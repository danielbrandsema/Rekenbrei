# Rekenbrei
Een breirekenmachine 

Stappenplan om een website en app te bouwen die berekent hoeveel wol, steken en afmetingen nodig zijn voor verschillende kledingstukken — inclusief patronen.

**Stap 1 — Functionaliteit
Wat moet de app doen:
•	Gebruiker vult in: naalddikte, garendikte en/of gewicht, proeflapje (steken per 10 cm), gewenste maat, kledingstuktype.
•	App berekent:
o	Hoeveel steken moeten worden opgezet.
o	Hoeveel centimeter de delen moeten zijn.
o	Hoeveel meter garen nodig is.
o	Varianten per maat (S–XXL).
o	Mogelijkheid om bestaande patronen (bijv. Maja Karlsson) aan te passen.
•	Optioneel:
o	Account / opslaan van projecten.
o	Exporteren naar PDF.
o	Kleurenschema’s voor motieven (bijv. fair isle).
o	Wol-database van merken en garendikten.

**Stap 2 — Maak een dataschema
Welke data moet de app verwerken:
Denk aan:
materiaal (garen): 
    steekverhouding: x steken / 10 cm
    naalddikte: x mm
maat: 
    bijv.
    borstomtrek: x cm,
    mouwlengte: x cm
patroon: 
    type (bijv. 'raglan')
    speling/ease: x cm

En de berekeningen:
steken = (cm / 10) × steken_per_10cm
garengebruik = gram_per_10cm × oppervlakte kledingstuk

**Stap 3 — Prototype (HTML + CSS + simpel JS)
Bijv.:
•	Dropdown: kledingstuk
•	Input: proeflapje (steken per 10 cm)
•	Input: maat in cm
•	Output: aantal steken

**Stap 4 — Opbouw logica in JavaScript
“math + data”:
•	stekenberekening
•	berekening diverse onderdelen
•	raglan-helling
•	rondbreimethoden
•	fair-isle motiefherhaling

**Stap 5 — Interactieve UI
Gebruik:
•	DOM-manipulatie
•	Event listeners
•	Dynamische rendering
Bijv. bij het veranderen van “steken per 10 cm” wordt automatisch alles opnieuw berekend.

**Stap 6 — Opslaan van gegevens (optioneel)
Te beginnen met LocalStorage (geen backend nodig).
later eventueel met accounts:
• Firebase of Supabase voor een simpele backend zonder eigen server.

**Stap 7 — Maak er een app van
3 opties:
Optie A — PWA (Progressive Web App)
•	Dit is een website maar werkt ook als app op telefoon.
•	Simpelste route.
•	Werkt met een manifest.json en service worker.
Optie B — Native app via React Native
•	Je gebruikt JavaScript maar bouwt echte Android/iOS apps.
Optie C — Electron (desktop app)
•	Hiermee maak je Windows/Mac/Linux apps met webtechnieken.

**Stap 8 — Styling & UX
Met frameworks zoals:
•	Tailwind CSS (modern, makkelijk)
•	Material UI (React)
•	Bootstrap (klassiek)
(Begin simpel: één pagina die goed werkt)

**Stap 9 — Testen met echte breidata
Test op:
•	dikke wol vs dunne wol
•	variërende proeflapjes
•	verschillende constructies (top-down, bottom-up, raglan, set-in sleeve)

**Stap 10 — Itereren + uitbreiden
Bijv.:
•	wolkeuze op basis van garendikte
•	kleurenschema tool
•	“Maja-Karlsson-achtige patronen genereren”
•	visuele diagrammen

