import { handleGithubLogin } from "@/app/lib/actions";


const LoginPage = async () => {


    return (
        <div>
            <form action={handleGithubLogin}>
                <button >
                    login with Github
                </button>
            </form>
        </div>
    )
    };

export default LoginPage;