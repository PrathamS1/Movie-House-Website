function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
//Scroll to Top
// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function applyFilters(){
    document.getElementById('filters').style.display = "grid";
}

function submitFilter(event) {
    event.preventDefault();
    var checkboxes = document.querySelectorAll('.genre');  
    var selectedValues = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedValues.push(checkboxes[i].value);
      }
    }
    var cardContainer = document.getElementById("explore");
    var cards = cardContainer.getElementsByClassName("cards");
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    for (var i = 0; i < cards.length; i++) {
        var options = cards[i].getAttribute("category");
        if (selectedValues.includes(options)) {
        cards[i].style.display = "grid";
        }
    }
    // Display the selected values (you can modify this part to do whatever you want with the values)
    //alert("Selected values: " + selectedValues.join(", "));
}
  
var submitButton = document.getElementById("filterSubmit");
submitButton.addEventListener("click", submitFilter);
  

// Function to handle the search input event
function handleSearchInput() {
    var searchInput = document.getElementById("searchInput").value;
    var searchQuery = searchInput.toLowerCase();
    var cards = document.getElementsByClassName("cards");
    for (var i = 0; i < cards.length; i++) {
    var cardText = cards[i].getAttribute("name");
    var options = cards[i].getAttribute("category");
    // Check if the card text or options attribute contains the search query
    if (cardText.includes(searchQuery) || options.includes(searchQuery)) {
        cards[i].style.display = "grid";
    } else {
        cards[i].style.display = "none";
    }
    }
}
//event listeners to the search input and button
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("change", handleSearchInput);


// Function to sort cards alphabetically
function sortAlphabetically() {
    var cardContainer = document.getElementById("explore");
    var cards = Array.from(cardContainer.getElementsByClassName("cards"));
  
    cards.sort(function (a, b) {
      return a.textContent.localeCompare(b.textContent);
    });
  
    cards.forEach(function (card) {
      cardContainer.appendChild(card);
    });
}
  
  // Function to sort cards by rating
function sortByRating() {
    var cardContainer = document.getElementById("explore");
    var cards = Array.from(cardContainer.getElementsByClassName("cards"));
    cards.sort(function (a, b) {
        var ratingSpanA = a.querySelector(".rate");
        var ratingSpanB = b.querySelector(".rate");
        var ratingA = parseFloat(ratingSpanA.textContent);
        var ratingB = parseFloat(ratingSpanB.textContent);
        return ratingB - ratingA;
    });
    cards.forEach(function (card) {
        cardContainer.appendChild(card);
    });
}
  
  // Function to filter cards by year range
function filterByYear() {
    var cardContainer = document.getElementById("explore");
    var cards = Array.from(cardContainer.getElementsByClassName("cards"));
    var yearRange = document.getElementById("yearRange").value.split("-"); // Get selected year range
  
    var minYear = parseInt(yearRange[0]);
    var maxYear = parseInt(yearRange[1]);
    cards.forEach(function (card) {
      var yearSpan = card.querySelector("#year");
      var year = parseInt(yearSpan.textContent);
  
      if (year >= minYear && year <= maxYear) {
        card.style.display = "grid";
      } else {
        card.style.display = "none";
      }
    });
}
  
  // Function to reset sorting and filtering
function resetSorting() {
    var cardContainer = document.getElementById("explore");
    var cards = Array.from(cardContainer.getElementsByClassName("cards"));
    cards.forEach(function (card) {
      card.style.display = "grid"; // Reset card visibility
      cardContainer.appendChild(card); // Restore original order
    });
}
  
// Event listeners for sorting and filtering buttons
document.getElementById("Byalpha").addEventListener("click", sortAlphabetically);
document.getElementById("Byrating").addEventListener("click", sortByRating);
document.getElementById("yearRange").addEventListener("change", filterByYear);
document.getElementById("reset").addEventListener("click", resetSorting);
