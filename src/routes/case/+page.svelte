<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import Scroller from "@sveltejs/svelte-scroller";
    import { Map, TileLayer, GeoJSON } from "sveaflet";
    import L from "leaflet";
    import { alur } from "./alur.js";
    import { lake } from "./lake.js";
    import { _ } from "svelte-i18n";

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

<h1>{$_("caseM")}</h1>

<div class="collection-box">
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ RD CONGO</p>
        <h1 class="highl">{$_("alur")}</h1>
        <p class="collection-descr">{$_("alur_descr")}</p>
        <p class="highl">{$_("coming_soon")}</p>

        <div style="width: 100%;height: 500px;">
            <!--<Map
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
        </Map>-->
        </div>
    </div>
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ UGANDA, RD CONGO, RWANDA</p>
        <h1 class="highl">{$_("rift")}</h1>
        <p class="collection-descr">{$_("rift_descr")}</p>
        <p class="highl">{$_("coming_soon")}</p>

        <div style="width: 100%;height: 500px;">
            <!--<Map
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
        </Map>-->
        </div>
    </div>
</div>

<h1 style="margin-top: 3em;">{$_("caseExt")}</h1>
<h5>{$_("caseExt_descr")}</h5>



<div class="collection-box">
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ MEXICO</p>
        <h1 class="highl">{@html $_("sistermilpa")}</h1>
        <p class="collection-descr">{@html $_("sistermilpa_descr")}</p>
        <p class="highl">{@html $_("sistermilpa_link")}</p>
    </div>
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ COLOMBIA</p>
        <h1 class="highl">{@html $_("honda")}</h1>
        <p class="collection-descr">{@html $_("honda_descr")}</p>
        <p class="highl">{@html $_("honda_link")}</p>
    </div>
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ BRAZIL</p>
        <h1 class="highl">{@html $_("kaingang")}</h1>
        <p class="collection-descr">{@html $_("kaingang_descr")}</p>
        <p class="highl">{@html $_("kaingang_link")}</p>
    </div>
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ MEXICO</p>
        <h1 class="highl">{@html $_("campesinxs")}</h1>
        <p class="collection-descr">{@html $_("campesinxs_descr")}</p>
        <p class="highl">{@html $_("campesinxs_link")}</p>
    </div>
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ BRAZIL</p>
        <h1 class="highl">{@html $_("quintal")}</h1>
        <p class="collection-descr">{@html $_("quintal_descr")}</p>
        <p class="highl">{@html $_("quintal_link")}</p>
    </div>
    <div class="recipe-title">
        <p style="font-size: 0.85em;">⦿ KENYA</p>
        <h1 class="highl">{@html $_("busia")}</h1>
        <p class="collection-descr">{@html $_("busia_descr")}</p>
        <p class="highl">{@html $_("busia_link")}</p>
    </div>
</div>



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
    .collection-box {
        display: flex;
        flex-wrap: wrap;
    }
    .recipe-title {
        font-size: 1.2em;
        overflow: hidden;
        padding: 1em;
        border: 5px solid #ec73e8;
        border-top-right-radius: 25px;
        margin: 1em;
        width: 30%;
        max-height: 36em;
    }
    .collection-descr {
        min-height: 22em;
        font-size: 0.85em;
    }
    .highl {
        color: #ec73e8;
        font-weight: 500;
        min-height: 100px;
    }

    @media (max-width: 768px) {
        .collection-box {
            max-width: 100%;
            flex-direction: column;
        }
        .recipe-title {
            min-width: 90%;
            max-height: 45em;
        }
    }
</style>
