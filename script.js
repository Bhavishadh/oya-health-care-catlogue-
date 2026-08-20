/* =====================================================
   OYA HEALTH CARE
   CATALOGUE JAVASCRIPT
===================================================== */


/* =====================================================
   IMAGE PATH HELPER
===================================================== */

const IMG = "images/";


/* =====================================================
   COMPANY INFORMATION
===================================================== */

const companyDescription =
    "OYA Health Care – Trusted Medical Equipment & Home Healthcare Solutions OYA Health Care is a leading supplier of high-quality medical equipment, hospital supplies, and home healthcare products in India. We are committed to providing reliable, affordable and quality healthcare solutions.";

const companyAddress =
    "Shop no 9 Shiv Vithai Galaxy near SBI Bank Thakurli";

const companyPhone =
    "7021235223";


/* =====================================================
   CATEGORIES
===================================================== */

const categories = [

    {
        id: "hospital-furniture",

        title: "Hospital Furniture",

        description:
            "Hospital beds and furniture designed for patient care and healthcare requirements.",

        count: 4,

        image: "hospitalbed.webp",

        products: [

            {
                title: "Hospital Bed",

                description:
                    "Hospital bed designed for patient care and hospital requirements.",

                image: "hospitalbed.webp",

                images: [
                    "hospitalbed.webp",
                    "fowlerbed.png",
                    "semi bed.png",
                    "foldingbed.png"
                ]
            },

            {
                title: "Fowler Bed",

                description:
                    "Comfortable adjustable hospital bed for patient care.",

                image: "fowlerbed.png",

                images: [
                    "fowlerbed.png",
                    "semi bed.png",
                    "foldingbed.png"
                ]
            },

            {
                title: "Semi Fowler Bed",

                description:
                    "Reliable hospital bed suitable for everyday patient care.",

                image: "semi bed.png",

                images: [
                    "semi bed.png",
                    "fowlerbed.png"
                ]
            },

            {
                title: "Folding Hospital Bed",

                description:
                    "Practical folding bed solution for healthcare environments.",

                image: "foldingbed.png",

                images: [
                    "foldingbed.png",
                    "hospitalbed.webp"
                ]
            }

        ]
    },


    /* =================================================
       OXYGEN EQUIPMENT
    ================================================= */

    {
        id: "oxygen-equipment",

        title: "Oxygen Equipment",

        description:
            "Oxygen cylinders and related equipment for healthcare and home-care requirements.",

        count: 2,

        image: "oxy10ltr.png",

        products: [

            {
                title: "Oxygen Cylinder 10 Litre",

                description:
                    "Oxygen cylinder suitable for medical and home healthcare use.",

                image: "oxy10ltr.png",

                images: [
                    "oxy10ltr.png",
                    "oxy5ltr.png"
                ]
            },

            {
                title: "Oxygen Cylinder 5 Litre",

                description:
                    "Compact oxygen cylinder designed for healthcare requirements.",

                image: "oxy5ltr.png",

                images: [
                    "oxy5ltr.png",
                    "oxy10ltr.png"
                ]
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
            "Oxygen concentrators designed to provide convenient oxygen support at home and in healthcare settings.",

        count: 1,

        image: "concentrator.webp",

        products: [

            {
                title: "Oxygen Concentrator",

                description:
                    "Portable oxygen concentrator designed for convenient home healthcare use.",

                image: "concentrator.webp",

                images: [
                    "concentrator.webp"
                ]
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

        count: 1,

        image: "w1.png",

        products: [

            {
                title: "Wheelchair",

                description:
                    "Comfortable wheelchair designed for patient mobility and support.",

                image: "w1.png",

                images: [
                    "w1.png"
                ]
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

        count: 1,

        image: "pm.png",

        products: [

            {
                title: "Patient Monitor",

                description:
                    "Patient monitoring equipment for monitoring essential patient parameters.",

                image: "pm.png",

                images: [
                    "pm.png"
                ]
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

        count: 1,

        image: "venti.png",

        products: [

            {
                title: "Ventilator",

                description:
                    "Respiratory support equipment designed for critical-care environments.",

                image: "venti.png",

                images: [
                    "venti.png"
                ]
            }

        ]
    },


    /* =================================================
       DIAGNOSTIC EQUIPMENT
    ================================================= */

    {
        id: "diagnostic-equipment",

        title: "Diagnostic Equipment",

        description:
            "Equipment designed for basic patient measurements and diagnostics.",

        count: 1,

        image: "pu.png",

        products: [

            {
                title: "Diagnostic Equipment",

                description:
                    "Healthcare equipment designed for basic patient measurements.",

                image: "pu.png",

                images: [
                    "pu.png"
                ]
            }

        ]
    },


    /* =================================================
       EMERGENCY CARE
    ================================================= */

    {
        id: "emergency-care",

        title: "Emergency Care",

        description:
            "Emergency transportation and urgent patient-care support.",

        count: 1,

        image: "amb.png",

        products: [

            {
                title: "Emergency Ambulance",

                description:
                    "Emergency transportation support for urgent patient care.",

                image: "amb.png",

                images: [
                    "amb.png"
                ]
            }

        ]
    }

];


/* =====================================================
   GET MAIN CONTENT
===================================================== */

const mainContent =
    document.getElementById("mainContent");


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

        <!-- =============================================
             MOBILE HOME INFORMATION
             ONLY APPEARS ON HOME PAGE
        ============================================== -->

        <section class="mobile-home-info"
                 id="about">

            <img
                src="images/logo%20(2).png"
                alt="Oya Health Care"
                class="mobile-home-logo"
            >

            <h1 class="mobile-home-title">
                Oya Health Care
            </h1>

            <p class="mobile-home-description">
                ${companyDescription}
            </p>

            <div class="mobile-home-contact">

                <div class="contact-item">

                    <span class="contact-icon">
                        ⌖
                    </span>

                    <span>
                        ${companyAddress}
                    </span>

                </div>

                <div class="contact-item">

                    <span class="contact-icon">
                        ♧
                    </span>

                    <a href="tel:${companyPhone}">
                        ${companyPhone}
                    </a>

                </div>

            </div>

        </section>


        <!-- =============================================
             CATALOGUE
        ============================================== -->

        <section id="catalogue">

            <div class="page-heading">

                <div class="eyebrow">
                    CATALOGUE
                </div>

                <div class="heading-line"></div>

            </div>


            <div class="category-grid">

                ${categories
                    .map(category => categoryCard(category))
                    .join("")}

            </div>

        </section>

    `;

}


/* =====================================================
   CATEGORY CARD
===================================================== */

function categoryCard(category) {

    return `

        <article class="category-card"
                 onclick="showCategory('${category.id}')">

            <div class="category-image-box">

                <img
                    src="${IMG}${category.image}"
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
                        ${category.count}
                        ${category.count === 1 ? "product" : "products"}
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
   SHOW CATEGORY
===================================================== */

function showCategory(categoryId) {

    closeMobileMenu();

    const category =
        categories.find(
            item => item.id === categoryId
        );

    if (!category) {

        showHome();

        return;
    }


    /*
       IMPORTANT:
       Company information is NOT rendered here.
       Therefore it cannot repeat.
    */

    mainContent.innerHTML = `

        <section class="category-page">


            <div class="page-heading">

                <div class="category-page-title">
                    ${category.title.toUpperCase()}
                </div>

                <div class="heading-line"></div>

            </div>


            <button class="back-button"
                    onclick="showHome()">

                ← Back to Catalogue

            </button>


            <div class="product-grid">

                ${category.products
                    .map(
                        (product, index) =>
                            productCard(
                                category,
                                product,
                                index
                            )
                    )
                    .join("")}

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

function productCard(
    category,
    product,
    index
) {

    return `

        <article class="product-card"
                 onclick="showProduct(
                    '${category.id}',
                    ${index}
                 )">

            <div class="product-image-box">

                <img
                    src="${IMG}${product.image}"
                    alt="${product.title}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.style.display='none'"
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
   PRODUCT DETAIL
===================================================== */

function showProduct(
    categoryId,
    productIndex
) {

    closeMobileMenu();

    const category =
        categories.find(
            item => item.id === categoryId
        );

    if (!category) {

        showHome();

        return;
    }

    const product =
        category.products[productIndex];

    if (!product) {

        showCategory(categoryId);

        return;
    }


    /*
       Remove duplicate images.
    */

    const images =
        [...new Set(
            product.images || [product.image]
        )];


    mainContent.innerHTML = `

        <section class="product-detail">


            <!-- =========================================
                 CATEGORY BACK
            ========================================== -->

            <div class="product-detail-top">

                <button class="detail-back"
                        onclick="showCategory('${category.id}')">

                    ← Back to ${category.title}

                </button>

            </div>


            <!-- =========================================
                 PRODUCT
            ========================================== -->

            <div class="product-detail-layout">


                <!-- =====================================
                     GALLERY
                ====================================== -->

                <div class="detail-gallery">


                    <div class="main-product-image-box">

                        <img
                            id="mainProductImage"
                            src="${IMG}${images[0]}"
                            alt="${product.title}"
                            class="main-product-image"
                        >

                    </div>


                    ${
                        images.length > 1
                        ?
                        `
                        <div class="thumbnail-row">

                            ${images
                                .map(
                                    (image, index) => `
                                    
                                    <button
                                        class="
                                            thumbnail
                                            ${index === 0 ? "active" : ""}
                                        "
                                        onclick="
                                            changeProductImage(
                                                '${IMG}${image}',
                                                this
                                            )
                                        "
                                    >

                                        <img
                                            src="${IMG}${image}"
                                            alt="${product.title}"
                                        >

                                    </button>

                                    `
                                )
                                .join("")}

                        </div>
                        `
                        :
                        ""
                    }

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
                        ENQUIRE ABOUT THIS PRODUCT
                    </span>


                    <div class="enquiry-buttons">

                        <a
                            href="tel:${companyPhone}"
                            class="enquiry-button call-button"
                        >
                            Call OYA
                        </a>


                        <a
                            href="https://wa.me/91${companyPhone}"
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

function changeProductImage(
    imagePath,
    thumbnail
) {

    const mainImage =
        document.getElementById(
            "mainProductImage"
        );

    if (!mainImage) return;


    mainImage.src = imagePath;


    document
        .querySelectorAll(".thumbnail")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    thumbnail.classList.add(
        "active"
    );
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

    /*
       If user is on a category/product page,
       first return home.
    */

    showHome();

    setTimeout(() => {

        const catalogue =
            document.getElementById(
                "catalogue"
            );

        if (catalogue) {

            catalogue.scrollIntoView({
                behavior: "smooth"
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
            document.getElementById(
                "about"
            );

        if (about) {

            about.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 100);
}


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        showHome();

    }
);


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

            closeMobileMenu();

        }

    }
);
