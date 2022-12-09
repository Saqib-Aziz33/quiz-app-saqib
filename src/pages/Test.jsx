import Quiz from "../components/elments/Quiz";
import { useSearchParams } from "react-router-dom";

function Test() {
  const [urlParams] = useSearchParams();
  return <Quiz subject={urlParams.get("subject")} />;
}
export default Test;
