<script>
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import Scroller from "@sveltejs/svelte-scroller";
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

<h1 style="font-size: 1.5em; width:80vw; margin-bottom:2em">
    {$_("intro_precious")}
    <span class="highl">{$_("intro_precious_span")}</span>
</h1>

<div class="recipe" style="padding: 0 0 1em 0">
    <div class="recipe-title">
        <div>
            <p
                style="color:#ec73e8; font-weight:bold; margin-block-start: 0.2em !important; margin-block-end: 0.2em !important;"
            >
                PRECIOUS NATURINDA
            </p>
            <h1
                style="margin-block-start: 0.2em !important; margin-block-end: 0.2em !important;"
            >
                ENTURIRE
            </h1>
            <p
                style="font-size: 0.8em;margin-block-start: 0.2em !important; margin-block-end: 0.8em !important;"
            >
                {$_("recipe_serve")}
            </p>
        </div>
        <div style="display:flex;flex-direction:row">
            <div
                class="recipe-info"
                style="margin-block-start: 0.1em !important; margin-block-end: 0.1em !important;"
            >
                <p>{$_("recipe_indig")}</p>
                <h3>BAGIKA PEOPLE</h3>
                <p>{$_("recipe_lang")}</p>
                <h3>RUKIGA</h3>
            </div>
            <div
                style="display: flex; flex-direction:column; text-align: center;"
            >
                <img
                    src="{base}/seed/VU.png"
                    style="width: 20vw; max-width:200px;"
                    alt="Vulnerable recipe label"
                />
            </div>
        </div>
    </div>
</div>

<div class="precious">
    <div class="step">
        <Scroller {top} {threshold} {bottom}>
            <div slot="foreground" style="padding: 0 0 0 60%;">
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="ingredients">
                            <img src="{base}/enturire/seed.png" alt="" />{$_(
                                "dried_sorghum",
                            )}
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="preparations">
                            <img src="{base}/enturire/time.png" alt="" />12 h
                            <img src="{base}/enturire/soaking.png" alt="" />{$_(
                                "soaking",
                            )}
                        </div>
                        <div class="preparations">
                            <img src="{base}/enturire/time.png" alt="" />72-96 h
                            <img
                                src="{base}/enturire/fermenting.png"
                                alt=""
                            />{$_("fermenting")}
                        </div>
                        <div class="preparations">
                            <img
                                src="{base}/enturire/grinding.png"
                                alt=""
                            />{$_("grinding")}
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="ingredients">
                            <img src="{base}/enturire/endiiro.png" alt="" />
                            {@html $_("endiiro")}
                        </div>
                    </div>
                </section>
            </div>

            <div slot="background">
                <p>1.</p>
                <p>{$_("step1")}</p>
            </div>
        </Scroller>
    </div>

    <div class="step">
        <Scroller {top} {threshold} {bottom}>
            <div slot="foreground" style="padding: 0 0 0 60%;">
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="ingredients">
                            <img src="{base}/enturire/endiiro.png" alt="" />
                            {@html $_("endiiro")}
                        </div>
                        <div class="ingredients">
                            <img src="{base}/enturire/water.png" alt="" />
                            {@html $_("jerrycan")}
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="preparations">
                            <img src="{base}/enturire/boiling.png" alt="" />{$_(
                                "boiling",
                            )}
                        </div>
                        <div class="preparations">
                            <img src="{base}/enturire/mixing.png" alt="" />{$_(
                                "mixing",
                            )}
                        </div>
                        <div class="preparations">
                            <img src="{base}/enturire/time.png" alt="" />72-96 h
                            <img src="{base}/enturire/resting.png" alt="" />{$_(
                                "resting",
                            )}
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="ingredients">
                            <img
                                src="{base}/enturire/step3.png"
                                alt=""
                            />{@html $_("mixture")}
                        </div>
                    </div>
                </section>
            </div>

            <div slot="background">
                <p>2.</p>
                <p>
                    {@html $_("step2")}
                </p>
                <p>3.</p>
                <p>
                    {$_("step3")}
                </p>
            </div>
        </Scroller>
    </div>

    <div class="step">
        <Scroller {top} {threshold} {bottom}>
            <div slot="foreground" style="padding: 0 0 0 60%;">
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="ingredients">
                            <img
                                src="{base}/enturire/step3.png"
                                alt=""
                            />{@html $_("mixture")}
                        </div>
                        <div class="ingredients">
                            <img src="{base}/enturire/honey.png" alt="" />
                            {@html $_("honey")}
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="preparations">
                            <img src="{base}/enturire/mixing.png" alt="" />{$_(
                                "mixing",
                            )}
                        </div>
                        <div class="preparations">
                            <img src="{base}/enturire/time.png" alt="" />24 h
                            <img src="{base}/enturire/resting.png" alt="" />{$_(
                                "resting",
                            )}
                        </div>
                    </div>
                </section>
                <section>
                    <div
                        class="box-labels"
                        style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
                    >
                        <div class="ingredients">
                            <img src="{base}/enturire/final.png" alt="" /><b
                                >ENTURIRE</b
                            >
                        </div>
                    </div>
                </section>
            </div>

            <div slot="background">
                <p>4.</p>
                <p>
                    {$_("step4")}
                </p>
            </div>
        </Scroller>
    </div>
