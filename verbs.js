// ============================================
// VERB-KONJUGATION - Lecția 1 A1.1: Erste Schritte
// Claudia Toth · instrument de referință (Präsens / Präteritum / Perfekt)
// Verbe verificate pe PONS (de.pons.com/verbtabellen) · Präteritum → RO imperfect
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'heißen', ro: 'a se numi', typ: 'tare / neregulat', aux: 'haben', part: 'geheißen',
        praes: [['ich','heiße','mă numesc'],['du','heißt','te numești'],['er/sie/es','heißt','se numește'],['wir','heißen','ne numim'],['ihr','heißt','vă numiți'],['sie/Sie','heißen','se numesc']],
        praet: [['ich','hieß','mă numeam'],['du','hießest','te numeai'],['er/sie/es','hieß','se numea'],['wir','hießen','ne numeam'],['ihr','hießt','vă numeați'],['sie/Sie','hießen','se numeau']],
        perf: [['ich','habe geheißen','m-am numit'],['du','hast geheißen','te-ai numit'],['er/sie/es','hat geheißen','s-a numit'],['wir','haben geheißen','ne-am numit'],['ihr','habt geheißen','v-ați numit'],['sie/Sie','haben geheißen','s-au numit']],
        note: 'Radical în -ß → du heißt = er heißt (NU „heißst"). Verb TARE: Präteritum hieß, Partizip geheißen.'
    },
    {
        inf: 'kommen', ro: 'a veni', typ: 'tare / neregulat', aux: 'sein', part: 'gekommen',
        praes: [['ich','komme','vin'],['du','kommst','vii'],['er/sie/es','kommt','vine'],['wir','kommen','venim'],['ihr','kommt','veniți'],['sie/Sie','kommen','vin']],
        praet: [['ich','kam','veneam'],['du','kamst','veneai'],['er/sie/es','kam','venea'],['wir','kamen','veneam'],['ihr','kamt','veneați'],['sie/Sie','kamen','veneau']],
        perf: [['ich','bin gekommen','am venit'],['du','bist gekommen','ai venit'],['er/sie/es','ist gekommen','a venit'],['wir','sind gekommen','am venit'],['ihr','seid gekommen','ați venit'],['sie/Sie','sind gekommen','au venit']],
        note: 'ATENȚIE: Perfekt cu SEIN (er ist gekommen, NU hat) — verb de mișcare. Capcană clasică pentru români!'
    },
    {
        inf: 'wohnen', ro: 'a locui', typ: 'slab / regulat', aux: 'haben', part: 'gewohnt',
        praes: [['ich','wohne','locuiesc'],['du','wohnst','locuiești'],['er/sie/es','wohnt','locuiește'],['wir','wohnen','locuim'],['ihr','wohnt','locuiți'],['sie/Sie','wohnen','locuiesc']],
        praet: [['ich','wohnte','locuiam'],['du','wohntest','locuiai'],['er/sie/es','wohnte','locuia'],['wir','wohnten','locuiam'],['ihr','wohntet','locuiați'],['sie/Sie','wohnten','locuiau']],
        perf: [['ich','habe gewohnt','am locuit'],['du','hast gewohnt','ai locuit'],['er/sie/es','hat gewohnt','a locuit'],['wir','haben gewohnt','am locuit'],['ihr','habt gewohnt','ați locuit'],['sie/Sie','haben gewohnt','au locuit']]
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#6b7280;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe din lecție</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt: auxiliar + participiu).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong> (caută orice formă).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Acesta e un INSTRUMENT DE CĂUTARE. La A1 înveți complet doar Präsens — Präteritum și Perfekt vin mai târziu (Lecțiile 11+ / 17). Aici sunt doar ca să poți verifica ORICE formă când ai nevoie. Verbele TARI sunt verificate pe PONS. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
