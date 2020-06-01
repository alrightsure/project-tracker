import { Model } from "@vuex-orm/core";
import ProjectSteps from "./projectStep";

export default class Column extends Model {
    static entity = "columns";

    static primaryKey = "id";

    static fields() {
        return {
            id: this.uid(),
            project_id: this.attr(null),
            name: this.attr(""),
            projectSteps: this.hasMany(ProjectSteps, "column_id")
        };
    }
}
