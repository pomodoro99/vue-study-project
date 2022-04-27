export default {

    namespaced: true,

    state: {
        name : ''
    },

    getters : {
        name(state){
            return state.name;
        }
    },

    mutations : {
        setName(state, value){
            state.name = value;
        }
    },

    actions : {
        setName(context, value){
            context.commit('setName', value);
        }
    }

}