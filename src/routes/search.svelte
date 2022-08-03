<script context="module">
  export function load({ url }) {
    const query = url.searchParams.get('query');
    return {
      props: {
        query
      }
    };
  }
</script>
<script>
    import { onMount } from "svelte";
    import MovieGrid from "../lib/MovieGrid.svelte";
    import axios from "axios";

    let results = [];

    export let query;

    // Search the api for the query when the component is mounted
    onMount(async () => {
        const res = await axios.get(`http://localhost:3000/api/search/${query}`)
            .then(data => {console.log(data.data); results = data.data})
            .catch(err => console.log(err))
    });
</script>

<main>
  {#if results.length > 0}
    <MovieGrid heading="Search Results" movies="{results}" />
    {:else}
      <p>No results found</p>
  {/if}
</main>

