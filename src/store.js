import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: 'admin',
        customers: [],
        loading: false
    },
    mutations: {
        mutateCustomers(state, value) {
            state.customers = value
        }
    },
    getters: {
        femaleCustomers(state) {
            return state.customers.filter(c => {
                return c.gender == 'F'
            })
        },
        maleCustomers(state) {
            return state.customers.filter(c => {
                return c.gender == 'M'
            })
        },
        customerNames(state) {
            return state.customers.map(c => {
                return c.firstName + ' ' + c.lastName
            })
        }
    },
    actions: {
        async getCustomers(context) {
            try {
                const { data } = await axios.get('http://localhost:3000/customers')
                context.commit('mutateCustomers', data)

            } catch (error) {
                console.log(error.message)
            }

        }
    }
})