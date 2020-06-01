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
                <b-field v-for="column in columns" :key="columns.indexOf(column)">
                    <b-input
                        v-model="column.name"
                        type="text"
                        placeholder="Column Name"
                    ></b-input>
                    <p class="control" v-show="columns.indexOf(column) > 0">
                        <b-icon
                            icon="close-circle"
                            type="is-danger"
                            @click.native="
                                columns.splice(columns.indexOf(column), 1)
                            "
                        />
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
import Column from "../../models/column";

export default {
    data() {
        return {
            projectTitle: "",
            columns: [{name: ""}]
        };
    },
    methods: {
        addColumn() {
            this.columns.push({name: ""});
        },
        createProject() {
            Project.insert({
                data: { name: this.projectTitle, columns: this.columns }
            });

            this.$parent.close();

            this.projectTitle = "";
            this.columns = [new Column()];
        }
    }
};
</script>
