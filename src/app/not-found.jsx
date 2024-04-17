// Laget av Markus Moen Magnussen

import Link from "next/link";

const NotFound = () => {
    return (
        <><div>
            <h2>NotFound</h2>
            <p>Page does not exist</p>
            <Link href="/">
                <p>Go back to home</p>
            </Link>

        </div>
            </>

    )
};

export default NotFound;
