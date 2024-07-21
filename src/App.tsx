import Json from './login/json';
import Jsx from './login/jsx';
import Markup from './login/markup';
import Simple from './simple_demo';

const App = () => {
  return (
    <>
      <Simple />
      <h1>JSON Schema 案例</h1>
      <Json />
      <h1>Markup</h1>
      <Markup />
      <h1>JSX</h1>
      <Jsx />
    </>
  );
};

export default App;
