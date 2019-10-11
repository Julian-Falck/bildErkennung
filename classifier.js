// Classifier Magic

var bayes = require('bayes');

const classifier = bayes();


//BILD phrases obviously
classifier.learn('Schauspielerin Bella Thorne (22) ist frisch verliebt!', 'BILD')
classifier.learn('Wer das Mädchen ist, interessierte vorerst aber niemanden. ', 'BILD')
classifier.learn('Viel mehr wollten ihre Follower wissen, warum die beiden überhaupt angezogen ins Bett gingen.', 'BILD')
classifier.learn('Mittlerweile ist auch klar, wer die Unbekannte ist, die sich mit Schuhen in die Laken legte', 'BILD')
classifier.learn('Schon lange ist bekannt, dass die Amerikanerin bisexuell ist, Sie erklärte immer wieder öffentlich, dass sie sowohl Männer als auch Frauen liebe.', 'BILD')
classifier.learn('Doch im Juli korrigierte sie dann plötzlich die Definition und stellte klar, dass es nicht mehr ganz auf sie zutreffe.', 'BILD')
classifier.learn('„Ich bin eigentlich pansexuell und habe das bislang gar nicht gewusst“, erklärte Thorne in einem Interview in der Show „Good Morning America“ des US-Senders NBC', 'BILD')
classifier.learn('Was das bedeutet? Thorne: „Du magst eben, was du magst.“', 'BILD')
classifier.learn('Der feine Unterschied: Während für Bisexuelle sowohl Männer als auch Frauen infrage kommen, ist das Geschlecht für Pansexuelle generell kein Auswahlkriterium.', 'BILD')
classifier.learn('Bella selbst formulierte das so: „Es geht buchstäblich darum, die Persönlichkeit zu mögen. Du magst einfach ein Individuum.“', 'BILD')
classifier.learn('Briten-Regierung sieht Brexit-Gespräche vor dem Kollaps', 'BILD')
classifier.learn('London sticht Details zu Johnson-Merkel-Streit-Telefonat durch, um Kanzlerin die Schuld an einem Scheitern der Verhandlungen zuzuschieben ', 'BILD')
classifier.learn('Das ist passiert: Briten-Premier Boris Johnson (55) telefonierte am Morgen mit Bundeskanzlerin Angela Merkel (65, CDU). ', 'BILD')
classifier.learn('Die soll ihm dabei klargemacht haben: In der Frage der Grenze zwischen Irland und Nordirland müsse er kompromissbereit sein, sonst sei ein Brexit-Abkommen „erdrückend unwahrscheinlich“.', 'BILD')
classifier.learn('Merkel habe gefordert, dass Nordirland „für immer“ in der Zollunion bleibe.', 'BILD')
classifier.learn('Johnson habe darauf geantwortet: Ein Deal sei damit „im Wesentlichen unmöglich“, und zwar „nicht nur jetzt, sondern immer“.', 'BILD')
classifier.learn('Überhaupt passe dieser Stil nicht zu Merkel – ganz im Gegensatz zu Boris Johnson, der schon als EU-Korrespondent für den „Telegraph“ so manche EU-Geschichte verfälscht hatte.', 'BILD')
classifier.learn('Jetzt bekommt er seine Chance - und steht enorm unter Druck. Auch wenn er das anders sieht. ', 'BILD')
classifier.learn('Und weiter: „Ich hoffe, dass wir als Team ein gutes Spiel machen. Das wird ein fantastisches Spiel, ich freue mich darauf.“', 'BILD')
classifier.learn('Dazu sagt der Barca-Keeper: Ich mache mir da nicht viele Gedanken drüber. Ich habe mich die letzten Wochen auf den Fußball konzentriert. Jeder möchte spielen, so ist es auf jeder Position, nicht nur im Tor.', 'BILD')
classifier.learn('Zeugen hörten Täter „Allah“ sagen', 'BILD')
classifier.learn('Limburg in Aufruhr! Warum hat ein Mann offenbar gezielt versucht, mit einem Lkw andere Verkehrsteilnehmer zu rammen und ihnen Schaden zuzufügen?', 'BILD')
classifier.learn('Neun Menschen sind verletzt worden, als am Montag um 17.20 Uhr ein Mann in einem gestohlenen Laster offenbar absichtlich in sieben Autos crashte. ', 'BILD')
classifier.learn('Sein Blick habe gewirkt, als stünde er unter Drogeneinfluss.', 'BILD')
classifier.learn('Sie soll versucht haben, dem Unfallverursacher zu helfen. Ihrer Ansicht nach sprach der Mann Arabisch.', 'BILD')
classifier.learn('Weil er versucht haben soll, sie anzugreifen, und angeblich von „Allah“ sprach, hielten mehrere Menschen den mutmaßlichen Täter fest.', 'BILD')
classifier.learn('Eine Frau, die in einem Büro direkt an der Unfallstelle arbeitete, rannte nach draußen. Sie habe den Mann angesprochen, berichtete sie: „Er hat gesagt: ‚Mir tut alles weh.‘ Ich habe gefragt, wie er heißt. ', 'BILD')
classifier.learn('Er sagte mir, er heiße Mohammed.', 'BILD')
classifier.learn('SEK stürmt Wohnung in Langen', 'BILD')
classifier.learn('Unter ihnen der Fahrer, er wurde festgenommen! ', 'BILD')
classifier.learn('Der Täter ist syrischer Staatsbürger.', 'BILD')
classifier.learn('Joshua, joshua, joshi, Joshi, Preuß, preuß, Preuss, preuss', 'an Opfer')  //its 100% true.
classifier.learn('Jannik, jannik, Theinert, theinert', 'Besonders')

