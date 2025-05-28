// PROMOTION
$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slide');
    const slideCount = slides.length;

    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var popupImage = document.getElementById('popup-image');
    var popupTitle = document.getElementById('popup-title');
    var popupDescription = document.getElementById('popup-description');
    var closeBtn = document.getElementsByClassName('close-btn')[0];

    function openPopup(imageSrc, title, description) {
        popupImage.src = imageSrc;
        popupTitle.textContent = title;
        popupDescription.textContent = description;
        popup.style.display = 'block';
    }

    closeBtn.onclick = function() {
        popup.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    }

    // Example data for pop-ups
    var promotions = [
        {
            buttonId: 'getOfferButton',
            imageSrc: './promotion_banner/2023_mirai.jpeg',
            title: 'Exclusive Trade-In Deal',
            description: 'Get up to $3000 trade-in bonus when you upgrade to a new model.'
        },
        {
            buttonId: 'detailsButton',
            imageSrc: './promotion_banner/2024_corola_hatchback.jpeg',
            title: 'Holiday Special - Free Accessories',
            description: 'Receive free accessories worth $500 with every new car purchase.'
        }
    ];

    // Add event listeners to buttons
    promotions.forEach(function(promo) {
        var button = document.getElementById(promo.buttonId);
        button.addEventListener('click', function() {
            openPopup(promo.imageSrc, promo.title, promo.description);
        });
    });
});

