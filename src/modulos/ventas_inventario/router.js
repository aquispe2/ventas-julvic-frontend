export default [
    {
        path: '/categoria',
        name:'Categorias',
        component: () => import('@/modulos/ventas_inventario/views/categoria.vue')
    },
    {
        path: '/cliente',
        name:'Clientes',
        component: () => import('@/modulos/ventas_inventario/views/cliente.vue')
    },
    {
        path: '/producto',
        name:'Productos',
        component: () => import('@/modulos/ventas_inventario/views/producto.vue')
    },
    {
        path: '/vender',
        name:'Punto de Venta',
        component: () => import('@/modulos/ventas_inventario/views/vender.vue')
    },
    {
        path: '/carrito',
        name:'Carrito',
        component: () => import('@/modulos/ventas_inventario/views/carrito.vue')
    },
    {
        path: '/ventas-realizadas',
        name:'Ventas Realizadas',
        component: () => import('@/modulos/ventas_inventario/views/ventas-realizadas.vue')
    },
    {
        path: '/usuario',
        name:'Usuarios',
        component: () => import('@/modulos/ventas_inventario/views/usuario.vue')
    },
    {
        path: '/',
        name:'Login',
        component: () => import('@/shared/login.vue')
    }
  ]