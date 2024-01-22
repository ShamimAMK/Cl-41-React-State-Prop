// import Child from "./components/Child";
// import { useState } from "react";

// const App = () => {
// 	const [message, setMessage] = useState("");

// 	return <Child message={message} setMessage={setMessage} />;
// };

// // export default App;
// import { useState } from "react";
// import Counter from "./components/counter";

// const App = () => {
// 	const [count, setCount] = useState(0);

// 	return (
// 		<div>
// 			<p>Count: {count}</p>
// 			<Counter count={count} setCount={setCount} />
// 		</div>
// 	);
// };

// export default App;

// import { useState } from "react";
// import Colors from "./components/color";

// const App = () => {
// 	const [color, setColor] = useState("red");

// 	return (
// 		<div style={{ color }}>
// 			<button onClick={() => setColor("blue")}>Change Color from App</button>
// 			<Colors color={color} setColor={setColor} />
// 		</div>
// 	);
// };

// export default App;

import { useState } from "react";
import ChildComp from "./components/ChildComp";
import ParentComp from "./components/ParentComp";

const App = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	return (
		<div>
			<ParentComp isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}>
				<ChildComp />
			</ParentComp>
		</div>
	);
};

export default App;
