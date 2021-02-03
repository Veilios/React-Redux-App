import './App.css';
import connect from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>Studio Ghibli Films</h1>
      <button>Fetch Films</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    film: state.film,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(App);
