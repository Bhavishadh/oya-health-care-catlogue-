/* =========================================================
   OYA HEALTH CARE
   CATEGORY → PRODUCTS → PRODUCT DETAIL
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

                image: "images/hospitalbed.webp",

                description:
                    "Hospital bed designed for patient comfort, positioning and everyday clinical care."
            },

            {
                name: "Semi-Fowler Bed",

                image: "images/semi bed.png",

                description:
                    "Semi-Fowler hospital bed designed for comfortable patient positioning."
            },

            {
                name: "Fowler Hospital Bed",

                image: "images/fowlerbed.png",

                description:
                    "Fowler hospital bed designed for patient comfort and positioning."
            },

            {
                name: "2-Function Hospital Bed",

                image: "images/2fbed.png",

                description:
                    "Functional hospital bed designed for dependable patient care."
            },

            {
                name: "3-Function Hospital Bed",

                image: "images/3fbed.png",

                description:
                    "Multi-function hospital bed designed for flexible patient positioning."
            },

            {
                name: "4-Function Hospital Bed",

                image: "images/4fbed.png",

                description:
                    "Advanced multi-function hospital bed designed for professional healthcare environments."
            },

            {
                name: "Folding Hospital Bed",

                image: "images/foldingbed.png",

                description:
                    "Practical folding hospital bed for healthcare and patient-care environments."
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
            "Medical oxygen cylinders available in different capacities for healthcare and home-care requirements.",

        products: [

            {
                name: 'Oxygen Cylinder "5Ltr"',

                image: "images/oxy5ltr.png",

                description:
                    "Compact oxygen cylinder suitable for appropriate oxygen-support requirements."
            },

            {
                name: 'Oxygen Cylinder "10Ltr"',

                image: "images/oxy10ltr.png",

                description:
                    "Higher-capacity oxygen cylinder suitable for appropriate medical and healthcare applications."
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
            "Oxygen concentrators designed for convenient respiratory support at home and healthcare facilities.",

        products: [

            {
                name: "Oxygen Concentrator",

                image: "images/concentrator.webp",

                description:
                    "On rent 24 hrs service at your doorstep. Rent with Oxygen cylinder."
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

                image: "images/w1.png",

                description:
                    "Practical mobility solution designed for comfortable everyday movement and patient support."
            },

            {
                name: "Folding Wheelchair",

                image: "images/w2.png",

                description:
                    "Convenient foldable mobility solution designed for easier transport and storage."
            },

            {
                name: "Commode Wheelchair",

                image: "images/w3.png",

                description:
                    "Mobility and patient-care solution designed for additional convenience and support."
            },

            {
                name: "Reclining Wheelchair",

                image: "images/w4.png",

                description:
                    "Supportive wheelchair designed with reclining functionality for enhanced patient comfort."
            }

        ]
    },


    /* =====================================================
       CPAP MACHINES
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

                image: "images/c1.png",

                description:
                    "CPAP solution designed for suitable sleep-care requirements."
            },

            {
                name: "Auto CPAP (APAP) Machine",

                image: "images/c2.png",

                description:
                    "Auto-adjusting CPAP solution designed for suitable sleep-care requirements."
            },

            {
                name: "Portable CPAP Machine",

                image: "images/c3.png",

                description:
                    "Compact CPAP option designed for convenient use."
            }

        ]
    },


    /* =====================================================
       BIPAP MACHINES
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

                image: "images/b1.png",

                description:
                    "Bi-level respiratory-support solution designed for suitable healthcare requirements."
            },

            {
                name: "Portable BiPAP Machine",

                image: "images/b2.png",

                description:
                    "Portable respiratory-support option designed for convenient handling and use."
            },

            {
                name: "Auto BiPAP Machine",

                image: "images/b1.png",

                description:
                    "Adaptive BiPAP option designed for suitable respiratory support."
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

                image: "images/wl1.png",

                description:
                    "Dependable mobility aid designed to provide walking support and stability."
            },

            {
                name: "Folding Walker",

                image: "images/wl2.png",

                description:
                    "Practical folding mobility aid designed for easier storage and transportation."
            },

            {
                name: "Adjustable Walker",

                image: "images/wl3.png",

                description:
                    "Height-adjustable mobility aid designed for adaptable everyday walking support."
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

                image: "images/pm.png",

                description:
                    "Patient-monitoring solution designed for suitable healthcare monitoring requirements."
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

                image: "images/venti.png",

                description:
                    "Critical-care respiratory support device intended for appropriate clinical environments."
            }

        ]
    },


    /* =====================================================
       DIAGNOSTIC EQUIPMENT
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

                image: "images/pu.png",

                description:
                    "Compact diagnostic device for measuring oxygen saturation and pulse rate."
            }

        ]
    },


    /* =====================================================
       EMERGENCY CARE
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

                image: "images/amb.png",

                description:
                    "Emergency transportation support for urgent patient-care requirements."
            }

        ]
    }

];



/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const categoryGrid =
    document.getElementById("categoryGrid");

const home =
    document.querySelector(".home");

const catalogue =
    document.querySelector(".catalogue");

const about =
    document.querySelector(".about");

const contact =
    document.querySelector(".contact");

const footer =
    document.querySelector("footer");

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

const backBtn =
    document.getElementById("backBtn");

const productModal =
    document.getElementById("productModal");

const closeProduct =
    document.getElementById("closeProduct");

const modalBack =
    document.getElementById("modalBack");

const detailImage =
    document.getElementById("detailImage");

const detailTitle =
    document.getElementById("detailTitle");

const detailCategory =
    document.getElementById("detailCategory");

const detailDescription =
    document.getElementById("detailDescription");

const detailWhatsApp =
    document.getElementById("detailWhatsApp");

const thumbs =
    document.getElementById("thumbs");



/* =========================================================
   RENDER CATEGORY CARDS
========================================================= */

