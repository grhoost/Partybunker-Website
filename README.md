# Partybunker-Website

> Schulprojekt im Fach Informatik — Note: 15 Punkte

Eine vollständige, mehrseitige Website für einen fiktiven Partyraum-Anbieter. Nominell ein Gruppenprojekt, in der Praxis habe ich die Website nahezu komplett alleine entwickelt. Über die Winterferien saß ich täglich viele Stunden daran. Vor dem Projekt hatte ich JavaScript noch nie angefasst und HTML nur oberflächlich aus dem Unterricht gekannt. Ich habe mir während der Entwicklung den nötigen Umgang damit selbst erarbeitet.

---

## Features

- **Live-Suche** — filtert beim Tippen durch alle Unterseiten, Ergebnisse direkt anklickbar
- **Bilderkarussell** — automatischer Wechsel alle 2 Sekunden, klickbare Punkt-Indikatoren
- **Hover-Karussell** — auf der Räume-Seite: Bilder wechseln beim Mouseover, vor/zurück-Navigation
- **Dropdown-Navigation** — aufklappbare Menüs für Events und Über uns
- **~20 Unterseiten** — Locations (Berlin, Leipzig, Dresden, Halle u.a.), Events (Oktoberfest, Silvester, Weihnachten), Login, Registrierung, Kontakt, AGB, Datenschutz, Impressum, Team
- **Barrierefreiheit** — aria-Attribute, Lazy Loading für Bilder

---

## Technologien

HTML5 · CSS · JavaScript

---

## Projektstruktur

```
Partybunker.de/
├── index.html          # Startseite
├── räume.html          # Raumübersicht
├── kontakt.html        # Kontaktformular
├── impressum.html      # Impressum
├── login.html          # Login
├── register.html       # Registrierung
├── agb.html            # AGB
├── datenschutzbestimmungen.html
├── [locations]/        # Berlin, Leipzig, Dresden, Halle, Nauen, Penig, ...
├── [events]/           # Oktoberfest, Silvester, Weihnachten, ...
├── index.js            # Karussell-Logik Startseite
├── räume.js            # Karussell-Logik Räume-Seite
├── search.js           # Live-Suche
├── formate.css         # Stylesheet
└── img/                # Bilder (webp)
```

---

## Wie es entstanden ist

Im Schulunterricht wurde HTML nur kurz angesprochen, JavaScript gar nicht. Ich habe mir beides selbst erarbeitet, mit viel Recherche und KI-Tools als Lernhilfe. Der Prozess war nicht immer einfach. Vieles hat nicht funktioniert, ich habe es auseinandergenommen, verstanden warum, und neu gebaut. Nicht weil es mir jemand erklärt hat, sondern weil ich so lange dran geblieben bin bis es funktioniert hat.

Der Service- und Eventteil ist aus Zeitgründen unvollständig geblieben. Der Rest ist vollständig funktionsfähig.

---

## Entwickelt von

David-Michael Milükow  
Adolf-Reichwein-Schule Neu-Anspach
