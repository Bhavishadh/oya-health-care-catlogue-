/* =========================================================
   OYA HEALTH CARE
   COMPLETE SCRIPT
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const categories = [

    /* =====================================================
       HOSPITAL FURNITURE
    ===================================================== */

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
                name: "Oxygen Concentrator on Rent",

                images: [
                    "images/concentrator.webp"
                ],

                description:
                    "On rent 24 hrs service at your doorstep. Rent with Oxygen cylinder.",

                info: {
                    "SIZE": "5 Liter to 10 Liter"
                }
            },


            {
                name: "Oxygen Concentrator",

                images: [
                    "images/concentrator2.webp"
                ],

                description:
                    "Oxygen concentrator suitable for respiratory-support requirements.",

                info: {
                    "SIZE": "5 Liter"
                }
            },


            {
                name: "Portable Oxygen Concentrator",

                images: [
                    "images/concentrator3.webp"
                ],

                description:
                    "Portable oxygen concentrator designed for convenient oxygen support.",

                info: {
                    "SIZE": "Portable"
                }
            },


            {
                name: "Oxygen Concentrator 10L",

                images: [
                    "images/concentrator4.webp"
                ],

                description:
                    "Higher-capacity oxygen concentrator for suitable healthcare requirements.",

                info: {
                    "SIZE": "10 Liter"
                }
            },


            {
                name: "Oxygen Concentrator Machine",

                images: [
                    "images/concentrator5.webp"
                ],

                description:
                    "Reliable oxygen concentrator machine for appropriate healthcare applications.",

                info: {
                    "TYPE": "Oxygen Concentrator"
                }
            },


            {
                name: "Portable Oxygen Concentrator",

                images: [
                    "images/concentrator6.webp"
                ],

                description:
                    "Compact oxygen concentrator designed for portability.",

                info: {
                    "TYPE": "Portable Oxygen Concentrator"
                }
            },


            {
                name: "Oxygen Concentrator",

                images: [
                    "images/concentrator7.webp"
                ],

                description:
                    "Oxygen concentrator designed for suitable respiratory support.",

                info: {
                    "TYPE": "Oxygen Concentrator"
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
    document.getElementById(
        "categoryGrid"
    );


const categoryView =
    document.getElementById(
        "categoryView"
    );


const productGrid =
    document.getElementById(
        "productGrid"
    );


const categoryTitle =
    document.getElementById(
        "categoryTitle"
    );


const categoryDescription =
    document.getElementById(
        "categoryDescription"
    );


const categoryCount =
    document.getElementById(
        "categoryCount"
    );


const productView =
    document.getElementById(
        "productView"
    );


const mainProductImage =
    document.getElementById(
        "mainProductImage"
    );


const thumbnailContainer =
    document.getElementById(
        "thumbnailContainer"
    );


const productTitle =
    document.getElementById(
        "productTitle"
    );


const productDescription =
    document.getElementById(
        "productDescription"
    );


const productCategory =
    document.getElementById(
        "productCategory"
    );


const productInfoSection =
    document.getElementById(
        "productInfoSection"
    );


const productWhatsApp =
    document.getElementById(
        "productWhatsApp"
    );



/* =========================================================
   CURRENT STATE
========================================================= */

let currentCategory = null;

let currentProductIndex = 0;

let currentImageIndex = 0;



/* =========================================================
   RENDER CATEGORIES
========================================================= */

function renderCategories() {

    categoryGrid.innerHTML = "";


    categories.forEach(
        category => {

            const card =
                document.createElement(
                    "article"
                );


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
                () => {

                    openCategory(
                        category
                    );

                }
            );


            categoryGrid.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(
    category
) {

    currentCategory =
        category;


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


    category.products.forEach(
        (product, index) => {

            const card =
                document.createElement(
                    "article"
                );


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


            productGrid.appendChild(
                card
            );

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
        category.products[
            productIndex
        ];


    if (!product) {
        return;
    }


    currentCategory =
        category;


    currentProductIndex =
        productIndex;


    updateProductPage();


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
   UPDATE PRODUCT PAGE
========================================================= */

function updateProductPage() {

    const category =
        currentCategory;


    const product =
        category.products[
            currentProductIndex
        ];


    if (!product) {
        return;
    }



    /* RESET IMAGE INDEX */

    currentImageIndex = 0;



    /* BIG IMAGE */

    mainProductImage.src =
        product.images[0];


    mainProductImage.alt =
        product.name;



    /* TITLE */

    productTitle.textContent =
        product.name;



    /* CATEGORY */

    productCategory.textContent =
        category.title;



    /* DESCRIPTION */

    productDescription.textContent =
        product.description;



    /* PRODUCT INFO */

    renderProductInfo(
        product
    );



    /* WHATSAPP */

    const message =
        `Hi OYA Health Care, I am interested in ${product.name}. Please share details, price and availability.`;


    productWhatsApp.href =
        "https://wa.me/917021235223?text=" +
        encodeURIComponent(
            message
        );



    /* IMAGE GALLERY THUMBNAILS (SAME PRODUCT) */

    renderProductThumbnails(
        product
    );

}



/* =========================================================
   PRODUCT IMAGE GALLERY
   (thumbnails = other photos of THIS product)
========================================================= */

function renderProductThumbnails(
    product
) {

    thumbnailContainer.innerHTML =
        "";


    product.images.forEach(
        (image, index) => {

            const card =
                document.createElement(
                    "button"
                );


            card.type =
                "button";


            card.className =
                "thumbnail";


            if (
                index ===
                currentImageIndex
            ) {

                card.classList.add(
                    "active"
                );

            }


            card.innerHTML = `

                <img
                    src="${image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            `;


            card.addEventListener(
                "click",
                () => {

                    currentImageIndex =
                        index;


                    mainProductImage.src =
                        image;


                    mainProductImage.alt =
                        product.name;


                    thumbnailContainer
                        .querySelectorAll(
                            ".thumbnail"
                        )
                        .forEach(
                            t => t.classList.remove(
                                "active"
                            )
                        );


                    card.classList.add(
                        "active"
                    );

                }
            );


            thumbnailContainer.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   PRODUCT INFORMATION
========================================================= */

function renderProductInfo(
    product
) {

    productInfoSection.innerHTML =
        "";


    if (
        !product.info ||
        Object.keys(
            product.info
        ).length === 0
    ) {

        return;

    }


    Object.entries(
        product.info
    ).forEach(
        ([label, value]) => {

            const item =
                document.createElement(
                    "div"
                );


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
   BACK BUTTONS
========================================================= */

document
    .getElementById(
        "backCatalogue"
    )
    .addEventListener(
        "click",
        backToCatalogue
    );


document
    .getElementById(
        "backProducts"
    )
    .addEventListener(
        "click",
        backToProducts
    );



/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const mobileNav =
    document.getElementById(
        "mobileNav"
    );


menuBtn.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );


        menuBtn.textContent =
            mobileNav.classList.contains(
                "active"
            )
                ? "×"
                : "☰";

    }
);



/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

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
            event.key !==
            "Escape"
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
