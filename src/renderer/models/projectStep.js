import { Model } from "@vuex-orm/core";

export default class ProjectStep extends Model {
    static entity = "projectSteps";

    static primaryKey = "id";

    static fields() {
        return {
            id: this.uid(),
            column_id: this.attr(null),
            name: this.attr(""),
            details: this.attr("")
        };
    }
}
