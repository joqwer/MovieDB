<script>
import Navbar from "../lib/Navbar.svelte";
import Footer from "../lib/Footer.svelte";
import MovieGrid from "../lib/MovieGrid.svelte";
import axios from "axios";
import { onMount } from "svelte";

let movies = [];

async function getMovies() {
    const res = axios.get("http://localhost:3000/api/popular")
        .then(data => data.data.slice(0, 10));

    return res;
}

onMount(async () => {
    movies = await getMovies();
    console.log(movies);
});

</script>

<style>

</style>
<main>
    <MovieGrid heading="Popular Movies" movies="{movies}" />
</main>