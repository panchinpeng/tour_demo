export default function({ route, redirect }) {
  if (route.fullPath === "/about") {
    redirect("/about/hot")
  }
}
