document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            portfolioCards.forEach((card) => {
                const cardCategory = card.getAttribute("data-category");
                if (filterValue === "all" || filterValue === cardCategory) {
                    card.classList.remove("hide");
                } else {
                    card.classList.add("hide");
                }
            });
        });
    });

    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoIframe");
    const playButtons = document.querySelectorAll(".play-btn");
    const closeBtn = document.querySelector(".close-btn");

    playButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const videoSrc = button.getAttribute("data-video");
            iframe.src = videoSrc + "?autoplay=1";
            modal.style.display = "flex";
        });
    });

    const closeModal = () => {
        modal.style.display = "none";
        iframe.src = "";
    };

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });
});