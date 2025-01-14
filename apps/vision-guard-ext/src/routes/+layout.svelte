<script>
    import { browser } from "$app/environment";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';

    if (browser) {
        import('$lib/bootstrap');
    }
</script>

<main>
    <slot />
</main>