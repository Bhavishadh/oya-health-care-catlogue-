/* =========================================================
   OYA HEALTH CARE
   CATEGORY → ALL PRODUCTS → FULL PRODUCT PAGE
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const categories = [

    {
        id: "hospital-furniture",

        title: "Hospital Furniture",

        image: "images/hospitalbed.webp",

        description:
            "Hospital beds and furniture designed for patient care and healthcare requirements.",

        products: [

            {
                name: "Manual Hospital Bed",

                images: [
                    "images/hospitalbed.webp"
                ],

                description:
                    "Hospital bed designed for patient comfort, positioning and everyday clinical care.",

                info: {
                    "TYPE": "Manual Hospital Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            },


            {
                name: "Semi-Fowler Bed",

                images: [
                    "images/semi bed.png"
                ],

                description:
                    "Semi-Fowler hospital bed designed for comfortable patient positioning.",

                info: {
                    "TYPE": "Semi-Fowler Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            },


            {
                name: "Fowler Hospital Bed",

                images: [
                    "images/fowlerbed.png"
                ],

                description:
                    "Fowler hospital bed designed for patient comfort and positioning.",

                info: {
                    "TYPE": "Fowler Hospital Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            },


            {
                name: "2-Function Hospital Bed",

                images: [
                    "images/2fbed.png"
                ],

                description:
                    "Functional hospital bed designed for dependable patient care.",

                info: {
                    "TYPE": "2-Function Hospital Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            },


            {
                name: "3-Function Hospital Bed",

                images: [
                    "images/3fbed.png"
                ],

                description:
                    "Multi-function hospital bed designed for flexible patient positioning.",

                info: {
                    "TYPE": "3-Function Hospital Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            },


            {
                name: "4-Function Hospital Bed",

                images: [
                    "images/4fbed.png"
                ],

                description:
                    "Advanced multi-function hospital bed designed for professional healthcare environments.",

                info: {
                    "TYPE": "4-Function Hospital Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            },


            {
                name: "Folding Hospital Bed",

                images: [
                    "images/foldingbed.png"
                ],

                description:
                    "Practical folding hospital bed for healthcare and patient-care environments.",

                info: {
                    "TYPE": "Folding Hospital Bed",
                    "USE": "Patient Care",
                    "CATEGORY": "Hospital Furniture"
                }
            }

        ]
    },


    /* =====================================================
       OXYGEN CYLINDERS
    ===================================================== */

    {
        id: "oxygen-cylinders",

        title: "Oxygen Cylinders",

        image: "images/oxy5ltr.png",

        description:
            "Medical oxygen cylinders available in different capacities.",

        products: [

            {
                name: 'Oxygen Cylinder "5Ltr"',

                images: [
                    "images/oxy5ltr.png"
                ],

                description:
                    "Compact oxygen cylinder suitable for appropriate oxygen-support requirements.",

                info: {
                    "SIZE": "5 Liter",
                    "TYPE": "Oxygen Cylinder",
                    "USE": "Medical Oxygen"
                }
            },


            {
                name: 'Oxygen Cylinder "10Ltr"',

                images: [
                    "images/oxy10ltr.png"
                ],

                description:
                    "Higher-capacity oxygen cylinder suitable for appropriate medical and healthcare applications.",

                info: {
                    "SIZE": "10 Liter",
                    "TYPE": "Oxygen Cylinder",
                    "USE": "Medical Oxygen"
                }
            }

        ]
    },


    /* =====================================================
       OXYGEN CONCENTRATOR
    ===================================================== */

    {
        id: "oxygen-concentrator",

        title: "Oxygen Concentrator",

        image: "images/concentrator.webp",

        description:
            "Oxygen concentrators designed for convenient respiratory support.",

        products: [

            {
                name: "Oxygen concentrator on rent",

                images: [
                    "images/concentrator.webp"
                ],

                description:
                    "On rent 24 hrs service at your doorstep. Rent with Oxygen cylinder.",

                info: {
                    "SIZE": "5 Liter to 10 Liter",
                    "SERVICE": "On Rent",
                    "AVAILABILITY": "24 Hrs",
                    "DELIVERY": "At Your Doorstep"
                }
            }

        ]
    },


    /* =====================================================
       WHEELCHAIRS
    ===================================================== */

    {
        id: "wheelchairs",

        title: "Wheelchairs",

        image: "images/w1.png",

        description:
            "Mobility solutions designed for comfortable patient movement and support.",

        products: [

            {
                name: "Standard Manual Wheelchair",

                images: [
                    "images/w1.png"
                ],

                description:
                    "Practical mobility solution designed for comfortable everyday movement and patient support.",

                info: {
                    "TYPE": "Manual Wheelchair",
                    "USE": "Mobility Support"
                }
            },


            {
                name: "Folding Wheelchair",

                images: [
                    "images/w2.png"
                ],

                description:
                    "Convenient foldable mobility solution designed for easier transport and storage.",

                info: {
                    "TYPE": "Folding Wheelchair",
                    "USE": "Mobility Support"
                }
            },


            {
                name: "Commode Wheelchair",

                images: [
                    "images/w3.png"
                ],

                description:
                    "Mobility and patient-care solution designed for additional convenience and support.",

                info: {
                    "TYPE": "Commode Wheelchair",
                    "USE": "Patient Care"
                }
            },


            {
                name: "Reclining Wheelchair",

                images: [
                    "images/w4.png"
                ],

                description:
                    "Supportive wheelchair designed with reclining functionality for enhanced patient comfort.",

                info: {
                    "TYPE": "Reclining Wheelchair",
                    "USE": "Mobility Support"
                }
            }

        ]
    },


    /* =====================================================
       CPAP
    ===================================================== */

    {
        id: "cpap-machines",

        title: "CPAP Machines",

        image: "images/c1.png",

        description:
            "Sleep-care equipment for suitable CPAP requirements.",

        products: [

            {
                name: "Standard CPAP Machine",

                images: [
                    "images/c1.png"
                ],

                description:
                    "CPAP solution designed for suitable sleep-care requirements.",

                info: {
                    "TYPE": "CPAP Machine",
                    "USE": "Sleep Care"
                }
            },


            {
                name: "Auto CPAP (APAP) Machine",

                images: [
                    "images/c2.png"
                ],

                description:
                    "Auto-adjusting CPAP solution designed for suitable sleep-care requirements.",

                info: {
                    "TYPE": "Auto CPAP",
                    "USE": "Sleep Care"
                }
            },


            {
                name: "Portable CPAP Machine",

                images: [
                    "images/c3.png"
                ],

                description:
                    "Compact CPAP option designed for convenient use.",

                info: {
                    "TYPE": "Portable CPAP",
                    "USE": "Sleep Care"
                }
            }

        ]
    },


    /* =====================================================
       BIPAP
    ===================================================== */

    {
        id: "bipap-machines",

        title: "BiPAP Machines",

        image: "images/b1.png",

        description:
            "Non-invasive respiratory-support equipment.",

        products: [

            {
                name: "Standard BiPAP Machine",

                images: [
                    "images/b1.png"
                ],

                description:
                    "Bi-level respiratory-support solution designed for suitable healthcare requirements.",

                info: {
                    "TYPE": "BiPAP Machine",
                    "USE": "Respiratory Support"
                }
            },


            {
                name: "Portable BiPAP Machine",

                images: [
                    "images/b2.png"
                ],

                description:
                    "Portable respiratory-support option designed for convenient handling and use.",

                info: {
                    "TYPE": "Portable BiPAP",
                    "USE": "Respiratory Support"
                }
            },


            {
                name: "Auto BiPAP Machine",

                images: [
                    "images/b1.png"
                ],

                description:
                    "Adaptive BiPAP option designed for suitable respiratory support.",

                info: {
                    "TYPE": "Auto BiPAP",
                    "USE": "Respiratory Support"
                }
            }

        ]
    },


    /* =====================================================
       WALKERS
    ===================================================== */

    {
        id: "walkers",

        title: "Walkers",

        image: "images/wl1.png",

        description:
            "Lightweight, folding and adjustable walking aids.",

        products: [

            {
                name: "Standard Walker",

                images: [
                    "images/wl1.png"
                ],

                description:
                    "Dependable mobility aid designed to provide walking support and stability.",

                info: {
                    "TYPE": "Standard Walker",
                    "USE": "Mobility Support"
                }
            },


            {
                name: "Folding Walker",

                images: [
                    "images/wl2.png"
                ],

                description:
                    "Practical folding mobility aid designed for easier storage and transportation.",

                info: {
                    "TYPE": "Folding Walker",
                    "USE": "Mobility Support"
                }
            },


            {
                name: "Adjustable Walker",

                images: [
                    "images/wl3.png"
                ],

                description:
                    "Height-adjustable mobility aid designed for adaptable everyday walking support.",

                info: {
                    "TYPE": "Adjustable Walker",
                    "USE": "Mobility Support"
                }
            }

        ]
    },


    /* =====================================================
       PATIENT MONITORING
    ===================================================== */

    {
        id: "patient-monitoring",

        title: "Patient Monitoring",

        image: "images/pm.png",

        description:
            "Patient monitoring equipment for vital signs and clinical observation.",

        products: [

            {
                name: "Patient Monitor",

                images: [
                    "images/pm.png"
                ],

                description:
                    "Patient-monitoring solution designed for suitable healthcare monitoring requirements.",

                info: {
                    "TYPE": "Patient Monitor",
                    "USE": "Patient Monitoring"
                }
            }

        ]
    },


    /* =====================================================
       CRITICAL CARE
    ===================================================== */

    {
        id: "critical-care",

        title: "Critical Care",

        image: "images/venti.png",

        description:
            "Advanced respiratory support equipment for critical care.",

        products: [

            {
                name: "ICU Ventilator",

                images: [
                    "images/venti.png"
                ],

                description:
                    "Critical-care respiratory support device intended for appropriate clinical environments.",

                info: {
                    "TYPE": "ICU Ventilator",
                    "USE": "Critical Care"
                }
            }

        ]
    },


    /* =====================================================
       DIAGNOSTIC
    ===================================================== */

    {
        id: "diagnostic-equipment",

        title: "Diagnostic Equipment",

        image: "images/pu.png",

        description:
            "Essential equipment for basic patient health measurements.",

        products: [

            {
                name: "Pulse Oximeter",

                images: [
                    "images/pu.png"
                ],

                description:
                    "Compact diagnostic device for measuring oxygen saturation and pulse rate.",

                info: {
                    "TYPE": "Pulse Oximeter",
                    "USE": "Diagnostic"
                }
            }

        ]
    },


    /* =====================================================
       EMERGENCY
    ===================================================== */

    {
        id: "emergency-care",

        title: "Emergency Care",

        image: "images/amb.png",

        description:
            "Emergency transportation and urgent patient-care support.",

        products: [

            {
                name: "Ambulance Service (24/7)",

                images: [
                    "images/amb.png"
                ],

                description:
                    "Emergency transportation support for urgent patient-care requirements.",

                info: {
                    "TYPE": "Ambulance Service",
                    "AVAILABILITY": "24/7",
                    "USE": "Emergency Care"
                }
            }

        ]
    }

];



