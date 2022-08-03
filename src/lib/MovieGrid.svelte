<script>
    import MovieCard from "./MovieCard.svelte";
    export let movies = [];

    export let heading = "Movies";
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-gap: 1rem;
        margin: 1rem;
    }
</style>

<div>
    <h1>{heading}</h1>
    <div class="grid">
        {#each movies as movie}
            <MovieCard title={movie.title} poster_path={movie.poster_path} overview={movie.overview} />
        {/each}
    </div>
</div>