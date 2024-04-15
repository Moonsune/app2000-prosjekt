//Laget av Markus Moen Magnussen

import { addPost, deletePost} from '../lib/actions';
import UpdatePostComponent from '@/components/updatePost/updatePost';
import MenuDropdownList from "@/components/menuDropdownList/MenuDropdownList";

const ServerActionTestPage = () => {

    return (
        <div>
            <form action={addPost} style={{padding:20}}>
                <input type='text' placeholder='title' name="title"/>
                <input type='text' placeholder='desc' name='desc'/>
                <input type='text' placeholder='image URL' name='img'/>
                <input type='text' placeholder='price' name="price"/>

                <button>create</button>
            </form>

            <div>
                <UpdatePostComponent />
            </div>
            <div>
                <MenuDropdownList />
            </div>
        </div>
    )
};

export default ServerActionTestPage;