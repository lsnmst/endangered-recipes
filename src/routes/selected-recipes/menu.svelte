<script>
    export let languages;
    export let ends;
    export let selectedLang;
    export let selectedEnd;
    // $:console.log(languages)
    // $:console.log(endangered)
</script>

<!-- svelte-ignore a11y-no-onchange -->
<section class="menu-cont">
    <select class="menu" name="menu" id="menu" bind:value={selectedEnd}>
        <option disabled selected value="">Select a risk class</option>
        <option value="all">All the classes</option>
        {#each ends as end}
            <option value={end}>{end}</option>
        {/each}
    </select>
    <!--     <select class="menu" name="menu" id="menu" bind:value={selectedLang}>
        <option disabled selected value="">Select a language</option>
        <option value="all">All languages</option>
        {#each languages as language}
            <option value={language}>{language}</option>
        {/each}
    </select>
 -->
</section>

<style>
    .menu-cont {
        width: 40%;
        display: flex;
        margin: 0 10px 0 0;
    }

    select {
        margin: 0;
        font-size: 1rem;
        border: 1px solid gray;
        border-radius: 5px;
    }

    .menu {
        width: 100%;
    }
</style>
