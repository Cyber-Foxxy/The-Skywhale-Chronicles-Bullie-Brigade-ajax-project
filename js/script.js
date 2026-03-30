$(document).ready(function () {

  $.getJSON("data.json", function (data) {

    let output = "";

    $.each(data.characters, function (index, char) {

      output += `
        <div class="card">
          <img src="${char.image}">
          <div class="info">
            <h2>${char.name}</h2>
            <p><span>Species:</span> ${char.species}</p>
            <p><span>Role:</span> ${char.role}</p>
            <p><span>Affiliation:</span> ${char.affiliation}</p>
          </div>
        </div>
      `;

    });

    $("#gallery").html(output);

    // Apply plugin
    $(".card").steamGlow();

  });

});