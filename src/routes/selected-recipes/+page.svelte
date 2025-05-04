<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { _ } from "svelte-i18n";
    import { bookData } from "./bookData.js";
    import Menu from "./menu.svelte";
    import Search from "./search.svelte";
    import Book from "./book.svelte";
    import NoResults from "./noresults.svelte";

    let languages = []; // menu built from bookData
    let selectedLang = ""; //  menu selection

    const getLanguages = () => {
        for (let bookObj of bookData) {
            if (!languages.includes(bookObj.language)) {
                languages = [...languages, bookObj.language];
            }
        }
        languages = languages.sort();
    };
    onMount(() => getLanguages());

    let ends = [];
    let selectedEnd = "";

    const getEnds = () => {
        for (let bookObj of bookData) {
            if (!ends.includes(bookObj.end)) {
                ends = [...ends, bookObj.end];
            }
        }
        ends = ends.sort();
    };
    onMount(() => getEnds());

    // Query results
    let filteredBooks = [];

    // For Select Menu
    $: if (selectedLang) getBooksByLang();
    const getBooksByLang = () => {
        // resets search input if menu is being used
        searchTerm = "";

        if (selectedLang === "all") {
            return (filteredBooks = []);
        }
        return (filteredBooks = bookData.filter(
            (book) => book.language === selectedLang,
        ));
    };

    $: if (selectedEnd) getBooksByEnd();
    const getBooksByEnd = () => {
        // resets search input if menu is being used
        searchTerm = "";

        if (selectedEnd === "all") {
            return (filteredBooks = []);
        }
        return (filteredBooks = bookData.filter(
            (book) => book.end === selectedEnd,
        ));
    };

    // For Search Input
    let searchTerm = "";
    // resets language menu if search input is used
    $: if (searchTerm) selectedLang = "";
    $: if (searchTerm) selectedEnd = "";

    const searchBooks = () => {
        return (filteredBooks = bookData.filter((book) => {
            let bookTitle = book.title.toLowerCase();
            return bookTitle.includes(searchTerm.toLowerCase());
        }));
    };

    let top = 0.1;
    let threshold = 0.5;
    let bottom = 0.9;
    let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="intro">
    <h1 style="transform:{`translate3d(0, ${scroll * -0.5}px, 0)`} !important">
        {$_("intro_message")}<span class="highl"
            >{$_("intro_message_span_a")}</span
        >{$_("intro_message_a")}
        <span class="highl">{$_("intro_message_span_b")}</span>
        {$_("intro_message_b")}
        <span style="background-color:#55717450">{$_("lc")}</span>,
        <span style="background-color:#9dad7f50">{$_("vu")}</span>,
        <span style="background-color:#c7cfb750">{$_("en")}</span>
        {$_("to")}
        <span style="background-color:#f7f7e890">{$_("ex")}</span>
        {$_("intro_message_c")}
        <span class="highl">{$_("intro_message_span_c")}</span>
        {$_("intro_message_d")}
    </h1>
</div>

<h5>
    *The SELECTED RECIPES section is currently published exclusively in English<br
    />
    All recipes are under <a href="https://wiki.p2pfoundation.net/Peer_Production_License" target="_blank">P2P- Peer Production Licence</a> , Attribution ShareAlike Non
    Capitalist
</h5>

<section id="query-section">
    <h3 style="margin: 0 10px 0 0;">FILTER RECIPES</h3>
    <Menu {ends} bind:selectedEnd {languages} bind:selectedLang />
    <!-- <Search bind:searchTerm on:input={searchBooks} /> -->
</section>

<main id="bookshelf">
    {#if searchTerm && filteredBooks.length === 0}
        <NoResults />
    {:else if filteredBooks.length > 0}
        {#each filteredBooks as { title, image, language, country, end, pdfLink }}
            <Book {title} {image} {language} {country} {end} {pdfLink} />
        {/each}
    {:else}
        {#each bookData as { title, image, language, country, end, pdfLink }}
            <Book {title} {image} {language} {country} {end} {pdfLink} />
        {/each}
    {/if}
</main>

<div class="outro">
    <h1>
        {@html $_("outer_a")}
        <a href="{base}/case" class:active={$page.url.pathname === "/case"}
            >{@html $_("outer_b")}</a
        >
        {@html $_("outer_c")}
        <a href="https://ee-eu.kobotoolbox.org/x/NnTXpIEA" target="_blank"
            >{@html $_("outer_d")}</a
        >.
    </h1>
</div>

<style>
    .intro {
        border-bottom: 1px rgb(236, 115, 232) solid;
        margin-bottom: 1em;
        min-height: 40vh;
    }
    .outro {
        min-height: 40vh;
        border: 5px rgb(236, 115, 232) solid;
        border-top-left-radius: 25px;
        color: #000000;
        padding: 1em;
        margin-top: 5em;
    }
    .highl {
        color: #ec73e8;
        font-weight: 500;
    }

    #query-section {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2% 0;
    }
    #bookshelf {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .book {
            width: 100% !important;
        }
    }
</style>
