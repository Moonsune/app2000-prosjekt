import { addPost, deletePost} from '../lib/actions';
import UpdatePostComponent from '@/components/updatePost/updatePost';

const ServerActionTestPage = () => {

    return (
        <div>
            <form action={addPost} style={{padding:20}}>
                <input type='text' placeholder='title' name="title"/>
                <input type='text' placeholder='desc' name='desc'/>
                <input type='text' placeholder='image URL' name='image-url'/>
                <input type='text' placeholder='price' name="price"/>

                <button>create</button>
            </form>

            <div>
                <UpdatePostComponent />
            </div>

            <form action={deletePost} style={{padding:20}}>
                <input type='text' placeholder='id' name='id'/>
                <button>delete</button>
            </form>
        </div>
    )
};

export default ServerActionTestPage;