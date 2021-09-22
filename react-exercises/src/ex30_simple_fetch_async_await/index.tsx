import { useEffect, useState } from "react";

interface IpResponse {
    ip: string
}

const Ex30 = () => {
    const [ip, setIp] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const getMyIp = async() => {
        try {
            const response = await fetch('https://api.ipify.org?format=json', {
                method: 'GET',
            })
            if(response.ok) {
                const data: IpResponse = await response.json();
                setIp(data.ip);
                setLoading(false);
            } else {
                console.log('Error');
            }
        }
        catch(e) {
            console.log('Error', e);
        }
    }

    useEffect(() => {
        getMyIp();
    }, [])

    if(loading) return <h1>Trwa ładowanie danych...</h1>
    return <h1>{ip}</h1>
}

export {Ex30}