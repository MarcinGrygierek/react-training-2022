const handleTimeout = (delay, callback) => {
    console.log('Starting timeout');

    setTimeout(() => {
        callback();
        console.log('Timeout is finished');
    }, delay)

    console.log('Timeout should be finished soon');
}

handleTimeout(1000, () => {
    console.log('Lorem ipsum')                       
});