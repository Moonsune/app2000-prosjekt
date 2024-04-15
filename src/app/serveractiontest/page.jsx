//Laget av Markus Moen Magnussen

import { addPost, deletePost} from '../lib/actions';
import UpdatePostComponent from '@/components/updateMenuItem/updateMenuItem';
import DeleteDropdownList from "@/components/menuDropdownList/DeleteDropdownList";

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
                <DeleteDropdownList />
            </div>
        </div>
    )
};

export default ServerActionTestPage;