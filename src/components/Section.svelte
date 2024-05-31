<script lang="ts">
	import Hideable from './Hideable.svelte';

	export let title: string = '';
</script>

<section class="my-8">
	<Hideable>
		<h2
			class="text-2xl font-semibold uppercase text-left max-w-fit relative bg-secondary-700 before:absolute before:-skew-x-12 before:origin-bottom-left before:bg-secondary-700 before:w-full before:h-full before:-z-10"
		>
			{title}
		</h2>
		<hr class="mt-0 mb-2 border-slate-400" />
		<slot />
	</Hideable>
</section>
