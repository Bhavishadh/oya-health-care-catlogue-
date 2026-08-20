/* =========================================================
   OYA HEALTH CARE
   MAIN WEBSITE JAVASCRIPT
   ========================================================= */

/* =========================================================
   CATEGORY DATA
   ========================================================= */

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
                name: "Hospital Bed",
                description:
                    "Hospital bed designed for patient comfort, care and professional healthcare use.",
                images: [
                    "images/hospitalbed.webp",
                    "images/fowlerbed.png",
                    "images/semi bed.png",
                    "images/foldingbed.png"
                ]
            },
            {
                id: "fowler-bed",
                name: "Fowler Bed",
                description:
                    "Comfortable adjustable hospital bed suitable for hospitals, clinics and home care.",
                images: [
                    "images/fowlerbed.png",
                    "images/hospitalbed.webp"
                ]
            },
            {
                id: "semi-fowler-bed",
                name: "Semi Fowler Bed",
                description:
                    "Semi Fowler hospital bed designed for comfortable patient positioning and care.",
                images: [
                    "images/semi bed.png",
                    "images/hospitalbed.webp"
                ]
            },
            {
                id: "folding-bed",
                name: "Folding Hospital Bed",
                description:
                    "Practical folding hospital bed for flexible healthcare and home-care requirements.",
                images: [
                    "images/foldingbed.png",
                    "images/hospitalbed.webp"
                ]
            }
        ]
    },

    {
        id: "oxygen-equipment",
        title: "Oxygen Equipment",
        description:
            "Oxygen cylinders and related equipment for healthcare and home-care requirements.",
        image: "images/oxy1.png",
        products: [
            {
                id: "oxygen-cylinder",
                name: "Oxygen Cylinder",
                description:
                    "Oxygen cylinder with regulator suitable for medical and home healthcare requirements.",
                images: [
                    "images/oxy1.png",
                    "images/oxy5ltr.png",
                    "images/oxy10ltr.png"
                ]
            },
            {
                id: "oxygen-cylinder-5ltr",
                name: "Oxygen Cylinder 5 Litre",
                description:
                    "Compact 5 litre oxygen cylinder designed for convenient medical oxygen use.",
                images: [
                    "images/oxy5ltr.png",
                    "images/oxy1.png"
                ]
            },
            {
                id: "oxygen-cylinder-10ltr",
                name: "Oxygen Cylinder 10 Litre",
                description:
                    "10 litre oxygen cylinder suitable for healthcare and oxygen-support requirements.",
                images: [
                    "images/oxy10ltr.png",
                    "images/oxy1.png"
                ]
            }
        ]
    },

    /* =====================================================
       NEW CATEGORY
       OXYGEN CONCENTRATOR
       ===================================================== */

    {
        id: "oxygen-concentrator",
        title: "Oxygen Concentrator",
        description:
            "Oxygen concentrators designed to provide convenient oxygen support for home healthcare.",
        image: "images/concentrator.webp",
        products: [
            {
                id: "oxygen-concentrator",
                name: "Oxygen Concentrator",
                description:
                    "Oxygen concentrator designed for convenient home oxygen support and everyday healthcare requirements.",
                images: [
                    "images/concentrator.webp"
                ]
            }
        ]
    },

    {
        id: "wheelchairs",
        title: "Wheelchairs",
        description:
            "Mobility solutions designed for comfortable patient movement and support.",
        image: "images/w1.png",
        products: [
            {
                id: "wheelchair",
                name: "Wheelchair",
                description:
                    "Comfortable wheelchair designed for safe and convenient patient mobility.",
                images: [
                    "images/w1.png"
                ]
            },
            {
                id: "wheelchair-2",
                name: "Wheelchair",
                description:
                    "Reliable mobility solution suitable for home, hospital and patient-care requirements.",
                images: [
                    "images/w1.png"
                ]
            }
        ]
    },

    {
        id: "patient-monitoring",
        title: "Patient Monitoring",
        description:
            "Equipment designed for suitable patient monitoring requirements.",
        image: "images/pm.png",
        products: [
            {
                id: "patient-monitor",
                name: "Patient Monitor",
                description:
                    "Patient monitoring equipment designed for professional healthcare environments.",
                images: [
                    "images/pm.png"
                ]
            }
        ]
    },

    {
        id: "critical-care",
        title: "Critical Care",
        description:
            "Respiratory-support equipment for suitable critical-care environments.",
        image: "images/venti.png",
        products: [
            {
                id: "ventilator",
                name: "Ventilator",
                description:
                    "Respiratory support equipment designed for critical-care environments.",
                images: [
                    "images/venti.png"
                ]
            }
        ]
    },

    {
        id: "diagnostic-equipment",
        title: "Diagnostic Equipment",
        description:
            "Equipment designed for basic patient measurements and diagnostics.",
        image: "images/amb.png",
        products: [
            {
                id: "diagnostic-equipment",
                name: "Diagnostic Equipment",
                description:
                    "Healthcare equipment designed to support basic patient measurements and diagnostics.",
                images: [
                    "images/amb.png"
                ]
            }
        ]
    },

    {
        id: "emergency-care",
        title: "Emergency Care",
        description:
            "Emergency transportation and urgent patient-care support.",
        image: "images/amb.png",
        products: [
            {
                id: "ambulance",
                name: "Ambulance",
                description:
                    "Emergency transportation solution for urgent patient-care requirements.",
                images: [
                    "images/amb.png"
                ]
            }
        ]
    }

];


