export default function({ store, redirect }) {
  if (!store.state.authentication) {
    redirect("/")
  }
}
