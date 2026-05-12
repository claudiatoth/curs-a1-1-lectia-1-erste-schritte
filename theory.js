// ============================================
// TEORIE - Erste Schritte mit Annette · Hallo! Wer bist du?
// Claudia Toth · A1.1 — Annettes Deutschkurs · Lecția 1 din 10
// ============================================

const theoryHTML = `
    <!-- 0: Erste Begegnung -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>👋 1. Erste Begegnung — Prima întâlnire în clasă</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-erste-begegnung.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ss</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ß</code> &nbsp;→&nbsp; <em>„heisst" = „heißt"</em></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ae</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ä</code> &nbsp;→&nbsp; <em>„Rumaenien" = „Rumänien"</em></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">oe</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ö</code> &nbsp;→&nbsp; <em>„schoen" = „schön"</em></li>
                            <li><code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ue</code> în loc de <code style="background: #fff; padding: 1px 5px; border-radius: 3px;">ü</code> &nbsp;→&nbsp; <em>„gruessen" = „grüßen"</em></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Eu așa am început — fără tastatură germană! E o convenție oficială folosită și de germani când scriu fără diacritice."</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Bine ai venit la „Annettes Deutschkurs"!</h4>
                <p>Astăzi e prima zi de curs. Annette, profesoara, e în clasă. <strong>Andreea</strong> intră prima — e româncă, e studentă în Brandenburg și e ușor emoționată. <strong>Tu ești al 7-lea în clasă</strong> — și înveți alături de ea.</p>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Hallo! Ich bin Annette. Wie heißt du?
                            <span class="translation">Salut! Eu sunt Annette. Cum te numești?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble right">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Hallo, Annette! Ich heiße Andreea.
                            <span class="translation">Salut, Annette! Mă numesc Andreea.</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text">Schön, dich kennenzulernen, Andreea!
                            <span class="translation">Mă bucur să te cunosc, Andreea!</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble right">
                        <div class="dialog-speaker">Andreea</div>
                        <div class="dialog-text">Schön, dich auch kennenzulernen!
                            <span class="translation">Și eu mă bucur să te cunosc!</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„La început mi-a fost rușine să vorbesc. Dar Annette zâmbește — și frica trece. Nu trebuie să spui propoziții perfecte de la început. Hai să mergem pas cu pas, împreună."</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 1: Formal vs. informal -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎩 2. Salutări — formal sau informal?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-formal-informal.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Regula de aur: <strong>du</strong> sau <strong>Sie</strong>?</h4>
                <p>În germană, există <strong>2 moduri</strong> de a te adresa cuiva:</p>
                <p>🟢 <strong>du</strong> = informal, prietenos. Cu copii, familie, prieteni, colegi apropiați.</p>
                <p>🔵 <strong>Sie</strong> = formal, politicos. Cu necunoscuți, persoane mai în vârstă, șefi, doctori, profesori (la primul contact).</p>
                <p style="margin-top: 8px;">📌 <strong>Atenție:</strong> „Sie" se scrie întotdeauna cu majusculă, ca să se distingă de „sie" = ea / ei.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Salutare</th><th>Când o folosesc</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>Hallo!</strong></td><td>Informal, oricând</td><td>Salut!</td></tr>
                    <tr><td><strong>Guten Morgen!</strong></td><td>Dimineața (până la ~11)</td><td>Bună dimineața!</td></tr>
                    <tr><td><strong>Guten Tag!</strong></td><td>Ziua (formal sau neutru)</td><td>Bună ziua!</td></tr>
                    <tr><td><strong>Guten Abend!</strong></td><td>Seara (după ~18)</td><td>Bună seara!</td></tr>
                    <tr><td><strong>Gute Nacht!</strong></td><td>Noaptea, la culcare</td><td>Noapte bună!</td></tr>
                </tbody>
            </table>

            <h4 style="margin-top: 16px; color: #065f46;">Și la rămas-bun?</h4>
            <table class="theory-table">
                <thead><tr><th>Rămas-bun</th><th>Când</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>Tschüss!</strong></td><td>Informal</td><td>Pa!</td></tr>
                    <tr><td><strong>Auf Wiedersehen!</strong></td><td>Formal</td><td>La revedere!</td></tr>
                    <tr><td><strong>Bis bald!</strong></td><td>Informal</td><td>Pe curând!</td></tr>
                    <tr><td><strong>Bis morgen!</strong></td><td>Mâine ne vedem</td><td>Pe mâine!</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Pe Annette o salut cu „du" doar pentru că ea mi-a spus că pot. Altfel ar fi <strong>„Frau Hullmann"</strong> + „Sie". În germană, până nu îți zice cineva <em>„Wir können uns duzen"</em> (putem să ne tutuim), rămâi la „Sie". E o regulă de respect, nu de distanță."</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Verbul heißen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📝 3. Verbul <strong>heißen</strong> — „a se numi"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-heissen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Cel mai des folosit verb de prezentare</h4>
                <p>Verbul <strong>heißen</strong> = „a se numi" (literal: „a fi chemat"). E primul verb pe care îl folosești când întâlnești pe cineva.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Pronume</th><th>heißen</th><th>Exemplu + traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong> (eu)</td><td><strong>heiße</strong></td><td>Ich heiße Andreea.<br><span class="ro-translation">Eu mă numesc Andreea.</span></td></tr>
                    <tr><td><strong>du</strong> (tu)</td><td><strong>heißt</strong></td><td>Du heißt Mihai.<br><span class="ro-translation">Tu te numești Mihai.</span></td></tr>
                    <tr><td><strong>er/sie/es</strong> (el/ea)</td><td><strong>heißt</strong></td><td>Sie heißt Annette.<br><span class="ro-translation">Ea se numește Annette.</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-left: 4px solid #f59e0b; margin-top: 12px;">
                <p>⚠️ <strong>Atenție la „ß"</strong> (eszett): se citește ca <strong>„ss"</strong> dublu. <em>„heißt"</em> = „haisst", nu „haisht".</p>
            </div>

            <h4 style="margin-top: 16px; color: #065f46;">Întrebare ↔ Răspuns</h4>
            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette</div>
                        <div class="dialog-text"><strong>Wie heißt du?</strong>
                            <span class="translation">Cum te numești? (informal)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble right">
                        <div class="dialog-speaker">Florian</div>
                        <div class="dialog-text">Ich heiße Florian. Und du?
                            <span class="translation">Mă numesc Florian. Și tu?</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Capcană pentru români: NU spunem <em>„Mein Name ist Andreea"</em> în viața de zi cu zi. Sună prea oficial. Spunem mai natural <em>„Ich heiße Andreea"</em> sau pur și simplu <em>„Ich bin Andreea"</em>. Eu folosesc varianta a doua când vreau să fie cald și prietenos."</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: kommen + wohnen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🌍 4. <strong>kommen aus</strong> + <strong>wohnen in</strong> — Origini și locuință</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-kommen-wohnen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Două verbe, o singură regulă de prepoziție</h4>
                <p><strong>kommen aus</strong> + <em>țară sau oraș de proveniență</em> = a veni din...</p>
                <p><strong>wohnen in</strong> + <em>oraș actual</em> = a locui în...</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Pronume</th><th>kommen <span class="ro-translation">(a veni)</span></th><th>wohnen <span class="ro-translation">(a locui)</span></th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong> (eu)</td><td>komme <span class="ro-translation">(eu vin)</span></td><td>wohne <span class="ro-translation">(eu locuiesc)</span></td></tr>
                    <tr><td><strong>du</strong> (tu)</td><td>kommst <span class="ro-translation">(tu vii)</span></td><td>wohnst <span class="ro-translation">(tu locuiești)</span></td></tr>
                    <tr><td><strong>er/sie/es</strong> (el/ea)</td><td>kommt <span class="ro-translation">(el/ea vine)</span></td><td>wohnt <span class="ro-translation">(el/ea locuiește)</span></td></tr>
                </tbody>
            </table>

            <h4 style="margin-top: 16px; color: #065f46;">Clasa lui Annette — de unde vine fiecare?</h4>
            <table class="theory-table">
                <thead><tr><th>Cine</th><th>De unde (aus...)</th><th>Unde locuiește (in...)</th></tr></thead>
                <tbody>
                    <tr><td><strong>Andreea</strong></td><td>aus Rumänien <span class="ro-translation">(din România)</span></td><td>in Brandenburg <span class="ro-translation">(în Brandenburg)</span></td></tr>
                    <tr><td><strong>Mihai</strong></td><td>aus Russland <span class="ro-translation">(din Rusia)</span></td><td>in Potsdam <span class="ro-translation">(în Potsdam)</span></td></tr>
                    <tr><td><strong>Annette</strong></td><td>aus Deutschland <span class="ro-translation">(din Germania)</span></td><td>in Berlin <span class="ro-translation">(în Berlin)</span></td></tr>
                    <tr><td><strong>Florian</strong></td><td>aus Dänemark <span class="ro-translation">(din Danemarca)</span></td><td>in Berlin <span class="ro-translation">(în Berlin)</span></td></tr>
                    <tr><td><strong>Carolina</strong></td><td>aus Mexiko <span class="ro-translation">(din Mexic)</span></td><td>in Berlin <span class="ro-translation">(în Berlin)</span></td></tr>
                    <tr><td><strong>Acar</strong></td><td>aus Marokko <span class="ro-translation">(din Maroc)</span></td><td>in Oranienburg <span class="ro-translation">(în Oranienburg)</span></td></tr>
                </tbody>
            </table>

            <div class="dialog-box" style="margin-top: 16px;">
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina</div>
                        <div class="dialog-text">Ich komme aus Mexiko. Und wo wohnst du, Acar?
                            <span class="translation">Eu vin din Mexic. Și tu unde locuiești, Acar?</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble right">
                        <div class="dialog-speaker">Acar</div>
                        <div class="dialog-text">Ich wohne in Oranienburg. Aber ich komme aus Marokko.
                            <span class="translation">Locuiesc în Oranienburg. Dar vin din Maroc.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Truc pentru ținut minte: <em>„aus"</em> sună a „afară" — vin <strong>de afară</strong> dintr-o țară. <em>„in"</em> e clar — sunt <strong>înăuntru</strong>, în oraș. Nu confunda niciodată „komme aus" cu „wohne in"!"</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 4: W-Fragen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>❓ 5. Primele 3 <strong>W-Fragen</strong> — Wie? Woher? Wo?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-w-fragen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>3 cuvinte care deschid orice conversație</h4>
                <p>Toate întrebările care cer informație concretă încep cu <strong>W-</strong> în germană (de aici numele „W-Fragen"). Astăzi învățăm primele 3 esențiale.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Întrebare</th><th>Traducere</th><th>Răspuns tipic</th></tr></thead>
                <tbody>
                    <tr><td><strong>Wie heißt du?</strong></td><td>Cum te numești?</td><td>Ich heiße Andreea.</td></tr>
                    <tr><td><strong>Woher kommst du?</strong></td><td>De unde vii?</td><td>Ich komme aus Rumänien.</td></tr>
                    <tr><td><strong>Wo wohnst du?</strong></td><td>Unde locuiești?</td><td>Ich wohne in Brandenburg.</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #d1fae5; border-left: 4px solid #10b981; margin-top: 14px;">
                <h4>📌 Regula de aur a poziției verbului</h4>
                <p>În <strong>W-Frage</strong>, <strong>verbul conjugat</strong> este ÎNTOTDEAUNA pe <strong>poziția 2</strong>, imediat după cuvântul de întrebare.</p>
                <p style="margin-top: 8px; font-family: monospace; font-size: 0.95rem;">
                    [1] <strong>Wie</strong> &nbsp; [2] <strong>heißt</strong> &nbsp; [3] du? <span class="ro-translation">— Cum te numești?</span><br>
                    [1] <strong>Woher</strong> &nbsp; [2] <strong>kommst</strong> &nbsp; [3] du? <span class="ro-translation">— De unde vii?</span><br>
                    [1] <strong>Wo</strong> &nbsp; [2] <strong>wohnst</strong> &nbsp; [3] du? <span class="ro-translation">— Unde locuiești?</span>
                </p>
                <p style="margin-top: 10px;">Și în propoziția afirmativă (Aussagesatz), <strong>verbul conjugat</strong> rămâne tot pe poziția 2:</p>
                <p style="font-family: monospace; font-size: 0.95rem;">
                    [1] Ich &nbsp; [2] <strong>heiße</strong> &nbsp; [3] Andreea. <span class="ro-translation">— Eu mă numesc Andreea.</span><br>
                    [1] Andreea &nbsp; [2] <strong>wohnt</strong> &nbsp; [3] in Brandenburg. <span class="ro-translation">— Andreea locuiește în Brandenburg.</span>
                </p>
                <p style="margin-top: 8px; font-size: 0.9rem; color: #6b7280;">💡 De ce „verbul conjugat"? Pentru că mai târziu vei vedea propoziții cu 2 verbe (de ex. <em>„Ich möchte schlafen"</em>) — atunci doar UNUL e conjugat (möchte) și el e pe poziția 2; celălalt (schlafen) merge la sfârșit. Regula e a verbului conjugat.</p>
            </div>

            <h4 style="margin-top: 16px; color: #065f46;">Forma politicoasă (cu Sie)</h4>
            <table class="theory-table">
                <thead><tr><th>Informal (du)</th><th>Formal (Sie)</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td>Wie heißt <strong>du</strong>?</td><td>Wie heißen <strong>Sie</strong>?</td><td><span class="ro-translation">Cum te numești? / Cum vă numiți?</span></td></tr>
                    <tr><td>Woher kommst <strong>du</strong>?</td><td>Woher kommen <strong>Sie</strong>?</td><td><span class="ro-translation">De unde vii? / De unde veniți?</span></td></tr>
                    <tr><td>Wo wohnst <strong>du</strong>?</td><td>Wo wohnen <strong>Sie</strong>?</td><td><span class="ro-translation">Unde locuiești? / Unde locuiți?</span></td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Verbul pe poziția 2 a fost cea mai mare descoperire pentru mine la prima oră. În română zicem „<em>De unde vii tu?</em>" cu verbul oriunde. În germană nu poți. <strong>Mereu poziția 2.</strong> Dacă reții asta, ai prins gramatica de bază a germanei."</div>
                </div>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const header = content.previousElementSibling;
    const arrow = header.querySelector('.sub-arrow');
    content.classList.toggle('open');
    arrow.classList.toggle('open');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
