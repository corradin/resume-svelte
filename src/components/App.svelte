<script lang="ts">
	import { onMount } from 'svelte';
	import type { IProfileResp } from '../types';
	import Hideable from './Hideable.svelte';
	import Icon from '@iconify/svelte';
	import Intro from './Intro.svelte';
	import Work from './Work.svelte';
	import Section from './Section.svelte';

	let profile: IProfileResp;

	$: dataLink = `${sourceLink}/blob/main/static/data/profile.json`;
	$: ({
		intro = {} as IProfileResp['intro'],
		summary = '',
		projects = [],
		achievements = [],
		passions = [],
		technologies = [],
		workExperiences = [],
		educations = [],
		resumeUrl: { sourceLink = '', fullVersionLink = '' } = {}
	} = profile || {});

	onMount(async () => (profile = await fetchResumeProfile()));

	async function fetchResumeProfile() {
		const resp = await fetch('/data/profile.json');
		return await resp.json();
	}
</script>

<header class="web-only text-center p-4 sm:p-6 bg-green-400 text-white w-screen">
	<h1 class="text-4xl">Resumette</h1>
	<h3>
		<button on:click={() => window.print()} class="underline text-lg">[Print]</button>
	</h3>
	<p>
		Printer-friendly standard résumé, any HTML tags with <code>web-only</code> CSS class will be hidden
		on print.
	</p>
	<p>You can click at any sections or lines hide some information before printing.</p>
	<a href={sourceLink} target="_blank" rel="noopener">[Source]</a>
	<a href={dataLink} target="_blank" rel="noopener">[Data]</a>
</header>

<main class="grid grid-cols-12 text-center gap-y-4 md:p-4 md:m-8 xl:mx-auto max-w-screen-xl">
	<div class="col-span-12 sm:row-start-1 sm:col-start-1 sm:col-end-10 sm:px-4">
		<Intro {...intro} />

		<Section title="Summary"><p class="text-left print:text-xs">{summary}</p></Section>
		<Section title="Experience">
			{#each workExperiences as exp}
				<Work {...exp} />
			{/each}
		</Section>
		<Section title="Education">
			<ul class="text-left list-disc pl-8 break-after-page">
				{#each educations as education}
					<Hideable>
						<li>
							<strong>{education.head}</strong>, {education.details}
						</li>
					</Hideable>
				{/each}
			</ul>
		</Section>

		<Section title="Projects">
			<ul class="text-left list-disc pl-8">
				{#each projects as project}
					<Hideable hide={project.hide}>
						<li>
							<strong>{project.name}</strong>
							- {project.details}
							<a href="https://{project.url}" target="_blank" rel="noreferrer"
								><strong>{project.url}</strong></a
							>
						</li>
					</Hideable>
				{/each}
			</ul>
		</Section>
	</div>

	<div class="col-span-12 sm:col-start-10 sm:col-end-13 sm:px-4 sm:bg-primary-700 sm:text-white">
		<section>
			<Hideable>
				<img
					src="/images/profile_2023.jpg"
					alt="Profile"
					class="rounded-full w-32 h-32 mx-auto my-8"
				/>
			</Hideable>
		</section>
		<section>
			<Hideable>
				<h2 class="text-xl mt-2 uppercase text-left print:text-lg">Achievements</h2>
				<hr />
				<ul class="text-left">
					{#each achievements as achievement}
						<Hideable>
							<li class="list-none grid grid-cols-6">
								<Icon class="mt-1 row-span-2" icon={achievement.icon || ''} width="1.5rem" />
								<div class="font-bold mb-2 col-span-5">{achievement.title}</div>
								<div class="col-span-5 text-sm mb-4 print:text-xs">{achievement.description}</div>
							</li>
						</Hideable>
					{/each}
				</ul>
			</Hideable>
		</section>
		<section>
			<Hideable>
				<h2 class="text-xl mt-2 uppercase text-left print:text-lg">Tech Skills</h2>
				<hr />
				<ul class="text-left list-disc pl-1 break-after-page">
					{#each technologies as tech}
						<Hideable>
							<li class="list-none">
								<div class="font-bold">{tech.section}</div>
								<ul class="mb-2">
									{#each tech.details as skill}
										<Hideable class="inline-block">
											<li
												class="inline-block underline mb-2 mr-2 underline-offset-8 text-sm print:text-xs"
											>
												{skill}
											</li>
										</Hideable>
									{/each}
								</ul>
							</li>
						</Hideable>
					{/each}
				</ul>
			</Hideable>
		</section>
		<section>
			<Hideable>
				<h2 class="text-xl mt-2 uppercase text-left print:text-lg">Passions</h2>
				<hr />
				<ul class="text-left">
					{#each passions as passion}
						<Hideable>
							<li class="list-none flex flex-wrap gap-2">
								<Icon class="mt-1" icon={passion.icon || ''} />
								<div class="font-bold">{passion.title}</div>
								<div class="text-sm mb-4">{passion.description}</div>
							</li>
						</Hideable>
					{/each}
				</ul>
			</Hideable>
		</section>
	</div>

	<footer class="print-only">
		(See <a href={fullVersionLink} target="_blank" rel="noopener">full version</a>
		or <a href={sourceLink} target="_blank" rel="noopener">source</a>)
	</footer>
</main>

<style lang="postcss">
	main {
		overflow-x: hidden;
	}

	a {
		text-decoration: underline;
	}

	section {
		@apply my-8;
	}

	section h2 {
		@apply font-semibold;
	}

	section hr {
		@apply mt-0 mb-2;
		border-color: darkgrey;
	}

	:global(.print-only) {
		display: none;
	}

	@media print {
		/* * {
			@apply text-xs;
		} */

		:global(.print-only) {
			display: inherit;
		}

		:global(.web-only) {
			display: none;
		}

		ul {
			/* @apply pl-6; */
		}

		section {
			@apply my-4;
		}

		section hr {
			@apply mt-0 mb-1;
		}

		main {
			margin: 0 0;
			padding: 0;
		}
	}
</style>
