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
                        :value="projectTitle"
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
export default {
    data() {
        return {
            projectTitle: ""
        };
    },
    methods: {
        createProject() {
            this.$store.commit("ADD_PROJECT", this.projectTitle);
            this.$parent.close();
        }
    }
};
</script>