//Welt phrases(Not BILD! obviously)
classifier.learn('Es sind in diesen Tagen politische Gewitterstürme, gegen die sich Trump wappnen muss.', 'Not(Welt)')
classifier.learn('Im Sonnensystem gibt es mehrere Zonen, in denen sich viele Asteroiden aufhalten.', 'Not(Welt)')
classifier.learn('Mit dem Raumschiff „Starship“ und der Rakete „Super Heavy“ hat SpaceX-Chef Elon Musk die geplante nächste Generation seiner Raumfahrzeuge vorgestellt', 'Not(Welt)')
classifier.learn('Die neue Chefin des Internationale Währungsfonds zeichnet ein düsteres Bild der Weltwirtschaft.', 'Not(Welt)')
classifier.learn('Mit diesem alten Bauerntrick bekam man damals jede herum, und dem Angeber sind vermutlich scharenweise die tollsten Frauen verfallen.', 'Not(Welt)')
classifier.learn('Derzeit ist ein Komet auf der Durchreise. 2I/Borisov ist erst das zweite interstellare Objekt, dem Forscher beim Passieren unseres Sonnensystems zusehen können.', 'Not(Welt)')
classifier.learn('Wer eine Gehaltserhöhung anstrebt, sollte einkalkulieren, wie viel Budget das Unternehmen dafür hat.', 'Not(Welt)')
classifier.learn('Das Beratungsunternehmen Lurse hat bei Firmen aller Branchen die Erhöhungsbudgets für 2020 abgefragt und die Daten zusammengetragen.', 'Not(Welt)')
classifier.learn('In den Aufsichtsräten konzentriert sich die wahre Macht über Deutschlands Wirtschaft.', 'Not(Welt)')
classifier.learn('Die Deutsche Schutzvereinigung für Wertpapierbesitz (DSW) hat sich sämtliche Aufsichtsräte der Unternehmen im Dax, MDax und SDax angesehen und auf Basis ihrer Analyse eine Rangliste der mächtigsten Firmenaufseher erstellt.', 'Not(Welt)')
classifier.learn('Julian, julian, falck, Falck', 'Julian')
classifier.learn('Sebastian, sebastian, seb, pasieka, Pasieka', 'Sebastian')



//categorize the input and send a response with the category to
function handleClassify(request, response) {
    console.log('classify');
    var category = classifier.categorize(request.body.bild);
    response.send('It is ' + category);
}

this.handle = handleClassify;
