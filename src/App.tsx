import reactLogo from './assets/react.svg';
import OrganizationInfo from './OrganizationInfo';

function App() {
  const token = getCookie('_t');

  return (
    <div className="App">
      <div>
        <a href="https://riseact.org" target="_blank" rel="noreferrer">
          <img src="/riseact.png" className="logo" alt="Riseact logo" />
        </a>

        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Riseact + React</h1>
      <div className="card">
        <OrganizationInfo />
        <p>
          Take a look to the{' '}
          <a
            href={`
            https://studio.apollographql.com/sandbox/explorer?endpoint=http%3A%2F%2Flocalhost%3A3000%2Fgraphql&headers=%7B%22Authorization%22%3A%22Bearer%20${token}%22%7D
          `}
          >
            Riseact GraphQL schema
          </a>{' '}
          from your app.
          <br />
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Powered by <a href="https://vitejs.dev">Vitejs</a>
      </p>
    </div>
  );
}

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export default App;
