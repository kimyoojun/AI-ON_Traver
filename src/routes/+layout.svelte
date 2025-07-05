<script lang="ts">
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="w-screen h-screen bg-[#8C9463]">
	{@render children()}
</div>