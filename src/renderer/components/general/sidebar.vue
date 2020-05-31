<template>
    <b-menu>
        <b-menu-list label="Menu">
            <b-menu-item
                v-for="project in this.projects"
                :key="project.id"
                :label="project.name"
            />
            <b-menu-item
                icon="plus"
                label="New Project"
                @click="modalActive = true"
            />
        </b-menu-list>
        <b-modal
            :active.sync="modalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal
        >
            <newProjectModalForm />
        </b-modal>
    </b-menu>
</template>

<script>
import Project from "../../models/project";
import newProjectModalForm from "./newProjectModalForm";

export default {
    components: { newProjectModalForm },
    data() {
        return {
            modalActive: false
        };
    },
    computed: {
        projects() {
            return Project.all();
        }
    }
};
</script>
