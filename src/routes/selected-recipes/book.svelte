<script>
    import { scale } from "svelte/transition";
    import { expoInOut } from "svelte/easing";
    export let title;
    export let image;
    export let language;
    export let country;
    export let end;
    export let pdfLink;
</script>

<section class="book" transition:scale={{ duration: 1000, easing: expoInOut }}>
    <section class="book-top-info">
        <figure class="bkcont">
            <img src={image} alt={title} class="bkcover" />
            <div class="language">Language: {language} ({country})</div>
            <div class="title">{title}</div>
            <div class="buy-options-cont">
                <a href={pdfLink} target="_blank"
                    ><button class="p-book-btn pdf-btn"
                        >OPEN</button
                    ></a
                >
            </div>
        </figure>
    </section>
</section>

<style>
    .book {
        width: 30%;
        border: 1px solid rgb(236, 115, 232);
        border-radius: 3px;
        margin: 5px;
    }

    .book-top-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    /* Book Layout */
    .bkcont {
        width: 100%;
        text-align: center;
    }

    .bkcover {
        width: 250px;
        height: 250px;
        margin-bottom: 5px;
    }

    div.language {
        font-size: 1em;
        margin: 5px 0;
    }

    div.title {
        font-size: 1.5em;
        font-weight: bold;
        margin: 5px 0;
    }

    /* Book Links Layout */
    a {
        cursor: pointer;
    }

    .buy-options-cont {
        text-align: center;
        padding: 0 10px 10px;
    }

    .p-book-btn {
        border: 1px solid rgb(236, 115, 232);
        width: 100px;
        background: none;
        font-weight: 500;
        font-size: 0.8rem;
        color: black;
        text-transform: uppercase;
        line-height: 130%;
        cursor: pointer;
        margin-top: 0.8em;
        padding: 9px 14px;
        transition: 0.3s all;
        border-radius: 8px;
    }

    .p-book-btn:hover {
        background-color: rgb(236, 115, 232);
        color: #000;
    }

    .p-book-btn:active {
        box-shadow: inset 0 0 1px black;
    }

    @media (max-width: 768px) {
        .book {
            width: 100% !important;
        }
    }

</style>
