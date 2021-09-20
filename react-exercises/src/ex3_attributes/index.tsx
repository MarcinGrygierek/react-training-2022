// const Ex3 = () => {
//     return <div className='container' id="main-section">
//         <label htmlFor="email" />
//         <input type='text' name='email' id='email' />
//     </div>
// }

// const Ex3 = () => {
//     return <div style={{
//         backgroundColor: 'red',
//         padding: '20px',
//         textAlign: 'center'
//     }}>Lorem ipsum</div>
// }

const Ex3 = () => {
    const getPadding = (): number => {
        return Math.round(Math.random() * 100);
    }

    const getClass = () => {
        return `alert-${getPadding()}`
    }

    return <div className={getClass()} style={{
        backgroundColor: 'red',
        padding: getPadding(),
        textAlign: 'center'
    }}>Lorem ipsum</div>
}


export { Ex3 }