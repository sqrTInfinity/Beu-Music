$(document).ready(function () {
    $("#blinding-lights").click(function () {
        $(".popup").addClass("active");

        return false;
    });

    $(".popup").click(function (e) {
        if (e.target !== this) return;

        $(this).removeClass("active");

        return false;
    });

    $(".playlist-btn").click(function () {
        let genre = $(this).attr("id");
        $(this).toggleClass("active");

        if (genre == "all") $(".list-albums > div").slideDown(500);
        else {
            $(".playlist-btn").removeClass("active");

            // remove all cols
            $(".list-albums > div").slideUp(500);

            setTimeout(() => {
                $(".list-albums > div#" + genre).slideDown(500);
            }, 500);
        }
        return false;
    });
});
