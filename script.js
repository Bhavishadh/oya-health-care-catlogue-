document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CATEGORY ELEMENTS
    ===================================================== */

    const categoryCards =
        document.querySelectorAll(".category-card");

    const categoryBlocks =
        document.querySelectorAll(".category-block");


    /* =====================================================
       CATEGORY POPUP
    ===================================================== */

    const categoryModal =
        document.getElementById("categoryModal");

    const categoryModalClose =
        document.getElementById("categoryModalClose");

    const categoryModalBack =
        document.getElementById("categoryModalBack");

    const categoryModalTitle =
        document.getElementById("categoryModalTitle");

    const categoryModalDescription =
        document.getElementById("categoryModalDescription");

    const categoryModalProducts =
        document.getElementById("categoryModalProducts");


    /* =====================================================
       PRODUCT DETAIL POPUP
    ===================================================== */

    const productModal =
        document.getElementById("productModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalImage =
        document.getElementById("modalImage");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalDescription =
        document.getElementById("modalDescription");

    const whatsappBtn =
        document.getElementById("whatsappBtn");


    /* =====================================================
       CATEGORY DATA
    ===================================================== */

    const categoryData = {};


    categoryBlocks.forEach(function (category) {

        const title =
            category.querySelector(
                ".category-copy h3"
            );

        const description =
            category.querySelector(
                ".category-copy p"
            );


        categoryData[category.id] = {

            title: title
                ? title.textContent.trim()
                : "Healthcare",

            description: description
                ? description.textContent.trim()
                : ""

        };

    });


    /* =====================================================
       PRODUCT DESCRIPTIONS
    ===================================================== */

    const descriptions = {

        "Manual Hospital Bed":
            "A practical hospital bed designed for patient comfort, positioning and everyday clinical care.",

        "Semi-Fowler Bed":
            "A versatile hospital bed designed for comfortable patient positioning and everyday healthcare use.",

        "Fowler Hospital Bed":
            "A reliable hospital bed designed for convenient patient positioning and professional care.",

        "2-Function Hospital Bed":
            "A functional hospital bed designed for dependable patient care and comfortable positioning.",

        "3-Function Hospital Bed":
            "A multi-function hospital bed designed for flexible patient positioning and professional healthcare environments.",

        "4-Function Hospital Bed":
            "An advanced multi-function hospital bed designed for flexible positioning and professional healthcare environments.",

        "Folding Hospital Bed":
            "A practical folding hospital bed designed for flexible healthcare and patient-care requirements.",


        "Oxygen Cylinder \"5Ltr\"":
            "A compact oxygen cylinder suitable for appropriate oxygen-support requirements.",

        "Oxygen Cylinder \"10Ltr\"":
            "A higher-capacity oxygen cylinder suitable for appropriate medical and healthcare applications.",

        "Oxygen Concentrator":
            "A convenient oxygen-support device designed for suitable healthcare and home-care applications.",


        "Standard Manual Wheelchair":
            "A practical mobility solution designed for comfortable everyday movement and patient support.",

        "Folding Wheelchair":
            "A convenient foldable mobility solution designed for easier transport and storage.",

        "Commode Wheelchair":
            "A mobility and patient-care solution designed for additional convenience and support.",

        "Reclining Wheelchair":
            "A supportive wheelchair designed with reclining functionality for enhanced patient comfort.",


        "Standard CPAP Machine":
            "A CPAP solution designed for suitable sleep-care requirements.",

        "Auto CPAP (APAP) Machine":
            "An auto-adjusting CPAP solution designed for suitable sleep-care requirements.",

        "Portable CPAP Machine":
            "A compact CPAP option designed for convenient use.",


        "Standard BiPAP Machine":
            "A bi-level respiratory-support solution designed for suitable healthcare requirements.",

        "Portable BiPAP Machine":
            "A portable respiratory-support option designed for convenient handling and use.",

        "Auto BiPAP Machine":
            "An adaptive BiPAP option designed for suitable respiratory support.",


        "Standard Walker":
            "A dependable mobility aid designed to provide walking support and stability.",

        "Folding Walker":
            "A practical folding mobility aid designed for easier storage and transportation.",

        "Adjustable Walker":
            "A height-adjustable mobility aid designed for adaptable everyday walking support.",


        "ICU Ventilator":
            "A critical-care respiratory support device intended for appropriate clinical environments.",

        "Patient Monitor":
            "A patient-monitoring solution designed for suitable healthcare monitoring requirements.",

        "Pulse Oximeter":
            "A compact diagnostic device for measuring oxygen saturation and pulse rate.",

        "Ambulance Service (24/7)":
            "Emergency transportation support for urgent patient-care requirements."

    };


    /* =====================================================
       GET PRODUCT DATA
    ===================================================== */

    function getProductData(card) {

        const image =
            card.querySelector(
                ".product-image img"
            );

        const title =
            card.querySelector("h4");

        const category =
            card.querySelector(
                ".product-info span"
            );


        return {

            title: title
                ? title.textContent.trim()
                : "Healthcare Product",

            category: category
                ? category.textContent.trim()
                : "Healthcare",

            /*
             * IMPORTANT:
             * Uses your ORIGINAL image filename.
             * Nothing is renamed.
             */

            image: image
                ? image.getAttribute("src")
                : "",

            alt: image
                ? image.getAttribute("alt")
                : ""

        };

    }


    /* =====================================================
       OPEN CATEGORY POPUP
    ===================================================== */

    function openCategory(categoryId) {

        const category =
            document.getElementById(
                categoryId
            );


        if (!category) {

            console.error(
                "Category not found:",
                categoryId
            );

            return;

        }


        const info =
            categoryData[categoryId];


        /* Category title */

        categoryModalTitle.textContent =
            info
                ? info.title
                : "Healthcare";


        /* Category description */

        categoryModalDescription.textContent =
            info
                ? info.description
                : "";


        /* Clear old products */

        categoryModalProducts.innerHTML = "";


        /*
         * IMPORTANT:
         * Get products ONLY from
         * the selected category.
         */

        const products =
            category.querySelectorAll(
                ".product-card"
            );


        products.forEach(
            function (product) {

                const data =
                    getProductData(
                        product
                    );


                const productCard =
                    document.createElement(
                        "div"
                    );


                productCard.className =
                    "category-popup-product";


                productCard.innerHTML = `

                    <div class="category-popup-image">

                        <img
                            src="${data.image}"
                            alt="${data.alt}"
                        >

                    </div>

                    <div class="category-popup-info">

                        <span>
                            ${data.category}
                        </span>

                        <h4>
                            ${data.title}
                        </h4>

                    </div>

                `;


                /*
                 * Click product
                 * → product popup
                 */

                productCard.addEventListener(
                    "click",
                    function () {

                        openProduct(
                            data
                        );

                    }
                );


                categoryModalProducts.appendChild(
                    productCard
                );

            }
        );


        /* Show category popup */

        categoryModal.classList.add(
            "active"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    /* =====================================================
       CATEGORY CARD CLICK
    ===================================================== */

    categoryCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const categoryId =
                        card.getAttribute(
                            "data-category"
                        );


                    openCategory(
                        categoryId
                    );

                }
            );

        }
    );


    /* =====================================================
       CLOSE CATEGORY POPUP
    ===================================================== */

    function closeCategory() {

        categoryModal.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    categoryModalClose.addEventListener(
        "click",
        closeCategory
    );


    categoryModalBack.addEventListener(
        "click",
        closeCategory
    );


    categoryModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                categoryModal
            ) {

                closeCategory();

            }

        }
    );


    /* =====================================================
       OPEN PRODUCT POPUP
    ===================================================== */

    function openProduct(product) {

        modalImage.src =
            product.image;

        modalImage.alt =
            product.alt;


        modalTitle.textContent =
            product.title;


        modalCategory.textContent =
            product.category;


        modalDescription.textContent =
            descriptions[
                product.title
            ] ||
            "A quality healthcare solution from OYA Healthcare.";


        /* WhatsApp */

        const message =
            "Hi OYA Healthcare, " +
            "I am interested in " +
            product.title +
            ". Please share details, pricing and availability.";


        whatsappBtn.href =
            "https://wa.me/917021235223?text=" +
            encodeURIComponent(
                message
            );


        /*
         * Close category popup
         * before opening product popup.
         */

        categoryModal.classList.remove(
            "active"
        );


        /* Open product popup */

        productModal.classList.add(
            "active"
        );

        productModal.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    /* =====================================================
       CLOSE PRODUCT POPUP
    ===================================================== */

    function closeProduct() {

        productModal.classList.remove(
            "active"
        );

        productModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    modalClose.addEventListener(
        "click",
        closeProduct
    );


    /* Click outside */

    productModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                productModal
            ) {

                closeProduct();

            }

        }
    );


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (
                    productModal.classList.contains(
                        "active"
                    )
                ) {

                    closeProduct();

                }
                else if (
                    categoryModal.classList.contains(
                        "active"
                    )
                ) {

                    closeCategory();

                }

            }

        }
    );


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.querySelector(
            ".menu-btn"
        );

    const navigation =
        document.querySelector(
            ".nav-links"
        );


    if (
        menuButton &&
        navigation
    ) {

        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle(
                    "open"
                );


                menuButton.textContent =
                    navigation.classList.contains(
                        "open"
                    )
                        ? "×"
                        : "☰";

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navigation.classList.remove(
                                "open"
                            );

                            menuButton.textContent =
                                "☰";

                        }
                    );

                }
            );

    }


    console.log(
        "OYA Healthcare two-level popup system ready."
    );

});