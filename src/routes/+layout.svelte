<script>
  import "./styles.css";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import {
    register,
    isLoading,
    t,
    init,
    getLocaleFromNavigator,
    locale,
    locales,
  } from "svelte-i18n";

  register("en", () => import("../locales/en.json"));
  register("pt", () => import("../locales/pt.json"));
  register("fr", () => import("../locales/fr.json"));
  register("es", () => import("../locales/es.json"));
  init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "en" });
</script>

<svelte:head>
  <title>ENDANGERED RECIPES</title>
</svelte:head>

<header>
  <a class="logo" href="{base}/"
    ><img src="{base}/logo.png" alt="Endangered recipes logo" /></a
  >
  <nav>
    <a href="{base}/" class:active={$page.url.pathname === "/"}
      >ENDANGERED RECIPES</a
    >
    <a
      href="{base}/selected-recipes"
      class:active={$page.url.pathname === "/selected-recipes"}
      >SELECTED RECIPES</a
    >
    <a href="{base}/case" class:active={$page.url.pathname === "/case"}
      >COLLECTIONS</a
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

<style>
  @media (max-width: 768px) {
    nav {
      display: grid;
      margin: 10px;
    }
  }
</style>