/* =========================================================
   COMPANY INFORMATION
   ========================================================= */

const companyInfo = {
    title: "Oya Health Care",

    description:
        "OYA Health Care – Trusted Medical Equipment & Home Healthcare Solutions OYA Health Care is a leading supplier of high-quality medical equipment, hospital supplies, and home healthcare products in India. We are committed to providing reliable, affordable and quality healthcare solutions.",

    address:
        "Shop no 9 Shiv Vithai Galaxy near SBI Bank Thakurli",

    phone:
        "7021235223"
};


/* =========================================================
   DOM
   ========================================================= */

const mainContent =
    document.getElementById("mainContent");

const mobileMenu =
    document.getElementById("mobileMenu");

const menuButton =
    document.getElementById("menuButton");


/* =========================================================
   IMAGE PATH HELPER
   ========================================================= */

function safeImage(path) {

    if (!path) {
        return "";
    }

    return path.replaceAll(" ", "%20");
}


/* =========================================================
   HOME PAGE
   ========================================================= */

function showHome(scrollTop = true) {

    closeMobileMenu();

    const homeInfo = `
        <section class="mobile-home-info">

            <a href="#" onclick="showHome(); return false;">
                <img
                    src="${safeImage("images/logo (2).png")}"
                    alt="Oya Health Care"
                    class="mobile-home-logo"
                >
            </a>

            <h1 class="mobile-home-title">
                ${companyInfo.title}
            </h1>

            <p class="mobile-home-description">
                ${companyInfo.description}
            </p>

            <div class="mobile-home-contact">

                <div class="contact-item">
                    <div class="contact-icon">⌖</div>
                    <div>
                        ${companyInfo.address}
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-icon">♧</div>
                    <a href="tel:${companyInfo.phone}">
                        ${companyInfo.phone}
                    </a>
                </div>

            </div>

        </section>
    `;


    const heading = `
        <div class="page-heading">

            <div class="eyebrow">
                CATALOGUE
            </div>

            <div class="heading-line"></div>

        </div>
    `;


    mainContent.innerHTML = `
        ${homeInfo}
        ${heading}

        <section class="category-grid">

            ${categories.map(categoryCard).join("")}

        </section>
    `;


    if (scrollTop) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================================
   CATEGORY CARD
   ========================================================= */

function categoryCard(category) {

    const productCount =
        category.products.length;

    return `
        <article
            class="category-card"
            onclick="openCategory('${category.id}')"
        >

            <div class="category-image-box">

                <img
                    src="${safeImage(category.image)}"
                    alt="${category.title}"
                    class="category-image"
                    loading="lazy"
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


/* =========================================================
   OPEN CATEGORY
   ========================================================= */

function openCategory(categoryId) {

    closeMobileMenu();

    const category =
        categories.find(
            item => item.id === categoryId
        );

    if (!category) {
        return;
    }


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
                type="button"
            >
                ← Back to Catalogue
            </button>


            <section class="product-grid">

                ${category.products
                    .map(product =>
                        productCard(product, category)
                    )
                    .join("")
                }

            </section>

        </section>
    `;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function productCard(product, category) {

    const firstImage =
        product.images &&
        product.images.length
            ? product.images[0]
            : category.image;


    return `
        <article
            class="product-card"
            onclick="openProduct(
                '${category.id}',
                '${product.id}'
            )"
        >

            <div class="product-image-box">

                <img
                    src="${safeImage(firstImage)}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                >

            </div>


            <div class="product-card-info">

                <div class="product-category">
                    ${category.title.toUpperCase()}
                </div>

                <h2 class="product-title">
                    ${product.name}
                </h2>

                <p class="product-description">
                    ${product.description}
                </p>

            </div>

        </article>
    `;
}


/* =========================================================
   OPEN PRODUCT
   ========================================================= */

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


    const images =
        product.images &&
        product.images.length
            ? product.images
            : [category.image];


    const firstImage =
        images[0];


    mainContent.innerHTML = `

        <section class="product-detail">

            <div class="product-detail-top">

                <button
                    class="detail-back"
                    type="button"
                    onclick="openCategory('${category.id}')"
                >
                    ← Back to Catalogue
                </button>

            </div>


            <div class="product-detail-layout">


                <!-- =========================
                     PRODUCT GALLERY
                ========================= -->

                <div class="detail-gallery">

                    <div class="main-product-image-box">

                        <img
                            id="mainProductImage"
                            src="${safeImage(firstImage)}"
                            alt="${product.name}"
                            class="main-product-image"
                        >

                    </div>


                    <!-- THUMBNAILS -->

                    <div
                        class="thumbnail-row"
                        id="thumbnailRow"
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
                                        type="button"
                                        onclick="changeProductImage(
                                            '${safeImage(image)}',
                                            this
                                        )"
                                    >

                                        <img
                                            src="${safeImage(image)}"
                                            alt="${product.name}"
                                        >

                                    </button>
                                `
                            )
                            .join("")
                        }

                    </div>

                </div>


                <!-- =========================
                     PRODUCT INFORMATION
                ========================= -->

                <div class="product-detail-info">

                    <div class="detail-category">
                        ${category.title.toUpperCase()}
                    </div>


                    <h1 class="detail-title">
                        ${product.name}
                    </h1>


                    <p class="detail-description">
                        ${product.description}
                    </p>


                    <div class="detail-line"></div>


                    <span class="detail-label">
                        QUALITY HEALTHCARE EQUIPMENT
                    </span>


                    <div class="size-option">
                        Suitable for professional & home care
                    </div>


                    <div class="enquiry-buttons">

                        <a
                            href="tel:${companyInfo.phone}"
                            class="enquiry-button call-button"
                        >
                            Enquire Now
                        </a>


                        <a
                            href="https://wa.me/91${companyInfo.phone}"
                            target="_blank"
                            rel="noopener"
                            class="enquiry-button whatsapp-button"
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


