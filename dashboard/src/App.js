import WelcomeTitle from "./components/welcomeTitle";
import Information from "./components/information";
import UsersAndEvent from "./components/UsersAndEvent";
import EventsInfo from "./components/EventsInfo";

function App() {
  return (
    <div className="secion_info">
      <WelcomeTitle title="Bienvenido al panel de informacion" />
      <Information
        users="Actualmente hay 200 usuarios registrados"
        events="Actualmente hay 200 eventos creados"
      />
      <UsersAndEvent />
      <EventsInfo />
    </div>
  );
}

export default App;
