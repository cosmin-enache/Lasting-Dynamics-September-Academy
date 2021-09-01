import "./styles.css";
import Spinner from "./components/spinner.component.jsx";
import useLoading from "./custom-hooks/useLoading.hook.js";

export default function App() {
  const { data, loading } = useLoading();

  return (
    <div id="App">
      {
        loading ? (
          <Spinner />
        ) : (
          <>
            <h1>{data.title}</h1>
            <p>{data.message}</p>
            <p>{data.date}</p>
          </>
        )
      }
    </div>
  );
}
