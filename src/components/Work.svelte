<script lang="ts">
	import Hideable from './Hideable.svelte';
	import Icon from '@iconify/svelte';

	export let position: string = '';
	export let company: string = '';
	export let url: string = '';
	export let years: string[] = [];
	export let location: string = '';
	export let details: string[] = [];
</script>

<div class="work-experience">
	<Hideable>
		<div class="flex mb-2 print:mb-1">
			<div class="flex-1 text-left text-lg font-bold">{position}</div>
			<div class="flex-1 text-right">
				<Icon
					class="inline self-center mr-1"
					icon="bx:calendar"
					width="1rem"
				/><div class="inline align-text-top">{years.join(' - ')}</div>
			</div>
		</div>
		<div class="flex mb-2 print:mb-1">
			<a
				class="font-bold text-teal-500 underline print:no-underline"
				href={url}
				target="_blank"
				rel="noreferrer">{company}</a
			>
			<div class="flex-1 text-right">
				<Icon class="inline self-center mr-1" icon="ic:baseline-location-on" width="1rem" />
				<div class="inline align-text-top">{location}</div>
			</div>
		</div>
		<ul class="text-left list-disc pl-8 print:pl-6">
			{#each details as detail}
				<Hideable>
					<li>
						{detail}
					</li>
				</Hideable>
			{/each}
		</ul>
	</Hideable>
</div>

<style lang="postcss">
	.work-experience {
		@apply my-4;
	}

	@media print {
		.work-experience {
			@apply my-1;
		}
	}
</style>
