<script>
    import { base } from "$app/paths";
    import Scroller from "@sveltejs/svelte-scroller";

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

<h1 style="font-size: 1.5em; width:80vw; margin-bottom:2em">
    The recipes are autonomously documented by the authoresses to explain their
    personal relationship and that of their community with the ancestral land.
    Using their Indigenous knowledge, they selected ingredients treasured in
    their memory that symbolise their struggle to defend the land, Indigenous
    and women's rights. Precious, who documented the ENTURIRE recipe, allows us
    to realise how the recipes were documented:
</h1>

<div class="recipe" style="padding: 0 0 1em 0">
    <div class="recipe-title">
        <div style="">
            <p style="color:#ec73e8; font-weight:bold">PRECIOUS NATURINDA</p>
            <h1>ENTURIRE</h1>
        </div>
        <div style="display:flex;flex-direction:row">
            <div
                class="recipe-info"
                style="margin-block-start: 0.1em !important; margin-block-end: 0.1em !important;"
            >
                <p>Indigeneity</p>
                <h3>BAGIKA PEOPLE</h3>
                <p>Native language</p>
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
                <section>Ingredients</section>
                <section>Preparations</section>
                <section>Results</section>
            </div>

            <div slot="background">
                <p>1.</p>
                <p>
                    Dried sorghum is soaked in water for about 12 hours. It is
                    mixed with ash to turn black. It is then kept in the dark
                    for about 3 to 4 days for it to ferment. This fermentation
                    process makes the sorghum so sweet after turning black. It
                    is then dried before it is taken to the machine for grinding
                    to make flour.
                </p>
            </div>
        </Scroller>
    </div>

    <div class="step">
        <Scroller {top} {threshold} {bottom}>
            <div slot="foreground" style="padding: 0 0 0 60%;">
                <section>Ingredients</section>
                <section>Preparations</section>
                <section>Results</section>
            </div>

            <div slot="background">
                <p>2.</p>
                <p>
                    In a bucket or pot, put 2 baskets of sorghum flour. Boil
                    water and mix it flour in the bucket. Keep mixing and ensure
                    the mixture is so thick. The flour should be much. Then add
                    some flour on top of the mixture and leave it to cool.<br
                    /><br />
                </p>
                <p>3.</p>
                <p>
                    After the mixture has coolen down, add like a 5 litre
                    jerrycan or more of water that was boiled at first. Make
                    sure the outcome is bot so waterly. Sorinkle some more flour
                    on top and cover it for three to four days.
                </p>
            </div>
        </Scroller>
    </div>

    <div class="step">
        <Scroller {top} {threshold} {bottom}>
            <div slot="foreground" style="padding: 0 0 0 60%;">
                <section>Ingredients</section>
                <section>Preparations</section>
                <section>Results</section>
            </div>

            <div slot="background">
                <p>4.</p>
                <p>
                    After 4 days, another mixture of sorghoum flour mixed with
                    warm water and honey is added. After a day, it is ready for
                    drinking, This makes the taste so sweet but it keeps turning
                    alcoholic depending on the number of days it stays (women
                    prefer to take it in its initial stages while men love it
                    then it has taken some days).
                </p>
            </div>
        </Scroller>
    </div>
</div>

<h1 style="font-size: 1.5em; width:80vw; margin-bottom:2em">
    Through a climate memory exercise, Precious explained how climate is
    affecting the reproduction, growth and harvesting of ingredients, and how
    the transmission of knowledge in the practices of cooking this recipe is
    being disrupted, defining her recipe as <span
        style="background-color:#c7cfb750">VULNERABLE</span
    >.
</h1>

<div
    class="box-labels"
    style="display: flex; flex-direction:row; margin-bottom:2em; justify-content: center;"
>
    <div style="display: flex; flex-direction:column; text-align: center;">
        <img
            src="{base}/seed/LC.png"
            style="width: 20vw; max-width:200px; border: 1px solid #ec73e8; border-top-right-radius: 25px; margin:1em;"
            alt="Least concerned recipe label"
        />LEAST CONCERNED
    </div>
    <div style="display: flex; flex-direction:column; text-align: center;">
        <img
            src="{base}/seed/VU.png"
            style="width: 20vw; max-width:200px; border: 4px solid #ec73e8; border-top-right-radius: 25px; margin:1em;"
            alt="Vulnerable recipe label"
        /><b>VULNERABLE</b>
    </div>
    <div style="display: flex; flex-direction:column; text-align: center;">
        <img
            src="{base}/seed/EN.png"
            style="width: 20vw; max-width:200px; border: 1px solid #ec73e8; border-top-right-radius: 25px; margin:1em;"
            alt="Endangered recipe label"
        />ENDANGERED
    </div>
    <div style="display: flex; flex-direction:column; text-align: center;">
        <img
            src="{base}/seed/EX.png"
            style="width: 20vw; max-width:200px; border: 1px solid #ec73e8; border-top-right-radius: 25px; margin:1em;"
            alt="Extinct recipe logo"
        />EXTINCT
    </div>