/* =========================================================
   ELEMENTS
========================================================= */

const categoryGrid =
    document.getElementById("categoryGrid");

const categoryView =
    document.getElementById("categoryView");

const productGrid =
    document.getElementById("productGrid");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryDescription =
    document.getElementById("categoryDescription");

const categoryCount =
    document.getElementById("categoryCount");

const productView =
    document.getElementById("productView");

const mainProductImage =
    document.getElementById("mainProductImage");

const thumbnailContainer =
    document.getElementById("thumbnailContainer");

const productTitle =
    document.getElementById("productTitle");

const productDescription =
    document.getElementById("productDescription");

const productCategory =
    document.getElementById("productCategory");

const productInfoSection =
    document.getElementById("productInfoSection");

const productWhatsApp =
    document.getElementById("productWhatsApp");

const relatedProductsGrid =
    document.getElementById("relatedProductsGrid");



/* =========================================================
   RENDER CATEGORIES
========================================================= */

function renderCategories() {

    categoryGrid.innerHTML = "";

    categories.forEach(category => {

        const card =
            document.createElement("article");

        card.className =
            "category-card";


        card.innerHTML = `

            <div class="category-image">

                <img
                    src="${category.image}"
                    alt="${category.title}"
                    loading="lazy"
                >

            </div>

            <div class="category-label">
                OYA COLLECTION
            </div>

            <h3>
                ${category.title}
            </h3>

            <div class="category-bottom">

                <span>
                    ${category.products.length}
                    ${
                        category.products.length === 1
                            ? " PRODUCT"
                            : " PRODUCTS"
                    }
                </span>

                <strong>
                    ↗
                </strong>

            </div>
        `;


        card.addEventListener(
            "click",
            () => openCategory(category)
        );


        categoryGrid.appendChild(card);

    });

}



