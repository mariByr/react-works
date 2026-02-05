import { useNavigate, useParams} from "react-router-dom";
import {useDetails,} from "../../queries/posts.queries.tsx";

const PostDetail = () => {
    const{postId} =useParams<{postId:string}>()
    const navigate = useNavigate();
    const id = Number(postId);

    const { data: post, isLoading } = useDetails(id)

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={'border border-gray-200'}>
            <h2>{post?.id}----{post?.title}</h2>
            <p>{post?.body}</p>
{/*//шляхи в навігейтках треба прописувати абсолютні і із `${}` для змінного параметра*/}
            <button className={'border border-2'} onClick={() => navigate(`/posts/${id}/comments`)}>
                View comments
            </button>
        </div>
    );
};


export default PostDetail;