function renderCategories() {

    if (!categoryGrid) return;


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


            <p>
                ${category.description}
            </p>


            <div class="category-bottom">

                <span class="category-products">

                    ${category.products.length}

                    ${
                        category.products.length === 1
                            ? " PRODUCT"
                            : " PRODUCTS"
                    }

                </span>


                <span class="category-arrow">
                    ↗
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                openCategory(
                    category.id
                );

            }
        );


        categoryGrid.appendChild(card);

    });

}



/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(categoryId) {


    const category =
        categories.find(
            item =>
                item.id === categoryId
        );


    if (!category) return;


    /* -----------------------------------------------
       CATEGORY TITLE
    ----------------------------------------------- */

    categoryTitle.textContent =
        category.title;


    /* -----------------------------------------------
       CATEGORY DESCRIPTION
    ----------------------------------------------- */

    categoryDescription.textContent =
        category.description;


    /* -----------------------------------------------
       PRODUCT COUNT
    ----------------------------------------------- */

    categoryCount.textContent =

        category.products.length +

        (
            category.products.length === 1
                ? " PRODUCT"
                : " PRODUCTS"
        );


    /* -----------------------------------------------
       CREATE PRODUCTS
    ----------------------------------------------- */

    productGrid.innerHTML = "";


    category.products.forEach(
        (product, index) => {


            const card =
                document.createElement("article");


            card.className =
                "product-card";


            card.innerHTML = `

                <div class="product-card-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>


                <div class="product-card-category">

                    ${category.title}

                </div>


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


    /* -----------------------------------------------
       HIDE HOME
    ----------------------------------------------- */

    document.body.classList.add(
        "category-open"
    );


    categoryView.classList.add(
        "active"
    );


    categoryView.setAttribute(
        "aria-hidden",
        "false"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

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


    categoryView.setAttribute(
        "aria-hidden",
        "true"
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


    /* -----------------------------------------------
       PRODUCT CATEGORY
    ----------------------------------------------- */

    detailCategory.textContent =
        category.title;


    /* -----------------------------------------------
       PRODUCT TITLE
    ----------------------------------------------- */

    detailTitle.textContent =
        product.name;


    /* -----------------------------------------------
       PRODUCT DESCRIPTION
    ----------------------------------------------- */

    detailDescription.textContent =
        product.description;


    /* -----------------------------------------------
       MAIN IMAGE
    ----------------------------------------------- */

    detailImage.src =
        product.image;


    detailImage.alt =
        product.name;


    /* -----------------------------------------------
       WHATSAPP MESSAGE
    ----------------------------------------------- */

    const message =
        `Hi OYA Health Care, I am interested in ${product.name}. Please share details, price and availability.`;

    detailWhatsApp.href =
        "https://wa.me/917021235223?text=" +
        encodeURIComponent(message);


    /* -----------------------------------------------
       CREATE THUMBNAILS
       
       The category's products become thumbnails.
       This means you can swipe/click through them.
    ----------------------------------------------- */

    thumbs.innerHTML = "";


    category.products.forEach(
        (item, index) => {


            const thumbnail =
                document.createElement("button");


            thumbnail.type =
                "button";


            thumbnail.className =
                "thumb";


            if (
                index === productIndex
            ) {

                thumbnail.classList.add(
                    "active"
                );

            }


            thumbnail.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            `;


            thumbnail.addEventListener(
                "click",
                () => {


                    detailImage.src =
                        item.image;


                    detailImage.alt =
                        item.name;


                    detailTitle.textContent =
                        item.name;


                    detailDescription.textContent =
                        item.description;


                    detailCategory.textContent =
                        category.title;


                    thumbs
                        .querySelectorAll(
                            ".thumb"
                        )
                        .forEach(
                            thumb => {

                                thumb.classList.remove(
                                    "active"
                                );

                            }
                        );


                    thumbnail.classList.add(
                        "active"
                    );


                    const newMessage =
                        `Hi OYA Health Care, I am interested in ${item.name}. Please share details, price and availability.`;


                    detailWhatsApp.href =
                        "https://wa.me/917021235223?text=" +
                        encodeURIComponent(
                            newMessage
                        );

                }
            );


            thumbs.appendChild(
                thumbnail
            );

        }
    );


    /* -----------------------------------------------
       OPEN PRODUCT PAGE
    ----------------------------------------------- */

    document.body.classList.add(
        "modal-open"
    );


    productModal.classList.add(
        "active"
    );


    productModal.setAttribute(
        "aria-hidden",
        "false"
    );


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}



