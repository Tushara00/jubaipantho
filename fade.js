<script>
    var Image = [
        'assets/images/IMG_1.jpg',
        'assets/images/IMG_2.jpg',
        'assets/images/IMG_3.jpg'
    ];

    var myImage = document.getElementById("myImage");
    var count_index = 0;

    function image_change() {
        count_index++;
        if (count_index >= Image.length) {
            count_index = 0;
        }
        myImage.style.opacity = 0; // Set opacity to 0 for fade effect
        myImage.src = Image[count_index];

        // Gradually increase the opacity over 1 second
        var fadeInInterval = setInterval(function() {
            if (myImage.style.opacity >= 1) {
                clearInterval(fadeInInterval); // Stop increasing opacity once it reaches 1
            } else {
                myImage.style.opacity = Number(myImage.style.opacity) + 0.01;
            }
        }, 10); // Adjust the interval time for a smoother fade effect

        setTimeout(image_change, 4000);
    }

    window.onload = image_change();
</script>