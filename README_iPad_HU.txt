SPANYOL–MAGYAR SZÓTANULÓ – iPad változat

Ez egy Safari-ból a Főképernyőre telepíthető PWA webalkalmazás, nem natív App Store alkalmazás.

Funkciók:
- Véletlenszerű kérdezés mindkét irányban.
- Egy második próbálkozás hibás válasz után.
- Kis/nagybetű és ékezet tolerancia, beállítható karaktereltérés.
- Hibás szavak listája és külön gyakorlása.
- Statisztika és találati arány.
- Helyi mentés az adott iPad böngészőjében.
- Google Sheets CSV-ből szólista-frissítés.

Google Sheets:
1. Első sor: Spanyol | Magyar.
2. Fájl → Megosztás → Közzététel a weben.
3. Válaszd ki a munkalapot és CSV formátumot, majd Közzététel.
4. A kapott CSV-linket illeszd be az alkalmazás Beállítások lapján.

Telepítés:
A PWA HTTPS tárhelyet igényel. Töltsd fel a mappa összes fájlját például GitHub Pages vagy Netlify tárhelyre. iPaden nyisd meg a HTTPS címet Safariban, majd Megosztás → Hozzáadás a Főképernyőhöz.

Fontos:
- Egyes Google Sheets CSV-linkeket a böngésző CORS biztonsági szabálya blokkolhat. Ha ilyen hiba történik, a linket vagy egy Apps Script köztes megoldást kell beállítani.
- A hibás szavak és statisztikák helyben tárolódnak; böngészőadatok törlésekor elveszhetnek, más eszközre nem szinkronizálódnak.
- A közzétett CSV-t bárki elérheti, aki ismeri a linket. Ne tárolj benne bizalmas adatot.
