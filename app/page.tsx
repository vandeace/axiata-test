import ModalAddForm from "./components/modal-add-form"
import PostList from "./components/post-list"

export default function Home() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col p-4">
      <div className="flex justify-between p-4">
        <h1 className="text-4xl font-black">Post List</h1>
        <ModalAddForm />
      </div>
      <PostList />
    </div>
  )
}
