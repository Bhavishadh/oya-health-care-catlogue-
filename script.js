/* =====================================================
   OYA HEALTH CARE
   CATALOGUE JAVASCRIPT
===================================================== */


/* =====================================================
   MAIN CONTENT
===================================================== */

const mainContent =
    document.getElementById("mainContent");


const mobileMenu =
    document.getElementById("mobileMenu");


/* =====================================================
   IMAGE PATH HELPER
===================================================== */

function img(path) {

    return "images/" + path;

}



/* =====================================================
   CATEGORIES
===================================================== */

const categories = [


    /* -------------------------------------------------
       HOSPITAL FURNITURE
    ------------------------------------------------- */

    {
        id: "hospital-furniture",

        title: "Hospital Furniture",

        label: "OYA COLLECTION",

        description:
            "Hospital beds and furniture designed for patient care and healthcare requirements.",

        image:
            img("hospitalbed.webp"),

        products: [

            {
                id: "hospital-bed",

                title: "Hospital Bed",

                category: "HOSPITAL FURNITURE",

                description:
                    "Hospital bed designed for patient comfort, care and healthcare requirements.",

                images: [

                    img("hospitalbed.webp"),
                    img("fowlerbed.png"),
                    img("foldingbed.png"),
                    img("semi bed.png")

                ]

            },

            {
                id: "fowler-bed",

                title: "Fowler Bed",

                category: "HOSPITAL FURNITURE",

                description:
                    "Comfortable Fowler bed suitable for hospitals and patient care.",

                images: [

                    img("fowlerbed.png"),
                    img("hospitalbed.webp")

                ]

            },

            {
                id: "folding-bed",

                title: "Folding Bed",

                category: "HOSPITAL FURNITURE",

                description:
                    "Practical folding hospital bed for healthcare and patient requirements.",

                images: [

                    img("foldingbed.png"),
                    img("hospitalbed.webp")

                ]

            },

            {
                id: "semi-fowler-bed",

                title: "Semi Fowler Bed",

                category: "HOSPITAL FURNITURE",

                description:
                    "Semi Fowler hospital bed designed for patient positioning and comfort.",

                images: [

                    img("semi bed.png"),
                    img("hospitalbed.webp")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       OXYGEN EQUIPMENT
    ------------------------------------------------- */

    {
        id: "oxygen-equipment",

        title: "Oxygen Equipment",

        label: "OYA COLLECTION",

        description:
            "Oxygen cylinders and related equipment for healthcare and home-care requirements.",

        image:
            img("oxy5ltr.png"),

        products: [

            {
                id: "oxygen-cylinder",

                title: "Oxygen Cylinder",

                category: "OXYGEN EQUIPMENT",

                description:
                    "Oxygen cylinder with regulator and accessories for medical oxygen requirements.",

                images: [

                    img("oxy5ltr.png"),
                    img("oxy10ltr.png")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       OXYGEN CONCENTRATOR
    ------------------------------------------------- */

    {
        id: "oxygen-concentrator",

        title: "Oxygen Concentrator",

        label: "OYA COLLECTION",

        description:
            "Oxygen concentrators designed for convenient oxygen support at home and in healthcare environments.",

        image:
            img("concentrator.webp"),

        products: [

            {
                id: "oxygen-concentrator",

                title: "Oxygen Concentrator",

                category: "OXYGEN CONCENTRATOR",

                description:
                    "Oxygen concentrator designed to provide convenient oxygen support for home healthcare and patient care.",

                images: [

                    img("concentrator.webp")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       WHEELCHAIRS
    ------------------------------------------------- */

    {
        id: "wheelchairs",

        title: "Wheelchairs",

        label: "OYA COLLECTION",

        description:
            "Mobility solutions designed for comfortable patient movement and support.",

        image:
            img("w1.png"),

        products: [

            {
                id: "wheelchair",

                title: "Wheelchair",

                category: "WHEELCHAIRS",

                description:
                    "Comfortable wheelchair designed for patient mobility and everyday support.",

                images: [

                    img("w1.png")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       PATIENT MONITORING
    ------------------------------------------------- */

    {
        id: "patient-monitoring",

        title: "Patient Monitoring",

        label: "OYA COLLECTION",

        description:
            "Equipment designed for suitable patient monitoring requirements.",

        image:
            img("pm.png"),

        products: [

            {
                id: "patient-monitor",

                title: "Patient Monitor",

                category: "PATIENT MONITORING",

                description:
                    "Patient monitoring equipment designed for healthcare and clinical environments.",

                images: [

                    img("pm.png")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       CRITICAL CARE
    ------------------------------------------------- */

    {
        id: "critical-care",

        title: "Critical Care",

        label: "OYA COLLECTION",

        description:
            "Respiratory-support equipment for suitable critical-care environments.",

        image:
            img("venti.png"),

        products: [

            {
                id: "ventilator",

                title: "Ventilator",

                category: "CRITICAL CARE",

                description:
                    "Respiratory support equipment designed for critical-care requirements.",

                images: [

                    img("venti.png")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       DIAGNOSTIC EQUIPMENT
    ------------------------------------------------- */

    {
        id: "diagnostic-equipment",

        title: "Diagnostic Equipment",

        label: "OYA COLLECTION",

        description:
            "Equipment designed for basic patient measurements and diagnostics.",

        image:
            img("pu.png"),

        products: [

            {
                id: "diagnostic-equipment",

                title: "Diagnostic Equipment",

                category: "DIAGNOSTIC EQUIPMENT",

                description:
                    "Healthcare equipment designed for basic patient measurements and diagnostic requirements.",

                images: [

                    img("pu.png")

                ]

            }

        ]

    },



    /* -------------------------------------------------
       EMERGENCY CARE
    ------------------------------------------------- */

    {
        id: "emergency-care",

        title: "Emergency Care",

        label: "OYA COLLECTION",

        description:
            "Emergency transportation and urgent patient-care support.",

        image:
            img("amb.png"),

        products: [

            {
                id: "ambulance",

                title: "Ambulance",

                category: "EMERGENCY CARE",

                description:
                    "Emergency transportation support for urgent healthcare requirements.",

                images: [

                    img("amb.png")

                ]

            }

        ]

    }

];



/* =====================================================
   CATEGORY CARD
===================================================== */

function categoryCard(category) {

    const productCount =
        category.products.length;


    return `

        <article
            class="category-card"
            onclick="showCategory('${category.id}')"
        >

            <div class="category-image-box">

                <img
                    src="${category.image}"
                    alt="${category.title}"
                    class="category-image"
                    loading="lazy"
                >

            </div>


            <div class="category-info">

                <div class="category-label">
                    ${category.label}
                </div>


                <h2 class="category-title">
                    ${category.title}
                </h2>


                <p class="category-description">
                    ${category.description}
                </p>


                <div class="category-bottom">

                    <span class="product-count">
                        ${productCount}
                        ${productCount === 1 ? "product" : "products"}
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
   PRODUCT CARD
===================================================== */

function productCard(product, category) {

    return `

        <article
            class="product-card"
            onclick="showProduct('${category.id}', '${product.id}')"
        >

            <div class="product-image-box">

                <img
                    src="${product.images[0]}"
                    alt="${product.title}"
                    class="product-image"
                    loading="lazy"
                >

            </div>


            <div class="product-card-info">

                <div class="product-category">
                    ${product.category}
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
   HOME PAGE
===================================================== */

function showHome(scrollTop = true) {


    closeMobileMenu();


    mainContent.innerHTML = `


        <!-- =========================================
             MOBILE HOME COMPANY INFORMATION
        ========================================== -->

        <section
            class="mobile-home-info"
            id="about"
        >


            <a
                href="#"
                onclick="showHome(); return false;"
            >

                <img
                    src="images/logo%20(2).png"
                    alt="Oya Health Care"
                    class="mobile-home-logo"
                >

            </a>


            <h1 class="mobile-home-title">
                Oya Health Care
            </h1>


            <p class="mobile-home-description">

                OYA Health Care – Trusted Medical Equipment & Home Healthcare
                Solutions OYA Health Care is a leading supplier of high-quality
                medical equipment, hospital supplies, and home healthcare
                products in India. We are committed to providing reliable,
                affordable and quality healthcare solutions.

            </p>


            <div class="mobile-home-contact">


                <div class="contact-item">

                    <div class="contact-icon">
                        ⌖
                    </div>

                    <div>
                        Shop no 9 Shiv Vithai Galaxy near SBI Bank Thakurli
                    </div>

                </div>


                <div class="contact-item">

                    <div class="contact-icon">
                        ♧
                    </div>

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

                ${categories
                    .map(categoryCard)
                    .join("")}

            </div>


        </section>


    `;


    if (scrollTop) {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}



/* =====================================================
   CATEGORY PAGE
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


    mainContent.innerHTML = `


        <section class="category-page">


            <div class="page-heading">

                <div class="category-page-title">
                    ${category.title}
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
                    .map(
                        product =>
                            productCard(
                                product,
                                category
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
   PRODUCT DETAIL PAGE
===================================================== */

function showProduct(categoryId, productId) {


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
        category.products.find(
            item => item.id === productId
        );


    if (!product) {

        showCategory(categoryId);

        return;

    }


    const images =
        product.images;


    mainContent.innerHTML = `


        <section class="product-detail">


            <div class="product-detail-top">


                <button
                    class="detail-back"
                    onclick="showCategory('${category.id}')"
                >

                    ← Back to ${category.title}

                </button>


            </div>



            <div class="product-detail-layout">


                <!-- =====================================
                     GALLERY
                ====================================== -->

                <div class="detail-gallery">


                    <div
                        class="main-product-image-box"
                    >

                        <img
                            id="mainProductImage"
                            src="${images[0]}"
                            alt="${product.title}"
                            class="main-product-image"
                        >

                    </div>



                    <div
                        class="thumbnail-row"
                    >

                        ${images
                            .map(
                                (image, index) => `

                                    <button
                                        class="thumbnail ${
                                            index === 0
                                                ? "active"
                                                : ""
                                        }"
                                        onclick="
                                            changeMainImage(
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
                            .join("")}

                    </div>


                </div>



                <!-- =====================================
                     PRODUCT INFORMATION
                ====================================== -->

                <div
                    class="product-detail-info"
                >


                    <div class="detail-category">
                        ${product.category}
                    </div>


                    <h1 class="detail-title">
                        ${product.title}
                    </h1>


                    <p class="detail-description">
                        ${product.description}
                    </p>


                    <div class="detail-line"></div>


                    <span class="detail-label">
                        AVAILABLE FOR ENQUIRY
                    </span>


                    <div class="enquiry-buttons">


                        <a
                            href="tel:7021235223"
                            class="enquiry-button call-button"
                        >
                            Call Now
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

function changeMainImage(
    image,
    button
) {


    const mainImage =
        document.getElementById(
            "mainProductImage"
        );


    if (!mainImage) return;


    mainImage.src = image;


    document
        .querySelectorAll(".thumbnail")
        .forEach(
            item =>
                item.classList.remove("active")
        );


    button.classList.add("active");

}



/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMobileMenu() {


    mobileMenu.classList.toggle(
        "open"
    );


}


function closeMobileMenu() {


    if (!mobileMenu) return;


    mobileMenu.classList.remove(
        "open"
    );

}



/* =====================================================
   SCROLL TO CATALOGUE
===================================================== */

function scrollToCatalogue() {


    showHome(false);


    setTimeout(() => {

        const catalogue =
            document.getElementById(
                "catalogue"
            );


        if (catalogue) {

            catalogue.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 50);

}



/* =====================================================
   SCROLL TO ABOUT
===================================================== */

function scrollToAbout() {


    showHome(false);


    setTimeout(() => {

        const about =
            document.getElementById(
                "about"
            );


        if (about) {

            about.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 50);

}



/* =====================================================
   INITIAL PAGE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        showHome(false);

    }
);
