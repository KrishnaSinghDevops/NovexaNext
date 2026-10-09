$(function () {
  // Automatically mark the current page in the navigation.
  const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  $(".navbar .nav-link").each(function () {
    const href = (($(this).attr("href") || "").split("#")[0]).toLowerCase();
    if (href === currentPage) $(this).addClass("active").attr("aria-current", "page");
  });

  // Current year in footer.
  $("#currentYear").text(new Date().getFullYear());

  // Lightweight client-side contact form validation/demo feedback.
  // Formspree contact form submission
  $("#contactForm").on("submit", function (event) {
    event.preventDefault();

    const form = this;
    const feedback = $("#formFeedback");
    const button = $(form).find('button[type="submit"]');
    const originalButtonText = button.html();

    feedback.addClass("d-none").removeClass("alert-success alert-danger");

    // Browser validation
    if (!form.checkValidity()) {
      $(form).addClass("was-validated");
      form.reportValidity();
      return;
    }

    button.prop("disabled", true).text("Sending...");

    $.ajax({
      url: $(form).attr("action"),
      method: "POST",
      data: $(form).serialize(),
      dataType: "json",
      headers: {
        Accept: "application/json"
      }
    })
      .done(function () {
        feedback
          .removeClass("d-none alert-danger")
          .addClass("alert-success")
          .text("Thank you! Your enquiry has been sent successfully.");

        form.reset();
        $(form).removeClass("was-validated");
      })
      .fail(function (xhr) {
        let message =
          "We couldn't send your enquiry. Please try again in a moment.";

        if (xhr.responseJSON && xhr.responseJSON.errors) {
          message = xhr.responseJSON.errors
            .map(function (error) {
              return error.message;
            })
            .join(" ");
        }

        feedback
          .removeClass("d-none alert-success")
          .addClass("alert-danger")
          .text(message);
      })
      .always(function () {
        button.prop("disabled", false).html(originalButtonText);
      });
  });

  // Smooth-scroll for in-page links, with a small offset for the sticky navbar.
  $('a[href^="#"]').on("click", function (event) {
    const target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: target.offset().top - 82 }, 450);
    }
  });
});
