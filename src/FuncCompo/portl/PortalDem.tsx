import ReactDom from 'react-dom';
import "../../App.css";

const PortalDem = (props: any) => {
    return( 
        ReactDom.createPortal(props.children, 
            document.getElementById('other-root') as HTMLElement
        )
    );
};

const ModalDem = () => {
    return(
        <div className='mod'>
            <h1> I am another root created by portal </h1>
        </div>
    )
}

export {PortalDem , ModalDem};