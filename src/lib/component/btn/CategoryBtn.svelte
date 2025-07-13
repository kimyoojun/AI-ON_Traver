<script>
    export let categoryBtn = false
    export let categoryName = ""

    const CategoryClick = () => {
        categoryBtn = !categoryBtn
    }
</script>

<button class="{categoryBtn ? 'btn btn-primary' : 'btn btn-soft btn-primary'}" on:click={CategoryClick}>{categoryName}</button>