/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(category) {

    categoryTitle.textContent =
        category.title;

    categoryDescription.textContent =
        category.description;

    categoryCount.textContent =
        `${category.products.length} ${
            category.products.length === 1
                ? "PRODUCT"
                : "PRODUCTS"
        }`;


    productGrid.innerHTML = "";


    /*
       EVERY PRODUCT IS SHOWN
    */

    category.products.forEach(
        (product, index) => {

            const card =
                document.createElement("article");

            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-card-image">

                    <img
                        src="${product.images[0]}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>

                <small>
                    ${category.title}
                </small>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

            `;


            card.addEventListener(
                "click",
                () => {

                    openProduct(
                        category,
                        index
                    );

                }
            );


            productGrid.appendChild(card);

        }
    );


    document.body.classList.add(
        "category-open"
    );

    categoryView.classList.add(
        "active"
    );

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}



/* =========================================================
   OPEN PRODUCT
========================================================= */

function openProduct(
    category,
    productIndex
) {

    const product =
        category.products[productIndex];

    if (!product) return;


    productCategory.textContent =
        category.title;


    productTitle.textContent =
        product.name;


    productDescription.textContent =
        product.description;


    /*
       MAIN IMAGE
    */

    mainProductImage.src =
        product.images[0];

    mainProductImage.alt =
        product.name;


    /*
       THUMBNAILS
    */

    renderThumbnails(product);


    /*
       PRODUCT INFORMATION
    */

    renderProductInfo(product);


    /*
       WHATSAPP
    */

    const message =
        `Hi OYA Health Care, I am interested in ${product.name}. Please share details, price and availability.`;

    productWhatsApp.href =
        "https://wa.me/917021235223?text=" +
        encodeURIComponent(message);


    /*
       OTHER PRODUCTS
    */

    renderRelatedProducts(
        category,
        productIndex
    );


    /*
       SHOW PRODUCT PAGE
    */

    document.body.classList.add(
        "product-open"
    );

    productView.classList.add(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}



/* =========================================================
   THUMBNAILS
========================================================= */

function renderThumbnails(product) {

    thumbnailContainer.innerHTML = "";


    product.images.forEach(
        (image, index) => {

            const thumbnail =
                document.createElement("button");

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
                    alt="${product.name}"
                >

            `;


            thumbnail.addEventListener(
                "click",
                () => {

                    mainProductImage.src =
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


            thumbnailContainer.appendChild(
                thumbnail
            );

        }
    );

}



/* =========================================================
   PRODUCT INFORMATION
========================================================= */

function renderProductInfo(product) {

    productInfoSection.innerHTML = "";


    if (!product.info) {

        return;

    }


    Object.entries(
        product.info
    ).forEach(
        ([label, value]) => {

            const item =
                document.createElement("div");

            item.className =
                "info-row";


            item.innerHTML = `

                <span>
                    ${label}
                </span>

                <strong>
                    ${value}
                </strong>

            `;


            productInfoSection.appendChild(
                item
            );

        }
    );

}



/* =========================================================
   RELATED PRODUCTS
========================================================= */

function renderRelatedProducts(
    category,
    selectedIndex
) {

    relatedProductsGrid.innerHTML = "";


    category.products.forEach(
        (product, index) => {

            /*
               Keep ALL products visible.
            */

            const card =
                document.createElement("article");

            card.className =
                "related-product-card";


            if (index === selectedIndex) {

                card.classList.add(
                    "selected"
                );

            }


            card.innerHTML = `

                <div class="related-image">

                    <img
                        src="${product.images[0]}"
                        alt="${product.name}"
                    >

                </div>

                <div class="related-content">

                    <small>
                        ${
                            index === selectedIndex
                                ? "CURRENT PRODUCT"
                                : category.title
                        }
                    </small>

                    <h3>
                        ${product.name}
                    </h3>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openProduct(
                        category,
                        index
                    );

                }
            );


            relatedProductsGrid.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   BACK TO CATALOGUE
========================================================= */

function backToCatalogue() {

    document.body.classList.remove(
        "category-open"
    );

    categoryView.classList.remove(
        "active"
    );

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}



/* =========================================================
   BACK FROM PRODUCT
========================================================= */

function backToProducts() {

    document.body.classList.remove(
        "product-open"
    );

    productView.classList.remove(
        "active"
    );

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}



/* =========================================================
   BUTTONS
========================================================= */

document
    .getElementById("backCatalogue")
    .addEventListener(
        "click",
        backToCatalogue
    );


document
    .getElementById("backProducts")
    .addEventListener(
        "click",
        backToProducts
    );



/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");


menuBtn.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );


        menuBtn.textContent =
            mobileNav.classList.contains("active")
                ? "×"
                : "☰";

    }
);


mobileNav
    .querySelectorAll("a")
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove(
                        "active"
                    );

                    menuBtn.textContent =
                        "☰";

                }
            );

        }
    );



/* =========================================================
   HOME LINKS
========================================================= */

document
    .querySelectorAll(
        'a[href="#home"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    document.body.classList.remove(
                        "category-open",
                        "product-open"
                    );

                    categoryView.classList.remove(
                        "active"
                    );

                    productView.classList.remove(
                        "active"
                    );

                }
            );

        }
    );



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        if (
            productView.classList.contains(
                "active"
            )
        ) {

            backToProducts();

            return;

        }


        if (
            categoryView.classList.contains(
                "active"
            )
        ) {

            backToCatalogue();

        }

    }
);



/* =========================================================
   START WEBSITE
========================================================= */

renderCategories();
