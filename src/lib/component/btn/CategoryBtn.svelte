<script lang="ts">
    export let categoryBtn: boolean = false
    export let categoryName: string = ""

    const CategoryClick = () => {
        categoryBtn = !categoryBtn
    }
</script>

<button class="{categoryBtn ? 'btn btn-primary' : 'btn btn-soft btn-primary'}" on:click={CategoryClick}>{categoryName}</button>
