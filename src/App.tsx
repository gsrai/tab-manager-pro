import { useAppSelector, useAppDispatch } from './store/hooks';
import {
  popState,
  pushState,
  Screen,
  SCREENS,
  selectCurrentScreen,
  selectStackLength,
} from './store/features/navigation/navigationSlice';

type AppProps = {
  currentScreen: string;
  stackSize: number;
  goBack: () => void;
  goTo: (screen: Screen) => void;
};

function App({ currentScreen, stackSize, goBack, goTo }: AppProps) {
  return (
    <div className="App">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex flex-row">
          <button
            className="rounded-l bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={() => goBack()}
          >
            Back
          </button>

          {SCREENS.map((screen: Screen) => (
            <button
              key={screen}
              className="bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={() => goTo(screen)}
            >
              {screen}
            </button>
          ))}
        </div>
      </div>

      <p>{currentScreen}</p>
      <p>{stackSize}</p>
    </div>
  );
}

const ConnectedApp = () => {
  const currentScreen = useAppSelector(selectCurrentScreen);
  const stackSize = useAppSelector(selectStackLength);
  const dispatch = useAppDispatch();
  return (
    <App
      stackSize={stackSize}
      currentScreen={currentScreen}
      goBack={() => dispatch(popState())}
      goTo={(screen) => dispatch(pushState(screen))}
    />
  );
};

export default ConnectedApp;
