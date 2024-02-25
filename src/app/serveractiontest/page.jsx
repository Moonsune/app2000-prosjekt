import { addPost, deletePost} from '../lib/actions';
import UpdatePostComponent from '@/components/updatePost/updatePost';

const ServerActionTestPage = () => {

    return (
        <div>
            <form action={addPost} style={{padding:20}}>
                <input type='text' placeholder='title' name="title"/>
                <input type='text' placeholder='desc' name='desc'/>
                <input type='text' placeholder='slug' name='slug'/>
                <input type='text' placeholder='userId' name="userId"/>

                <button>create</button>
            </form>

            <div>
                <UpdatePostComponent id="65d3846c4bd5e55821c47fa9"/>
            </div>

            <form action={deletePost} style={{padding:20}}>
                <input type='text' placeholder='id' name='id'/>
                <button>delete</button>
            </form>
        </div>
    )
};

export default ServerActionTestPage;