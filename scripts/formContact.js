jQuery.noConflict();
const $ = window.jQuery;

// Функция контроля активных услуг
const showService = () => {
  const Element = document.querySelectorAll(".form-contact__service-button");

  // Добавляем обработчик события click к каждому элементу
  Element.forEach((button) => {
    button.addEventListener("click", function () {
      // Переключаем класс 'active' для текущего элемента
      this.classList.toggle("active");
    });
  });
};

showService();

$("#submitForm").on("click", () => {
  const form = $("#form-contact");
  const email = $("#email").val();
  const name = $("#name").val();
  const phone = $("#phone").val();
  const message = $("#message").val();
  const isChecked = $("#checkbox").is(":checked");
  const checkService = $(".form-contact__service-button.active");
  const servicesArray = Array.from(
    checkService,
    (element) => element.innerText
  );
  const successComponent = $(".success");
  const divError = $("<div>");

  if (name.trim() == "") {
    $(".errorName").text("Введите имя");
    $("#name").addClass("error");
    return false;
  } else {
    $(".errorName").text("");
    $("#name").removeClass("error");
  }

  if (email.trim() == "") {
    $(".errorEmail").text("Введите почту");
    $("#email").addClass("error");
    return false;
  } else {
    $(".errorEmail").text("");
    $("#email").removeClass("error");
  }

  if (phone.trim() == "" || phone.length < 10) {
    $(".errorPhone").text("Введите номер телефона");
    $("#phone").addClass("error");
    return false;
  } else {
    $(".errorPhone").text("");
    $("#phone").removeClass("error");
  }

  if (isChecked) {
    $.ajax({
      url: "send_mail.php",
      type: "POST",
      cache: false,
      data: {
        name: name,
        email: email,
        phone: phone,
        service: servicesArray,
        message: message,
      },
      dataType: "html",
      beforeSend: () => {
        $("#submitForm").prop("disabled", true);
      },
      success: (data) => {
        if (!data) {
          form.append(divError);
          divError.text(
            "Пожалуйста, заполните все обязательные поля корректно."
          );
          divError.css({
            color: "red",
            "font-size": "16px",
          });
        } else {
          form.trigger("reset");
        }
        form.addClass("d-n");
        $(".footer__line-image").css("top", "-270px");
        // После успешной отправки формы
        // Показываем компонент успеха
        successComponent.css({
          display: "block",
        });
        // Через 4 секунд скрываем компонент успеха
        setTimeout(() => {
          successComponent.css({
            display: "none",
          });
        }, 4000);
        $("#submitForm").prop("disabled", false);
      },
    });
  }
});

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  initialCountry: "ru",
  autoInsertDialCode: true,
  nationalMode: false,
  onlyCountries: [
    "ru",
    "pt",
    "ly",
    "by",
    "pl",
    "lr",
    "ua",
    "ph",
    "lv",
    "tm",
    "pe",
    "kg",
    "tr",
    "py",
    "xk",
    "tn",
    "pg",
    "ke",
    "tj",
    "ps",
    "kz",
    "tw",
    "pk",
    "jp",
    "sy",
    "no",
    "it",
    "ch",
    "kp",
    "il",
    "se",
    "nz",
    "ie",
    "sd",
    "nl",
    "iq",
    "es",
    "np",
    "ir",
    "ss",
    "ms",
    "id",
    "kr",
    "mn",
    "fr",
    "si",
    "md",
    "fi",
    "sk",
    "mh",
    "eg",
    "sg",
    "mt",
    "ee",
    "rs",
    "my",
    "cn",
    "sn",
    "lu",
    "af",
    "sa",
    "lt",
    "al",
    "ro",
    "li",
    "dz",
    "ad",
    "ao",
    "am",
    "at",
    "az",
    "be",
  ],
  // dropdownContainer: document.querySelector("#dropd"),
});
