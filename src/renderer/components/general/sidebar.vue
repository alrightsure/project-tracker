<template>
    <b-menu>
        <b-menu-list label="Menu">
            <b-menu-item
                v-for="project in this.projects"
                :key="project.id"
                :label="project.name"
                tag="router-link"
                :to="`/columnView/${project.id}`"
                @click.native="selectedItem=project.id"
                :active="selectedItem === project.id"
            />
            <b-menu-item
                icon="plus"
                label="New Project"
                :disabled="true"
                @click.native="modalActive = true"
            />
        </b-menu-list>
        <b-modal
            v-if="modalActive"
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
            modalActive: false,
            selectedItem: null
        };
    },
    computed: {
        projects() {
            return Project.all();
        }
    }
};
</script>
