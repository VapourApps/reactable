import React from 'react';
import ReactDOM from 'react-dom';

export class FiltererInput extends React.Component {
    onChange() {
        this.props.onFilter(ReactDOM.findDOMNode(this).value);
    }

    render() {
        return (
            <input type="text"
                className={this.props.className}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onKeyUp={this.onChange.bind(this)}
                onChange={this.onChange.bind(this)} />
        );
    }
};

export class Filterer extends React.Component {
    render() {
        if (typeof this.props.colSpan === 'undefined') {
            throw new TypeError('Must pass a colSpan argument to Filterer');
        }
        let button = null, title = null;
        if(this.props.btnName){
            button = (
                <button onClick={this.props.btnClick} className="btn btn-default tbl-btn">
                    <span className="glyphicon glyphicon-plus"></span>
                    {this.props.btnName}
                </button>
            );
        }
        if(this.props.title){
            title = (
                <td colSpan={1}>
                    <h4 className="tbl-title">{this.props.title}</h4>
                </td>
            );
        }
        return (
            <tr className="reactable-filterer">
                {title}
                <td colSpan={this.props.colSpan}>
                    <FiltererInput onFilter={this.props.onFilter}
                        value={this.props.value}
                        placeholder={this.props.placeholder}
                        className={this.props.className ? 'reactable-filter-input ' + this.props.className : 'reactable-filter-input'} />
                    {button}
                </td>
            </tr>
        );
    }
};

