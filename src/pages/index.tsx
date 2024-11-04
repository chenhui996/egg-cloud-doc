import {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index: FC<any> = () => {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-3 left-panel bg-danger">
                left
            </div>
            <div className="col-9 right-panel bg-primary">right</div>
        </div>
    </div>
};

export default Index;