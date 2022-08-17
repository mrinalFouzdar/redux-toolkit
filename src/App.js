import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation
} from "./services/post";
function App() {
  // get all data
  // const responseInfo = useGetAllPostQuery()

  // get data by Id
  // const responseInfo =useGetPostByIdQuery(5)

  // get limited data
  // const responseInfo = useGetPostByLimitQuery(4);
  // console.log(responseInfo);

  // Delete 
  // const [deletePost, responseInfo] = useDeletePostMutation();
  const [createPost, responseInfo] = useCreatePostMutation();
  console.log(responseInfo)
  return <div className="App">{/* Get single data */}
    {/* <button onClick={()=>deletePost(2)}>Delete Post</button> */}
  </div>;
}

export default App;
