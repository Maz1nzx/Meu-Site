function expandFAQ() {
  const faqDiv = document.getElementById('faq');
  const faqText = document.getElementById('faqText');

  faqDiv.classList.toggle('expanded'); // Toggle a classe que aumenta a altura

  if (faqDiv.classList.contains('expanded')) {
      faqText.style.display = 'block'; // Mostrar o texto
  } else {
      faqText.style.display = 'none'; // Esconder o texto
  }
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activee");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



$('.carousel').carousel({
  interval: 2000
})