Pe git este o instalare de laravel (nu e nevoie sa stii laravel pentru aceasta proba).
Va fi nevoie sa instalezi xampp: https://www.apachefriends.org/ pentru a rula proiectul local.
Va fi nevoie de instalare composer, variante de descarcare si instalare aici: https://getcomposer.org/download/
Dupa instalarea xampp si composer, inta in cmd, in fisierul cu proiectul si ruleaza comanda "composer install", apoi "php artisan serve" si acceseaza link-ul afisat pe ecran. Ar trebui sa apara o pagina alba.
Fisierul in care vei lucra se afla in resources/views/home.blade.php, unde poti pune html, css, js si tot ce ai nevoie.

Cerinta:
Crearea unei pagini de vanzare produs cu urmatoarele elemente:
- header: logo, meniul cu legaturi ce duc in diferite locuri in pagina, link-uri social media
- slider cu 3 imagini prin care se poate naviga (fie cu bullets, fie stanga-dreapta)
- testimoniale: carousel cu 3 testimoniale afisate in acelasi timp si navigare prin ele
- caracteristici produs: caseta cu iconita, titlu, text
- pricing table cu 3 variante de pret si caracteristicile acestora
- formular de contact: nume, email, telefon, mesaj, bifa acord termeni si conditii
- footer: logo, link-uri informatii utile (termeni si conditii, cookies, etc), copyright, formular inscriere newsleter (fara functionalitate)
- call to action in pagina, care sa duca spre tabelul de preturi

Alte detalii:
- nu trebuie sa fie texte, imagini sau link-uri valide, poti folosi orice surse vrei, doar pagina trebuie sa arate si sa mearga bine
- designul depinde de tine, un punct important din aceasta proba
- nu ai voie cu template luat de undeva, designul trebuie sa fie facut de tine
- trebuie folosit un framework de stilizare, ex: Bootstrap/Tailwind/Materialize, etc
- poti folosi ce librarii externe deresti pentru a-ti usura munca la diferite elemente (la final va trebui sa avem o lista cu tot ce s-a folosit extern)
- nu este nevoie sa faci alte fisiere de stilizare sau js, poti face totul in fisierul mentionat
- pentru informatiile despre testimoniale vei face ajax call catre endpoint-ul /testimoniale, analizezi informatiile primite si populezi dinamic carousel-ul cu testimoniale
- formularul de contact trimite informatiile prin ajax post, catre endpointul /contact si returneaza mesaj de eroare sau succes in functie datele trimise, iar pe pagina trebuie afisat mesajul corespunzator +
 + (trebuie tratate toate cazurile) - numele campurilor din formular trebuie sa fie acestea: nume, email, telefon, mesaj, termeni
- fisierul read me de pe git sa contina lista cu toate librariile externe folosite si sursa lor + durata totala si reala de lucru
- sa adaugi comentarii in cod unde consideri necesar

Mentiuni finale:
Link de git: https://bitbucket.org/victortudosa/lucian-manta-proba-de-lucru/src/master/
Sa imi trimiti te rog un reply la acest mail sa stiu ca l-ai primit.
Daca ceva nu intelegi (orice), intreaba fara nici o retinere.
Cand proiectul este gata, sa faci push si anunti.
Dupa finalizarea si analiza a proiectului de catre noi, veti primi un reply cu eventuale corectii, o modificare si un challenge optional.


ERROR 500

composer install 
mv .env.example .env 
php artisan cache:clear 
composer dump-autoload 
php artisan key:generate


