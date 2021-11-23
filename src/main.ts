import Desktop from './components/Desktop/Desktop.svelte'
import './styles/index.css'
const desktop = new Desktop({
    target: document.querySelector('#root')!,
})
export default desktop
