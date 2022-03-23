import { ErrorBoundary } from 'react-error-boundary';
// import Bound from '../errorbou/Bound';
// import Usercom from './Usercom';
import Erhandboun from '../errorbou/Erhandboun';
import Fallbckerrr from './Fallbckerrr';
// import Erinclas from './Erinclas';

const Call = () => {
    return (
        <div>
            {/* <ErrorBoundary FallbackComponent={Bound}>
                <Erhandboun />
            </ErrorBoundary> */}
            <ErrorBoundary FallbackComponent={Fallbckerrr}>
                <Erhandboun />
            </ErrorBoundary>
            {/* <ErrorBoundary FallbackComponent={Bound}><Usercom/></ErrorBoundary> */}
            {/* <Erinclas> <Usercom heroName="Joker"/> </Erinclas>
            <Erinclas> <Usercom heroName="Spidername"/> </Erinclas>
            <Erinclas> <Usercom heroName="Batman"/> </Erinclas> */}
        </div>
    );
};

export default Call;

//! Hum jab class compo use krte hai toh normal jaise Erinclas banaya hai waise hi bnate hai and in state m dependency install krte hai or
//! fallbackcomponent use krte hai jaise ki Bound hai or baki Erhandboun
//! orjo error hai acha nhi dikh rha agar reacterrorboundary use kr rhe toh message milta use krne ko or aha lagta hai dekhne m state m.s 