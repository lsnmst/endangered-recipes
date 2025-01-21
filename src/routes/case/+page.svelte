<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import Scroller from "@sveltejs/svelte-scroller";
    import { Map, TileLayer, GeoJSON } from "sveaflet";
    import L from "leaflet";
    import { alur } from "./alur.js";
    import { lake } from "./lake.js";

    let top = 0.1;
    let threshold = 0.5;
    let bottom = 0.9;
    let scroll = 0;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="intro">
    <h1 style="transform:{`translate3d(0, ${scroll * -0.5}px, 0)`} !important">
        ENDANGERED RECIPES is a collection of recipes shared <span class="highl"
            >by women, Indigenous and ecofeminists</span
        >, custodians of seeds, forests and water, spiritual and cultural
        leaders, whose territories are threatened by
        <span class="highl"
            >extractivism, climate change and cultural + memory annihilation</span
        >
        . Classified on a scale from
        <span style="background-color:#55717450">least concerned</span>,
        <span style="background-color:#9dad7f50">vulnerable</span>,
        <span style="background-color:#c7cfb750">endangered</span>
        to <span style="background-color:#f7f7e890">extinct</span>, recipes are
        documented to preserve or rehabilitate
        <span class="highl">food sovereignty</span>
        and knowledge transmission of food culture.
    </h1>
</div>

<h1>CASE STUDIES</h1>

<div class="recipe-title">
    <h1 class="highl">ALUR PEOPLE OF THE MAHAGI TERRITORY</h1>
    <p>
        A chronically harassed territory ravaged by terrorist militia violence,
        where illegal mining and uncontrolled extraction of forest resources are
        eroding the ancient primary forests of the Congo Basin. The Alur women
        have organised to save their recipes in defence of their culture and
        food sovereignty, as part of their non-violent actions for lasting
        peace.
    </p>
    <p class="highl">
        Coming soon, you will be able to find all publications posted on this
        page.
    </p>

    <div style="width: 100%;height: 500px;">
        <Map
            options={{
                center: [2.1690294564968156, 31.170240930168067],
                zoom: 6,
                scrollWheelZoom: false,
            }}
        >
            <TileLayer
                url={"https://api.mapbox.com/styles/v1/comuni-dados/ckbktovto0w4r1jnye9da9hs7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg"}
                options={{
                    maxZoom: 12,
                    attribution: "",
                }}
            />
            <GeoJSON
                json={[alur]}
                options={{
                    style(feature) {
                        return {
                            weight: 3,
                            opacity: 1,
                            color: "#ec73e8",
                            fillOpacity: 0,
                            fillColor: "white",
                        };
                    },
                }}
            />
        </Map>
    </div>
</div>

<div class="recipe-title">
    <h1 class="highl">LAKES OF THE ALBERTINE RIFT</h1>
    <p>
        A lacustrine region with an enormous ecological and ethno-linguistic
        diversity, known for its abundance of resources that attract colonialist
        forces from all over, occupying the mountains and waters, exploiting and
        ravishing the population. A region that has been in a fraticidal war for
        power and influence for decades, sparked by land conflicts and identity
        conflicts. A region where women are stolen, raped, and killed at
        fountains while collecting water, and where women suffer the most from
        limited access to forest resources imposed by fortress conservation or
        the degredation of ecosystems. The women from the Albertine Rift
        collected their recipes to rebuild the identity they had lost over the
        past 30 years as internally displaced persons as a result of the war
        that had reached the heart of the Congo Basin, exercising their memory
        with hope and demanding lasting peace.
    </p>
    <p class="highl">
        Coming soon, you will be able to find all publications posted on this
        page.
    </p>

    <div style="width: 100%;height: 500px;">
        <Map
            options={{
                center: [-0.1303378807916708, 29.61986801838833],
                zoom: 5,
                scrollWheelZoom: false,
            }}
        >
            <TileLayer
                url={"https://api.mapbox.com/styles/v1/comuni-dados/ckbktovto0w4r1jnye9da9hs7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29tdW5pLWRhZG9zIiwiYSI6ImNqdWxlaHRqbjIycjE0M3BpamY3a3c4aWUifQ.HGizp_QckKQVjAZnnw8qAg"}
                options={{
                    maxZoom: 12,
                    attribution: "",
                }}
            />
            <GeoJSON
                json={[lake]}
                options={{
                    style(feature) {
                        return {
                            weight: 3,
                            opacity: 1,
                            color: "#ec73e8",
                            fillOpacity: 0,
                            fillColor: "white",
                        };
                    },
                }}
            />
        </Map>
    </div>
</div>

<div class="outro">
    <h1>
        The ENDANGERED RECIPES initiative aims at publishing collections of
        recipes <a
            href="{base}/case"
            class:active={$page.url.pathname === "/case"}
            >from geographical areas</a
        >
        where dynamics of intensification of resource extraction, violation of Indigenous,
        women and land rights, climate change, and politics resulting in the loss
        of food sovereignty are recorded.<br />To support and participate in the
        project, grow the recipe collection or enquire, please
        <a href="https://ee-eu.kobotoolbox.org/x/NnTXpIEA" target="_blank"
            >get in touch</a
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
    .recipe-title {
        font-size: 1.2em;
        overflow: hidden;
        padding: 1em;
        border: 5px solid #ec73e8;
        border-top-right-radius: 25px;
        margin-bottom: 2em;
    }
    .highl {
        color: #ec73e8;
        font-weight: 500;
    }

    @media (max-width: 768px) {
    }
</style>
