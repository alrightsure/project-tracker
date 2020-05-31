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
            const project = Project.find(this.$route.params.projectId);
            return project.columns.all();
        }
    }
};
</script>
