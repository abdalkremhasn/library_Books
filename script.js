document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".person-body").forEach(card => {
        let paragraph = card.querySelector(".person-text");
        let readMoreBtn = card.querySelector(".read-more");
        let fullText = paragraph.textContent;

        if (fullText.length > 75) {
            let shortText = fullText.substring(0, 100) + "...";
            paragraph.textContent = shortText;
            
            readMoreBtn.addEventListener("click", function (e) {
                e.preventDefault();
                if (paragraph.textContent === shortText) {
                    paragraph.textContent = fullText;
                    readMoreBtn.textContent = "Show Less";
                } else {
                    paragraph.textContent = shortText;
                    readMoreBtn.textContent = "Read More";
                }
            });
        } else {
            readMoreBtn.style.display = "none";
        }
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    var icon = document.getElementById('dark');
    var body = document.getElementById('body');
    
    icon.onclick = function () {
      body.classList.toggle('dark');
    };
  });

