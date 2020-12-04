import React, {Component} from 'react';

class NotebookesComponent extends Component {
    render() {

        let {notebookitem,third} = this.props
        return (
            <div>
                <div className={third}>{notebookitem.name}: {notebookitem.cost}. {notebookitem.status.toString()}</div>
            </div>
        );
    }
}

export default NotebookesComponent;
