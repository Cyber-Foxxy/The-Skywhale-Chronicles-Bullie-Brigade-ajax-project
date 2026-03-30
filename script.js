$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    let output = "";

    $.each(data.characters, function (index, char) {
      output += `
        <div class="card" data-name="${char.name}">
          <img src="${char.image}" alt="${char.name}" class="dossier-img">
          <div class="info">
            <h2>${char.name}</h2>
            <p><span>Species:</span> ${char.species}</p>
            <p><span>Role:</span> ${char.role}</p>
            <p><span>Affiliation:</span> ${char.affiliation}</p>
          </div>
        </div>
      `;
    });

    // Inject the HTML into the gallery
    $("#gallery").html(output);

    // Apply your custom glow plugin
    $(".card").steamGlow();

    // --- LIGHTBOX LOGIC ---
    // This allows clicking images to see them full-screen
    $(".dossier-img").on("click", function () {
      const imgSrc = $(this).attr("src");
      const charName = $(this).closest(".card").data("name");

      $("#full-img").attr("src", imgSrc);
      $("#caption").text(charName);
      $("#image-modal").fadeIn(300).css("display", "flex");
    });

    // Close modal when clicking 'X' or the background
    $(".close-modal, #image-modal").on("click", function () {
      $("#image-modal").fadeOut(300);
    });

  }).fail(function() {
    console.error("Error: Could not load data.json. Check for syntax errors!");
  });

