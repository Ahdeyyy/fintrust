<script lang="ts">
	import hero_img from '/hero_image.png';
	import graph_img from '/graph_image.png';

	const testimonials = new Array(4).fill(0);
</script>

<section class="hero min-h-screen bg-base-100">
	<div class="hero-content text-center">
		<div class="max-w-2xl">
			<h1 class="text-5xl font-bold capitalize break-words">
				Connect with <br /> <span class="text-primary">trusted </span>financial advisors
			</h1>
			<p class="py-6 text-center text-neutral-500">
				Your journey towards financial security begins here, as we help you find and connect you
				with a network of trusted financial advisors dedicated to your success
			</p>
			<a class="btn btn-primary normal-case mb-6" href="/signup">Try it for free</a>

			<img src={hero_img} alt="hero" />
		</div>
	</div>
</section>
<section class="px-5 py-5 bg-primary text-white text-center grid gap-3 mb-5">
	<h2 class="font-semibold text-2xl mb-4 px-7 py-5">Trusted by 20k+ customers</h2>
	<ul class="flex gap-5 justify-around font-medium px-7 py-5">
		<li>Binance</li>
		<li>Coinbase</li>
		<li>bitcoin</li>
		<li>tether</li>
		<li>bitMex</li>
	</ul>
</section>

<section class="text-center px-7 py-3 mt-5 mb-5 grid gap-3">
	<h2 class="uppercase text-primary font-semibold">benefits of the product</h2>
	<h3 class="capitalize font-semibold text-2xl">
		Signature Perks of <span class="text-primary">FinTrust</span>
	</h3>

	<div class="flex px-7 py-3 gap-3 mt-5">
		<div class="grid place-content-center text-center gap-2">
			<p class="bg-primary w-10 mx-auto aspect-square rounded-md">ic</p>
			<h4 class="font-medium text-lg capitalize">Financial Guidance</h4>
			<p class="text-neutral-500">Unlock the power of personalized advice with FinTrust</p>
		</div>
		<div class="grid place-content-center text-center gap-2">
			<p class="bg-primary w-10 mx-auto aspect-square rounded-md">ic</p>
			<h4 class="font-medium text-lg capitalize">Appointment Scheduling</h4>
			<p class="text-neutral-500">
				Experience effortless appointment scheduling for your convenience
			</p>
		</div>
		<div class="grid place-content-center text-center gap-2">
			<p class="bg-primary w-10 mx-auto aspect-square rounded-md">ic</p>
			<h4 class="font-medium text-lg capitalize">document sharing</h4>
			<p class="text-neutral-500">Rest easy knowing your financial information is protected</p>
		</div>
		<div class="grid place-content-center text-center gap-2">
			<p class="bg-primary w-10 mx-auto aspect-square rounded-md">ic</p>
			<h4 class="font-medium text-lg capitalize">Financial solutions</h4>
			<p class="text-neutral-500">
				Discover customized strategies tailored to your financial goals
			</p>
		</div>
	</div>
</section>

<section class="mt-5">
	<div class="flex gap-3 py-5 px-7">
		<img class="self-center object-contain w-3/4 aspect-video" src={graph_img} alt="graph" />
		<div class="grid gap-1 py-3 self-center">
			<h3 class="text-primary font-semibold uppercase mb-1">feature</h3>
			<h4 class="font-bold capitalize text-3xl mb-2">
				find your perfect <span class="text-primary">advisor</span>
			</h4>
			<p class="text-neutral-500 mb-3">
				Discover Expert Financial Advisors Tailored to Your Unique Financial Goals and Aspirations,
				Ensuring You Get the Guidance That Fits Your Needs
			</p>
		</div>
	</div>
	<div class="flex gap-3 py-5 px-7">
		<div class="grid gap-1 px-14 py-3 self-center">
			<h3 class="text-primary font-semibold uppercase mb-1">feature</h3>
			<h4 class="font-bold capitalize text-3xl mb-2">
				<span class="text-primary">easy</span> appointment scheduling
			</h4>
			<p class="text-neutral-500 mb-3">
				Effortlessly Book Virtual or In-Person Meetings with Our User-Friendly Appointment
				Scheduling System, Providing You with the Flexibility and Convenience You Deserve
			</p>
		</div>
		<img class="self-center object-contain w-3/4 aspect-video" src={graph_img} alt="graph" />
	</div>
</section>

<section class="flex gap-3 mt-5 px-12">
	<div class="grid gap-3 py-1 px-8">
		<h3 class="uppercase text-primary font-medium">how it works</h3>
		<h4 class="text-2xl font-bold capitalize">
			here's how <br /> <span class="text-primary">FinTrust works</span>
		</h4>

		<p>Here are four steps to explain how our Financial Advisor Network product works</p>
		<a class="btn btn-primary rounded-md w-2/5" href="/signup">Try it for free</a>
	</div>
	<div class="py-1 px-8">
		<ul class="steps steps-vertical">
			<li class="step step-primary text-left">
				<div class="text-left">
					<h4>Explore Advisors</h4>
					<p class="text-neutral-500">
						Users begin by browsing a diverse network of expert financial advisors. They can filter
						by specialty & location t0 find the best match
					</p>
				</div>
			</li>
			<li class="step">Connect & Communicate</li>
			<li class="step">Expert Guidance</li>
			<li class="step">Achieve Financial Goals</li>
		</ul>
	</div>
</section>

<section class="bg-primary overflow-x-auto grid gap-3 py-3">
	<h3 class="text-center uppercase text-white">testimonials</h3>
	<h4 class="text-center text-white font-semibold text-2xl">Don't just take our word for it</h4>
	<div class="flex gap-4 px-9 py-3">
		{#each testimonials as _}
			<div class="card w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<p>
						If you're looking for a reliable financial advisory platform, FinTrust is the answer.
						I've found their network of advisors to be top-notch, and the platform's features, like
						the ability to securely share financial documents, have made the entire process
						efficient and productive.
					</p>
					<div class="flex gap-3 mt-3">
						<figure class="avatar">
							<div class="w-10 rounded-full">
								<img
									src="https://ui-avatars.com/api/?background=random&name=Nicki+Wells"
									alt="avatar"
								/>
							</div>
						</figure>
						<h2 class="text-xl self-center">Nicki Wells</h2>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
