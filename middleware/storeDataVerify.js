export default function({ store, redirect }) {
  if (!store.state.attractions.length) {
    redirect("/")
  }
}
