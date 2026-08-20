document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const catalogueGrid =
        document.getElementById("catalogueGrid");

    const catalogueHeader =
        document.querySelector(".catalogue-header");

    const originalProducts =
        Array.from(
            document.querySelectorAll(".catalogue-product")
        );

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

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const sidebar =
        document.getElementById("sidebar");


    /* =====================================================
       CATEGORY INFORMATION
    ===================================================== */

    const categoryInfo = {

        "Hospital Furniture": {
            title: "Hospital Furniture",
            label: "HOSPITAL FURNITURE",
            description:
                "Hospital beds and furniture designed for patient care and healthcare requirements."
        },

        "Oxygen": {
            title: "Oxygen Equipment",
            label: "OXYGEN",
            description:
                "Oxygen cylinders and concentrators for healthcare and home-care requirements."
        },

        "Wheelchair": {
            title: "Wheelchairs",
            label: "WHEELCHAIR",
            description:
                "Mobility solutions designed for comfortable patient movement and support."
        },

        "CPAP": {
            title: "CPAP Machines",
            label: "CPAP",
            description:
                "CPAP equipment designed for suitable sleep-care requirements."
        },

        "BiPAP": {
            title: "BiPAP Machines",
            label: "BIPAP",
            description:
                "Bi-level respiratory-support equipment for suitable healthcare requirements."
        },

        "Mobility Aids": {
            title: "Walkers",
            label: "MOBILITY AIDS",
            description:
                "Walking aids designed to provide everyday mobility support."
        },

        "Patient Monitoring": {
            title: "Patient Monitoring",
            label: "PATIENT MONITORING",
            description:
                "Equipment designed for suitable patient monitoring requirements."
        },

        "Critical Care": {
            title: "Critical Care",
            label: "CRITICAL CARE",
            description:
                "Respiratory-support equipment for suitable critical-care environments."
        },

        "Diagnostics": {
            title: "Diagnostic Equipment",
            label: "DIAGNOSTICS",
            description:
                "Equipment designed for basic patient measurements and diagnostics."
        },

        "Emergency": {
            title: "Emergency Care",
            label: "EMERGENCY",
            description:
                "Emergency transportation and urgent patient-care support."
        }

    };


    /* =====================================================
       GROUP PRODUCTS
    ===================================================== */

    const groupedProducts = {};


    originalProducts.forEach(function (product) {

        const category =
            product.dataset.category;


        if (!groupedProducts[category]) {

            groupedProducts[category] = [];

        }


        groupedProducts[category].push(product);

    });



    /* =====================================================
       GET PRODUCT DATA
    ===================================================== */

    function getProductData(product) {

        return {

            title:
                product.dataset.title ||
                "Healthcare Product",

            category:
                product.dataset.category ||
                "Healthcare",

            image:
                product.dataset.image ||
                "",

            description:
                product.dataset.description ||
                "Please contact OYA Health Care for more details."

        };

    }



    /* =====================================================
       CREATE MAIN CATEGORY VIEW
    ===================================================== */

    function showMainCatalogue() {

        catalogueGrid.innerHTML = "";

        catalogueGrid.className =
            "catalogue-grid category-grid-view";


        const oldBackButton =
            document.getElementById(
                "categoryBackButton"
            );


        if (oldBackButton) {

            oldBackButton.remove();

        }


        const heading =
            catalogueHeader.querySelector(
                ".catalogue-title span"
            );


        if (heading) {

            heading.textContent =
                "CATALOGUE";

        }


        Object.keys(groupedProducts).forEach(
            function (category) {

                const products =
                    groupedProducts[category];


                const info =
                    categoryInfo[category] || {

                        title: category,

                        label: category,

                        description:
                            "Healthcare products from OYA Health Care."

                    };


                const firstProduct =
                    getProductData(
                        products[0]
                    );


                const categoryCard =
                    document.createElement(
                        "article"
                    );


                categoryCard.className =
                    "catalogue-category";


                categoryCard.innerHTML = `

                    <div class="category-image-box">

                        <img
                            src="${firstProduct.image}"
                            alt="${info.title}"
                        >

                    </div>


                    <div class="category-content">

                        <span>
                            OYA COLLECTION
                        </span>


                        <h2>
                            ${info.title}
                        </h2>


                        <p>
                            ${info.description}
                        </p>


                        <strong>

                            <span>
                                ${products.length}
                                ${
                                    products.length === 1
                                    ? "product"
                                    : "products"
                                }
                            </span>

                            <b>↗</b>

                        </strong>

                    </div>

                `;


                categoryCard.addEventListener(
                    "click",
                    function () {

                        showCategoryViewer(
                            category
                        );

                    }
                );


                catalogueGrid.appendChild(
                    categoryCard
                );

            }
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =====================================================
       CATEGORY PRODUCT VIEWER
    ===================================================== */

    function showCategoryViewer(
        category
    ) {

        const products =
            groupedProducts[category] || [];


        if (!products.length) {

            return;

        }


        const info =
            categoryInfo[category] || {

                title: category,

                label: category,

                description:
                    ""

            };


        /* ================================================
           REMOVE OLD BACK BUTTON
        ================================================= */

        const oldBackButton =
            document.getElementById(
                "categoryBackButton"
            );


        if (oldBackButton) {

            oldBackButton.remove();

        }


        /* ================================================
           HEADER TITLE
        ================================================= */

        const heading =
            catalogueHeader.querySelector(
                ".catalogue-title span"
            );


        if (heading) {

            heading.textContent =
                info.title.toUpperCase();

        }


        /* ================================================
           CLEAR GRID
        ================================================= */

        catalogueGrid.innerHTML = "";

        catalogueGrid.className =
            "catalogue-grid category-viewer-grid";


        /* ================================================
           BACK BUTTON
        ================================================= */

        const backButton =
            document.createElement(
                "button"
            );


        backButton.id =
            "categoryBackButton";


        backButton.className =
            "category-back-button";


        backButton.innerHTML =
            "← Back to Catalogue";


        backButton.addEventListener(
            "click",
            function () {

                showMainCatalogue();

            }
        );


        catalogueGrid.before(
            backButton
        );


        /* ================================================
           CATEGORY VIEWER
        ================================================= */

        const viewer =
            document.createElement(
                "section"
            );


        viewer.className =
            "category-product-viewer";


        viewer.innerHTML = `

            <div class="viewer-left">

                <div class="viewer-main-image">

                    <img
                        id="viewerMainImage"
                        src=""
                        alt=""
                    >

                </div>


                <div
                    class="viewer-thumbnails"
                    id="viewerThumbnails"
                ></div>

            </div>


            <div class="viewer-right">

                <div class="viewer-category">
                    ${info.label}
                </div>


                <h1
                    id="viewerTitle"
                    class="viewer-title"
                >
                </h1>


                <p
                    id="viewerDescription"
                    class="viewer-description"
                >
                </p>


                <div class="viewer-divider"></div>


                <div class="viewer-details">

                    <span>
                        CATEGORY
                    </span>

                    <strong>
                        ${info.title}
                    </strong>

                </div>


                <div class="viewer-divider"></div>


                <div class="viewer-product-count">

                    ${products.length}
                    ${
                        products.length === 1
                        ? "PRODUCT"
                        : "PRODUCTS"
                    }

                </div>


                <a
                    href="tel:7021235223"
                    class="viewer-enquiry"
                >
                    Enquire Now
                    <span>↗</span>
                </a>

            </div>

        `;


        catalogueGrid.appendChild(
            viewer
        );


        /* ================================================
           ELEMENTS INSIDE VIEWER
        ================================================= */

        const mainImage =
            viewer.querySelector(
                "#viewerMainImage"
            );


        const viewerTitle =
            viewer.querySelector(
                "#viewerTitle"
            );


        const viewerDescription =
            viewer.querySelector(
                "#viewerDescription"
            );


        const thumbnails =
            viewer.querySelector(
                "#viewerThumbnails"
            );



        /* ================================================
           SHOW FIRST PRODUCT
        ================================================= */

        function selectProduct(
            product,
            index
        ) {

            const data =
                getProductData(
                    product
                );


            /* MAIN IMAGE */

            mainImage.src =
                data.image;

            mainImage.alt =
                data.title;


            /* TITLE */

            viewerTitle.textContent =
                data.title;


            /* DESCRIPTION */

            viewerDescription.textContent =
                data.description;


            /* ==========================================
               THUMBNAILS
            ========================================== */

            const thumbnailButtons =
                thumbnails.querySelectorAll(
                    ".viewer-thumbnail"
                );


            thumbnailButtons.forEach(
                function (button, buttonIndex) {

                    if (
                        buttonIndex === index
                    ) {

                        button.classList.add(
                            "active"
                        );

                    }

                    else {

                        button.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }



        /* ================================================
           CREATE THUMBNAILS
        ================================================= */

        products.forEach(
            function (product, index) {

                const data =
                    getProductData(
                        product
                    );


                const thumbnail =
                    document.createElement(
                        "button"
                    );


                thumbnail.className =
                    "viewer-thumbnail";


                thumbnail.type =
                    "button";


                thumbnail.innerHTML = `

                    <img
                        src="${data.image}"
                        alt="${data.title}"
                    >

                `;


                thumbnail.addEventListener(
                    "click",
                    function () {

                        selectProduct(
                            product,
                            index
                        );

                    }
                );


                thumbnails.appendChild(
                    thumbnail
                );

            }
        );


        /* ================================================
           FIRST PRODUCT
        ================================================= */

        selectProduct(
            products[0],
            0
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }



    /* =====================================================
       PRODUCT POPUP
    ===================================================== */

    function openProductPopup(
        product
    ) {

        const data =
            getProductData(
                product
            );


        modalImage.src =
            data.image;


        modalImage.alt =
            data.title;


        modalCategory.textContent =
            data.category.toUpperCase();


        modalTitle.textContent =
            data.title;


        modalDescription.textContent =
            data.description;


        const message =
            "Hi OYA Health Care, " +
            "I am interested in " +
            data.title +
            ". Please share details, pricing and availability.";


        whatsappBtn.href =
            "https://wa.me/917021235223?text=" +
            encodeURIComponent(
                message
            );


        productModal.classList.add(
            "active"
        );


        productModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }



    /* =====================================================
       PRODUCT CLICK SUPPORT
    ===================================================== */

    originalProducts.forEach(
        function (product) {

            product.addEventListener(
                "click",
                function () {

                    openProductPopup(
                        product
                    );

                }
            );

        }
    );



    /* =====================================================
       CLOSE PRODUCT POPUP
    ===================================================== */

    function closeProductPopup() {

        productModal.classList.remove(
            "active"
        );


        productModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProductPopup
        );

    }


    /* ================================================
       CLICK OUTSIDE POPUP
    ================================================= */

    if (productModal) {

        productModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    productModal
                ) {

                    closeProductPopup();

                }

            }
        );

    }


    /* ================================================
       ESCAPE
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (
                    productModal &&
                    productModal.classList.contains(
                        "active"
                    )
                ) {

                    closeProductPopup();

                }

            }

        }
    );



    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    if (
        mobileMenuButton &&
        sidebar
    ) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                sidebar.classList.toggle(
                    "open"
                );


                if (
                    sidebar.classList.contains(
                        "open"
                    )
                ) {

                    mobileMenuButton.textContent =
                        "×";

                }

                else {

                    mobileMenuButton.textContent =
                        "☰";

                }

            }
        );

    }



    /* =====================================================
       CLOSE MOBILE SIDEBAR OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !sidebar ||
                !mobileMenuButton
            ) {

                return;

            }


            if (
                !sidebar.classList.contains(
                    "open"
                )
            ) {

                return;

            }


            if (
                sidebar.contains(
                    event.target
                ) ||
                mobileMenuButton.contains(
                    event.target
                )
            ) {

                return;

            }


            sidebar.classList.remove(
                "open"
            );


            mobileMenuButton.textContent =
                "☰";

        }
    );



    /* =====================================================
       START WEBSITE
    ===================================================== */

    showMainCatalogue();


    console.log(
        "OYA Health Care catalogue ready."
    );

});
