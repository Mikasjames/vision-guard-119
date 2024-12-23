<script lang="ts">
    import type { PageData } from './$types';
    import {messages, motivationalQuotes, quickActions, supportiveTips} from "$lib/motivational-content";

    let { data }: { data: PageData } = $props();
    let searchedSite = $state('');

    // Helper function to get random item from array
    const getRandomItem = <T>(arr: T[]): T => {
        return arr[Math.floor(Math.random() * arr.length)];
    };

    // Randomly select content
    const selectedMessage = getRandomItem(messages);
    const selectedQuote = getRandomItem(motivationalQuotes);
    const selectedTip = getRandomItem(supportiveTips);

    // Get 4 random unique quick actions
    const selectedActions = [...quickActions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    $effect(() => {
        searchedSite = data.url.searchParams.get('domain') || '';
    });
</script>

<style>
    .quick-action {
        transition: transform 200ms ease, background-color 200ms ease;
    }

    .quick-action:hover {
        transform: translateX(5px);
        background-color: rgba(var(--bs-primary-rgb), 0.15);
    }

    .icon-wrapper {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
</style>

<div class="min-vh-100 bg-light py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Main Alert -->
                <div class="alert alert-warning mb-4">
                    <div class="d-flex">
                        <div class="me-3 icon-wrapper">
                            <i class="bi bi-{selectedMessage.icon} fs-4"></i>
                        </div>
                        <div>
                            <h4 class="alert-heading">
                                {selectedMessage.title}
                            </h4>
                            <p class="mb-0">
                                Your accountability partners have been notified about this attempted access to
                                <span class="text-danger">{searchedSite}</span>.
                                {selectedMessage.content}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Motivation Card -->
                <div class="card shadow-sm mb-4">
                    <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                            <h2 class="h3 mb-0">
                                <i class="bi bi-heart text-danger fs-4 me-2"></i>
                                {selectedTip.title}
                            </h2>
                        </div>

                        <p class="lead mb-4">
                            {selectedTip.content}
                        </p>

                        <!-- Quick Actions -->
                        <div class="bg-primary bg-opacity-10 p-4 rounded mb-4">
                            <h3 class="h5 text-primary mb-3">
                                <i class="bi bi-lightning-charge me-2"></i>
                                Quick Actions:
                            </h3>
                            <ul class="list-unstyled mb-0">
                                {#each selectedActions as action}
                                    <li class="quick-action d-flex align-items-center mb-2 p-2 rounded">
                                        <div class="icon-wrapper me-2">
                                            <i class="bi bi-{action.icon} text-primary"></i>
                                        </div>
                                        <span>{action.text}</span>
                                    </li>
                                {/each}
                            </ul>
                        </div>

                        <figure class="border-start border-4 border-primary ps-4 fst-italic mb-0">
                            <blockquote class="mb-1">
                                "{selectedQuote.text}"
                            </blockquote>
                            <figcaption class="text-muted small">
                                — {selectedQuote.author}
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <!-- Support Card -->
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h3 class="h5 mb-3">
                            <i class="bi bi-{selectedTip.icon} me-2"></i>
                            Need immediate support?
                        </h3>
                        <p class="mb-0">
                            Remember, you can always reach out to your accountability partners or contact a support hotline.
                            You're not alone in this journey. {selectedTip.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>