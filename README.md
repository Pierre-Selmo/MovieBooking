# MovieBooking

Moviebooking är en webbapplikation som gör det möjligt för användare att boka biobiljetter, Film informationen och bijettens priser hämtas från JSON servern och presenteras för användaren. Användare kan välja en film från en lista, välja sittplatser och boka biljetter.

## Teknologier:
- **HTML:** För strukturen av hemsidan
- **CSS:** För att styla användargränssnittet
- **Javascript:** För att skapa funktionalitet och logik
- **JSON Server:** för att simulera ett API och hantera filmer i en lokal JSON-fil
- **ESLint:** för att hjälpa till med kodkvalitet

## Funktioner

### För Användare:
- Välj en film från en lista med filmer
- Välj lediga platser från dom tillgängliga stolarna
- Boka biljetter och se filmens affisch och pris 

### Systemet:
- När en film väljs uppdateras biljettpriserna per person
- Visar filmens affisch, pris och år
- Användaren kan bara välja lediga sittplatser
- Val av film och sittplatser uppdaterar informationen på sidan omedelbart
