<script lang=ts>
    import type { MotivationalMessage } from '../types/types.ts';

    interface Props {
        message: MotivationalMessage;
        searchedSite: string;
    }

    let { message, searchedSite }: Props = $props();
</script>

<div class="alert alert-warning mb-4">
    <div class="d-flex">
        <div class="me-3 icon-wrapper">
            <i class="bi bi-{message.icon} fs-4"></i>
        </div>
        <div>
            <h4 class="alert-heading">
                {message.title}
            </h4>
            <p class="mb-0">
                Your accountability partners have been notified about this attempted access to
                <span class="text-danger">{searchedSite}</span>.
                {message.content}
            </p>
        </div>
    </div>
</div>

<style>
    .icon-wrapper {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
</style>