# Weinkeller – Kurzanleitung

## Sofort starten (Laptop)
1. Den Ordner `weinkeller` irgendwohin legen, wo er bleibt (z. B. Dokumente). **Nicht im Downloads-Ordner lassen.**
2. `index.html` doppelklicken. Die App öffnet sich im Browser (Chrome, Edge, Firefox oder Safari).
3. Auf **„Neu“** tippen, Name, Weingut, Jahrgang und Menge eingeben, dann **Speichern**.
   Zum Ausprobieren: auf der Übersicht **„Beispielweine laden“** wählen.

## Neu in Version 2
- **Woanders getrunken:** Unter „Neu“ oben „Woanders getrunken“ wählen, um Weine aus dem Restaurant oder von Freunden festzuhalten (Ort, Datum, Sterne, Notiz, Nachkaufliste). Du findest sie im Keller unter „Woanders getrunken“. Hast du ihn gekauft? „Gekauft → in den Keller“.
- **Vivino:** Bewertung unter „Mehr Details → Bewertungen“ eintragen. „Auf Vivino suchen“ öffnet die passende Vivino-Seite. Vivino hat keine offizielle Schnittstelle, deshalb wird nichts automatisch abgerufen.

## Neu in Version 4: Mehrere Geräte abgleichen
Alle Handys und der Laptop arbeiten mit denselben Daten, ganz ohne Backup-Dateien hin und her zu schicken. Der Abgleich läuft über ein **privates** Repository in deinem GitHub-Konto.
1. Auf github.com/new ein Repository `weinkeller-daten` anlegen, **Private** auswählen. Nicht das öffentliche Repository der App-Webseite nehmen.
2. Auf github.com/settings/personal-access-tokens/new einen Schlüssel erstellen: Ablauf 1 Jahr, „Only select repositories“ → `weinkeller-daten`, „Contents: Read and write“.
3. In der App unter ⚙︎ → „Mehrere Geräte abgleichen“ Repository und Schlüssel eintragen und „Verbinden“ tippen. Das machst du einmal pro Gerät, derselbe Schlüssel funktioniert überall.

Danach gleicht die App automatisch ab: beim Öffnen, nach jeder Änderung und jede Minute. Das kleine Pfeil-Symbol oben zeigt den Stand (grün = abgeglichen) und gleicht beim Antippen sofort ab. Buchen zwei Handys gleichzeitig Flaschen ab, zählen beide Buchungen. Gelöschtes bleibt überall gelöscht.
Der Schlüssel bleibt nur auf dem jeweiligen Gerät und steht nicht im Backup. Nach einem Jahr läuft er ab, dann einen neuen erstellen, in der App „Trennen“ und neu verbinden. Ein JSON-Backup ab und zu bleibt trotzdem sinnvoll.

## Version 3: Design „Weinfarben“
- Jede Weinfarbe hat ihre eigene Farbe (Streifen und Jahrgang), die Suche steht direkt auf der Übersicht. Tipp: „passt zu Lamm“ eintippen, dann filtert die App nach Speisen.
- Lagerplan als Kurzansicht auf der Übersicht, volle Ansicht über „Plan“ oder im Keller über „Lagerplan“.
- Am Laptop: Navigation links und zweispaltige Übersicht und Detailansicht.
- Die Schrift „Lora“ (SIL Open Font License) ist eingebettet, die App lädt nichts aus dem Internet.

## Wo liegen meine Daten?
Nur im Browser auf diesem Gerät. Es gibt keinen Server und kein Konto.
- Wenn du „Browserdaten löschen“ wählst, ist auch der Weinkeller weg. Deshalb: **⚙︎ → Vollständiges Backup (JSON)**, mindestens monatlich (die App erinnert dich).
- Anderer Browser, anderes Gerät oder die HTML-Datei verschoben bedeutet einen neuen, leeren Speicher. Umziehen geht immer über **Backup → Import**.

## Aufs Handy (einmalig ca. 15 Minuten, kostenlos)
1. Kostenloses Konto auf github.com anlegen.
2. Oben rechts **„+“ → New repository** wählen, Name z. B. `weinkeller`, **Public**, dann *Create*.
3. *uploading an existing file* anklicken und **alle Dateien aus diesem Ordner** hineinziehen, dann *Commit changes*.
4. *Settings → Pages*: bei *Branch* `main` und `/ (root)` wählen, dann *Save*. Nach 1–2 Minuten ist die App unter `https://DEINNAME.github.io/weinkeller/` erreichbar.
5. Am Handy öffnen:
   - iPhone (Safari): Teilen → **Zum Home-Bildschirm**
   - Android (Chrome): ⋮ → **App installieren**
6. In der App unter ⚙︎ dein Backup importieren.

Der Code ist öffentlich, deine Weindaten nicht: Sie liegen nur im Speicher deines Handys.

## Update
Neue `index.html` hochladen bzw. ersetzen. Die Daten bleiben erhalten, weil sie nicht in der Datei liegen. Vorher trotzdem ein Backup machen.

## Dateien
| Datei | Zweck |
| --- | --- |
| index.html | die komplette App (läuft auch allein per Doppelklick) |
| manifest.webmanifest, sw.js, icon-*.png, icon.svg | nur für die Handy-App (PWA, offline) |
| schema.json | Beschreibung des Backup-Formats |
