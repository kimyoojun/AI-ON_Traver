<script>
    let { children } = $props();
    import "../app.css";
</script>

<div class="w-screen h-screen  bg-[#8C9463]">
    {@render children()}
</div>