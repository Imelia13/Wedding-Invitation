const music = document.getElementById("background-music");

function playWeddingMusic() {
    if (!music) return;

    music.play().catch((error) => {
        console.log("Musik gagal diputar:", error);
    });
}

document.addEventListener("click", function () {
    playWeddingMusic();
}, { once: true });

//NAVBAR OPENING
$(document).ready(function () {

    var $nav = $('.wedding-nav');

    // Buat tombol garis tiga horizontal
    if ($nav.find('.wedding-nav-toggle').length === 0) {
        $nav.prepend(
            '<button type="button" class="wedding-nav-toggle" ' +
            'aria-label="Buka menu navigasi" aria-expanded="false">' +
            '<span></span><span></span><span></span>' +
            '</button>'
        );
    }

    // Buka dan tutup menu
    $nav.on('click', '.wedding-nav-toggle', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var isOpen = $nav.hasClass('is-open');

        $nav.toggleClass('is-open', !isOpen);

        $(this)
            .attr('aria-expanded', String(!isOpen))
            .attr(
                'aria-label',
                isOpen ? 'Buka menu navigasi' : 'Tutup menu navigasi'
            );
    });

    // Tutup menu setelah tautan diklik
    $nav.on('click', 'a', function () {
        $nav.removeClass('is-open');

        $nav.find('.wedding-nav-toggle')
            .attr('aria-expanded', 'false')
            .attr('aria-label', 'Buka menu navigasi');
    });

    // Tutup menu saat area luar diklik
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.wedding-nav').length) {
            $nav.removeClass('is-open');

            $nav.find('.wedding-nav-toggle')
                .attr('aria-expanded', 'false')
                .attr('aria-label', 'Buka menu navigasi');
        }
    });

    // Reset ketika kembali ke desktop
    $(window).on('resize', function () {
        if (window.innerWidth > 767) {
            $nav.removeClass('is-open');

            $nav.find('.wedding-nav-toggle')
                .attr('aria-expanded', 'false');
        }
    });

});

// COUNTDOWN PERNIKAHAN DAN INTERAKSI HALAMAN
$(document).ready(function () {

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: false,
            offset: 80,
            mirror: false,
            anchorPlacement: "top-bottom"
        });
    }

    if (typeof Swiper !== "undefined" && $(".gallery-swiper").length) {
        new Swiper(".gallery-swiper", {
            slidesPerView: 1,
            spaceBetween: 18,
            speed: 650,
            grabCursor: true,
            watchOverflow: true,
            rewind: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            pagination: {
                el: ".gallery-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".gallery-next",
                prevEl: ".gallery-prev"
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            },
            a11y: {
                enabled: true
            }
        });
    }

    var eventDate = new Date(2026, 10, 19, 0, 0, 0).getTime();
    var countdownInterval;

    // Format angka menjadi dua digit
    function formatTime(value) {
        return String(value).padStart(2, "0");
    }

    // Perbarui countdown menggunakan selector dan .text() dari jQuery
    function updateCountdown() {
        var $days = $("#days");
        var $hours = $("#hours");
        var $minutes = $("#minutes");
        var $seconds = $("#seconds");

        // Hentikan timer jika elemen countdown tidak lengkap
        if (!$days.length || !$hours.length || !$minutes.length || !$seconds.length) {
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            return;
        }

        var remainingTime = eventDate - Date.now();

        // Jika waktu acara sudah tiba, tampilkan nol
        if (remainingTime <= 0) {
            $days.text("00");
            $hours.text("00");
            $minutes.text("00");
            $seconds.text("00");

            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            return;
        }

        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        var minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        var seconds = Math.floor((remainingTime / 1000) % 60);

        $days.text(days);
        $hours.text(formatTime(hours));
        $minutes.text(formatTime(minutes));
        $seconds.text(formatTime(seconds));
    }

    updateCountdown();

    // Perbarui countdown setiap detik
    countdownInterval = setInterval(updateCountdown, 1000);

    // Navigasi antarbagian menggunakan animasi jQuery
    $(".wedding-nav a[href^='#']").on("click", function (event) {
        var targetSelector = $(this).attr("href");
        var $target = $(targetSelector);

        if ($target.length) {
            event.preventDefault();

            $("html, body").stop(true).animate(
                { scrollTop: $target.offset().top },
                600
            );
        }
    });

    // Tampilkan nama file ketika pengunjung memilih foto/video untuk ucapan
    $("#wishes-file").on("change", function () {
        var file = this.files && this.files.length ? this.files[0] : null;
        var $uploadText = $(".wishes-upload-text");

        if (file) {
            $uploadText.text(file.name);
        } else {
            $uploadText.text("Drop files here to upload");
        }
    });
});


/* Perbarui posisi animasi setelah seluruh gambar selesai dimuat. */
$(window).on("load", function () {
    if (typeof AOS !== "undefined") {
        AOS.refresh();
    }
});


/* WISHES */
var wishesList = $("#wishes-list");
var wishesEmpty = $("#wishes-empty");

$("#wishes-form").on("submit", function (event) {
    event.preventDefault();

    var nama = $("#wishes-name").val().trim();
    var ucapan = $("#wishes-message").val().trim();

    if (!nama || !ucapan) {
        alert("Silakan isi nama dan ucapan terlebih dahulu.");
        return;
    }

    // Buat elemen ucapan dengan aman
    var card = $("<div>").addClass("wishes-card");

    var nameElement = $("<p>")
        .addClass("wishes-card-name")
        .text(nama);

    var messageElement = $("<p>")
        .addClass("wishes-card-message")
        .text(ucapan);

    var dateElement = $("<small>")
        .addClass("wishes-card-date")
        .text(new Date().toLocaleString("id-ID"));

    card.append(nameElement, messageElement, dateElement);

    // Tambahkan ucapan terbaru ke bagian paling atas
    wishesList.prepend(card);

    // Sembunyikan pesan jika belum ada ucapan
    wishesEmpty.hide();

    // Kosongkan formulir setelah berhasil ditampilkan
    $("#wishes-name").val("");
    $("#wishes-message").val("");
    $("#wishes-file").val("");
    $(".wishes-upload-text").text("Drop files here to upload");

    // Tampilkan notifikasi
    alert("Terima kasih! Ucapan kamu berhasil ditampilkan.");

    // Gulir ke daftar ucapan
    $("html, body").animate({
        scrollTop: wishesList.offset().top - 100
    }, 500);
});
