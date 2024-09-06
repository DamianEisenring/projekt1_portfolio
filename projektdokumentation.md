# Projekt-Dokumentation

Damian Eisenring

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|23.08.2024 | 0.0.1   |Projekt gestartet, I und P abgeschlossen. Navbar, Footer eingefügt, arbeiten an Home |
|       | ...     |                                                              |
|       | 1.0.0   |                                                              |

## 1 Informieren

### 1.1 Ihr Projekt

Ich möchte meine bereits vorhandene Portfolio komplett überarbeiten. Ich möchte verschiedene Features dafür einbauen, dass ich mir das Leben einfacher machen kann, wie es momentan ist.

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1|	Muss|	Funktional|	Als Benutzer möchte ich eine einfache und übersichtliche Navigation, um schnell zwischen den Seiten wechseln zu können.|
|2|	Muss|	Funktional|	Als Benutzer möchte ich die Unterseiten Home, Schwingen, Informatik, Steckbrief und Kontakt durchstöbern können.|
|3|	Muss|	Funktional|	Als Benutzer möchte ich mich einloggen können, um meine Daten zu verwalten und zu bearbeiten.|
|4|	Muss|	Funktional|	Als Benutzer möchte ich, dass meine Daten sicher in Firebase gespeichert werden, um darauf später zugreifen zu können.|
|5|	Muss|	Funktional|	Als Benutzer möchte ich sicherstellen, dass nur eingeloggte Benutzer die Daten bearbeiten können, um die Datenintegrität zu wahren.|
|6|	Soll|	Funktional|	Als Benutzer möchte ich in der Lage sein, Daten zu löschen, hinzuzufügen und zu bearbeiten, um mein Portfolio aktuell zu halten.|
| ...  |                 |      |                                    |


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1	|Der Benutzer befindet sich auf der Startseite des Portfolios.|	Benutzer klickt auf einen Navigationslink.	Die Seite wechselt zur entsprechenden Zielseite (z.B. Home, Schwingen, Informatik, etc.).|
| 2.1	|Der Benutzer hat die Seite Home aufgerufen.|	Keine spezifische Eingabe notwendig.|	Die Inhalte der Home-Seite werden korrekt angezeigt.|
| 2.2	|Der Benutzer hat die Seite Schwingen aufgerufen.	|Keine spezifische Eingabe notwendig|.	Die Inhalte der Schwingen-Seite werden korrekt angezeigt.|
| 2.3	|Der Benutzer hat die Seite Informatik aufgerufen.|	Keine spezifische Eingabe notwendig.|	Die Inhalte der Informatik-Seite werden korrekt angezeigt.|
| 2.4	|Der Benutzer hat die Seite Steckbrief aufgerufen.|	Keine spezifische Eingabe notwendig.|	Die Inhalte der Steckbrief-Seite werden korrekt angezeigt.|
| 2.5	|Der Benutzer hat die Seite Kontakt aufgerufen.|	Keine spezifische Eingabe notwendig.|	Die Inhalte der Kontakt-Seite werden korrekt angezeigt.|
| 3.1	|Der Benutzer ist auf der Login-Seite.|	Benutzer gibt gültige Anmeldeinformationen ein.|	Der Benutzer wird erfolgreich eingeloggt und zur Startseite weitergeleitet.|
| 3.2	|Der Benutzer ist auf der Login-Seite.|	Benutzer gibt ungültige Anmeldeinformationen ein.|	Eine Fehlermeldung wird angezeigt, und der Benutzer bleibt auf der Login-Seite.|
| 4.1	|Der Benutzer ist eingeloggt und befindet sich auf einer Bearbeitungsseite.|	Benutzer speichert eine Änderung im Portfolio.	|Die Änderung wird in Firebase gespeichert und ist nach einer Aktualisierung sichtbar.|
| 5.1|	Ein Benutzer ist nicht eingeloggt und versucht, eine Seite zu bearbeiten.|	Benutzer versucht, auf die Bearbeitungsfunktion zuzugreifen.	|Der Zugriff wird verweigert, und der Benutzer wird zur Login-Seite weitergeleitet.|
| 5.2	|Ein Benutzer ist eingeloggt und befindet sich auf einer Bearbeitungsseite.|	Benutzer versucht, eine Seite zu bearbeiten.	|Der Benutzer kann die Seite erfolgreich bearbeiten.|
| 6.1|	Der Benutzer ist eingeloggt und befindet sich auf einer Bearbeitungsseite.|	Benutzer löscht einen Eintrag.|	Der Eintrag wird erfolgreich gelöscht, und die Seite wird aktualisiert.|
| 6.2| Der Benutzer ist eingeloggt und befindet sich auf einer Bearbeitungsseite.|	Benutzer fügt einen neuen Eintrag hinzu.|	Der neue Eintrag wird erfolgreich hinzugefügt und angezeigt.|
| 6.3	|Der Benutzer ist eingeloggt und befindet sich auf einer Bearbeitungsseite.	|Benutzer bearbeitet einen bestehenden Eintrag.	|Die Änderungen werden gespeichert und korrekt angezeigt.|
| ...  |              |         |                   |


## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  | 30.08.2024      | Damian Eisenring          | Navigation implementieren             |  2h             |
| 2.A  | 13.09.2024      | Damian Eisenring          |  An der Unterseite Home abarbeiten            |     3h          |
| 2.B  | 13.09.2024      | Damian Eisenring          |  An der Unterseite Schwingen abarbeiten       |     3h          |
| 2.C  | 13.09.2024      | Damian Eisenring          | An der Unterseite Informatik abarbeiten            |     3h          |
| 2.D  | 13.09.2024      | Damian Eisenring          | An der Unterseite Steckbrief abarbeiten                 |     3h          |
| 2.E  | 13.09.2024      | Damian Eisenring          | An der Unterseite Kontakt abarbeiten              |     3h          |
| 3.A  | 13.09.2024      | Damian Eisenring          | Login-Funktion implementieren             |    2h           |
| 4.A  | 18.10.2024      | Damian Eisenring          | Firebase Integration für Speicherung der Daten             |   4h            |
| 5.A  | 25.10.2024      | Damian Eisenring          | Datenbearbeitung auf Eingeloggte User beschränken.             |     2h          |
| 6.A  | 1.11.2024      | Damian Eisenring          | Datenbearbeitungsfunktionen hinzufügen Löschen, Hinzufügen und bearbeiten.          |      5h         |
| ...  |       |           |              |               |

Total: 30h


## 3 Entscheiden

✍️ Dokumentieren Sie hier Ihre Entscheidungen und Annahmen, die Sie im Bezug auf Ihre User Stories und die Implementierung getroffen haben.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  | 30.09.2024       |  Damian Eisenring         |    2h           |         2h          |
| 2.A  |06.09.2024       |     Damian Eisenring  |               |                   |
| 2.B  |      |           |               |                   |
| ...  |       |           |               |                   |


## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |
