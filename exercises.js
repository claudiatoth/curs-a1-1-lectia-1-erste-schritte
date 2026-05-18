// ============================================
// EXERCIȚII - Erste Schritte mit Annette · Hallo! Wer bist du?
// Claudia Toth · A1.1 · Lecția 1 · 5 exerciții
// ============================================

// Normalizare răspuns: acceptă AMBELE forme (cu/fără diacritice germane)
// ß↔ss · ä↔ae · ö↔oe · ü↔ue · lowercase · trim · fără punctuație
function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s+/g, ' ')
        .replace(/[.,!?;:]/g, '');
}

// ============================================
// EXERCIȚIUL 1: Formal sau informal?
// ============================================
const ex1Data = [
    { id: 'a', word: '„Hallo, wie heißt du?"', options: ['formal', 'informal'], correct: 'informal', explanation: '„Hallo" + „du" = informal. Folosit între prieteni, colegi tineri, copii.' },
    { id: 'b', word: '„Guten Tag, Frau Hullmann."', options: ['formal', 'informal'], correct: 'formal', explanation: '„Guten Tag" + „Frau + nume" = formal. Politicos cu un necunoscut sau cu cineva mai în vârstă.' },
    { id: 'c', word: '„Tschüss, Andreea!"', options: ['formal', 'informal'], correct: 'informal', explanation: '„Tschüss" = informal. Spui la rămas-bun cuiva cu care ești prieten/ă.' },
    { id: 'd', word: '„Auf Wiedersehen, Herr Doktor!"', options: ['formal', 'informal'], correct: 'formal', explanation: '„Auf Wiedersehen" + „Herr Doktor" = formal. Folosit cu medici, șefi, profesori.' },
    { id: 'e', word: '„Wie heißen Sie?"', options: ['formal', 'informal'], correct: 'formal', explanation: '„Sie" cu majusculă = forma politicoasă. Folosit cu necunoscuți sau persoane mai în vârstă.' },
    { id: 'f', word: '„Bis morgen, Annette!"', options: ['formal', 'informal'], correct: 'informal', explanation: '„Bis morgen" + prenume = informal. Andreea o tutuiește pe Annette pentru că Annette i-a permis.' },
    { id: 'g', word: '„Guten Morgen, meine Damen und Herren."', options: ['formal', 'informal'], correct: 'formal', explanation: '„Meine Damen und Herren" = doamnelor și domnilor. Foarte formal — în public, la o prezentare.' },
    { id: 'h', word: '„Hallo Andreea, wie geht\'s?"', options: ['formal', 'informal'], correct: 'informal', explanation: '„Hallo" + prenume + „wie geht\'s" (forma scurtă) = informal, între prieteni.' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Salutul / propoziția de mai jos este FORMALĂ sau INFORMALĂ?</strong><br><em>Reamintire:</em> du + Hallo/Tschüss = informal · Sie + Guten Tag/Auf Wiedersehen = formal.</div>`;
    ex1Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex1-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex1-${it.id}-${k}"><label for="ex1-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EXERCIȚIUL 2: Conjugă heißen / kommen / wohnen
// ============================================
const ex2Data = [
    { id: 'a', word: 'Ich ___ Andreea.', correct: 'heiße', accept: ['heiße'], hint: 'heißen, ich' },
    { id: 'b', word: 'Du ___ aus Rumänien.', correct: 'kommst', accept: ['kommst'], hint: 'kommen, du' },
    { id: 'c', word: 'Mihai ___ in Potsdam.', correct: 'wohnt', accept: ['wohnt'], hint: 'wohnen, er' },
    { id: 'd', word: 'Wie ___ du? (heißen)', correct: 'heißt', accept: ['heißt', 'heisst'], hint: 'heißen, du' },
    { id: 'e', word: 'Annette ___ aus Deutschland.', correct: 'kommt', accept: ['kommt'], hint: 'kommen, sie' },
    { id: 'f', word: 'Ich ___ in Brandenburg.', correct: 'wohne', accept: ['wohne'], hint: 'wohnen, ich' },
    { id: 'g', word: 'Carolina ___ Carolina.', correct: 'heißt', accept: ['heißt', 'heisst'], hint: 'heißen, sie' },
    { id: 'h', word: 'Wo ___ du? (wohnen)', correct: 'wohnst', accept: ['wohnst'], hint: 'wohnen, du' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu forma corectă a verbului.</strong><br><em>Reamintire:</em> ich heiße / du heißt / er,sie heißt · ich komme / du kommst / er,sie kommt · ich wohne / du wohnst / er,sie wohnt.</div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.word} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex2-${it.id}" placeholder="forma verbului"></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(inp.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EXERCIȚIUL 3: Wer ist das? Recunoaște personajul!
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Sie kommt aus Rumänien und wohnt in Brandenburg. Sie ist Studentin.', options: ['Andreea', 'Carolina', 'Annette', 'Mihai'], correct: 'Andreea', explanation: 'Singura cursantă care vine din România și e studentă în Brandenburg.' },
    { id: 'b', sentence: 'Er kommt aus Russland. Er ist Koch und wohnt in Potsdam.', options: ['Florian', 'Mihai', 'Acar', 'Annette'], correct: 'Mihai', explanation: 'Bucătarul din Rusia, locuiește în Potsdam.' },
    { id: 'c', sentence: 'Sie kommt aus Deutschland und ist Lehrerin. Sie wohnt in Berlin.', options: ['Carolina', 'Andreea', 'Annette', 'Acar'], correct: 'Annette', explanation: 'Profesoara noastră! Singura germancă din clasă.' },
    { id: 'd', sentence: 'Er kommt aus Dänemark. Er ist Arzt.', options: ['Florian', 'Mihai', 'Acar', 'Carolina'], correct: 'Florian', explanation: 'Doctorul danez din Berlin.' },
    { id: 'e', sentence: 'Sie kommt aus Mexiko und ist Fotografin.', options: ['Andreea', 'Annette', 'Carolina', 'Acar'], correct: 'Carolina', explanation: 'Fotografa din Mexic, locuiește în Berlin.' },
    { id: 'f', sentence: 'Er wohnt in Oranienburg. Er kommt aus Marokko und ist Vorarbeiter.', options: ['Mihai', 'Florian', 'Acar', 'Annette'], correct: 'Acar', explanation: 'Maistrul marocan din Oranienburg.' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Citește descrierea și alege personajul potrivit.</strong></div>`;
    ex3Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex3-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex3-${it.id}-${k}"><label for="ex3-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.sentence}</label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex3-${it.id}"]:checked`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EXERCIȚIUL 4: Ordonează propoziția
// ============================================
const ex4Data = [
    { id: 'a', words: ['Andreea', 'kommt', 'aus', 'Rumänien.'], correct: 'Andreea kommt aus Rumänien.', hint: 'Subiect + verb + complement' },
    { id: 'b', words: ['Ich', 'heiße', 'Mihai.'], correct: 'Ich heiße Mihai.', hint: 'Pronume + verb + nume' },
    { id: 'c', words: ['Wo', 'wohnst', 'du?'], correct: 'Wo wohnst du?', hint: 'W-Frage + verb + pronume' },
    { id: 'd', words: ['Carolina', 'wohnt', 'in', 'Berlin.'], correct: 'Carolina wohnt in Berlin.', hint: 'Verbul pe poziția 2' },
    { id: 'e', words: ['Woher', 'kommst', 'du?'], correct: 'Woher kommst du?', hint: 'Woher + kommst + du' },
    { id: 'f', words: ['Annette', 'ist', 'Lehrerin.'], correct: 'Annette ist Lehrerin.', hint: 'Subiect + sein + profesie' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Scrie propoziția corectă din cuvintele date.</strong><br><em>Reamintire:</em> verbul mereu pe poziția 2 (la propoziții afirmative și la W-Frage).</div>`;
    ex4Data.forEach((it, i) => {
        const scrambled = it.words.slice().sort(() => Math.random() - 0.5).join(' ');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>Cuvintele: <strong>${scrambled}</strong> <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex4-${it.id}" placeholder="Scrie propoziția corectă..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const norm = normalizeAnswer(inp.value);
        const target = normalizeAnswer(it.correct);
        if (norm === target) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EXERCIȚIUL 5: W-Frage + răspuns potrivit
// ============================================
const ex5Data = [
    { id: 'a', question: 'Wie heißt du?', options: ['Ich heiße Andreea.', 'Ich komme aus Mexiko.', 'Ich wohne in Berlin.', 'Ich bin Studentin.'], correct: 'Ich heiße Andreea.', explanation: '„Wie heißt du?" întreabă NUMELE → răspunsul cu „Ich heiße..."' },
    { id: 'b', question: 'Woher kommst du?', options: ['Ich heiße Mihai.', 'Ich komme aus Russland.', 'Ich wohne in Potsdam.', 'Ich bin Koch.'], correct: 'Ich komme aus Russland.', explanation: '„Woher kommst du?" întreabă ORIGINEA → răspunsul cu „aus + țară/oraș".' },
    { id: 'c', question: 'Wo wohnst du?', options: ['Ich heiße Carolina.', 'Ich komme aus Mexiko.', 'Ich wohne in Berlin.', 'Ich bin Fotografin.'], correct: 'Ich wohne in Berlin.', explanation: '„Wo wohnst du?" întreabă LOCUL DE LOCUIT → răspunsul cu „in + oraș".' },
    { id: 'd', question: 'Wie heißen Sie?', options: ['Ich bin 32 Jahre alt.', 'Mein Name ist Florian.', 'Ich komme aus Dänemark.', 'Auf Wiedersehen!'], correct: 'Mein Name ist Florian.', explanation: 'Forma politicoasă cu „Sie" cere răspuns mai formal: „Mein Name ist..." (Numele meu este...).' },
    { id: 'e', question: 'Woher kommen Sie?', options: ['Ich heiße Annette.', 'Ich komme aus Deutschland.', 'Ich wohne in Berlin.', 'Schön, Sie kennenzulernen.'], correct: 'Ich komme aus Deutschland.', explanation: '„Woher" = de unde. Indiferent dacă întrebarea e cu du sau Sie, răspunsul folosește „aus + țară".' },
    { id: 'f', question: 'Wo wohnen Sie?', options: ['Ich bin Lehrerin.', 'Ich komme aus Mexiko.', 'Ich wohne in Oranienburg.', 'Mein Name ist Acar.'], correct: 'Ich wohne in Oranienburg.', explanation: '„Wo wohnen Sie?" = forma politicoasă a lui „Wo wohnst du?". Răspuns cu „in + oraș".' },
    { id: 'g', question: 'Wie geht\'s?', options: ['Mir geht\'s gut, danke!', 'Ich heiße Mihai.', 'Auf Wiedersehen!', 'Ich komme aus Mexiko.'], correct: 'Mir geht\'s gut, danke!', explanation: '„Wie geht\'s?" = ce mai faci? → răspunsul tipic: „Mir geht\'s gut" (sunt bine) + „danke" (mulțumesc).' },
    { id: 'h', question: 'Schön, dich kennenzulernen!', options: ['Tschüss!', 'Schön, dich auch kennenzulernen!', 'Ich heiße Andreea.', 'Wo wohnst du?'], correct: 'Schön, dich auch kennenzulernen!', explanation: 'Când cineva îți spune „Schön, dich kennenzulernen", răspunzi natural „Schön, dich AUCH kennenzulernen" (și eu mă bucur).' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Alege răspunsul potrivit pentru fiecare întrebare.</strong></div>`;
    ex5Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex5-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex5-${it.id}-${k}"><label for="ex5-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.question}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex5-${it.id}"]:checked`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// INIT EXERCIȚII
// ============================================
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
