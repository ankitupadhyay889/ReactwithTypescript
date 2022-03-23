import { ErrorBoundary } from 'react-error-boundary';
import Bound from '../errorbou/Bound';
import Usercom from './Usercom';
import Erhandboun from '../errorbou/Erhandboun';

const Call = () => {
    return (
        <div>
            <ErrorBoundary FallbackComponent={Bound}>
                <Erhandboun />
            </ErrorBoundary>
            <ErrorBoundary FallbackComponent={Bound}><Usercom/></ErrorBoundary>
        </div>
    );
};

export default Call;