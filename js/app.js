(async function () {

  try {
    const res = await fetch("menu.html");
    const html = await res.text();

    // zet bottom bar onderaan body
    document.body.insertAdjacentHTML("beforeend", html);

  } catch (err) {
    console.warn("menu.html niet gevonden");
  }

})();
