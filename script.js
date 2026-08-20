/* =========================================================
   OYA HEALTH CARE
   PREMIUM CREAM + FOREST GREEN
========================================================= */


:root{

    --background:#f3f0e8;

    --sidebar:#fbfaf6;

    --card:#f8f6ef;

    --white:#ffffff;

    --text:#17221f;

    --muted:#727b76;

    --green:#174f45;

    --green-dark:#0d3932;

    --green-light:#dce9e2;

    --gold:#b89a62;

    --line:#d7d5cb;

}


/* =========================================================
   RESET
========================================================= */

*{

    margin:0;

    padding:0;

    box-sizing:border-box;

}


html{

    scroll-behavior:smooth;

}


body{

    background:
        var(--background);

    color:
        var(--text);

    font-family:
        "DM Sans",
        Arial,
        sans-serif;

    overflow-x:hidden;

}


img{

    display:block;

    max-width:100%;

}


a{

    color:inherit;

    text-decoration:none;

}


button{

    font-family:inherit;

}


/* =========================================================
   MAIN LAYOUT
========================================================= */

.website-layout{

    display:grid;

    grid-template-columns:
        390px
        1fr;

    min-height:100vh;

}


/* =========================================================
   LEFT SIDEBAR
========================================================= */

.sidebar{

    position:fixed;

    left:0;

    top:0;

    width:390px;

    height:100vh;

    background:
        linear-gradient(
            180deg,
            #fbfaf6 0%,
            #f2eee4 100%
        );

    border-right:
        1px solid var(--line);

    overflow-y:auto;

    z-index:100;

}


.sidebar-inner{

    min-height:100vh;

    padding:
        48px 42px 35px;

    display:flex;

    flex-direction:column;

}


/* =========================================================
   LOGO
========================================================= */

.sidebar-logo{

    width:78px;

    height:78px;

    border-radius:20px;

    overflow:hidden;

    margin-bottom:22px;

    background:#ffffff;

    box-shadow:
        0 10px 28px
        rgba(23,79,69,.13);

}


.sidebar-logo img{

    width:100%;

    height:100%;

    object-fit:cover;

}


/* =========================================================
   COMPANY TITLE
========================================================= */

.sidebar h1{

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-size:31px;

    line-height:1.1;

    font-weight:500;

    color:
        var(--green);

    margin-bottom:10px;

}


/* =========================================================
   DESCRIPTION
========================================================= */

.company-description{

    max-width:300px;

    font-size:15px;

    line-height:1.58;

    color:#68716d;

}


/* =========================================================
   DIVIDER
========================================================= */

.sidebar-divider{

    width:100%;

    height:1px;

    background:
        var(--green);

    opacity:.35;

    margin:
        34px 0 29px;

}


/* =========================================================
   CONTACT
========================================================= */

.sidebar-contact{

    display:flex;

    flex-direction:column;

    gap:23px;

}


.contact-row{

    display:flex;

    align-items:flex-start;

    gap:12px;

    color:#707a75;

    font-size:13px;

    line-height:1.6;

}


.contact-row a{

    color:#707a75;

    transition:.2s;

}


.contact-row a:hover{

    color:var(--green);

}


.contact-icon{

    width:16px;

    flex:none;

    color:var(--gold);

    font-size:17px;

}


/* =========================================================
   SIDEBAR BOTTOM
========================================================= */

.sidebar-bottom{

    margin-top:auto;

    padding-top:35px;

    display:flex;

    flex-direction:column;

    gap:5px;

    color:#7c8580;

}


.sidebar-bottom span{

    color:
        var(--green);

    font-size:9px;

    font-weight:800;

    letter-spacing:.18em;

}


.sidebar-bottom small{

    font-size:10px;

}


/* =========================================================
   CATALOGUE AREA
========================================================= */

.catalogue-area{

    grid-column:2;

    min-width:0;

    padding:
        65px 52px 40px;

}


/* =========================================================
   HEADER
========================================================= */

.catalogue-header{

    width:100%;

    margin-bottom:35px;

}


.catalogue-title span{

    color:
        var(--green);

    font-family:
        Georgia,
        serif;

    font-size:13px;

    font-style:italic;

    font-weight:700;

    letter-spacing:.35em;

}


