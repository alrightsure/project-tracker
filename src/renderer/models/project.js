import { Model } from "@vuex-orm/core";
import Column from "./column";

export default class Project extends Model {
    static entity = "projects";

    static primaryKey = "id";

    static fields() {
        return {
            id: this.uid(),
            name: this.attr(""),
            columns: this.hasMany(Column, "project_id")
        };
    }
}
