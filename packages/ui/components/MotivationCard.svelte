<script lang=ts>
    import type { MotivationalMessage, TextIcon, TextAuthor } from '../types/types';

    interface Props {
        tip: MotivationalMessage;
        actions: TextIcon[];
        quote: TextAuthor;
    }

    let { tip, actions, quote }: Props = $props();
</script>

<div class="card shadow-sm mb-4">
    <div class="card-body">
        <div class="d-flex align-items-center mb-3">
            <h2 class="h3 mb-0">
                <i class="bi bi-heart text-danger fs-4 me-2"></i>
                { tip.title }
            </h2>
        </div>

        <p class="lead mb-4">
            { tip.content }
        </p>

        <div class="bg-primary bg-opacity-10 p-4 rounded mb-4">
            <h3 class="h5 text-primary mb-3">
                <i class="bi bi-lightning-charge me-2"></i>
                Quick Actions:
            </h3>
            <ul class="list-unstyled mb-0">
                {#each actions as action}
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
                "{quote.text}"
            </blockquote>
            <figcaption class="text-muted small">
                — {quote.author}
            </figcaption>
        </figure>
    </div>
</div>

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