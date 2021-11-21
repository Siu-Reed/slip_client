import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/header';
import Allslips from './pages/allslips';
import Myslips from './pages/myslips';
import { useAuth } from './context/AuthContext';

function App({ slipService }) {
  const history = useHistory();
  const { user, logout } = useAuth();

  const onAllslips = () => {
    history.push('/');
  };

  const onMyslips = () => {
    history.push(`/${user.username}`);
  };

  const onLogout = () => {
    if (window.confirm('Do you want to log out?')) {
      logout();
      history.push('/');
    }
  };

  return (
    <div className='app'>
      <Header
        username={user.username}
        onLogout={onLogout}
        onAllslips={onAllslips}
        onMyslips={onMyslips}
      />
      <Switch>
        (
        <>
          <Route exact path='/'>
            <Allslips slipService={slipService} />
          </Route>
          <Route exact path='/:username'>
            <Myslips slipService={slipService} />
          </Route>
        </>
        )
      </Switch>
    </div>
  );
}

export default App;
