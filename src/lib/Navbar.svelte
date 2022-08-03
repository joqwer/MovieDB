<script>
    function searchMovies() {
        const query = window.event.target.query.value

        if (query.length > 0) {
            window.location.href = `/search?query=${query}`
        } else {
            alert('Please enter a search query')
        }
    }
</script>

<style>
    .navbar {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 1rem;
        background-color: #1e1e1e;
        color: #fff;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
    .navbar a {
        color: #fff;
        margin-right: 1rem;
        text-decoration: none;
    }
    .navbar a:hover {
        color: #ccc;
    }

    /* search box goes to flex end */
    .navbar form {
        margin-left: auto;
    }

    .navbar form input {
        border: none;
        background-color: #1e1e1e;
        color: #fff;
        padding: 0.25rem;
        font-size: 1.2rem;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
</style>

<main>
    <div class="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <form on:submit|preventDefault="{searchMovies}">
            <input name="query" type="text" placeholder="Search" />
            <input type="submit" value="Search" />
        </form>
    </div>
</main>