.catalogue-line{

    width:100%;

    height:1px;

    background:#8d9993;

    margin-top:14px;

}


/* =========================================================
   CATEGORY GRID
========================================================= */

.catalogue-grid{

    display:grid;

    grid-template-columns:
        repeat(3,minmax(0,1fr));

    column-gap:32px;

    row-gap:43px;

}


/* =========================================================
   CATEGORY CARD
========================================================= */

.catalogue-category{

    min-width:0;

    cursor:pointer;

    transition:
        transform .3s ease;

}


.catalogue-category:hover{

    transform:
        translateY(-5px);

}


/* =========================================================
   CATEGORY IMAGE
========================================================= */

.category-image-box{

    width:100%;

    height:320px;

    border-radius:21px;

    overflow:hidden;

    background:
        linear-gradient(
            145deg,
            #e5ece7,
            #f5f2e9
        );

    box-shadow:
        0 7px 22px
        rgba(23,79,69,.055);

}


.category-image-box img{

    width:100%;

    height:100%;

    object-fit:cover;

    transition:
        transform .45s ease;

}


.catalogue-category:hover
.category-image-box img{

    transform:
        scale(1.035);

}


/* =========================================================
   CATEGORY CONTENT
========================================================= */

.category-content{

    padding:
        19px 4px 0;

}


.category-content > span{

    display:block;

    color:
        var(--green);

    font-size:10px;

    font-weight:800;

    letter-spacing:.15em;

    margin-bottom:7px;

}


.category-content h2{

    font-family:
        "Manrope",
        Arial,
        sans-serif;

    font-size:18px;

    line-height:1.25;

    font-weight:600;

    color:
        var(--text);

    margin-bottom:7px;

}


.category-content p{

    color:#727a76;

    font-size:13px;

    line-height:1.55;

    margin-bottom:12px;

}


.category-content strong{

    display:flex;

    justify-content:space-between;

    align-items:center;

    color:
        var(--green);

    font-size:11px;

    padding-top:12px;

    border-top:
        1px solid var(--line);

}


.category-content strong span{

    color:
        var(--green);

}


.category-content strong b{

    color:
        var(--gold);

    font-size:18px;

    transition:.2s;

}


.catalogue-category:hover
.category-content strong b{

    transform:
        translate(3px,-3px);

}


/* =========================================================
   BACK BUTTON
========================================================= */

.category-back-button{

    display:block;

    border:0;

    background:none;

    padding:0;

    margin:
        0 0 22px;

    color:#6c7671;

    font-size:12px;

    font-weight:600;

    cursor:pointer;

}


.category-back-button:hover{

    color:
        var(--green);

}


/* =========================================================
   CATEGORY PRODUCT VIEWER
========================================================= */

.category-product-viewer{

    width:100%;

    display:grid;

    grid-template-columns:
        minmax(0,1.05fr)
        minmax(0,.95fr);

    gap:58px;

    margin-top:5px;

}


/* =========================================================
   VIEWER LEFT
========================================================= */

.viewer-left{

    min-width:0;

}


.viewer-main-image{

    width:100%;

    height:550px;

    background:#ffffff;

    overflow:hidden;

    display:flex;

    align-items:center;

    justify-content:center;

}


.viewer-main-image img{

    width:100%;

    height:100%;

    object-fit:contain;

}


/* =========================================================
   THUMBNAILS
========================================================= */

.viewer-thumbnails{

    display:flex;

    align-items:center;

    gap:11px;

    margin-top:14px;

    overflow-x:auto;

    padding-bottom:6px;

    scrollbar-width:none;

}


.viewer-thumbnails::-webkit-scrollbar{

    display:none;

}


.viewer-thumbnail{

    flex:0 0 72px;

    width:72px;

    height:72px;

    padding:3px;

    border:
        1px solid transparent;

    border-radius:11px;

    background:#ffffff;

    cursor:pointer;

    overflow:hidden;

    transition:
        border .2s ease,
        transform .2s ease;

}


.viewer-thumbnail:hover{

    transform:
        translateY(-2px);

}


.viewer-thumbnail.active{

    border:
        2px solid var(--green);

}


