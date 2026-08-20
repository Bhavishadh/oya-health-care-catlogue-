/* =====================================================
   OYA HEALTH CARE
   SHOPPING STYLE CATALOGUE
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


    /* =================================================
       02 OXYGEN CYLINDERS
    ================================================= */

    {
        id: "oxygen-cylinders",

        name: "Oxygen Cylinders",

        category: "Oxygen Cylinders",

        image: "images/oxy5ltr.png",

        description:
            "Oxygen cylinders available in different capacities for healthcare requirements.",

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
            }

        ]
    },


    /* =================================================
       03 OXYGEN CONCENTRATORS
    ================================================= */

    {
        id: "oxygen-concentrators",

        name: "Oxygen Concentrators",

        category: "Oxygen Concentrators",

        image: "images/concentrator.webp",

        description:
            "Oxygen concentrators designed for healthcare and home-care requirements.",

        products: [

            {
                name: "Oxygen Concentrator",
                image: "images/concentrator.webp",
                description:
                    "Oxygen concentrator suitable for healthcare and home-care requirements."
            }

        ]
    },


    /* =================================================
       04 WHEELCHAIRS
    ================================================= */

    {
        id: "wheelchairs",

        name: "Wheelchairs",

        category: "Wheelchairs",

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
       05 CPAP MACHINES
    ================================================= */

    {
        id: "cpap-machines",

        name: "CPAP Machines",

        category: "CPAP Machines",

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
       06 BIPAP MACHINES
    ================================================= */

    {
        id: "bipap-machines",

        name: "BiPAP Machines",

        category: "BiPAP Machines",

        image: "images/b1.png",

        description:
            "Bi-level respiratory-support equipment for healthcare requirements.",

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
       07 MOBILITY AIDS
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
       08 PATIENT MONITORING
    ================================================= */

    {
        id: "patient-monitoring",

        name: "Patient Monitoring",

        category: "Patient Monitoring",

        image: "images/pm.png",

        description:
            "Equipment designed for patient monitoring requirements.",

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
       09 CRITICAL CARE
    ================================================= */

    {
        id: "critical-care",

        name: "Critical Care",

        category: "Critical Care",

        image: "images/venti.png",

        description:
            "Respiratory-support equipment for critical-care environments.",

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
       10 DIAGNOSTICS
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
       11 EMERGENCY CARE
    ================================================= */

    {
        id: "emergency-care",

        name: "Emergency Care",

        category: "Emergency Care",

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
   MAIN
===================================================== */

const mainContent =
    document.getElementById("mainContent");


/* =====================================================
   HOME
===================================================== */

function showHome() {

    if (!mainContent) return;

    mainContent.innerHTML = `

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
            ></div>

        </section>

    `;


    renderCategories();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   CATEGORY CARDS
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
   OPEN CATEGORY
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


            <p class="category-page-description">
                ${category.description}
            </p>


            <div
                class="product-grid"
                id="productGrid"
            ></div>


        </section>

    `;


    renderProducts(category);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   PRODUCTS INSIDE CATEGORY
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
   PRODUCT DETAIL
===================================================== */

function openProduct(product, category) {

    if (!mainContent) return;


    const gallery =
        product.gallery &&
        product.gallery.length
            ? product.gallery
            : [product.image];


    mainContent.innerHTML = `

        <section class="product-detail">


            <div class="product-detail-top">

                <button
                    class="detail-back"
                    onclick="openCategoryById('${category.id}')"
                >
                    ← Back to ${category.name}
                </button>

            </div>


            <div class="product-detail-layout">


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
                    ></div>


                </div>


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


                    <span class="detail-label">
                        PRODUCT
                    </span>


                    <div class="size-option">
                        Available on enquiry
                    </div>


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
   THUMBNAILS
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
                            item => {

                                item.classList.remove(
                                    "active"
                                );

                            }
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
   FIND CATEGORY
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
   CATALOGUE SCROLL
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
   ABOUT SCROLL
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
   OUTSIDE CLICK
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
   START
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
