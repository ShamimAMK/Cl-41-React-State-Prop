// import Child from "./components/Child";
// import { useState } from "react";

// const App = () => {
// 	const [message, setMessage] = useState("");

// 	return <Child message={message} setMessage={setMessage} />;
// };

// export default App;

import Counter from "./components/counter";

const App = () => {
	return (
		<div>
			<p>Count: 0</p>
			<Counter />
		</div>
	);
};

export default App;
