var common = {};

common.loanCount = 2;

common.minDownpaymentPcts = {
    fha: .035,
    fhaPercent: 3.5,
    conf: .05,
    confPercent: 5
};

common.armDisallowedOptions = {
    'loan-term': ['15'],
    'loan-type': [ 'fha', 'va', 'va-hb', 'fha-hb']
};

common.scenarios = [
    {
        val: 'downpayment',
        title: 'Down Payment',
        label: 'down payment',
        intro: "Your down payment amount affects all aspects of your costs. Putting down less up front can be a good option for home buyers without a lot of cash on hand, but you’ll have higher monthly payments and pay more in interest and fees. This tool will help you get a sense of how much the difference in costs is likely to be, so you can make tradeoffs.",
        loanProps: [
            {downpayment: 40000}, 
            {downpayment: 20000}
        ],
        sharedProps: {},
        inputNotes: {
            'downpayment': "We've chosen two common down payment amounts. Feel free to adjust these numbers.", 
            'loan-amount': "The lower your down payment, the higher the amount you need to borrow.", 
            'interest-rate': "You'll often pay a higher interest rate with a lower down payment, but how much higher depends on your credit score and the particular lender."
        },
        independentInputs: ['downpayment', 'downpayment-percent', 'interest-rate'],
        outputNotes: {
            'cash-to-close': "A lower down payment means you'll need less cash at the closing table, but you may pay more in fees.", 
            'insurance': "With a conventional loan, mortgage insurance is typically paid as part of your monthly payment, not upfront.", 
            'monthly-principal-interest': "With a lower down payment, you have more to pay back each month, and you're paying interest on a larger loan amount.", 
            'monthly-mortgage-insurance': "With a low down payment loan (less than 20%), you'll need to pay for mortgage insurance. Learn more.", 
            'overall-cost': "Overall, you'll pay more in interest and fees with a low down payment loan."
        }
    }
];

common.defaultScenario = common.scenarios[0];

common.inputTooltips = {
    'state': 'State tooltip'
}

// Options can be an array of objects with "label" & "val" properties,
// or a string representing a property on another object (prob. loan)
// that will return such an array.
common.options = {
    'state': [
        {"label": "Alabama", "val": "AL"},
        {"label": "Alaska", "val": "AK"},
        {"label": "Arizona", "val": "AZ"},
        {"label": "Arkansas", "val": "AR"},
        {"label": "California", "val": "CA"},
        {"label": "Colorado", "val": "CO"},
        {"label": "Connecticut", "val": "CT"},
        {"label": "Delaware", "val": "DE"},
        {"label": "District Of Columbia", "val": "DC"},
        {"label": "Florida", "val": "FL"},
        {"label": "Georgia", "val": "GA"},
        {"label": "Hawaii", "val": "HI"},
        {"label": "Idaho", "val": "ID"},
        {"label": "Illinois", "val": "IL"},
        {"label": "Indiana", "val": "IN"},
        {"label": "Iowa", "val": "IA"},
        {"label": "Kansas", "val": "KS"},
        {"label": "Kentucky", "val": "KY"},
        {"label": "Louisiana", "val": "LA"},
        {"label": "Maine", "val": "ME"},
        {"label": "Maryland", "val": "MD"},
        {"label": "Massachusetts", "val": "MA"},
        {"label": "Michigan", "val": "MI"},
        {"label": "Minnesota", "val": "MN"},
        {"label": "Mississippi", "val": "MS"},
        {"label": "Missouri", "val": "MO"},
        {"label": "Montana", "val": "MT"},
        {"label": "Nebraska", "val": "NE"},
        {"label": "Nevada", "val": "NV"},
        {"label": "New Hampshire", "val": "NH"},
        {"label": "New Jersey", "val": "NJ"},
        {"label": "New Mexico", "val": "NM"},
        {"label": "New York", "val": "NY"},
        {"label": "North Carolina", "val": "NC"},
        {"label": "North Dakota", "val": "ND"},
        {"label": "Ohio", "val": "OH"},
        {"label": "Oklahoma", "val": "OK"},
        {"label": "Oregon", "val": "OR"},
        {"label": "Pennsylvania", "val": "PA"},
        {"label": "Puerto Rico", "val": "PR"},
        {"label": "Rhode Island", "val": "RI"},
        {"label": "South Carolina", "val": "SC"},
        {"label": "South Dakota", "val": "SD"},
        {"label": "Tennessee", "val": "TN"},
        {"label": "Texas", "val": "TX"},
        {"label": "Utah", "val": "UT"},
        {"label": "Vermont", "val": "VT"},
        {"label": "Virginia", "val": "VA"},
        {"label": "Washington", "val": "WA"},
        {"label": "West Virginia", "val": "WV"},
        {"label": "Wisconsin", "val": "WI"},
        {"label": "Wyoming", "val": "WY"}
    ],
    'credit-score': [
        {label: '600 - 619', val: '600'}, 
        {label: '620 - 639', val: '620'},
        {label: '640 - 659', val: '640'},
        {label: '660 - 679', val: '660'},
        {label: '680 - 699', val: '680'},
        {label: '700 - 719', val: '700'},
        {label: '720 - 739', val: '720'},
        {label: '740 - 759', val: '740'},
        {label: '760 - 779', val: '760'},
        {label: '780 - 799', val: '780'},
        {label: '800 - 819', val: '800'},
        {label: '820 - 839', val: '820'},
        {label: '840+', val: '840'}
    ],
    'rate-structure': [
        {label: 'Fixed', val: 'fixed'}, 
        {label: 'Adjustable', val: 'arm'}
    ],
    'arm-type': [
        {label: '3/1', val: '3-1'},
        {label: '5/1', val: '5-1'},
        {label: '7/1', val: '7-1'},
        {label: '10/1', val: '10-1'}    
    ],
    'loan-term': [
        {label: '30 years', val: '30'},
        {label: '15 years', val: '15'}
    ],
    'points': [
        {val: -2, label: '-2'},
        {val: -1, label: '-1'},
        {val: 0, label: '0'},
        {val: 1, label: '1'},
        {val: 2, label: '2'}
    ],
    'loan-type': [
        {val: 'conf', label: 'Conventional'},
        {val: 'fha', label: 'FHA'},
        {val: 'va', label: 'VA'}
    ],
    'interest-rate': 'rates',
    'county': 'counties'
}

