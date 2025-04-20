// Croatian

const hr = {
  // main.ts
  'Open as kanban board': 'Otvori kao kanban ploču',
  'Create new board': 'Napravi novu ploču',
  'Archive completed cards in active board': 'Arhiviraj dovršene kartice u aktivnoj ploči',
  'Error: current file is not a Kanban board': 'Error: trenutna datoteka nije Kanban ploča',
  'Convert empty note to Kanban': 'Konvertiraj praznu bilješku u Kanban',
  'Error: Kanban ne se može kreirati , trenutna bilješka nije prazna':
    'Error: cannot create Kanban, the current note is not empty',
  'New kanban board': 'Nova kanban ploča',
  'Untitled Kanban': 'Neimenovan Kanban',
  'Toggle between Kanban and markdown mode': 'Uključi/isključi između Kanban ili markdown načina',

  'View as board': 'Prikaži kao ploču',
  'View as list': 'Prikaži kao listu',
  'View as table': 'Prikaži kao tablicu',
  'Board view': 'Prikaz ploče',

  // KanbanView.tsx
  'Open as markdown': 'Otvori kao markdown',
  'Open board settings': 'Otvori postavke ploče',
  'Archive completed cards': 'Arhiviraj cijelu karticu',
  'Something went wrong': 'Nešto nije u redu',
  'You may wish to open as markdown and inspect or edit the file.':
    'Možda ćete htjeti otvoriti kao markdown i pregledati ili urediti datoteku.',
  'Are you sure you want to archive all completed cards on this board?':
    'Jeste li sigurni da želite arhivirati sve dovršene kartice na ovoj ploči?',

  // parser.ts
  Complete: 'Završeno',
  Archive: 'Arhivirano',
  'Invalid Kanban file: problems parsing frontmatter':
    'Format Kanban datoteke nije valjan: problem s učitavanjem metapodataka (frontmatter).',
  "I don't know how to interpret this line:": "Ne znam kako interpretirati ovu liniju:",
  Untitled: 'Neimenovano', // auto-created column

  // settingHelpers.ts
  'Note: No template plugins are currently enabled.':
    'NAPOMENA: trenutno nisu omogućeni dodaci predloška.',
  default: 'zadano',
  'Search...': 'Traži...',

  // Settings.ts
  'New line trigger': 'Naredba za novi red',
  'Select whether Enter or Shift+Enter creates a new line. The opposite of what you choose will create and complete editing of cards and lists.':
    'Odaberite hoće li Enter ili Shift+Enter stvarati novi redak. Suprotna kombinacija će potvrditi unos u kartice i liste.',
  'Shift + Enter': 'Shift + Enter',
  Enter: 'Enter',
  'Prepend / append new cards': 'Dodaj kartice na početak / kraj',
  'This setting controls whether new cards are added to the beginning or end of the list.':
    'Ova postavka određuje hoće li se nove kartice dodavati na početak ili kraj liste.',
  Prepend: 'Na početak',
  'Prepend (compact)': 'Na početak (compact)',
  Append: 'Na kraj',
  'These settings will take precedence over the default Kanban board settings.':
    'Ove postavke će imati prednost nad zadanim postavkama Kanban ploče.',
  'Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.':
    'Postavite zadane postavke Kanban ploče. Pojedinačne ploče mogu nadjačati ove postavke.',
  'Note template': 'Predložak bilješke',
  'This template will be used when creating new notes from Kanban cards.':
    'Ovaj predložak će se koristiti pri stvaranju novih bilješki iz Kanban kartica.',
  'No template': 'Nema predložak',
  'Note folder': 'Mapa bilješke',
  'Bilješke kreirane iz Kanban kartica bit će spremljene u ovu mapu. Ako je polje prazno, spremit će se na zadano mjesto u ovom trezoru.':
    'Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.',
  'Default folder': 'Zadana mapa',
  'List width': 'Širina Liste',
  'Expand lists to full width in list view': 'Proširi liste na punu širinu u prikazu lista',
  'Enter a number to set the list width in pixels.':
    'Unesite broj za postavljanje širine liste u pikselima.',
  'Maximum number of archived cards': 'Maksimalni broj arhiviranih kartica',
  "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.":
    "Arhivirane kartice mogu se pregledavati u markdown načinu. Nakon dostizanja ograničenja, stare kartice će se uklanjati. Vrijednost -1 omogućuje neograničenu arhivu.",
 'Display card checkbox': 'Prikaži checkbox na kartici',
  'When toggled, a checkbox will be displayed with each card':
  'Kada je uključeno, checkbox će biti prikazan na svakoj kartici',
  'Reset to default': 'Vrati na zadano',
  'Date & Time': 'Datum i vrijeme',
  'Date trigger': 'Okidač za datum',
  'When this is typed, it will trigger the date selector':
  'Kada se ovo upiše, pokrenut će se odabir datuma',
  'Time trigger': 'Okidač za vrijeme',
  'When this is typed, it will trigger the time selector':
  'Kada se ovo upiše, pokrenut će se odabir vremena',
  'Date format': 'Format datuma',
  'This format will be used when saving dates in markdown.':
  'Ovaj format će se koristiti pri spremanju datuma u markdown.',
  'For more syntax, refer to': 'Za više sintakse, pogledajte',
  'format reference': 'referencu formata',
  'Your current syntax looks like this': 'Vaša trenutna sintaksa izgleda ovako',
  'Time format': 'Format vremena',
  'Date display format': 'Format prikaza datuma',
  'This format will be used when displaying dates in Kanban cards.':
  'Ovaj format će se koristiti pri prikazu datuma na Kanban karticama.',
  'Show relative date': 'Prikaži relativni datum',
  "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'. Relative dates will not be shown for dates from the Tasks and Dataview plugins.":
  "Kada je uključeno, kartice će prikazivati razliku između današnjeg i datuma na kartici. Npr. 'Za 3 dana', 'Prije mjesec dana'. Relativni datumi neće biti prikazani za datume iz Tasks i Dataview dodataka."
  
  'Move dates to card footer': 'Premjesti datume u podnožje kartice',
  "When toggled, dates will be displayed in the card's footer instead of the card's body.":
    'Kada je uključeno, datumi će biti prikazani u podnožju kartice umjesto u tijelu kartice.',
  
  'Move tags to card footer': 'Premjesti oznake u podnožje kartice',
  "When toggled, tags will be displayed in the card's footer instead of the card's body.":
    'Kada je uključeno, oznake će biti prikazane u podnožju kartice umjesto u tijelu kartice.',
  
  'Move task data to card footer': 'Premjesti podatke zadataka u podnožje kartice',
  "When toggled, task data (from the Tasks plugin) will be displayed in the card's footer instead of the card's body.":
    'Kada je uključeno, podaci zadataka (iz Tasks dodatka) će biti prikazani u podnožju kartice umjesto u tijelu kartice.',
  
  'Inline metadata position': 'Pozicija inline metapodataka',
  'Controls where the inline metadata (from the Dataview plugin) will be displayed.':
    'Određuje gdje će inline metapodaci (iz Dataview dodatka) biti prikazani.',
  
  'Card body': 'Tijelo kartice',
  'Card footer': 'Podnožje kartice',
  
  'Merge with linked page metadata': 'Spoji s metapodacima povezane stranice',

  'Hide card counts in list titles': 'Sakrij broj kartica u naslovima lista',
  'When toggled, card counts are hidden from the list title':
    'Kada je uključeno, broj kartica će biti sakriven u naslovima lista',
  
  'Link dates to daily notes': 'Poveži datume s dnevnim bilješkama',
  'When toggled, dates will link to daily notes. Eg. [[2021-04-26]]':
    'Kada je uključeno, datumi će biti povezani s dnevnim bilješkama. Npr. [[2021-04-26]]',
  
  'Add date and time to archived cards': 'Dodaj datum i vrijeme arhiviranim karticama',
  'When toggled, the current date and time will be added to the card title when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title':
    'Kada je uključeno, trenutni datum i vrijeme će biti dodani naslovu kartice prilikom arhiviranja. Npr. - [ ] 2021-05-14 10:00 Moj naslov kartice',
  
  'Add archive date/time after card title': 'Dodaj datum/vrijeme arhiviranja nakon naslova kartice',
  'When toggled, the archived date/time will be added after the card title, e.g.- [ ] My card title 2021-05-14 10:00am. By default, it is inserted before the title.':
    'Kada je uključeno, datum/vrijeme arhiviranja će biti dodano nakon naslova kartice, npr. - [ ] Moj naslov kartice 2021-05-14 10:00. Zadano se umeće prije naslova.',
  
  'Archive date/time separator': 'Separator datuma/vremena arhiviranja',
  'This will be used to separate the archived date/time from the title':
    'Ovo će se koristiti za odvajanje datuma/vremena arhiviranja od naslova',
  
  'Archive date/time format': 'Format datuma/vremena arhiviranja',
  
  'Kanban Plugin': 'Kanban dodatak',
  
  'Tag click action': 'Akcija klika na oznaku',
  'Search Kanban Board': 'Pretraži Kanban ploču',
  'Search Obsidian Vault': 'Pretraži Obsidian trezor',
  'This setting controls whether clicking the tags displayed below the card title opens the Obsidian search or the Kanban board search.':
    'Ova postavka određuje otvara li klik na oznake ispod naslova kartice Obsidian pretragu ili pretragu Kanban ploče.',
  
  'Tag colors': 'Boje oznaka',
  'Set colors for tags displayed in cards.': 'Postavi boje za oznake prikazane na karticama.',
  
  'Linked Page Metadata': 'Metapodaci povezane stranice',
  'Inline Metadata': 'Inline metapodaci',
  'Display metadata for the first note linked within a card. Specify which metadata keys to display below. An optional label can be provided, and labels can be hidden altogether.':
    'Prikaži metapodatke za prvu bilješku povezanu unutar kartice. Odredite koje ključeve metapodataka prikazati ispod. Može se dodati opcionalna oznaka, a oznake se mogu potpuno sakriti.',
  
  'Board Header Buttons': 'Gumbi zaglavlja ploče',
  
  'Calendar: first day of week': 'Kalendar: prvi dan tjedna',
  'Override which day is used as the start of the week':
    'Nadjačaj koji dan se koristi kao početak tjedna',
  
  Sunday: 'Nedjelja',
  Monday: 'Ponedjeljak',
  Tuesday: 'Utorak',
  Wednesday: 'Srijeda',
  Thursday: 'Četvrtak',
  Friday: 'Petak',
  Saturday: 'Subota',
  
  'Background color': 'Boja pozadine',
  Tag: 'Oznaka',
  'Text color': 'Boja teksta',
  
  'Date is': 'Datum je',
  Today: 'Danas',
  'After now': 'Nakon sada',
  'Before now': 'Prije sada',
  'Between now and': 'Između sada i',
  
  'Display date colors': 'Prikaži boje datuma',
  'Set colors for dates displayed in cards based on the rules below.':
    'Postavi boje za datume prikazane na karticama prema pravilima ispod.',
  
  'Add date color': 'Dodaj boju datuma',

  // MetadataSettings.tsx
  'Metadata key': 'Ključ metapodataka',
  'Display label': 'Prikaži oznaku',
  'Hide label': 'Sakrij oznaku',
  'Drag to rearrange': 'Povuci za preuređivanje',
  Delete: 'Izbriši',
  'Add key': 'Dodaj ključ',
  'Add tag': 'Dodaj oznaku',
  'Field contains markdown': 'Polje sadrži markdown',
  'Tag sort order': 'Redoslijed sortiranja oznaka',
  'Set an explicit sort order for the specified tags.':
    'Postavi eksplicitni redoslijed sortiranja za određene oznake.'

  // TagColorSettings.tsx
  'Add tag color': 'Dodaj boju oznake',

  // components/Table.tsx
  List: 'Lista',
  Card: 'Kartica',
  Date: 'Datum',
  Tags: 'Oznake',

  Priority: 'Prioritet',
  Start: 'Početak',
  Created: 'Kreirano',
  Scheduled: 'Raspored',
  Due: 'Rok',
  Cancelled: 'Otkazano',
  Recurrence: 'Ponavljanje',
  'Depends on': 'Ovisi o',
  ID: 'ID',

  // components/Item/Item.tsx
  'More options': 'Više mogućnosti',
  Cancel: 'Otkaži',
  Done: 'Gotovo',
  Save: 'Spremi',

  // components/Item/ItemContent.tsx
  today: 'danas',
  yesterday: 'jučer',
  tomorrow: 'sutra',
  'Change date': 'Promijeni datum',
  'Change time': 'Promijeni vrijeme',

  // components/Item/ItemForm.tsx
  'Card title...': 'Naslov kartice...',
  'Add card': 'Dodaj karticu',
  'Add a card': 'Dodaj tu karticu',

  // components/Item/ItemMenu.ts
  'Edit card': 'Uredi karticu',
  'New note from card': 'Nova bilješka iz kartice',
  'Archive card': 'Arhiviraj karticu',
  'Delete card': 'Izbriši karticu',
  'Edit date': 'Uredi datum',
  'Add date': 'Dodaj datum',
  'Remove date': 'Ukloni datum',
  'Edit time': 'Uredi vrijeme',
  'Add time': 'Dodaj vrijeme',
  'Remove time': 'Ukloni vrijeme',
  'Duplicate card': 'Dupliciraj karticu',
  'Split card': 'Podijeli karticu',
  'Copy link to card': 'Kopiraj poveznicu na karticu',
  'Insert card before': 'Umetni karticu prije',
  'Insert card after': 'Umetni karticu nakon',
  'Add label': 'Dodaj oznaku',
  'Move to top': 'Pomakni na vrh',
  'Move to bottom': 'Pomakni na dno',
  'Move to list': 'Premjesti u listu',

  // components/Lane/LaneForm.tsx
  'Enter list title...': 'Upiši naslov liste...',
  'Mark cards in this list as complete': 'Označi kartice u ovom popisu kao dovršene',
  'Add list': 'Dodaj listu',
  'Add a list': 'Dodaj ovu listu',

  // components/Lane/LaneHeader.tsx
  'Move list': 'Prpemjesti listu',
  Close: 'Zatvori',

  // components/Lane/LaneMenu.tsx
  'Are you sure you want to delete this list and all its cards?':
  'Jeste li sigurni da želite izbrisati ovu listu i sve njezine kartice?',
  
  'Yes, delete list':
  'Da, izbriši listu',
  
  'Are you sure you want to archive this list and all its cards?':
  'Jeste li sigurni da želite arhivirati ovu listu i sve njezine kartice?',
  
  'Yes, archive list':
  'Da, arhiviraj listu',
  
  'Are you sure you want to archive all cards in this list?':
  'Jeste li sigurni da želite arhivirati sve kartice u ovoj listi?',
  
  'Yes, archive cards':'Da, arhiviraj kartice',
  'Edit list':'Uredi listu',
  'Archive cards':'Arhiviraj kartice',
  'Archive list':'Arhiviraj listu',
  'Delete list':'Izbriši listu',
  'Insert list before':'Umetni listu prije',
  'Insert list after':'Umetni listu nakon',
  'Sort by card text':'Sortiraj po tekstu kartice',
  'Sort by date':'Sortiraj po datumu',
  'Sort by tags':'Sortiraj po oznakama',
  'Sort by':'Sortiraj po',
  
    // components/helpers/renderMarkdown.ts
  'Unable to find': 'Nije moguće pronaći',
  'Open in default app': 'Otvori u zadanoj aplikaciji',

  // components/Editor/MarkdownEditor.tsx
  Submit: 'Pošalji',
};

export type Lang = typeof en;
export default en;
