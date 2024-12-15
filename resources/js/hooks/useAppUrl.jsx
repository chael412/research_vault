import { useMemo } from "react";

const useAppUrl = () => {
    // Define the URL constants for offline and onlineaa
    //const appUrl = "http://localhost:8000";
    const appUrl = "https://rs.chaelx.online";

    // Determine the correct URL to use
    const API_URL = useMemo(() => {
        return appUrl;
    }, []);

    return API_URL;
};

export default useAppUrl;
