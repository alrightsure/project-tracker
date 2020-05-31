const state = {
    projects: []
};

const mutations = {
    ADD_PROJECT(state, newProjectName) {
        state.projects.push({
            id: state.projects.length + 1,
            name: newProjectName,
            columns: []
        });
    },
    ADD_COLUMN(state, projectId) {
        const project = getProjectById(state, projectId);

        project.columns.push({
            id: project.columns.length + 1,
            name: "New Column",
            projectSteps: []
        });
    },
    ADD_PROJECT_STEP(state, projectId, columnId) {
        const column = getColumnById(state, projectId, columnId);

        column.projectSteps.push({
            id: column.projectSteps.length + 1,
            name: "Title",
            details: "Details",
            done: false
        });
    },
    RENAME_PROJECT(state, projectId, newName) {
        const project = getProjectById(state, projectId);
        project.name = newName;
    },
    RENAME_COLUMN(state, projectId, columnId, newName) {
        const column = getColumnById(state, projectId, columnId);
        column.name = newName;
    },
    RENAME_PROJECT_STEP(state, projectId, columnId, projectStepId, newName) {
        const projectStep = getProjectStepById(
            state,
            projectId,
            columnId,
            projectStepId
        );
        projectStep.name = newName;
    },
    UPDATE_PROJECT_STEP_DETAILS(
        state,
        projectId,
        columnId,
        projectStepId,
        newDetails
    ) {
        const projectStep = getProjectStepById(
            state,
            projectId,
            columnId,
            projectStepId
        );
        projectStep.details = newDetails;
    },
    TOGGLE_PROJECT_STEP_DONE(state, projectId, columnId, projectStepId) {
        const projectStep = getProjectStepById(
            state,
            projectId,
            columnId,
            projectStepId
        );
        projectStep.done = !projectStep.done;
    },
    DELETE_PROJECT(state, projectId) {
        state.projects.splice(
            state.projects.indexOf(getProjectById(state, projectId)),
            1
        );
    },
    DELETE_COLUMN(state, projectId, columnId) {
        const project = getProjectById(state, projectId);

        project.columns.splice(
            project.columns.indexOf(
                project.columns.find(column => column.id === columnId)
            ),
            1
        );
    },
    DELETE_PROJECT_STEP(state, projectId, columnId, projectStepId) {
        const column = getColumnById(state, projectId, columnId);

        column.projectSteps.splice(
            column.projectSteps.indexOf(
                column.projectSteps.find(step => step.id === projectStepId)
            ),
            1
        );
    }
};

const getProjectById = (state, projectId) =>
    state.projects.find(project => project.id === projectId);

const getColumnById = (state, projectId, columnId) =>
    state.projects
        .find(project => project.id === projectId)
        .columns.find(column => column.id === columnId);

const getProjectStepById = (state, projectId, columnId, projectStepId) =>
    state.projects
        .find(project => project.id === projectId)
        .columns.find(column => column.id === columnId)
        .projectSteps.find(projectStep => projectStep.id === projectStepId);

export default {
    state,
    mutations
};