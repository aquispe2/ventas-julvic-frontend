import types from "@/modulos/ventas_inventario/store/types/utils";
import Vue from 'vue'
const state = {
    carrito:[],
    tituloNav:'',
    dialogProgress:false,
    //objDatosUsuario:[]
};

const getters = {
    [types.getters.getdialogProgress]: state => {
        return state.dialogProgress;
    },
    [types.getters.getCarrito]: state => {
        return state.carrito;
    },
    [types.getters.getObjDatosUsuario]: state => {
        //return state.objDatosUsuario;
        if (JSON.parse(localStorage.getItem("usuario"))!=null){
            return JSON.parse(localStorage.getItem("usuario"));
        }else{
            return [];
        }
    },

}
const actions = {

}
const mutations = {
    [types.mutations.addCarrito]: (state, objCarrito) => {
        state.carrito.push(objCarrito);
    },
    [types.mutations.setCarrito]: (state, lstCarrito) => {
        state.carrito = lstCarrito;
    },
    [types.mutations.setdialogProgress]: (state, dialogProgress) => {
        state.dialogProgress = dialogProgress;
    },
    [types.mutations.setObjDatosUsuario]: (state, objDatosUsuarios) => {
        //state.objDatosUsuario = objDatosUsuarios;
        localStorage.setItem("usuario",JSON.stringify(objDatosUsuarios))
    }
}

export default {
    state,
    actions,
    getters,
    mutations
  };
  