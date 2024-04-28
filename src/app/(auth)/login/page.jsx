// Laget av Markus Moen Magnussen

import { handleGithubLogin } from "@/app/lib/actions";


const LoginPage = async () => {


    return (
        <div>
            <form action={handleGithubLogin}>
                <button >
                    Logg inn med Github
                </button>
            </form>
        </div>
    )
    };

export default LoginPage;