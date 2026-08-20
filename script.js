/* =====================================================
   OYA HEALTH CARE
   CATALOGUE JAVASCRIPT
===================================================== */


/* =====================================================
   CATEGORY DATA
===================================================== */

const categories = [

    /* =================================================
       01 HOSPITAL FURNITURE
    ================================================= */

    {
        id: "hospital-furniture",

        name: "Hospital Furniture",

        category: "Hospital Furniture",

        image: "images/hospitalbed.webp",

        description:
            "Hospital beds and furniture designed for patient care and healthcare requirements.",

        products: [

            {
                name: "Hospital Bed",

                image: "images/hospitalbed.webp",

                description:
                    "Hospital bed designed for patient comfort, care and healthcare requirements.",

                size:
                    "Standard Hospital Bed"
            },

            {
                name: "Semi Fowler Hospital Bed",

                image: "images/semi bed.png",

                description:
                    "Semi Fowler hospital bed designed for comfortable patient positioning.",

                size:
                    "Standard Hospital Bed"
            },

            {
                name: "Fowler Hospital Bed",

                image: "images/fowlerbed.png",

                description:
                    "Fowler hospital bed designed for flexible patient positioning and patient care.",

                size:
                    "Standard Hospital Bed"
            },

            {
                name: "2 Function Hospital Bed",

                image: "images/2fbed.png",

                description:
                    "2-function hospital bed suitable for everyday patient-care requirements.",

                size:
                    "2 Function"
            },

            {
                name: "3 Function Hospital Bed",

                image: "images/3fbed.png",

                description:
                    "3-function hospital bed designed for flexible healthcare requirements.",

                size:
                    "3 Function"
            },

            {
                name: "4 Function Hospital Bed",

                image: "images/4fbed.png",

                description:
                    "4-function hospital bed designed for professional healthcare environments.",

                size:
                    "4 Function"
            },

            {
                name: "Folding Hospital Bed",

                image: "images/foldingbed.png",

                description:
                    "Folding hospital bed designed for convenient healthcare use.",

                size:
                    "Folding"
            }

        ]
    },


    /* =================================================
       02 OXYGEN EQUIPMENT
    ================================================= */

    {
        id: "oxygen-equipment",

        name: "Oxygen Equipment",

        category: "Oxygen",

        image: "images/concentrator.webp",

        description:
            "Oxygen cylinders and concentrators for healthcare and home-care requirements.",

        products: [

            {
                name: "Oxygen Cylinder 5 Litre",

                image: "images/oxy5ltr.png",

                description:
                    "5 litre oxygen cylinder suitable for healthcare requirements.",

                size:
                    "5 Litre"
            },

            {
                name: "Oxygen Cylinder 10 Litre",

                image: "images/oxy10ltr.png",

                description:
                    "10 litre oxygen cylinder suitable for medical and healthcare requirements.",

                size:
                    "10 Litre"
            },

            {
                name: "Oxygen Concentrator",

                image: "images/concentrator.webp",

                description:
                    "Oxygen concentrator suitable for healthcare and home-care requirements.",

                size:
                    "5 Liter to 10 Liter"
            }

        ]
    },


    /* =================================================
       03 WHEELCHAIRS
    ================================================= */

    {
        id: "wheelchairs",

        name: "Wheelchairs",

        category: "Wheelchair",

        image: "images/w1.png",

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


    /* =================================================
       04 CPAP MACHINES
    ================================================= */

    {
        id: "cpap-machines",

        name: "CPAP Machines",

        category: "CPAP",

        image: "images/c1.png",

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


    /* =================================================
       05 BIPAP MACHINES
    ================================================= */

    {
        id: "bipap-machines",

        name: "BiPAP Machines",

        category: "BiPAP",

        image: "images/b1.png",

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


    /* =================================================
       06 MOBILITY AIDS
    ================================================= */

    {
        id: "mobility-aids",

        name: "Mobility Aids",

        category: "Mobility Aids",

        image: "images/wl1.png",

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


    /* =================================================
       07 PATIENT MONITORING
    ================================================= */

    {
        id: "patient-monitoring",

        name: "Patient Monitoring",

        category: "Patient Monitoring",

        image: "images/pm.png",

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


    /* =================================================
       08 CRITICAL CARE
    ================================================= */

    {
        id: "critical-care",

        name: "Critical Care",

        category: "Critical Care",

        image: "images/venti.png",

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


    /* =================================================
       09 DIAGNOSTICS
    ================================================= */

    {
        id: "diagnostics",

        name: "Diagnostics",

        category: "Diagnostics",

        image: "images/pu.png",

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


    /* =================================================
       10 EMERGENCY CARE
    ================================================= */

    {
        id: "emergency-care",

        name: "Emergency Care",

        category: "Emergency",

        image: "images/amb.png",

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
   MAIN ELEMENT
===================================================== */

const mainContent =
    document.getElementById("mainContent");


/* =====================================================
   HOME PAGE
===================================================== */

function showHome() {

    if (!mainContent) return;


    mainContent.innerHTML = `

        <!-- =============================================
             HOME INFORMATION
        ============================================== -->

        <section
            class="home-info"
            id="about"
        >

            <h1 class="home-title">
                Oya Health Care
            </h1>


            <p class="home-description">

                OYA Health Care – Trusted Medical Equipment &
                Home Healthcare Solutions OYA Health Care is a
                leading supplier of high-quality medical equipment,
                hospital supplies, and home healthcare products
                in India. We are committed to providing reliable,
                affordable and quality healthcare solutions.

            </p>


            <div class="home-contact">

                <div class="home-contact-item">

                    <span class="home-contact-icon">
                        ⌖
                    </span>

                    <span>
                        Shop no 9 Shiv Vithai Galaxy near SBI Bank
                        Thakurli
                    </span>

                </div>


                <div class="home-contact-item">

                    <span class="home-contact-icon">
                        ♧
                    </span>

                    <a href="tel:7021235223">
                        7021235223
                    </a>

                </div>

            </div>

        </section>


        <!-- =============================================
             CATALOGUE
        ============================================== -->

        <section id="catalogue">

            <div class="page-heading">

                <span class="eyebrow">
                    CATALOGUE
                </span>

                <div class="heading-line"></div>

            </div>


            <div
                class="category-grid"
                id="categoryGrid"
            >

            </div>

        </section>

    `;


    renderCategories();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   RENDER CATEGORY CARDS
===================================================== */

function renderCategories() {

    const grid =
        document.getElementById("categoryGrid");


    if (!grid) return;


    grid.innerHTML = "";


    categories.forEach(category => {

        const card =
            document.createElement("button");


        card.type = "button";


        card.className =
            "category-card";


        card.innerHTML = `

            <div class="category-image-box">

                <img
                    src="${category.image}"
                    alt="${category.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

            </div>


            <div class="category-info">

                <span class="category-label">
                    OYA COLLECTION
                </span>


                <h2 class="category-title">
                    ${category.name}
                </h2>


                <p class="category-description">
                    ${category.description}
                </p>


                <div class="category-bottom">

                    <span class="product-count">

                        ${category.products.length}
                        ${
                            category.products.length === 1
                                ? " product"
                                : " products"
                        }

                    </span>


                    <span class="category-arrow">
                        ↗
                    </span>

                </div>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openCategory(category)
        );


        grid.appendChild(card);

    });

}


/* =====================================================
   CATEGORY PAGE
===================================================== */

function openCategory(category) {

    if (!mainContent) return;


    mainContent.innerHTML = `

        <section class="category-page">

            <h1 class="category-page-title">
                ${category.name.toUpperCase()}
            </h1>


            <div class="category-page-line"></div>


            <button
                class="back-button"
                onclick="showHome()"
            >
                ← Back to Catalogue
            </button>


            <div
                class="product-grid"
                id="productGrid"
            >

            </div>

        </section>

    `;


    renderProducts(category);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(category) {

    const grid =
        document.getElementById("productGrid");


    if (!grid) return;


    grid.innerHTML = "";


    category.products.forEach(product => {

        const card =
            document.createElement("button");


        card.type = "button";


        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.style.display='none';"
                >

            </div>


            <div class="product-card-info">

                <span class="product-category">
                    ${category.category}
                </span>


                <h2 class="product-title">
                    ${product.name}
                </h2>


                <p class="product-description">
                    ${product.description}
                </p>

            </div>

        `;


        card.addEventListener(
            "click",
            () => openProduct(product, category)
        );


        grid.appendChild(card);

    });

}


/* =====================================================
   PRODUCT DETAIL PAGE
===================================================== */

function openProduct(product, category) {

    if (!mainContent) return;


    /*
       At the moment every product has one main image.
       If you later add more images, put them inside
       product.gallery.
    */

    const gallery =
        product.gallery &&
        product.gallery.length
            ? product.gallery
            : [product.image];


    mainContent.innerHTML = `

        <section class="product-detail">


            <!-- =========================================
                 BACK
            ========================================== -->

            <div class="product-detail-top">

                <button
                    class="detail-back"
                    onclick="openCategoryById('${category.id}')"
                >
                    ← Back
                </button>

            </div>


            <!-- =========================================
                 PRODUCT
            ========================================== -->

            <div class="product-detail-layout">


                <!-- =====================================
                     LEFT
                ====================================== -->

                <div class="detail-gallery">


                    <div class="main-product-image-box">

                        <img
                            id="mainProductImage"
                            class="main-product-image"
                            src="${gallery[0]}"
                            alt="${product.name}"
                        >

                    </div>


                    <div
                        class="thumbnail-row"
                        id="thumbnailRow"
                    >

                    </div>


                </div>


                <!-- =====================================
                     RIGHT
                ====================================== -->

                <div class="product-detail-info">


                    <div class="detail-category">

                        ${category.category}

                    </div>


                    <h1 class="detail-title">

                        ${product.name}

                    </h1>


                    <p class="detail-description">

                        ${product.description}

                    </p>


                    <div class="detail-line"></div>


                    ${
                        product.size
                            ? `

                                <span class="detail-label">
                                    SIZE
                                </span>

                                <div class="size-option">
                                    ${product.size}
                                </div>

                              `
                            : ""
                    }


                    ${
                        product.specification
                            ? `

                                <div class="detail-line"></div>

                                <span class="detail-label">
                                    SPECIFICATION
                                </span>

                                <p class="detail-description">
                                    ${product.specification}
                                </p>

                              `
                            : ""
                    }


                    <div class="enquiry-buttons">


                        <a
                            href="tel:7021235223"
                            class="enquiry-button call-button"
                        >
                            Call Now
                        </a>


                        <a
                            href="https://wa.me/917021235223"
                            target="_blank"
                            rel="noopener"
                            class="enquiry-button whatsapp-button"
                        >
                            WhatsApp Enquiry
                        </a>


                    </div>


                </div>


            </div>


        </section>

    `;


    renderThumbnails(gallery);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   PRODUCT THUMBNAILS
===================================================== */

function renderThumbnails(gallery) {

    const row =
        document.getElementById("thumbnailRow");


    const mainImage =
        document.getElementById("mainProductImage");


    if (!row || !mainImage) return;


    row.innerHTML = "";


    gallery.forEach(
        (image, index) => {

            const thumbnail =
                document.createElement("button");


            thumbnail.type =
                "button";


            thumbnail.className =
                "thumbnail";


            if (index === 0) {

                thumbnail.classList.add(
                    "active"
                );

            }


            thumbnail.innerHTML = `

                <img
                    src="${image}"
                    alt="Product image"
                >

            `;


            thumbnail.addEventListener(
                "click",
                () => {

                    mainImage.src =
                        image;


                    document
                        .querySelectorAll(
                            ".thumbnail"
                        )
                        .forEach(
                            item =>
                                item.classList.remove(
                                    "active"
                                )
                        );


                    thumbnail.classList.add(
                        "active"
                    );

                }
            );


            row.appendChild(
                thumbnail
            );

        }
    );

}


/* =====================================================
   OPEN CATEGORY BY ID
===================================================== */

function openCategoryById(id) {

    const category =
        categories.find(
            item => item.id === id
        );


    if (!category) {

        showHome();

        return;
    }


    openCategory(category);
}


/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const menu =
        document.getElementById(
            "mobileMenu"
        );


    if (!menu) return;


    menu.classList.toggle(
        "open"
    );

}


function closeMobileMenu() {

    const menu =
        document.getElementById(
            "mobileMenu"
        );


    if (!menu) return;


    menu.classList.remove(
        "open"
    );

}


/* =====================================================
   SCROLL TO CATALOGUE
===================================================== */

function scrollToCatalogue() {

    showHome();


    setTimeout(
        () => {

            const catalogue =
                document.getElementById(
                    "catalogue"
                );


            if (catalogue) {

                catalogue.scrollIntoView({
                    behavior: "smooth"
                });

            }

        },
        100
    );

}


/* =====================================================
   ABOUT
===================================================== */

function scrollToAbout() {

    showHome();


    setTimeout(
        () => {

            const about =
                document.getElementById(
                    "about"
                );


            if (about) {

                about.scrollIntoView({
                    behavior: "smooth"
                });

            }

        },
        100
    );

}


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    event => {

        const menu =
            document.getElementById(
                "mobileMenu"
            );


        const button =
            document.getElementById(
                "menuButton"
            );


        if (!menu || !button) return;


        if (
            menu.classList.contains("open") &&
            !menu.contains(event.target) &&
            !button.contains(event.target)
        ) {

            menu.classList.remove(
                "open"
            );

        }

    }
);


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showHome();

        console.log(
            "OYA Health Care loaded successfully."
        );

    }
);
