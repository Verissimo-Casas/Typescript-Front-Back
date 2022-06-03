import Alpine from "alpinejs"
import create from "./create"

declare global {
  interface Window {
    create: any
  }
}
window.Alpine = Alpine
window.create = create

Alpine.start()
