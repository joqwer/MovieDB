<script>
    export let title = "";
    export let poster_path = "";
    export let overview = "";
</script>

<style>
    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #1e1e1e;
        color: #fff;
        padding: 0.5rem;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
</style>

<div class="movie-card">
    <h3>{title}</h3>
    <img width="200px" src="https://image.tmdb.org/t/p/w500/{poster_path}" alt="{title} poster" />
    <p>{overview}</p>
</div>