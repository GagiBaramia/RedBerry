function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("ProfilePicture");
        preview.src = src;
        preview.style.display = "block";
    }
}

$(function () {
    $('#Name_ID').on("input", function () {
        $('#CNT_Name').text($(this).val());
    });
});

$(function () {
    $('#Surname_ID').on("input", function () {
        $('#CNT_Surname').text($(this).val());
    });
});

$(function () {
    $('#Email_ID').on("input", function () {
        $('#CNT_Email').text($(this).val());
    });
});


$(function () {
    $('#Number_ID').on("input", function () {
        $('#CNT_Number').text($(this).val());
    });
});

$(function () {
    $('#About_ID').on("input", function () {
        $('#CNT_About').text($(this).val());
    });
});