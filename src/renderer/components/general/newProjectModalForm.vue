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
                        placeholder="Project Name"
                        required
                    >
                    </b-input>
                </b-field>

                <p class="label">Project Columns</p>
                <b-field v-for="column in columns" :key="column.id">
                    <b-input
                        v-model="column.name"
                        type="text"
                        placeholder="Column Name"
                        @mouseover.native="showDeleteButton($event, column.id)"
                        @mouseout.native="showByIndex = null"
                    ></b-input>
                    <p class="control" v-show="showByIndex === column.id">
                        <button class="button is-danger">Delete</button>
                    </p>
                </b-field>
                <p @click="addColumn">+ Add Column</p>
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
            projectTitle: "",
            columns: [{ id: 1, name: "" }],
            showByIndex: null
        };
    },
    methods: {
        addColumn() {
            this.columns.push({ id: this.columns.length + 1, name: "" });
        },
        deleteColumn() {},
        showDeleteButton(event, columnId) {
            console.log(columnId);
            if (!columnId === 1) {
                this.showByIndex = 2;
            }
        },
        createProject() {
            Project.insert({
                data: { name: this.projectTitle, columns: this.columns }
            });
            this.$parent.close();
        }
    }
};
</script>
