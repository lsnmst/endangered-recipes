<script>
  import "./styles.css";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
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
    <a href="{base}/case" class:active={$page.url.pathname === "/case"}
      >Case studies</a
    >
  </nav>
</header>

<main>
  <slot />
</main>