/* =========================================================
   CHANGE PRODUCT IMAGE
   ========================================================= */

function changeProductImage(imagePath, thumbnail) {

    const mainImage =
        document.getElementById(
            "mainProductImage"
        );

    if (!mainImage) {
        return;
    }


    mainImage.src =
        imagePath;


    document
        .querySelectorAll(".thumbnail")
        .forEach(item => {

            item.classList.remove("active");

        });


    if (thumbnail) {
        thumbnail.classList.add("active");
    }
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMobileMenu() {

    if (!mobileMenu) {
        return;
    }


    mobileMenu.classList.toggle("open");


    if (menuButton) {

        menuButton.classList.toggle(
            "active"
        );

    }
}


/* =========================================================
   CLOSE MOBILE MENU
   ========================================================= */

function closeMobileMenu() {

    if (mobileMenu) {

        mobileMenu.classList.remove(
            "open"
        );

    }


    if (menuButton) {

        menuButton.classList.remove(
            "active"
        );

    }
}


/* =========================================================
   SCROLL TO CATALOGUE
   ========================================================= */

function scrollToCatalogue() {

    closeMobileMenu();

    showHome(false);


    setTimeout(() => {

        const heading =
            document.querySelector(
                ".page-heading"
            );

        if (heading) {

            heading.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 50);
}


/* =========================================================
   SCROLL TO ABOUT
   ========================================================= */

function scrollToAbout() {

    closeMobileMenu();

    showHome(false);


    setTimeout(() => {

        const info =
            document.querySelector(
                ".mobile-home-info"
            );

        if (info) {

            info.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 50);
}


/* =========================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        if (!mobileMenu ||
            !menuButton) {
            return;
        }


        const clickedInsideMenu =
            mobileMenu.contains(
                event.target
            );


        const clickedButton =
            menuButton.contains(
                event.target
            );


        if (
            mobileMenu.classList.contains("open") &&
            !clickedInsideMenu &&
            !clickedButton
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   HANDLE BROWSER BACK BUTTON
   ========================================================= */

window.addEventListener(
    "popstate",
    function() {

        showHome();

    }
);


/* =========================================================
   INITIAL LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showHome(false);

    }
);
