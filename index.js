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



function NameValidation() {
    var form = document.getElementById("Form_ID");
    var name = document.getElementById("Name_ID").value;
    var text = document.getElementById("Name_Span");
    var pattern = /^[ა-ჰ]+$/;

    if (name.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = " ვალიდურია";
        text.style.color = "green";
        document.getElementById("Name_ID").style.border = "solid 2px green";
        document.getElementById("Name_ID").style.backgroundImage = "url('Valid_Icon.png')";
        document.getElementById("Name_ID").style.backgroundRepeat = "no-repeat"
        document.getElementById("Name_ID").style.backgroundPosition = "335px 12px";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid")
        text.innerHTML = " არავალიდურია";
        text.style.color = "red";
        document.getElementById("Name_ID").style.border = "solid 2px red";
        document.getElementById("Name_ID").style.backgroundImage = "url('Invalid_Icon.png')";
        document.getElementById("Name_ID").style.backgroundRepeat = "no-repeat"
        document.getElementById("Name_ID").style.backgroundPosition = "335px 12px";

    }

    if (name == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function SurnameValidation() {
    var form = document.getElementById("Form_ID");
    var name = document.getElementById("Surname_ID").value;
    var text = document.getElementById("Surname_Span");
    var pattern = /^[ა-ჰ]+$/;

    if (name.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = " ვალიდურია";
        text.style.color = "green";
        document.getElementById("Surname_ID").style.border = "solid 2px green";
        document.getElementById("Surname_ID").style.backgroundImage = "url('Valid_Icon.png')";
        document.getElementById("Surname_ID").style.backgroundRepeat = "no-repeat"
        document.getElementById("Surname_ID").style.backgroundPosition = "335px 12px";
    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid")
        text.innerHTML = " არავალიდურია";
        text.style.color = "red";
        document.getElementById("Surname_ID").style.border = "solid 2px red";
        document.getElementById("Surname_ID").style.backgroundImage = "url('Invalid_Icon.png')";
        document.getElementById("Surname_ID").style.backgroundRepeat = "no-repeat"
        document.getElementById("Surname_ID").style.backgroundPosition = "335px 12px";

    }

    if (name == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

// ---------------------------------------------

window.onbeforeunload = function () {
    localStorage.setItem(name, $('#Name_ID').val());
    localStorage.setItem(phone, $('#Phone_ID').val());
    localStorage.setItem(subject, $('#Name_ID').val());
}

window.onload = function () {
    var name = localStorage.getItem(name);
    var phone = localStorage.getItem(phone);
    if (name !== null) $('#Name_ID').val(name); if (phone !== null) $('#Phone_ID').val(phone);
    // ...
}