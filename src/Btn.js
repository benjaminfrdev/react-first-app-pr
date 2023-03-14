function Btn(){
    const clickHandler = ()=> {
        console.log('clicked');
    }
    return (
        <button onClick={clickHandler}>CLick Me!</button>
    )
}

export default Btn;