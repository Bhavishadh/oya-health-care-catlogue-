/* =====================================================
   OYA HEALTH CARE
   CATEGORY + PRODUCT SYSTEM
===================================================== */


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = {

    "hospital-beds": {

        number: "CATEGORY 01",

        title: "Hospital Beds",

        description:
            "Reliable hospital beds designed for patient comfort, safety and efficient healthcare delivery.",

        items: [

            {
                name: "Electric Hospital Bed",

                image: "images/hospital-bed.jpg",

                thumbnails: [
                    "images/hospital-bed.jpg",
                    "images/hospital-bed-2.jpg",
                    "images/hospital-bed-3.jpg"
                ],

                description:
                    "A modern electric hospital bed designed to provide comfortable positioning and convenient operation for patients and healthcare professionals."
            },

            {
                name: "Semi Electric Hospital Bed",

                image: "images/semi-electric-bed.jpg",

                thumbnails: [
                    "images/semi-electric-bed.jpg",
                    "images/semi-electric-bed-2.jpg"
                ],

                description:
                    "A practical semi-electric hospital bed providing adjustable positioning and reliable patient support."
            },

            {
                name: "Manual Hospital Bed",

                image: "images/manual-hospital-bed.jpg",

                thumbnails: [
                    "images/manual-hospital-bed.jpg",
                    "images/manual-hospital-bed-2.jpg"
                ],

                description:
                    "A durable manual hospital bed suitable for hospitals, clinics and healthcare facilities."
            }

        ]

    },


    "patient-care": {

        number: "CATEGORY 02",

        title: "Patient Care",

        description:
            "Essential products designed to support patient monitoring, comfort and daily care.",

        items: [

            {
                name: "Patient Monitor",

                image: "images/patient-monitor.jpg",

                thumbnails: [
                    "images/patient-monitor.jpg"
                ],

                description:
                    "Patient monitoring equipment designed for healthcare environments."
            },

            {
                name: "Bedside Locker",

                image: "images/bedside-locker.jpg",

                thumbnails: [
                    "images/bedside-locker.jpg"
                ],

                description:
                    "Convenient bedside storage solution for patients and healthcare facilities."
            }

        ]

    },


    "hospital-furniture": {

        number: "CATEGORY 03",

        title: "Hospital Furniture",

        description:
            "Functional furniture designed for hospitals, clinics and healthcare environments.",

        items: [

            {
                name: "Hospital Bedside Table",

                image: "images/bedside-table.jpg",

                thumbnails: [
                    "images/bedside-table.jpg"
                ],

                description:
                    "Practical bedside furniture designed for hospital environments."
            },

            {
                name: "Hospital Stool",

                image: "images/hospital-stool.jpg",

                thumbnails: [
                    "images/hospital-stool.jpg"
                ],

                description:
                    "Strong and practical stool suitable for medical environments."
            }

        ]

    },


    "examination": {

        number: "CATEGORY 04",

        title: "Examination",

        description:
            "Examination furniture designed for doctors, clinics and healthcare professionals.",

        items: [

            {
                name: "Examination Table",

                image: "images/examination-table.jpg",

                thumbnails: [
                    "images/examination-table.jpg"
                ],

                description:
                    "Comfortable and practical examination table for clinical environments."
            }

        ]

    },


    "mobility": {

        number: "CATEGORY 05",

        title: "Mobility Equipment",

        description:
            "Mobility products designed to support movement, independence and patient care.",

        items: [

            {
                name: "Wheelchair",

                image: "images/wheelchair.jpg",

                thumbnails: [
                    "images/wheelchair.jpg"
                ],

                description:
                    "Reliable wheelchair designed for comfortable and convenient mobility."
            },

            {
                name: "Walking Frame",

                image: "images/walking-frame.jpg",

                thumbnails: [
                    "images/walking-frame.jpg"
                ],

                description:
                    "Supportive walking frame designed to assist mobility."
            }

        ]

    },


    "home-care": {

        number: "CATEGORY 06",

        title: "Home Care",

        description:
            "Healthcare equipment and accessories suitable for home healthcare needs.",

        items: [

            {
                name: "Home Care Bed",

                image: "images/home-care-bed.jpg",

                thumbnails: [
                    "images/home-care-bed.jpg"
                ],

                description:
                    "A comfortable healthcare bed designed for home care environments."
            }

        ]

    }

};


/* =====================================================
   DOM ELEMENTS
===================================================== */

const homePage =
    document.getElementById("homePage");

const categoryPage =
    document.getElementById("categoryPage");

const productList =
    document.getElementById("productList");

const categoryTitle =
    document.getElementById("categoryTitle");

const categoryNumber =
    document.getElementById("categoryNumber");

const categoryDescription =
    document.getElementById("categoryDescription");

const productModal =
    document.getElementById("productModal");

const modalImage =
    document.getElementById("modalImage");

const modalTitle =
    document.getElementById("modalTitle");

const modalCategory =
    document.getElementById("modalCategory");

const modalDescription =
    document.getElementById("modalDescription");

