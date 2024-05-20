import { fetcher } from "@/app/utils/fetcher";
import { client } from "@/app/utils/hono";
import { InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.posts.$get>

const url = client.api.posts.$url();
console.log(url)


const PostsPage = async() => {
  const data = await fetcher<ResponseType>(url,next:{
    tags:["posts"]
  })
  return (
    <div>PostsPage</div>
  )
}

export default PostsPage