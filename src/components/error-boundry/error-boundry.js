import Error from "../error/error";
import { useErrorBoundary } from "use-error-boundary"

const ErrorBoundry = ({ children }) => {
    const { ErrorBoundary, didCatch } = useErrorBoundary();

    if (didCatch) {
        return <Error />
    }
    return (
        <ErrorBoundary>
            {children}
        </ErrorBoundary>
    );
}
export default ErrorBoundry;