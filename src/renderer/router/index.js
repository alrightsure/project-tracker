import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/columnView/:projectId",
            component: require("@/components/columnView").default
        },
        {
            path: "/",
            name: "landing-page",
            component: require("@/components/noProjectSelected").default
        },
        {
            path: "*",
            redirect: "/"
        }
    ]
});
