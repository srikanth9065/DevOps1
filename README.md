# Betygsgrundande uppgift för DevOps kurs
Detta är vårt inlämningsarbete för kursen DevOps 1. Arbetet består i att arbeta med en webshop och samtidigt integrera testning, automatisering och CI/CD (continuous integration/continuous deployment). Vi har en fungerande webshop med ett antal påhittade varor som man kan lägga i varukorgen och sedan lägga sin order. Ordrarna sparas i en databas och kan ses. Vi har ett antal användare med olika rättigheter i systemet.

Vi har arbetat med git som versionshanterare. Där har vi dev- och mainbranchen som är skyddade och så har vi diverse feature-branches som vi sedan har mergat till dev-branchen.

För testning av frontend använder vi jest. För att testa REST-api använder vi Postman/Newman. Vi använder även Webdriver.IO som headless browser. För varje pull request till dev eller main så sker tester automatiskt via GitHub actions.

Sammanfattat en webshop som testar våra kunskaper inom CI/CD.
-------------------------------------------------------------
