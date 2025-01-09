<script lang=ts>
    import type { MotivationalMessage } from '../types/types';

    let { tip }: { tip: MotivationalMessage } = $props();
</script>

<div class="card shadow-sm">
    <div class="card-body">
        <h3 class="h5 mb-3">
            <i class="bi bi-{tip.icon} me-2"></i>
            Need immediate support?
        </h3>
        <p class="mb-0">
            Remember, you can always reach out to your accountability partners or contact a support hotline.
            You're not alone in this journey. {tip.content}
        </p>
    </div>
</div>