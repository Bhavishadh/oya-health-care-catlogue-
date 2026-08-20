document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       OYA HEALTH CARE - MAIN JAVASCRIPT
    ===================================================== */

    const grid = document.querySelector(".catalogue-grid");
    const catalogueTitle = document.querySelector(".catalogue-title span");

    if (!grid) {
        console.error("Catalogue grid not found.");
        return;
    }


    /* =====================================================
       CATEGORY DATA
    ===================================================== */

    const categories = [
        {
            name: "Hospital Furniture",
            category: "Hospital Furniture",
            description:
                "Hospital beds and furniture designed for patient care and healthcare requirements.",
            products: [
                {
                    name: "Hospital Bed",
                    image: "images/hospitalbed.webp",
                    description:
                        "Hospital bed designed for patient comfort, care and healthcare requirements."
                },
                {
                    name: "Semi Fowler Hospital Bed",
                    image: "images/semi bed.png",
                    description:
                        "Semi Fowler hospital bed designed for comfortable patient positioning."
                },
                {
                    name: "Fowler Hospital Bed",
                    image: "images/fowlerbed.png",
                    description:
                        "Fowler hospital bed designed for flexible patient positioning and patient care."
                },
                {
                    name: "2 Function Hospital Bed",
                    image: "images/2fbed.png",
                    description:
                        "2-function hospital bed suitable for everyday patient-care requirements."
                },
                {
                    name: "3 Function Hospital Bed",
                    image: "images/3fbed.png",
                    description:
                        "3-function hospital bed designed for flexible healthcare requirements."
                },
                {
                    name: "4 Function Hospital Bed",
                    image: "images/4fbed.png",
                    description:
                        "4-function hospital bed designed for professional healthcare environments."
                },
                {
                    name: "Folding Hospital Bed",
                    image: "images/foldingbed.png",
                    description:
                        "Folding hospital bed designed for convenient healthcare use."
                }
            ]
        },

        {
            name: "Oxygen Equipment",
            category: "Oxygen",
            description:
                "Oxygen cylinders and concentrators for healthcare and home-care requirements.",
            products: [
                {
                    name: "Oxygen Cylinder 5 Litre",
                    image: "images/oxy5ltr.png",
                    description:
                        "5 litre oxygen cylinder suitable for healthcare requirements."
                },
                {
                    name: "Oxygen Cylinder 10 Litre",
                    image: "images/oxy10ltr.png",
                    description:
                        "10 litre oxygen cylinder suitable for medical and healthcare requirements."
                },
                {
                    name: "Oxygen Concentrator",
                    image: "images/concentrator.webp",
                    description:
                        "Oxygen concentrator suitable for healthcare and home-care requirements."
                }
            ]
        },

        {
            name: "Wheelchairs",
            category: "Wheelchair",
            description:
                "Mobility solutions designed for comfortable patient movement and support.",
            products: [
                {
                    name: "Standard Wheelchair",
                    image: "images/w1.png",
                    description:
                        "Standard manual wheelchair designed for everyday mobility."
                },
                {
                    name: "Folding Wheelchair",
                    image: "images/w2.png",
                    description:
                        "Folding wheelchair designed for convenient transportation and storage."
                },
                {
                    name: "Commode Wheelchair",
                    image: "images/w3.png",
                    description:
                        "Commode wheelchair designed for additional patient-care convenience."
                },
                {
                    name: "Reclining Wheelchair",
                    image: "images/w4.png",
                    description:
                        "Reclining wheelchair designed for enhanced patient comfort."
                }
            ]
        },

        {
            name: "CPAP Machines",
            category: "CPAP",
            description:
                "CPAP equipment designed for suitable sleep-care requirements.",
            products: [
                {
                    name: "CPAP Machine",
                    image: "images/c1.png",
                    description:
                        "CPAP machine designed for suitable sleep-care requirements."
                },
                {
                    name: "Auto CPAP Machine",
                    image: "images/c2.png",
                    description:
                        "Auto CPAP machine designed for convenient sleep-care use."
                },
                {
                    name: "Portable CPAP Machine",
                    image: "images/c3.png",
                    description:
                        "Portable CPAP equipment designed for convenient use."
                }
            ]
        },

        {
            name: "BiPAP Machines",
            category: "BiPAP",
            description:
                "Bi-level respiratory-support equipment for suitable healthcare requirements.",
            products: [
                {
                    name: "BiPAP Machine",
                    image: "images/b1.png",
                    description:
                        "BiPAP machine designed for suitable respiratory-support requirements."
                },
                {
                    name: "Portable BiPAP Machine",
                    image: "images/b2.png",
                    description:
                        "Portable BiPAP equipment designed for convenient use."
                }
            ]
        },

        {
            name: "Mobility Aids",
            category: "Mobility Aids",
            description:
                "Walking aids designed to provide everyday mobility support.",
            products: [
                {
                    name: "Walking Walker",
                    image: "images/wl1.png",
                    description:
                        "Walking support designed for everyday mobility and stability."
                },
                {
                    name: "Folding Walker",
                    image: "images/wl2.png",
                    description:
                        "Folding walker designed for convenient storage and transportation."
                },
                {
                    name: "Adjustable Walker",
                    image: "images/wl3.png",
                    description:
                        "Adjustable walking support designed for everyday mobility."
                }
            ]
        },

        {
            name: "Patient Monitoring",
            category: "Patient Monitoring",
            description:
                "Equipment designed for suitable patient monitoring requirements.",
            products: [
                {
                    name: "Patient Monitor",
                    image: "images/pm.png",
                    description:
                        "Patient monitoring equipment designed for healthcare requirements."
                }
            ]
        },

        {
            name: "Critical Care",
            category: "Critical Care",
            description:
                "Respiratory-support equipment for suitable critical-care environments.",
            products: [
                {
                    name: "ICU Ventilator",
                    image: "images/venti.png",
                    description:
                        "Respiratory-support equipment for appropriate critical-care environments."
                }
            ]
        },

        {
            name: "Diagnostics",
            category: "Diagnostics",
            description:
                "Equipment designed for basic patient measurements and diagnostics.",
            products: [
                {
                    name: "Pulse Oximeter",
                    image: "images/pu.png",
                    description:
                        "Compact diagnostic equipment designed for basic patient measurements."
                }
            ]
        },

        {
            name: "Emergency Care",
            category: "Emergency",
            description:
                "Emergency transportation and urgent patient-care support.",
            products: [
                {
                    name: "Ambulance Service",
                    image: "images/amb.png",
                    description:
                        "Emergency transportation support for urgent patient-care requirements."
                }
            ]
        }
    ];


    /* =====================================================
       CHANGE TITLE
    ===================================================== */

    function setTitle(text) {

        if (catalogueTitle) {
            catalogueTitle.textContent = text;
        }

    }


    /* =====================================================
       CREATE CATEGORY CARD
    ===================================================== */

    function createCategoryCard(category) {

        const card = document.createElement("article");

        card.className = "catalogue-category";

        card.innerHTML = `
            <div class="category-image-box">

                <img
                    src="${category.products[0].image}"
                    alt="${category.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

            </div>

            <div class="category-content">

                <span>OYA COLLECTION</span>

                <h2>
                    ${category.name}
                </h2>

                <p>
                    ${category.description}
                </p>

                <strong>

                    <span>
                        ${category.products.length}
                        ${
                            category.products.length === 1
                                ? " product"
                                : " products"
                        }
                    </span>

                    <b>↗</b>

                </strong>

            </div>
        `;

        card.addEventListener("click", () => {

            openCategory(category);

        });

        return card;
    }


    /* =====================================================
       SHOW HOME PAGE
    ===================================================== */

    function showHome() {

        grid.innerHTML = "";

        grid.className =
            "catalogue-grid category-grid-view";

        setTitle("CATALOGUE");


        categories.forEach(category => {

            const card =
                createCategoryCard(category);

            grid.appendChild(card);

        });


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       OPEN CATEGORY
    ===================================================== */

    function openCategory(category) {

        grid.innerHTML = "";

        grid.className =
            "catalogue-grid category-viewer-grid";

        setTitle(
            category.name.toUpperCase()
        );


        /* ================================================
           BACK BUTTON
        ================================================= */

        const back =
            document.createElement("button");

        back.className =
            "category-back-button";

        back.type = "button";

        back.innerHTML =
            "← Back to Catalogue";


        back.addEventListener(
            "click",
            showHome
        );


        grid.parentNode.insertBefore(
            back,
            grid
        );


        /* ================================================
           PRODUCT VIEW
        ================================================= */

        const viewer =
            document.createElement("section");

        viewer.className =
            "category-product-viewer";


        viewer.innerHTML = `

            <div class="viewer-left">

                <div class="viewer-main-image">

                    <img
                        id="mainProductImage"
                        src="${category.products[0].image}"
                        alt="${category.products[0].name}"
                    >

                </div>


                <div
                    class="viewer-thumbnails"
                    id="productThumbnails"
                ></div>

            </div>


            <div class="viewer-right">

                <div class="viewer-category">
                    ${category.category.toUpperCase()}
                </div>


                <h1
                    class="viewer-title"
                    id="viewerProductTitle"
                >
                    ${category.products[0].name}
                </h1>


                <p
                    class="viewer-description"
                    id="viewerProductDescription"
                >
                    ${category.products[0].description}
                </p>


                <div class="viewer-divider"></div>


                <div class="viewer-details">

                    <span>
                        CATEGORY
                    </span>

                    <strong>
                        ${category.name}
                    </strong>

                </div>


                <div class="viewer-divider"></div>


                <div class="viewer-product-count">

                    ${category.products.length}
                    ${
                        category.products.length === 1
                            ? " PRODUCT"
                            : " PRODUCTS"
                    }

                </div>


                <a
                    class="viewer-enquiry"
                    href="https://wa.me/917021235223"
                    target="_blank"
                >

                    Enquire Now

                    <span>
                        ↗
                    </span>

                </a>

            </div>

        `;


        grid.appendChild(viewer);


        /* ================================================
           PRODUCT ELEMENTS
        ================================================= */

        const mainImage =
            viewer.querySelector(
                "#mainProductImage"
            );

        const productTitle =
            viewer.querySelector(
                "#viewerProductTitle"
            );

        const productDescription =
            viewer.querySelector(
                "#viewerProductDescription"
            );

        const thumbnails =
            viewer.querySelector(
                "#productThumbnails"
            );


        /* ================================================
           PRODUCT SELECTION
        ================================================= */

        function selectProduct(
            product,
            index
        ) {

            mainImage.src =
                product.image;

            mainImage.alt =
                product.name;

            productTitle.textContent =
                product.name;

            productDescription.textContent =
                product.description;


            const allThumbnails =
                thumbnails.querySelectorAll(
                    ".viewer-thumbnail"
                );


            allThumbnails.forEach(
                (thumbnail, i) => {

                    thumbnail.classList.toggle(
                        "active",
                        i === index
                    );

                }
            );

        }


        /* ================================================
           CREATE THUMBNAILS
        ================================================= */

        category.products.forEach(
            (product, index) => {

                const thumbnail =
                    document.createElement(
                        "button"
                    );

                thumbnail.type =
                    "button";

                thumbnail.className =
                    "viewer-thumbnail";


                thumbnail.innerHTML = `

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                `;


                thumbnail.addEventListener(
                    "click",
                    () => {

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


        /* FIRST PRODUCT */

        selectProduct(
            category.products[0],
            0
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =====================================================
       REMOVE OLD BACK BUTTONS
    ===================================================== */

    function removeOldBackButtons() {

        document
            .querySelectorAll(
                ".category-back-button"
            )
            .forEach(button => {

                button.remove();

            });

    }


    /* =====================================================
       OBSERVE CATEGORY PAGE
    ===================================================== */

    const originalShowHome =
        showHome;


    /* =====================================================
       INITIALIZE
    ===================================================== */

    removeOldBackButtons();

    showHome();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuButton =
        document.querySelector(
            ".mobile-menu-button"
        );

    const sidebar =
        document.querySelector(
            ".sidebar"
        );


    if (
        mobileMenuButton &&
        sidebar
    ) {

        mobileMenuButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                sidebar.classList.toggle(
                    "open"
                );


                if (
                    sidebar.classList.contains(
                        "open"
                    )
                ) {

                    mobileMenuButton.innerHTML =
                        "×";

                } else {

                    mobileMenuButton.innerHTML =
                        "☰";

                }

            }
        );


        document.addEventListener(
            "click",
            event => {

                if (
                    sidebar.classList.contains(
                        "open"
                    ) &&
                    !sidebar.contains(
                        event.target
                    ) &&
                    !mobileMenuButton.contains(
                        event.target
                    )
                ) {

                    sidebar.classList.remove(
                        "open"
                    );

                    mobileMenuButton.innerHTML =
                        "☰";

                }

            }
        );

    }


    console.log(
        "OYA Health Care loaded successfully."
    );

});