</div>

<h1 style="font-size: 1.5em; width:80vw; margin-bottom:2em">
    {$_("climate-memory")}
    <span style="background-color:#c7cfb750">{$_("vuM")}</span>.
</h1>

<div
    class="box-labels"
    style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
>
    <div class="labels">
        <img src="{base}/seed/LC.png" alt="Least concerned recipe label" />{$_(
            "lcM",
        )}
    </div>
    <div class="labels">
        <img src="{base}/seed/VU.png" alt="Vulnerable recipe label" /><b
            >{$_("vuM")}</b
        >
    </div>
    <div class="labels">
        <img src="{base}/seed/EN.png" alt="Endangered recipe label" />
        {$_("enM")}
    </div>
    <div class="labels">
        <img src="{base}/seed/EX.png" alt="Extinct recipe logo" />{$_("exM")}
    </div>
</div>

<div style="min-height:60vh">
    <div
        class="recipe-info hover"
        style="margin-block-start: 0.1em !important; margin-block-end: 0.1em !important; width:98vw; font-size:1.2em;margin: auto;"
    >
        <p>{$_("recipe_climate_a")}</p>
        <p>{$_("recipe_climate_b")}</p>
    </div>
</div>

<div style="min-height:80vh;">
    <h1 style="font-size: 1.5em; width:80vw; margin-bottom:2em">
        {$_("message")}
    </h1>
    <div
        class="recipe-info hover"
        style="margin-block-start: 0.1em !important; margin-block-end: 0.1em !important; width:98vw; font-size:1.2em"
    >
        <p>{@html $_("precious-message")}</p>
    </div>
    <h1
        class="highl"
        style="font-size: 1.5em; width:80vw; margin-top:2em; margin-bottom:2em"
    >
        {$_("preciuos_final")}
    </h1>
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
    }
    .precious {
        background-color: #f3e1ee;
        padding: 1em;
    }
    .step {
        padding: 0 0 0 0;
    }

    [slot="background"] {
        width: 60vw;
        min-height: 40vh;
        font-size: 1.2em;
        overflow: hidden;
        padding: 1.5em;
        border: 5px solid #ec73e8;
        border-top-right-radius: 25px;
    }

    [slot="background"] p {
        margin: 0;
    }

    [slot="foreground"] {
        pointer-events: none;
    }

    [slot="foreground"] section {
        pointer-events: all;
    }

    section {
        height: 40vh;
        padding: 2.5em;
        margin: 0 0 2em 0;
        border: 2px solid #ec73e8;
        border-top-left-radius: 18px;
    }

    .recipe-title {
        font-size: 1.2em;
        overflow: hidden;
        padding: 1em;
        border: 5px solid #ec73e8;
        border-top-right-radius: 25px;
    }

    .recipe-title h1 {
        font-size: 2.5em;
    }

    .recipe-info {
        border: 2px solid #ec73e8;
        border-top-left-radius: 18px;
        width: 40vw;
        padding: 1.5em;
    }

    .recipe-info p,
    h3 {
        font-size: 0.85em !important;
        margin-block-start: 0.1em !important;
        margin-block-end: 0.1em !important;
    }

    .labels {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .labels img {
        width: 20vw;
        max-width: 200px;
        border: 1px solid #ec73e8;
        border-top-right-radius: 25px;
        margin: 1em;
    }

    .ingredients {
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 1px solid #ec73e8;
        border-bottom-left-radius: 25px;
        padding: 0.25em;
    }

    .ingredients img {
        width: 15vw;
        max-width: 150px;
        margin: 0.5em;
    }

    .preparations {
        display: flex;
        flex-direction: column;
        text-align: center;
        border: 1px solid #ec73e8;
        border-bottom-left-radius: 25px;
        padding: 0.2em;
    }

    .preparations img {
        width: 8vw;
        max-width: 100px;
        margin: 0.3em;
    }

    .highl {
        color: #ec73e8;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .box-labels {
            flex-direction: column !important;
        }
        .box-labels img {
            margin: auto !important;
        }

        section {
            padding: 0.25em;
            font-size: 0.8em !important;
        }
        [slot="background"] {
            font-size: 1.1em !important;
        }
    }
</style>
