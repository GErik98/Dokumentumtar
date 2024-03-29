# Dokumentumtar
SchoolProject


Dokumentumtár

Kliens oldali webes programozás projektmunka 
Készítette: 2022/23 II. félév 
•	Gácsi Erik (PUXT77) 
•	Bakri Ferenc (ER81RF) 
•	Varga Marina (CB0CHP) 

I.	Feladat 
A felhasználó tudjon egy mappaszerkezetet kialakítani vizuális felületen. Üres szerkezettel indul az alkalmazás. A felhasználó minden mappába tud új mappát létrehozni úgy, hogy egy mappában nem lehetnek azonos nevű almappák. A mappákat lehet törölni, ekkor a teljes tartalma törlődik. Minden mappába tud fájlokat feltölteni. Csak a kliens oldalt kel lefejleszteni, azaz nem lehet elmenteni a mappaszerkezetet és nem történik valós fájlfeltöltés. Az alkalmazás grafikusan jelenítse meg a mappaszerkezetet és a benne „tárolt” fájlokat (nevüket). 
II.	Tartalom 
A projekt célja egy egyszerű, letisztult fájlkezelő rendszer lefejlesztése. Az alkalmazást minden internetes felhasználó számára kedvezővé szeretnénk tenni, egyszerű struktúrájával és könnyed használhatóságával. Az alkalmazás leginkább a Windows Fájlkezelő-ből fog ihletet meríteni, sok hasonlóságot lehet majd felfedezni a két alkalmazás között. 
Az oldal nyitófelülete egy bejelentkező/regisztrációs panel lesz, mely elengedhetetlen ahhoz, hogy a felhasználó elérhesse a fájlkezelőt. Sikeres regisztrációt, vagy bejelentkezést követően elérhetővé válik a fájlkezelő teljeskörű használata a felhasználó számára. (A bejelentkezési/regisztrációs felület, csupán látszólagos)
 Az első bejelentkezést követően a felhasználónak létre kell hoznia egy főmappát, melyen belül létrehozhat további almappákat, vagy már egyből megkezdheti a fájlfeltöltést. Egy gomb segítségével, megoszthatja a felhasználó a mappát más emberekkel. (email, facebook, vagy egyéb más közösségi felületeken) A mappakreációnál egyedül a mappa nevét szükséges megadni. Ennek kritériumai a következők:  
-	Nem tartalmazhat szóközt, vagy más whitespace karaktert 
-	Nem tartalmazhat speciális karaktereket, kivéve alsóvonást 
-	Maximális karakterszám: 150 
-	Nem hagyható üresen a névadás mező 
-	Csak akkor létrehozható egy mappa, ha még nincs ilyen mappanév az adott fő mappán belül 
(Ezen kívül természetesen egyezhetnek mappanevek) 
Mappák és fájlok törlésére is ad lehetőséget az alkalmazás. Mappa törlése esetén, a mappával együtt a benne található almappák, illetve fájlok is törlődnek.  Ezzel kapcsolatosan a törléskor, az alkalmazás figyelmezteti a felhasználót és megkérdezi, hogy szeretné-e folytatni a műveletet. 
A mi általunk fejlesztett dokumentumtár kinézete/megjelenése:
-	Bejelentkező felület: Középen található lesz egy bejelentkezés és egy regisztráció felület.
Ide kell beírni az email címet és jelszót.
Főoldal: 
-	Bal oldalon lesz új mappa létrehozása, mappa/fájl törlése, fájl feltöltés, mappa/fájlmegosztás lehetőség.
-	Az oldal középső részén láthatóak majd a mappák és a benne lévő fájlok/képek.
-	Jobb oldalon az elérési utak.
-	Az oldal alapja fehér, a szöveg fekete és a gombok, linkek kék színűek lesznek.

