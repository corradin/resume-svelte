<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string = 'Foo';
	export let role: string = '';
	export let nickname: string = '';
	export let phone: string = '';
	export let email: string = '';
	export let github: string = '';
	export let linkedin: string = '';
	export let location: string = '';
	export let website: string = '';
</script>

<h2 class="text-5xl text-left my-4">
	<span>{name}</span>
	{#if nickname}
		<span class="block -mt-1 text-base lg:text-lg">({nickname})</span>
	{/if}
	{#if role}
		<div class="block -mt-1 text-base text-primary-500 font-bold lg:text-lg">{role}</div>
	{/if}
</h2>

<div class="flex flex-wrap">
	{#if phone}
		<div class="mr-2">
			<Icon class="inline self-center text-primary-500" icon="ic:baseline-phone" width="1rem" />
			<a href={`tel:${phone}`}>{phone}</a>
		</div>
	{/if}
	<div class="mr-2">
		<Icon class="inline self-center text-primary-500" icon="ic:baseline-location-on" width="1rem" />
		<div class="inline align-text-top">{location}</div>
	</div>
	{#if email}
		<div class="mr-2">
			<Icon class="inline self-center text-primary-500" icon="ic:baseline-email" width="1rem" />
			<a href={`mailto:${email}`}>{email}</a>
		</div>
	{/if}

	<div class="mr-2">
		<Icon class="inline self-center text-primary-500" icon="mdi:github" width="1rem" />
		<a href={`https://github.com/${github}`} target="_blank" rel="noreferrer">{github}</a>
	</div>
	<div class="mr-2">
		<Icon class="inline self-center text-primary-500" icon="mdi:linkedin" width="1rem" />
		<a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">{linkedin}</a>
	</div>

	<!-- <div class="flex-1 text-left sm:text-right print:text-right sm:py-4 w-48 text-sm sm:text-base">
		<p>
			<a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
		</p>
		
	</div> -->
</div>

<style lang="postcss">
	a {
		text-decoration: underline;
	}

	@media print {
		a {
			text-decoration: none;
		}
	}
</style>
