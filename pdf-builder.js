// ============================================
// PDF BUILDER — Erste Schritte mit Annette (A1.1 · Lecția 1)
// Claudia Toth · model PDF brandat (validat la TV1 + A0)
// PRIMUL builder pentru A1.1 (cast banner + verbe Präsens+Präteritum+Perfekt)
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    // ============================================
    // 0. CAST BANNER (A1.1+ — 6 personaje)
    // ============================================
    function buildCast() {
        return `<div class="cast-banner">
            <h4>👋 Cast „Annettes Deutschkurs" — 5 cursanți + Annette (profesoara)</h4>
            <div class="cast-grid">
                <div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Profesoara · Berlin</div></div>
                <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea 🇷🇴</div><div class="detail">Studentă · Brandenburg</div></div>
                <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · Potsdam</div></div>
                <div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · Berlin</div></div>
                <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · Berlin</div></div>
                <div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · Oranienburg</div></div>
            </div>
        </div>`;
    }

    // ============================================
    // 1. TEORIE — curăță elementele interactive
    // ============================================
    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g, '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fffbeb[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Prezentare, salutări și W-Fragen</h1>` + t;
    }

    // ============================================
    // Helpers exerciții
    // ============================================
    function getPrompt(item) {
        return item.word || item.sentence || item.question || '';
    }

    function mcBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((item, i) => {
            const prompt = getPrompt(item);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q"><strong>${prompt}</strong></div><div class="options">`;
            item.options.forEach((opt, oi) => {
                const letter = String.fromCharCode(65 + oi);
                const isRight = opt === item.correct;
                h += `<div class="${isRight ? 'right' : ''}">${letter}. ${opt}${isRight ? ' ✓' : ''}</div>`;
            });
            h += `</div><div class="ex-explanation">${item.explanation || ''}</div></div></div>`;
        });
        return h + `</div>`;
    }

    function fillInWordBlock(title, instruction, data) {
        let h = `<div class="ex-block"><h3>${title}</h3><div class="instruction">${instruction}</div><div class="rezolvare-banner">✓ Rezolvare</div>`;
        data.forEach((item, i) => {
            const prompt = getPrompt(item);
            const filled = prompt.replace(/_{2,}/g, `<strong style="color:#047857">${item.correct}</strong>`);
            h += `<div class="ex-item"><span class="ex-num">${i + 1}</span><div class="ex-body"><div class="ex-q">${filled}</div>${item.hint ? `<div class="ex-explanation">${item.hint}</div>` : ''}</div></div>`;
        });
        return h + `</div>`;
    }

    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;

        if (typeof ex1Data !== 'undefined') {
            html += mcBlock(
                'Übung 1 — Salut formal sau informal?',
                'du + Hallo/Tschüss = informal · Sie + Guten Tag/Auf Wiedersehen = formal.',
                ex1Data
            );
        }
        if (typeof ex2Data !== 'undefined') {
            html += fillInWordBlock(
                'Übung 2 — Conjugă heißen / kommen / wohnen',
                'ich heiße / du heißt / er,sie heißt · ich komme / du kommst / er,sie kommt · ich wohne / du wohnst / er,sie wohnt.',
                ex2Data
            );
        }
        if (typeof ex3Data !== 'undefined') {
            html += mcBlock(
                'Übung 3 — Wer ist das? Recunoaște personajul',
                'Citește descrierea și alege personajul potrivit dintre cele 6.',
                ex3Data
            );
        }
        if (typeof ex4Data !== 'undefined') {
            html += `<div class="ex-block">
                <h3>Übung 4 — Ordonează propoziția</h3>
                <div class="instruction">Verbul mereu pe poziția 2 (la propoziții afirmative și la W-Frage).</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex4Data.forEach((item, i) => {
                const scrambled = item.words.slice().join(' / ');
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">Cuvintele: <em>${scrambled}</em></div>
                        <div class="ex-a">${item.correct}</div>
                        <div class="ex-explanation">${item.hint}</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }
        if (typeof ex5Data !== 'undefined') {
            html += mcBlock(
                'Übung 5 — W-Frage + răspuns potrivit',
                'Pereche întrebare ↔ răspuns. Wie heißt? = numele · Woher? = originea · Wo? = locul.',
                ex5Data
            );
        }

        return html;
    }

    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției — dicționar de referință.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    // ============================================
    // 4. VERBE — A1+ (Präsens + Präteritum + Perfekt compact)
    // ============================================
    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele lecției — Präsens · Präteritum · Perfekt</h1>
            <div class="andreea-note">
                <div class="speaker">📌 Andreea îți spune:</div>
                <div>Acesta e un INSTRUMENT DE CĂUTARE. La A1 înveți complet doar Präsens — Präteritum și Perfekt vin mai târziu (Lecțiile 11+ / 17). Aici sunt toate ca să verifici ORICE formă. Verbele TARI sunt verificate pe PONS.</div>
            </div>`;

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                // Detectează tipul: 'tare / neregulat' → TARE roșu; 'slab / regulat' sau 'regulat' → REGULAT verde; 'auxiliar / neregulat' → mov
                let badgeClass = 'weak', badgeLabel = 'REGULAT';
                if (v.typ && v.typ.indexOf('tare') === 0) { badgeClass = 'strong'; badgeLabel = 'TARE (neregulat)'; }
                else if (v.typ && v.typ.indexOf('aux') === 0) { badgeClass = 'aux'; badgeLabel = 'AUXILIAR (neregulat)'; }
                const auxClass = v.aux === 'sein' ? 'sein' : 'haben';
                const auxLabel = `Perfekt + ${v.aux}`;

                html += `<div class="verb-card">
                    <div class="vh">
                        <span class="name">${idx + 1}. ${v.inf}</span>
                        <span class="ro">— ${v.ro}</span>
                        <span class="badge ${badgeClass}">${badgeLabel}</span>
                        <span class="badge ${auxClass}">${auxLabel}</span>
                    </div>
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>`;

                if (v.praet) {
                    html += `<h5>Präteritum (imperfect)</h5>
                        <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                    v.praet.forEach(row => {
                        html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                    });
                    html += `</tbody></table>`;
                }

                if (v.perf && v.part) {
                    html += `<h5>Perfekt (pe scurt)</h5>
                        <div class="perfekt-box">
                            <div class="de">Auxiliar <strong>${v.aux}</strong> + participiul <strong>${v.part}</strong></div>
                            <div class="de" style="margin-top:3px">Exemplu: er <strong>${v.perf[2][1]}</strong></div>
                            <div class="ro">${v.perf[2][2]}</div>
                        </div>`;
                }

                if (v.note) {
                    html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                }
                html += `</div>`;
            });
        }

        return html;
    }
})();
