import { useEffect, useState } from "react";

interface IpResponse {
    ip: string
}

const Ex29 = () => {
    const [ip, setIp] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);
    const getMyIp = () => {
        try {
            fetch('https://api.ipify.org?format=json', {
                method: 'GET',
            }).then(response => {
                if(response.ok) return response.json(); 
                else {
                    console.log('Error');
                }
            }).then((data: IpResponse) => {
                setIp(data.ip);
                setLoading(false);
            }).catch(error => {
                console.log('Error', error);
            });
        } catch(e) {
            console.log('Error', e);
        }
    }

    useEffect(() => {
        getMyIp();
    }, [])

    if(loading) return <h1>Trwa ładowanie danych...</h1>
    return <h1>{ip}</h1>
}

export {Ex29}