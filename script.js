/* =========================================================
   OYA HEALTH CARE
   FINAL SHOPPING STYLE CATALOGUE
========================================================= */


/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [

    /* =====================================================
       01 HOSPITAL FURNITURE
    ===================================================== */

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


    /* =====================================================
       02 OXYGEN CYLINDERS
    ===================================================== */

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


    /* =====================================================
       03 OXYGEN CONCENTRATORS
    ===================================================== */

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


    /* =====================================================
       04 WHEELCHAIRS
    ===================================================== */

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


    /* =====================================================
       05 CPAP MACHINES
    ===================================================== */

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


    /* =====================================================
       06 BIPAP MACHINES
    ===================================================== */

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


    /* =====================================================
       07 MOBILITY AIDS
    ===================================================== */

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


    /* =====================================================
       08 PATIENT MONITORING
    ===================================================== */

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


    /* =====================================================
       09 CRITICAL CARE
    ===================================================== */

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


    /* =====================================================
       10 DIAGNOSTICS
    ===================================================== */

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


    /* =====================================================
       11 EMERGENCY CARE
    ===================================================== */

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


/* =========================================================
   MAIN CONTENT
========================================================= */

const mainContent =
    document.getElementById("mainContent");


/* =========================================================
   FORCE SHOPPING STYLE
   This prevents oversized mobile cards.
========================================================= */

function injectFinalStyles() {

    if (document.getElementById("oya-final-styles")) return;

    const style = document.createElement("style");

    style.id = "oya-final-styles";

    style.textContent = `

        /* ================================================
           CATEGORY GRID
        ================================================ */

        .category-grid {

            display: grid;

            grid-template-columns:
                repeat(3, minmax(0, 1fr));

            gap: 38px 30px;

            width: 100%;

        }


        .category-card {

            display: block;

            width: 100%;

            padding: 0;

            margin: 0;

            border: 0;

            background: transparent;

            text-align: left;

            cursor: pointer;

            color: inherit;

        }


        .category-image-box {

            width: 100%;

            aspect-ratio: 1 / 0.82;

            background: #ffffff;

            border-radius: 24px;

            overflow: hidden;

            display: flex;

            align-items: center;

            justify-content: center;

            margin-bottom: 18px;

        }


        .category-image-box img {

            width: 86%;

            height: 86%;

            object-fit: contain;

            display: block;

            transition:
                transform .3s ease;

        }


        .category-card:hover
        .category-image-box img {

            transform: scale(1.04);

        }


        .category-info {

            padding: 0 8px;

        }


        .category-label,
        .product-category {

            display: block;

            font-size: 11px;

            font-weight: 700;

            letter-spacing: 3px;

            text-transform: uppercase;

            color: #075f57;

            margin-bottom: 9px;

        }


        .category-title {

            margin: 0 0 10px;

            font-size: 25px;

            line-height: 1.15;

            font-weight: 500;

            color: #111918;

        }


        .category-description {

            margin: 0;

            color: #78817f;

            font-size: 15px;

            line-height: 1.55;

        }


        .category-bottom {

            display: flex;

            align-items: center;

            justify-content: space-between;

            border-top: 1px solid #d8d9d2;

            margin-top: 18px;

            padding-top: 15px;

        }


        .product-count {

            font-size: 13px;

            font-weight: 700;

            letter-spacing: 2px;

            color: #075f57;

        }


        .category-arrow {

            font-size: 22px;

            color: #ad8b4d;

        }


        /* ================================================
           CATEGORY PAGE
        ================================================ */

        .category-page {

            width: 100%;

            padding: 0;

        }


        .category-page-title {

            margin: 0;

            max-width: 650px;

            font-size: 28px;

            line-height: 1.3;

            letter-spacing: 5px;

            text-transform: uppercase;

            font-style: italic;

            color: #075f57;

        }


        .category-page-line {

            height: 1px;

            background: #aeb4af;

            width: 100%;

            margin: 20px 0 40px;

        }


        .back-button,
        .detail-back {

            border: 0;

            background: transparent;

            padding: 0;

            font-size: 18px;

            font-weight: 600;

            color: #687370;

            cursor: pointer;

            margin-bottom: 38px;

        }


        .category-page-description {

            max-width: 700px;

            color: #78817f;

            font-size: 17px;

            line-height: 1.6;

            margin: -10px 0 35px;

        }


        /* ================================================
           PRODUCTS INSIDE CATEGORY
        ================================================ */

        .product-grid {

            display: grid;

            grid-template-columns:
                repeat(2, minmax(0, 1fr));

            gap: 50px 28px;

            width: 100%;

        }


        .product-card {

            display: block;

            width: 100%;

            border: 0;

            padding: 0;

            margin: 0;

            background: transparent;

            text-align: left;

            cursor: pointer;

            color: inherit;

        }


        .product-image-box {

            width: 100%;

            aspect-ratio: 1 / 0.88;

            background: #ffffff;

            border-radius: 26px;

            overflow: hidden;

            display: flex;

            align-items: center;

            justify-content: center;

            margin-bottom: 18px;

        }


        .product-image-box img {

            width: 82%;

            height: 82%;

            object-fit: contain;

            display: block;

            transition:
                transform .3s ease;

        }


        .product-card:hover
        .product-image-box img {

            transform: scale(1.04);

        }


        .product-card-info {

            padding: 0 6px;

        }


        .product-title {

            margin: 0 0 10px;

            font-size: 25px;

            line-height: 1.2;

            font-weight: 500;

            color: #111918;

        }


        .product-description {

            margin: 0;

            color: #78817f;

            font-size: 15px;

            line-height: 1.55;

        }


        /* ================================================
           PRODUCT DETAIL
        ================================================ */

        .product-detail {

            width: 100%;

            background: #ffffff;

            min-height: 100vh;

            padding: 0;

        }


        .product-detail-top {

            width: 100%;

        }


        .detail-back {

            margin-bottom: 25px;

        }


        .product-detail-layout {

            display: grid;

            grid-template-columns:
                minmax(0, 1.1fr)
                minmax(0, .9fr);

            gap: 58px;

            align-items: start;

        }


        .detail-gallery {

            width: 100%;

        }


        .main-product-image-box {

            width: 100%;

            aspect-ratio: 1 / .92;

            background: #ffffff;

            border-radius: 18px;

            overflow: hidden;

            display: flex;

            align-items: center;

            justify-content: center;

        }


        .main-product-image {

            width: 100%;

            height: 100%;

            object-fit: contain;

            display: block;

        }


        /* ================================================
           THUMBNAILS
        ================================================ */

        .thumbnail-row {

            display: flex;

            gap: 12px;

            margin-top: 14px;

            overflow-x: auto;

            padding-bottom: 4px;

        }


        .thumbnail {

            flex: 0 0 72px;

            width: 72px;

            height: 72px;

            padding: 4px;

            border: 1px solid #ddd;

            border-radius: 10px;

            background: #ffffff;

            cursor: pointer;

            overflow: hidden;

        }


        .thumbnail.active {

            border: 2px solid #274fdf;

        }


        .thumbnail img {

            width: 100%;

            height: 100%;

            object-fit: contain;

        }


        /* ================================================
           DETAIL INFORMATION
        ================================================ */

        .product-detail-info {

            padding: 0 5px;

        }


        .detail-category {

            font-size: 11px;

            letter-spacing: 3px;

            font-weight: 700;

            color: #777;

            text-transform: uppercase;

            margin-bottom: 16px;

        }


        .detail-title {

            margin: 0 0 25px;

            font-size: clamp(32px, 4vw, 52px);

            line-height: 1.08;

            font-weight: 500;

            color: #111918;

        }


        .detail-description {

            margin: 0;

            font-size: 17px;

            line-height: 1.7;

            color: #707876;

            white-space: pre-line;

        }


        .detail-line {

            width: 100%;

            height: 1px;

            background: #bfc3bf;

            margin: 38px 0;

        }


        .detail-label {

            display: block;

            font-size: 11px;

            font-weight: 700;

            letter-spacing: 3px;

            color: #777;

            margin-bottom: 14px;

        }


        .size-option {

            display: inline-block;

            border: 1px solid #777;

            border-radius: 9px;

            padding: 9px 15px;

            font-size: 14px;

            font-weight: 600;

            color: #111;

        }


        .enquiry-buttons {

            display: flex;

            flex-wrap: wrap;

            gap: 12px;

            margin-top: 30px;

        }


        .enquiry-button {

            display: inline-flex;

            align-items: center;

            justify-content: center;

            padding: 13px 20px;

            border-radius: 8px;

            text-decoration: none;

            font-size: 14px;

            font-weight: 700;

        }


        .call-button {

            background: #075f57;

            color: white;

        }


        .whatsapp-button {

            border: 1px solid #075f57;

            color: #075f57;

            background: white;

        }


        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 700px) {

            .category-grid {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr));

                gap: 38px 18px;

            }


            .category-image-box {

                border-radius: 20px;

                aspect-ratio: 1 / .9;

                margin-bottom: 13px;

            }


            .category-image-box img {

                width: 82%;

                height: 82%;

            }


            .category-info {

                padding: 0 4px;

            }


            .category-label,
            .product-category {

                font-size: 8px;

                letter-spacing: 2px;

                margin-bottom: 7px;

            }


            .category-title {

                font-size: 19px;

                line-height: 1.2;

                margin-bottom: 7px;

            }


            .category-description {

                font-size: 13px;

                line-height: 1.45;

            }


            .category-bottom {

                margin-top: 12px;

                padding-top: 11px;

            }


            .product-count {

                font-size: 10px;

                letter-spacing: 1.5px;

            }


            .category-arrow {

                font-size: 17px;

            }


            /* CATEGORY PAGE MOBILE */

            .category-page-title {

                font-size: 24px;

                letter-spacing: 4px;

                max-width: 100%;

            }


            .category-page-line {

                margin: 16px 0 32px;

            }


            .back-button {

                font-size: 17px;

                margin-bottom: 32px;

            }


            .category-page-description {

                font-size: 15px;

            }


            /* PRODUCT GRID MOBILE */

            .product-grid {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr));

                gap: 42px 18px;

            }


            .product-image-box {

                aspect-ratio: 1 / .9;

                border-radius: 20px;

                margin-bottom: 13px;

            }


            .product-image-box img {

                width: 84%;

                height: 84%;

            }


            .product-card-info {

                padding: 0 4px;

            }


            .product-title {

                font-size: 19px;

                line-height: 1.2;

                margin-bottom: 7px;

            }


            .product-description {

                font-size: 13px;

                line-height: 1.45;

            }


            /* PRODUCT DETAIL MOBILE */

            .product-detail-layout {

                grid-template-columns: 1fr;

                gap: 30px;

            }


            .main-product-image-box {

                aspect-ratio: 1 / .88;

                border-radius: 18px;

            }


            .thumbnail {

                flex-basis: 64px;

                width: 64px;

                height: 64px;

            }


            .product-detail-info {

                padding: 0;

            }


            .detail-title {

                font-size: 34px;

            }


            .detail-description {

                font-size: 16px;

            }


            .detail-line {

                margin: 28px 0;

            }


            .enquiry-buttons {

                flex-direction: column;

            }


            .enquiry-button {

                width: 100%;

            }

        }


        /* ================================================
           VERY SMALL PHONES
        ================================================ */

        @media (max-width: 380px) {

            .category-grid,
            .product-grid {

                gap-left: 12px;

                gap-right: 12px;

            }


            .category-title,
            .product-title {

                font-size: 17px;

            }


            .category-description,
            .product-description {

                font-size: 12px;

            }

        }

    `;

    document.head.appendChild(style);
}


/* =========================================================
   HOME
========================================================= */

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


/* =========================================================
   CATEGORY CARDS
========================================================= */

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


/* =========================================================
   OPEN CATEGORY
========================================================= */

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
                type="button"
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


    const backButton =
        document.querySelector(".back-button");


    if (backButton) {

        backButton.addEventListener(
            "click",
            showHome
        );

    }


    renderProducts(category);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   PRODUCTS INSIDE CATEGORY
========================================================= */

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


/* =========================================================
   PRODUCT DETAIL
========================================================= */

function openProduct(product, category) {

    if (!mainContent) return;


    /*
       If a product has a gallery array, use it.

       Otherwise use its main image.
    */

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
                    type="button"
                >
                    ← Back to ${category.name}
                </button>

            </div>


            <div class="product-detail-layout">


                <!-- IMAGE SIDE -->

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


                <!-- INFORMATION SIDE -->

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


    const backButton =
        document.querySelector(".detail-back");


    if (backButton) {

        backButton.addEventListener(
            "click",
            () => openCategory(category)
        );

    }


    renderThumbnails(gallery);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   THUMBNAILS
========================================================= */

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


/* =========================================================
   FIND CATEGORY
========================================================= */

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


/* =========================================================
   MOBILE MENU
========================================================= */

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


/* =========================================================
   CATALOGUE SCROLL
========================================================= */

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


/* =========================================================
   ABOUT SCROLL
========================================================= */

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


/* =========================================================
   OUTSIDE CLICK
========================================================= */

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


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           Apply final catalogue/product styles.
        */

        injectFinalStyles();


        /*
           Load home page.
        */

        showHome();


        console.log(
            "OYA Health Care - Final shopping catalogue loaded."
        );

    }
);
