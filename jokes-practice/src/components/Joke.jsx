export default function Joke(props){
    return(
        <>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {props.setup && <p>Punchline: {props.punch}</p>}
            {/* {props.setup && <p>Votes: {props.vote}</p>}
            {props.pun && <p>Pun: True</p> } */}
            <hr />
        </>
    );
}