/* =========================================================
   CLOSE PRODUCT
========================================================= */

function closeProductPage() {


    document.body.classList.remove(
        "modal-open"
    );


    productModal.classList.remove(
        "active"
    );


    productModal.setAttribute(
        "aria-hidden",
        "true"
    );

}



/* =========================================================
   BACK BUTTON
========================================================= */

if (backBtn) {

    backBtn.addEventListener(
        "click",
        () => {

            backToCatalogue();

        }
    );

}



/* =========================================================
   CLOSE PRODUCT BUTTON
========================================================= */

if (closeProduct) {

    closeProduct.addEventListener(
        "click",
        () => {

            closeProductPage();

        }
    );

}



/* =========================================================
   PRODUCT BACK BUTTON
========================================================= */

if (modalBack) {

    modalBack.addEventListener(
        "click",
        () => {

            closeProductPage();

        }
    );

}



/* =========================================================
   CLICK OUTSIDE PRODUCT
========================================================= */

if (productModal) {

    productModal.addEventListener(
        "click",
        event => {


            if (
                event.target ===
                productModal
            ) {

                closeProductPage();

            }

        }
    );

}



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {


        if (
            event.key === "Escape"
        ) {


            if (
                productModal.classList.contains(
                    "active"
                )
            ) {

                closeProductPage();

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

    }
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


if (
    menuBtn &&
    mobileNav
) {


    menuBtn.addEventListener(
        "click",
        () => {


            mobileNav.classList.toggle(
                "active"
            );


            if (
                mobileNav.classList.contains(
                    "active"
                )
            ) {

                menuBtn.textContent =
                    "×";

            } else {

                menuBtn.textContent =
                    "☰";

            }

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

}



/* =========================================================
   HOME LOGO CLICK
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
                        "category-open"
                    );


                    categoryView.classList.remove(
                        "active"
                    );


                    closeProductPage();

                }
            );

        }
    );



/* =========================================================
   START WEBSITE
========================================================= */

renderCategories();


console.log(
    "OYA Health Care catalogue loaded successfully."
);
