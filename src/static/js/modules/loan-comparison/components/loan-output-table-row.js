var React = require('react');
var LoanOutputCell = require('./loan-output-table-cell');

var LoanOutputRow = React.createClass({
    displayClassNames: function(type) {
        var typeClass = 'result__' + type;
        return typeClass;
    },
    render: function () {
        var headingType = function (prop, type, label) {
            if (type === 'primary') {
                return (
                    <LoanOutputRowPrimaryHeading prop={prop} label={label} />
                );
            } else if (type === 'sub') {
                return (
                    <th scope="row">
                        <h6>
                            {label}
                        </h6>
                    </th>
                );
            } else {
                return (
                    <th scope="colgroup">
                        <h5>
                            {label}&nbsp;
                            <span className="lc-tooltip" data-toggle="tooltip" role="tooltip" data-original-title="" title=""><span className="cf-icon cf-icon-help-round"></span></span>
                        </h5>
                    </th>
                );
            }
        };
        var loans = this.props.loans.map(function (loan) {
            return (
                <LoanOutputCell loan={loan} prop={this.props.prop} resultType={this.props.resultType} />
            )
        }, this);
        var resultType = this.props.resultType,
            prop = this.props.prop,
            label = this.props.label;
        return (
            <tr className={this.displayClassNames(resultType)}>
                {headingType(prop, resultType, label)}
                {loans}
            </tr>
        );
    }
});

var LoanOutputRowPrimaryHeading = React.createClass({
    headingIcon: function(prop) {
        var icon = 'cf-icon cf-icon-';
        if (prop === 'closing-costs') {
            icon += 'mortgage';
        } else if (prop === 'monthly-payment') {
            icon += 'date';
        } else if (prop === 'overall-costs') {
            icon += 'owning-home';
        }
        return icon;
    },
    render: function() {
        return (
            <th scope="row" className="lc-primary-result-heading">
                <h4 className="results-section-heading">
                    <span className={this.headingIcon(this.props.prop)}></span>&nbsp;
                    {this.props.label}
                </h4>
                <span className="expandable_header-right expandable_link">
                    <span className="expandable_cue-open">
                        <span className="u-visually-hidden">Show</span>
                        <span className="cf-icon cf-icon-plus-round"></span>
                    </span>
                    <span className="expandable_cue-close">
                        <span className="u-visually-hidden">Hide</span>
                        <span className="cf-icon cf-icon-minus-round"></span>
                    </span>
                </span>
            </th>
        )
    }
});

module.exports = LoanOutputRow;