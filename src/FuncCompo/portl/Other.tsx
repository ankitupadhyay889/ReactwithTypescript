import ReactDom from 'react-dom';

const Other = () => {
    return ReactDom.createPortal(
            <h1> This is created another root by react-portal </h1>, document.getElementById('other-root') as HTMLElement
    );
};

export default Other;