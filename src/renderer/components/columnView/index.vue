<template>
    <div class="columns">
        <div v-for="column in columns" :key="column.id">
            {{ column.name }}
        </div>
    </div>
</template>

<script>
import Project from "../../models/project";

export default {
    computed: {
        columns() {
            return Project.query()
                .where("id", this.$route.params.projectId)
                .with("columns")
                .first().columns;
        }
    }
};
</script>
