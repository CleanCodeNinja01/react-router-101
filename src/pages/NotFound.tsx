import { useRouteError } from "react-router-dom";

export function NotFound() {
  const error = useRouteError() as any;
  return <div>Oops something went wrong!! {error.statusText}</div>;
}

export default NotFound;
