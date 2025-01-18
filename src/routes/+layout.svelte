<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>ENDANGERED RECIPES</title>
</svelte:head>

<header>
  <nav>
    <a href="{base}/" class:active={$page.url.pathname === "/"}>TEST</a>
  </nav>
</header>

<main>
  <slot />
</main>