</div>

<div style="min-height:80vh">
    <div
        class="recipe-info hover"
        style="margin-block-start: 0.1em !important; margin-block-end: 0.1em !important; width:98vw; font-size:1.2em;margin: auto;"
    >
        <p>
            Due to harsh climatic weather conditions, change of seasons, soil
            degradation due to chemical use and pests and disease, sorghum
            growing is slowly reducing in our region and the harvests is no
            longer bumper as it used to be. While I was growing up, my mother
            used to harvest between 15- 20 sacks of sorghum on a good harvest.
            As a small holder farmer, she would sell some and leave others to
            keep the home food secure at all times. Now, I was surprised to find
            that she harvests 1 or 3 and 5 utmost when she has exhausted all her
            land. She told me some of the reasons for poor harvests are poor
            rains and degraded soils that make the sorghum stunted. This is
            causing food insecurity and this automatically heavily falls on
            women who are traditional meant to keep homes food secure and is the
            source of their livelihood.
        </p>
        <p>
            Another issue is on knowledge sharing. The knowledge right from the
            materials used to making the porridge is slowly disappearing.
            Initially, the porridge used to be prepared on pots and served in
            calabashes and gourds but now days the trend is changing to use of
            buckets and cups. This is because people who used to make them are
            slowly dying without transferring the knowledge to the young
            generation. Also the baskets are made out of local grass. These were
            mainly done by women as source of income. However, the materials are
            slowly facing extinct and the knowledge is not being transferred to
            the young generation.
        </p>
    </div>
</div>

<div style="min-height:80vh;border-bottom: 1px rgb(236, 115, 232) solid;">
    <h1 style="font-size: 1.5em; width:80vw; margin-bottom:2em">
        Finally, she explained what this recipe represents to her and why it is
        important to preserve it to ensure food sovereignty
    </h1>
    <div
        class="recipe-info hover"
        style="margin-block-start: 0.1em !important; margin-block-end: 0.1em !important; width:98vw; font-size:1.2em"
    >
        <p>
            This local brown thick drink called enturire or local porridge is
            household item for each home. To warmly welcome a visitor, he/she
            doesn’t have to miss this drink in your home. It is important in
            home because it keeps away hunger. When you have local porridge, you
            may end up not eating any food because it keeps one strong. I
            remember in our school days, my mother, who is a peasant farmer,
            would prepare it on Sundays to take us throughout the week. Local
            porridge would stand in a gap of a meal at lunch time whenever she
            would have no time to cook lunch for us. Two cups were always enough
            for each of us as lunch to enable us keep strong for the rest of the
            day at school as we wait to prepare supper. Therefore, the porridge
            was a big weapon to fight food insecurity in homes. It was meant to
            keep homes food secure in times of food scarcity, local porridge
            would stand in the gap.<br />
            Secondly, it is a symbol of unity and love among the Bakiga tribe because
            as long as there is local porridge in a home, a guest has to be serving
            upon visit. At selling points, people drink together and in most cases
            after getting satisfied, they start dancing in appreciation and unity.<br
            />
            I feel we are missing out on traditional knowledge sharing, sustainable
            farming methods and indigenous seeds that used to be resistant to harsh
            climatic conditions. Whereas many crops have been improved, at least
            cereals are still indigenous though the introduction of modern farming
            that requires use of chemicals and diversion from traditional methods
            of keeping soils fertile is affecting the harvests leading to food insecurity.
            Therefore it is important to promote sustainable methods of farming practices,
            conserve the environment and promote intergenerational learning to share
            to transfer knowledge to the young generation.
        </p>
    </div>
</div>

<div class="outro">
    <h1>
        To support and participate in the project, grow the recipe collection or
        enquire, please get in touch.
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
    }
</style>
