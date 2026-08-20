/* =====================================================
   OYA HEALTH CARE
   CATALOGUE JAVASCRIPT
===================================================== */


/* =====================================================
   DATA
===================================================== */

const categories = [

    {
        id: "hospital-furniture",

        title: "Hospital Furniture",

        description:
            "Hospital beds and furniture designed for patient care and healthcare requirements.",

        image: "images/hospitalbed.webp",

        products: [

            {
                id: "hospital-bed",

                title: "Hospital Bed",

                image: "images/hospitalbed.webp",

                images: [
                    "images/hospitalbed.webp",
                    "images/semi bed.png",
                    "images/foldingbed.png",
                    "images/fowlerbed.png"
                ],

                description:
                    "Hospital bed designed for patient care, comfort and healthcare requirements."
            },

            {
                id: "semi-fowler-bed",

                title: "Semi Fowler Bed",

                image: "images/semi bed.png",

                images: [
                    "images/semi bed.png",
                    "images/hospitalbed.webp"
                ],

                description:
                    "Semi Fowler hospital bed designed for comfortable patient positioning."
            },

            {
                id: "folding-bed",

                title: "Folding Bed",

                image: "images/foldingbed.png",

                images: [
                    "images/foldingbed.png",
                    "images/hospitalbed.webp"
                ],

                description:
                    "Practical folding hospital bed for healthcare and patient-care environments."
            },

            {
                id: "fowler-bed",

                title: "Fowler Bed",

                image: "images/fowlerbed.png",

                images: [
                    "images/fowlerbed.png",
                    "images/hospitalbed.webp"
                ],

                description:
                    "Fowler hospital bed designed for patient comfort and positioning."
            }

        ]
    },


    /* =================================================
       OXYGEN CYLINDER
    ================================================= */

    {
        id: "oxygen-cylinder",

        title: "Oxygen Cylinder",

        description:
            "Oxygen cylinders and accessories for medical oxygen requirements.",

        image: "images/oxy10ltr.png",

        products: [

            {
                id: "oxygen-cylinder-5",

                title: "Oxygen Cylinder 5 Litre",

                image: "images/oxy5ltr.png",

                images: [
                    "images/oxy5ltr.png",
                    "images/oxy10ltr.png"
                ],

                description:
                    "Medical oxygen cylinder designed for healthcare and home-care oxygen requirements."
            },

            {
                id: "oxygen-cylinder-10",

                title: "Oxygen Cylinder 10 Litre",

                image: "images/oxy10ltr.png",

                images: [
                    "images/oxy10ltr.png",
                    "images/oxy5ltr.png"
                ],

                description:
                    "10 litre oxygen cylinder suitable for medical oxygen applications."
            },

            {
                id: "oxygen-cylinder-accessory",

                title: "Oxygen Cylinder With Regulator",

                image: "images/oxy10ltr.png",

                images: [
                    "images/oxy10ltr.png",
                    "images/oxy5ltr.png"
                ],

                description:
                    "Oxygen cylinder setup with regulator for controlled oxygen delivery."
            }

        ]
    },


    /* =================================================
       OXYGEN CONCENTRATOR
    ================================================= */

    {
        id: "oxygen-concentrator",

        title: "Oxygen Concentrator",

        description:
            "Oxygen concentrators designed for convenient oxygen support at home and healthcare environments.",

        image: "images/concentrator.webp",

        products: [

            {
                id: "oxygen-concentrator",

                title: "Oxygen Concentrator",

                image: "images/concentrator.webp",

                images: [
                    "images/concentrator.webp",
                    "images/c1.png",
                    "images/c2.png"
                ],

                description:
                    "Oxygen concentrator designed to provide convenient oxygen support for home healthcare."
            },

            {
                id: "oxygen-concentrator-2",

                title: "Portable Oxygen Concentrator",

                image: "images/c1.png",

                images: [
                    "images/c1.png",
                    "images/c2.png",
                    "images/concentrator.webp"
                ],

                description:
                    "Compact oxygen concentrator suitable for home healthcare and patient support."
            },

            {
                id: "oxygen-concentrator-3",

                title: "Oxygen Concentrator System",

                image: "images/c2.png",

                images: [
                    "images/c2.png",
                    "images/c1.png",
                    "images/concentrator.webp"
                ],

                description:
                    "Oxygen concentrator system designed for reliable oxygen support."
            }

        ]
    },


    /* =================================================
       WHEELCHAIRS
    ================================================= */

    {
        id: "wheelchairs",

        title: "Wheelchairs",

        description:
            "Mobility solutions designed for comfortable patient movement and support.",

        image: "images/w1.png",

        products: [

            {
                id: "wheelchair",

                title: "Wheelchair",

                image: "images/w1.png",

                images: [
                    "images/w1.png"
                ],

                description:
                    "Comfortable wheelchair designed for patient mobility and everyday support."
            }
        ]
    },


    /* =================================================
       PATIENT MONITORING
    ================================================= */

    {
        id: "patient-monitoring",

        title: "Patient Monitoring",

        description:
            "Equipment designed for suitable patient monitoring requirements.",

        image: "images/pm.png",

        products: [

            {
                id: "patient-monitor",

                title: "Patient Monitor",

                image: "images/pm.png",

                images: [
                    "images/pm.png"
                ],

                description:
                    "Patient monitoring equipment designed for healthcare environments."
            }
        ]
    },


    /* =================================================
       AMBULANCE
    ================================================= */

    {
        id: "emergency-care",

        title: "Emergency Care",

        description:
            "Emergency transportation and urgent patient-care support.",

        image: "images/amb.png",

        products: [

            {
                id: "ambulance",

                title: "Ambulance",

                image: "images/amb.png",

                images: [
                    "images/amb.png"
                ],

                description:
                    "Emergency transportation solution for urgent patient-care requirements."
            }
        ]
    },


    /* =================================================
       CRITICAL CARE
    ================================================= */

    {
        id: "critical-care",

        title: "Critical Care",

        description:
            "Respiratory-support equipment for suitable critical-care environments.",

        image: "images/venti.png",

        products: [

            {
                id: "ventilator",

                title: "Ventilator",

                image: "images/venti.png",

                images: [
                    "images/venti.png"
                ],

                description:
                    "Critical-care respiratory support equipment."
            }
        ]
    },


    /* =================================================
       DIAGNOSTIC
    ================================================= */

    {
        id: "diagnostic-equipment",

        title: "Diagnostic Equipment",

        description:
            "Equipment designed for basic patient measurements and diagnostics.",

        image: "images/pu.png",

        products: [

            {
                id: "diagnostic-device",

                title: "Diagnostic Equipment",

                image: "images/pu.png",

                images: [
                    "images/pu.png"
                ],

                description:
                    "Diagnostic equipment designed for basic patient measurements."
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
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.toggle("open");
}


function closeMobileMenu() {

    const menu =
        document.getElementById("mobileMenu");

    menu.classList.remove("open");
}


/* =====================================================
   HOME PAGE
===================================================== */

function showHome() {

    closeMobileMenu();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    mainContent.innerHTML = `

        <!-- =========================================
             HOME INFORMATION
        ========================================== -->

        <section class="home-info" id="about">

            <!--
                IMPORTANT:
                NO SECOND LOGO HERE.

                The only mobile logo is in the header.
            -->

            <h1 class="home-title">
                Oya Health Care
            </h1>

            <p class="home-description">
                OYA Health Care – Trusted Medical Equipment & Home Healthcare
                Solutions OYA Health Care is a leading supplier of high-quality
                medical equipment, hospital supplies, and home healthcare
                products in India. We are committed to providing reliable,
                affordable and quality healthcare solutions.
            </p>

            <div class="home-contact">

                <div class="home-contact-item">

                    <span class="home-contact-icon">
                        ⌖
                    </span>

                    <span>
                        Shop no 9 Shiv Vithai Galaxy near SBI Bank Thakurli
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


        <!-- =========================================
             CATALOGUE
        ========================================== -->

        <section id="catalogue">

            <div class="page-heading">

                <div class="eyebrow">
                    CATALOGUE
                </div>

                <div class="heading-line"></div>

            </div>


            <div class="category-grid">

                ${categories.map(createCategoryCard).join("")}

            </div>

        </section>

    `;
}


/* =====================================================
   CATEGORY CARD
===================================================== */

function createCategoryCard(category) {

    return `

        <article
            class="category-card"
            onclick="openCategory('${category.id}')"
        >

            <div class="category-image-box">

                <img
                    src="${category.image}"
                    alt="${category.title}"
                    class="category-image"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

            </div>


            <div class="category-info">

                <div class="category-label">
                    OYA COLLECTION
                </div>

                <h2 class="category-title">
                    ${category.title}
                </h2>

                <p class="category-description">
                    ${category.description}
                </p>


                <div class="category-bottom">

                    <span class="product-count">
                        ${category.products.length}
                        ${category.products.length === 1 ? "product" : "products"}
                    </span>

                    <span class="arrow">
                        ↗
                    </span>

                </div>

            </div>

        </article>

    `;
}


/* =====================================================
   OPEN CATEGORY
===================================================== */

function openCategory(categoryId) {

    closeMobileMenu();

    const category =
        categories.find(
            item => item.id === categoryId
        );

    if (!category) {
        return;
    }

    /*
       IMPORTANT:
       We REPLACE mainContent completely.

       Therefore:
       - company information does NOT repeat
       - catalogue does NOT repeat
       - previous back buttons do NOT multiply
    */

    mainContent.innerHTML = `

        <section class="category-page">

            <div class="page-heading">

                <div class="category-page-title">
                    ${category.title.toUpperCase()}
                </div>

                <div class="heading-line"></div>

            </div>


            <button
                class="back-button"
                onclick="showHome()"
            >
                ← Back to Catalogue
            </button>


            <div class="product-grid">

                ${category.products
                    .map(product =>
                        createProductCard(product, category)
                    )
                    .join("")
                }

            </div>

        </section>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product, category) {

    return `

        <article
            class="product-card"
            onclick="
                openProduct(
                    '${category.id}',
                    '${product.id}'
                )
            "
        >

            <div class="product-image-box">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                    class="product-image"
                    loading="lazy"
                >

            </div>


            <div class="product-card-info">

                <div class="product-category">
                    ${category.title.toUpperCase()}
                </div>

                <h2 class="product-title">
                    ${product.title}
                </h2>

                <p class="product-description">
                    ${product.description}
                </p>

            </div>

        </article>

    `;
}


/* =====================================================
   OPEN PRODUCT
===================================================== */

function openProduct(categoryId, productId) {

    closeMobileMenu();

    const category =
        categories.find(
            item => item.id === categoryId
        );

    if (!category) {
        return;
    }

    const product =
        category.products.find(
            item => item.id === productId
        );

    if (!product) {
        return;
    }


    /*
       IMPORTANT:
       Again we completely replace the content.

       This prevents:
       Back to Catalogue
       Back to Catalogue
       Back to Catalogue
       Back to Catalogue

       from appearing repeatedly.
    */

    mainContent.innerHTML = `

        <section class="product-detail">

            <div class="product-detail-top">

                <button
                    class="detail-back"
                    onclick="openCategory('${category.id}')"
                >
                    ← Back to ${category.title}
                </button>

            </div>


            <div class="product-detail-layout">


                <!-- =====================================
                     GALLERY
                ====================================== -->

                <div class="detail-gallery">

                    <div class="main-product-image-box">

                        <img
                            id="mainProductImage"
                            src="${product.images[0]}"
                            alt="${product.title}"
                            class="main-product-image"
                        >

                    </div>


                    <div class="thumbnail-row">

                        ${product.images
                            .map(
                                (image, index) => `
                                    <button
                                        class="
                                            thumbnail
                                            ${index === 0 ? "active" : ""}
                                        "
                                        onclick="
                                            changeProductImage(
                                                '${image}',
                                                this
                                            )
                                        "
                                    >

                                        <img
                                            src="${image}"
                                            alt="${product.title}"
                                        >

                                    </button>
                                `
                            )
                            .join("")
                        }

                    </div>

                </div>


                <!-- =====================================
                     PRODUCT INFORMATION
                ====================================== -->

                <div class="product-detail-info">

                    <div class="detail-category">
                        ${category.title.toUpperCase()}
                    </div>

                    <h1 class="detail-title">
                        ${product.title}
                    </h1>

                    <p class="detail-description">
                        ${product.description}
                    </p>

                    <div class="detail-line"></div>

                    <span class="detail-label">
                        ENQUIRY
                    </span>

                    <div class="enquiry-buttons">

                        <a
                            href="tel:7021235223"
                            class="enquiry-button call-button"
                        >
                            Call OYA
                        </a>

                        <a
                            href="https://wa.me/917021235223"
                            class="enquiry-button whatsapp-button"
                            target="_blank"
                        >
                            WhatsApp
                        </a>

                    </div>

                </div>

            </div>

        </section>

    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   CHANGE PRODUCT IMAGE
===================================================== */

function changeProductImage(image, button) {

    const mainImage =
        document.getElementById(
            "mainProductImage"
        );

    if (!mainImage) {
        return;
    }

    mainImage.src = image;


    document
        .querySelectorAll(".thumbnail")
        .forEach(item => {

            item.classList.remove("active");

        });


    button.classList.add("active");
}


/* =====================================================
   SCROLL TO CATALOGUE
===================================================== */

function scrollToCatalogue() {

    showHome();

    setTimeout(() => {

        const catalogue =
            document.getElementById("catalogue");

        if (catalogue) {

            catalogue.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);
}


/* =====================================================
   SCROLL TO ABOUT
===================================================== */

function scrollToAbout() {

    showHome();

    setTimeout(() => {

        const about =
            document.getElementById("about");

        if (about) {

            about.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);
}


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showHome();

    }
);


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const menu =
            document.getElementById("mobileMenu");

        const button =
            document.getElementById("menuButton");

        if (!menu || !button) {
            return;
        }

        if (
            menu.classList.contains("open") &&
            !menu.contains(event.target) &&
            !button.contains(event.target)
        ) {

            menu.classList.remove("open");

        }

    }
);
