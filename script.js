 

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn2");
    var positions = [
        { x: 70, y: 40 },
        { x: -150, y: -250 },
        { x: -140, y: 65 },
        { x: 40, y: -250 },
        { x: -50, y: -120 },
        { x: -50, y: -340 }
    ];
    var currentPosition = 0;

    
    function moveButtonToPosition(index) {
        var position = positions[index];
        button.style.left = position.x + "px";
        button.style.top = position.y + "px";
    }

   
    button.addEventListener("click", function() {
        currentPosition++;
        if (currentPosition >= positions.length) {
            currentPosition = 0;
        }
        moveButtonToPosition(currentPosition);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("changeImageButton");
    var image = document.getElementById("img1");
    var textElement = document.getElementById("title1");
    var imageIndex = 1; 

    button.addEventListener("click", function() {
        imageIndex++; 
        if (imageIndex > 2) { 
            imageIndex = 1;
        }
        image.src = "mcqueenAndSally2.jpg"; 
        image.alt = "Resim " + imageIndex; 
        
        changeImageButton.style.display = "none"; 
        btn2.style.display = "none"; 

        textElement.textContent = "";
        var newText = document.createElement("p");
        newText.textContent = "Kabul edeceğini biliyordum :)" ;
        textElement.appendChild(newText);
   });
});