.viewer-thumbnail img{

    width:100%;

    height:100%;

    object-fit:cover;

    border-radius:8px;

}


/* =========================================================
   VIEWER RIGHT
========================================================= */

.viewer-right{

    min-width:0;

    padding:
        15px 25px 0 0;

}


.viewer-category{

    color:
        var(--green);

    font-size:10px;

    font-weight:800;

    letter-spacing:.18em;

    margin-bottom:18px;

}


.viewer-title{

    font-family:
        "Manrope",
        Arial,
        sans-serif;

    font-size:
        clamp(32px,4vw,54px);

    line-height:1.04;

    letter-spacing:-.045em;

    font-weight:700;

    color:
        var(--text);

    margin:
        0 0 27px;

}


.viewer-description{

    color:#68726d;

    font-size:15px;

    line-height:1.75;

    max-width:500px;

    margin-bottom:30px;

}


.viewer-divider{

    width:100%;

    height:1px;

    background:
        var(--line);

    margin:
        27px 0;

}


.viewer-details{

    display:flex;

    flex-direction:column;

    gap:9px;

}


.viewer-details span{

    color:#7c8580;

    font-size:9px;

    font-weight:800;

    letter-spacing:.18em;

}


.viewer-details strong{

    color:
        var(--green);

    font-size:14px;

    font-weight:600;

}


.viewer-product-count{

    color:#7b8580;

    font-size:10px;

    font-weight:800;

    letter-spacing:.16em;

    margin-bottom:25px;

}


.viewer-enquiry{

    display:inline-flex;

    align-items:center;

    justify-content:space-between;

    width:190px;

    min-height:48px;

    padding:
        0 19px;

    border:
        1px solid var(--green);

    background:
        var(--green);

    color:#ffffff;

    font-size:11px;

    font-weight:800;

    transition:.25s;

}


.viewer-enquiry span{

    font-size:17px;

}


.viewer-enquiry:hover{

    background:
        var(--green-dark);

    transform:
        translateY(-2px);

}


/* =========================================================
   FOOTER
========================================================= */

.catalogue-footer{

    margin-top:75px;

    padding:
        20px 4px;

    border-top:
        1px solid var(--line);

    display:flex;

    justify-content:space-between;

    color:#808983;

    font-size:10px;

}


/* =========================================================
   PRODUCT POPUP
========================================================= */

.product-modal{

    position:fixed;

    inset:0;

    z-index:1000;

    display:none;

    align-items:center;

    justify-content:center;

    padding:25px;

    background:
        rgba(13,35,31,.78);

    backdrop-filter:
        blur(10px);

}


.product-modal.active{

    display:flex;

}


.product-modal-box{

    width:
        min(950px,100%);

    max-height:90vh;

    overflow:auto;

    background:
        #f8f5ec;

    border-radius:24px;

    box-shadow:
        0 35px 100px
        rgba(10,40,34,.35);

    position:relative;

}


.modal-close{

    position:absolute;

    top:17px;

    right:17px;

    z-index:5;

    width:40px;

    height:40px;

    border:0;

    border-radius:50%;

    background:#ffffff;

    color:var(--green);

    font-size:25px;

    cursor:pointer;

}


.modal-close:hover{

    background:
        var(--green);

    color:#ffffff;

}


.modal-content{

    display:grid;

    grid-template-columns:
        1fr 1fr;

    min-height:520px;

}


.modal-product-image{

    min-height:520px;

    padding:40px;

    background:
        linear-gradient(
            145deg,
            #e4ece6,
            #f1eadc
        );

    display:flex;

    align-items:center;

    justify-content:center;

}


.modal-product-image img{

    width:100%;

    height:100%;

    max-height:440px;

    object-fit:contain;

}


.modal-product-details{

    padding:
        65px 45px;

    display:flex;

    flex-direction:column;

    justify-content:center;

}


.modal-category{

    color:
        var(--green);

    font-size:10px;

    font-weight:800;

    letter-spacing:.18em;

}


.modal-product-details h2{

    font-family:
        "Manrope",
        Arial,
        sans-serif;

    font-size:39px;

    line-height:1.05;

    font-weight:700;

    letter-spacing:-.04em;

    color:
        var(--text);

    margin:
        12px 0 18px;

}


