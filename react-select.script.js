const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

class App extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        React Select
        <Select name="react-custom-select" value={selectedOption} onChange={this.handleChange} options={options} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#react-select"));
