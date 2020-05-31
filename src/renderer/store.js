import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import { createPersistedState } from "vuex-electron";
import Project from "./models/project";
import Column from "./models/column";
import ProjectStep from "./models/projectStep";

Vue.use(Vuex);

const database = new VuexORM.Database();
database.register(Project);
database.register(Column);
database.register(ProjectStep);

export default new Vuex.Store({
    plugins: [VuexORM.install(database), createPersistedState()],
    strict: process.env.NODE_ENV !== "production"
});
