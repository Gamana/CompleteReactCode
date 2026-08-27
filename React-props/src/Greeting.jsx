export default function Greeting(props) {
    return (
        <div>
            <h2>Good Afternoon {props.name}!</h2>
            <h2>{props.name}'s age is {props.age}!</h2>

        </div>
    );
}

// /Read-Only