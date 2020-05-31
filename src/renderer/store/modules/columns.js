const state = {
    nextId: 1,
    columns: []
};

const mutations = {
    ADD_COLUMN(state, projectId, colu) {
        state.projects.push({
            id: state.nextId,
            name: newProjectName
        });
        state.nextId++;
    },
    REMOVE_PROJECT(state, projectId) {
        
    }
};

const actions = {
    someAsyncTask({ commit }) {
        // do something async
        commit("INCREMENT_MAIN_COUNTER");
    }
};

export default {
    state,
    mutations,
    actions
};
