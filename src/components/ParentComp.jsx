const ParentComp = ({ children, isLoggedIn, setLoggedIn }) => {
	if (isLoggedIn) {
		return (
			<div>
				<p>Logged in as : {children}</p>
				<button onClick={() => setLoggedIn(false)}>Log out</button>
			</div>
		);
	} else {
		return (
			<div>
				<p>User not logged in</p>
				<button onClick={() => setLoggedIn(true)}>Log in</button>
			</div>
		);
	}
};

export default ParentComp;
