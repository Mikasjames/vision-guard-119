<script lang="ts">
    import type { PageData } from './$types';
    import {messages, motivationalQuotes, quickActions, supportiveTips} from "$lib/motivational-content";
    import { MainAlert, MotivationCard, SupportCard } from '@repo/ui';

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

<div class="min-vh-100 bg-light py-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Main Alert -->
                <MainAlert message={selectedMessage} searchedSite={searchedSite} />

                <!-- Motivation Card -->
                 <MotivationCard
                    tip={selectedTip}
                    actions={selectedActions}
                    quote={selectedQuote}
                />

                <!-- Support Card -->
                 <SupportCard tip={selectedTip} />
            </div>
        </div>
    </div>
</div>