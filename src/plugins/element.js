import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import { Input,Dialog, Table,TableColumn, Dropdown,
    DropdownMenu,
    DropdownItem, Tabs, Message, MessageBox, TabPane, Menu, MenuItem,Submenu, Button } from 'element-ui'


// 重复引用会出错  不要重复引用!!!
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