const mobileMenu =
    document.getElementById("mobileMenu");

const menuBtn =
    document.getElementById("menuBtn");


/* =====================================================
   MOBILE MENU
===================================================== */

menuBtn.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


/* =====================================================
   OPEN CATEGORY
===================================================== */

function openCategory(categoryName) {

    const category =
        products[categoryName];

    if (!category) {
        return;
    }


    /* ---------------------------------
       Hide complete home page
    --------------------------------- */

    homePage.style.display = "none";


    /* ---------------------------------
       Show category page
    --------------------------------- */

    categoryPage.classList.add("active");


    /* ---------------------------------
       Update heading
    --------------------------------- */

    categoryNumber.textContent =
        category.number;

    categoryTitle.textContent =
        category.title;

    categoryDescription.textContent =
        category.description;


    /* ---------------------------------
       Clear previous products
    --------------------------------- */

    productList.innerHTML = "";


    /* ---------------------------------
       Create products
    --------------------------------- */

    category.items.forEach(
        (product, index) => {

            const card =
                document.createElement("article");

            card.className =
                "product-card";


            /* =========================
               MAIN IMAGE
            ========================= */

            const mainImage =
                document.createElement("div");

            mainImage.className =
                "product-main-image";


            const image =
                document.createElement("img");

            image.src =
                product.image;

            image.alt =
                product.name;


            mainImage.appendChild(image);


            /* =========================
               THUMBNAILS
            ========================= */

            const thumbnails =
                document.createElement("div");

            thumbnails.className =
                "product-thumbnails";


            if (
                product.thumbnails &&
                product.thumbnails.length > 0
            ) {

                product.thumbnails.forEach(
                    thumbnailSource => {

                        const thumbnail =
                            document.createElement("div");

                        thumbnail.className =
                            "thumbnail";


                        const thumbImage =
                            document.createElement("img");

                        thumbImage.src =
                            thumbnailSource;

                        thumbImage.alt =
                            product.name;


                        thumbnail.appendChild(
                            thumbImage
                        );


                        thumbnail.addEventListener(
                            "click",
                            function (event) {

                                event.stopPropagation();

                                image.src =
                                    thumbnailSource;

                            }
                        );


                        thumbnails.appendChild(
                            thumbnail
                        );

                    }
                );

            }


            /* =========================
               PRODUCT INFO
            ========================= */

            const info =
                document.createElement("div");

            info.className =
                "product-info";


            const number =
                document.createElement("span");

            number.className =
                "product-number";

            number.textContent =
                "PRODUCT " +
                String(index + 1).padStart(2, "0");


            const title =
                document.createElement("h3");

            title.textContent =
                product.name;


            const description =
                document.createElement("p");

            description.textContent =
                product.description;


            const button =
                document.createElement("button");

            button.className =
                "product-view-btn";

            button.textContent =
                "VIEW PRODUCT";


            button.addEventListener(
                "click",
                function () {

                    openProduct(
                        product,
                        category.title
                    );

                }
            );


            info.appendChild(number);
            info.appendChild(title);
            info.appendChild(description);
            info.appendChild(button);


            /* =========================
               CARD
            ========================= */

            card.appendChild(mainImage);

            card.appendChild(thumbnails);

            card.appendChild(info);


            productList.appendChild(card);

        }
    );


    /* ---------------------------------
       Close menu
    --------------------------------- */

    mobileMenu.classList.remove(
        "active"
    );


    /* ---------------------------------
       Scroll to top
    --------------------------------- */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   GO HOME
===================================================== */

function goHome() {

    categoryPage.classList.remove(
        "active"
    );

    homePage.style.display =
        "block";


    mobileMenu.classList.remove(
        "active"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SCROLL TO CATALOGUE
===================================================== */

function scrollToCatalogue() {

    categoryPage.classList.remove(
        "active"
    );

    homePage.style.display =
        "block";


    mobileMenu.classList.remove(
        "active"
    );


    setTimeout(function () {

        const catalogue =
            document.getElementById(
                "catalogue"
            );

        catalogue.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);

}


/* =====================================================
   PRODUCT POPUP
===================================================== */

function openProduct(
    product,
    category
) {

    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalTitle.textContent =
        product.name;

    modalCategory.textContent =
        category;

    modalDescription.textContent =
        product.description;


    productModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE PRODUCT
===================================================== */

function closeProduct() {

    productModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* =====================================================
   CONTACT
===================================================== */

function showContact() {

    mobileMenu.classList.remove(
        "active"
    );

    homePage.style.display =
        "block";

    categoryPage.classList.remove(
        "active"
    );


    setTimeout(function () {

        const company =
            document.querySelector(
                ".company-section"
            );

        company.scrollIntoView({
            behavior: "smooth"
        });

    }, 50);

}


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProduct();

        }

    }
);


/* =====================================================
   CLICK OUTSIDE MODAL
===================================================== */

productModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "modal-overlay"
            )
        ) {

            closeProduct();

        }

    }
);
