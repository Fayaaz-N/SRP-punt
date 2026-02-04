# Petfinder – SRP Punt

Voor mijn eerste SRP-punt heb ik een website gemaakt op basis van een eigen ontwerp.

---

## Ontwerp in Figma

Als eerste stap heb ik een beginnerscursus Figma gevolgd. Daarmee heb ik geleerd hoe ik een simpele interface kan ontwerpen en hoe ik zelf een design kan maken.
Met deze kennis heb ik een app-achtig ontwerp gemaakt voor een project genaamd **Petfinder**.

Dit is mijn ontwerp:
https://www.figma.com/design/rJqAIOP0wVEAf9ukvIvuxe/Untitled?node-id=0-1&t=RN75TTHlp8TbHZiJ-1
---

## HTML en CSS training

Na het ontwerpen wilde ik mijn design ook echt omzetten naar een werkende website. Daarom heb ik de basistraining HTML gevolgd via LinkedIn Learning:

https://www.linkedin.com/learning/basistraining-html/wat-is-html?u=2132228

In deze cursus heb ik geleerd:

- wat HTML is en hoe je een webpagina opbouwt
- hoe je verschillende HTML-elementen gebruikt zoals `header`, `main`, `nav`, `article`, `button` en `img`
- hoe je structuur aanbrengt in je pagina
- hoe je met CSS een layout maakt en een design kunt namaken

---

## Wat ik zelf heb gebouwd

Met de kennis uit de cursus heb ik mijn eigen Figma design nagemaakt met:

- **HTML** voor de structuur
- **CSS** voor de styling en layout
- een beetje **JavaScript** voor interactieve onderdelen zoals het chat-versturen en navigatie

---

## Wat ik hiervan heb geleerd

Door dit SRP-punt heb ik geleerd hoe ik:

- een eigen design kan maken in Figma
- een ontwerp kan omzetten naar echte code
- layouts kan bouwen met HTML en CSS
- meerdere pagina’s kan opzetten zoals feed, inbox, profiel en chat
- eenvoudige interactie kan toevoegen met JavaScript

---

## Voorbeelden van code uit mijn project

Hieronder staan een paar stukjes code die laten zien wat ik heb toegepast in dit project.

---

### Navigatie met een bottom bar

Ik heb een vaste navigatiebalk gemaakt onderaan de pagina, zoals bij Instagram. Hiermee kan je makkelijk wisselen tussen Home, Inbox en Profiel.

```html
<nav class="bottombar">
  <a href="feed.html">
    <img src="img/icons/home.svg" alt="Home">
  </a>

  <a href="inbox.html">
    <img src="img/icons/chat.svg" alt="Inbox">
  </a>

  <a href="profile.html">
    <img src="img/icons/user.svg" alt="Profiel">
  </a>
</nav>
```

### Layout maken met Flexbox
Om de bottom bar netjes te verdelen over de breedte, heb ik Flexbox gebruikt:
```css
.bottombar {
  position: fixed;
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 78px;
  background: white;
}
```
### Chat bericht toevoegen met JavaScript
In mijn chatpagina kan je zelf een bericht typen.
Wanneer je op verstuur klikt, wordt het bericht automatisch toegevoegd aan de chat.
```js
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.className = "chat-msg me";
  msg.innerHTML = `<div class="chat-bubble">${text}</div>`;

  chat.appendChild(msg);
  input.value = "";
});
```

### Chat bubbles stylen (groen en wit)
Ik heb twee soorten berichtwolken gemaakt:

groen voor jezelf

wit voor de ander
```css
.chat-msg.me .chat-bubble {
  background: #68c365;
  color: white;
}

.chat-msg.other .chat-bubble {
  background: white;
  border: 1px solid rgba(0,0,0,0.1);
}
```

Waarom dit nuttig is voor mij
Ik vind coderen persoonlijk leuker dan alleen designen. Door dit project kan ik nu beide combineren:
ik kan zelf een ontwerp maken én het daarna ook zelf bouwen als website.
