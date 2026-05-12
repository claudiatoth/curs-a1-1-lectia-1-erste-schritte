// ============================================
// FLASHCARDS - Erste Schritte mit Annette
// Claudia Toth · A1.1 · Lecția 1 · 32 carduri
// Audio profesional pre-generat cu Hedda
// ============================================

const flashcardsData = [
    // ========== SALUTĂRI (8 carduri) ==========
    { de: "Hallo!", ro: "Salut! · informal, oricând", audio: "audio/letters/hallo.wav" },
    { de: "Guten Morgen!", ro: "Bună dimineața! · până la ~11", audio: "audio/letters/guten-morgen.wav" },
    { de: "Guten Tag!", ro: "Bună ziua! · formal/neutru", audio: "audio/letters/guten-tag.wav" },
    { de: "Guten Abend!", ro: "Bună seara! · după ~18", audio: "audio/letters/guten-abend.wav" },
    { de: "Tschüss!", ro: "Pa! · informal, la rămas-bun", audio: "audio/letters/tschuess.wav" },
    { de: "Auf Wiedersehen!", ro: "La revedere! · formal", audio: "audio/letters/auf-wiedersehen.wav" },
    { de: "Bis bald!", ro: "Pe curând!", audio: "audio/letters/bis-bald.wav" },
    { de: "Schön, dich kennenzulernen!", ro: "Mă bucur să te cunosc! · informal", audio: "audio/letters/schoen-kennenzulernen.wav" },

    // ========== ÎNTREBĂRI (8 carduri) ==========
    { de: "Wie heißt du?", ro: "Cum te numești? · informal", audio: "audio/letters/wie-heisst-du.wav" },
    { de: "Woher kommst du?", ro: "De unde vii? · informal", audio: "audio/letters/woher-kommst-du.wav" },
    { de: "Wo wohnst du?", ro: "Unde locuiești? · informal", audio: "audio/letters/wo-wohnst-du.wav" },
    { de: "Wer bist du?", ro: "Cine ești? · informal", audio: "audio/letters/wer-bist-du.wav" },
    { de: "Wie geht's?", ro: "Ce mai faci? · informal, forma scurtă", audio: "audio/letters/wie-gehts.wav" },
    { de: "Wie heißen Sie?", ro: "Cum vă numiți? · formal (Sie)", audio: "audio/letters/wie-heissen-sie.wav" },
    { de: "Woher kommen Sie?", ro: "De unde veniți? · formal", audio: "audio/letters/woher-kommen-sie.wav" },
    { de: "Wo wohnen Sie?", ro: "Unde locuiți? · formal", audio: "audio/letters/wo-wohnen-sie.wav" },

    // ========== RĂSPUNSURI tipice (8 carduri) ==========
    { de: "Ich heiße Andreea.", ro: "Mă numesc Andreea.", audio: "audio/letters/ich-heisse-andreea.wav" },
    { de: "Ich komme aus Rumänien.", ro: "Vin din România.", audio: "audio/letters/ich-komme-aus-rumaenien.wav" },
    { de: "Ich wohne in Brandenburg.", ro: "Locuiesc în Brandenburg.", audio: "audio/letters/ich-wohne-in-brandenburg.wav" },
    { de: "Ich bin Studentin.", ro: "Sunt studentă.", audio: "audio/letters/ich-bin-studentin.wav" },
    { de: "Mir geht's gut, danke.", ro: "Sunt bine, mulțumesc.", audio: "audio/letters/mir-gehts-gut.wav" },
    { de: "Und dir?", ro: "Și tu? — răspuns când cineva îți spune Mir gehts gut", audio: "audio/letters/und-dir.wav" },
    { de: "Schön, dich auch kennenzulernen!", ro: "Și eu mă bucur să te cunosc!", audio: "audio/letters/schoen-auch.wav" },
    { de: "Mein Name ist Florian.", ro: "Numele meu este Florian. · formal", audio: "audio/letters/mein-name-ist.wav" },

    // ========== ȚĂRI și ORAȘE (8 carduri) ==========
    { de: "Rumänien", ro: "România · Andreea kommt aus Rumänien", audio: "audio/letters/rumaenien.wav" },
    { de: "Deutschland", ro: "Germania · Annette kommt aus Deutschland", audio: "audio/letters/deutschland.wav" },
    { de: "Russland", ro: "Rusia · Mihai kommt aus Russland", audio: "audio/letters/russland.wav" },
    { de: "Dänemark", ro: "Danemarca · Florian kommt aus Dänemark", audio: "audio/letters/daenemark.wav" },
    { de: "Mexiko", ro: "Mexic · Carolina kommt aus Mexiko", audio: "audio/letters/mexiko.wav" },
    { de: "Marokko", ro: "Maroc · Acar kommt aus Marokko", audio: "audio/letters/marokko.wav" },
    { de: "Berlin", ro: "Berlin · capitala Germaniei", audio: "audio/letters/berlin.wav" },
    { de: "Brandenburg", ro: "Brandenburg · land în nord-estul Germaniei", audio: "audio/letters/brandenburg.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (8 salutări · 8 întrebări · 8 răspunsuri tipice · 8 țări/orașe).<br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru a auzi pronunția germană (voce profesională înregistrată).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

// Init direct — DOM e gata pentru că scriptul e la sfârșitul <body>
buildFlashcards();
