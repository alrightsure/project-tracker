<template>
    <form action="">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">New Project</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Title">
                    <b-input
                        type="text"
                        v-model="projectTitle"
                        placeholder="New Project"
                        required
                    >
                    </b-input>
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-primary" @click="createProject">
                    Create
                </button>
            </footer>
        </div>
    </form>
</template>

<script>
import Project from "../../models/project";

export default {
    data() {
        return {
            projectTitle: ""
        };
    },
    methods: {
        createProject() {
            console.log(this.projectTitle);
            Project.insert({ data: { name: this.projectTitle } });
            this.$parent.close();
        }
    }
};
</script>