common.errorMessages = {
    'downpayment-too-high': 'Your down payment cannot be more than your house price.',
    'downpayment-too-low-fha': 'FHA loans typically require a down payment of at least ' + common.minDownpaymentPcts.fhaPercent + '%.',
    'downpayment-too-low-conf': 'Conventional loans typically require a down payment of at least ' + common.minDownpaymentPcts.confPercent + '%.',
    'is-arm': 'While some lenders may offer FHA, VA, or 15-year adjustable-rate mortgages, they are rare. We don’t have enough data to display results for these combinations. Choose a fixed rate if you’d like to try these options.'
}

common.omit = function (obj) {
  var omitted = Array.prototype.slice.call(arguments, 1);
  var out = {};
  var props = Object.getOwnPropertyNames(obj);
  for (var i=0;i<props.length;i++) {
    var prop = props[i];
    if (omitted.indexOf(prop) < 0) {
      out[prop] = obj[prop];
    }
  }
  return out;
}

common.median = function (arr) {
    arr.sort( function(a,b) {return a - b;} );
    var half = Math.floor(arr.length / 2);
    return arr[half];
}

common.capitalizeFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

common.getPropLabel = function (prop) {
    label = common.propLabels[prop] || common.capitalizeFirst(prop.split('-').join(' '));
    return label;    
}

common.propLabels = {
    'downpayment': 'Down payment',
    'points':      'Discount point and credits',
    'arm-type':    'ARM type',
    'rate-structure': 'Rate type',
    'price': 'House price',
    'closing-costs': 'Cash to close',
    'discount': 'Discount points or credits',
    'processing': 'Origination and processing fees',
    'insurance': 'Mortgage insurance', 
    'taxes-gov-fees': 'Taxes and government fees', 
    'initial-escrow': 'Initial escrow deposit',
    'monthly-taxes-insurance': 'Monthly taxes and insurance',
    'monthly-hoa-dues': 'Monthly HOA dues', 
    'monthly-principal-interest': "Monthly principal and interest",
    'interest-fees-paid': 'Interest and fees paid'
};

module.exports = common;
