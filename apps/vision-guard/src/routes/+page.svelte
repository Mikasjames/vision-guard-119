<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let searchedSite = $state('');

    $effect(() => {
        searchedSite = data.url.searchParams.get('domain') || '';
    });
</script>

<div class="min-vh-100 bg-light py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Main Alert -->
                <div class="alert alert-warning mb-4">
                    <div class="d-flex">
                        <div class="me-3">
                        </div>
                        <div>
                            <h4 class="alert-heading">Accountability Notice</h4>
                            <p class="mb-0">
                                Your accountability partners have been notified about this attempted access to {searchedSite}.
                                Remember, they're here to support your journey, not to judge.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Motivation Card -->
                <div class="card shadow-sm mb-4">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <h2 class="h3 mb-0">Stay Strong</h2>
                        </div>

                        <p class="lead">
                            Every time you choose to turn away, you're building stronger habits and character.
                            This moment of resistance is making you stronger.
                        </p>

                        <!-- Quick Actions -->
                        <div class="bg-primary bg-opacity-10 p-4 rounded mb-4">
                            <h3 class="h5 text-primary mb-3">Quick Actions:</h3>
                            <ul class="list-unstyled mb-0">
                                {#each [
                                    'Take a few deep breaths',
                                    'Go for a short walk',
                                    'Call a friend or family member',
                                    'Do 10 pushups or jumping jacks'
                                ] as action}
                                    <li class="d-flex align-items-center mb-2">
                                        <span>{action}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <figure class="border-start border-4 ps-4 fst-italic">
                            <blockquote class="mb-0">
                                "Success is not final, failure is not fatal: it is the courage to continue that counts."
                            </blockquote>
                        </figure>
                    </div>
                </div>

                <!-- Support Card -->
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h3 class="h5 mb-3">Need immediate support?</h3>
                        <p class="mb-0">
                            Remember, you can always reach out to your accountability partners or contact a support hotline.
                            You're not alone in this journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>