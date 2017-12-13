import { Component } from 'preact';

export default class Foo extends Component {
	async update() {
		let source = await (await fetch('/')).text();
		this.setState({ source });
	}

	componentDidMount() {
		this.update();
	}

	render({}, { source }) {
		return (
			<div>
				<h2>HTML Source:</h2>
				<pre>{source}</pre>
			</div>
		);
	}
}