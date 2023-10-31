<script>
	import '../app.css';

	import { page } from '$app/stores';
	import AppBreadcrumb from '$lib/components/app-breadcrumb.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
	/>
</svelte:head>

<div class="navbar bg-base-200 text-base-content sticky top-0 z-10">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li><a>Item 1</a></li>
				<li>
					<a>Parent</a>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</li>
				<li><a>Item 3</a></li>
			</ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl"> Svelte Doctor </a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a>Item 1</a></li>
			<li tabindex="0">
				<details>
					<summary>Parent</summary>
					<ul class="p-2">
						<li><a>Submenu 1</a></li>
						<li><a>Submenu 2</a></li>
					</ul>
				</details>
			</li>
			<li><a>Item 3</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn">Button</a>
	</div>
</div>
<div class="bg-base-200 text-base-content p-5 text-center">
	<div class="text-4xl font-semibold mb-1 mt-5">
		{$page.data.pageTitle}
	</div>
	<div class="inline-block mb-10">
		<AppBreadcrumb breadcrumbs={$page.data.breadcrumbs} />
	</div>
</div>
<div class="container mx-auto py-10">
	<slot />
</div>
<div class="bg-base-200 text-base-content p-10">
	<footer class="footer container mx-auto">
		<nav>
			<header class="footer-title">Services</header>
			<a class="link link-hover">Branding</a>
			<a class="link link-hover">Design</a>
			<a class="link link-hover">Marketing</a>
			<a class="link link-hover">Advertisement</a>
		</nav>
		<nav>
			<header class="footer-title">Company</header>
			<a class="link link-hover">About us</a>
			<a class="link link-hover">Contact</a>
			<a class="link link-hover">Jobs</a>
			<a class="link link-hover">Press kit</a>
		</nav>
		<nav>
			<header class="footer-title">Legal</header>
			<a class="link link-hover">Terms of use</a>
			<a class="link link-hover">Privacy policy</a>
			<a class="link link-hover">Cookie policy</a>
		</nav>
		<form>
			<header class="footer-title">Newsletter</header>
			<fieldset class="form-control w-80">
				<label class="label">
					<span class="label-text">Enter your email address</span>
				</label>
				<div class="relative">
					<input
						type="text"
						placeholder="username@site.com"
						class="input input-bordered w-full pr-16"
					/>
					<button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
				</div>
			</fieldset>
		</form>
	</footer>
</div>
