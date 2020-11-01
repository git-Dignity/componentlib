

import Index from './components/index.vue'
import ButtonUse from './components/ButtonUse.vue'
import TurntableUse from './components/TurntableUse.vue'

 const routers  = [
    {path: '/', name:'Index', component: Index},
    {path:'/ButtonUse', name:'ButtonUse', component:ButtonUse},
    {path:'/TurntableUse',name:'TurntableUse',  component:TurntableUse},
]

export default routers 