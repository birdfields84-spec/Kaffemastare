// Vänta tills DOM:en har laddats helt
document.addEventListener("DOMContentLoaded", function() {

    // 1. Spåra formulärinsändningar lokalt innan de skickas vidare (Bra ställe att lägga till dataLayer för GA4 senare)
    const forms = document.querySelectorAll("form");
    
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            console.log("Formulär skickat: " + form.id);
        });
    });

    // 2. Anpassa tack-sidan dynamiskt baserat på vilket formulär användaren använde
    if (window.location.pathname.includes("thank-you.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        const thankYouMessage = document.getElementById("thank-you-message");

        if (thankYouMessage) {
            if (urlParams.has("solution_type")) {
                thankYouMessage.innerText = "Tack för din offertförfrågan gällande våra kaffelösningar! En av våra experter i Sollentuna kommer att titta på dina behov och återkomma med ett skräddarsytt förslag.";
            } else if (urlParams.has("event_date")) {
                thankYouMessage.innerText = "Tack! Vi har tagit emot din förfrågan om barista till ditt event. Vi kontrollerar tillgängligheten för det valda datumet och återkommer inom kort.";
            } else if (urlParams.has("consent")) {
                thankYouMessage.innerText = "Välkommen till kaffeklubben! Du är nu registrerad som prenumerant på vårt nyhetsbrev. Håll utkik i din inkorg efter din första kaffeuppdatering.";
            }
        }
    }
});