.modal-product-details > p{

    color:#727a76;

    font-size:14px;

    line-height:1.75;

}


.modal-features{

    margin:
        28px 0;

    display:flex;

    flex-direction:column;

    gap:11px;

    color:#52615c;

    font-size:12px;

}


.modal-actions{

    display:flex;

    gap:10px;

    flex-wrap:wrap;

}


.modal-enquiry,
.modal-whatsapp{

    display:inline-flex;

    align-items:center;

    justify-content:center;

    min-height:45px;

    padding:
        11px 20px;

    border-radius:999px;

    font-size:11px;

    font-weight:800;

}


.modal-enquiry{

    background:
        var(--green);

    color:#ffffff;

}


.modal-whatsapp{

    background:
        var(--green-light);

    color:
        var(--green-dark);

}


/* =========================================================
   MOBILE HEADER
========================================================= */

.mobile-header{

    display:none;

}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1100px){

    .website-layout{

        grid-template-columns:
            310px
            1fr;

    }


    .sidebar{

        width:310px;

    }


    .sidebar-inner{

        padding:
            35px 28px;

    }


    .sidebar h1{

        font-size:27px;

    }


    .company-description{

        font-size:13px;

    }


    .catalogue-area{

        padding:
            50px 30px;

    }


    .catalogue-grid{

        gap:25px;

    }


    .category-image-box{

        height:260px;

    }


    .category-product-viewer{

        gap:35px;

    }


    .viewer-main-image{

        height:460px;

    }

}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:750px){

    body{

        background:
            #f3f0e8;

    }


    /* ================================================
       MOBILE HEADER
    ================================================= */

    .mobile-header{

        position:sticky;

        top:0;

        z-index:900;

        height:72px;

        padding:
            10px 18px;

        display:flex;

        align-items:center;

        justify-content:space-between;

        background:
            rgba(251,250,246,.97);

        backdrop-filter:
            blur(12px);

        border-bottom:
            1px solid var(--line);

    }


    .mobile-header img{

        width:52px;

        height:52px;

        object-fit:cover;

        border-radius:13px;

        box-shadow:
            0 5px 15px
            rgba(23,79,69,.08);

    }


    .mobile-menu-button{

        width:48px;

        height:48px;

        border:0;

        border-radius:50%;

        background:
            var(--green-light);

        color:
            var(--green);

        font-size:24px;

        cursor:pointer;

    }


    /* ================================================
       LAYOUT
    ================================================= */

    .website-layout{

        display:block;

    }


    /* ================================================
       SIDEBAR
    ================================================= */

    .sidebar{

        position:fixed;

        top:72px;

        left:0;

        width:100%;

        height:
            calc(100vh - 72px);

        transform:
            translateX(-100%);

        transition:
            transform .3s ease;

        z-index:850;

        box-shadow:
            10px 0 40px
            rgba(23,79,69,.15);

    }


    .sidebar.open{

        transform:
            translateX(0);

    }


    .sidebar-inner{

        padding:
            30px 24px;

    }


    .sidebar-logo{

        width:65px;

        height:65px;

    }


    .sidebar h1{

        font-size:28px;

    }


    .company-description{

        font-size:14px;

        line-height:1.55;

    }


    /* ================================================
       CATALOGUE
    ================================================= */

    .catalogue-area{

        width:100%;

        padding:
            32px 18px 30px;

    }


    .catalogue-header{

        margin-bottom:28px;

    }


    .catalogue-title span{

        font-size:12px;

        letter-spacing:.30em;

    }


    .catalogue-line{

        margin-top:13px;

    }


    /* ================================================
       CATEGORY GRID
    ================================================= */

    .catalogue-grid.category-grid-view{

        display:grid;

        grid-template-columns:
            repeat(2,minmax(0,1fr));

        column-gap:12px;

        row-gap:28px;

    }


    /* ================================================
       CATEGORY IMAGE
    ================================================= */

    .catalogue-category
    .category-image-box{

        width:100%;

        height:190px;

        border-radius:16px;

        overflow:hidden;

    }


    .catalogue-category
    .category-image-box img{

        width:100%;

        height:100%;

        object-fit:cover;

    }


    /* ================================================
       CATEGORY TEXT
    ================================================= */

    .category-content{

        padding:
            12px 2px 0;

    }


    .category-content > span{

        font-size:7px;

        letter-spacing:.12em;

        margin-bottom:5px;

    }


    .category-content h2{

        font-size:14px;

        line-height:1.25;

        margin-bottom:5px;

    }


    .category-content p{

        font-size:9px;

        line-height:1.45;

        margin-bottom:9px;

    }


    .category-content strong{

        font-size:9px;

        padding-top:9px;

    }


    .category-content strong b{

        font-size:15px;

    }


    /* ================================================
       CATEGORY VIEWER
    ================================================= */

    .category-product-viewer{

        display:block;

        width:100%;

    }


    .viewer-main-image{

        width:100%;

        height:350px;

        border-radius:16px;

        background:#ffffff;

        overflow:hidden;

    }


    .viewer-main-image img{

        width:100%;

        height:100%;

        object-fit:contain;

    }


    /* ================================================
       THUMBNAILS
    ================================================= */

    .viewer-thumbnails{

        display:flex;

        gap:8px;

        overflow-x:auto;

        padding:
            10px 0 6px;

        scrollbar-width:none;

    }


    .viewer-thumbnails::-webkit-scrollbar{

        display:none;

    }


    .viewer-thumbnail{

        flex:
            0 0 62px;

        width:62px;

        height:62px;

        border-radius:10px;

    }


    /* ================================================
       VIEWER DETAILS
    ================================================= */

    .viewer-right{

        padding:
            28px 2px 20px;

    }


    .viewer-category{

        font-size:8px;

        margin-bottom:10px;

    }


    .viewer-title{

        font-size:30px;

        line-height:1.08;

        margin-bottom:16px;

    }


    .viewer-description{

        font-size:12px;

        line-height:1.6;

        margin-bottom:20px;

    }


    .viewer-divider{

        margin:
            20px 0;

    }


    .viewer-details span{

        font-size:8px;

    }


    .viewer-details strong{

        font-size:12px;

    }


    .viewer-product-count{

        font-size:9px;

        margin-bottom:20px;

    }


    .viewer-enquiry{

        width:170px;

        min-height:45px;

        font-size:10px;

    }


    /* ================================================
       BACK
    ================================================= */

    .category-back-button{

        margin:
            0 0 18px;

        font-size:11px;

    }


    /* ================================================
       FOOTER
    ================================================= */

    .catalogue-footer{

        margin-top:50px;

        padding-top:18px;

        flex-direction:column;

        gap:6px;

    }


    /* ================================================
       PRODUCT POPUP
    ================================================= */

    .product-modal{

        padding:12px;

    }


    .product-modal-box{

        width:100%;

        max-height:94vh;

        border-radius:20px;

    }


    .modal-content{

        grid-template-columns:1fr;

    }


    .modal-product-image{

        min-height:260px;

        height:260px;

        padding:20px;

    }


    .modal-product-details{

        padding:
            28px 22px 32px;

    }


    .modal-product-details h2{

        font-size:28px;

    }


    .modal-product-details > p{

        font-size:12px;

    }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media(max-width:430px){

    .catalogue-area{

        padding:
            28px 14px 25px;

    }


    /* ================================================
       CATEGORY GRID
    ================================================= */

    .catalogue-grid.category-grid-view{

        grid-template-columns:
            repeat(2,minmax(0,1fr));

        column-gap:10px;

        row-gap:24px;

    }


    /* ================================================
       CATEGORY IMAGE
    ================================================= */

    .catalogue-category
    .category-image-box{

        height:165px;

        border-radius:14px;

    }


    /* ================================================
       CATEGORY TEXT
    ================================================= */

    .category-content{

        padding-top:10px;

    }


    .category-content > span{

        font-size:6.5px;

    }


    .category-content h2{

        font-size:13px;

    }


    .category-content p{

        font-size:8.5px;

    }


    .category-content strong{

        font-size:8px;

    }


    /* ================================================
       VIEWER
    ================================================= */

    .viewer-main-image{

        height:300px;

        border-radius:14px;

    }


    .viewer-thumbnail{

        flex-basis:56px;

        width:56px;

        height:56px;

    }


    .viewer-title{

        font-size:27px;

    }

}
