<script>
  import "./styles.css";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import {
    register,
    isLoading,
    t,
    _,
    init,
    getLocaleFromNavigator,
    locale,
    locales,
  } from "svelte-i18n";

  register("en", () => import("../locales/en.json"));
  register("pt", () => import("../locales/pt.json"));
  init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "en" });
</script>

<svelte:head>
  <title>{$_("title")}</title>
</svelte:head>

<header>
  <a class="logo" href="{base}/"
    ><img src="{base}/logo.png" alt="Endangered recipes logo" /></a
  >
  <nav>
    <a href="{base}/" class:active={$page.url.pathname === "/"}>{$_("title")}</a
    >
    <a href="{base}/case" class:active={$page.url.pathname === "/case"}
      >{$_("title_coll")}</a
    >
  </nav>

  <!--   
  <select bind:value={$locale}>
    {#each $locales as locale}
      <option value={locale}>{locale}</option>
    {/each}
  </select>
 -->
  
</header>

{#if $isLoading}
  Please wait...
{:else}
  <main>
    <slot />
  </main>
{/if}
