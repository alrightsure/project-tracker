<template>
    <div class="box">
        <strong>{{ name }}</strong>
        <p>{{ details }}</p>
    </div>
</template>

<script>
export default {
    props: { name: String, details: String }
};
</script>
